import { ArrowRight } from 'lucide-react'
import React from 'react'
import { motion } from 'framer-motion'
const Cta = () => {
  return (
    <section className="cta-gradient py-20 lg:py-24 overflow-hidden relative border-t border-[#283339]">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
<div className="flex flex-col lg:flex-row items-center justify-between gap-12">
<motion.div
 initial={{ opacity: 0, x: -50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
  viewport={{ once: true }}
className="max-w-2xl text-center lg:text-left">
<h2 className="text-4xl lg:text-5xl font-black text-white leading-tight mb-4">
                    Ready to build <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-white">something amazing?</span>
</h2>
<p className="text-lg lg:text-xl text-blue-200 mb-8 font-light">
                    Join <span className="font-bold text-white">500+ companies</span> hiring top-tier tech talent today. No upfront fees, just results.
                </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
<button className="px-8 py-4 bg-white text-[#094b6e] font-bold text-lg rounded-xl shadow-lg hover:shadow-xl hover:bg-gray-100 transition-all transform hover:-translate-y-0.5">
                        Post a Job for Free
                    </button>
<button className="px-8 py-4 bg-[#0c405c] backdrop-blur border border-[#0b5a82] text-white font-bold text-lg rounded-xl hover:bg-primary/30 transition-all">
                        Talk to Sales
                    </button>
</div>
</motion.div>
<div className="relative lg:w-1/2 flex justify-center lg:justify-end">
<motion.div
initial={{ opacity: 0, x: 50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
  viewport={{ once: true }}
className="relative w-64 h-64 lg:w-80 lg:h-80">
<div className="absolute inset-0 bg-gradient-to-tr from-blue-400/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
<div className="relative w-full h-full rounded-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 shadow-2xl flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/10 to-blue-900/40"></div>
<div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-primary/30 rounded-full blur-2xl"></div>
<div className="relative z-10 text-white flex flex-col items-center">
<button className="flex items-center gap-2 bg-primary hover:bg-primary-dark text-white text-lg font-bold px-8 py-3 rounded-full shadow-glow transition-all transform hover:scale-105">
                                Find Agencies
                                <span className="material-symbols-outlined"><ArrowRight className='w-5 h-5' /></span>
</button>
</div>
</div>
<div className="absolute -inset-4 border border-white/5 rounded-full z-0"></div>
<div className="absolute -inset-12 border border-white/5 rounded-full z-0"></div>
</motion.div>
</div>
</div>
</div>
</section>
  )
}

export default Cta