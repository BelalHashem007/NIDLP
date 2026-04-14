
import NavLinks from './NavLinks'
import { NavLink } from '../header.types'
import { LogIn } from 'lucide-react'

type Props = {
  isOpen: boolean
  links: NavLink[]
  onClose: () => void
}

export default function MobileMenu({ isOpen, links, onClose }: Props) {
  return (
    <div
      className={`md:hidden overflow-hidden transition-all duration-300 ${
        isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
      }`}
    >
      <nav className="flex flex-col gap-1 border-t border-gray-200 pt-4">
        <NavLinks
          links={links}
          onClick={onClose}
          className="px-4 py-3 rounded-lg text-right hover:bg-gray-50"
        />

        <button className="flex items-center justify-center gap-2 mt-3 border-2 border-gray-200 rounded-lg px-5 py-2 hover:border-blue-400 hover:text-blue-400 transition duration-300 text-sm">
          <LogIn size={16} />
          تسجيل الدخول
        </button>
      </nav>
    </div>
  )
}