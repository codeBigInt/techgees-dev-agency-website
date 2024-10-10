import { cn } from '@/lib/utils'
import React from 'react'

type ButtonProps = {
    variant: "bordered" | "borderless"
    icon?: React.ReactNode
    color: "primary" | "secondary"
    children: React.ReactNode
    className: string
}

const Button = ({variant, icon, color, children, className}: ButtonProps) => {
  return (
    <button className={cn('flex gap-2 items-center py-3 md:px-6 px-4 justify-center rounded-lg', `${variant === "bordered" ? "bg-transparent border" : ""}`, {
        "bg-btn text-white": color === "primary",
        "bg-transparent": color === "secondary",
    }, className
    )}>
        {icon && <span>{icon}</span>}
        <span>{children}</span>
    </button>
  )
}

export default Button
