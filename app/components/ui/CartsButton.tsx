import React from 'react';
import { PiShoppingCartSimple, PiShoppingCartSimpleFill } from 'react-icons/pi';
import { useCartStore } from '~/store/useCartStore';
import type { Product } from '~/types/product';


interface CartButtonProps {
    product: Product
}

const CartsButton = ({product}: CartButtonProps) => {
    const toggleCart = useCartStore((state) => state.toggleCart);
        const isCart = useCartStore((state) => state.isCart(product.id));

        const handleClick = () => {
        toggleCart(product);
    }

    return (
        <button className='absolute right-3 bottom-3' onClick={handleClick}>
            {isCart ?<PiShoppingCartSimpleFill size={24}  /> : <PiShoppingCartSimple size={24}/> }
        </button>
    );
}

export default CartsButton;