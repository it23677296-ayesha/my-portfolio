import { FaGithub, FaLinkedin, FaEnvelope, FaCode, FaMobile, FaDatabase, FaDownload } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Hero = () => {
  const downloadCV = () => {
    const cvUrl = '/cv/Ayesha_Gayanthi_CV.pdf'
    const link = document.createElement('a')
    link.href = cvUrl
    link.download = 'Ayesha_Gayanthi_CV.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section className="h-screen flex items-center justify-center text-center px-6 py-8 bg-gradient-to-br from-slate-900 to-indigo-950/30">
      <div className="max-w-4xl mx-auto">
        <span className="inline-block bg-indigo-900/50 text-indigo-300 px-5 py-2 rounded-full text-sm font-semibold mb-4">
          <i className="fas fa-briefcase mr-2"></i> Open to Internships · 2026
        </span>

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight mb-2 text-white">
          Hi, I'm <span className="text-indigo-400">Ayesha Gayanthi</span>
        </h1>
        <p className="text-2xl sm:text-3xl text-slate-300 font-medium mb-2">
          Full Stack Developer
        </p>
        <p className="text-base md:text-lg text-slate-400 max-w-2xl mx-auto mb-6">
          3rd Year IT Undergraduate @ SLIIT
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-6">
          <div className="flex items-center gap-2 bg-slate-800 px-4 py-2 rounded-full shadow-slate-800/50">
            <FaCode className="text-indigo-400" />
            <span className="text-sm font-medium text-slate-300">React · Spring Boot</span>
          </div>
          <div className="flex items-center gap-2 bg-slate-800 px-4 py-2 rounded-full shadow-slate-800/50">
            <FaMobile className="text-purple-400" />
            <span className="text-sm font-medium text-slate-300">Android · Kotlin</span>
          </div>
          <div className="flex items-center gap-2 bg-slate-800 px-4 py-2 rounded-full shadow-slate-800/50">
            <FaDatabase className="text-green-400" />
            <span className="text-sm font-medium text-slate-300">MySQL · MongoDB</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          <Link to="/projects" className="btn-primary">
            View My Work
          </Link>
          <Link to="/contact" className="btn-outline">
            Contact Me
          </Link>
          <button 
            onClick={downloadCV} 
            className="bg-indigo-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg shadow-indigo-900/30 hover:bg-indigo-700 transition-all duration-300 hover:-translate-y-1 inline-flex items-center gap-2"
          >
            <FaDownload /> Download CV
          </button>
        </div>

        <div className="flex justify-center gap-6 mt-8 text-2xl text-slate-400">
          <a href="https://github.com/it23677296-ayesha" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors" aria-label="GitHub"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/ayesha-withanage-595aaa343/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors" aria-label="LinkedIn"><FaLinkedin /></a>
          <a href="mailto:ayesha20021210@gmail.com" className="hover:text-indigo-400 transition-colors" aria-label="Email"><FaEnvelope /></a>
        </div>

        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
          <div className="w-6 h-10 border-2 border-slate-600 rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-indigo-400 rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero