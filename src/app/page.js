import AboutUs from "@/components/AboutUs";
import Footer from "@/components/Footer";
import Intro from "@/components/Intro";
import Navbar from "@/components/Navbar";
import Story from "@/components/Story";
import Teams from "@/components/Teams";
import Image from "next/image";

export default function Home() {
  return (
   <>
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
