import { useState } from "react"

export const useScrollHeight = () => {
    const [mediaScrollHeight, setMediaScrollHeight] = useState(window.screenY)
    const watchHeight = () => {
        setMediaScrollHeight(window.scrollY)
    }
    window.addEventListener('scroll', watchHeight)

    return mediaScrollHeight
}