import React, { useState } from 'react';
import ProductCard from '~/components/layout/productCard';
import type { Route } from './+types/products';
import { productsApi } from '~/lib/api/products';
import CartsButton from '~/components/ui/CartsButton';

export async function loader() {
    const products = await productsApi.getAll()
    return products;
}
const PAGE_SIZE = 6;
const Products = ({loaderData}: Route.ComponentProps) => {
   
    const products  = loaderData;
    console.log(products.length)
 
    return (
            <div className='bg-gray-100 min-h-screen text-gray-900'>
           
        
            <h1 className='text-3xl font-bold mb-6'>Products</h1>

            <div className=' grid grid-cols-3 w-2/3 mx-auto gap-6'>
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}

              


            </div>
            
        </div>

    );
}

export default Products;
