import React from 'react'
import { Apple, Facebook, GoogleIcon, Logo } from './common/Icon'
import { Button } from './ui/button'
import Link from 'next/link';

const SuccessFull = () => {
    return (
        <>
            <div className="min-h-screen bg-mainbg bg-cover bg-no-repeat flex justify-center items-center">
                <div className="max-w-[526px] w-full px-3 sm:px-0">
                    <div className='flex gap-3 items-center justify-center mb-6 sm:mb-7 md:mb-8 lg:mb-10'>
                        <Logo /> <h1 className='text-[40px] text-white font-bold'>CupidAI</h1>
                    </div>
                    <div className=' bg-lightgray rounded-[26px] w-full max-w-[526px] p-5 sm:p-6 md:p-[30px]'>
                        <h2 className='text-white font-medium text-[32px]'>Password Reset Successfully</h2>
                        <p className='text-white text-opacity-60 text-base '>For security purpose we will remove your login from all over devices.</p>
                        <div className='flex justify-center mt-6 sm:mt-7 md:mt-8 lg:mt-10'>
                            <Link href={"/"} className='text-center text-base text-white border border-lightBlack py-3 md:py-4 lg:py-[18px] rounded-[14px] !leading-none duration-300 bg_pinkGradient w-full'>
                                Login
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SuccessFull