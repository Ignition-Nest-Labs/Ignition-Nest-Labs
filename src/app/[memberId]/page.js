import React from 'react'
import Image from 'next/image'
import { Line } from '@/components/constants/Icons'

function Page() {
    return (
        <div className='mt-5 mx-6'>
            <div className='flex flex-row items-center'>
                <Image src="/assets/arrow-left.svg" alt="arrow" width={20} height={20} className=' cursor-pointer' />
                <h1 className='text-[#9B9B9B] text-sm'>Our Team {" "}
                    <span className='text-white'>/ Karan Kumar</span>
                </h1>
            </div>

            <div className='relative flex flex-row justify-evenly items-center h-[600px] w-full '>
                <div className=' relative flex items-center justify-center rounded-full aspect-square w-[400px] '>
                    <div className='absolute w-[300px] bottom-[55px] flex items-end overflow-hidden h-[500px] rounded-full '>
                        <img src="/assets/teams/rohit.png" alt="karan" className=' aspect-square grayscale bottom-0 object-cover translate-x-[6px] translate-y-[-36px] scale-[140%] ' />
                    </div>
                    <Image src="/assets/profileCover.svg" alt="Cover" width={400} height={400} className='rounded-full  ' />
                </div>

                {/* <div className='flex flex-col items-start '>
                    <p className='text-[#9B9B9B] text-center text-base mt-2'>Joined on: 3rd Oct, 2023</p>
                    <div className='flex flex-row items-start'>
                        <h1 className='text-white text-5xl font-bold text-center mt-5'>Karan Kumar</h1>
                        <Image src="/assets/spark.svg" alt="line" width={82} height={43} className='w-28 relative bottom-8 -left-5' />
                    </div>
                    <div className=' flex flex-col items-center'>
                        <p className='text-black bg-white px-6 py-2 font-medium rounded-full  text-center relative bottom-4'>Frontend Developer</p>
                        <Line stroke='#844AFF' />
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Page