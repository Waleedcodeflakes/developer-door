import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// import { useInView } from "react-intersection-observer";
import featureMedia1 from '../../../assets/images/AdvMockup3.svg'
import featureMedia2 from '../../../assets/images/AdvMockup5.svg'

gsap.registerPlugin(ScrollTrigger);

const AdvanceFeatures = ({setShowForm}) => {

     const sectionRef = useRef(null);
  const leftCardsRef = useRef([]);
  const rightCardsRef = useRef([]);
  const bottomCardRef = useRef(null);
  const imageLeftRef = useRef(null);
  const imageRightRef = useRef(null);

//   animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 40%",
        },
        defaults: { ease: "power3.out", duration: 1.1 },
      });

      // LEFT cards - fade in from left/bottom
      tl.fromTo(
        leftCardsRef.current,
        { x: -150, y: 40, opacity: 0 },
        {
          x: 0,
          y: 0,
          opacity: 1,
          stagger: 0.15,
        },
        0
      );

      // RIGHT cards - fade in from right/bottom
      tl.fromTo(
        rightCardsRef.current,
        { x: 150, y: 40, opacity: 0 },
        {
          x: 0,
          y: 0,
          opacity: 1,
          stagger: 0.15,

        },
        "-=0.8"
      );

      // Tilted images (phone mockups)
      tl.fromTo(
        imageLeftRef.current,
        { x: -120, opacity: 0, rotate: -20 },
        { x: 0, opacity: 1, rotate: -10, duration: 1.4, delay: 0.3 },
        "-=1.2"
      );

      tl.fromTo(
        imageRightRef.current,
        { x: 120, opacity: 0, rotate: 20 },
        { x: 0, opacity: 1, rotate: 10, duration: 1.4, delay: 0.3 },
        "-=1.3"
      );

      // Bottom single card - fade up
      tl.fromTo(
        bottomCardRef.current,
        { y: 190, opacity: 0 },
        { y: 0, opacity: 1 },
        "-=0.6"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

    const featuesLeft = [
        {
            id: 1,
            title: 'AI Virtual Try-On',
            desc: 'Upload a body image or 3D scan to see yourself in any outfit , before you wear it.',
        },
         {
            id: 2,
            title: 'Cultural & Body Diversity Modes',
            desc: 'Discover inclusive styles, modest wear, plus size, and cultural outfits for every region.',
        },
    ];
    const featuesRight = [
        {
            id: 3,
            title: 'AI Outfit Visualization',
            desc: 'Experience realistic AI renders using next-gen diffusion models like Stability AI and Runway ML.',
        },
        {
            id: 4,
            title: 'Brand Partnerships & Monetization',
            desc: 'Get outfit suggestions linked with top fashion brands through affiliate shopping.',
        },
    ];
    const featuesBottom = [
        {
            id: 5,
            title: 'Social Feed & Sharing',
            desc: 'Share your looks, get inspiration, and explore the global fashion community.',
        },
    ];
  return (
    <section ref={sectionRef} className="w-[97%] m-auto mt-[130px]">
      <motion.h2
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
        className="poppins-semibold text-center text-[#0F1C2CE5] text-[34px] sm:text-[44px]"
      >
        Upcoming Advanced Features
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        viewport={{ once: true }}
        className="flex justify-center"
      >
        <p className="poppins-medium text-center text-[#333333CC] text-[16px] sm:text-[18px] mt-6 w-[70%]">
          These powerful features are coming soon to make Developer Door the ultimate fashion companion.
        </p>
      </motion.div>
      <div className="flex justify-center">
        <button onClick={() => setShowForm(true)} className="inline-block mt-[20px] text-[#fff] poppins-medium text-sm lg:text[17px] cursor-pointer bg-[#E35D49] py-[10px] px-5 rounded-[8px]">
          Be First to Try Virtual Try-On
        </button>
      </div>
      {/* Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[4px] mt-[64px]">
        {/* Left cards */}
        <div className="flex flex-col justify-center relative gap-14">
          <div className="absolute right-[0px] z-[-1] top-[0px] bg-[#E35D491A] rounded-full w-[390px] h-[390px] blur-[110px]"></div>
          {featuesLeft.map((f, idx) => (
            <div
              key={idx}
              ref={(el) => (leftCardsRef.current[idx] = el)}
              className="px-5 bg-[#fff] rounded-[12px] py-[12px]"
            >
              <div className="flex gap-3 items-center">
                <div className="poppins-medium bg-[#E35D491F] border border-[#E35D4966] rounded-[8px] py-[14px] px-[17px] text-[#E35D49] text-[22px] sm:text-[24px]">
                  0{f.id}
                </div>
                <h3 className="poppins-semibold text-[#E35D49] text-[18px] sm:text-[20px]">
                  {f.title}
                </h3>
              </div>
              <p className="poppins-medium text-[#0F1C2CB2] text-[16px] mt-1">
                {f.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Center phone mockups */}
        <div className="flex relative items-end justify-between py-8 sm:py-0">
          <img
            ref={imageLeftRef}
            className="rotate-[-18deg] w-[50%] pl-10"
            src={featureMedia1}
            alt="feature media"
          />
          <img
            ref={imageRightRef}
            className="absolute right-[3rem] w-[40%] sm:w-[42%] z-3 rotate-[18deg]"
            src={featureMedia2}
            alt="feature media"
          />
        </div>

        {/* Right cards */}
        <div className="flex flex-col justify-center relative gap-14">
          <div className="absolute left-[0px] z-[-1] bottom-[0px] bg-[#E35D491A] rounded-full w-[390px] h-[390px] blur-[110px]"></div>
          {featuesRight.map((f, idx) => (
            <div
              key={idx}
              ref={(el) => (rightCardsRef.current[idx] = el)}
              className="px-5 bg-[#fff] rounded-[12px] py-[12px]"
            >
              <div className="flex gap-3 items-center">
                <div className="poppins-medium bg-[#E35D491F] border border-[#E35D4966] rounded-[8px] py-[14px] px-[17px] text-[#E35D49] text-[22px] sm:text-[24px]">
                  0{f.id}
                </div>
                <h3 className="poppins-semibold text-[#E35D49] text-[18px] sm:text-[20px]">
                  {f.title}
                </h3>
              </div>
              <p className="poppins-medium text-[#0F1C2CB2] text-[16px] mt-1">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom single card */}
      <div className="w-full flex justify-center">
        {featuesBottom.map((f, idx) => (
          <div
            key={idx}
            ref={bottomCardRef}
            className="px-5 bg-[#fff] rounded-[12px] py-[12px] w-full sm:w-[42%] mt-6"
          >
            <div className="flex gap-3 items-center">
              <div className="poppins-medium bg-[#E35D491F] border border-[#E35D4966] rounded-[8px] py-[14px] px-[17px] text-[#E35D49] text-[22px] sm:text-[24px]">
                0{f.id}
              </div>
              <h3 className="poppins-semibold text-[#E35D49] text-[18px] sm:text-[20px]">
                {f.title}
              </h3>
            </div>
            <p className="poppins-medium text-[#0F1C2CB2] text-[16px] mt-1">
              {f.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default AdvanceFeatures