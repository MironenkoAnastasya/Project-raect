import React from 'react';
import { PiShoppingCartSimple } from 'react-icons/pi';
import { Link, NavLink } from 'react-router';
import { useCartStore } from '~/store/useCartStore';

const Header = () => {
       const cartProducts = useCartStore((state) => state.items);
    const cartCount = cartProducts.reduce((total, product) => total + product.quantity, 0);
       
    return (
         <header className='bg-gray-200'>
            <div className='flex w-7xl mx-auto items-center justify-between py-4 px-8'> 
                <nav className='flex gap-[30px]'>
                    <NavLink to="/" className={({ isActive }) => `transition-colors ${ isActive ? "text-primary" : "text-gray-700 hover:text-primary"}`}
                >Home</NavLink>
                    <NavLink to="/products" className={({ isActive }) => `transition-colors ${ isActive ? "text-primary" : "text-gray-700 hover:text-primary"}`}
                >Products</NavLink>
                <NavLink to="/apply" className={({ isActive }) => `transition-colors ${ isActive ? "text-primary" : "text-gray-700 hover:text-primary"}`}
                >Apply</NavLink>

                <NavLink to="/article" className={({ isActive }) => `transition-colors ${ isActive ? "text-primary" : "text-gray-700 hover:text-primary"}`}
                >Article</NavLink>
                
                <Link to="/carts" className='relative inline-flex items-center text-gray-700 hover:text-primary' ><PiShoppingCartSimple size={24} />
                    <div className='text-xs text-gray-700  absolute -top-2 -right-2 text-black bg- rounded-full w-4 h-4 flex items-center justify-center'>{cartCount}</div>
                    </Link>
                </nav>
            </div>
        </header>


    );
}

export default Header;
