import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi';
import {Link} from 'react-scroll'
import fondo from '../assets/fondo.jpg'
import { useTypingEffect } from '../hooks/typing-effects';

export const Home = () => {
  const text = useTypingEffect("Javier Vázquez G.",100)
  const text2 = useTypingEffect("Engineer in information technology and intelligent systems ",100)
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f] bg-no-repeat bg-cover' style={{backgroundImage: `url(${fondo})`}}>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-3xl text-[#49AF73]'>
          Hi, my name is
        </p>
          <h1 className='pb-4 text-[#F8FBFF] typewritter-content'>
            {text}
          </h1>
          <h2 className='pb-4 text-3xl sm:text-7xl text-[#49AF73]'>
            <p className='text-2xl'>And I'm:</p>
          </h2>
          <h2 className='pb-4 text-[#F8FBFF] typewritter-content'>
            {text2}
          </h2>
          <p className='text-pink-600 py-4 max-w-[700px] font-bold'>
            In Mexico City.
          </p>
        <div>
          <Link activeClass="active" to="work" smooth={true} duration={500}>
            <button className='text-[#F8FBFF] group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 rounded-lg '>
              View my work 
              <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3'/>
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
