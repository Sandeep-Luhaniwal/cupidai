import React from 'react'
import { Apple, Facebook, GoogleIcon, Logo } from './common/Icon'
import { Button } from './ui/button'
import Link from 'next/link';

const NewPassword = () => {
    return (
        <>
            <div className="min-h-screen bg-mainbg bg-cover bg-no-repeat flex justify-center items-center">
                <div className="max-w-[526px] w-full px-3 sm:px-0">
                    <div className='flex gap-3 items-center justify-center mb-6 sm:mb-7 md:mb-8 lg:mb-10'>
                        <Logo /> <h1 className='text-[40px] text-white font-bold'>CupidAI</h1>
                    </div>
                    <div className=' bg-lightgray rounded-[26px] w-full max-w-[526px] p-5 sm:p-6 md:p-[30px]'>
                        <h2 className='text-white font-medium text-[32px]'>Forgot Password</h2>
                        <p className='text-white text-opacity-60 text-base '>Enter new password. It should not be same as previous password.</p>
                        <Button className="!text-white mt-6 sm:mt-7 md:mt-8 lg:mt-10 py-3 md:py-4 lg:py-[18px] bg_pinkGradient hover:!border-lightBlack duration-500" >Submit</Button>
                    </div>
                    <div className=' bg-lightgray rounded-[26px] w-full max-w-[526px] p-5 sm:p-6 md:p-[30px] mt-2.5'>

                        <div className='flex justify-center items-center border bg-gray cursor-pointer border-lightBlack py-3 md:py-4 lg:py-[18px] rounded-[14px] hover:border-pink duration-300'>
                            <p className='text-base text-white font-normal'>Already have an account?</p>
                            <Link className='text-pink text-sm font-normal hover:opacity-60 duration-500 hover:before:w-0 before:duration-300 relative before:absolute before:w-full before:h-[1px] ms-1 before:bg-pink before:bottom-[0px] ' href="/">Login</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewPassword