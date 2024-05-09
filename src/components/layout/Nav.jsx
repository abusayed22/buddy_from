"use client"

import React, { useEffect, useState } from 'react'
import '../../../public/assets/nav.css'
import { usePathname } from 'next/navigation'

function Nav() {
    const path = usePathname()


    return (
        <div className='bg-gray-300 shadow shadow-gray-300'>
            {/* web  */}
            <nav className="hidden md:block ">
                <div className="w-[90%] md:h-16 h-28 mx-auto flex items-center justify-between flex-wrap md:flex-nowrap">
                    {/* <!-- Logo --> */}
                    <a href='/' className="text-primary md:order-1 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                        </svg>
                    </a>
                    <div className="text-gray-500 order-3 w-full md:w-auto md:order-2">
                        <ul className="flex font-semibold justify-between">

                            <li className={`md:px-4 md:py-2"}`}><a className={`${path === '/dashboard' ? "text-blue-700" :"text-indigo-400 "}`} href="/dashboard">Dashboard</a></li>
                            <li className={`md:px-4 md:py-2"}`}><a className={`${path === '/history' ? "text-blue-700" :"text-indigo-400 "}`} href="/history">History</a></li>
                            {/* <li className={`md:px-4 md:py-2`}><a className={`${path === '/history' ? "text-blue-700" :"text-indigo-500 "}`} href="/history">History</a></li> */}
                            {/* <li className="md:px-4 md:py-2 hover:text-indigo-400"><a href="/history">History</a></li> */}
                        </ul>
                    </div>
                    <div className="order-2 md:order-3">
                        <a href='/login-register' className="px-4 py-2 bg-primary hover:bg-indigo-600 text-gray-50 rounded-xl flex items-center gap-2">
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
            <div className='block md:hidden relative w-[90%] mx-auto '>

                <nav>
                    <div className="navbar z-20 w-full ">
                        <div className="container nav-container z-20">
                            <input className="checkbox" type="checkbox" name="" id="" />
                            <div className="hamburger-lines">
                                <span className="line line1"></span>
                                <span className="line line2"></span>
                                <span className="line line3"></span>
                            </div>
                            {/* <div className="logo flex items-center">
                                <a href='/' className="text-indigo-800 md:order-1 cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                                    </svg>
                                </a>
                            </div> */}
                            <div className="menu-items">
                                <li className={`md:px-4 md:py-2 ${path === '/' ? "text-white" :"text-indigo-500"}`}><a href="/">Home</a></li>
                                <li className={`md:px-4 md:py-2 ${path === '/dashboard' ? "text-white" :"text-indigo-500"}`}><a href="/dashboard">Dashboard</a></li>
                                <li className={`md:px-4 md:py-2 ${path === '/history' ? "text-white" :"text-indigo-500"}`}><a href="/history">History</a></li>
                                {/* <li><a href="#">portfolio</a></li> */}
                                {/* <li><a href="#">contact</a></li> */}

                                <br />
                                <br />
                                <li className='w-full flex justify-center'><a href='/login-register' className="px-3 py-2 bg-primary hover:bg-indigo-600 text-sm text-gray-50 rounded-xl flex items-center gap-2">
                                    {/* <!-- Heroicons - Login Solid --> */}
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z" clip-rule="evenodd" />
                                    </svg>
                                    <span>Login</span>
                                </a></li>
                            </div>
                        </div>
                    </div>
                </nav>


            </div>
        </div>

    )
}

export default Nav
