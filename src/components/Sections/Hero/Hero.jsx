import React, { useRef, useEffect, useState } from "react";
import { motion as MOTION } from "framer-motion";
import { ChevronRight, Code, Search } from "lucide-react";
import herobg from '../../../assets/images/hero-banner2.jpg'
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
const Hero = () => {

    const [displayText, setDisplayText] = useState("");
      const [index, setIndex] = useState(0);
      
      const navigate = useNavigate();

      const text = 'Connect with Top-Rated\n Tech Agencies Worldwide' ;
      
      useEffect(() => {
        if (index < text.length) {
          const timeout = setTimeout(() => {
            setDisplayText((prev) => prev + text[index]);
            setIndex(index + 1);
          }, 30);
          return () => clearTimeout(timeout);
        }
      }, [index, text]);
    
    
        const useTypewriter = (text, delay = 1000) => {
        const [displayed, setDisplayed] = useState("");
      
        useEffect(() => {
          let i = 0;
          const interval = setInterval(() => {
            setDisplayed(text.slice(0, i + 1));
            i++;
            if (i === text.length) clearInterval(interval);
          }, delay);
          return () => clearInterval(interval);
        }, [text, delay]);
      
        return displayed;
      };
    
    
      const paragraphText = useTypewriter(
        'Post your project, get curated proposals from vetted development companies, and hire with confidence. Save time and reduce risk.',
        20
      );

  return (
   <>
    <section className='bg-linear-to-r from-[#000000] to-[#000000cc] w-full relative'>
        <div className="absolute inset-0 bg-gradient-to-r z-1 from-black to-black/10" />
    <div className='h-[70vh] sm:h-[90vh] flex items-center bg-no-repeat mont' style={{backgroundImage: `url(${herobg})`, backgroundPosition: 'center', backgroundSize: 'cover'}}>
        {/* mail, phone links */}
        {/* headings */}
        <div className='ps-4 sm:ps-26 relative z-10 mt-3 sm:-mt-7'>
        
         <h1 className="text-white h-[60px] sm:h-[100px] text-3xl sm:text-3xl md:text-3xl lg:text-[48px] font-semibold whitespace-pre-line">
        
         {displayText}
        
    </h1>
        <motion.p
          initial={{ y: 80, opacity: 0 }} 
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -50, opacity: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
        className='font-medium h-[110px] sm:h-[90px] text-[#b5b5b5] mt-4 text-basse sm:text-lg w-full sm:w-[59%]'>{paragraphText}</motion.p>
        <motion.div
         initial={{ y: 80, opacity: 0 }} 
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -50, opacity: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
        className='flex items-center gap-4 mt-6'>
            <button onClick={() => navigate('/courses')} className='text-white font-semibold px-4 py-2.5 rounded-lg bg-linear-to-r from-[#31BBD0] to-[#6ec7a7] transition-colors duration-300'>Browse Companies</button>
            <button onClick={() => {
              const reg = document.getElementById('register')
              reg?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="relative px-4 py-2.5 rounded-lg font-semibold bg-black transition-colors duration-300">
                <span className="relative z-10 bg-gradient-to-r from-[#A3D183] to-[#31BBCF] bg-clip-text text-transparent">
                    Find Agencies
                </span>
                <span className="absolute inset-0 rounded-lg p-[1px] bg-gradient-to-r from-[#A3D183] to-[#31BBCF]">
                    <span className="block w-full h-full rounded-lg bg-black"></span>
                </span>
            </button>
        </motion.div>
        </div>
    </div>
    <div className='relative z-10 mt-[-6rem]' style={{alignSelf: 'end'}}>
   

    </div>
    </section>
    </>
  )
}

export default Hero