import React from 'react'
import notfound from '../../assets/404.png'
import { useNavigate } from 'react-router'

const NotFound = () => {

    const nav = useNavigate()

    return (
        <div className='h-screen flex flex-col justify-center items-center'>
            <img src={notfound} alt="Not Found" />
            <button className='border px-3 py-2 cursor-pointer rounded'
                onClick={() => nav('/')}
            >
                Back to Home
            </button>
        </div>
    )
}

export default NotFound
