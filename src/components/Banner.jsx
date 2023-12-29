import React from 'react'
import google_play from '../assets/Button_Playstore.svg'
import app_store from '../assets/Button_AppsStore.svg'
import mockup from '../assets/mockup_apps.svg'

const Banner = () => {
    return (
        <div className='flex flex-row justify-between px-40 pt-16 bg-[#fafafa] space-x-20'>
            <div className='flex flex-col justify-center space-y-8 w-1/2'>
                <p className='font-bold text-3xl text-[#303030]'>Kamu laper atau haus?</p>
                <div className='space-y-4 text-[#303030]'>
                    <h1 className='text-7xl font-bold'>Tenang.. ada Hangry!</h1>
                    <h1 className='text-7xl font-bold'>yang siap mengatasi</h1>
                </div>
                <div className='flex flex-row justify-center space-x-20'>
                    <img className='w-1/3' src={google_play}/>
                    <img className='w-1/3' src={app_store}/>
                </div>
            </div>
            <div className='w-[40%]'>
                <img className='w-full mx-auto' src={mockup} />
            </div>
        </div>
    )
}

export default Banner