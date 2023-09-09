import React from 'react'
import Logo from '../assets/logo.png'

function Footer() {
  return (
    <footer className="bg-neutral-200 text-center dark:bg-neutral-700 lg:text-left">
      <div className="flex items-center justify-center lg:justify-start">
        <img className="" src={Logo} alt="Logo" style={{ width: '80px' }} />
        <div className="p-4 text-center text-neutral-700 dark:text-neutral-200">
          © 2023 Copyright: 
          <a className="px-4 text-neutral-800 dark:text-neutral-400" href="https://www.linkedin.com/in/javier-v%C3%A1zquez-gurrola-01615b241/">
             Javier Vázquez Gurrola
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer