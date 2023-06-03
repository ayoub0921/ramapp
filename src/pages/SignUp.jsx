import { TextField } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';
import 'react-phone-input-2/lib/style.css'
import PhoneInput from 'react-phone-input-2';
import { AiOutlineLeft } from 'react-icons/ai';

const SignUp = () => {

    return (
        <div>
            <section className='pt-5 md:hidden mx-auto w-[90%]'>
                <Link to="/"><AiOutlineLeft size={30} className='font-black' /></Link>
                <img className='mx-auto pt-16' src="/images/logo.png" alt="logo" width='120px' />
            </section>
            <div className='h-[100vh] w-full flex items-center justify-center my-10'>
                <form className='md:w-[40%] w-[80%]' >
                    <h3 className='text-[#c2002f] font-semibold text-center pb-16 pt-10 text-2xl'>Inscrivez vous maintenant !</h3>
                    <div className='flex flex-col items-center space-y-10'>
                        <TextField className='w-full' placeholder='Prénom' type='text' label='Prénom*' variant='standard' id="standard-basic" />
                        <TextField className='w-full' placeholder='Nom de famille' type='text' label='Nom*' variant='standard' id="standard-basic" />
                        <TextField className='w-full' type='email' label='Email*' placeholder="&#9993;" variant='standard' id="standard-basic" />
                        <PhoneInput
                            country={'ma'}
                            inputStyle={{ width: '100%' }}
                        />
                        <TextField className='w-full' type='number' placeholder='No:_ _ _' label='N° Safar Flyer' variant='standard' id="standard-basic" />
                    </div>
                    <Link to="/confirmation">
                        <button className='red-btn my-12'>Continue</button>
                    </Link>
                </form>
            </div>
        </div>
    )
}

export default SignUp;