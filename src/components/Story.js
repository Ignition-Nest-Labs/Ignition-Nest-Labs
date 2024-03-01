import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

function Story() {
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
  
    const [customers, setCustomers] = useState(0);
    const [hours, setHours] = useState(0);
    const [review, setReview] = useState(0);
  
   useEffect(() => {
        
        const customersInterval = setInterval(() => {
            if (customers < 10) {
                setCustomers(customers + 1);
            }
        }, 90);
      
        const hoursInterval = setInterval(() => {
            if (hours < 2000) {
                setHours(hours + 100);
            }
        }
        , 120);

        const reviewInterval = setInterval(() => {
            if (review < 4.5) {
                setReview(review + 0.5);
            }
        }
        , 100);

        return () => {
            clearInterval(customersInterval);
            clearInterval(hoursInterval);
            clearInterval(reviewInterval);
        }
      }, [customers, hours, review]);
 
  
    return (
        <div ref={containerRef} className='container mx-auto px-4 md:px-6 lg:px-8 flex flex-col items-center justify-start' id='story'>
            <h1 className='text-[#9B9B9B] font-[600] mt-20 text-lg sm:text-3xl text-center md:w-[50%] mb-16'>
                <span className='text-white '>
                    Stay Ahead
                </span> in Tech with Our Top-Notch Services. Say <span className='text-white'>Goodbye</span> to Costly and Time-Consuming <span className='text-white'>In-House Hiring!</span>
            </h1>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 w-full mt-6 md:mt-12 px-2 sm:px-10 md:px-20 lg:px-40'>
                <div className='text-white' style={{
                    transition: 'transform 700ms ease-in-out, opacity 700ms ease-in-out',
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateX(0)' : 'translateX(-100px)',
                }}>
                    <h1 className='font-bold text-3xl text-center uppercase mt-4 md:text-left' style={{
                        background: 'linear-gradient(90deg, #FFF 3.8%, #020202 146.47%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                    }}>Our Story</h1>
                    <p className='text-[#9B9B9B] font-normal text-base mt-2 sm:text-start text-center'>
                        At Ignition Nest Labs, we simplify freelancer discovery. Our skilled freelancers offer quality services at affordable prices, specializing in web development, UI/UX design, and creating social media presence. Partner with us for top-tier talent and exceed your expectations. Contact us to begin.
                    </p>
                </div>

                <div style={{
                    transition: 'transform 700ms ease-in-out, opacity 700ms ease-in-out',
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateX(0)' : 'translateX(100px)',
                }}>
                    <Image src="/assets/Story.svg" alt="hero" layout="responsive" width={200} height={200} />
                </div>
            </div>

            <div className='flex flex-col sm:flex-row items-center mt-20 w-full justify-center gap-x-4 md:gap-x-36'>
                <div className='flex flex-col items-center'>
                    <h1 className='font-bold text-4xl sm:text-6xl' style={{
                        background: 'linear-gradient(90deg, #FFF 3.8%, #020202 146.47%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                    }}>{customers}+</h1>
                    <p className='text-[#9B9B9B] text-[20px]'>Happy Customers</p>
                </div>
                <div className='w-[1px] h-20 bg-gradient-to-b from-transparent via-white to-transparent'></div>

                <div className='flex flex-col items-center'>
                    <h1 className='font-bold text-4xl sm:text-6xl' style={{
                        background: 'linear-gradient(90deg, #FFF 3.8%, #020202 146.47%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                    }}>{hours}+</h1>
                    <p className='text-[#9B9B9B] text-[20px]'>Hours Spent on work</p>
                </div>
                <div className='w-[1px] h-20 bg-gradient-to-b from-transparent via-white to-transparent'></div>

                <div className='flex flex-col items-center'>
                    <h1 className='font-bold text-4xl sm:text-6xl' style={{
                        background: 'linear-gradient(90deg, #FFF 3.8%, #020202 146.47%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                    }}>{review}</h1>
                    <p className='text-[#9B9B9B] text-[20px]'>Review rate</p>
                </div>
            </div>



        </div>
    )
}

export default Story
