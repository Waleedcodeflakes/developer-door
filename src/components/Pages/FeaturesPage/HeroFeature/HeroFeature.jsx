import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion as MOTION } from "framer-motion";


gsap.registerPlugin(ScrollTrigger);

const HeroFeature = ({ setShowForm, tag, title, desc }) => {

     const heroRef = useRef(null);
      const textRef = useRef(null);
      const image1Ref = useRef(null);
      const image2Ref = useRef(null);
    
      useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    
        // Animate heading + text
        tl.fromTo(
          textRef.current.querySelectorAll("h1, p, button"),
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 1, stagger: 0.2 }
        );
    
        // Animate heroMedia2 (straight image) from right
        tl.fromTo(
          image2Ref.current,
          { x: 200, opacity: 0 },
          { x: 0, opacity: 1, duration: 1.8 },
          "-=1"
        );
    
        // Animate heroMedia1 (tilted image) from left to right & rotate
        tl.fromTo(
        image1Ref.current,
        { x: -200, opacity: 0, rotate: -20 }, // starts slightly tilted
        { x: 0, opacity: 1, rotate: 0, duration: 1.3, ease: "power3.out" }, // straightens smoothly
        "-=1"
        );
       
      }, []);

  return (
     <section className='w-[92%] m-auto relative reveal-section'>
            <div ref={heroRef} className="flex justify-between items-center mt-[140px] relative overflow-hidden">
          {/* Left text section */}
          <div ref={textRef} className="w-full">
            <div className="flex justify-center items-center">
              <MOTION.div 
                initial="hidden" 
                animate="visible"
                className="flex gap-3 justify-center items-center rounded-[40px] w-fit py-2"
              >
                <MOTION.span
                  variants={{
                    hidden: { opacity: 0, y: 40 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      x: 0,
                      rotate: 0,
                      transition: { duration: 1.8, ease: [0.16, 1, 0.3, 1] },
                    },
                  }}
                  className="w-[10px] rounded-full h-[10px] bg-[#E35D49]"
                />
                <p className="mont-semibold text-[#E35D49] text-lg sm:text-xl">
                  {tag}
                </p>
              </MOTION.div>
            </div>
    
            <h1 className="mont-semibold text-[#333333E5] text-center text-[36px] sm:text-[40px] mt-2 pr-8 w-full sm:w-[60%] m-auto">
             {title}
            </h1>
    
            <p className="poppins-medium text-[#333333CC] text-[18px] text-center sm:text-[20px] mt-3 w-full sm:w-[70%] m-auto">
              {desc}
            </p>
            <div className="flex justify-center">
            <button
              onClick={() => setShowForm(true)}
            className="inline-block my-[44px] text-[#fff] poppins-medium text-sm lg:text[17px] cursor-pointer bg-[#E35D49] py-[10px] px-5 rounded-[8px]">
             Start Free Trial
            </button>
            </div>
          </div>
        </div>
        </section>
  )
}

export default HeroFeature