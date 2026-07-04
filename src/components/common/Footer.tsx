import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-slate-800 dark:bg-slate-950 text-slate-300 dark:text-slate-400 py-10 px-6 transition-colors duration-300 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-4xl mx-auto text-center">
        <span className="inline-block bg-slate-700 dark:bg-slate-800 text-slate-200 dark:text-slate-300 px-5 py-2 rounded-full text-sm font-semibold mb-5 transition-colors duration-300">
          <i className="fas fa-rocket mr-2"></i> Open to Full Stack Developer Internships · 2026
        </span>
        <div className="flex justify-center gap-6 text-xl mb-5">
          <a 
            href="https://github.com/it23677296-ayesha" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-indigo-400 transition-colors" 
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a 
            href="https://www.linkedin.com/in/ayesha-withanage-595aaa343/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-indigo-400 transition-colors" 
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a 
            href="mailto:ayesha20021210@gmail.com" 
            className="hover:text-indigo-400 transition-colors" 
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
        </div>
        <p className="text-sm opacity-75 text-slate-400 dark:text-slate-500">
          &copy; 2026 Ayesha Gayanthi · Built with <FaHeart className="inline text-indigo-400" />
        </p>
      </div>
    </footer>
  )
}

export default Footer