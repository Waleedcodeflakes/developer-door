import { Star } from 'lucide-react'
import React from 'react'
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
const Testimonials = () => {
    const reviews = [
        {
            stars: "",
            review: "We were struggling to find quality React developers for months. Developer Door matched us with DevSquad in 48 hours. The project was delivered ahead of schedule.",
            user: "Sarah Jenkins",
            designation: "CTO, FinTech Global",
            profile: "https://lh3.googleusercontent.com/aida-public/AB6AXuDLtAT0fAisKf9LVcw6Zvtf31LZDPYxcBpNlWcJKcCzvny9kMxLodgWZsvBo7D6ILIKRMbk6ZCZ1zSmybAf7J7MTYb-Wq9oBfsP2ee3dGf7ytLuyzuvCXpzaaHMt_Pbibp4a9KKUx6NZtbn6OpSOXk1CNnCJKWIdXNbiJx7jEIn42wct7oPijwt14CsQg2AGXaQr-JyIQKEhK2li85RCcXDY7WHUe-7N8pvFidq5DG_npdwKNdmAiOqsEcqHXUugNX4cr7VhHbPbA')"
        },
        {
            stars: "",
            review: "The vetting process here is real. We've worked with three different agencies from the platform for our mobile apps, and the code quality has been consistently top-tier.",
            user: "Marcus Chen",
            designation: "Product Lead, StreamLine",
            profile: "https://lh3.googleusercontent.com/aida-public/AB6AXuDLtAT0fAisKf9LVcw6Zvtf31LZDPYxcBpNlWcJKcCzvny9kMxLodgWZsvBo7D6ILIKRMbk6ZCZ1zSmybAf7J7MTYb-Wq9oBfsP2ee3dGf7ytLuyzuvCXpzaaHMt_Pbibp4a9KKUx6NZtbn6OpSOXk1CNnCJKWIdXNbiJx7jEIn42wct7oPijwt14CsQg2AGXaQr-JyIQKEhK2li85RCcXDY7WHUe-7N8pvFidq5DG_npdwKNdmAiOqsEcqHXUugNX4cr7VhHbPbA')"
        },
        {
            stars: "",
            review: "Escrow protection gave us peace of mind when hiring an overseas team. The milestones were clear, and the release of funds was smooth. Highly recommended platform.",
            user: "Elena Rodriguez",
            designation: "Founder, HealthStart",
            profile: "https://lh3.googleusercontent.com/aida-public/AB6AXuDLtAT0fAisKf9LVcw6Zvtf31LZDPYxcBpNlWcJKcCzvny9kMxLodgWZsvBo7D6ILIKRMbk6ZCZ1zSmybAf7J7MTYb-Wq9oBfsP2ee3dGf7ytLuyzuvCXpzaaHMt_Pbibp4a9KKUx6NZtbn6OpSOXk1CNnCJKWIdXNbiJx7jEIn42wct7oPijwt14CsQg2AGXaQr-JyIQKEhK2li85RCcXDY7WHUe-7N8pvFidq5DG_npdwKNdmAiOqsEcqHXUugNX4cr7VhHbPbA')"
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
    <section className="py-20 bg-[#fff]">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="text-center max-w-2xl mx-auto mb-16">
    <h2 className="text-3xl font-bold tracking-tight text-[#333] sm:text-4xl">Client Success Stories</h2>
    <p className="mt-4 text-lg text-gray-400">See how businesses are scaling faster with vetted tech partners.</p>
    </div>
    <motion.div 
     ref={ref}
    variants={container}
    initial="hidden"
    animate={inView ? "visible" : "hidden"}

    className='grid grid-cols-1 sm:grid-cols-3 gap-3'>
    {reviews.map((r, idx) => (
        <motion.div
         ref={ref}
        variants={item}
        transition={{ duration: 0.4, ease: "easeOut" }}
        key={idx} className="relative  p-8 rounded-2xl bg-[#1e2329] border border-[#2d343d] flex flex-col justify-between">
        <span className="material-symbols-outlined absolute top-6 left-6 text-4xl text-primary/20"></span>
        <div className="relative z-10">
        <div className="flex gap-1 text-yellow-500 mb-6">
        <span className="material-symbols-outlined filled text-sm"><Star className='w-4 h-4 fill-yellow-500' /></span>
        <span className="material-symbols-outlined filled text-sm"><Star className='w-4 h-4 fill-yellow-500' /></span>
        <span className="material-symbols-outlined filled text-sm"><Star className='w-4 h-4 fill-yellow-500' /></span>
        <span className="material-symbols-outlined filled text-sm"><Star className='w-4 h-4 fill-yellow-500' /></span>
        <span className="material-symbols-outlined filled text-sm"><Star className='w-4 h-4 fill-yellow-500' /></span>
        </div>
        <p className="text-gray-300 mb-8 italic">"{r.review}"</p>
        </div>
        <div className="flex items-center gap-4">
        <div className="size-12 rounded-full bg-gray-700 overflow-hidden">
        <div className="w-full h-full bg-cover bg-center">
            <img src={r.profile} alt="" /></div>
        </div>
        <div>
        <div className="font-bold text-[#fff]">{r.user}</div>
        <div className="text-xs text-primary">{r.designation}</div>
        </div>
        </div>
        </motion.div>
    ))}

    </motion.div>
    </div>
    </section>
  )
}

export default Testimonials