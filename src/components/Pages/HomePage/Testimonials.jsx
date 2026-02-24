import React, { useState } from 'react'
import bg from '../../../assets/images/testionial-bg.jpg'
import profile from '../../../assets/images/hero-banner2.jpg'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
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
        // {
        //     stars: "",
        //     review: "The vetting process here is real. We've worked with three different agencies from the platform for our mobile apps, and the code quality has been consistently top-tier.",
        //     user: "Marcus Chen",
        //     designation: "Product Lead, StreamLine",
        //     profile: "https://lh3.googleusercontent.com/aida-public/AB6AXuDLtAT0fAisKf9LVcw6Zvtf31LZDPYxcBpNlWcJKcCzvny9kMxLodgWZsvBo7D6ILIKRMbk6ZCZ1zSmybAf7J7MTYb-Wq9oBfsP2ee3dGf7ytLuyzuvCXpzaaHMt_Pbibp4a9KKUx6NZtbn6OpSOXk1CNnCJKWIdXNbiJx7jEIn42wct7oPijwt14CsQg2AGXaQr-JyIQKEhK2li85RCcXDY7WHUe-7N8pvFidq5DG_npdwKNdmAiOqsEcqHXUugNX4cr7VhHbPbA')"
        // },
        // {
        //     stars: "",
        //     review: "Escrow protection gave us peace of mind when hiring an overseas team. The milestones were clear, and the release of funds was smooth. Highly recommended platform.",
        //     user: "Elena Rodriguez",
        //     designation: "Founder, HealthStart",
        //     profile: "https://lh3.googleusercontent.com/aida-public/AB6AXuDLtAT0fAisKf9LVcw6Zvtf31LZDPYxcBpNlWcJKcCzvny9kMxLodgWZsvBo7D6ILIKRMbk6ZCZ1zSmybAf7J7MTYb-Wq9oBfsP2ee3dGf7ytLuyzuvCXpzaaHMt_Pbibp4a9KKUx6NZtbn6OpSOXk1CNnCJKWIdXNbiJx7jEIn42wct7oPijwt14CsQg2AGXaQr-JyIQKEhK2li85RCcXDY7WHUe-7N8pvFidq5DG_npdwKNdmAiOqsEcqHXUugNX4cr7VhHbPbA')"
        // },
    ]

    const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? reviews.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === reviews.length - 1 ? 0 : prev + 1
    );
  };

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
    <section className="py-20" style={{backgroundImage: `url(${bg})`, backgroundPosition: 'center'}}>
    <div className=" px-4 sm:px-16 lg:px-8">
    <div className="mb-6">
      <p className='text-base sm:text-lg text-[#00BD5F] font-semibold mb-3'>What Our Client Say</p>
    <h2 className="text-3xl font-semibold tracking-tight text-[#fff] sm:text-4xl">Client Success Stories</h2>
    <p className="mt-1 text-base font-regular text-[#FFFFFFB2]">See how businesses are scaling faster with vetted tech partners.</p>
    </div>
    <motion.div 
     ref={ref}
    variants={container}
    initial="hidden"
    animate={inView ? "visible" : "hidden"}

    className='grid grid-cols-1 w-[55%]'>
    {reviews.map((r, idx) => (
        <motion.div
         ref={ref}
        variants={item}
        transition={{ duration: 0.4, ease: "easeOut" }}
        key={idx} className="relative px-[120px] py-[100px] bg-[#00000033] backdrop-blur-[44px] border border-[#FFFFFF4D] flex flex-col justify-between">
        <span className="material-symbols-outlined absolute top-6 left-6 text-4xl text-primary/20"></span>
        <div className="relative z-10">
        <div className="flex gap-1 text-[#00BD5F] mb-6">
        <span className="material-symbols-outlined filled text-sm"><Star className='w-4 h-4 fill-[#00BD5F]' /></span>
        <span className="material-symbols-outlined filled text-sm"><Star className='w-4 h-4 fill-[#00BD5F]' /></span>
        <span className="material-symbols-outlined filled text-sm"><Star className='w-4 h-4 fill-[#00BD5F]' /></span>
        <span className="material-symbols-outlined filled text-sm"><Star className='w-4 h-4 fill-[#00BD5F]' /></span>
        <span className="material-symbols-outlined filled text-sm"><Star className='w-4 h-4 fill-[#00BD5F]' /></span>
        </div>
        <p className="text-gray-300 mb-8 italic">"{r.review}"</p>
        </div>
        <div className="flex items-center gap-4">
        <div className="size-12 rounded-full bg-gray-700 overflow-hidden">
        <div className="w-full h-full bg-cover bg-center">
            <img src={profile} alt="icon" />
        </div>
        </div>
        <div>
        <div className="font-semibold text-[#fff]">— {r.user}</div>
        <div className="text-xs text-[#EAECF0]">{r.designation}</div>
        </div>
        </div>
        <div className='flex justify-between items-center'>
            <div>dot here</div>
            <div className='flex gap-6 items-center text-white'>
                <div className='w-10 h-10 bg-[#FFFFFF4D] rounded-full flex justify-center items-center cursor-pointer shadow-[0_4px_4px_0_#00000040]'><ChevronLeft className='' /> </div>
                <div className='w-10 h-10 bg-[#FFFFFF4D] rounded-full flex justify-center items-center cursor-pointer shadow-[0_4px_4px_0_#00000040]'><ChevronRight /> </div>
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