import React from 'react'
import { FaCheck } from "react-icons/fa";
import bulk_order from "../assets/bulk_order.jpg"

const Promo = () => {
    return (
        <div className='md:px-24 lg:px-40 flex flex-row items-center space-x-4'>
            <div className='flex flex-col space-y-10 w-1/2'>
                <h1 className='font-bold text-5xl text-[#303030] py-2'>Makin rame, makin hemat!</h1>

                <p className='font-medium text-2xl text-[#707070]'>Nikmati keuntungan dengan minimum pembelian 20 porsi menu apa aja. Cocok untuk hidangan segala acara!</p>
                <div>
                    <div className='space-y-6'>
                        <div className='flex items-center space-x-4'>
                            <FaCheck className='text-sauce text-2xl' />
                            <p className="text-2xl font-bold">Beragam pilihan menu</p>
                        </div>
                        <div className='flex items-center space-x-4'>
                            <FaCheck className='text-sauce text-2xl' />
                            <p className="text-2xl font-bold">Semua menu diskon 20%</p>
                        </div>
                        <div className='flex items-center space-x-4'>
                            <FaCheck className='text-sauce text-2xl' />
                            <p className="text-2xl font-bold">Gratis biaya kirim</p>

                        </div>
                    </div>
                    <div className='flex space-x-4'>
                        <FaCheck className='text-white text-2xl' />
                        <p className="text-sm font-bold text-[#707070]">*Syarat & ketentuan berlaku</p>
                    </div>
                </div>
                <button className='w-fit bg-sauce p-5 px-10 rounded-xl text-lg text-white font-bold'>Pesan Sekarang</button>
            </div>
            <div className='w-1/2 '>
                <img className='rounded-3xl' src={bulk_order} alt="bulk_order" />
            </div>
        </div>
    )
}

export default Promo