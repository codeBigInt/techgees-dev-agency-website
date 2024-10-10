import React from 'react'
import bg from '../assets/Kits.png';
import vectors from '../assets/Vextors.png';
import Image from 'next/image';
import Button from './Button';
import { RiWhatsappFill } from "react-icons/ri";
import { BackgroundLinesDemo } from './BackgroudLinesDemo';

const LandingPageHero = () => {
  return (
    <div className='relative w-full flex flex-col items-center md:min-h-screen'>
      <BackgroundLinesDemo />
      <div className='relative w-full md:-translate-y-[45%] z-10'>
        <Image src={vectors} alt='bg' className='relative md:flex hidden w-full pointer-events-none' />
        <Image src={bg} alt='bg' className='absolute md:flex hidden md:-translate-y-[80%] -translate-y-[30%] w-full pointer-events-none' />
      </div>
    </div>
  )
}

export default LandingPageHero
