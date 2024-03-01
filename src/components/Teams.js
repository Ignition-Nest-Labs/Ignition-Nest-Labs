'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { data } from '@/components/constants/team';


function Teams() {
    const [activeTab, setActiveTab] = useState('Core');

    const filteredData = data.filter((team) =>
        activeTab === 'Core' ? team.type === 'Core' : team.type !== 'Core'
    );

    const containerRef = useRef(null)
    const [isVisible, setIsVisible] = useState(false)
  

    useEffect(() => {
        const handleScroll = () => {
          if (containerRef?.current) {
            const { top } = containerRef?.current?.getBoundingClientRect()
            const scrollThreshold = window?.innerHeight * 0.75
    
            setIsVisible(top < scrollThreshold)
          }
        }
    
        window.addEventListener("scroll", handleScroll)
        handleScroll()
        return () => window.removeEventListener("scroll", handleScroll)
      }, [])
    

    return (
        <div ref={containerRef} className="container mx-auto px-4 py-8" id='teams'>
            <h1 className='text-4xl font-bold text-center mb-10 mt-14' style={{
                background: 'linear-gradient(90deg, #FFF 3.8%, #020202 146.47%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
            }}>Our Team</h1>

            <div className="mb-5 flex justify-center gap-4 ">
                <button className={`py-2 px-4 rounded-full ${activeTab === 'Core' ? 'bg-white text-black' : 'border-[1px] border-gray-100 border-opacity-20 text-gray-500'}`} onClick={() => setActiveTab('Core')}>
                    Core Members
                </button>
                <button className={`py-2 px-4 rounded-full ${activeTab === 'Member' ? 'bg-white text-black' : 'border-[1px] border-gray-100 border-opacity-20 text-gray-500'}`} onClick={() => setActiveTab('Member')}>
                    Members
                </button>
            </div>

            <div className="flex flex-wrap justify-center gap-8 lg:mx-40">
            {filteredData.map((team, index) => (
                
                    <TeamCard
                     styles={`transition-transform duration-1000 ease-in-out opacity-0  ${
                        isVisible ? "opacity-100 translate-y-0" : "translate-y-72"
                      }`}
                        key={team.id}
                        Name={team.Name}
                        Role={team.Role}
                        profile={team.profile}
                        link={team.link}
                    />
                ))}
            </div>
        </div>
    );
}

export default Teams;

const TeamCard = ({ Name, Role, link, profile, styles }) => {
    return (
        <div className={`${styles} flex flex-col items-center justify-center bg-[#070707] border-[1px] border-[#1E1E1E] px-10 py-5 rounded-xl relative `}>
            <Image src={`/assets/teams/${profile}`} alt="Team" width={500} height={500} className="w-32 h-32 aspect-square object-cover rounded-full" />
            <div className="flex flex-col items-center mt-4">
                <h1 className="text-white font-bold text-2xl">{Name}</h1>
                <h2 className="text-[#9B9B9B] font-normal text-base">{Role}</h2>
            </div>
            {link && (
                <Link href={link} className="absolute right-3 top-3">
                        <Image src="/assets/linkedin.svg" alt="Linkedin" width={30} height={30} />
                </Link>
            )}
        </div>
    );
};
