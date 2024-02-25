'use client'
import AboutUs from "@/components/AboutUs";
import Footer from "@/components/Footer";
import Intro from "@/components/Intro";
import Navbar from "@/components/Navbar";
import Story from "@/components/Story";
import Teams from "@/components/Teams";
import { Analytics } from "@vercel/analytics/react"


export default function Home() {
  return (
   <>
   <Analytics/>
   <div className="min-h-screen">
    <Navbar/>
    <Intro/>
    <Story/>
    <AboutUs/>
    <Teams/>
    <Footer/>

   </div>
   
   </>
  );
}
