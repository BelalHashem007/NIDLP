'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Menu, X, LogIn, Globe } from 'lucide-react'
import Link from 'next/link'

import { HEADER_LINKS } from './header.constants'
import NavLinks from './components/NavLinks'
import MobileMenu from './components/MobileMenu'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="relative py-4 lg:px-20 px-6">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Image src="/icons/logo.svg" alt="logo" width={180} height={50} />

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-5 border-b-2 border-gray-700 px-7 py-4">
          <NavLinks links={HEADER_LINKS} className="text-[16px]" />
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-1 hover:text-blue-400 transition duration-300 text-sm">
            <Globe size={16} />
            <span>En</span>
          </button>

          <Link href={"/nidlp/dashboard/internal-dashboard"} >
            <button className="hidden md:flex items-center gap-2 border-2 border-gray-200 rounded-lg px-5 py-2 hover:border-blue-400 cursor-pointer hover:text-blue-400 transition duration-300 text-sm">
              <LogIn size={16} />
              تسجيل الدخول
            </button>
          </Link>
          

          <button
            className="md:hidden p-1 hover:text-blue-400 transition duration-300"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isOpen}
        links={HEADER_LINKS}
        onClose={() => setIsOpen(false)}
      />
    </header>
  )
}