import React, {useState} from 'react'
import app from '../../../assets/images/app-store.svg'
import play from '../../../assets/images/play-store.svg'
// import fb from '../../../assets/icons/fb.svg'
import { Link, useNavigate } from 'react-router-dom'
import { Instagram, FacebookIcon } from 'lucide-react'
import logo from '../../../assets/images/logo2.webp'

const Footer = ({ setShowForm }) => {
    const [showPopup, setShowPopup] = useState(false)

    const navigate = useNavigate();

    return (
        <section className='w-full bg-[#CCCCCC1A]'>
            {showPopup && (
            <div onClick={() => setShowPopup(false)} className='w-full h-screen bg-[#00000080] fixed top-0 left-0 z-50 overflow-y-auto flex justify-center items-center'>
                <div></div>
                <div className='bg-white rounded-[12px] p-10 w-[92%] sm:w-[500px]'>
                <h1 className='poppins-semibold text-[34px] sm:text-[42px] text-[#E35D49] text-center'>FitMe Stylist!</h1>
                <h2 className='poppins-semibold text-[24px] sm:text-[30px] pt-1 text-center'>App comming soon</h2>
                <h2 className='poppins-medium text-base sm:text-[20px] pt-4 text-center'>Just ready to transform your wardrobe</h2>
                <div className='w-full flex justify-center pt-4'>
                <button
                    onClick={() => setShowForm(true)}
                    className='inline-block text-[#fff] mt-4 poppins-medium text-sm lg:text[17px] cursor-pointer bg-[#E35D49] py-[10px] px-5 rounded-[8px]'><p>Notify Me When Live</p>
                </button>
                </div>
                </div>
            </div>
        )}
            <div className='w-[92%] m-auto'>
                <div className='flex-wrap sm:flex justify-between'>
                    <div className='py-6 w-full sm:w-[60%]'>
                        {/* <Link to="/" className='poppins-bold text-[#E35D49] text-[38px] sm:text-[36px]'>FitMe Stylist</Link> */}
                        <img onClick={() => navigate('/')} src={logo} className='w-[35%] sm:w-[19%] cursor-pointer' alt="logo" />
                        <p className='poppins-semibold text-lg sm:text-[24px] text-[#0F1C2CCC]'>Get the App</p>
                        <p className='poppins-regular text-[16px] text-[#0F1C2CCC] mt-2 w-full sm:w-[100%]'>Coming soon on App</p>
                        <button
                            onClick={() => setShowForm(true)}
                            className='inline-block text-[#fff] mt-4 poppins-medium text-sm lg:text[17px] cursor-pointer bg-[#E35D49] py-[10px] px-5 rounded-[8px]'><p>Notify Me When Live</p>
                        </button>
                        <div className='py-6 flex gap-6'>
                            <Link to='/' className='poppins-semibold text-[16px] text-[#E35D49] cursor-pointer'>Home</Link>
                            <Link to='/features' className='poppins-semibold text-[16px] text-[#E35D49] cursor-pointer'>Features</Link>
                            {/* <Link to='/privacy-policy'  className='poppins-semibold text-[16px] text-[#E35D49] cursor-pointer'>Privacy Policy</Link> */}
                            <Link to='/faqs' className='poppins-semibold text-[16px] text-[#E35D49] cursor-pointer'>FAQs</Link>
                        </div>
                    </div>
                    <div className='py-2 md:py-8 flex flex-col items-start gap-4 pl-0 md:pl-5'>
                        <p className='poppins-medium text-[16px] text-[#333]'>Get the app</p>
                        <img onClick={() => setShowPopup(true)} className='cursor-pointer' src={app} alt="play button link" />
                        <img onClick={() => setShowPopup(true)} className='cursor-pointer' src={play} alt="play button link" />
                    </div>
                </div>
                <hr className='text-[#d4d5d9] h-[2px] mt-4 md:mt-0' />
                <div className='flex-wrap md:flex w-full justify-between py-8'>
                    <div><p className='poppins-regular text-base text-[#333333]'>© {new Date().getFullYear()} FitMe Stylist. All rights reserved.</p></div>
                    <div className='flex gap-6 mt-5 sm:mt-0'>
                        {/* <img className='cursor-pointer' src={fb} alt="social icon" /> */}
                        <div className='w-[40px] hidden h-[40px] group rounded-full flex items-center justify-center border-[2px] border-[#999] hover:bg-[#E35D49]'>

                        </div>
                            <FacebookIcon className={`cursor-pointer text-[#999999] hover:text-[#E35D49]`} />
                        <Instagram className={`cursor-pointer text-[#999999] hover:text-[#E35D49]`} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer