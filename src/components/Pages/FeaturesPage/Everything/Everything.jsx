import React from 'react'
import { motion as MOTION } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Everything = () => {

       const featuesTop = [
        {
            id: 1,
            title: 'Smart Wardrobe Management',
            desc: 'Upload your clothes and let App do the organizing. FitMe Stylist sorts by color, category, and occasion, keeping your wardrobe simple and structured.',
        },
         {
            id: 2,
            title: 'AI Outfit Suggestions',
            desc: 'Get daily outfit ideas based on weather, trends, and your personal style. Stay effortlessly stylish, every day, for every occasion.',
        },        
         {
            id: 3,
            title: 'Style Analytics & Insights',
            desc: 'Track your most worn outfits, color preferences, and fashion patterns. Discover what truly defines your style and make smarter fashion choices.',
        },
    ];
    const featuesBottom = [
         {
            id: 4,
            title: 'Virtual Try-On & Sharing (Coming Soon)',
            desc: 'Preview your outfits before you wear them. Try virtually, capture your favorite looks, and share them with your circle.',
        },
        {
            id: 5,
            title: 'Smart Shopping (Comming Soon)',
            desc: 'Explore outfits from your favorite brands. Shop confidently with personalized suggestions and exclusive partner deals.',
        },
    ];

     const { ref, inView } = useInView({
        triggerOnce: true, // animate only first time (optional)
        threshold: 0.2,    // 20% of the section visible = trigger
    });
     const { ref: ref2, inView: inview2 } = useInView({
        triggerOnce: true, // animate only first time (optional)
        threshold: 0.2,    // 20% of the section visible = trigger
    });

     const container = {
            hidden: {},
            visible: {
                transition: {
                staggerChildren: 0.3, // gap between cards
                },
            },
        };
    
        const item = {
            hidden: { y: 50, opacity: 0 },
            visible: { y: 0, opacity: 1 },
        };

  return (
     <section className="w-[92%] m-auto my-[130px]">
      <MOTION.h2
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
        className="poppins-semibold text-center text-[#0F1C2CE5] text-[34px] sm:text-[40px]"
        >
        Everything You Need, All in One Place
        </MOTION.h2>

        <MOTION.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            viewport={{ once: true }}
        className="flex justify-center"
        >
        <p className="poppins-medium text-center text-[#0F1C2C99] text-[16px] sm:text-[18px] mt-2 w-full sm:w-[56%]">
           Explore the smart features that make FitMe Stylist your personal AI stylist and fashion planner.
        </p>
        </MOTION.div>
        <MOTION.div 
            ref={ref}
            variants={container}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
        className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[40px] mt-[32px]'>
             <div className="absolute right-[0px] z-[-1] top-[0px] bg-[#E35D491A] rounded-full w-[390px] h-[390px] blur-[110px]"></div>
          {featuesTop.map((f, idx) => (
            <MOTION.div
                ref={ref}
                variants={item}
                transition={{ duration: 0.6, ease: "easeOut" }}
            
              key={idx}
            //   ref={(el) => (leftCardsRef.current[idx] = el)}
              className="px-5 bg-[#fff] rounded-[12px] py-[12px] border border-[#CCCCCCB2]"
            >
                <div className="poppins-medium w-fit bg-[#E35D491F] border border-[#E35D4966] rounded-[8px] py-[14px] px-[17px] text-[#E35D49] text-[22px] sm:text-[24px]">
                  0{f.id}
                </div>
                <h3 className="poppins-semibold text-[#E35D49] text-[18px] sm:text-[20px] my-5">
                  {f.title}
                </h3>
              <p className="poppins-medium text-[#0F1C2CB2] text-[16px] mt-1">
                {f.desc}
              </p>
            </MOTION.div>
          ))}
        </MOTION.div>
        <MOTION.div 
            ref={ref2}
            variants={container}
            initial="hidden"
            animate={inview2 ? "visible" : "hidden"}
        className='block sm:flex gap-[40px] justify-center mt-[40px] w-full sm:w-[60%] m-auto'>
            {featuesBottom.map((f, idx) => (
            <MOTION.div
                ref={ref2}
                variants={item}
                transition={{ duration: 0.6, ease: "easeOut" }}
              key={idx}
            //   ref={(el) => (leftCardsRef.current[idx] = el)}
              className="px-5 bg-[#fff] rounded-[12px] w-full sm:w-[50%] mb-[40px] sm:mt-[0px] py-[12px] border border-[#CCCCCCB2]"
            >
                <div className="poppins-medium w-fit bg-[#E35D491F] border border-[#E35D4966] rounded-[8px] py-[14px] px-[17px] text-[#E35D49] text-[22px] sm:text-[24px]">
                  0{f.id}
                </div>
                <h3 className="poppins-semibold text-[#E35D49] text-[18px] sm:text-[20px] my-5">
                  {f.title}
                </h3>
              <p className="poppins-medium text-[#0F1C2CB2] text-[16px] mt-1">
                {f.desc}
              </p>
            </MOTION.div>
          ))}
        </MOTION.div>
    </section>
  )
}

export default Everything