import { TextField } from '@mui/material'
import React from 'react'
import { AiOutlineLeft } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Secure = () => {
    return (
        <div>

            <section className='pt-5 md:hidden mx-auto w-[90%]'>
                <Link to="/signup"><AiOutlineLeft size={30} className='font-black' /></Link>
            </section>
            <div className='h-[100vh] w-full flex md:items-center justify-center my-10'>
                <form className='md:w-[40%] w-[80%] ' >
                    <img className='mx-auto pb-16 pt-8 md:hidden' src="/images/logo.png" alt="logo" width='120px' />
                    <div className='flex flex-col items-center space-y-10'>
                        <TextField className='w-full' label="Mot de passe*" variant='standard' type='password' placeholder='8 Caractéres' />
                        <TextField className='w-full' variant='standard' type='password' label='Confirmer mot de passe*' />
                    </div>
                    <Link to="/verification">
                        <button className='red-btn my-12'>Connexion</button> 
                    </Link>
                </form>
            </div>
        </div>
    )
}

export default Secure