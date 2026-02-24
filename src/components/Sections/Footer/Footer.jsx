import React, {useState} from 'react'
import call from '../../../assets/images/call.svg'
import email from '../../../assets/images/send.svg'
import location from '../../../assets/images/location.svg'
import { Link, useNavigate } from 'react-router-dom'

const Footer = ({ setShowForm }) => {

    const navigate = useNavigate();

    return (
        <section className='w-full bg-[#000A03]'>
            <div className='w-[92%] m-auto'>
                <div className='flex justify-center sm:justify-end mb-8 pt-15'>
                    <div className='flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-7 text-[#E6E6E682] text-sm font-regular'>
                        <a href="https://wa.me/+223 456 789" target="_blank" rel="noopener noreferrer"><div className='flex gap-2 items-center'>
                            <img src={call} alt="phone icon" />
                            <p>+223 456 789</p>
                            </div></a>
                        <a href="mailto:example@gmail.com" target="_blank" rel="noopener noreferrer"><div className='flex gap-2 items-center'>
                            <img src={email} alt="icon" />
                            <p>example@gmail.com</p>
                            </div></a>
                        <a href="#" target="_blank" rel="noopener noreferrer"><div className='flex gap-2 items-center'>
                            <img src={location} alt="icon" />
                            <p>6391 Elgin St. Celina, Delaware</p>
                            </div></a>
                    </div>
                </div>
                <hr className='text-[#FFFFFF33] h-[2px] mt-4 md:mt-0' />
                <div className='block sm:flex justify-between items-start py-10 w-full'>

                    <div className=' w-full sm:w-[30%]'>
                        <Link to="/" className='font-semibold text-[#ffffff] text-[16px] sm:text-[18px]'>Developer Door</Link>
                        <p className='poppins-regular text-[16px] text-[#7E7E7E] mt-2 w-full sm:w-[70%]'>Connect with world-class engineering teams. We make hiring technical talent transparent, safe, and efficient for everyone.</p>
                        
                    </div>
                    <div className=' w-full sm:w-[20%]'>
                    <p className="text-lg my-3 font-semibold text-[#ffffff]">Plateform</p>
                    <ul className="space-y-2 text-base font-regular text-[#7E7E7E]">
                    <li><Link to="/" className="hover:underline">How it works</Link></li>
                    <li><Link to="/courses" className="hover:underline">Browse Companies</Link></li>
                    <li><Link to="/contact" className="hover:underline">Enterprise</Link></li>
                    <li><Link to="/faqs" className="hover:underline">Faqs</Link></li>
                    </ul>
                </div>
                <div className=' w-full sm:w-[26%]'>
                    <p className="text-lg my-3 font-semibold text-[#ffffff]">Resources</p>
                    <ul className="space-y-2 text-base font-regular text-[#7E7E7E]">
                    <li><Link to="/courses/freelancing" className="hover:underline">Blog</Link></li>
                    <li><Link to="/courses/web-development" className="hover:underline">Case studies</Link></li>
                    <li><Link to="/courses/graphic-designing" className="hover:underline">Help center</Link></li>
                    <li><Link to="/courses/shopify" className="hover:underline">Hiring Guides</Link></li>
                    </ul>
                </div>
                <div className=' w-full sm:w-[26%]'>
                    <p className="text-lg my-3 font-semibold text-[#ffffff]">Company</p>
                    <ul className="space-y-2 text-base font-regular text-[#7E7E7E]">
                    <li><Link to="/courses/freelancing" className="hover:underline">About</Link></li>
                    <li><Link to="/courses/web-development" className="hover:underline">Career</Link></li>
                    <li><Link to="/courses/graphic-designing" className="hover:underline">Contact</Link></li>
                    <li><Link to="/courses/shopify" className="hover:underline">Privacy</Link></li>
                    </ul>
                </div>
                
                    
                </div>
                <hr className='text-[#FFFFFF33] h-[2px] mt-4 md:mt-0' />
                <div className='flex-wrap md:flex w-full justify-center py-8'>
                    <div><p className='poppins-regular text-center text-base text-[#E6E6E6B2]'>© {new Date().getFullYear()} Developer Door | All rights reserved.</p></div>
                    <div className='flex gap-6 mt-5 sm:mt-0'>
                       
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer