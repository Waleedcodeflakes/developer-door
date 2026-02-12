import React, {useState} from 'react'
import Navbar from '../../Sections/Navbar/Navbar'
import Hero from '../../Sections/Hero/Hero'
import Faqs from '../../Sections/Faqs/Faqs'

const HomePage = () => {
  const [showForm, setShowForm] = useState(false)
  return (
    <div className='relative inter'>
        <Navbar setShowForm={setShowForm} showForm={showForm} />
        <div className='mt-10'>
          <Hero />
        </div>
       
    </div>
  )
}

export default HomePage