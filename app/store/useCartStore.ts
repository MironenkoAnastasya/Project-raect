import { create } from 'zustand'
import type { Product } from '~/types/product'
import { persist } from 'zustand/middleware'
export interface CartItem extends Product {
    quantity: number
}
interface CartState {
    items: CartItem[],
    toggleCart: (product: Product)=> void;
    isCart: (productId: number) => boolean;
    removeItem: (productId: number) => void;
    addQuantity: (productId: number) => void; 
    deleteQuantity: (productId: number) => void;
    deleteItems: () => void;
    totalPrice: () => number
}
 
export const useCartStore = create<CartState>()(persist(
    (set, get)=>({
        items: [],
        toggleCart:(product)=>{
            const exists = get().items.some(item=> item.id === product.id);
            if(exists){
                set({items: get().items.filter(item=> item.id !== product.id)});
            }else{
                set({items: [...get().items, {...product, quantity: 1}]});
            }
        },
        isCart: (productId) => get().items.some(item=> item.id === productId),
        removeItem: (productId) => set({items: get().items.filter(item=> item.id !== productId)}),
        addQuantity: (productId) => set({items: get().items.map(item=> item.id === productId ? {...item, quantity: item.quantity + 1} : item)}),
        deleteQuantity: (productId) => set({items: get().items.map(item=> item.id === productId ? {...item, quantity: item.quantity - 1} : item).filter(item => item.quantity > 0)}),
        deleteItems: () => set({items: []}),
        totalPrice: () => get().items.reduce((total, item) => total + item.price * item.quantity, 0)
    }), {name: "cart-store", skipHydration: true}
))