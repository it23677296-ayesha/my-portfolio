import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' },
  ]

  return (
    <nav className="bg-white dark:bg-slate-900 shadow-sm sticky top-0 z-50 transition-colors duration-300 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3">
          {/* Profile Photo - AG වෙනුවට */}
          <img 
            src="/profile.jpeg" 
            alt="Ayesha Gayanthi"
            className="w-10 h-10 rounded-full object-cover shadow-md border-2 border-indigo-200 dark:border-indigo-800"
          />
          <span className="text-xl font-bold text-slate-800 dark:text-white">
            Ayesha<span className="text-indigo-600 dark:text-indigo-400">Gayanthi</span>
          </span>
        </Link>

        <div className="flex items-center gap-4">
          <ul className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `font-medium transition-colors hover:text-indigo-600 dark:hover:text-indigo-400 ${
                      isActive ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-700 dark:text-slate-300'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <button
            className="md:hidden text-2xl text-slate-700 dark:text-slate-300"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-4 px-6 transition-colors duration-300">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `block font-medium transition-colors hover:text-indigo-600 dark:hover:text-indigo-400 ${
                      isActive ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-700 dark:text-slate-300'
                    }`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar