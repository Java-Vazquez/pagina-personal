import React from 'react'
import { SiOkta, SiGooglecloud, SiPython, SiJavascript, SiReact, SiMysql, SiZapier, SiOpenai } from 'react-icons/si'
import { FaGoogle, FaShieldAlt, FaRobot, FaCode } from 'react-icons/fa'
import { MdSecurity } from 'react-icons/md'

const categories = [
  {
    title: 'IAM & Identity',
    color: 'border-blue-500',
    titleColor: 'text-blue-400',
    skills: [
      { icon: <SiOkta size={32} />, name: 'Okta' },
      { icon: <FaGoogle size={32} />, name: 'Google Workspace' },
      { icon: <FaShieldAlt size={32} />, name: 'BetterCloud' },
    ],
  },
  {
    title: 'Development',
    color: 'border-[#49AF73]',
    titleColor: 'text-[#49AF73]',
    skills: [
      { icon: <SiPython size={32} />, name: 'Python' },
      { icon: <SiJavascript size={32} />, name: 'JavaScript' },
      { icon: <SiMysql size={32} />, name: 'SQL' },
      { icon: <SiReact size={32} />, name: 'React' },
    ],
  },
  {
    title: 'AI & Automation',
    color: 'border-purple-500',
    titleColor: 'text-purple-400',
    skills: [
      { icon: <SiOpenai size={32} />, name: 'AI Agents' },
      { icon: <FaRobot size={32} />, name: 'Prompt Eng.' },
      { icon: <SiZapier size={32} />, name: 'Zapier' },
      { icon: <FaCode size={32} />, name: 'Tines' },
    ],
  },
  {
    title: 'Cloud & Security',
    color: 'border-orange-400',
    titleColor: 'text-orange-400',
    skills: [
      { icon: <SiGooglecloud size={32} />, name: 'GCP' },
      { icon: <MdSecurity size={32} />, name: 'OWASP' },
      { icon: <FaShieldAlt size={32} />, name: 'ISO / SOC' },
    ],
  },
]

function Skills() {
  return (
    <div name='skills' className='w-full py-20 bg-[#1C1C1D] text-[#F8FBFF]'>
      <div className='max-w-[1000px] mx-auto px-4'>
        <div className='mb-12'>
          <p className='text-4xl font-bold inline border-b-4 border-[#49AF73]'>Skills</p>
          <p className='py-4 text-[#8892b0]'>Technologies and tools I work with across different domains</p>
        </div>

        <div className='grid sm:grid-cols-2 gap-8'>
          {categories.map((cat, i) => (
            <div key={i} className={`bg-[#0a192f] rounded-xl p-6 border-t-4 ${cat.color} hover:shadow-lg hover:shadow-[#49AF73]/10 transition-all duration-300`}>
              <h3 className={`text-lg font-bold mb-5 ${cat.titleColor}`}>{cat.title}</h3>
              <div className='grid grid-cols-2 gap-3'>
                {cat.skills.map((skill, j) => (
                  <div key={j} className='flex items-center gap-3 bg-[#112240] rounded-lg px-3 py-3 hover:bg-[#1a2f50] transition-colors duration-200'>
                    <span className={cat.titleColor}>{skill.icon}</span>
                    <span className='text-sm font-medium text-[#ccd6f6]'>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills