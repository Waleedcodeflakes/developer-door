import React from 'react'
import { ArrowUpRight } from 'lucide-react';

const Experties = () => {

    const categories = [
    {
        icon: "https://cdn-icons-png.flaticon.com/128/7991/7991055.png",
        title: "Website Developers",
        desc: "Custom web applications built with modern frameworks like React, Vue, and Next.js tailored to scale.",
        url: "#"
    },
    {
        icon: "https://cdn-icons-png.flaticon.com/128/2586/2586488.png", // Suggested icon for Mobile
        title: "Mobile App Developers",
        desc: "Native and cross-platform mobile solutions for iOS and Android that deliver seamless user experiences.",
        url: "#"
    },
    {
        icon: "https://cdn-icons-png.flaticon.com/128/1260/1260206.png", // Suggested icon for UI/UX
        title: "UI/UX Design",
        desc: "User-centric interfaces designed with precision to enhance engagement and brand identity.",
        url: "#"
    },
    {
        icon: "https://cdn-icons-png.flaticon.com/128/1998/1998087.png", // Suggested icon for Marketing
        title: "Marketing",
        desc: "Data-driven marketing strategies to grow your audience and maximize conversion rates.",
        url: "#"
    }
];
  return (
     <section class="py-20 bg-[#fff]">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="text-center max-w-2xl mx-auto mb-16">
    <h2 class="text-3xl font-bold tracking-tight text-[#333] sm:text-4xl">What are you <span className='text-primary'>looking for?</span></h2>
    <p class="mt-4 text-lg text-gray-400">Select a category to explore our specialized services and find the perfect solution for your digital needs</p>
    </div>
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {categories.map((item, index) => (
          <div 
            key={index} 
            className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow relative group cursor-pointer"
          >
            {/* Top Row: Icon and Arrow */}
            <div className="flex justify-between items-start mb-6">
              <div className="w-16 h-16">
                <img src={item.icon} alt={item.title} className="w-full h-full object-contain" />
              </div>
              <div className="text-green-600">
                <ArrowUpRight size={28} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </div>

            {/* Content */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 tracking-tight">
                {item.title}
              </h3>
              <p className="text-gray-500 leading-relaxed text-lg">
                {item.desc}
              </p>
            </div>

            {/* Hidden Link for SEO/Accessibility */}
            <a href={item.url} className="absolute inset-0">
              <span className="sr-only">View {item.title}</span>
            </a>
          </div>
        ))}
      </div>
    </div>
    </div>
    </section>
  )
}

export default Experties