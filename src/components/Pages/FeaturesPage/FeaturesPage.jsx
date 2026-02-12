import React, {useState} from 'react'
import Navbar from '../../Sections/Navbar/Navbar'
import Footer from '../../Sections/Footer/Footer'
import HeroFeature from './HeroFeature/HeroFeature'
import Everything from './Everything/Everything'
import MediaSections from './MediaSections/MediaSections'

const FeaturesPage = () => {
    const [showForm, setShowForm] = useState(false)
  return (
    <div>
        <Navbar setShowForm={setShowForm} showForm={showForm} />
        <div className='mt-18'>
            <HeroFeature setShowForm={setShowForm} 
            tag="Features" 
            title="Discover the Power of Smart Styling with AI" 
            desc="Explore the features that make styling effortless. Manage your wardrobe digitally, get AI-powered outfit suggestions, try looks virtually, share your favorite styles, and shop smarter, all in one place." />
            <Everything/>
            <MediaSections setShowForm={setShowForm}  />
        </div>
        <Footer setShowForm={setShowForm} />
    </div>
  )
}

export default FeaturesPage