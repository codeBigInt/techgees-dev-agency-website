"use client"
import React, { useContext } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { ThemeContext, ThemeContextType } from '../context/ThemeWrapper'
import { cn } from '@/lib/utils'
import { NextFont } from 'next/dist/compiled/@next/font'



const LandingLayout = ({ children, poppins }: { children: React.ReactNode, poppins: NextFont }) => {
    const { isDarkTheme } = useContext(ThemeContext)
    return (
        <body className={cn("w-full min-h-screen antialiased", {
            "bg-darkmode text-white": isDarkTheme,
            "bg-body text-[#1C163C]": !isDarkTheme
        }, poppins.className)}>
            <Navbar />
            <div className='w-full md:px-[10%] px-4'>
                {children}
            </div>
            <Footer />
        </body>
    )
}

export default LandingLayout
