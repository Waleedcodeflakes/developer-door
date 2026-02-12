import { MessageCircle, MessageSquare, NotepadText, ShieldCheck, VerifiedIcon } from 'lucide-react'
import React from 'react'

const HowWroks = () => {
    const steps = [
        {
            icon: <NotepadText/>,
            title: "Post Your Brief",
            desc: "Describe your project requirements, budget, and timeline. Our smart system helps you define what you need."
        },
        {
            icon: <MessageSquare fill='#0982be'/>,
            title: "Receive Proposals",
            desc: "Get detailed proposals from pre-vetted agencies within hours. Compare portfolios, reviews, and quotes easily."
        },
        {
            icon: <ShieldCheck/>,
            title: "Hire & Escrow",
            desc: "Select your team and start the project safely. Funds are held in escrow and released only when milestones are met."
        },
    ]
  return (
    <section class="py-20 bg-[#fff]">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="text-center max-w-2xl mx-auto mb-16">
    <h2 class="text-3xl font-bold tracking-tight text-[#333] sm:text-4xl">How Developer Door Works</h2>
    <p class="mt-4 text-lg text-gray-400">A simple, transparent process to find your perfect tech partner.</p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((st, idx) => (
            <div class="group relative rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow p-8 hover:border-primary/50 transition-colors duration-300">
            <div class="absolute top-6 right-6 text-6xl font-semibold text-black/15 ">0{idx+1}</div>
            <div class="mb-6 inline-flex size-14 items-center justify-center rounded-xl bg-blue-100 text-primary">
            <span class="material-symbols-outlined text-3xl">{st.icon}</span>
            </div>
            <h3 class="text-xl font-bold text-[#333] mb-3">{st.title}</h3>
            <p class="text-gray-400 leading-relaxed">{st.desc}</p>
            </div>

        ))}
    </div>
    </div>
    </section>
    )
}

export default HowWroks