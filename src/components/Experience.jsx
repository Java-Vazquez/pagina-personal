import React, { useState } from 'react'
import { FaBriefcase, FaChevronDown, FaChevronUp } from 'react-icons/fa'

const experiences = [
  {
    company: 'BetterCloud',
    role: 'Global IT Engineer',
    period: 'Jul 2024 – Present',
    type: 'Full-time',
    color: 'border-[#49AF73]',
    dotColor: 'bg-[#49AF73]',
    highlights: [
      'Led IT operations across 5+ countries, standardizing workflows and tooling',
      'Reduced Google Workspace licensing costs by 33% through usage audits and automation',
      'Automated IAM provisioning/deprovisioning workflows using BetterCloud and Okta',
      'Built AI-driven solutions that reduced manual IT tickets and improved response times',
      'Collaborated with Security & Compliance to meet ISO and SOC standards',
    ],
    tags: ['Okta', 'BetterCloud', 'Google Workspace', 'IAM', 'AI Automation'],
  },
  {
    company: 'BetterCloud',
    role: 'Full-Stack Security Engineer I',
    period: 'Oct 2023 – Jul 2024',
    type: 'Full-time',
    color: 'border-blue-400',
    dotColor: 'bg-blue-400',
    highlights: [
      'Identified and remediated OWASP Top 10 vulnerabilities across web applications',
      'Developed new security-focused features in JavaScript and Java',
    ],
    tags: ['JavaScript', 'Java', 'OWASP', 'Security'],
  },
  {
    company: 'IndagaMedia',
    role: 'Jr Data Engineer',
    period: 'Apr 2024 – Sep 2024',
    type: 'Part-time',
    color: 'border-purple-400',
    dotColor: 'bg-purple-400',
    highlights: [
      'Built data scraping pipelines using Python and REST APIs with JSON normalization',
      'Processed and structured datasets to generate insights that fed ML strategy decisions',
    ],
    tags: ['Python', 'APIs', 'JSON', 'Data Pipelines', 'ML'],
  },
  {
    company: 'Gilgamesh Data Systems',
    role: 'Web Developer Intern',
    period: 'Nov 2022 – May 2023',
    type: 'Internship',
    color: 'border-yellow-400',
    dotColor: 'bg-yellow-400',
    highlights: [
      'Built and maintained the company website, ensuring it met all business requirements and visual standards',
      'Followed agile methodologies, actively participating in project planning and sprint execution',
      'Collaborated closely with team members to maintain an efficient and adaptable development approach',
      'Structured the codebase to enable seamless future updates — delivering a robust, scalable result',
    ],
    tags: ['Web Development', 'Agile', 'HTML/CSS', 'JavaScript'],
  },
  {
    company: 'Gilgamesh Data Systems',
    role: 'Technology Intern',
    period: 'Jun 2021 – Sep 2021',
    type: 'Internship',
    color: 'border-orange-300',
    dotColor: 'bg-orange-300',
    highlights: [
      'Led investigation, gathering, and documentation of NetApp ONTAP anti-ransomware functionalities',
      'Developed personalized presentations and proposals for potential clients, highlighting solution benefits',
      'Contributed to the renewal of a key client contract, strengthening the company\'s position in data protection',
      'Demonstrated the value of research-driven communication in achieving business outcomes',
    ],
    tags: ['NetApp ONTAP', 'Cybersecurity', 'Client Proposals', 'Research'],
  },
]

function ExperienceCard({ exp, isLast }) {
  const [open, setOpen] = useState(true)

  return (
    <div className='flex gap-6'>
      {/* Timeline spine */}
      <div className='flex flex-col items-center'>
        <div className={`w-4 h-4 rounded-full mt-1 flex-shrink-0 ${exp.dotColor} ring-4 ring-[#0a192f]`}></div>
        {!isLast && <div className='w-0.5 bg-[#1e3a5f] flex-1 mt-1'></div>}
      </div>

      {/* Card */}
      <div className={`flex-1 bg-[#112240] rounded-xl border-l-4 ${exp.color} mb-8 overflow-hidden hover:shadow-lg hover:shadow-[#49AF73]/10 transition-shadow duration-300`}>
        <button
          className='w-full text-left px-6 py-5 flex justify-between items-start'
          onClick={() => setOpen(!open)}
        >
          <div>
            <div className='flex items-center gap-3 flex-wrap'>
              <h3 className='text-lg font-bold text-[#F8FBFF]'>{exp.role}</h3>
              <span className='text-xs bg-[#0a192f] text-[#49AF73] px-2 py-0.5 rounded-full border border-[#49AF73]'>{exp.type}</span>
            </div>
            <p className='text-[#49AF73] font-semibold mt-0.5'>{exp.company}</p>
            <p className='text-[#8892b0] text-sm mt-0.5'>{exp.period}</p>
          </div>
          <span className='text-[#49AF73] mt-1 flex-shrink-0'>
            {open ? <FaChevronUp /> : <FaChevronDown />}
          </span>
        </button>

        {open && (
          <div className='px-6 pb-6'>
            <ul className='space-y-2 mb-4'>
              {exp.highlights.map((item, i) => (
                <li key={i} className='flex gap-2 text-[#8892b0] text-sm leading-relaxed'>
                  <span className='text-[#49AF73] mt-0.5 flex-shrink-0'>▸</span>
                  {item}
                </li>
              ))}
            </ul>
            <div className='flex flex-wrap gap-2 mt-4'>
              {exp.tags.map((tag, i) => (
                <span key={i} className='text-xs bg-[#0a192f] text-[#ccd6f6] px-3 py-1 rounded-full border border-[#1e3a5f]'>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

function Experience() {
  return (
    <div name='experience' className='w-full py-20 bg-[#0a192f] text-[#F8FBFF]'>
      <div className='max-w-[1000px] mx-auto px-4'>
        <div className='mb-12'>
          <p className='text-4xl font-bold inline border-b-4 border-[#49AF73]'>Experience</p>
          <p className='py-4 text-[#8892b0]'>My professional journey so far</p>
        </div>

        <div>
          {experiences.map((exp, i) => (
            <ExperienceCard key={i} exp={exp} isLast={i === experiences.length - 1} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Experience
