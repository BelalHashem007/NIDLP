import { NavLink } from '../header.types'

type Props = {
  links: NavLink[]
  onClick?: () => void
  className?: string
}

export default function NavLinks({ links, onClick, className }: Props) {
  return (
    <>
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          onClick={onClick}
          className={`hover:text-blue-400 transition duration-300 ${className}`}
        >
          {link.label}
        </a>
      ))}
    </>
  )
}