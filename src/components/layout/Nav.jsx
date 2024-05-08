"use client"

import React, { useEffect, useState } from 'react'
import '../../../public/assets/nav.css'

function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        console.log(isOpen)
    };


    return (
        <>
            {/* web  */}
            <nav className="hidden md:block bg-gray-200 shadow shadow-gray-300 w-100 px-8 md:px-auto">
                <div className="md:h-16 h-28 mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap">
                    {/* <!-- Logo --> */}
                    <a href='/' className="text-indigo-500 md:order-1 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                        </svg>
                    </a>
                    <div className="text-gray-500 order-3 w-full md:w-auto md:order-2">
                        <ul className="flex font-semibold justify-between">
                            {/* <!-- Active Link = text-indigo-500
                Inactive Link = hover:text-indigo-500 --> */}
                            <li className="md:px-4 md:py-2 text-indigo-500"><a href="/dashboard">Dashboard</a></li>
                            <li className="md:px-4 md:py-2 hover:text-indigo-400"><a href="/history">History</a></li>
                            {/* <li className="md:px-4 md:py-2 hover:text-indigo-400"><a href="/history">History</a></li> */}
                        </ul>
                    </div>
                    <div className="order-2 md:order-3">
                        <a href='/login-register' className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-gray-50 rounded-xl flex items-center gap-2">
                            {/* <!-- Heroicons - Login Solid --> */}
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z" clip-rule="evenodd" />
                            </svg>
                            <span>Login</span>
                        </a>
                    </div>
                </div>
            </nav>

            {/* mobile  */}
            <div className='block md:hidden relative '>

                <div className='mt-2 ml-2' onClick={toggleMenu}>
                    <input type="checkbox" id="checkbox" />
                    <label for="checkbox" class="toggle">
                        <div class="bars" id="bar1"></div>
                        <div class="bars" id="bar2"></div>
                        <div class="bars" id="bar3"></div>
                    </label>
                </div>

                {isOpen && (
                    <div className='absolute w-[300px] h-[60vh] z-10 flex flex-col justify-center items-center bg-indigo-500 backdrop-blur bg-transparent'>
                    <ul className='flex flex-col gap-6'>
                        <li><a href="/" className='text-indigo-500 text-xl font-bold'>Home</a></li>
                        <li><a href="/dashboard" className='text-indigo-500 text-xl font-bold'>Dashboard</a></li>
                        <li><a href="/history" className='text-indigo-500 text-xl font-bold'>History</a></li>
                    </ul>
                </div>
                )}


            </div>
        </>

    )
}

export default Nav
