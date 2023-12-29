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
        <div className='flex flex-col w-full md:px-24 lg:px-40 py-24 space-y-6'>
            <h1 className='font-bold md:text-3xl lg:text-5xl text-[#303030]'>Hangry! adalah restoran dengan beragam brand</h1>
            <p className='font-medium text-sm md:text-base lg:text-2xl text-[#707070]'>Kami menyajikan beragam brand untuk menemani setiap waktu santapmu</p>
            <div className='overflow-x-auto flex-row flex flex-wrap sm:flex-nowrap space-x-2 items-center md:space-x-10 space-y-6'>
                {data.map((item) => (
                    <div key={item.id} className="w-2/5 xl:w-full">
                        <Card
                            logoSrc={item.logoSrc}
                            imageSrc={item.imageSrc}
                            title={item.title}
                            description={item.description}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Restaurant