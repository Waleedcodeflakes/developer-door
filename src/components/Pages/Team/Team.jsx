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
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: 2,
      name: "Jenny Wilson",
      role: "Backend",
      experience: 3,
      image: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      id: 3,
      name: "Jerome Bell",
      role: "Full Stack",
      experience: 2,
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 4,
      name: "Michael Lee",
      role: "Frontend",
      experience: 4,
      image: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    {
      id: 5,
      name: "Sarah Khan",
      role: "Backend",
      experience: 6,
      image: "https://randomuser.me/api/portraits/women/12.jpg",
    },
    {
      id: 6,
      name: "David Smith",
      role: "Full Stack",
      experience: 7,
      image: "https://randomuser.me/api/portraits/men/40.jpg",
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
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className=" mb-16">
        <h2 className="text-3xl font-bold tracking-tight text-[#333] sm:text-4xl">Our Website Development Team</h2>
        <p className="mt-4 text-lg text-gray-400 w-full sm:w-[50%]">Meet the experts building the feature of the web. A diverse team of passionate developers dedicated to crafting exceptional digital experience</p>
        </div>
         <div className="">
      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-10">
        {Object.keys(filters).map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300
              ${
                activeFilter === filter
                  ? "bg-[#00BD5F] text-white shadow-md"
                  : "bg-gray-200 text-gray-600 hover:bg-gray-300"
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
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-8">
        {filteredMembers.map((member) => (
          <motion.div
           ref={ref}
            variants={item}
            transition={{ duration: 0.4, ease: "easeOut" }}
            key={member.id}
            className="bg-white rounded-2xl p-0 shadow-sm hover:shadow-lg transition duration-300 text-center"
          >
            <div className="flex justify-center mb-4">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-40  object-cover"
              />
            </div>

            <h3 className="text-lg font-semibold text-gray-800">
              {member.name}
            </h3>

            {/* <span
              className={`inline-block mt-2 px-3 py-1 text-xs rounded-full font-medium
                ${
                  member.role === "Frontend"
                    ? "bg-red-100 text-red-500"
                    : member.role === "Backend"
                    ? "bg-yellow-100 text-yellow-600"
                    : "bg-blue-100 text-blue-600"
                }`}
            >
              {member.role}
            </span>

            <p className="text-sm text-gray-500 mt-3">
              {member.experience} Years Experience
            </p> */}

            <button className="mt-5 w-full bg-gray-100 text-gray-700 py-2 rounded-lg hover:bg-gray-200 transition">
              View Profile
            </button>
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