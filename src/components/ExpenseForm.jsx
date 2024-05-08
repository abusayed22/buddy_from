"use client"
import React from 'react';

function ExpenseForm() {
    return (
        <>
            <form className='flex flex-col gap-4'>
                <div className="mb-1 sm:mb-2">
                    <div className="flex items-center justify-center">
                        <div className="relative w-full">
                            <input
                                id="username"
                                name="username"
                                type="text"
                                className="w-full border-b border-gray-500 py-1 focus:border-b-2 focus:border-blue-700 transition-colors focus:outline-none peer bg-inherit"
                            />
                            <label
                                htmlFor="username"
                                className="absolute text-sm text-slate-900 left-0 top-1 cursor-text peer-focus:text-sm peer-focus:-top-4 transition-all peer-focus:text-blue-700"
                            >
                                Name
                            </label>
                        </div>
                    </div>
                </div>
                <div className="mb-1 sm:mb-2">
                    <div className="flex items-center justify-center">
                        <div className="relative w-full">
                            <input
                                id="username"
                                name="username"
                                type="text"
                                className="w-full border-b border-gray-500 py-1 focus:border-b-2 focus:border-blue-700 transition-colors focus:outline-none peer bg-inherit"
                            />
                            <label
                                htmlFor="username"
                                className="absolute text-sm text-slate-900 left-0 top-1 cursor-text peer-focus:text-sm peer-focus:-top-4 transition-all peer-focus:text-blue-700"
                            >
                                Name
                            </label>
                        </div>
                    </div>
                </div>
                <div className="mb-1 sm:mb-2">
                    <div className="flex items-center justify-center">
                        <div className="relative w-full">
                            <input
                                id="username"
                                name="username"
                                type="text"
                                className="w-full border-b border-gray-500 py-1 focus:border-b-2 focus:border-blue-700 transition-colors focus:outline-none peer bg-inherit"
                            />
                            <label
                                htmlFor="username"
                                className="absolute text-sm text-slate-900 left-0 top-1 cursor-text peer-focus:text-sm peer-focus:-top-4 transition-all peer-focus:text-blue-700"
                            >
                                Name
                            </label>
                        </div>
                    </div>
                </div>
                <div className="mb-1 sm:mb-2">
                    <div className="flex items-center justify-center">
                        <div className="relative w-full">
                            <input
                                id="username"
                                name="username"
                                type="text"
                                className="w-full border-b border-gray-500 py-1 focus:border-b-2 focus:border-blue-700 transition-colors focus:outline-none peer bg-inherit"
                            />
                            <label
                                htmlFor="username"
                                className="absolute text-sm text-slate-900 left-0 top-1 cursor-text peer-focus:text-sm peer-focus:-top-4 transition-all peer-focus:text-blue-700"
                            >
                                Name
                            </label>
                        </div>
                    </div>
                </div>
                <div className="mb-1 sm:mb-2">
                    <div className="flex items-center justify-center">
                        <div className="relative w-full">
                            <input
                                id="username"
                                name="username"
                                type="text"
                                className="w-full border-b border-gray-500 py-1 focus:border-b-2 focus:border-blue-700 transition-colors focus:outline-none peer bg-inherit"
                            />
                            <label
                                htmlFor="username"
                                className="absolute text-sm text-slate-900 left-0 top-1 cursor-text peer-focus:text-sm peer-focus:-top-4 transition-all peer-focus:text-blue-700"
                            >
                                Name
                            </label>
                        </div>
                    </div>
                </div>
                <div className='flex justify-between gap-2'>
                    <div className="mb-1 sm:mb-2 w-[90%]">
                        <div className="flex items-center justify-center">
                            <div className="relative w-full">
                                <input
                                    id="username"
                                    name="username"
                                    type="text"
                                    className="w-full border-b border-gray-500 py-1 focus:border-b-2 focus:border-blue-700 transition-colors focus:outline-none peer bg-inherit"
                                />
                                <label
                                    htmlFor="username"
                                    className="absolute text-sm text-slate-900 left-0 top-1 cursor-text peer-focus:text-sm peer-focus:-top-4 transition-all peer-focus:text-blue-700"
                                >
                                    Name
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="mb-1 sm:mb-2 w-[90%]">
                        <div className="flex items-center justify-center">
                            <div className="relative w-full">
                                <input
                                    id="username"
                                    name="username"
                                    type="text"
                                    className="w-full border-b border-gray-500 py-1 focus:border-b-2 focus:border-blue-700 transition-colors focus:outline-none peer bg-inherit"
                                />
                                <label
                                    htmlFor="username"
                                    className="absolute text-sm text-slate-900 left-0 top-1 cursor-text peer-focus:text-sm peer-focus:-top-4 transition-all peer-focus:text-blue-700"
                                >
                                    Name
                                </label>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="mt-4 mb-2 sm:mb-4">
                    <button
                        type="submit"
                        className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-slate-900 bg-indigo-600 transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                    >
                        Subscribe
                    </button>
                </div>
                <p className="text-xs text-gray-600 sm:text-sm">
                    We respect your privacy. Unsubscribe at any time.
                </p>
            </form>
        </>
    )
}

export default ExpenseForm
