import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import thumb1 from '../../../assets/images/thumb (1).jpg'
import thumb2 from '../../../assets/images/thumb (2).jpg'
import thumb3 from '../../../assets/images/thumb (3).jpg'
import thumb4 from '../../../assets/images/thumb (4).jpg'

const FeaturedCompanies = () => {
     const members = [
    {
      id: 1,
      name: "Alex Rivera",
      role: "Frontend",
      experience: 5,
      image: thumb1,
    },
    {
      id: 2,
      name: "Jenny Wilson",
      role: "Backend",
      experience: 3,
      image: thumb2,
    },
    {
      id: 3,
      name: "Jerome Bell",
      role: "Full Stack",
      experience: 2,
      image: thumb3,
    },
    {
      id: 4,
      name: "Michael Lee",
      role: "Frontend",
      experience: 4,
      image: thumb4,
    },
  ];

  const navigate = useNavigate();
    const { ref, inView } = useInView({
          triggerOnce: true, // animate only first time (optional)
          threshold: 0.2,    // 20% of the section visible = trigger
      });
  
      const container = {
          hidden: {},
          visible: {
              transition: {
              staggerChildren: 0.3, // gap between cards
              },
          },
      };
  
      const item = {
          hidden: { y: 50, opacity: 0 },
          visible: { y: 0, opacity: 1 },
      };

  return (
    <div className='px-4 sm:px-15 mx-auto my-[120px]'>

         <div className=" mb-6">
        <h2 className="text-3xl font-semibold tracking-tight text-[#333] sm:text-[40px]">Featured Companies</h2>
        <div className='block sm:flex items-end justify-between w-full'>
        <p className="mt-4 text-lg text-[#333333B2] w-full sm:w-[50%]">Meet the experts building the feature of the web. A diverse team of passionate developers dedicated to crafting exceptional digital experience</p>
        <p onClick={() => navigate('/team')} className='flex items-center gap-3 text-[#333333B2] group cursor-pointer mt-4 sm:mt-0'>
            <span className='poppins font-medium text-sm sm:text-base group-hover:underline'>View All Members</span>
            <ArrowRight className='w-5 h-5' />
        </p>
        </div>
        </div>
         <motion.div
        ref={ref}
        variants={container}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {members.map((member) => (
          <motion.div
           ref={ref}
            variants={item}
            transition={{ duration: 0.4, ease: "easeOut" }}
            key={member.id}
            className="bg-white rounded-2xl p-0 shadow-sm hover:shadow-lg transition duration-300 text-center"
          >
            <div className="flex justify-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-40  object-cover"
              />
            </div>

            <div className='p-4 poppins'>

            <h3 className="text-sm text-left font-medium text-[#576679]">
              {member.name}
            </h3>

            <button className="mt-8 w-full text-sm font-medium bg-[#00AB390F] border border-[#00AB3933] text-[#00BD5F] py-2 rounded-lg transition">
              View Profile
            </button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default FeaturedCompanies