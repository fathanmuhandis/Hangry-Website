import React from 'react'
import { FaArrowRight } from "react-icons/fa";

const Card = ({ logoSrc, imageSrc, title, description }) => {
    return (
        <div className='space-y-5 w-full h-full'>
            <div>
                <div className='w-24 p-4 m-6 rounded-full absolute bg-white'>
                    <img className="w-full" src={logoSrc} />
                </div>
                <img className="w-96 h-96 object-cover rounded-3xl" src={imageSrc} />
            </div>
            <div className='space-y-2'>
                <div className='flex items-center space-x-4'>
                    <p className="text-3xl font-bold">{title}</p>
                    <FaArrowRight className='text-sauce text-2xl' />
                </div>
                <p className="text-xl text-[#5A5A5A]">{description}</p>
            </div>
        </div>
    )
}

export default Card