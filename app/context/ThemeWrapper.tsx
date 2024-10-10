"use client"
import { cn } from '@/lib/utils'
import React, { useEffect, useState } from 'react'

export type ThemeContextType = {
    isDarkTheme: boolean
    toggleDarkMode: () => void
}

type ThemeProp = {
    children: React.ReactNode
}

export const ThemeContext = React.createContext<ThemeContextType>({
    isDarkTheme: false,
    toggleDarkMode: () => {},   
})

const ThemeWrapper = ({ children }: ThemeProp) => {
    const [isDarkTheme, setIsDarkTheme] = useState<boolean>(() => {
        const storedMode = localStorage.getItem('darkMode')
        return storedMode ? JSON.parse(storedMode) : false
    })

    const toggleDarkMode = () => {
        setIsDarkTheme(!isDarkTheme)
        localStorage.setItem('darkMode', JSON.stringify(isDarkTheme))
    }

    // useEffect(() => {
    //     const storedMode = localStorage.getItem('darkMode')
    //     if(storedMode){
    //         setIsDarkTheme(JSON.parse(storedMode))
    //     }else{
    //         setIsDarkTheme(false)
    //     }
    // })

    return (
        <ThemeContext.Provider value={{ isDarkTheme, toggleDarkMode }}>
            <div>
                {children}
            </div>
        </ThemeContext.Provider>
    )
}

export default ThemeWrapper
