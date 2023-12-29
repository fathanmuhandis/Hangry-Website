import React from 'react'
import google_play from '../assets/Button_Playstore.svg'
import app_store from '../assets/Button_AppsStore.svg'
import mockup from '../assets/mockup_apps.svg'

const Banner = () => {
    return (
        <div className='flex flex-row justify-between md:px-24 lg:px-40 pt-44 bg-[#fafafa] space-x-20'>
            <div className='flex flex-col justify-center space-y-8 w-1/2'>
                <p className='font-bold md:text-xl lg:text-3xl text-[#303030]'>Kamu laper atau haus?</p>
                <div className='space-y-4 text-[#303030]'>
                    <h1 className='text-2xl md:text-4xl lg:text-7xl font-bold'>Tenang.. ada Hangry! yang siap mengatasi</h1>
                </div>
                <div className='flex flex-row justify-center space-x-8 lg:space-x-20 pb-28'>
                    <img className='w-1/3' src={google_play}/>
                    <img className='w-1/3' src={app_store}/>
                </div>
            </div>
            <div className='w-1/5 sm:w-[40%] relative'>
                <img className='w-full mx-auto absolute bottom-0' src={mockup} />
            </div>
        </div>
    )
}

export default Banner