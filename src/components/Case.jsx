
import { useRef } from 'react'
import caseImage from '../assets/case.png'
import caseAvif from '../assets/case.avif'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


const Case = () => {
    const case_container = useRef(null)

    useGSAP(() => {

        gsap.registerPlugin(ScrollTrigger)

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '#case-section',
                start: 'top 40%',
                end: 'center top'
            }
        })

        tl.from('.case-heading', {
            y: 20,
            opacity: 0,
            duration: 0.2
        })
            .from('.case-image', {
                x: -100,
                duration: 0.5,
                ease: 'powe2.out',
                opacity: 0
            }).from('.case-content', {
                x: -100,
                duration: 1,
                ease: 'power2.out',
                opacity: 0
            })

    }, [{ scope: case_container }])

    return (
        <section ref={case_container} id="case-section">
            <div className="container">
                <div className="flex flex-col items-center gap-16 md:gap-9 mx-auto">
                    <h2 className='case-heading'>Case</h2>
                    <div className=" flex md:gap-20 ">
                        <picture>
                            <source srcSet={caseAvif} type="image/avif" />
                            <img src={caseImage} alt="case image" width={250} height={349} className='case-image -translate-x-[40%] md:translate-x-0 md:ml-0 w-60 md:w-75 h-auto' />
                        </picture>



                        <div className='case-content flex flex-col   justify-center items-start gap-9 md:gap-11 max-w-61 -ml-5 md:ml-0  '>
                            <p className='paragraph text-[15px]! md:text-base!'>With a comfortable and adaptable case so that you can store it whenever you want, and keep your durability forever.</p>


                            <div role='button' tabIndex={0} className='w-fit button flex items-center gap-3 bg-gray-120 px-5 py-3 rounded-lg text-white'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                                    <path d="M12.4997 22.9166C18.2526 22.9166 22.9163 18.2529 22.9163 12.4999C22.9163 6.74695 18.2526 2.08325 12.4997 2.08325C6.74671 2.08325 2.08301 6.74695 2.08301 12.4999C2.08301 18.2529 6.74671 22.9166 12.4997 22.9166Z" stroke="#F8F8F8" stroke-width="2.08333" />
                                    <path d="M12.5 7.2915V13.5415M12.5 17.1873V17.7082" stroke="#F8F8F8" stroke-width="2.08333" stroke-linecap="round" />
                                </svg>
                                <p className='text-[15px] '>More info</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Case