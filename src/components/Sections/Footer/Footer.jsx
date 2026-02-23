import React, {useState} from 'react'
// import fb from '../../../assets/icons/fb.svg'
import { Link, useNavigate } from 'react-router-dom'
import { Instagram, FacebookIcon, Mail } from 'lucide-react'

const Footer = ({ setShowForm }) => {

    const navigate = useNavigate();

    return (
        <section className='w-full bg-[#CCCCCC1A]'>
            <div className='w-[92%] m-auto'>
                <div className='block sm:flex justify-between py-16'>
                    <div className=' w-full sm:w-[20%]'>
                        <Link to="/" className='font-bold text-[#00BD5F] text-[38px] sm:text-[36px]'>Developer Door</Link>
                        <p className='poppins-regular text-[16px] text-[#0F1C2CCC] mt-2 w-full sm:w-[100%]'>Connect with world-class engineering teams. We make hiring technical talent transparent, safe, and efficient for everyone.</p>
                        
                    </div>
                    <div className=' w-full sm:w-[20%]'>
                    <p className="text-lg my-3 font-semibold text-[#00BD5F]">Plateform</p>
                    <ul className="space-y-2 text-base font-regular text-[#8186A6]">
                    <li><Link to="/" className="hover:underline">How it works</Link></li>
                    <li><Link to="/courses" className="hover:underline">Browse Companies</Link></li>
                    <li><Link to="/contact" className="hover:underline">Enterprise</Link></li>
                    <li><Link to="/faqs" className="hover:underline">Faqs</Link></li>
                    </ul>
                </div>
                <div className=' w-full sm:w-[26%]'>
                    <p className="text-lg my-3 font-semibold text-[#00BD5F]">Resources</p>
                    <ul className="space-y-2 text-base font-regular text-[#8186A6]">
                    <li><Link to="/courses/freelancing" className="hover:underline">Blog</Link></li>
                    <li><Link to="/courses/web-development" className="hover:underline">Case studies</Link></li>
                    <li><Link to="/courses/graphic-designing" className="hover:underline">Help center</Link></li>
                    <li><Link to="/courses/shopify" className="hover:underline">Hiring Guides</Link></li>
                    </ul>
                </div>
                <div className=' w-full sm:w-[26%]'>
                    <p className="text-lg my-3 font-semibold text-[#00BD5F]">Company</p>
                    <ul className="space-y-2 text-base font-regular text-[#8186A6]">
                    <li><Link to="/courses/freelancing" className="hover:underline">About</Link></li>
                    <li><Link to="/courses/web-development" className="hover:underline">Career</Link></li>
                    <li><Link to="/courses/graphic-designing" className="hover:underline">Contact</Link></li>
                    <li><Link to="/courses/shopify" className="hover:underline">Privacy</Link></li>
                    </ul>
                </div>
                
                    
                </div>
                <hr className='text-[#d4d5d9] h-[2px] mt-4 md:mt-0' />
                <div className='flex-wrap md:flex w-full justify-between py-8'>
                    <div><p className='poppins-regular text-base text-[#333333]'>© {new Date().getFullYear()} Developer Door | All rights reserved.</p></div>
                    <div className='flex gap-6 mt-5 sm:mt-0'>
                        {/* <img className='cursor-pointer' src={fb} alt="social icon" /> */}
                        <div className='w-[40px] hidden h-[40px] group rounded-full flex items-center justify-center border-[2px] border-[#999] hover:bg-[#00BD5F]'>

                        </div>
                            <FacebookIcon className={`cursor-pointer text-[#999999] hover:text-[#00BD5F]`} />
                        <Instagram className={`cursor-pointer text-[#999999] hover:text-[#00BD5F]`} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer