import { TextField } from '@mui/material'
import React from 'react'
import { AiOutlineLeft } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Verifaction = () => {
    return (
        <div>
            <section className='pt-5 md:hidden mx-auto w-[90%]'>
                <Link to="/confirmation"><AiOutlineLeft size={30} className='font-black' /></Link>
            </section>
            <div className='h-[100vh] w-full flex md:items-center justify-center '>
                <form className='md:w-[40%] w-[80%]' >
                    <img className='mx-auto pb-16 pt-8 md:hidden' src="/images/logo.png" alt="logo" width='120px' />
                    <h3 className='text-[#c2002f] font-semibold text-center pb-16 pt-10 text-2xl'>Verification email</h3>
                    <TextField id="outlined-basic" type='number' className='w-full' label="code de verification*" variant="outlined" />
                    <p className='text-center text-gray-500 pt-8 font-semibold'>Vous n'avez pas reçu le code ? <span className='text-red-500'>Renvoyez</span></p>
                </form>
            </div>
        </div>
    )
}

export default Verifaction