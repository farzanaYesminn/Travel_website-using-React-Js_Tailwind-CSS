import React, { useState } from 'react';
import { 

        FaBars,
        FaFacebookF,
        FaTwitter,
        FaGooglePlusG,
        FaInstagram,

        } from 'react-icons/fa';

const Navbar = () => {

  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div className='w-full min-h-[50px] flex justify-between items-center absolute z-10 text-white bg-gray-700/80'> 
        <ul className='hidden sm:flex px-4'>
            <li>
                <a herf='/'> Home </a>
            </li>
            <li>
                <a herf='#gallery'> Gallery </a>
            </li>
            <li>
                <a herf='#deals'> Deals </a>
            </li>
            <li>
                <a herf='#conatct'> Contact </a>
            </li>
        </ul> 

        <div className='flex justify-between'>
        <FaFacebookF className='mx-4 '/>
        <FaTwitter className='mx-4 '/>
        <FaGooglePlusG className='mx-4 '/>
        <FaInstagram className='mx-4 '/>
        </div>

        <div onClick={ handleNav } className='sm:hidden z-10'>
          <FaBars size={20} className='mr-4 cursor-pointer' />
        </div>
        <div 
        onClick={handleNav}
        className={
          nav 
          ? 'overflow-y-hidden md:hidden ease-in duration-300 absolute text-gray-300 left-0 top-0 w-full h-screen bg-black/90 py-7 px-4 flex flex-col' 
          : 'absolute top- h-screen left-[-100%] ease-in duration-300'}>
          <ul className='h-full w-full text-center pt-12'>
              <li className='text-2xl py-8'>
                  <a herf='/'> Home </a>
              </li>
              <li className='text-2xl py-8'>
                  <a herf='#gallery'> Gallery </a>
              </li>
              <li className='text-2xl py-8'>
                  <a herf='#deals'> Deals </a>
              </li>
              <li className='text-2xl py-8'>
                  <a herf='#conatct'> Contact </a>
              </li>
          </ul> 
        </div>

    </div>
  )
}

export default Navbar