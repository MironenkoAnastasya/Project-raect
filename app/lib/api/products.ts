import type { Product } from "~/types/product"
import { BASE_URL } from "./base"


// все endpoint для товаров
export const productsApi = {
    // каждый  endpoint - отдеьная функция
    
    // все товары
    getAll: async (): Promise<Product[]> =>{
        const response = await fetch(`${BASE_URL}/products`) // запрос на сервер
        if(!response.ok){
            throw new Error(`Ощибка загрузки товаров ${response.statusText}`)
        }
        return response.json() // возвращаем ответ - все товары
    },

    // один товар
    getById: async (id: string): Promise<Product> =>{
        const response = await fetch(`${BASE_URL}/products/${id}`) // запрос на сервер
        if(!response.ok){
            throw new Error(`Ощибка загрузки товаров ${response.statusText}`)
        }
        return response.json() // возвращаем ответ
    },

    getByCategory: async (category: string): Promise<Product[]> =>{
        const response = await fetch(`${BASE_URL}/products/category/${encodeURIComponent(category)}`) // запрос на сервер
        if(!response.ok){
            throw new Error(`Ощибка загрузки товаров ${response.statusText}`)
        }
        return response.json() // возвращаем ответ - все товары
    },



    getByTitle: async (title: string): Promise<Product[]> =>{
        const response = await fetch(`${BASE_URL}/products/title/${encodeURIComponent(title)}`) // запрос на сервер
        if(!response.ok){
            throw new Error(`Ощибка загрузки товаров ${response.statusText}`)
        }
        return response.json() // возвращаем ответ - все товары
    },



}