import React from 'react'
import gilga from '../assets/gilgamesh.png'
import calcu from '../assets/calculadora.jpg'
import wazuh from '../assets/ciber.jpg'
import reinas from '../assets/reinas.jpg'
import micro from '../assets/micros.jpg'
import busquedas from '../assets/busquedas.jpg'

function Work() {
  return (
    <div name='work' className='w-full md:h-screen text-[#F8FBFF] bg-[#1C1C1D]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-[#F8FBFF] border-[#49AF73]'>
                    My work
                </p>
                <p className='py-6 sm:text-xl'>Check out some of my most relevant projects</p>
            </div>

            {/*Container for works*/}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

                {/*Grid item 1*/}
                <div style={{ backgroundImage: `url(${wazuh})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/*Hover Effects */}
                    <div className='px-3 opacity-0 group-hover:opacity-100'>
                        <span className='work-content text-[#F8FBFF] tracking-wider'>
                            Wazuh GUI: Connected to Wazuh's API, allowing users to perform actions related to agent and vulnerability management in a complete and friendly manner.                        
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="">
                                <button className='text-center rounded-lg  bg-[#F8FBFF] text-gray-700 font-bold button-div hover:bg-[#1C1C1D] hover:text-[#F8FBFF]'>
                                    Demo
                                </button>
                            </a>
                            <a href="">
                                <button className='text-center rounded-lg  bg-[#F8FBFF] text-gray-700 font-bold button-div hover:bg-[#1C1C1D] hover:text-[#F8FBFF]'>
                                    Code
                                </button>
                            </a>
                        </div>
                    </div>
                </div>

                {/*Grid item 2*/}
                <div style={{ backgroundImage: `url(${micro})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/*Hover Effects */}
                    <div className='px-3 opacity-0 group-hover:opacity-100'>
                        <span className='work-content text-[#F8FBFF] tracking-wider'>
                        COVID-19 Contagion Risk Alarm: A functional air CO2 particle monitor that alerts the user when ventilation in the room is required.                        
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="">
                                <button className='text-center rounded-lg  bg-[#F8FBFF] text-gray-700 font-bold button-div hover:bg-[#1C1C1D] hover:text-[#F8FBFF]'>
                                    Demo
                                </button>
                            </a>
                            <a href="">
                                <button className='text-center rounded-lg  bg-[#F8FBFF] text-gray-700 font-bold button-div hover:bg-[#1C1C1D] hover:text-[#F8FBFF]'>
                                    Code
                                </button>
                            </a>
                        </div>
                    </div>
                </div>

                {/*Grid item 3*/}
                <div style={{ backgroundImage: `url(${gilga})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/*Hover Effects */}
                    <div className='px-3 opacity-0 group-hover:opacity-100'>
                        <span className='work-content  text-[#F8FBFF] tracking-wider'>
                        Gilgamesh Data Systems website: Business website that aims to provide visibility to Gilgamesh in the digital world, addressing needs described by the company.
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://pruebas-g.web.app">
                                <button className='text-center rounded-lg  bg-[#F8FBFF] text-gray-700 font-bold button-div hover:bg-[#1C1C1D] hover:text-[#F8FBFF]'>
                                    Visit
                                </button>
                            </a>
                        </div>
                    </div>
                </div>

                 {/*Grid item 4*/}
                 <div style={{ backgroundImage: `url(${reinas})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/*Hover Effects */}
                    <div className='px-3 opacity-0 group-hover:opacity-100'>
                        <span className='work-content  text-[#F8FBFF] tracking-wider'>
                        Eight Queens Problem: Implementing the A* algorithm, I aim to find a correct solution to the Eight Queens problem using Artificial Intelligence.
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="">
                                <button className='text-center rounded-lg  bg-[#F8FBFF] text-gray-700 font-bold button-div hover:bg-[#1C1C1D] hover:text-[#F8FBFF]'>
                                    Demo
                                </button>
                            </a>
                            <a href="">
                                <button className='text-center rounded-lg bg-[#F8FBFF] text-gray-700 font-bold button-div hover:bg-[#1C1C1D] hover:text-[#F8FBFF]'>
                                    Code
                                </button>
                            </a>
                        </div>
                    </div>
                </div>

                {/*Grid item 5*/}
                <div style={{ backgroundImage: `url(${busquedas})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/*Hover Effects */}
                    <div className='px-3 opacity-0 group-hover:opacity-100'>
                        <span className='work-content  text-[#F8FBFF] tracking-wider'>
                        Informed Search algorithms implementation: Using a cities graph, I implement several AI algorithms looking for the most efficient and best answer.
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="">
                                <button className='text-center rounded-lg  bg-[#F8FBFF] text-gray-700 font-bold button-div hover:bg-[#1C1C1D] hover:text-[#F8FBFF]'>
                                    Demo
                                </button>
                            </a>
                            <a href="">
                                <button className='text-center rounded-lg  bg-[#F8FBFF] text-gray-700 font-bold button-div hover:bg-[#1C1C1D] hover:text-[#F8FBFF]'>
                                    Code
                                </button>
                            </a>
                        </div>
                    </div>
                </div>

                {/*Grid item 6*/}
                <div style={{ backgroundImage: `url(${calcu})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/*Hover Effects */}
                    <div className='px-3 opacity-0 group-hover:opacity-100'>
                        <span className='work-content  text-[#F8FBFF] tracking-wider'>
                        Autonomous Descentralized Service-Oriented Architecture Calculator: modules operate independently, comunicate, and ensure functionality during failures
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="">
                                <button className='text-center rounded-lg bg-[#F8FBFF] text-gray-700 font-bold button-div hover:bg-[#1C1C1D] hover:text-[#F8FBFF]'>
                                    Demo
                                </button>
                            </a>
                            <a href="">
                                <button className='text-center rounded-lg bg-[#F8FBFF] text-gray-700 font-bold button-div hover:bg-[#1C1C1D] hover:text-[#F8FBFF]'>
                                    Code
                                </button>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Work