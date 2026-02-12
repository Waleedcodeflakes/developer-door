import React, {useState} from 'react'
import { motion as MOTION, AnimatePresence } from 'framer-motion';
import { useInView } from "react-intersection-observer";
import { ChevronDown } from 'lucide-react';
// import minus from '../../../assets/icons/minus-circle.svg'
// import plus from '../../../assets/icons/plus-circle.svg'

const Faqs = ({my, setShowForm}) => {

   const faqs = [
  {
    question: "How does FitMe Stylist recommend outfits?",
    answer:
      "FitMe Stylist uses AI to suggest outfits based on your wardrobe, personal style, body type, occasion, current fashion trends, and even the local temperature and weather."
  },
  {
    question: "Can I try the app for free?",
    answer:
      "Yes! You can use FitMe Stylist for free by filling out a simple form to get early access. Free users can upload clothes, get AI outfit recommendations, and explore wardrobe planning features."
  },
  {
    question: "What kind of analytics does the app provide?",
    answer:
      "The app tracks your wardrobe usage, showing most-worn items, unused pieces, and cost-per-wear, helping you make smarter style decisions."
  },
  {
    question: "How do I upload my wardrobe?",
    answer:
      "Upload photos directly from your phone or take snaps inside the app. You can categorizes your items for easy outfit planning."
  },
  {
    question: "Does FitMe Stylist plan outfits for different occasions?",
    answer:
      "Yes! The AI creates daily looks, special-event outfits, and weekly plans tailored to your style, mood, and weather."
  },
  {
    question: "Is my data safe?",
    answer:
      "Absolutely. All your wardrobe images and personal info are securely stored and handled with privacy in mind."
  },
  {
    question: "Will it work for all body types and sizes?",
    answer:
      "Yes! FitMe Stylist provides personalized outfit suggestions for every body type, shape, and style preference."
  },
  {
    question: "What about the virtual try-on feature?",
    answer:
      "Coming soon! You’ll be able to see yourself in outfits virtually before wearing them, making styling even easier."
  },
  {
    question: "Can I connect brands or shops?",
    answer:
      "Yes! Future updates will provide curated outfit suggestions from partner brands for inspiration and shopping."
  },
];

const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

   const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    // Framer motion variants for staggered animation
    const container = {
        hidden: {},
        visible: {
            transition: {
            staggerChildren: 0.1, // gap between cards
            },
        },
    };

    const item = {
        hidden: { y: 50, opacity: 0 },
        visible: { y: 0, opacity: 1 },
    };

  return (
    <section className='w-[92%] m-auto' style={{marginTop: my ? my : 'my-20', marginBottom: my ? my : 'my-20'}}>
      <div className='text-center'>
        <h3 className='my-1 poppins-semibold text-[26px] md:text-[36px] text-[#101828]'>Frequently asked questions</h3>
        <p className='poppins-regular text-[18px] md:text-xl text-[#475467]'>Everything you need to know about the product and billing.</p>
      </div>
      {/* faqs */}
      <AnimatePresence>
         <MOTION.div
            ref={ref}
            variants={container}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
         className="w-[95%] md:w-[65%] m-auto mt-8">
        {faqs.map((faq, index) => (
            <AnimatePresence key={index}>
              <MOTION.h2
              ref={ref}
            variants={item}
            transition={{ duration: 0.6, ease: "easeOut" }}
               className='text-black text-base sm:text-[18px] poppins-semibold mb-3 mt-4'>{faq.title}</MOTION.h2>
            <MOTION.div
            ref={ref}
            variants={item}
            transition={{ duration: 0.6, ease: "easeOut" }}
            
            className={`rounded-lg mb-2 cursor-pointer transition-colors duration-300 ${ openIndex === index ? "bg-[#E35D4914]" : "bg-[#fff]"}`}
            >
            <div onClick={() => toggleFAQ(index)} className="flex py-5 px-4 sm:px-8 gap-6 sm:items-center text-black text-base sm:text-[18px] poppins-medium" style={{textAlign: 'left', alignItems: 'flex-start'}}>
                <span
                className={`transition-transform w-fit duration-300 ${
                    openIndex === index ? "rotate-0" : "rotate-90"
                }`}
                >
                {openIndex === index ? <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 11H15M21 11C21 16.5228 16.5228 21 11 21C5.47715 21 1 16.5228 1 11C1 5.47715 5.47715 1 11 1C16.5228 1 21 5.47715 21 11Z" stroke="#E35D49" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
 : <ChevronDown className='w-5 h-5' />}
                </span>
                <span className='w-[92%] sm:w-fit'>{faq.question}</span>
            </div>
            <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                openIndex === index
                    ? "min-h-fit opacity-100 mt-2"
                    : "max-h-0 opacity-0"
                }`}
            >
                <p style={{textAlign: 'left'}} className="text-[#475467] h-full px-8 pb-9 pt-1 poppins-regular text-sm sm:text-[16px] leading-relaxed" dangerouslySetInnerHTML={{ __html: faq.answer }}></p>
            </div>
            </MOTION.div>
            </AnimatePresence>
        ))}
        </MOTION.div>
      </AnimatePresence>
      <MOTION.h2 
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        viewport={{ once: true }}
      className='poppins-medium text-[#101828] text-lg mt-6 text-center'>Still have questions?</MOTION.h2>
        <MOTION.div
          initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        viewport={{ once: true }}
        className='flex justify-center items-center gap-6 mt-[24px] mb-[44px]'>
          <button onClick={() => setShowForm(true)} className='poppins-medium cursor-pointer text-[#E35D49] text-sm sm:text-base rounded-[8px] px-5 py-[9px] border border-[#E35D49]'>Contact Us</button>
          <button onClick={() => setShowForm(true)} className='poppins-medium cursor-pointer text-white bg-[#E35D49] text-sm sm:text-base rounded-[8px] px-5 py-[10px]'>Join the Waitlist</button>
        </MOTION.div>
    </section>
  )
}

export default Faqs