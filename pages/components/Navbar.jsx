import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (


    <nav class="bg-black/20 flex flex-row text-black backdrop-blur-sm px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 ">
      <div class="container  w-10/12 py-2 flex flex-wrap justify-between items-center mx-auto">
        <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
          <Link href='/'>Shopping
          </Link>
        </span>
        <div class="flex md:order-2">
          <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
          </button>
        </div>

      </div>

      <div class="hidden font-semibold space-x-5 justify-between items-center w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
        <button>
          <Link href='/about'>About</Link>
        </button>
        <div>
          <Link href='/cart'>Cart</Link>
        </div>
        <div>
          <Link href='/login'>Login</Link>
        </div>
      </div>
    </nav>


  )
}
