import React from 'react'
import FeatureVector from '../../../../assets/images/FeatureVector.svg'
import featureMedia1 from '../../../../assets/images/AdvMockup3.svg'
import featureMedia2 from '../../../../assets/images/AdvMockup4.svg'
import FeatureMockupStr from '../../../../assets/images/FeatureMockupStr.svg'
import FeatureMockupStr1 from '../../../../assets/images/FeatureMockupStr1.png'
import FeatureMockupTilt from '../../../../assets/images/FeatureMockupTilt.svg'
import FeatureMockupTilt1 from '../../../../assets/images/FeatureMockupTilt1.png'
import MiddleMockup from '../../../../assets/images/MiddleMockup.svg'
import leftMockup from '../../../../assets/images/leftMockup.svg'
import rightMockup from '../../../../assets/images/rightMockup.svg'
// import MockupFeature from '../../../../assets/images/MockupFeature.svg'
import { motion as MOTION } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const MediaSections = ({setShowForm }) => {

     const { ref, inView } = useInView({
    triggerOnce: true, // run only once
    threshold: 0.3,    // 30% visible
  });
  return (
    <section className='w-[92%] m-auto relative reveal-section'>
        {/* mobile in hand section */}
        <div className='block sm:flex justify-between gap-10 my-20'>
            {/* Left text section */}
            <MOTION.div 
             initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ staggerChildren: 0.2 }}
            className='w-full sm:w-[55%] py-[70px] flex flex-col justify-between'>
                <div>
                    <MOTION.h1 
                    variants={{
                    hidden: { opacity: 0, x: -100, rotate: -3 },
                    visible: { opacity: 1, x: 0, rotate: 0, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } }
                    }}
                    className='mont-semibold text-[#333333E5] text-[34px] sm:text-[40px]'>Wardrobe Management & AI Suggestions</MOTION.h1>
                    <MOTION.p
                    variants={{
                        hidden: { opacity: 0, x: 100, rotate: 3 },
                        visible: { opacity: 1, x: 0, rotate: 0, transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] } }
                    }}
                    className='poppins-medium text-[#333333CC] text-[17px] sm:text-[20px] pt-6'>Organize your wardrobe digitally and let AI simplify your fashion decisions. Get personalized outfit suggestions based on your style, occasion, and even the weather. Your closet has never been this smart and effortless.</MOTION.p>
                </div>
                    <MOTION.button
                    onClick={() => setShowForm(true)}
                    variants={{
                        hidden: { opacity: 0, y: 80 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
                    }}
                    className='inline-block w-fit mt-5 text-[#fff] poppins-medium text-sm lg:text[17px] cursor-pointer bg-[#E35D49] py-[10px] px-5 rounded-[8px]'>Get Started
                    </MOTION.button>
            </MOTION.div>
            {/*right media section */}
             <MOTION.div
              variants={{
            hidden: { opacity: 0, scale: 0.85, y: 60 },
                visible: {opacity: 1,scale: 1,y: 0,
                transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1], staggerChildren: 0.25,},
                },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="w-full sm:w-[45%] flex justify-start items-center bg-[#E35D4933] rounded-[16px] pt-10 py-6 px-5 relative overflow-hidden">
                <MOTION.div className="flex relative items-start justify-between py-10 px-3 sm:px-7 w-full">
                    <MOTION.img
                    className="pl-0 sm:pl-5 mb-[-2rem] w-[80%] sm:w-[70%] relative z-4"
                    src={FeatureMockupTilt1}
                    alt="feature media"
                    variants={{
                        hidden: { opacity: 0, y: 220, x: 180, rotate: 45 },visible: {opacity: 1,y: 0,x: 0,rotate: 0,
                        transition: { duration: 1.8, ease: [0.16, 1, 0.3, 1] },
                        },
                    }}
                    />
                    <MOTION.img
                    className="absolute right-[1rem] w-[43%] sm:w-[35%] z-1 bottom-[0px]"
                    src={FeatureMockupStr1}
                    alt="feature media"
                     variants={{
                        hidden: { opacity: 0, y: 260, x: 240, rotate: 55 }, visible: { opacity: 1, y: 0, x: 0, rotate: 0,
                        transition: { duration: 2.0, ease: [0.16, 1, 0.3, 1] },
                        },
                    }}
                    />
                </MOTION.div>
                <img className='absolute top-0 left-0 z-0' src={FeatureVector} alt="media 1" />
            </MOTION.div>
        </div>
        <div className='block sm:flex justify-between items-center'>
        {/* Left media section */}
        <MOTION.div
        className="w-full sm:w-[45%] flex justify-start items-center bg-[#E35D4933] rounded-[16px] pt-10 pb-6 px-5 relative overflow-hidden"
        variants={{
            hidden: { opacity: 0, scale: 0.85, y: 60 },
            visible: {opacity: 1,scale: 1,y: 0,
            transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1], staggerChildren: 0.25,},
            },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        >
        {/* Inner image container */}
        <MOTION.div
            className="flex relative items-start justify-between py-2 sm:py-6 px-7 w-full"
        >
            <MOTION.img
            src={featureMedia1}
            alt="feature media"
            className="pl-6 sm:pl-10 w-[70%] sm:w-[50%] relative z-4"
            variants={{
                hidden: { opacity: 0, y: 220, x: 180, rotate: 45 },visible: {opacity: 1,y: 0,x: 0,rotate: -18,
                transition: { duration: 1.8, ease: [0.16, 1, 0.3, 1] },
                },
            }}
            />

            <MOTION.img
            src={featureMedia2}
            alt="feature media"
            className="absolute w-[48%] sm:w-[40%] right-[2rem] sm:right-[4rem] bottom-5 z-4"
            variants={{
                hidden: { opacity: 0, y: 260, x: 240, rotate: 55 }, visible: { opacity: 1, y: 0, x: 0, rotate: 18,
                transition: { duration: 2.0, ease: [0.16, 1, 0.3, 1] },
                },
            }}
            />
        </MOTION.div>

        {/* Optional background */}
        <img
            className="absolute top-0 left-0 z-0"
            src={FeatureVector}
            alt="media 1"
        />
        </MOTION.div>
        {/* Work Better Right text section */}
        <MOTION.div
            className='w-full sm:w-[55%] p-[10px] sm:p-[70px] flex flex-col justify-between'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ staggerChildren: 0.2 }}
        >
            <div>
            <MOTION.h1 
            variants={{
                hidden: { opacity: 0, x: -100, rotate: -3 },
                visible: { opacity: 1, x: 0, rotate: 0, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } }
            }}
            className='mont-semibold text-[#333333E5] text-[34px] sm:text-[40px]'>Virtual Try-On & Smart Shopping</MOTION.h1>
            

            <MOTION.p
            variants={{
                hidden: { opacity: 0, x: 100, rotate: 3 },
                visible: { opacity: 1, x: 0, rotate: 0, transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] } }
            }}
            className='poppins-medium text-[#333333CC] text-[17px] sm:text-[20px] pt-6'
            >
            Try on outfits virtually before wearing them and discover AI-picked items from your favorite brands. Shop smarter with personalized recommendations and exclusive deals, all from the comfort of your home.
            </MOTION.p>
            </div>

            <MOTION.button
                onClick={() => setShowForm(true)}
            variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
            }}
            className='inline-block w-fit text-[#fff] poppins-medium text-sm lg:text[17px] cursor-pointer bg-[#E35D49] py-[10px] px-5 rounded-[8px] mt-8'
            >
            Get Started
            </MOTION.button>
        </MOTION.div>
        </div>

            {/* last images carusal */}
        <div className='block sm:flex justify-between items-center gap-10 my-20'>
            {/* Left text section */}
            <MOTION.div 
             initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ staggerChildren: 0.2 }}
            className='w-full sm:w-[55%] py-[70px] flex flex-col'>
                <div>
                    <MOTION.h1 
                    variants={{
                    hidden: { opacity: 0, x: -100, rotate: -3 },
                    visible: { opacity: 1, x: 0, rotate: 0, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } }
                    }}
                    className='mont-semibold text-[#333333E5] text-[34px] sm:text-[40px]'>Outfit Planner & Style Analytics</MOTION.h1>
                    <MOTION.p
                    variants={{
                        hidden: { opacity: 0, x: 100, rotate: 3 },
                        visible: { opacity: 1, x: 0, rotate: 0, transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] } }
                    }}
                    className='poppins-medium text-[#333333CC] text-[17px] sm:text-[20px] pt-6'>Plan your looks ahead with the AI-powered outfit planner and track your most worn colors, favorite combinations, and seasonal trends. Make informed style choices and stay effortlessly fashionable.</MOTION.p>
                </div>
                    <MOTION.button
                    onClick={() => setShowForm(true)}
                    variants={{
                        hidden: { opacity: 0, y: 80 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
                    }}
                    className='inline-block w-fit mt-10 text-[#fff] poppins-medium text-sm lg:text[17px] cursor-pointer bg-[#E35D49] py-[10px] px-5 rounded-[8px]'>Get Started</MOTION.button>
            </MOTION.div>
            {/*right media section */}
             <MOTION.div
              variants={{
            hidden: { opacity: 0, scale: 0.85, y: 60 },
                visible: {opacity: 1,scale: 1,y: 0,
                transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1], staggerChildren: 0.25,},
                },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="w-full sm:w-[45%] flex justify-start items-center bg-[#E35D4933] rounded-[16px] pt-10 py-6 px-5 relative overflow-hidden">
                <MOTION.div className="flex relative items-start justify-between py-6 px-7 w-full">
                    <MOTION.img
                    className="pl-0 sm:pl-5 pb-[-10px] sm:pb-[-20px] relative z-4"
                    src={FeatureMockupTilt}
                    alt="feature media"
                    variants={{
                        hidden: { opacity: 0, y: 220, x: 180, rotate: 45 },visible: {opacity: 1,y: 0,x: 0,rotate: 0,
                        transition: { duration: 1.8, ease: [0.16, 1, 0.3, 1] },
                        },
                    }}
                    />
                    <MOTION.img
                    className="absolute right-[1rem] w-[50%] sm:w-[37%] bottom-0 z-1"
                    src={FeatureMockupStr}
                    alt="feature media"
                     variants={{
                        hidden: { opacity: 0, y: 260, x: 240, rotate: 55 }, visible: { opacity: 1, y: 0, x: 0, rotate: 0,
                        transition: { duration: 2.0, ease: [0.16, 1, 0.3, 1] },
                        },
                    }}
                    />
                </MOTION.div>
                <img className='absolute top-0 left-0 z-0' src={FeatureVector} alt="media 1" />
            </MOTION.div>
        </div>
        {/* 3 images section */}
        <MOTION.section
         initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ staggerChildren: 0.2 }}
        className='bg-[#E77766] rounded-[20px] pt-10 mb-[100px]'>
            <MOTION.h1
             variants={{
                hidden: { opacity: 0, x: -100, rotate: -3 },
                visible: { opacity: 1, x: 0, rotate: 0, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } }
            }}
            className='mont-semibold text-[#FFFFFFE5] text-center text-[34px] sm:text-[40px] w-[70%] m-auto'>Ready to Upgrade Your Style?</MOTION.h1>
            <MOTION.p
             variants={{
                hidden: { opacity: 0, x: -100, rotate: -3 },
                visible: { opacity: 1, x: 0, rotate: 0, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } }
            }}
            className='poppins-medium text-[#FFFFFFCC] text-center text-[17px] sm:text-[20px] pt-6 w-[80%] m-auto'>Join thousands of fashion lovers transforming their wardrobe with AI. Try personalized outfit suggestions, virtual try-ons, and smart shopping, all for free. No credit card required.</MOTION.p>
            <div className='flex justify-center mt-2'>
            <MOTION.button 
                onClick={() => setShowForm(true)}
                variants={{
                hidden: { opacity: 0, x: -100, rotate: -3 },
                visible: { opacity: 1, x: 0, rotate: 0, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } }
            }}
                className='inline-block text-[#E35D49] poppins-medium text-sm lg:text[17px] cursor-pointer bg-[#fff] py-[10px] px-5 rounded-[8px]'><p>Start Your Free Trial Now</p>
                </MOTION.button>
                </div>
            <MOTION.div className='flex justify-center pt-[60px] overflow-hidden'>
                <MOTION.img
                 variants={{
                    hidden: { opacity: 0, y: 220, x: -180, rotate: -30 },visible: {opacity: 1,y: 0,x: 0,rotate: 0,
                    transition: { duration: 1.8, ease: [0.16, 1, 0.3, 1] },
                    },
                }}
                className='mb-[-2rem] relative z-[0] rotate-[-15deg] w-[40%] sm:w-fit' src={leftMockup} alt="media middle" />
                <MOTION.img
                 variants={{
                    hidden: { opacity: 0, y: 120, rotate: 0 },visible: {opacity: 1,y: 0,x: 0,rotate: 0,
                    transition: { duration: 1.8, ease: [0.16, 1, 0.3, 1] },
                    },
                }}
                className='relative z-10 w-[40%] sm:w-fit' src={MiddleMockup} alt="media middle" />
                <MOTION.img
                 variants={{
                    hidden: { opacity: 0, y: 220, x: 180, rotate: 45 },visible: {opacity: 1,y: 0,x: 0,rotate: 0,
                    transition: { duration: 1.8, ease: [0.16, 1, 0.3, 1] },
                    },
                }}
                className='mb-[-2.2rem] rotate-[15deg] w-[40%] sm:w-fit' src={rightMockup} alt="media middle" />
            </MOTION.div>
        </MOTION.section>
        {/* About us & counter*/}
        {/* <MOTION.section 
        className='my-[120px] w-full sm:w-[90%] m-auto'>
            <MOTION.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ staggerChildren: 0.2 }}
            className="w-full sm:w-[60%]">
            <div className="flex justify-start items-center">
                <MOTION.p 
                 initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
                className="mont-semibold text-[#E35D49] text-xl sm:text-[22px]">About us</MOTION.p>
            </div>
    
            <MOTION.h1 
             initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="mont-semibold text-[#101828] text-[40px] sm:text-[48px] mt-0 pr-8">
            Our mission is to increase theGDP of your startup
            </MOTION.h1>
            <MOTION.p 
             initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="poppins-regular text-[#475467] text-[18px] sm:text-[20px] mt-2">
              Untitled is a technology company that builds infrastructure for your startup, so you don’t have to. Businesses of every size—from new startups to public companies—use our software to manage their businesses.
            </MOTION.p>
          </MOTION.div>
            <div ref={ref} className='block sm:flex justify-between rounded-[16px] p-[64px] bg-[#E6575B14] w-full mt-20'>
                <div className='flex flex-col justify-center items-center'>
                    <h2 className='mont-semibold text-[60px] text-[#E6575B]'>{inView && <CountUp start={0} end={400} duration={2} />}+</h2>
                    <p className='mont-medium text-base sm:text-[18px] text-center text-[#E6575B]'>Lorem ipsum dolor sit amet</p>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <h2 className='mont-semibold text-[60px] text-[#E6575B]'>{inView && <CountUp start={0} end={600} duration={2} />}%</h2>
                    <p className='mont-medium text-base sm:text-[18px] text-center text-[#E6575B]'>Lorem ipsum dolor sit amet</p>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <h2 className='mont-semibold text-[60px] text-[#E6575B]'>{inView && <CountUp start={0} end={10} duration={2} />}k</h2>
                    <p className='mont-medium text-base sm:text-[18px] text-center text-[#E6575B]'>Lorem ipsum dolor sit amet</p>
                </div>
            </div>
        </MOTION.section>
        <MOTION.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ staggerChildren: 0.2 }}
        className='bg-[#E77766] my-[120px] rounded-[24px] py-[64px] text-center px-3'>
            <MOTION.h1 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
            className="mont-semibold text-[#FFFFFFE5] text-[34px] sm:text-[40px]">Ready to Transform Your Workflow?</MOTION.h1>
            <MOTION.p
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
            className="poppins-medium text-[#FFFFFFCC] text-lg sm:text-[20px] w-[70%] m-auto">Join thousands of happy team and take your Productivity to the next level. sign up for free trail today-no credit card required.</MOTION.p>
            <MOTION.button
                onClick={() => setShowForm(true)}
                initial={{ opacity: 0, y: 90 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
            className='inline-block mt-[30px] text-[#E35D49] poppins-medium text-sm lg:text[17px] cursor-pointer bg-[#fff] py-[10px] px-5 rounded-[8px]'>Start your Free Trail Now</MOTION.button>
        </MOTION.section> */}
    </section>
  )
}

export default MediaSections