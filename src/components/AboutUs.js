import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'


function AboutUs() {

    const containerRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        if (containerRef?.current) {
          const { top } = containerRef?.current?.getBoundingClientRect();
          const scrollThreshold = window?.innerHeight * 0.75;
  
          setIsVisible(top < scrollThreshold);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      handleScroll();
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    return (
        <div  ref={containerRef} className='container mx-auto px-4 md:px-6 mt-12 lg:px-8 flex flex-col items-center justify-start' id='about'>
            <h1 className='text-4xl font-bold mt-20' style={{
                background: 'linear-gradient(90deg, #FFF 3.8%, #020202 146.47%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
            }}>WHAT WE DO </h1>
            <p className='text-[#9B9B9B]  text-center text-sm mt-4'>
                Elevate your business with Ignition —offering web development, graphic design, <br /> social media, and Videography service. Let us propel your brand forward.
            </p>
            <div className='flex  flex-col md:flex-row items-stretch gap-x-6 w-full md:px-40 mt-10'>
                <div style={{
                    transition: 'transform 700ms ease-in-out, opacity 700ms ease-in-out',
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateX(0)' : 'translateX(-100px)',
                }} className='flex flex-col sm:flex-row items-center justify-around  px-5 border-2 border-[#1E1E1E] rounded-[25px] bg-gradient-to-b from-[#131313] to-[#070707] flex-grow'>
                    <div className='sm:hidden flex flex-col mt-4 items-center gap-y-2 justify-center'>
                        <h1 className='font-bold text-xl text-center text-white'>Mobile App Development</h1>
                        <p className='text-[#9B9B9B] text-sm text-center'>We provide mobile application <br /> development services start from <br /> Designing  till deployment</p>
                    </div>
                    <Image src="/assets/MobileDev.svg" alt="hero" width={100} height={100} className='w-auto self-end mt-5 sm:mt-10' />
                    <div className='hidden sm:flex flex-col items-center gap-y-4 justify-center'>
                        <h1 className='font-bold text-xl text-center text-white'>Mobile App Development</h1>
                        <p className='text-[#9B9B9B] text-sm text-center'>We provide mobile application <br /> development services start from <br /> Designing  till deployment</p>
                    </div>
                </div>

                <div style={{
                    transition: 'transform 700ms ease-in-out, opacity 700ms ease-in-out',
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateX(0)' : 'translateX(100px)',
                }} className='md:flex hidden flex-col justify-center items-center px-5 py-4 border-2 border-[#1E1E1E] rounded-[25px] bg-gradient-to-b from-[#131313] to-[#070707] flex-grow'>
                    <h1 className='font-bold text-xl text-center text-white'>Videography & Video <br /> Editing services</h1>
                </div>
                <div className='flex md:hidden flex-col sm:flex-row sm:gap-y-0 gap-y-4 items-center mt-5 md:mt-0 gap-x-4'>
                    <div className='flex flex-col  h-40 w-full  justify-center items-center px-5 py-4 border-2 border-[#1E1E1E] rounded-[25px] bg-gradient-to-b from-[#131313] to-[#070707] flex-grow'>
                        <h1 className='font-bold text-xl text-center text-white'>Videography & Video <br /> Editing services</h1>
                    </div>
                    <div className=' flex flex-col  h-40 w-full   justify-center items-center px-5 py-4 border-2 border-[#1E1E1E] rounded-[25px] bg-gradient-to-b from-[#131313] to-[#070707] flex-grow'>
                        <h1 className='font-bold text-xl text-center text-white'>Social media and <br /> Branding Services</h1>
                    </div>
                </div>
            </div>
            <div className='flex flex-row items-stretch gap-x-6 w-full md:px-40 mt-5 md:mt-10'>
                <div style={{
                    transition: 'transform 700ms ease-in-out, opacity 700ms ease-in-out',
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateX(0)' : 'translateX(-100px)',
                }} className='hidden md:flex flex-col justify-center items-center px-5 py-4 border-2 border-[#1E1E1E] rounded-[25px] bg-gradient-to-b from-[#131313] to-[#070707] flex-grow'>
                    <h1 className='font-bold text-xl text-center text-white'>Social media and <br /> Branding Services</h1>
                </div>
                <div style={{
                    transition: 'transform 700ms ease-in-out, opacity 700ms ease-in-out',
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateX(0)' : 'translateX(100px)',
                }} className='flex flex-col md:flex-row items-center justify-between   border-2 border-[#1E1E1E] rounded-[25px] bg-gradient-to-b from-[#131313] to-[#070707] flex-grow'>
                    <div className='flex flex-col items-center gap-y-4 pl-0 sm:pl-10 sm:mt-0 mt-4 justify-center'>
                        <h1 className='font-bold text-xl text-center text-white'>Website Development</h1>
                        <p className='text-[#9B9B9B] text-sm text-center'>We help in designing websites and <br /> web-apps for your buisness helping <br /> in growing your brand.</p>
                    </div>
                    <Image src="/assets/WebDev.svg" alt="hero" width={100} height={100} className='w-auto self-center mt-5 md:mt-10' />
                </div>
            </div>

            {/* Skills Section */}
            <div className='mt-20 flex items-center w-full flex-col'>
                <h1 className='text-4xl font-bold uppercase text-center ' style={{
                    background: 'linear-gradient(90deg, #FFF 3.8%, #020202 146.47%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                }}>
                    Skill Set
                </h1>
                <div className='flex flex-row flex-wrap mt-6 items-center justify-center gap-x-2 md:px-40 w-full'>
                    {skills.map(skill => (
                        <div >
                        <SkillTag key={skill} skill={skill} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AboutUs


const SkillTag = ({ skill }) => {
    const containerRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        if (containerRef?.current) {
          const { top } = containerRef?.current?.getBoundingClientRect();
          const scrollThreshold = window?.innerHeight * 0.75;
  
          setIsVisible(top < scrollThreshold);
        };
      };
  
      window.addEventListener('scroll', handleScroll);
      handleScroll();
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    return (
      <div ref={containerRef} style={{
        transition: 'transform 700ms ease-in-out, opacity 700ms ease-in-out',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(100px)',
    }} className='text-white hover:bg-white/20 cursor-pointer duration-300 border-[2px] border-[#9B9B9B] border-opacity-40 rounded-full px-5 py-2 my-2 flex items-center justify-center'>
        <h1 className='text-center text-base md:text-lg font-semibold'>{skill}</h1>
      </div>
    );
  };
const skills = ['React JS', 'Next JS', 'Tailwind CSS', 'Node JS', 'Express JS', 'Mongo DB', 'Nest JS', 'Django', 'React Native', 'Flutter', 'UX', 'UI', 'Figma', 'After Effects', 'Photoshop'];