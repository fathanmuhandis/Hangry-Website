import React from 'react'
import { FaArrowRight } from "react-icons/fa";

const Card = ({ logoSrc, imageSrc, title, description }) => {
    return (
        <div className='lg:space-y-5 w-full h-full relative'>
            <div>
                <div className='w-3 md:w-24 p-4 m-2 md:m-6 rounded-full absolute bg-white'>
                    <img className="w-full" src={logoSrc} />
                </div>
                <img className="w-full h-full md:w-96 md:h-96 object-cover rounded-3xl" src={imageSrc} />
            </div>
            <div className='md:space-y-2'>
                <div className='flex items-center space-x-3 md:space-x-4'>
                    <p className="text-lg md:text-3xl font-bold">{title}</p>
                    <FaArrowRight className='text-sauce nd:text-2xl' />
                </div>
                <p className="text-xs md:text-xl text-[#5A5A5A]">{description}</p>
            </div>
        </div>
    )
}

export default Card