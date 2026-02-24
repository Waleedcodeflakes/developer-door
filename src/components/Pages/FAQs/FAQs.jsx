import React, {useState} from 'react'
import Navbar from '../../Sections/Navbar/Navbar'
import Footer from '../../Sections/Footer/Footer'
import Faqs from '../../Sections/Faqs/Faqs'
// import HeroFeature from '../FeaturesPage/HeroFeature/HeroFeature'

const FAQs = () => {
      const [showForm, setShowForm] = useState(false)
  return (
    <div className='inter bg-[#F4F5F7]'>
        <Navbar setShowForm={setShowForm} showForm={showForm} />
        <div className='pt-24 mb-20'>
          {/* <HeroFeature setShowForm={setShowForm} 
            tag="FAQs" 
            title="Everything you need to know" 
            desc="Need something cleared up? Here are our most frequently asked questions." /> */}
        </div>
            <Faqs setShowForm={setShowForm} />
        <Footer setShowForm={setShowForm} />
    </div>
  )
}

export default FAQs