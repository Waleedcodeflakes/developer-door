import React, {useState} from 'react'
import { NavLink, Link, useNavigate } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const Navbar = ({showForm, setShowForm}) => {
    const [navLinks, setNavLinks] = useState(false)

    const navigate = useNavigate();
    
  return (
    <section className='w-full fixed top-0 bg-[#fff] shadow-[0px_0px_24px_0px_#00000010] z-20'>
        {showForm && (
            <div className='w-full h-screen bg-[#00000080] fixed top-0 left-0 z-50 overflow-y-auto'>
                <div onClick={() => setShowForm(false)} className=' w-full h-screen absolute z-[-1]'></div>
                {/* <Form className="overflow-y-auto" showForm={showForm} setShowForm={setShowForm} />  */}
            </div>
        )}
            <div className='w-[92%] m-auto gap-10 flex justify-between items-center py-2 md:py-3'>
                <div className='cursor-pointer w-full sm:w-[18%]'>
                    <h1 onClick={() => navigate('/')} className='font-bold text-[#0982be] text-[28px] sm:text-[22px]'>Developer Door</h1>
                </div>
                <nav className='md:block'>
                        <ul className='hidden md:flex gap-12 text-[#0F1C2C] font-medium text-sm lg:text-[16px]'>
                        <li className='inline-block font-medium text-sm lg:text-[16px]  py-0 cursor-pointer'><NavLink to="/" className={({ isActive }) =>`${isActive ? 'text-[#0982be] border-b-[3px] border-[#0982be] font-medium' : 'text-[#0F1C2C] '}`}>Home</NavLink></li>
                        <li className='inline-block font-medium text-sm lg:text-[16px]  py-0 cursor-pointer'> <NavLink  to="/team" className={({ isActive }) =>`${isActive ? 'text-[#0982be] border-b-[3px] border-[#0982be] font-medium' : 'text-[#0F1C2C] '}`}>Development Team</NavLink></li>
                        {/* <li className='inline-block  text-sm lg:text-[16px]  py-0 cursor-pointer'> <NavLink  to="/privacy-policy" className={({ isActive }) =>`${isActive ? 'text-[#0982be] border-b-[3px] border-[#0982be] font-medium' : 'text-[#0F1C2C] '}`}>Privacy Policy</NavLink></li> */}
                        <li className='inline-block  text-sm lg:text-[16px]  py-0 cursor-pointer'> <NavLink  to="/faqs" className={({ isActive }) =>`${isActive ? 'text-[#0982be] border-b-[3px] border-[#0982be] font-medium' : 'text-[#0F1C2C] '}`}>FAQs</NavLink></li>
                    </ul>
                </nav>
                <div className='hidden md:flex items-center ml-4'>
                    <button onClick={() => navigate('/team')} className='inline-block text-[#fff] font-medium text-sm lg:text[17px] mx-4 cursor-pointer bg-[#0982be] py-[10px] px-5 rounded-[8px]'><p>Find Agencies</p></button>
                </div>
                <div className='block md:hidden'>
                    <Menu onClick={() => {setNavLinks(true)}} className='w-6 h-6' />
                </div>
                {/* navbar responsive */}
                {navLinks && (
                <div className='w-full h-screen bg-[#00000080] fixed top-0 left-0 z-50'>
                    <div className='w-[70%] h-full bg-[#0982be] p-6 relative rounded-r-2xl'>
                        <div className='flex justify-between'>
                            <h1 onClick={() => {navigate('/'); setNavLinks(false)}} className='font-bold text-[#fff] text-[24px] sm:text-[38px] sm:text-[36px]'>Developer Door</h1>
                            <button onClick={() => setNavLinks(false)} className='text-[#fff] font-medium text-sm lg:text-xl cursor-pointer rounded-[8px]'>
                                <X className='w-6 h-8'/></button>
                        </div>  
                        <nav className='mt-10'>
                            <ul className='flex flex-col gap-8 font-medium'>
                                 <li className='inline-block font-medium text-sm lg:text-[16px]  py-0 cursor-pointer'><NavLink to="/" className={({ isActive }) =>`${isActive ? 'text-[#fff] border-b-[3px] border-[#fff] font-medium' : 'text-[#fff] '}`}>Home</NavLink></li>
                                <li className='inline-block font-medium text-sm lg:text-[16px]  py-0 cursor-pointer'> <NavLink  to="/features" className={({ isActive }) =>`${isActive ? 'text-[#fff] border-b-[3px] border-[#fff] font-medium' : 'text-[#fff] '}`}>Features</NavLink></li>
                                {/* <li className='inline-block  text-sm lg:text-[16px]  py-0 cursor-pointer'> <NavLink  to="/privacy-policy" className={({ isActive }) =>`${isActive ? 'text-[#fff] border-b-[3px] border-[#fff] font-medium' : 'text-[#fff] '}`}>Privacy Policy</NavLink></li> */}
                                <li className='inline-block  text-sm lg:text-[16px]  py-0 cursor-pointer'> <NavLink  to="/faqs" className={({ isActive }) =>`${isActive ? 'text-[#fff] border-b-[3px] border-[#fff] font-medium' : 'text-[#fff] '}`}>FAQs</NavLink></li>
                               <button onClick={() => {setNavLinks(false) ;setShowForm(true)}} className='inline-block text-[#0982be] font-medium text-sm lg:text[17px] text-center cursor-pointer bg-[#fff] py-[10px] rounded-[8px]'><p>Find Agencies</p></button>
                            </ul>
                        </nav>
                    </div>
                </div>
                )}
            </div>
        </section>
  )
}

export default Navbar