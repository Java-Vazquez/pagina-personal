import React, { useState } from 'react';
import { useInView } from '../hooks/useInView';
import { FaGithub, FaExternalLinkAlt, FaLock, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import wazuh from '../assets/ciber.jpg'
import calcu from '../assets/calculadora.jpg'
import reinas from '../assets/reinas.jpg'
import busquedas from '../assets/busquedas.jpg'
import gilga from '../assets/gilgamesh.png'
import micro from '../assets/micros.jpg'

const featured = [
  {
    title: 'AI Onboarding & Offboarding Agent',
    description: 'Automated employee lifecycle workflows using AI agents — from account provisioning to access revocation across SaaS tools. Reduced manual IT effort significantly and improved onboarding speed for a globally distributed team.',
    tags: ['AI Agents', 'Okta', 'BetterCloud', 'Python', 'Automation'],
    enterprise: true,
    company: 'BetterCloud',
  },
  {
    title: 'App & Permissions Provisioning Automation',
    description: 'Built automated workflows for SaaS app provisioning and permission management using BetterCloud and Okta APIs. Standardized access policies across 5+ countries and eliminated manual ticket-driven access requests.',
    tags: ['Okta', 'BetterCloud', 'IAM', 'REST APIs', 'Zapier'],
    enterprise: true,
    company: 'BetterCloud',
  },
  {
    title: 'Google Workspace Cost Optimization',
    description: 'Conducted a full audit of Google Workspace licenses across the organization, automating detection of inactive accounts and unused licenses. Achieved a 33% reduction in licensing costs through data-driven provisioning rules.',
    tags: ['Google Workspace', 'Python', 'Automation', 'BetterCloud'],
    enterprise: true,
    company: 'BetterCloud',
  },
  {
    title: 'Data Pipeline — IndagaMedia',
    description: 'Designed and implemented web scraping and REST API ingestion pipelines. Normalized JSON datasets and structured outputs that fed machine learning strategy decisions for media analytics.',
    tags: ['Python', 'APIs', 'JSON', 'Data Engineering', 'ML'],
    enterprise: true,
    company: 'IndagaMedia',
  },
  {
    title: 'Wazuh Security GUI',
    description: 'Connected to Wazuh\'s API to build a complete web interface for agent and vulnerability management — giving security teams a user-friendly dashboard for threat monitoring.',
    tags: ['Wazuh', 'REST API', 'Security', 'JavaScript'],
    enterprise: false,
    github: 'https://github.com/Java-Vazquez/Proyecto_wazuh',
    image: wazuh,
  },
]

const archive = [
  {
    title: 'Eight Queens Problem (A*)',
    desc: 'Implementing the A* algorithm to find a correct solution to the Eight Queens problem using AI search.',
    github: 'https://github.com/Java-Vazquez/ocho_reinas',
    image: reinas,
  },
  {
    title: 'Informed Search Algorithms',
    desc: 'City graph implementation of multiple AI search algorithms — BFS, DFS, A*, and greedy best-first.',
    github: 'https://github.com/Java-Vazquez/B-squedas_Informadas',
    image: busquedas,
  },
  {
    title: 'Distributed SOA Calculator',
    desc: 'Autonomous decentralized service-oriented architecture where modules communicate and self-heal during failures.',
    github: 'https://github.com/Java-Vazquez/Calculadora_distribuida',
    image: calcu,
  },
  {
    title: 'COVID-19 CO2 Contagion Alarm',
    desc: 'IoT air quality monitor that alerts when CO2 levels indicate poor ventilation and contagion risk.',
    github: 'https://github.com/Java-Vazquez/alerta-de-contagio',
    image: micro,
  },
  {
    title: 'Gilgamesh Data Systems Website',
    desc: 'Business website built to provide digital visibility for Gilgamesh Data Systems.',
    link: 'https://pruebas-g.web.app',
    image: gilga,
  },
]

function FeaturedCard({ project }) {
  return (
    <div className='bg-[#112240] rounded-xl p-6 border border-[#1e3a5f] hover:border-[#49AF73] transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between'>
      <div>
        <div className='flex items-start justify-between mb-3 gap-2'>
          <h3 className='text-lg font-bold text-[#ccd6f6] leading-tight'>{project.title}</h3>
          {project.enterprise
            ? <span className='text-xs bg-[#0a192f] text-[#49AF73] px-2 py-1 rounded-full border border-[#49AF73] whitespace-nowrap flex-shrink-0 flex items-center gap-1'><FaLock size={10}/> Enterprise</span>
            : <a href={project.github} target='_blank' rel='noreferrer' className='text-[#49AF73] hover:text-white transition-colors flex-shrink-0'><FaGithub size={20}/></a>
          }
        </div>
        {project.company && (
          <p className='text-[#49AF73] text-sm font-semibold mb-3'>{project.company}</p>
        )}
        <p className='text-[#8892b0] text-sm leading-relaxed mb-4'>{project.description}</p>
      </div>
      <div className='flex flex-wrap gap-2 mt-2'>
        {project.tags.map((tag, i) => (
          <span key={i} className='text-xs bg-[#0a192f] text-[#8892b0] px-2 py-1 rounded border border-[#1e3a5f]'>{tag}</span>
        ))}
      </div>
    </div>
  )
}

function Work() {
  const [archiveOpen, setArchiveOpen] = useState(false)
  const [ref, inView] = useInView()

  return (
    <section name='work' aria-label="Projects" className='w-full py-20 text-[#F8FBFF] bg-[#1C1C1D]'>
      <div ref={ref} className='max-w-[1000px] mx-auto px-4'>

        {/* Featured */}
        <div className='mb-16'>
          <div className={`mb-8 fade-up ${inView ? 'visible' : ''}`}>
            <p className='text-4xl font-bold inline border-b-4 border-[#49AF73]'>Projects</p>
            <p className='py-4 text-[#8892b0]'>Featured work — professional and open source</p>
          </div>
          <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {featured.map((p, i) => (
              <div key={i} className={`fade-up ${inView ? 'visible' : ''} delay-${(i % 4 + 1) * 100}`}>
                <FeaturedCard project={p} />
              </div>
            ))}
          </div>
        </div>

        {/* Archive */}
        <div>
          <button
            onClick={() => setArchiveOpen(!archiveOpen)}
            className='flex items-center gap-3 text-[#8892b0] hover:text-[#49AF73] transition-colors duration-200 mb-6 group'
          >
            <span className='text-xl font-semibold group-hover:text-[#49AF73]'>Project Archive</span>
            <span className='text-sm border border-[#1e3a5f] px-2 py-0.5 rounded text-[#49AF73]'>{archive.length}</span>
            {archiveOpen ? <FaChevronUp size={14} /> : <FaChevronDown size={14} />}
          </button>

          {archiveOpen && (
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
              {archive.map((p, i) => (
                <div
                  key={i}
                  className='bg-[#0a192f] rounded-xl overflow-hidden border border-[#1e3a5f] hover:border-[#49AF73] transition-all duration-300 group'
                >
                  <div
                    className='h-36 bg-cover bg-center relative'
                    style={{ backgroundImage: `url(${p.image})` }}
                  >
                    <div className='absolute inset-0 bg-[#0a192f] opacity-60 group-hover:opacity-40 transition-opacity duration-300'></div>
                  </div>
                  <div className='p-4'>
                    <h4 className='font-bold text-sm text-[#ccd6f6] mb-2'>{p.title}</h4>
                    <p className='text-[#8892b0] text-xs leading-relaxed mb-3'>{p.desc}</p>
                    <div className='flex gap-3'>
                      {p.github && (
                        <a href={p.github} target='_blank' rel='noreferrer' className='text-[#49AF73] hover:text-white text-xs flex items-center gap-1 transition-colors'>
                          <FaGithub size={14}/> Code
                        </a>
                      )}
                      {p.link && (
                        <a href={p.link} target='_blank' rel='noreferrer' className='text-[#49AF73] hover:text-white text-xs flex items-center gap-1 transition-colors'>
                          <FaExternalLinkAlt size={12}/> Visit
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </section>
  )
}

export default Work