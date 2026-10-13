import { cartsApi } from "~/lib/api/carts";
import type { Route } from "./+types/carts";
import { useCartStore } from "~/store/useCartStore";
import ProductCard from "~/components/layout/productCard";
import { Link } from "react-router";
import { IoClose } from "react-icons/io5";





const Carts = () => {
    const productsInCarts  = useCartStore((state) => state.items);

    const deleteItems = useCartStore((state) => state.deleteItems);
    const removeItem = useCartStore((state) => state.removeItem);
    const totalPrice = useCartStore((state) => state.totalPrice);
    const addQuantity = useCartStore((state) => state.addQuantity);
    const deleteQuantity = useCartStore((state) => state.deleteQuantity);
    
    return (
        <div className='pl-5 w-7xl mx-auto py-5 '>

        {productsInCarts.map((product) => (
            <div className="bg-gray-100 flex items-center justify-between mb-4 px-4 py-2 rounded-lg ">
                 <div className='flex items-center gap-4 '>
                    
                        <img 
                            src={product.image} 
                            alt={product.title} 
                            className="w-24 h-24 object-contain" 
                        />
                        <Link to={`/products/${product.id}`} className='text-green-600 hover:underline font-bold text-sm h-[55px] overflow-hidden display-[-webkit-box] line-clamp-2 '>{product.title}</Link>

                    
                        </div>
                        <div className="flex items-center gap-6">
                        <p className="text-gray-900 font-bold text-base mt-2">{product.price}$</p>
                        <p className="text-gray-900 font-bold text-base mt-2">Кількість: {product.quantity}</p>
                         
                        <button onClick={() => deleteQuantity(product.id)} className="bg-red-600 text-white px-4 py-2 rounded-md">
                            -
                        </button>
                        <button onClick={() => addQuantity(product.id)} className="bg-green-600 text-white px-4 py-2 rounded-md">
                            +
                        </button>
                        
                        <p className="text-gray-900 font-bold text-base mt-2">{product.price * product.quantity}$</p>
                       
                        <button onClick={() => removeItem(product.id)}>
                        <IoClose size={30} className="text-red-700 hover:text-red-700" />
                        </button>
                        </div>

                        
                        
                
            </div>
        ))}
                    <div className="flex items-center justify-between">
                        <button onClick={() => totalPrice()} className="text-lg font-bold">
                            Всего: {totalPrice().toFixed(2)}$
                        </button>

                    <div className="flex gap-4">
                        <button onClick={() => deleteItems()} className="bg-red-600 text-white px-4 py-2 rounded-md">
                            Очистить корзину
                        </button>

                        <button className="bg-green-600 text-white px-4 py-2 rounded-md">
                            Оформить заказ
                        </button>
                    </div>
                    </div>
        
  

            
        </div>
    );
}

export default Carts