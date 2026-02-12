import React from 'react'
import getAppMedia from '../../../assets/images/getAppMedia.svg'
import getAppVector from '../../../assets/images/getAppVector.svg'
// import appstore from '../../../assets/icons/app-store.svg'
// import playstore from '../../../assets/icons/play-store.svg'
import { motion } from 'framer-motion'

const GetApp = ({setShowForm}) => {
  return (
    <motion.section
      initial={{ opacity: 0, x: 180 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
      viewport={{ once: true }}

    className='w-[92%] m-auto bg-[#E35D49] rounded-[12px] block sm:flex overflow-hidden justify-between mt-[157px]'>
      <div className='w-full sm:w-[49%] px-4 sm:px-12 pt-5 sm:pt-0 my-[73px]'>
            <motion.h2 
              initial={{ opacity: 0, x: 180 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
              viewport={{ once: true }}
            className='poppins-medium text-[#fff] text-[32px] sm:text-[36px] mt-5'>Get the App and Style Yourself Smarter.</motion.h2>
            <motion.p
            initial={{ opacity: 0, x: 180 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.7 }}
            viewport={{ once: true }}
            className='poppins-medium text-[#fff] text-[18px] sm:text-[20px] mt-5'>Your AI-powered wardrobe and personal stylist - now in your pocket.</motion.p>
            <div className='block sm:flex justify-start gap-3 my-[50px]'>
                {/* <img src={appstore} alt="icon" />
                <img src={playstore} alt="icon" /> */}
                <motion.button 
                onClick={() => setShowForm(true)}
                  initial={{ opacity: 0, x: 180 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.8 }}
                  viewport={{ once: true }}
                className='inline-block text-[#fff] border border-[#fff] poppins-medium text-sm lg:text[17px] cursor-pointer bg-[#E35D49] py-[10px] px-5 rounded-[8px]'><p>Try FitMe Stylist Free</p></motion.button>
                <motion.button 
                onClick={() => setShowForm(true)}
                  initial={{ opacity: 0, x: 180 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.8 }}
                  viewport={{ once: true }}
                className='inline-block text-[#E35D49] poppins-medium text-sm lg:text[17px] mx-0 mt-4 sm:mt-0 sm:mx-4 cursor-pointer bg-[#fff] py-[10px] px-5 rounded-[8px]'><p>Join Early Access Waitlist</p></motion.button>
            </div>
        </div>
        <div className='w-full sm:w-[50%] relative flex items-end justify-center sm:justify-end'>
            <motion.img 
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            viewport={{ once: true }}
            className='mr-0 sm:mr-[73px]' src={getAppMedia} alt="icon" />
            <img
            className='absolute top-0 right-0' src={getAppVector} alt="icon" />
        </div>
    </motion.section>
  )
}

export default GetApp