import React from 'react'
import Card from './Card'
import ayamkoploLogo from '../assets/ayamkoplo_logo.png';
import ayamkoploMenu from '../assets/ayamkoplo_menu.jpg';
import sangyuLogo from '../assets/sangyu_logo.png';
import sangyuloMenu from '../assets/sangyu_menu.jpg';
import budesariLogo from '../assets/budesari_logo.png';
import budesariMenu from '../assets/budesari_menu.jpg';

const data = [
    {
        id: 1,
        logoSrc: ayamkoploLogo,
        imageSrc: ayamkoploMenu,
        title: 'Ayam Koplo',
        description: 'Ayam Geprek · Indonesia 1',
    },
    {
        id: 2,
        logoSrc: sangyuLogo,
        imageSrc: sangyuloMenu,
        title: 'San Gyu',
        description: 'Beef Bowl · Jepang ',
    },
    {
        id: 3,
        logoSrc: budesariLogo,
        imageSrc: budesariMenu,
        title: 'Bude Sari',
        description: 'Nasi Ayam · Indonesia ',
    },
];

const Restaurant = () => {
    return (
        <div className='flex flex-col px-40 py-12 space-y-6'>
            <h1 className='font-bold text-5xl text-[#303030]'>Hangry! adalah restoran dengan beragam brand</h1>
            <p className='font-medium text-2xl text-[#707070]'>Kami menyajikan beragam brand untuk menemani setiap waktu santapmu</p>
            <div className='overflow-x-auto flex-row flex space-x-10'>
                {data.map((item) => (
                    <Card
                        key={item.id}
                        logoSrc={item.logoSrc}
                        imageSrc={item.imageSrc}
                        title={item.title}
                        description={item.description}
                    />
                ))}
            </div>
        </div>
    )
}

export default Restaurant