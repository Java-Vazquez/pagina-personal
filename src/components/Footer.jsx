import React from 'react'
import Logo from '../assets/logo.png'

function Footer() {
  const emailAddress = 'vazquezgurrolajavier@gmail.com'
  const handleEmailClick = () => { window.location.href = `mailto:${emailAddress}` }

  return (
    <footer aria-label="Site footer" className="bg-neutral-200 dark:bg-neutral-800">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="/" className="flex items-center">
              <img src={Logo} className="h-full mr-3" alt="Javier Vázquez G. logo" style={{ width: '80px' }} />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-[#F8FBFF]">Javier Vázquez G.</span>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-[#F8FBFF]">Other projects</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="https://github.com/Java-Vazquez/Busqueda_grafos_1#busqueda_grafos_1" target="_blank" rel="noreferrer" className="hover:underline hover:text-[#49AF73]">Uninformed search</a>
                </li>
                <li className="mb-4">
                  <a href="https://github.com/Java-Vazquez/vision-computadora" target="_blank" rel="noreferrer" className="hover:underline hover:text-[#49AF73]">Computer vision</a>
                </li>
                <li>
                  <span className="text-gray-400">Coming soon...</span>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Contact me</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="https://www.linkedin.com/in/javier-v%C3%A1zquez-gurrola-01615b241/" target="_blank" rel="noreferrer" className="hover:underline hover:text-[#49AF73]">LinkedIn</a>
                </li>
                <li>
                  <button onClick={handleEmailClick} className="hover:underline hover:text-pink-600 text-gray-500 dark:text-gray-400 font-medium">Email</button>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">About me</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href='./CV_Javier_Vazquez.pdf' download className="hover:underline hover:text-[#49AF73]">Resume</a>
                </li>
                <li>
                  <a href="https://github.com/Java-Vazquez" target="_blank" rel="noreferrer" className="hover:underline hover:text-pink-600">Github</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 Javier Vázquez G.™ All Rights Reserved.</span>
          <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
            <a href="https://www.linkedin.com/in/javier-v%C3%A1zquez-gurrola-01615b241/" target="_blank" rel="noreferrer" aria-label="LinkedIn profile" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
              </svg>
            </a>
            <a href="https://github.com/Java-Vazquez" target="_blank" rel="noreferrer" aria-label="GitHub profile" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer
