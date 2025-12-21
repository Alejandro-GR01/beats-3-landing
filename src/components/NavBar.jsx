import  {  useState } from 'react'
import { navLinks } from '../constants'


import burger from '../assets/amburger-icon.svg'
import logo from '../assets/logo-nav.svg'

const NavBar = () => {
   const [navShow, setNavShow] = useState(false)

 


    return (
        <nav id='navbar' onMouseLeave={()=>{ setNavShow(false)}} className='text-white absolute w-svw  z-20 top-0'>
            <div className='container pt-6'>
                <div  className='w- flex  justify-between items-center pb-4 md:pb-0  '>
                    <a href="#" className='button rounded-full'>
                    <img className='w-6 h-6 md:w-8 md:h-8' src={logo} alt="logo" />

                    </a>

                    <button onClick={()=> setNavShow((prev)=> !prev)} onMouseEnter={()=> setNavShow((prev)=> !prev)} className={`${navShow ? 'bg-gray-120' : 'bg-transparent'} p-2 h-10 w-10 rounded-full transition-colors duration-500 ease-out md:hidden button z-10`} type='button'>
                        <img src={burger} alt="open menu " />
                    </button>
                   
                    <div className={`${navShow ? 'translate-y-0 opacity-100 ' : '-translate-y-[70svh] opacity-0  '} right-4  md:translate-y-0 md:opacity-100 py-4 pt-6 md:h-auto overflow-hidden transition-all duration-500 ease-in-out bg-gray-120  rounded-lg md:bg-transparent  absolute top-full md:right-0    px-6 md:py-0 md:px-0 md:relative flex flex-col md:flex-row gap-6 md:gap-24 items-center`}>
                        <ul className='flex flex-col md:flex-row justify-between items-center gap-6 md:gap-14'>
                            {navLinks.map(link => (
                                <li key={link.label}>
                                    <a className='font-bold text-base nav-link' href={link.url}>{link.label}</a>
                                </li>
                            ))}
                        </ul>

                        <button type='button' className='text-15px font-normal button  bg-black-120 md:bg-gray-120 py-4 px-10 md:px-14 rounded-lg m-2' >Shop</button>
                    </div>

                    
                </div>
            </div>
        </nav>
    )
}

export default NavBar