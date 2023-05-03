import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import {
    Bars3BottomRightIcon,
    XMarkIcon,
} from '@heroicons/react/24/solid'

const NavigationBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        <div className='bg-gray-100 px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
            <div className='relative flex items-center justify-between'>
                {/* Logo Section */}
                <Link to='/' className='inline-flex items-center'>
                    {/* <BoltIcon className='h-6 w-6 text-blue-500' /> */}
                    <span className='ml-2 text-xl font-bold tracking-wide text-gray-800'>
                        Master Chef
                    </span>
                </Link>

                {/* Nav Items Section */}
                <ul className='items-center hidden space-x-8 lg:flex'>
                    <li>
                        <NavLink
                            to='/'
                            className={({ isActive }) => (isActive ? 'text-blue-600' : '')}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/blog'
                            className={({ isActive }) => (isActive ? 'text-blue-600' : '')}
                        >
                            Blog
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/login'
                            className={({ isActive }) => (isActive ? 'text-blue-600' : '')}
                        >
                            <small className=" btn btn-primary btn-circle p-3">
                                <div className="w-10 rounded-full ">
                                    <button>Login</button>
                                </div></small>
                        </NavLink>



                    </li>

                </ul>

                {/* Mobile Navbar Section */}
                <div className='lg:hidden'>
                    {/* Dropdown Open Button */}
                    <button
                        aria-label='Open Menu'
                        title='Open Menu'
                        onClick={() => setIsMenuOpen(true)}
                    >
                        <Bars3BottomRightIcon className='w-5 text-gray-600' />
                    </button>
                    {isMenuOpen && (
                        <div className='absolute top-0 left-0 w-full z-10'>
                            <div className='p-5 bg-white border rounded shadow-sm'>
                                {/* Logo & Button section */}
                                <div className='flex items-center justify-between mb-4'>
                                    <div>
                                        <Link to='/' className='inline-flex items-center'>
                                            {/* <BoltIcon className='h-6 w-6 text-blue-500' /> */}
                                            <span className='ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase'>
                                                Master Chef
                                            </span>
                                        </Link>
                                    </div>
                                    {/* Dropdown menu close button */}
                                    <div>
                                        <button
                                            aria-label='Close Menu'
                                            title='Close Menu'
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            <XMarkIcon className='w-5 text-gray-600' />
                                        </button>
                                    </div>
                                </div>
                                {/* Mobile Nav Items Section */}
                                <nav>
                                    <ul className='space-y-4'>
                                        <li>
                                            <Link to='/' className='default'>
                                                Home
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to='/blog'
                                                className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                                            >
                                                Blog
                                            </Link>
                                        </li>
                                        <li>

                                            <NavLink
                                                to='/login'
                                                className={({ isActive }) => (isActive ? 'text-blue-600' : '')}
                                            >
                                                <small className=" btn btn-primary btn-circle p-3">
                                                    <div className="w-10 rounded-full ">
                                                        <button>Login</button>
                                                    </div></small>
                                            </NavLink>



                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default NavigationBar