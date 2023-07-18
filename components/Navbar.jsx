import React, { useState, Fragment } from 'react'
import logo from '../assets/logo.png'
import login from '../assets/login.svg'
import menu from '../assets/menu.svg'
import x_icon from '../assets/x_icon.svg'
import close from '../assets/x_icon.svg'
import { motion } from "framer-motion"
import { fadeIn } from '../utils/motion'
import { Menu, Transition } from '@headlessui/react'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
    console.log("1")
}



const Navbar = () => {
    const[nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }
    return (
        <>
            <div className="z-20 fixed bg-transparent backdrop-blur-3xl w-full">
                <div className="px-3 text-white flex justify-between items-center max-w-[1240px] mx-auto">
                    <img className="h-[75px]" src={logo} alt="IPSoft" />
                    <div className="text-black md:text-white md:static md:min-h-fit absolute top-[-450px] min-h-[60vh] left-0 md:w-auto w-full flex items-center px-5">
                        <ul className="md:flex-row flex-col flex md:items-center md:gap-[2vw] gap-8">
                            <li className="px-3 font-light"><a href="/"><p className="relative group"><span className="inline-flex items-center">Home</span><span className="rounded-xl absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-cyan-500 to-blue-500 group-hover:w-full group-hover:transition-all"></span></p></a></li>
                            <li className="px-3">
                                <Menu as="div" className="relative inline-block text-center">
                                    <div>


                                        <Menu.Button className="items-center inline-flex w-full justify-center bg-transparent py-2 font-light text-white">
                                            <p className="relative group"><span className="inline-flex items-center">Services<svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></span><span className="rounded-xl absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-cyan-500 to-blue-500 group-hover:w-full group-hover:transition-all"></span></p>
                                        </Menu.Button>

                                    </div>

                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        <Menu.Items className="text-left absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            <div className="py-1">

                                                <div className="">
                                                    <Menu.Item className="flex items-center justify-left">
                                                        {({ active }) => (

                                                            <a
                                                                href="#"
                                                                className={classNames(
                                                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                    'block px-4 py-2 text-md font-semibold'
                                                                )}
                                                            >
                                                                <svg className="w-10 h-10 pr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
                                                                </svg> Analytics
                                                            </a>

                                                        )}
                                                    </Menu.Item>
                                                </div>

                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <a
                                                            href="#"
                                                            className={classNames(
                                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                'block px-4 py-2 text-sm'
                                                            )}
                                                        >
                                                            Call Center Analytics
                                                        </a>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <a
                                                            href="#"
                                                            className={classNames(
                                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                'block px-4 py-2 text-sm'
                                                            )}
                                                        >
                                                            Fraud Detection
                                                        </a>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <a
                                                            href="#"
                                                            className={classNames(
                                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                'block px-4 py-2 text-sm'
                                                            )}
                                                        >
                                                            Customer Churn
                                                        </a>
                                                    )}
                                                </Menu.Item>
                                            </div>
                                            <div className="py-1">
                                                <Menu.Item className="flex items-center justify-left">
                                                    {({ active }) => (
                                                        <a
                                                            href="#"
                                                            className={classNames(
                                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                'block px-4 py-2 text-md font-semibold'
                                                            )}
                                                        >
                                                            <svg className="w-10 h-10 pr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                                                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                                                            </svg>

                                                            Outsourcing
                                                        </a>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <a
                                                            href="#"
                                                            className={classNames(
                                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                'block px-4 py-2 text-sm'
                                                            )}
                                                        >
                                                            Outsourcing Services
                                                        </a>
                                                    )}
                                                </Menu.Item>
                                            </div>
                                            <div className="py-1">
                                                <Menu.Item className="flex items-center justify-left">
                                                    {({ active }) => (
                                                        <a
                                                            href="#"
                                                            className={classNames(
                                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                'block px-4 py-2 text-md font-semibold'
                                                            )}
                                                        >
                                                            <svg className="w-10 h-10 pr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                                                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                                                            </svg>

                                                            Consulting
                                                        </a>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <a
                                                            href="#"
                                                            className={classNames(
                                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                'block px-4 py-2 text-sm'
                                                            )}
                                                        >
                                                            Consulting Services
                                                        </a>
                                                    )}
                                                </Menu.Item>
                                            </div>
                                            <div className="py-1">
                                                <Menu.Item className="flex items-center justify-left">
                                                    {({ active }) => (
                                                        <a
                                                            href="#"
                                                            className={classNames(
                                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                'block px-4 py-2 text-md font-semibold'
                                                            )}
                                                        >
                                                            <svg className="w-10 h-10 pr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                                                                <path stroke-linecap="round" stroke-linejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
                                                            </svg>

                                                            Staff Augmentation
                                                        </a>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <a
                                                            href="#"
                                                            className={classNames(
                                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                'block px-4 py-2 text-sm'
                                                            )}
                                                        >
                                                            Staff Augmentation
                                                        </a>
                                                    )}
                                                </Menu.Item>
                                            </div>
                                        </Menu.Items>
                                    </Transition>
                                </Menu>
                            </li>
                            <li className="px-3 font-light"><a href="/"><p className="relative group"><span className="inline-flex items-center">Industries</span><span className="rounded-xl absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-cyan-500 to-blue-500 group-hover:w-full group-hover:transition-all"></span></p></a></li>
                            <li className="px-3 font-light">
                                <Menu as="div" className="relative inline-block text-center">
                                    <div>


                                        <Menu.Button className="items-center inline-flex w-full justify-center bg-transparent py-2 font-light text-white">
                                            <p className="relative group"><span className="inline-flex items-center">Consumers<svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></span><span className="rounded-xl absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-cyan-500 to-blue-500 group-hover:w-full group-hover:transition-all"></span></p>
                                        </Menu.Button>

                                    </div>

                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        <Menu.Items className="text-left absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            <div className="py-1">

                                                <div className="">
                                                    <Menu.Item className="flex items-center justify-left">
                                                        {({ active }) => (

                                                            <p
                                                                href="#"
                                                                className={classNames(
                                                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                    'block px-4 pt-2 text-md font-semibold'
                                                                )}
                                                            >
                                                                <svg className="w-10 h-10 pr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                                                                </svg>
                                                                Customer Stories
                                                            </p>

                                                        )}
                                                    </Menu.Item>
                                                </div>

                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <a
                                                            href="#" /* consumer stories */
                                                            className={classNames(
                                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                'block px-4 py-2 text-sm'
                                                            )}
                                                        >
                                                            Find out how we've assisted businesses like yours in growth and transformation.
                                                            <p className="flex items-center bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent font-semibold">View all<svg className="pl-2 w-7 h-7 text-gray-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                                                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                                            </svg>
                                                            </p>
                                                        </a>

                                                    )}

                                                </Menu.Item>
                                            </div>
                                            <div className="py-1">
                                                <Menu.Item className="flex items-center justify-left">
                                                    {({ active }) => (
                                                        <p
                                                            href="#"
                                                            className={classNames(
                                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                'block px-4 py-2 text-md font-semibold'
                                                            )}
                                                        >
                                                            <svg className="w-10 h-10 pr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                                                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                                            </svg>


                                                            Explore
                                                        </p>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <a
                                                            href="#"
                                                            className={classNames(
                                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                'block px-4 py-2 text-sm'
                                                            )}
                                                        >
                                                            Customer Success
                                                        </a>
                                                    )}
                                                </Menu.Item>
                                            </div>

                                        </Menu.Items>
                                    </Transition>
                                </Menu>
                            </li>
                            <li className="px-3 font-light">
                                <Menu as="div" className="relative inline-block text-center">
                                    <div>


                                        <Menu.Button className="items-center inline-flex w-full justify-center bg-transparent py-2 font-light text-white">
                                            <p className="relative group"><span className="inline-flex items-center">Company<svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></span><span className="rounded-xl absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-cyan-500 to-blue-500 group-hover:w-full group-hover:transition-all"></span></p>
                                        </Menu.Button>

                                    </div>

                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        <Menu.Items className="text-left absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            <div className="py-1">
                                                <Menu.Item className="flex items-center justify-left">
                                                    {({ active }) => (
                                                        <p
                                                            href="#"
                                                            className={classNames(
                                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                'block px-4 py-2 text-md font-semibold'
                                                            )}
                                                        >
                                                            <svg className="w-10 h-10 pr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                                                                <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                                                            </svg>



                                                            About Us
                                                        </p>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <a
                                                            href="#"
                                                            className={classNames(
                                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                'block px-4 py-2 text-sm'
                                                            )}
                                                        >
                                                            Discover how we started and where we're headed.
                                                            <p className="flex items-center bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent font-semibold">See More<svg className="pl-2 w-7 h-7 text-gray-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                                                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                                            </svg>
                                                            </p>
                                                        </a>
                                                    )}
                                                </Menu.Item>
                                            </div>
                                            <div className="py-1">

                                                <div className="">
                                                    <Menu.Item className="flex items-center justify-left">
                                                        {({ active }) => (

                                                            <p
                                                                href="#"
                                                                className={classNames(
                                                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                    'block px-4 pt-2 pb-2 text-md font-semibold'
                                                                )}
                                                            >
                                                                <svg className="w-10 h-10 pr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" />
                                                                </svg>

                                                                Leadership
                                                            </p>

                                                        )}
                                                    </Menu.Item>
                                                </div>

                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <a
                                                            href="#" /* consumer stories */
                                                            className={classNames(
                                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                'block px-4 py-2 text-sm'
                                                            )}
                                                        >
                                                            Get to know our company leaders.

                                                        </a>

                                                    )}

                                                </Menu.Item>
                                            </div>
                                            <div className="py-1">
                                                <Menu.Item className="flex items-center justify-left">
                                                    {({ active }) => (
                                                        <p
                                                            href="#"
                                                            className={classNames(
                                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                'block px-4 py-2 text-md font-semibold'
                                                            )}
                                                        >
                                                            <svg className="w-10 h-10 pr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
                                                            </svg>



                                                            Contact
                                                        </p>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <a
                                                            href="#" /* consumer stories */
                                                            className={classNames(
                                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                'block px-4 py-2 text-sm'
                                                            )}
                                                        >
                                                            Explore demomnstrations of products, and get more info on pricing.
                                                            <p className="flex items-center bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent font-semibold">Contact Us<svg className="pl-2 w-7 h-7 text-gray-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                                                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                                            </svg>
                                                            </p>
                                                        </a>

                                                    )}

                                                </Menu.Item>
                                            </div>

                                        </Menu.Items>

                                    </Transition>
                                </Menu>
                            </li>
                        </ul>

                    </div>
                    <div className="flex items-center gap-6">
                        <svg id = "menu" onClick = "onToggleMenu(this)" class="w-10 h-10 cursor-pointer md:hidden" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Navbar

