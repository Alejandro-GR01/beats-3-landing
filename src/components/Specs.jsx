import React, { useState } from 'react'
import specsImg from '../assets/specs.png'
import { specsItems } from '../constants'

const Specification = ({ children, title, description }) => {

    return (
        <li className="flex flex-col gap-1 max-w-36">
            {children}
            <p className="text-gray-130">{title}</p>
            <p className="text-xs text-gray-paragraph">{description}</p>
        </li>
    )
}

const Specs = () => {

    const [specsHover, setSpecsHover] = useState(-1)

    return (
        <section id='specs' >
            <div className="container">
                <div className="flex flex-col items-center gap-16 md:gap-9 max-w-130 mx-auto">
                    <h2>Specs</h2>

                    <div className="relative w-full flex justify-between items-start ">
                        <ul className="flex flex-col gap-6 pl-5 " style={{ perspective: '900px' }}>
                            {specsItems.map((item, index) => (

                                <li
                                    key={index}
                                    id={`spec-${index}`}
                                    className={`flex flex-col gap-1 max-w-36 specs-item `}
                                    onMouseEnter={() => setSpecsHover(index)}
                                    style={{
                                        transformStyle: 'preserve-3d',
                                        transform: index === specsHover ? 'translateX(-18px) translateZ(30px) scale(1.06)' :
                                            index === specsHover + 1 || index === specsHover - 1 ? 'translateX(-10px) translateZ(10px) scale(1.01)' :
                                            'translateX(0) translateZ(0) scale(1)',
                                           transition: index === specsHover ? 'transform .8s cubic-bezier(.2,.8,.2,1)' :
                                               (index === specsHover + 1 || index === specsHover - 1) ? 'transform 1s cubic-bezier(.2,.8,.2,1)' :
                                               'transform .8s cubic-bezier(.2,.8,.2,1)',
                                        willChange: 'transform',
                                        boxShadow: index === specsHover ? '0 12px 30px rgba(0,0,0,0.12)' : 'none'
                                    }}
                                >
                                    <img src={item.svg} alt={`icon-${item.title.toLowerCase()}`} height="25" width="25" />
                                    <p className="text-gray-130">{item.title}</p>
                                    <p className="text-[13px] text-gray-paragraph">{item.description}</p>
                                </li>
                            ))}
                        </ul>

                        <img
                            src={specsImg}
                            alt="beats-specs image" height='270px' width='250px'
                            className='h-67.5 w-auto md:h-81 -mr-12 md:-mr-8 sticky top-5  '
                        />

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Specs