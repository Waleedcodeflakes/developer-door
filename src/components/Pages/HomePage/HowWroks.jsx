import { MessageCircle, MessageSquare, NotepadText, ShieldCheck, VerifiedIcon } from 'lucide-react'
import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import AnimatedArrows from './AnimatedArrows';

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
            threshold: 0.1,    // 20% of the section visible = trigger
        });
    
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

     const lineref = useRef(null)
    const [animate, setAnimate] = useState(false)
    
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setAnimate(false)
            requestAnimationFrame(() => setAnimate(true))
          }
        },
        { threshold: 0.3 }
      )
    
      if (lineref.current) observer.observe(lineref.current)
      return () => observer.disconnect()
    }, [])

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
        <div className='absolute left-0 top-0'>
           
           <AnimatedArrows/>
        </div>
        <div className='absolute left-104 top-0'>
           
           <AnimatedArrows />
        </div>

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