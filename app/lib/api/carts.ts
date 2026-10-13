import type { CartItem, Carts, ProductInCart } from "~/types/carts"
import { BASE_URL } from "./base"
import { productsApi } from "./products"

export const cartsApi = {
    // каждый  endpoint - отдеьная функция
    

    getById: async (id: string): Promise<Carts> =>{
            const response = await fetch(`${BASE_URL}/carts/${id}`) // запрос на сервер
            if(!response.ok){
                throw new Error(`Ощибка загрузки товаров ${response.statusText}`)
            }
            return response.json() // возвращаем ответ
        },

    getProducts: async (products: ProductInCart[]): Promise<CartItem[]> =>{
        // Product[]
            const items = await Promise.all(products.map(product => productsApi.getById(product.productId)))
        //Product+quantity []
            return items.map((product, index) => ({...product, quantity: products[index].quantity}))
        },
}