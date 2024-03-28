import { useEffect } from 'react'
import gsap from 'gsap'
import theme from '../../styles/theme'

function useAnimation() {
    useEffect(() => {
        gsap.to('#header>.balls>.first', {
            delay: 0.5,
            borderRadius: '20px'
        })

        gsap.to('#header>.balls>.second', {
            delay: 0.5,
            borderRadius: '20px'
        })

        gsap.to('#header>.balls>.first, #header>.balls>.second', {
            flex: 0.5,
            delay: 0.7,
            duration: 1.5,
            onComplete() {
                gsap.to('#header>.balls>.first', {
                    borderRadius: '20px 0 0 20px'
                })

                gsap.to('#header>.balls>.second', {
                    borderRadius: '0 20px 20px 0'
                })

                gsap.to('#header', {
                    backgroundColor: theme.glass
                })

                gsap.to('#header>.balls>.first, #header>.balls>.second', {
                    opacity: 0,
                    onComplete() {
                        gsap.to('#header>.balls>.first, #header>.balls>.second', {
                            display: 'none',
                            visibility: 'hidden',
                        })

                        gsap.to('#header', {
                            padding: '1.5em 2em',
                            boxShadow: '0 5px 15px rgb(0 0 0 / 30%)',
                            onComplete() {
                                gsap.to('#header>.title', {
                                    x: 0,
                                    opacity: 1,
                                    duration: 0.5
                                })
        
                                gsap.to('#header>.find', {
                                    opacity: 1,
                                    duration: 0.5
                                })
                            }
                        })
                    }
                })
            }
        })
    }, [])
}

export default useAnimation