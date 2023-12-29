import React from 'react';
import Logo_Hangry from '../assets/Logo_Hangry.svg'

const Navbar = () => {
    return (
        <nav className='flex flex-row items-center p-6 justify-between px-40'>
            <img src={Logo_Hangry}/>
            <ul className='flex flex-row space-x-12 font-medium text-lg'>
                <li>
                    <a href="tentangkami">Tentang Kami</a>
                </li>
                <li>
                    <a href="#semuaoutlet">Semua Outlet</a>
                </li>
                <li> 
                    <a href="promo">Promo</a>
                </li> 
                <li>
                    <a href="karier">Karier</a>
                </li>
                <li className='font-semibold text-sauce'>
                    <a href="downloadapp">Download App</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
