import React from 'react'
import gofood from "../assets/gofood_logo.svg"
import grabfood from "../assets/grabfood_logo.png"
import zomato from "../assets/zomato_logo.png"
import traveloka from "../assets/eatstraveloka_logo.png"

const Partner = () => {
    const grayScaleStyle = { filter: 'grayscale(100%)' };

    return (
        <div className='flex justify-center py-24'>
            <div className='flex flex-col justify-center'>
                <p className='font-medium text-[#5A5A5A] text-lg text-center'>Hangry! dapat kamu temukan di</p>
                <div className='flex flex-row space-x-36 py-12 '>
                    <img className='' style={grayScaleStyle} src={gofood} alt="GoFood" />
                    <img className='w-40' style={grayScaleStyle} src={grabfood} alt="GrabFood" />
                    <img className='w-40' style={grayScaleStyle} src={zomato} alt="Zomato" />
                    <img className='w-60' style={grayScaleStyle} src={traveloka} alt="Traveloka" />
                </div>
            </div>
        </div>
    )
}

export default Partner