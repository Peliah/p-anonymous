import React from 'react'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <div className='flex items-center justify-center bg-black'>
        <img src={require('../assets/images/ryukblack.jpg')} alt='deathnote' className='hidden lg:block object-contain items-center h-screen'/>
        <img src={require('../assets/images/Plain deathnote.jpg')} alt='deathnote' className='block lg:hidden object-contain h-screen'/>
      </div>
    </div>
  )
}

export default Home