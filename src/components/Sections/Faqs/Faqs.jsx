import React, {useState} from 'react'
import { motion as MOTION, AnimatePresence } from 'framer-motion';
import { useInView } from "react-intersection-observer";
import { ChevronDown } from 'lucide-react';
// import minus from '../../../assets/icons/minus-circle.svg'
import plus from '../../../assets/icons/plus-circle.svg'

const Faqs = ({my, setShowForm}) => {

   const faqs = [
  {
    question: "How does Developer Door recommend by companies?",
    answer:
      "Tempora corrupti et ex, cumque rerum voluptatum veritatis molestiae iusto doloribus ut praesentium obcaecati dolor fugiat error adipisci veniam quam, aliquam nam?"
  },
  {
    question: "How do I upload my wardrobe?",
    answer:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporalestiae iusto doloribus ut praesentium obcaecati dolor fugiat error adipisci veniam quam, aliquam nam?"
  },
  {
    question: "Does Developer Door plan outfits for different occasions?",
    answer:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora corrupti et ex, cu?"
  },
  {
    question: "Is my data safe?",
    answer:
      "Lorem, ipsum dolor sit ameibus ut praesentium obcaecati dolor fugiat error adipisci veniam quam, aliquam nam?"
  },
  {
    question: "Will it work for all body types and sizes?",
    answer:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora corrupti et ex, cumque rerum voluptatum veritatis molestiae iusto doloribus ut praesentium obcaecati dolor fugiat "
  },
  {
    question: "What about the virtual try-on feature?",
    answer:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora corrupti et ex, cumque rerum voluptatum veritatis molestiaer fugiat error adipisci veniam quam, aliquam nam?"
  },
  {
    question: "Can I connect brands or shops?",
    answer:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora corrupti et ex, cumque rerum voluptatum veritatis molestiae iusto doloribus ut praesentium obcaecati dolor fugiat error adipisci veniam quam, aliquam nam?"
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
    <section className='w-[92%] m-auto my-20'>
      <div className='text-center'>
        <h3 className='text-3xl font-semibold tracking-tight text-[#333] sm:text-4xl'>Frequently asked questions</h3>
        <p className='mt-4 text-lg text-gray-400'>Everything you need to know about hiring on Developer Door.</p>
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
            
            className={`rounded-lg mb-2 cursor-pointer transition-colors duration-300 ${ openIndex === index ? "bg-[#75bee23e]" : "bg-[#fff]"}`}
            >
            <div onClick={() => toggleFAQ(index)} className="flex py-5 px-4 sm:px-8 gap-6 sm:items-center text-black text-base sm:text-[18px] poppins-medium" style={{textAlign: 'left', alignItems: 'flex-start'}}>
                <span
                className={`transition-transform w-fit duration-300 ${
                    openIndex === index ? "rotate-0" : "rotate-90"
                }`}
                >
                {openIndex === index ? <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 11H15M21 11C21 16.5228 16.5228 21 11 21C5.47715 21 1 16.5228 1 11C1 5.47715 5.47715 1 11 1C16.5228 1 21 5.47715 21 11Z" stroke="#00BD5F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
 : <img src={plus} />}
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
     
    </section>
  )
}

export default Faqs