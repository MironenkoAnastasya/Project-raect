import React from 'react';
import { Link } from 'react-router';
import type { Product } from '~/types/product';
import CartsButton from '../ui/CartsButton';


const ProductCard = ({product}: {product: Product}) => {
    return (
       
            <div key={product.id} className='bg-white rounded-2xl shadow-md border border-gray-200 p-6 flex flex-col relative'>
                        <div className="h-48 w-full flex items-center justify-center p-4 bg-gray-50 rounded-t-xl">
                        <img 
                            src={product.image} 
                            alt={product.title} 
                            className="max-h-full max-w-full object-contain" 
                        />
                        </div>
                        <Link to={`/products/${product.id}`} className='text-green-600 hover:underline font-bold text-lg h-[55px] overflow-hidden display-[-webkit-box] line-clamp-2 '>{product.title}</Link>
                        {/*<p className="text-gray-500 text-sm">{product.description}</p>*/}
                        <p className="text-gray-900 font-bold text-lg mt-2">{product.price}$</p>
                         <CartsButton product={product} />
                        
                    </div>
      
    );
}

export default ProductCard;