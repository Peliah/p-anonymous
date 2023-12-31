import React from 'react'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <div className='flex items-center justify-center bg-black min-h-screen'>
        <img src={require('../assets/images/ryukblack.jpg')} alt='deathnote' className='hidden lg:block'/>
        <img src={require('../assets/images/Plain deathnote.jpg')} alt='deathnote' className='block lg:hidden'/>
      </div>
    </div>
  )
}

export default Home