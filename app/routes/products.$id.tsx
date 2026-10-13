import React from 'react';
import { productsApi } from '~/lib/api/products';
import type { Route } from './+types/products.$id';
import CartsButton from '~/components/ui/CartsButton';

export async function loader({params}: Route.LoaderArgs){
    const product = await productsApi.getById(params.id);
    return product;
}

const ProductDetail = ({loaderData}: Route.ComponentProps) => {
    const product = loaderData;
    return (
        <div className='max-w-5xl mx-auto p-6'>
            
           
            <div className='grid grid-cols-2 gap-10 items-start mt-6'>
                
               
                <div className='flex flex-col gap-4'>
                    <h1 className='text-2xl font-bold text-gray-900'>{product.title}</h1>
                    
                    <div className='bg-white p-6 border rounded-2xl flex justify-center items-center h-[380px]'>
                        <img 
                            src={product.image} 
                            alt={product.title} 
                            className="max-h-full max-w-full object-contain" 
                        />
                    </div>
                </div>

                <div className='flex flex-col justify-between h-full pt-12 gap-6'>
                    <div className='flex flex-col gap-4'>
                        <p className="text-gray-600 leading-relaxed">{product.description}</p>
                        <p className="text-3xl font-extrabold text-orange-500">{product.price} $</p>
                    </div>

                   
                    <div className="flex items-center gap-6 mt-4">
                        
                       
                        <div className="relative w-6 h-6 scale-125">
                            <CartsButton product={product} />
                        </div>

                        
                        

                    </div>
                </div>

            </div>

        </div>
    );
}

export default ProductDetail;