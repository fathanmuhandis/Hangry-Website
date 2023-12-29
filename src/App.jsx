import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Restaurant from './components/Restaurant'
import Partner from './components/Partner'

function App() {
  return ( 
    <div className='font-Inter'>
      <Navbar/>
      <Banner/>
      <Restaurant/>
      <Partner/>
    </div>
  )
}

export default App
