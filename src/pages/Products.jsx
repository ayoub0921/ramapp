import React from 'react'
import { AiOutlineLeft } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Products = () => {
    return (
        <div>
            <section className='pt-5 md:hidden mx-auto w-[90%]'>
                <Link to="/signup"><AiOutlineLeft size={30} className='font-black' /></Link>
            </section>
            <div className='h-[100vh] w-full flex md:items-center justify-center'>
                <div className='md:w-[40%] w-[90%] ' >
                    <img className='mx-auto pb-16 pt-8 md:hidden' src="/images/logo.png" alt="logo" width='120px' />
                    <h3 className='font-bold text-xl'>Prix entrée: 200 dh</h3>
                    <div className='flex items-center space-x-5 py-4'>
                        <h3 className='font-semibold'>Billet</h3>
                        <div className='flex items-center space-x-2 '>
                            <button className='bg-[#c2002f] text-xl text-white  font-semibold rounded-full w-[26px] h-[26px] flex items-center justify-center'>-</button>
                            <span className='font-semibold text-xl'>3</span>
                            <button className='bg-[#c2002f] text-xl text-white font-semibold  rounded-full w-[26px] h-[26px] flex items-center justify-center'>+</button>
                        </div>
                        
                    </div>
                    <div className='flex items-center space-x-14'>
                        <h3 className='font-semibold'>Max</h3>
                        <span className='font-semibold text-xl'>3</span>
                        
                    </div>
                    <div className='flex items-center space-x-8 py-4'>
                        <h3 className='font-semibold'>Total:</h3>
                        <span className='font-semibold text-xl'>600 dh</span>
                        
                    </div>
                    <button className='red-btn mt-6'>Acheter</button>
                </div>
            </div>
        </div>
    )
}

export default Products