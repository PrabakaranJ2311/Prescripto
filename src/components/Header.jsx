import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row bg-primary rounded-lg px-6 md:m-15 md:px-10 lg:px-20'>

      {/* Left side */}
      <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vh] md:mb-[-30]'>



        <p className='text-3xl md:text-4xl lg:text-5xl text-white font-semibold'>Book Appointment <br className='hidden sm:block'/>With Trusted Doctors</p>
        <div className='flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light font-semibold'>
          <img className='w-28' src={assets.group_profiles}/>
        <p>Simply browse through our extensive lost of trusted doctors, <br/> schedule your appointment hassle-free</p>
        </div>
        <a href={'/login'} className='flex items-center gap-2 bg-white px-8 py-3 rounded-full text-sm m-auto md:m-0 hover:scale-105'>
          Book appointment <img src={assets.arrow_icon} alt="" />
        </a>

      </div>

      {/* Right Side */}
      <div className='md:w-1/2 relative'>
        <img className='w-full h-full md:absolute bottom-0 rounded-lg'src={ assets.header_img} alt="" />
      </div>
      
    </div>
  )
}

export default Header
