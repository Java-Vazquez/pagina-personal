import React from 'react'
import Csharp from '../assets/c-sharp.png'
import Cplus from '../assets/C++.png'
import JavaScript from '../assets/javascript.png'
import Java from '../assets/Java.png'
import Py from '../assets/Python.png'
import react from '../assets/React.png'
import spark from '../assets/Spark.png'
import hadoop from '../assets/hadoop.png'

function Skills() {
  return (
    <div name='skills' className='w-full h-screen bg-[#1C1C1D] text-[#F8FBFF]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-[#49AF73]'>Skills</p>
          <p className='py-4 sm:text-xl'>These are some of the technologies I've worked with</p>
        </div>

        {/*Icons container */}
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>

          <div className='shadow-md shadow-[#6DDB9A] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Csharp} alt="C# icon" />
            <p className='my-4'>C#</p>
          </div>

          <div className='shadow-md shadow-[#6DDB9A] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Cplus} alt="C++ icon" />
            <p className='my-4'>C++</p>
          </div>

          <div className='shadow-md shadow-[#6DDB9A] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Java} alt="Java icon" />
            <p className='my-4'>Java</p>
          </div>

          <div className='shadow-md shadow-[#6DDB9A] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Py} alt="Python icon" />
            <p className='my-4'>Python</p>
          </div>

          <div className='shadow-md shadow-[#6DDB9A] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={JavaScript} alt="JavaScript icon" />
            <p className='my-4'>JavaScript</p>
          </div>

          <div className='shadow-md shadow-[#6DDB9A] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={react} alt="React icon" />
            <p className='my-4'>React</p>
          </div>

          <div className='shadow-md shadow-[#6DDB9A] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={hadoop} alt="Hadoop icon" />
            <p className='my-4'>Hadoop</p>
          </div>

          <div className='shadow-md shadow-[#6DDB9A] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={spark} alt="Spark icon" />
            <p className='my-4'>Spark</p>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Skills