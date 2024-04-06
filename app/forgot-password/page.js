import ForgotPassword from '@/components/ForgotPassword'
import NewPassword from '@/components/NewPassword'
import SuccessFull from '@/components/SuccessFull'
import React from 'react'

const page = () => {
    return (
        <>
            <ForgotPassword />
            <NewPassword />
            <SuccessFull />
        </>
    )
}

export default page