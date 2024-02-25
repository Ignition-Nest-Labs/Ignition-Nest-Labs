'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import ArrowUp from './constants/Icons';

const Navbar = () => {

    return (
        <nav className="fixed w-full z-50 px-4 py-2 bg-opacity-20 backdrop-filter backdrop-blur-md bg-black flex flex-row  ">
            <div className='flex mx-auto container justify-between items-center'>


                <Link href="/" className='flex-shrink-0 md:mt-0 mt-2 mb-0'>
                    <Image src="/assets/logo.png" alt="Logo" width={100} height={100} className='w-14' />
                </Link>

                <div className={`md:flex hidden items-center space-x-6`}>
                    <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
                        <NavItem href="#home">Home</NavItem>
                        <NavItem href="#story">Our Story</NavItem>
                        <NavItem href="#about">What we do ?</NavItem>
                        <NavItem href="#work">Our Works</NavItem>
                        <NavItem href="#teams">Our Team</NavItem>
                        <NavItem href="#contact">Contact Us</NavItem>
                    </ul>
                </div>




                <button className='group bg-transparent hover:bg-white hover:text-black duration-500 flex h-10 uppercase items-center justify-center px-5 rounded-full border-[1px] border-gray-100 cursor-pointer text-xs font-medium text-white'>
                    Let's Talk
                    <ArrowUp width={20} height={20} className="stroke-current group-hover:stroke-black" />
                </button>


                {/* <button
                    onClick={toggleMenu}
                    className={`md:hidden nav-menu flex ${isMenu ? "close" : "open"}`}
                    aria-label="nav-menu-btn"
                ></button> */}
            </div>
        </nav>
    );
};

const NavItem = ({ href, children }) => {
    const [isActive, setIsActive] = useState(false);
    return (
        <li className="text-white">
            <Link href={href} className={`cursor-pointer hover:text-white duration-300 ${isActive ? "font-bold" : "font-normal text-[#9B9B9B]"}`}>{children}</Link>
        </li>
    );
};

export default Navbar;