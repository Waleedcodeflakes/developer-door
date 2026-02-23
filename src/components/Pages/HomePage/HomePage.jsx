import React, {useState} from 'react'
import Navbar from '../../Sections/Navbar/Navbar'
import Footer from '../../Sections/Footer/Footer'
import Hero from '../../Sections/Hero/Hero'
import Faqs from '../../Sections/Faqs/Faqs'
import Clients from './Clients'
import HowWroks from './HowWroks'
import Experties from './Experties'
import Testimonials from './Testimonials'
import Cta from './Cta'

const HomePage = () => {
  const [showForm, setShowForm] = useState(false)
  return (
    <div className='relative inter'>
        <Navbar setShowForm={setShowForm} showForm={showForm} />
        <div className='mt-10'>
          <Hero />
          {/* <Clients/> */}
          <HowWroks/>
          <Experties/>
          <Testimonials/>
          <Cta/>
          <Faqs />
          <Footer/>
        </div>
       
    </div>
  )
}

export default HomePage