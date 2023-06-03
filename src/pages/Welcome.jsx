import React, { useEffect, useMemo, useState } from 'react'
import { AiOutlineLeft } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { Timer } from 'react-countdown-clock-timer';
import { Button } from '@mui/material';

const Welcome = () => {

    const [timerFinished, setTimerFinished] = useState(false);

    const handleTimerFinish = () => {
        setTimerFinished(true);
    };





    return (
        <div>
            <section className='pt-5 md:hidden flex justify-between items-center mx-auto w-[90%]'>
                <Link to="/"><AiOutlineLeft size={30} className='font-black' /></Link>
                <img src="/images/logo.png" alt="logo" width='90px' />
            </section>
            <div className='h-[100vh] w-full flex items-center justify-center mb-10'>
                <form className='md:w-[40%] w-[80%]' >
                    <h3 className='font-semibold text-center md:text-3xl leading-loose  text-xl md:leading-[1.8]'>Bienvenue au tirage au sort <br /> Vas-y particper maintenant !</h3>
                    <div className='timer-container'>
                        <div className='timer-wrapper pt-10 pb-2'>
                            <Timer
                                durationInSeconds={10}
                                formatted={false}
                                isPaused={false}
                                onFinish={handleTimerFinish}
                            />
                        </div>
                    </div>
                    <Link to="/" >
                        <Button sx={{width:"100%"}}  disabled={timerFinished} variant="contained" color="success" >
                            Participer
                        </Button>
                        {/* <button disabled className='my-12 cursor-pointer bg-green-600 rounded-full p-4 text-white font-semibold w-full'>Participer</button> */}
                    </Link>
                </form>
            </div>
        </div>
    )
}

export default Welcome;