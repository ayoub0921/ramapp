import React from 'react'
import {AiOutlineLeft} from 'react-icons/ai'
import { useLocation } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <section className='bg-[#c2002f] shadow-sm md:block hidden'>
                <div className='w-[80%] mx-auto'>
                    <img src="/images/logo.png" alt="logo" width='120px' />
                </div>
            </section>
        </header>
    )
}

export default Header