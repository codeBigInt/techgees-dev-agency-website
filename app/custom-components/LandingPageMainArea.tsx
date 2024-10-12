import React from 'react';
import Button from './Button';
import { IoChatbubblesOutline } from "react-icons/io5";
import ServiceList from './ServiceList';
import { HeroVideoDialogDemo } from './HeroVideoDialog';
import { Tabs } from '@/components/ui/tabs';
import { tabs } from '../assets/data/Servicestabs';

const LandingPageMainArea = () => {
  return (
    <div className='w-full flex flex-col items-center relative pt-10 md:pt-0'>
      <div className='w-full flex flex-col items-center'>
        <h3 className='md:text-[30px] text-[24px] self-center md:w-[60%] text-center font-bold'><span className='text-primary-main font-bold'>Business Experts'</span> Opinions on websites</h3>
        <p className='px-[10%] text-xs md:text-sm text-center text-gray-700'>Why Experts Say Not Having a Website Hurts Your Business. Watch to learn why!</p>
      </div>
      <section className='flex flex-col md:items-center gap-[40px] md:flex-row justify-between w-full md:gap-[8%] py-10'>
        <div className='rounded-xl md:w-[50%] w-full'>
          <HeroVideoDialogDemo />
        </div>
        <div className='flex flex-col gap-6 md:w-[50%] w-full'>
          <p className='text-center md:text-left'>
            Our website solutions keep you connected with customers 24/7, driving revenue growth. Our team is committed to delivering top-notch web development services that help your business thrive and boost high-quality conversions.
          </p>
          <div className='w-full flex justify-center md:justify-start'>
            <Button color='primary' className='text-white shadow-sm py-3 ' variant='borderless' icon={<IoChatbubblesOutline size={24} />}>
              Chat with Our Team
            </Button>
          </div>
        </div>
      </section>
      <div className="h-[30rem] md:h-[40rem] [perspective:1000px] relative flex flex-col max-w-5xl w-full  items-start justify-start md:my-40">
        <h3 className='md:text-[40px] text-[30px] font-bold py-6 w-full text-center md:text-left'>Our service</h3>
        <Tabs tabs={tabs} />
      </div>
    </div>
  )
}

export default LandingPageMainArea
