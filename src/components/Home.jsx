import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi';
import {Link} from 'react-scroll'
import fondo from '../assets/fondo.jpg'
import { useTypingEffect } from '../hooks/typing-effects';

export const Home = () => {
  const text = useTypingEffect("Javier Vázquez G.", 80)
  const text2 = useTypingEffect("Global IT Engineer | Automation, Identity & AI", 60)
  return (
    <header name='home' aria-label="Hero section" className='w-full h-screen bg-[#0a192f] bg-no-repeat bg-cover relative' style={{backgroundImage: `url(${fondo})`}}>
      {/* Overlay for better text readability */}
      <div className='absolute inset-0 bg-[#0a192f] opacity-60'></div>
      {/* Container */}
      <div className='relative z-10 max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-lg sm:text-xl text-[#49AF73] tracking-widest uppercase mb-2'>
          Hi, my name is
        </p>
        <h1 className='pb-2 text-4xl sm:text-6xl font-bold text-[#F8FBFF] min-h-[70px]'>
          {text}
        </h1>
        <h2 className='pb-6 text-xl sm:text-2xl text-[#49AF73] font-light min-h-[40px]'>
          {text2}
        </h2>
        <p className='text-[#8892b0] py-2 max-w-[600px] text-base sm:text-lg leading-relaxed'>
          Building AI-driven workflows, automating IAM operations, and scaling IT infrastructure across global teams.
        </p>
        <div className='flex gap-4 mt-6 flex-wrap'>
          <Link activeClass="active" to="experience" smooth={true} duration={500}>
            <button className='text-[#F8FBFF] group border-2 border-[#49AF73] px-6 py-3 flex items-center hover:bg-[#49AF73] transition-all duration-300 rounded-lg font-semibold'>
              My Experience
              <span className='group-hover:translate-x-1 duration-300 ml-2'>
                <HiArrowNarrowRight />
              </span>
            </button>
          </Link>
          <Link activeClass="active" to="work" smooth={true} duration={500}>
            <button className='text-[#49AF73] group border-2 border-[#49AF73] px-6 py-3 flex items-center hover:bg-[#49AF73] hover:text-[#F8FBFF] transition-all duration-300 rounded-lg font-semibold'>
              View Projects
              <span className='group-hover:translate-x-1 duration-300 ml-2'>
                <HiArrowNarrowRight />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </header>
  )
}
