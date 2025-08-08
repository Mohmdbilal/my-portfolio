'use client'

import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import DarkModeToggle from './DarkModeToggle'

export default function Navbar() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(!menuOpen)

  const navItems = [
    { name: 'Home', link: '#home' },
    { name: 'Skills', link: '#skills' },
    { name: 'Projects', link: '#projects' },
    { name: 'Contacts', link: '#contact' }
  ]

  return (
    <>
      {/* Desktop Navbar */}
      <div className="hidden md:flex justify-center mt-[-25px] relative z-50">
        <DarkModeToggle />
        <div
          className="
            w-[380px] h-[40px] rounded-full 
            bg-white dark:bg-[#272727] 
            flex items-center justify-center 
            shadow-[inset_1px_2px_5px_rgba(0,0,0,0.5)] 
            dark:shadow-none
          "
        >
          <ul className="flex flex-row gap-2 text-[13px] font-semibold font-spline">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.link}
                  className={`
                    flex items-center justify-center
                    w-[85px] h-[27px] rounded-full
                    transition-colors duration-200
                    ${
                      pathname === '/' && item.name === 'Home'
                        ? 'bg-[#7d7d7d] text-white animate-pulse'
                        : 'hover:bg-[#A9A8A8] hover:text-white'
                    }
                  `}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile Toggle Icon */}
      <div className="md:hidden fixed top-4 right-4 z-50 flex items-center">
        <button
          onClick={toggleMenu}
          className="text-black dark:text-white text-3xl focus:outline-none"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="text-center
            md:hidden fixed right-4 z-40 pt-12
            bg-white dark:bg-[#272727] rounded-xl shadow-lg
            p-4 w-[150px] h-[240px] space-y-4 transition-all duration-300 
          "
        >
          {/* Dark mode toggle in mobile menu */}
          <div className="absolute right-[80px] top-3">
            <DarkModeToggle />
          </div>

          <ul className="flex flex-col gap-2 text-sm font-semibold font-spline">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.link}
                  onClick={() => setMenuOpen(false)} // close on click
                  className="block px-4 py-2 rounded-full text-black dark:text-white hover:bg-[#A9A8A8] hover:text-white"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  )
}
