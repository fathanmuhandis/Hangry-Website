import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Restaurant from './components/Restaurant'
import Partner from './components/Partner'
import Promo from './components/Promo'

function App() {
  return ( 
    <div className='font-Inter pb-40'>
      <Navbar/>
      <Banner/>
      <Restaurant/>
      <Partner/>
      <Promo/>
    </div>
  )
}

export default App
