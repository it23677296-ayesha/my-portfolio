import { FaMoon, FaSun } from 'react-icons/fa'
import { useTheme } from '../../context/ThemeContext'

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-slate-200 dark:bg-slate-700 text-indigo-600 dark:text-yellow-400 hover:bg-slate-300 dark:hover:bg-slate-600 transition-all duration-300 shadow-sm hover:shadow-md"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? <FaMoon size={18} /> : <FaSun size={18} />}
    </button>
  )
}

export default ThemeToggle