import React, { useState } from 'react'
import {assets} from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {

  //state for login and logout 
  const [ isLogin, setIsLogin ] = useState( false )

  const navigate = useNavigate()
  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 md:mx-15 border-b border-b-gray-400'>

      <img className='w-44 cursor-pointer' src={ assets.logo } />

      <ul className='hidden md:flex items-center gap-5 font-medium'>
      {/* Home content */}
       <NavLink to='/'  className={({ isActive }) => 
            isActive ? "text-primary" : "text-gray-600"
          }>
          <li className='py-1'>HOME</li> 
       </NavLink>

        {/* Doctors content */}
       <NavLink to='/doctors'  className={({ isActive }) => 
            isActive ? "text-primary" : "text-gray-600"
          }>
          <li className='py-1' >ALL DOCTORS</li>
       </NavLink>

       <NavLink to='#'>  
          <li className='py-1'>ABOUT</li>
       </NavLink>

       <NavLink to= '#'>
          <li className='py-1'>CONTACT</li>
       </NavLink>
     
      </ul>
      <div className='flex items-center gap-4 '>

        {
          isLogin ? 
          <div>
            <button 
            onClick={ () => { navigate( '/'),setIsLogin(false)}}
            className='bg-primary text-white py-3 px-8 font-light  rounded-full '>Logout</button>
          </div> 
          : 
          <div>
            <button 
            onClick={ () =>  { navigate('/login'), setIsLogin(true) } }
            className='bg-primary text-white py-3 px-8 font-light  rounded-full '>Login</button>
          </div>
        }
      </div>
      
    </div>
  )
}

export default Navbar