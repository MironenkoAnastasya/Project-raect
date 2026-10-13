import type { Product } from "./product"

export interface Carts {
  id: number,
  userId: number,
  date: string,
  products: ProductInCart[]
}

export interface ProductInCart {
    productId: string,
    quantity: number,
}

export interface CartItem extends Product{
    quantity: number
}