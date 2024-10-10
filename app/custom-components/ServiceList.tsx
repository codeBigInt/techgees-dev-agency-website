'use client'
import React, { useState } from 'react'
import { services } from '../assets/data/Services'
import { cn } from '@/lib/utils'
import { FaArrowRight } from 'react-icons/fa'
import Button from './Button'
import { RiWhatsappFill } from 'react-icons/ri'

const ServiceList = () => {
    const [isHovered , setIsHovered] = useState(false)
    const [indx, setIndx] = useState<number | null>(null)
    return (
        <div className='w-full flex  flex-col items-center py-10'>
            <p className='text-primary-main text-[20px]'>What we offer</p>
            <h3 className='text-[40px] font-bold'>Our Services</h3>
            <ul className='flex flex-col md:flex-row w-full justify-center items-center gap-6 md:gap-[5%] pt-8'>
                {
                    services.map((service, index) => (
                        <li key={index} className={cn("flex flex-col md:w-[25%] w-[80%] transition-all ease-in-out delay-1000 rounded-xl min-h-[200px] px-6 pt-8 pb-6  gap-3", {
                            "bg-[#ADA0F0]": index === 0,
                            "bg-[#FAA2C3]": index === 1,
                            "bg-[#81A9FC]": index === 2,
                            "bg-[#FBE28D]": index === 3,
                        })}
                        onMouseOver={() => {
                            setIndx(index)
                            indx === index ? setIsHovered(true) : null
                        }}
                        onMouseOut={() => setIsHovered(false)}
                        >
                            <span className='p-4 text-[30px] bg-white bg-opacity-30 rounded-xl glassy w-max'>{service.icon}</span>
                            <h3 className='font-semibold'>{service.title}</h3>
                            <p className='text-xs'>{service.despcription}</p>
                            <span className='text-[14px] flex justify-end'>
                                {isHovered && indx === index && <span className='bg-white p-2 md:flex border shadow-md border-primary-main text-primary-main hidden items-center justify-center rounded-full w-max'><FaArrowRight size={20} /></span>}
                                <span className='bg-white p-2 md:hidden transition-all delay-1000 border shadow-md border-primary-main ease-in-out -rotate-45 text-primary-main flex items-center justify-center rounded-full w-max'><FaArrowRight size={20} /></span>
                            </span>
                        </li>
                    ))
                }
            </ul>
            <Button className='border-primary-yellow text-[20px] mt-10 text-primary-yellow md:w-max w-[50%]' variant='bordered' color='secondary' icon={<RiWhatsappFill size={20} />}>
            Get In Touch Now
          </Button>
        </div>
    )
}

export default ServiceList
