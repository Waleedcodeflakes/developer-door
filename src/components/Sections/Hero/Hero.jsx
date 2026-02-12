import React, { useRef, useEffect } from "react";
import { motion as MOTION } from "framer-motion";
import { ChevronRight, Code, Search } from "lucide-react";
import { motion } from "framer-motion";
const Hero = ({setShowForm}) => {


  return (
    <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-28 overflow-hidden">
<div className="absolute top-0 right-0 -z-10 h-[600px] w-[600px] translate-x-1/3 -translate-y-1/4 rounded-full bg-primary/20 blur-[120px]"></div>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8 items-center">
<div className="flex flex-col gap-8">
<div className="space-y-4">
<motion.h1
 initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            viewport={{ once: true }}
className="text-4xl font-bold leading-tight tracking-tight text-[#333] sm:text-5xl lg:text-6xl">
                        Door To <span className="text-primary">top-tier</span> Tech Teams.
                        </motion.h1>
<motion.p
 initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            viewport={{ once: true }}
className="text-lg text-gray-400 max-w-xl leading-relaxed">
                            Post your project, get curated proposals from vetted development companies, and hire with confidence. Save time and reduce risk.
                        </motion.p>
</div>
<div className="w-full max-w-lg">
<div className="relative group">
{/* <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/50 to-purple-600/50 rounded-lg blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div> */}
<motion.div
 initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            viewport={{ once: true }}
className="relative flex w-full items-center rounded-lg bg-surface-dark border border-surface-border p-1.5 focus-within:border-primary/50 transition-colors">
<div className="flex h-10 w-10 items-center justify-center text-gray-400">
<span className="material-symbols-outlined"><Search className="w-5 h-5" /></span>
</div>
<input className="h-full w-full border-none bg-transparent px-2 text-base text-[#333] placeholder-gray-500 focus:ring-0 focus:outline-none" placeholder="Search by skill or company name..." type="text" />
<button className="rounded-md bg-primary px-4 py-2 text-sm font-bold text-[#fff] hover:bg-primary-dark">
    Search
</button>
</motion.div>
</div>
</div>
<motion.div
 initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            viewport={{ once: true }}
className="flex flex-wrap gap-2 text-sm">
<span className="text-gray-500 py-1">Popular:</span>
<a className="rounded-full bg-surface-dark border border-surface-border px-3 py-1 border-primary text-[#333] transition-colors" href="#">React</a>
<a className="rounded-full bg-surface-dark border border-surface-border px-3 py-1 border-primary text-[#333] transition-colors" href="#">Python</a>
<a className="rounded-full bg-surface-dark border border-surface-border px-3 py-1 border-primary text-[#333] transition-colors" href="#">Mobile App</a>
<a className="rounded-full bg-surface-dark border border-surface-border px-3 py-1 border-primary text-[#333] transition-colors" href="#">Blockchain</a>
</motion.div>
<motion.div
 initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            viewport={{ once: true }}
className="flex flex-wrap gap-4 pt-4">
<button className="flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-base font-bold text-[#fff] shadow-glow hover:bg-primary-dark transition-all">
                            Find Agencies
                            <span className="material-symbols-outlined text-sm"><ChevronRight className="w-5 h-5" /></span>
</button>
<button className="flex items-center gap-2 rounded-lg border border-surface-border bg-transparent px-6 py-3 text-base font-bold text-[#333] hover:bg-surface-dark hover:border-gray-500 transition-all">
                            Browse Companies
                        </button>
</motion.div>
</div>
<motion.div
 initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            viewport={{ once: true }}
className="relative hidden lg:block h-[500px] w-full perspective-[1000px]">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl"></div>
<div className="glass-card bg-[#192025] absolute top-10 right-10 w-80 rounded-xl p-5 transform rotate-6 scale-90 opacity-60 shadow-2xl transition-transform hover:rotate-3 hover:scale-95 duration-500">
<div className="flex items-center gap-4 mb-4">
<div className="size-10 rounded bg-indigo-500 flex items-center justify-center text-[#333] font-bold">N</div>
<div>
<h4 className="font-bold text-[#fff]">NextGen Labs</h4>
<p className="text-xs text-gray-400">San Francisco, USA</p>
</div>
</div>
<div className="flex gap-2 mb-4">
<div className="h-2 w-16 bg-gray-600 rounded"></div>
<div className="h-2 w-10 bg-gray-600 rounded"></div>
</div>
<div className="h-2 w-full bg-gray-700 rounded mb-2"></div>
<div className="h-2 w-2/3 bg-gray-700 rounded"></div>
</div>
<div className="glass-card bg-[#192025] absolute top-20 right-28 w-80 rounded-xl p-5 transform -rotate-3 scale-95 opacity-80 shadow-2xl z-10 transition-transform hover:-rotate-1 hover:scale-100 duration-500 border border-gray-700/50">
<div className="flex items-center gap-4 mb-4">
<div className="size-10 rounded bg-emerald-500 flex items-center justify-center text-[#333] font-bold">P</div>
<div>
<h4 className="font-bold text-[#fff]">Pixel Crafters</h4>
<p className="text-xs text-gray-400">Berlin, Germany</p>
</div>
</div>
<div className="flex gap-1 text-yellow-500 text-sm mb-3">
<span className="material-symbols-outlined filled text-[16px]">star</span>
<span className="material-symbols-outlined filled text-[16px]">star</span>
<span className="material-symbols-outlined filled text-[16px]">star</span>
<span className="material-symbols-outlined filled text-[16px]">star</span>
<span className="material-symbols-outlined filled text-[16px]">star</span>
</div>
<div className="flex flex-wrap gap-2">
<span className="text-[10px] bg-emerald-900/50 text-emerald-400 px-2 py-1 rounded">Vue.js</span>
<span className="text-[10px] bg-emerald-900/50 text-emerald-400 px-2 py-1 rounded">Node</span>
</div>
</div>
<div className="glass-card bg-[#192025] absolute top-32 right-48 w-80 rounded-xl p-6 z-20 shadow-glow transform transition-all duration-300 hover:-translate-y-2 border border-primary/30">
<div className="flex justify-between items-start mb-4">
<div className="flex items-center gap-4">
<div className="size-12 rounded bg-gradient-to-br from-[#192025] to-purple-600 flex items-center justify-center text-[#333] font-bold text-xl shadow-lg">
<span className="material-symbols-outlined"><Code className="w-5 h-5 text-white" /></span>
</div>
<div>
<h4 className="font-bold text-[#fff] text-lg">Alpha Devs</h4>
<p className="text-xs text-gray-400">Top Rated Agency</p>
</div>
</div>
<div className="bg-primary/20 text-primary px-2 py-1 rounded text-xs font-bold">98% Job Success</div>
</div>
<div className="flex gap-1 text-yellow-400 text-sm mb-4 items-center">
<span className="font-bold text-[#333] mr-1">5.0</span>
<span className="material-symbols-outlined filled text-[18px]" style={{fontVariationSettings: 1}}>star</span>
<span className="material-symbols-outlined filled text-[18px]" style={{fontVariationSettings: 1}}>star</span>
<span className="material-symbols-outlined filled text-[18px]" style={{fontVariationSettings: 1}}>star</span>
<span className="material-symbols-outlined filled text-[18px]" style={{fontVariationSettings: 1}}>star</span>
<span className="material-symbols-outlined filled text-[18px]" style={{fontVariationSettings: 1}}>star</span>
<span className="text-gray-500 text-xs ml-2">(124 reviews)</span>
</div>
<div className="space-y-3 mb-6">
<div className="flex flex-wrap gap-2">
<span className="px-2.5 py-1 rounded-md bg-surface-dark border border-surface-border text-xs text-gray-300">React Native</span>
<span className="px-2.5 py-1 rounded-md bg-surface-dark border border-surface-border text-xs text-gray-300">Python</span>
<span className="px-2.5 py-1 rounded-md bg-surface-dark border border-surface-border text-xs text-gray-300">AWS</span>
</div>
<p className="text-sm text-gray-400 line-clamp-2">
                                We build scalable mobile applications and robust backend systems for startups and enterprises.
                            </p>
</div>
<button className="w-full rounded-lg bg-white py-2.5 text-sm font-bold text-black hover:bg-gray-200 transition-colors">
                            View Profile
                        </button>
</div>
</motion.div>
</div>
</div>
</section>
  )
}

export default Hero