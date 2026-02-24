import { ArrowRight } from 'lucide-react'
import React from 'react'
import paper from '../../../assets/images/paper-plane.svg'
import { motion } from 'framer-motion'
const Cta = () => {
  return (
    <section className=" py-20 lg:py-24 overflow-hidden relative">
      <div className='bg-[#00BD5F] rounded-xl py-16 px-11 w-[92%] m-auto'>
        <div className='block sm:flex justify-between items-center'>
          <div className='flex items-start gap-4 w-full sm:w-[50%]'>
            <img className=' hidden sm:block' src={paper} alt="paper plan" />
            <div>
             <h3 className='text-3xl font-medium tracking-tight text-[#fff] sm:text-4xl'>Ready to build something amazing?</h3>
          <p className='mt-4 text-sm sm:text-lg text-[#fff]'>Join <span className='font-bold'>500+ companies</span> hiring top-tier tech talent today.<br/> No upfront fees, just results.</p>

            </div>
          </div>
          <div className='block sm:flex items-start gap-4 w-full sm:w-[40%] md:w-[35%]'>
            <button className='text-white w-full mt-4 sm:mt-0 font-semibold border-[2px] border-[#fff] bg-[#00BD5F] rounded-full py-3 px-8'>Post a Job for Free</button>
            <button className='text-[#00BD5F] w-full mt-4 sm:mt-0 font-semibold border bg-[#fff] rounded-full py-3 px-8'>Talk to Sales</button>
          </div>
        </div>
      </div>

</section>
  )
}

export default Cta