import { MessageCircle, MessageSquare, NotepadText, ShieldCheck, VerifiedIcon } from 'lucide-react'
import React from 'react'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const HowWroks = () => {
    const steps = [
        {
            icon: <NotepadText/>,
            title: "Post Your Brief",
            desc: "Describe your project requirements, budget, and timeline. Our smart system helps you define what you need."
        },
        {
            icon: <MessageSquare fill='#00BD5F'/>,
            title: "Receive Proposals",
            desc: "Get detailed proposals from pre-vetted agencies within hours. Compare portfolios, reviews, and quotes easily."
        },
        {
            icon: <ShieldCheck/>,
            title: "Hire & Escrow",
            desc: "Select your team and start the project safely. Funds are held in escrow and released only when milestones are met."
        },
    ]

    const { ref, inView } = useInView({
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
    <section className="py-20">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="text-center max-w-2xl mx-auto mb-16">
      <p className='text-base sm:text-lg text-[#00BD5F] font-semibold mb-4'>Our Process</p>
    <h2 className="text-3xl font-semibold tracking-tight text-[#333] sm:text-4xl">How Developer Door Works</h2>
    <p className="mt-4 text-lg font-medium text-[#333333B2]">A simple, transparent process to find your perfect tech partner. From concept to code, we’ve got you covered.</p>
    </div>
    <motion.div
     ref={ref}
    variants={container}
    initial="hidden"
    animate={inView ? "visible" : "hidden"}
    className="grid grid-cols-1 md:grid-cols-3 relative gap-8">
        <svg className='absolute left-60 top-20' width="330" height="12" viewBox="0 0 330 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 4.77356L0 5.67436e-05V11.5471L10 6.77356V4.77356ZM9 5.77356V6.77356H330V5.77356V4.77356H9V5.77356Z" fill="#00BD5F"/>
        </svg>

        <svg className='absolute right-60 top-20' width="330" height="12" viewBox="0 0 330 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M320 6.77356L330 11.5471V5.67436e-05L320 4.77356V6.77356ZM0 5.77356V6.77356H321V5.77356V4.77356H0V5.77356Z" fill="#00BD5F"/>
        </svg>

        {steps.map((st, idx) => (
            <motion.div 
             ref={ref}
            variants={item}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="group relative text-center p-8 hover:border-primary/50 duration-300">
            {/* <div className="absolute top-6 right-6 text-6xl font-semibold text-black/15 ">0{idx+1}</div> */}
            <div className="mb-6 inline-flex size-24 bg-[#00BD5F] border-[#FFFFFF] border-4 shadow-[0_6px_20px_0_#3889FA52] items-center justify-center rounded-full text-primary">
            <span className="material-symbols-outlined font-semibold text-white text-[32px]">0{idx+1}</span>
            </div>
            <h3 className="text-xl font-semibold text-[#333] mb-3">{st.title}</h3>
            <p className="text-gray-400 leading-relaxed">{st.desc}</p>
            </motion.div>

        ))}
    </motion.div>
    </div>
    </section>
    )
}

export default HowWroks