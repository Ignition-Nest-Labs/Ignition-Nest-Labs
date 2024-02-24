import React from 'react';
import Image from 'next/image';
import ArrowUp from './constants/Icons';

function Intro() {
    return (
        <div className="container mx-auto px-4 py-10 relative  md:h-screen" id='home'>
            <div className='flex relative flex-row items-center md:mt-0 mt-20 justify-center h-full gap-x-10'>
                <div className='absolute md:flex hidden left-[5%] top-[20%] z-10'>
                    <Image src="/assets/Group 55.svg" alt="hero" width={100} height={100} className='w-40' />
                </div>
                <div className='absolute md:flex hidden right-[2%] bottom-[5%] z-10'>
                    <Image src="/assets/Group.svg" alt="hero" width={100} height={100} className='w-auto' />
                </div>
                <div className='absolute md:flex hidden right-[5%] top-[30%] z-10'>
                    <Image src="/assets/Group 56.svg" alt="hero" width={100} height={100} className='w-40' />
                </div>
                <div className='absolute md:flex hidden left-[5%] bottom-[20%] z-10'>
                    <Image src="/assets/Group 57.svg" alt="hero" width={100} height={100} className='w-40' />
                </div>
                <div className='absolute md:flex hidden left-[25%] top-[40%] z-10'>
                    <Image src="/assets/Vector 3.svg" alt="hero" width={100} height={100} />
                </div>
                <div className='flex flex-col items-center   justify-center z-10'>
                    <h1 className='text-[30px] sm:text-[64px] font-[800] text-center' style={{
                        background: 'linear-gradient(90deg, #FFF 3.8%, #020202 146.47%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                    }}>
                        Crafting Digital <br /> Success.
                    </h1>

                    <p className='text-[#9B9B9B] font-normal w-full text-sm  sm:text-base text-center mx-2 leading-7'>
                        Unlocking Your Digital Potential: Customized <br />
                        <span className='bg-purple-400 px-2 py-1 rounded-lg text-black mx-1'> Apps {" "}</span>
                        <span className='bg-purple-400 px-2 py-1 rounded-lg text-black'> {" "} Websites </span> and  <span className='bg-purple-400 px-2 py-1 mx-1 rounded-lg text-black'>Brand Identities</span>
                        Crafted <br /> with Care, Exclusively for Your Vision!
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
        </div>
    );
}

export default Intro;
