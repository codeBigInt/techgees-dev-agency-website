import { BackgroundLines } from "@/components/ui/background-lines";
import React from "react";
import Button from "./Button";
import { RiWhatsappFill } from "react-icons/ri";

export function BackgroundLinesDemo() {
    return (
        <BackgroundLines className="flex items-center bg-transparent justify-center w-full flex-col px-4">
                <div className='flex flex-col gap-4 pt-20 items-center text-center font-bold capitalize text-[20px] max-md:text-[24px] md:text-[32px] w-[90%] md:w-[65%]'>
                    <span className='text-primary-main w-max bg-[#DBD5FF] bg-opacity-40 rounded-lg p-2'>let's build your dream website</span>{" "}
                    <span className="text-[20px]">& Connect you with potential customers across the Globe </span>
                    <p className="text-sm font-light text-gray-600">We are dedicated to creating aesthetic user interfaces for business helping them reach out to customers form any part of the world</p>
                </div>
                <div className='flex flex-col w-full md:justify-center cursor-pointer md:flex-row items-center gap-6 py-6'>
                    <Button className='bg-btn text-white md:w-max w-[50%]' variant='bordered' color='primary'>
                        Visit Our Blog
                    </Button>
                    <Button className='border-primary-yellow text-primary-yellow md:w-max w-[50%]' variant='bordered' color='secondary' icon={<RiWhatsappFill size={20} />}>
                        Let's Talk
                    </Button>
                </div>
        </BackgroundLines>
    );
}
