'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Line } from '@/components/constants/Icons'

function Page() {
    const data = {
        name: 'Karan Kumar',
        role: 'Frontend Developer',
        date: '15th Sep, 2023',
        about: `I'm Karan Kumar, a frontend developer with 1.5 years of experience in the field.I'm passionate about building scalable and efficient web applications. I have experience in building web applications using NextJS, ReactJS, and React Native. I'm also familiar with TailwindCSS and NextUI. I'm a quick learner and always eager to learn new technologies.`,
        socials: {
            linkedin: '/assets/icons/Linkedin.svg',
            github: '/assets/icons/github.svg',
            twitter: '/assets/icons/sms.svg',
          
    }}
    return (
        <div className='mt-5 mx-auto container'>
            <div className='flex flex-row items-center mx-6'>
                <Link href="/">
                    <Image src="/assets/arrow-left.svg" alt="arrow" width={20} height={20} className=' cursor-pointer' />
                </Link>
                <h1 className='text-[#9B9B9B] text-sm'>Our Team {" "}
                    <span className='text-white'>/ {data.name}</span>
                </h1>
            </div>

            <div className='relative flex flex-row justify-center gap-x-20 items-center h-[600px] w-full '>
               <div className='flex flex-col items-center gap-y-4'>
               <div className=' relative flex items-center justify-center rounded-full aspect-square w-[400px] '>
                    <div className='absolute w-[300px] bottom-[55px] flex items-end overflow-hidden h-[500px] rounded-full '>
                        <img src="/assets/teams/karan.png" alt="karan" className=' aspect-square grayscale bottom-0 object-cover translate-x-[6px] translate-y-[-36px] scale-[140%] ' />
                    </div>
                    <Image src="/assets/profileCover.svg" alt="Cover" width={400} height={400} className='rounded-full  ' />
                </div>
                <Socials socials={data.socials} />
               </div>

                <div className='flex flex-col items-start w-[50%]'>
                    <p className='text-[#9B9B9B] text-center text-base mt-2'>Joined on: {data.date}</p>
                    <div className='flex flex-row items-start'>
                        <h1 className='text-white text-5xl font-bold text-center mt-5'>{data.name}</h1>
                        <Image src="/assets/spark.svg" alt="line" width={82} height={43} className='w-28 relative bottom-8 -left-5' />
                    </div>
                    <div className=' flex flex-col items-center'>
                        <p className='text-black bg-white px-6 py-2 font-medium rounded-full  text-center relative bottom-4'>{data.role}</p>
                        <Line stroke='#844AFF' />
                    </div>
                    <div className='text-[#9B9B9B] '>
                        <p>
                            {data.about}
                        </p>
                    </div>
                    <SkillTag skills={[
                        "NextJS",
                        "TailwindCSS",
                        "ReactJS",
                        "React Native",
                    ]}
                    />

                </div>
            </div>
        </div>
    )
}

export default Page


const SkillTag = ({ skills }) => {
    return (
        <div className="flex flex-wrap gap-2 mt-4">
            {skills.map((skill, index) => (
                <div
                    key={index}
                    className="text-white hover:bg-white/20 cursor-pointer duration-300 border-[2px] border-[#9B9B9B] border-opacity-40 rounded-full px-5 py-2 my-2 flex items-center justify-center"
                >
                    <h1 className="text-center text-sm md:text-base font-semibold">{skill}</h1>
                </div>
            ))}
        </div>
    );
};

const Socials =({socials, link})=>{
    return(
        <div className='flex gap-4 mt-4'>
      {Object.entries(socials).map(([platform, icon]) => (
        <Link href={platform} key={platform} target='_blank' rel='noopener noreferrer'>
            <img src={icon} alt={`${platform} icon`} width={24} height={24} className='cursor-pointer' />
        </Link>
      ))}
    </div>
    )
}