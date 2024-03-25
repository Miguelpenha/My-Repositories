import { useEffect } from 'react'
import gsap from 'gsap'
import theme from '../../styles/theme'

function useAnimation() {
    useEffect(() => {
        gsap.to('#header', {
            top: '3%',
            opacity: 1,
            duration: 1,
            backgroundColor: theme.glassSecondary
        })

        gsap.to('#header>.find', {
            opacity: 1,
            delay: 0.5,
            duration: 0.5
        })
    }, [])
}

export default useAnimation