import { TextField } from '@mui/material'
import React from 'react'
import { AiOutlineLeft } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const SignIn = () => {
    return (
        <div>
            <section className='pt-5 md:hidden mx-auto w-[90%]'>
                <Link to="/signup"><AiOutlineLeft size={30} className='font-black' /></Link>
                <img className='mx-auto pt-16' src="/images/logo.png" alt="logo" width='120px' />
            </section>
            <div className='h-[100vh] w-full flex items-center justify-center'>
                <form className='md:w-[40%] w-[80%]' >
                    <div className='flex flex-col items-center space-y-10'>
                        <TextField className='w-full' type='email' label='Email*' variant='standard' id="standard-basic" />
                        <TextField className='w-full' type='password' label='Mot de passe' variant='standard' id="standard-basic" />
                    </div>
                    <button className='red-btn my-12'>Connexion</button>
                </form>
            </div>
        </div>
    )
}

export default SignIn