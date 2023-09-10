import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#1C1C1D] text-[#F8FBFF]'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                 <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#49AF73]'>
                        About
                    </p>
                </div>
                <div>{/*Empty div*/}</div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-3xl font-bold text-[#F8FBFF]'>
                    <p>There's no future without coding.</p>
                </div>
                <div>
                    <p className='text-[#F8FBFF] about-content'> Young engineer, passionate about technology and philosophy. 
                        Currently, I am seeking to create value in the areas of software development, cybersecurity, and data science. 
                        In addition to my knowledge and skills, I am eager to learn more, positively impacting my outcomes. 
                        I am convinced that, as an engineer, it is my responsibility to design not just ingenious but ethical solutions. </p>  
                </div>
            </div>
        </div>
    </div>
  );
};

export default About