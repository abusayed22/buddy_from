import React from 'react'
import ExpenseForm from './ExpenseForm'

function Hero() {
    return (
        <div className='w-full h-[80vh] z-0'>
            <div className="relative">
                <img
                    src="https://images.unsplash.com/photo-1534425393370-5f5c64b7efdb?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    className="hidden md:block absolute inset-0 object-cover w-full h-full "
                    alt=""
                />
                <div className="relative md:bg-opacity-75 bg-gray-400">
                    <svg
                        className="absolute inset-x-0 bottom-0 text-white"
                        viewBox="0 0 1160 163"
                    >
                        <path
                            fill="currentColor"
                            d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
                        />
                    </svg>
                    <div className="relative py-16 mx-auto overflow-hidden w-[90%]">
                        <div className="flex flex-col items-center justify-between xl:flex-row">
                            <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                                    ExpenseWatch: Your Financial Compass
                                </h2>
                                <p className="hidden md:block max-w-xl mb-4 text-base text-gray-200 md:text-lg">
                                    Take control of your finances with ExpenseWatch, your ultimate expense tracking solution. Gain insight into your spending habits, set budgets, and achieve your financial goals effortlessly. Track expenses, categorize transactions, and visualize your financial data with ease. Stay informed, stay on track, and make smarter financial decisions with ExpenseWatch.&quot;
                                </p>
                            </div>

                            <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
                                <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
                                    <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                                        Create your bill
                                    </h3>
                                    <ExpenseForm />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
