import React from 'react'
import { FaGlobeAmericas, FaRobot, FaShieldAlt } from 'react-icons/fa'
import { useInView } from '../hooks/useInView'

const About = () => {
  const [ref, inView] = useInView()
  const highlights = [
    {
      icon: <FaGlobeAmericas size={28} className='text-[#49AF73]' />,
      title: 'Global Operations',
      desc: 'Led IT operations across 5+ countries, standardizing processes and scaling infrastructure for distributed teams.',
    },
    {
      icon: <FaRobot size={28} className='text-[#49AF73]' />,
      title: 'AI & Automation',
      desc: 'Built AI agents and automated workflows using ChatGPT APIs, Zapier, and Tines — reducing manual effort and IT overhead.',
    },
    {
      icon: <FaShieldAlt size={28} className='text-[#49AF73]' />,
      title: 'Security & IAM',
      desc: 'Managed Okta, BetterCloud, and Google Workspace with a security-first approach, collaborating on ISO and SOC compliance.',
    },
  ]

  return (
    <section name='about' aria-label="About me" className='w-full py-20 bg-[#0a192f] text-[#F8FBFF]'>
      <div ref={ref} className='max-w-[1000px] mx-auto px-4'>
        {/* Header */}
        <div className={`mb-12 fade-up ${inView ? 'visible' : ''}`}>
          <p className='text-4xl font-bold inline border-b-4 border-[#49AF73]'>About</p>
        </div>

        {/* Bio */}
        <div className={`grid sm:grid-cols-2 gap-10 mb-14 fade-up ${inView ? 'visible' : ''} delay-100`}>
          <div>
            <h3 className='text-2xl font-bold text-[#49AF73] mb-4'>
              Engineering solutions that scale.
            </h3>
            <p className='text-[#8892b0] leading-relaxed mb-4'>
              I'm a Global IT Engineer based in Mexico City with experience designing automation, identity management,
              and AI-driven workflows across international environments. Currently pursuing a Master's in Engineering
              with a specialization in Interactive Design at Universidad Panamericana.
            </p>
            <p className='text-[#8892b0] leading-relaxed'>
              I believe technology should reduce friction, not create it. Whether that means automating an IAM
              workflow, building an AI agent, or cutting cloud costs by 33% — I focus on measurable impact.
            </p>
          </div>
          <div className='text-[#8892b0]'>
            <ul className='space-y-2'>
              <li><span className='text-[#49AF73] mr-2'>▸</span>Currently at <strong className='text-[#F8FBFF]'>BetterCloud</strong> as Global IT Engineer</li>
              <li><span className='text-[#49AF73] mr-2'>▸</span>M.S. Engineering & Project Management — <strong className='text-[#F8FBFF]'>Completed</strong></li>
              <li><span className='text-[#49AF73] mr-2'>▸</span>M.S. Engineering (Interactive Design) — <strong className='text-[#F8FBFF]'>In Progress</strong></li>
              <li><span className='text-[#49AF73] mr-2'>▸</span>B.S. IT & Intelligent Systems — <strong className='text-[#F8FBFF]'>Universidad Panamericana</strong></li>
              <li><span className='text-[#49AF73] mr-2'>▸</span>Based in <strong className='text-[#F8FBFF]'>Mexico City, Mexico</strong></li>
            </ul>
          </div>
        </div>

        {/* Highlights */}
        <div className='grid sm:grid-cols-3 gap-6'  >
          {highlights.map((item, i) => (
            <div key={i} className={`bg-[#112240] rounded-xl p-6 border border-[#1e3a5f] hover:border-[#49AF73] transition-all duration-300 hover:-translate-y-1 fade-up ${inView ? 'visible' : ''} delay-${(i + 2) * 100}`}>
              <div className='mb-3'>{item.icon}</div>
              <h4 className='font-bold text-lg mb-2'>{item.title}</h4>
              <p className='text-[#8892b0] text-sm leading-relaxed'>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About