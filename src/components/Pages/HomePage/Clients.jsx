import { CloudCog, InfinityIcon, PyramidIcon, Sparkles } from 'lucide-react'
import React from 'react'
import verify from '../../../assets/icons/verify.svg'
import star from '../../../assets/icons/star.svg'
import cube from '../../../assets/icons/cube.svg'
// import { Infinity } from 'lucide-react'

const Clients = () => {
  return (
    <section className=" bg-[#121212] !h-full">
    <div className="mx-auto  px-4 sm:px-6 lg:px-8 py-8">
    <div className="flex flex-col lg:flex-row gap-8 items-center justify-between">
      <div className="flex gap-8 sm:gap-12 bg-black">
    <div className="flex flex-col">
    <span className="text-2xl font-bold text-white flex gap-2 items-center"><img src={verify} alt="icon" /> 500+</span>
    <span className="text-sm font-medium text-gray-400">Projects Posted</span>
    </div>
    <div className="flex flex-col">
    <span className="text-2xl font-bold text-white flex gap-2 items-center"><img src={star} alt="icon" />24h</span>
    <span className="text-sm font-medium text-gray-400">Avg. Response Time</span>
    </div>
    <div className="flex flex-col">
    <span className="text-2xl font-bold text-white flex gap-2 items-center"><img src={cube} alt="icon" />$10M+</span>
    <span className="text-sm font-medium text-gray-400">Project Value</span>
    </div>
    </div>

    <div className="flex flex-wrap justify-center gap-8 opacity-60 transition-all text-white duration-500 bg-[#121212]">

    <div className="flex items-center gap-2 bg-[#121212]">
    <span className="material-symbols-outlined text-4xl"><InfinityIcon/></span>
    <span className="font-semibold text-xl text-white tracking-tighter">METAWEB</span>
    </div>
    <div className="flex items-center gap-2">
    <span className="material-symbols-outlined text-4xl"><PyramidIcon/></span>
    <span className="font-semibold text-xl text-white tracking-tighter">PAYFLOW</span>
    </div>
    <div className="flex items-center gap-2">
    <span className="material-symbols-outlined text-4xl"><CloudCog/></span>
    <span className="font-semibold text-xl text-white tracking-tighter">CLOUDBASE</span>
    </div>
    <div className="flex items-center gap-2">
    <span className="material-symbols-outlined text-white text-4xl"><Sparkles  /></span>
    <span className="font-semibold text-xl text-white tracking-tighter">SPARK</span>
    </div>
    </div>

    </div>
    </div>
    </section>
  )
}

export default Clients