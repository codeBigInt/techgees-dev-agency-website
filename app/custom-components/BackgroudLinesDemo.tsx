"use client"
import { BackgroundLines } from "@/components/ui/background-lines";
import React, { useContext } from "react";
import Button from "./Button";
import { RiWhatsappFill } from "react-icons/ri";
import { TypewriterEffectSmooth } from "@/components/ui/typewritter";
import { ThemeContext } from "../context/ThemeWrapper";

export function BackgroundLinesDemo() {
    const {isDarkTheme} = useContext(ThemeContext)
    const words = [
        {
            text: "Lets",
        },
        {
            text: "Build",
        },
        {
            text: "Your",
        },
        {
            text: "Dream",
        },
        {
            text: "Website",
        },
    ];
    return (
        <BackgroundLines className="flex items-center bg-transparent justify-center w-full flex-col px-4">
            <div className='flex flex-col gap-4 pt-20 items-center text-center font-bold capitalize w-[90%] md:w-[65%]'>
                <span className='text-primary-main w-max bg-opacity-40 rounded-lg p-2 text-[24px] max-md:text-[24px] md:text-[28px]'><TypewriterEffectSmooth words={words} /></span>{" "}
                <span className="md:text-[20px] text-[18px]">& Connect you with potential customers across the Globe </span>
                <p className={`md:text-sm text-xs font-light  ${isDarkTheme ? "text-white" : "text-gray-600"}`}>We are dedicated to creating aesthetic user interfaces for business helping them reach out to customers form any part of the world</p>
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
