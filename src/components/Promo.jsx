import React from 'react'
import { FaCheck } from "react-icons/fa";

const Promo = () => {
    return (
        <div className='px-44'>
            <div className='flex flex-col'>
                <div className='flex flex-col'>
                    <h1 className='font-bold text-5xl text-[#303030] py-2'>Makin rame, makin hemat!</h1>
                    <p className='font-medium text-2xl text-[#707070]'>Nikmati keuntungan dengan minimum</p>
                    <p className='font-medium text-2xl text-[#707070]'>pembelian 20 porsi menu apa aja. Cocok untuk</p>
                    <p className='font-medium text-2xl text-[#707070]'>hidangan segala acara!</p>
                </div>
                <div className='space-y-2'>
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
                        <div>
                            <p className="text-2xl font-bold">Gratis biaya kirim</p>
                            <p className="text-sm font-bold text-[#707070]">*Syarat & ketentuan berlaku</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Promo