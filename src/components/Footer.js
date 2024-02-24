import React from 'react';
import Image from 'next/image';
import ArrowUp from './constants/Icons';

function Footer() {
    return (
        <footer className="container mx-auto px-4 py-10 mt-20 mb-10" id='contact'>
            <div className="flex flex-col items-center justify-center bg-[#070707] border-[1px] border-[#1E1E1E] rounded-xl py-14 px-2 md:px-10 lg:px-40 w-full">
                <div className="w-full lg:w-[40%] text-center">
                    <h1 className="text-2xl md:text-4xl font-bold uppercase" style={{
                        background: 'linear-gradient(90deg, #FFF 3.8%, #020202 146.47%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                    }}>
                        Ready to Ignite?
                    </h1>
                    <p className="font-normal text-[#9B9B9B] text-sm sm:text-base mt-2 mb-10">
                        Join forces with us to turn your digital aspirations into tangible results. Collaborate with Ignition Nest Labs and propel your enterprise towards triumph!
                    </p>

                    <div className='border-[2px] border-[#9B9B9B]  mt-2 bg-transparent py-2 flex flex-row items-center justify-between px-2 sm:px-4 ' style={{
                        borderRadius: '29.75px',
                        border: '0.85px solid #9B9B9B',
                        background: 'rgba(35, 35, 35, 0.20)',
                        backdropFilter: 'blur(1.7px)'
                    }}>
                        <input type="text" placeholder="Enter your E-mail" className='font-medium text-white text-xs sm:text-base placeholder:text-[#9B9B9B] ml-4 bg-transparent outline-none' />
                        <div className='group cursor-pointer bg-white rounded-full hover:bg-transparent hover:text-white duration-500 hover:border-gray-100 border-[1px] py-2 px-2 sm:px-4 flex flex-row'>
                            <button className='font-semibold uppercase text-xs sm:text-sm'>Let's Talk</button>
                            <ArrowUp width={20} height={20} className='group-hover:stroke-white stroke-current' />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center mt-10">
                <div className="flex-shrink-0 mt-2 mb-0">
                    <Image src="/assets/logo.png" alt="Logo" width={100} height={100} className="w-24" />
                </div>
                <div>
                    <h1 className="text-gray-100 font-medium">
                    © 2024 - <span className="font-bold text-white">IGNITION NEST LABS</span>
                    </h1>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
