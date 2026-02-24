import React, { useRef, useEffect, useState } from "react";
import { motion as MOTION } from "framer-motion";
import { ChevronRight, Code, Search, SearchIcon } from "lucide-react";
import herobg from '../../../assets/images/hero-banner2.jpg'
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Clients from "../../Pages/HomePage/Clients";
const Hero = () => {

    const [displayText, setDisplayText] = useState("");
      const [index, setIndex] = useState(0);
      
      const navigate = useNavigate();

      const text = `Connect with <span class="text-[#00BD5F]">Top-Rated Tech Agencies</span> Worldwide`;
      
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
    <div className='h-[70vh] sm:h-[85vh] flex items-center bg-no-repeat mont' style={{backgroundImage: `url(${herobg})`, backgroundPosition: 'center', backgroundSize: 'cover'}}>
        {/* mail, phone links */}
        {/* headings */}
        <div className='ps-4 sm:ps-26 relative w-full sm:w-[80%] z-10 mt-3 sm:-mt-7'>
        
         <h1 className="text-white h-[100px] sm:h-[100px] w-full sm:w-[60%] text-3xl sm:text-3xl md:text-3xl lg:text-[48px] font-semibold whitespace-pre-line" dangerouslySetInnerHTML={{__html: displayText}}></h1>
        <motion.p
          initial={{ y: 80, opacity: 0 }} 
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -50, opacity: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
        className='font-medium h-[110px] sm:h-[90px] text-[#b5b5b5] mt-4 text-basse sm:text-lg w-full sm:w-[59%]'>{paragraphText}</motion.p
        >
        <div className="bg-[#FFFFFF14] w-[90%] sm:w-[57%] px-4.5 py-3 border-[#FFFFFF4D] border-b backdrop-blur-[44px]">
            <div className="flex items-center gap-3">
                <SearchIcon className="text-white" />
                <input type="text" placeholder="Search by skill or company name..." className="placeholder:text-white w-full text-white border-none outline-none" />
            </div>
        </div>
        <motion.div
         initial={{ y: 80, opacity: 0 }} 
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -50, opacity: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
        className='flex items-center gap-4 mt-8'>
            <button onClick={() => navigate('/team')} className='text-[#00BD5F] font-semibold text-sm sm:text-base px-2 sm:px-4 py-2.5 rounded-lg bg-[#00AB391A] border border-[#00BD5F] transition-colors duration-300 flex items-center gap-2 sm:gap-3.5'>Browse Companies <span className="bg-[#00BD5F20] rounded-full w-5 h-5 flex items-center justify-center"><ChevronRight /></span></button>
            <button onClick={() => navigate('/team')}
            className="relative px-4 py-2.5 rounded-lg font-semibold bg-[#00BD5F] transition-colors duration-300">
                <span className="relative z-10 text-white text-sm sm:text-base flex items-center justify-center gap-3">
                    Find Agencies
                     <span className="bg-[#FFFFFF50] rounded-full w-5 h-5 flex items-center justify-center"><ChevronRight /></span>
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