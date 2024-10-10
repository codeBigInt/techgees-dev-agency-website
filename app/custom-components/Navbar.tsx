'use client';

import React, { useContext } from 'react'
import { PiPhoneCall } from "react-icons/pi";
import Button from './Button'
import Link from 'next/link';
import { useScrollHeight } from '../hookes/useScrollHeight';
import { CiLight } from "react-icons/ci";
import { CgDarkMode } from "react-icons/cg";
import { ThemeContext } from '../context/ThemeWrapper';

const Navbar = () => {
  const {toggleDarkMode, isDarkTheme} = useContext(ThemeContext)
  const scrollHeight = useScrollHeight()

  const navigation = [
    { link: 'About', href: '/' },
    { link: 'Services', href: '/our-sevrices' },
    { link: 'Blog', href: '/blog' },
    { link: "Academy", href: "/academy" }
  ]
  return (
    <div className='w-full md:px-[10%] z-[50] sticky top-0 px-4 bg-transparent flex items-center justify-between'>
      <div className={`w-full flex py-4 items-center ${scrollHeight > 10 && "bg-white glassy bg-opacity-20 shadow-sm mt-4 px-6 transition-all ease-in rounded-[50px]"}`}>
        <h3 className='font-bold text-xl'>TECH GEE</h3>
        <ul className='md:flex hidden flex-1 justify-center items-center gap-8'>
          {
            navigation.map(route => (
              <Link href={route.href} className='hover:text-primary-main transition-all ease-in' key={route.link}>
                {route.link}
              </Link>
            ))
          }
        </ul>
        <div>
          <span>

          </span>
          <div className='flex items-center gap-3'>
            <button onClick={toggleDarkMode} className='bg-btn font-bold p-3 text-white rounded-full'>
              {isDarkTheme ? <CiLight /> : <CgDarkMode />}
            </button>
            <Button variant='bordered' color='secondary' icon={<PiPhoneCall size={20} />} className='border-primary-main hidden md:flex text-primary-main'>
              Contact us
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
