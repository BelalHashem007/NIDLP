'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Menu, X, LogIn, Globe } from 'lucide-react'

const links = [
  { href: '#about-council', label: 'عن المجلس' },
  { href: '#council-goals', label: 'أهداف المجلس' },
  { href: '#council-government', label: 'حوكمة المجلس' },
  { href: '#council-news', label: 'أخبار المجلس' },
  { href: '#common-questions', label: 'الأسئلة الشائعة' },
]
const linkStyle = "hover:text-blue-400 transition duration-300";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="relative py-4 px-6">
      {/* Desktop & Mobile top bar */}
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Image src="/assets/logo1.png" alt="logo" width={180} height={50} />

        {/* Desktop nav links */}
        <nav className="hidden md:flex items-center gap-5 border-b-2 border-gray-700 px-7 py-4">
          {links.map((link) => (
            
              <a key={link.href}
              href={link.href}
              className="hover:text-blue-400 transition duration-300 text-[16px]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Left side: EN + Login + Hamburger */}
        <div className="flex items-center gap-3">
          {/* EN button — always visible */}
          <button className="flex items-center gap-1 hover:text-blue-400 transition duration-300 text-sm cursor-pointer">
            <Globe size={16} />
            <span>En</span>
          </button>

          {/* Login button — hidden on mobile, visible on md+ */}
          <button className="hidden md:flex items-center gap-2 cursor-pointer bg-transparent border-2 border-gray-200 rounded-lg px-5 py-2 hover:border-blue-400 hover:text-blue-400 transition duration-300 text-sm">
            <LogIn size={16} />
            تسجيل الدخول
          </button>

          {/* Hamburger — visible only on mobile */}
          <button
            className="md:hidden cursor-pointer hover:text-blue-400 transition duration-300 p-1"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? 'إغلاق القائمة' : 'فتح القائمة'}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'min-h-66 opacity-100 mt-4' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="flex flex-col gap-1 border-t border-gray-200 pt-4">
          {links.map((link) => (
            
             <a key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="hover:text-blue-400 hover:bg-gray-50 transition duration-300 px-4 py-3 rounded-lg text-right"
            >
              {link.label}
            </a>
          ))}

          {/* Login button inside mobile menu */}
          <button className="flex items-center justify-center gap-2 mt-3 cursor-pointer bg-transparent border-2 border-gray-200 rounded-lg px-5 py-2 hover:border-blue-400 hover:text-blue-400 transition duration-300 text-sm">
            <LogIn size={16} />
            تسجيل الدخول
          </button>
        </nav>
      </div>
    </header>
  )
}