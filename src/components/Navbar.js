import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='flex w-full items-center justify-between fixed px-4 lg:h-20 h-20'>
        <div>
            <img src={require('../assets/images/fontbolt (2).png')} alt='logo' className='h-8 hidden lg:block'/>
        </div>
        <div>
          <Link className='border rounded-lg px-8 py-3 text-center font-bold text-white font-roboto-mono' to={'/diary'}>
            Open Diary
          </Link>
        </div>
    </nav>
  )
}

export default Navbar