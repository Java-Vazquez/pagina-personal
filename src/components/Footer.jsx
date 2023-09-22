import React from 'react'
import Logo from '../assets/logo.png'

function Footer() {
  const emailAddress = 'vazquezgurrolajavier@gmail.com'
  const handleEmailClick = () => {window.location.href = `mailto:${emailAddress}`}

  return (
    <footer class="bg-neutral-200 dark:bg-neutral-800">
          <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
            <div class="md:flex md:justify-between">
              <div class="mb-6 md:mb-0">
                <a href="/" class="flex items-center">
                  <img src={Logo} class="h-full mr-3" alt="Logo footer" style={{ width: '80px' }} />
                  <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-[#F8FBFF]">Javier Vázquez G.</span>
                </a>
              </div>
              <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                <div>
                  <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-[#F8FBFF]">Other projects</h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                    <li class="mb-4">
                      <a href="https://github.com/Java-Vazquez/Busqueda_grafos_1#busqueda_grafos_1" target="_blank" class="hover:underline hover:text-[#49AF73]">Uninformed search</a>
                    </li>
                    <li class="mb-4">
                      <a href="https://github.com/Java-Vazquez/vision-computadora" target="_blank" class="hover:underline hover:text-[#49AF73]">Computer vision</a>
                    </li>
                    <li>
                      <a href="/" class="hover:underline hover:text-pink-600">Coming soon...</a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Contact me</h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                    <li class="mb-4">
                      <a href="https://www.linkedin.com/in/javier-v%C3%A1zquez-gurrola-01615b241/" target="_blank" class="hover:underline hover:text-[#49AF73] ">LinkedIn</a>
                    </li>
                    <li>
                      <a class="hover:underline hover:text-pink-600" onClick={handleEmailClick}>Email</a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">About me</h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                    <li class="mb-4">
                      <a href='./CV_Javier_Vazquez.pdf'download class="hover:underline hover:text-[#49AF73]">Resume</a>
                    </li>
                    <li>
                      <a href="https://github.com/Java-Vazquez" target="_blank" class="hover:underline hover:text-pink-600">Github</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <div class="sm:flex sm:items-center sm:justify-between">
              <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 
              <a class="hover:underline"> Javier Vázquez G.™</a>. All Rights Reserved.
              </span>
              <div class="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
                <a href="https://www.linkedin.com/in/javier-v%C3%A1zquez-gurrola-01615b241/" target="_blank" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16"> 
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/> 
                    </svg>
                  <span class="sr-only">LinkedIn page</span>
                </a>
                <a href="https://github.com/Java-Vazquez" target="_blank" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd"/>
                  </svg>
                  <span class="sr-only">GitHub account</span>
                </a>
                <a href="#" target="_blank" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                    <path fill-rule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clip-rule="evenodd"/>
                  </svg>
                  <span class="sr-only">Twitter page</span>
                </a>
              </div>
            </div>
          </div>
    </footer>
  );
}
export default Footer