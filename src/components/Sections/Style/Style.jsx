import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styleMedia1 from '../../../assets/images/yourStyle1.svg'
import styleMedia2 from '../../../assets/images/yourStyle2.svg'
import icon1 from '../../../assets/icons/tshirt.svg'
import icon2 from '../../../assets/icons/star.svg'
import icon3 from '../../../assets/icons/calendar.svg'
// import download from '../../../assets/icons/download.svg'
import { motion } from "framer-motion";
// import wear1 from '../../../assets/images/wear1.svg'
// import wear2 from '../../../assets/images/wear2.svg'
// import wear3 from '../../../assets/images/wear3.svg'

gsap.registerPlugin(ScrollTrigger);


const Style = ({setShowForm}) => {

    const styles = [
        {
            icon: icon1,
            title: 'Upload Your Wardrobe',
            text: 'Snap photos of your clothes or upload images to build your personal digital closet.',
        },
        {
            icon: icon2,
            title: 'Get AI-Powered Looks',
            text: 'Let AI do the styling magic! Receive outfit suggestions tailored to your mood, weather, and upcoming occasions.',
        },
        {
            icon: icon3,
            title: 'Plan & Track',
            text: 'Save your favorite outfits, plan what to wear for the week, and track your most-worn pieces over time.',
        },
    ]

    const sectionRef = useRef(null);
  const image1Ref = useRef(null);
  const image2Ref = useRef(null);
  const textRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out", duration: 1 },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 50%",
        },
      });

      // Text content fade + slide up
      tl.fromTo(
        textRef.current,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1 },
        0
      );

      // Image1 (small rectangular) - subtle move from left and rotation
      tl.fromTo(
        image1Ref.current,
        { x: -150, opacity: 0, rotate: -20 },
        { x: 0, opacity: 1, rotate: 0, duration: 1.2, delay: 0.2 },
        "-=0.8"
      );

      // Image2 (mobile mockup) - slide up + slight scale in
      tl.fromTo(
        image2Ref.current,
        { y: 200, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, duration: 1.3, delay: 0.2 },
        "-=1"
      );

      // Cards (staggered fade-in from bottom)
      tl.fromTo(
        cardsRef.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 0.5,
          ease: "power2.out",
        },
        "-=0.9"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className='w-[92%] m-auto '>
        <div
      ref={sectionRef}
      className="block sm:flex justify-between items-center gap-6 my-[140px]"
    >
      {/* LEFT SECTION */}
      <div className="w-full sm:w-1/2 relative" ref={textRef}>
        <h2 className="mont-semibold text-left text-[#333333E5] text-[36px] sm:text-[40px] mt-5">
          Your <span className="text-[#E35D49]">Style</span>, Elevated by the Power of{" "}
          <span className="text-[#E35D49]">AI</span>
        </h2>
        <p className="poppins-medium text-left text-[#0F1C2CCC] text-[20px] sm:text-[22px] mt-6">
          Upload your closet, get AI-powered outfit suggestions, and create looks that truly represent you.
        </p>

        <div className="flex items-start justify-center mt-6">
          <img
            ref={image1Ref}
            className="hidden sm:block"
            src={styleMedia1}
            alt="girl image"
          />
          <img
            ref={image2Ref}
            className="mt-12 mb-8 sm:mb-0 ml-0 sm:ml-[-10px]"
            src={styleMedia2}
            alt="mockup"
          />
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="w-full sm:w-1/2 relative">
        <div className="absolute right-[0px] z-[-1] top-[0px] bg-[#E35D491A] rounded-full w-[790px] h-[790px] blur-[130px]"></div>

        {styles.map((s, idx) => (
          <div
            key={idx}
            ref={(el) => (cardsRef.current[idx] = el)}
            className="flex bg-white items-center w-full mb-5 gap-11 rounded-[20px] px-[10px] py-5"
          >
           <div className="bg-[#E35D49] w-28 h-14 sm:w-16 sm:h-16 p-2 sm:p-4 flex items-center justify-center rounded-[12px]">
              <img className="w-6 sm:w-[100%]" src={s.icon} alt={s.title} />
            </div>
            <div>
              <h2 className="mont-semibold text-lg sm:text-xl text-[#101828]">
                {s.title}
              </h2>
              <p className="poppins-medium text-sm sm:text-base mt-4 text-[#333333CC]">
                {s.text}
              </p>
            </div>
          </div>
        ))}

        <motion.button 
        onClick={() => setShowForm(true)}
         initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          viewport={{ once: true }}
        className="cursor-pointer bg-[#E35D49] flex items-center justify-center py-3 gap-3 rounded-[8px] w-full">
          <p className="poppins-medium text-[#fff] text-[18px] sm:text-[20px]">
            Try FitMe Stylist
          </p>
          {/* <img src={download} alt="icon" /> */}
        </motion.button>
      </div>
    </div>
            {/* wear style */}
            {/* <div className='bg-[#E35D490D] rounded-[12px] border border-[#CCCCCC2E] w-full'>
            <h2 className='mont-semibold text-center text-black text-[48px] sm:text-[54px] mt-5'>Create, <span className='text-[#E35D49]'>Style</span>, Wear</h2>
            <p className='poppins-medium text-center text-[#0F1C2CCC] text-[20px] sm:text-[22px] mt-5'>From uploading your wardrobe to generating AI outfits — your personal stylist, redefined.</p>
            <div className='w-full m-auto grid grid-cols-2 sm:grid-cols-3 items-end justify-between mt-[110px] mb-11'>
                <div className='flex items-center justify-center'>
                    <img src={wear1} alt="wear style media" />
                </div>
                <div className='hidden sm:flex items-center justify-center'>
                    <img src={wear2} alt="wear style media" />
                </div>
                <div className='flex items-center justify-center'>
                    <img src={wear3} alt="wear style media" />
                </div>
            </div>
        </div> */}
    </section>
    
  )
}

export default Style