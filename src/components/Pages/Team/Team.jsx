import React, {useMemo, useState} from 'react'
import Navbar from '../../Sections/Navbar/Navbar'
import Footer from '../../Sections/Footer/Footer'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
const Team = () => {
    const members = [
    {
      id: 1,
      name: "Alex Rivera",
      role: "Frontend",
      experience: 5,
      image: "https://images.unsplash.com/photo-1585624882829-f92c2d4cd89d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGVzdGluZ3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 2,
      name: "Jenny Wilson",
      role: "Backend",
      experience: 3,
      image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dGVzdGluZ3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 3,
      name: "Jerome Bell",
      role: "Full Stack",
      experience: 2,
      image: "https://images.unsplash.com/photo-1600267147646-33cf514b5f3e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dGVzdGluZ3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 4,
      name: "Michael Lee",
      role: "Frontend",
      experience: 4,
      image: "https://plus.unsplash.com/premium_photo-1683121710572-7723bd2e235d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWl8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 5,
      name: "Sarah Khan",
      role: "Backend",
      experience: 6,
      image: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 6,
      name: "David Smith",
      role: "Full Stack",
      experience: 7,
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D",
    },
  ];

  const [activeFilter, setActiveFilter] = useState("All");

  const filters = useMemo(() => {
    const counts = members.reduce(
      (acc, member) => {
        acc[member.role] = (acc[member.role] || 0) + 1;
        return acc;
      },
      { All: members.length }
    );
    return counts;
  }, []);

  const filteredMembers =
    activeFilter === "All"
      ? members
      : members.filter((member) => member.role === activeFilter);

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
    <>
    <Navbar/>
     <section className="py-20 bg-[#fff]">
        <div className="mx-auto w-[92%] px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 mt-15">
        <h2 className="text-3xl font-semibold tracking-tight text-[#333] sm:text-4xl">Our Website Development Team</h2>
        <p className="mt-4 text-lg text-[#333333B2] m-auto w-full sm:w-[50%]">Meet the experts building the feature of the web. A diverse team of passionate developers dedicated to crafting exceptional digital experience</p>
        </div>
         <div className="">
      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {Object.keys(filters).map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300
              ${
                activeFilter === filter
                  ? "bg-[#00BD5F] text-white shadow-md"
                  : "bg-[#6F80950A] text-gray-600 hover:bg-gray-100"
              }`}
          >
            {filter === "All"
              ? `All Members (${filters[filter]})`
              : `${filter} (${filters[filter]})`}
          </button>
        ))}
      </div>

      {/* Cards */}
      <motion.div
        ref={ref}
        variants={container}
        initial="visible"
        animate={inView ? "visible" : "hidden"}
      className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-8">
        {filteredMembers.map((member) => (
          <motion.div
          ref={ref}
            variants={item}
            transition={{ duration: 0.4, ease: "easeOut" }}
            key={member.id}
            className="bg-white rounded-2xl p-0 shadow-[0_2px_12px_0px_#0000000F] hover:shadow-lg transition duration-300 text-center"
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
        </div>
    </section>
    <Footer/>
    </>
  )
}

export default Team