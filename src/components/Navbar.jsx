import React, { useState }  from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin,} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Logo from '../assets/logo.png'
import {Link} from 'react-scroll'

function Navbar() {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

    const[color, setColor] = useState(false)
    const changeColor = () => {
        if(window.scrollY >= 200) {
            setColor(true)
        } else {
            setColor(false)
        }
    }
    window.addEventListener('scroll', changeColor)

    const emailAddress = 'vazquezgurrolajavier@gmail.com'
    
    const handleEmailClick = () => {window.location.href = `mailto:${emailAddress}`}

  return (
    <div className={color ? 'fixed w-full h-[70px] flex justify-between items-center px-4 bg-[#1C1C1D] text-[#F8FBFF] font-bold' 
    : 'fixed w-full h-[70px] flex justify-between items-center px-4 bg-transparent text-[#FFFFFF] font-bold'}>
        <div>
            <img src={Logo} alt='Logo' style={{ width: '100px' }} />
        </div>

        {/*Navbar menu*/}
        <ul className='hidden md:flex'>
            <li className= 'hover:bg-pink-600 hover:border-pink-600'>
                <Link activeClass="active" to="home" smooth={true} duration={500}>
                    Home
                </Link>
            </li>
            <li className= 'hover:bg-pink-600 hover:border-pink-600'> 
                <Link activeClass="active" to="about" smooth={true} duration={500}>
                    About
                </Link>
            </li>
            <li className= 'hover:bg-pink-600 hover:border-pink-600'>
                <Link activeClass="active" to="skills" smooth={true} duration={500}>
                    Skills
                </Link>
            </li>
            <li className= 'hover:bg-pink-600 hover:border-pink-600'>
                <Link activeClass="active" to="work" smooth={true} duration={500}>
                    Work
                </Link>
            </li>
            <li className= 'hover:bg-pink-600 hover:border-pink-600'>
                <Link activeClass="active" to="contact" smooth={true} duration={500}>
                    Contact
                </Link>
            </li>
        </ul>

        {/*Hamburger menu*/}
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/*Mobil Menu*/}
        <ul className={!nav ?'hidden':'absolute top-0 left-0 w-full h-screen bg-[#1C1C1D] flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl hover:text-pink-600'>
                <Link  onClick={handleClick} activeClass="active" to="home" smooth={true} duration={500}>
                    Home
                </Link>
            </li>
            <li className='py-6 text-4xl hover:text-pink-600'>
                <Link onClick={handleClick} activeClass="active" to="about" smooth={true} duration={500}>
                    About
                </Link>
            </li>
            <li className='py-6 text-4xl hover:text-pink-600'>
                <Link onClick={handleClick} activeClass="active" to="skills" smooth={true} duration={500}>
                    Skills
                </Link>
            </li>
            <li className='py-6 text-4xl hover:text-pink-600'>
                <Link onClick={handleClick} activeClass="active" to="work" smooth={true} duration={500}>
                    Work
                </Link>
            </li>
            <li className='py-6 text-4xl hover:text-pink-600'>
                <Link onClick={handleClick} activeClass="active" to="contact" smooth={true} duration={500}>
                    Contact
                </Link>
            </li>
        </ul>

        {/*Social icons*/}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className= 'w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                    <a className= 'flex justify-between items-center w-full text-[#F8FBFF]'
                    href="https://www.linkedin.com/in/javier-v%C3%A1zquez-gurrola-01615b241/">
                        Linkedin <FaLinkedin size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                    <a className='flex justify-between items-center w-full text-[#F8FBFF]'
                    href='https://github.com/Java-Vazquez'>
                        Github <FaGithub size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                    <a className='flex justify-between items-center w-full text-[#F8FBFF]' href='#'onClick={handleEmailClick}>
                        Email <HiOutlineMail size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                    <a className='flex justify-between items-center w-full text-[#F8FBFF]'
                    href='./Javier_VazquezCV' download>
                        Resume <BsFillPersonLinesFill size={30} />
                    </a>
                </li>
            </ul>
        </div>

    </div>
  )
}

export default Navbar