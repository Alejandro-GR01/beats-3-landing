import apple from '../assets/apple icon.svg'
import spotify from '../assets/spotify icon.svg'
import amazon from '../assets/amazon icon.svg'
import youtube from '../assets/youtube.svg'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'
import { useRef } from 'react'

const Sponsors = () => {
    const container = useRef(null)


    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger)
        


        // Animación individual de los iconos
        gsap.from('.sponsor-icon', {
            scrollTrigger: {
                trigger: '.sponsors-container',
                start: 'top bottom',
                end: 'top center',
            },
            x: -100,
            duration: 0.25,
            ease: 'power2.out',
            opacity: 0,
            delay : 0.3,
            stagger: 0.2,
        })
    }, [{ scope: container }])

    return (
        <section ref={container} id='sponsors'  >
            <div className='container'>
                <div className='sponsors-container flex flex-wrap justify-evenly md:justify-between items-center max-w-3xl mx-auto gap-4'>

                    <div className='sponsor-icon'>
                        <img src={apple} alt="apple icon" />
                    </div>
                    <div className='sponsor-icon'>
                        <img src={spotify} alt="spotify icon" />
                    </div>
                    <div className='sponsor-icon'>
                        <img src={amazon} alt="amazon icon" />
                    </div>
                    <div className='sponsor-icon'>
                        <img src={youtube} alt="youtube icon" />
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Sponsors