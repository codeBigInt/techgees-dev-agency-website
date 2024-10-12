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
    const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false)

    const toggleDarkMode = () => {
        setIsDarkTheme(!isDarkTheme)
        sessionStorage.setItem('darkMode', JSON.stringify(isDarkTheme))
    }

    useEffect(() => {
        const storedMode = sessionStorage.getItem('darkMode')
        if(storedMode){
            setIsDarkTheme(JSON.parse(storedMode))
        }else{
            setIsDarkTheme(false)
        }
    })

    return (
        <ThemeContext.Provider value={{ isDarkTheme, toggleDarkMode }}>
            <div>
                {children}
            </div>
        </ThemeContext.Provider>
    )
}

export default ThemeWrapper