/* 
<ul className = "py-4 flex items-center justify-between">
     <li className = "p-4 font-medium hover:text-[#777777] cursor-pointer">Services</li>
     <li className = "p-4 font-medium hover:text-[#777777] cursor-pointer">Industries</li>
     <li className = "p-4 font-medium hover:text-[#777777] cursor-pointer">Transparency</li>
     <li className = "p-4 font-medium hover:text-[#777777] cursor-pointer">About</li>
</ul>


<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>

<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>


<motion.div

        initial = {{opacity: 0}}

        animate = {{opacity: 1}}

        transition={{

            delay: 2.2,

            duration: 2,

        }}

        

        className = "top-0 w-full h-[85px] bg-transparent backdrop-blur-3xl z-10 drop-shadow fixed font-extralight">

            <div className = "max-w-[1240px] mx-auto px-4 flex justify-between h-full">

                <div>

                    <a href="/"><img className = " w-30 h-20 cursor-pointer object-contain"  src={logo} alt="logo" /></a>

                </div>

                <ul className = "hidden md:flex float-left">

                    <li className = "text-white px-4 py-7 relative"><a href="service.html"><button><p className="relative group"><span className = "inline-flex items-center">Services<svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></span><span className="rounded-xl absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-cyan-500 to-blue-500 group-hover:w-full group-hover:transition-all"></span></p></button></a>

                        <ul className = "lg:absolute right-0 py-4 space-y-2">

                            <li className = ""><a className = "flex p-2 font-light text-gray-600 rounded-md  hover:bg-gray-100 hover:text-black" href="">Analytics</a></li>

                            <li className = ""><a className = "flex p-2 font-light text-gray-600 rounded-md  hover:bg-gray-100 hover:text-black" href="">Outsourcing</a></li>

                            <li className = ""><a className = "flex p-2 font-light text-gray-600 rounded-md  hover:bg-gray-100 hover:text-black" href="">Consulting</a></li>

                            <li className = ""><a className = "flex p-2 font-light text-gray-600 rounded-md  hover:bg-gray-100 hover:text-black" href="">Staff Augmentation</a></li>

                        </ul>

                    </li>

                    <li className = "text-white px-4 py-7"><a href="service.html"><button><p className="relative group"><span className = "inline-flex items-center">Industries<svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></span><span className="rounded-xl absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-cyan-500 to-blue-500 group-hover:w-full group-hover:transition-all"></span></p></button></a></li>

                    <li className = "text-white px-4 py-7"><a href="service.html"><button><p className="relative group"><span className = "inline-flex items-center">Customers<svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></span><span className="rounded-xl absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-cyan-500 to-blue-500 group-hover:w-full group-hover:transition-all"></span></p></button></a></li>

                    <li className = "text-white px-4 py-7"><a href="service.html"><button><p className="relative group"><span className = "inline-flex items-center">About<svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></span><span className="rounded-xl absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-cyan-500 to-blue-500 group-hover:w-full group-hover:transition-all"></span></p></button></a></li>

                </ul>

                <div className = "hidden md:flex ">

                    <button id = "accountButton" data-dropdown-toggle = "accountDropdown"><img className = "h-[70px] p-4" src={login} alt="login" /></button>

                </div>

                <div onClick = {handleNav} className = "block md:hidden p-4 h-[80px] hover:cursor-pointer">

                    {nav ? <img className = "h-[50px]" src={close} alt="X" /> : <img src={menu} alt="menu" />}

                </div>

                

            </div>

                <div className = {nav ? "w-full bg-transparent backdrop-blur-3xl text-white absolute top-[85px] left-0 justify-center text-center" : "absolute left-[-100%]"}>

                    <ul>

                        <li className = "p-5 text-2xl">Services</li>

                        <li className = "p-5 text-2xl">Industries</li>

                        <li className = "p-5 text-2xl">Transparency</li>

                        <li className = "p-5 text-2xl">About</li>

                        <button className = "m-4 bg-gradient-to-r from-cyan-500 to-blue-500 py-3 px-8 rounded-3xl justify-center ">Account</button>

                    </ul>

                </div>

</motion.div>

*/