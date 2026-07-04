const EducationSection = () => {
  return (
    <section className="py-12 md:py-16 px-6 bg-slate-100 dark:bg-slate-800/50 transition-colors duration-300">
      <div className="max-w-3xl mx-auto">
        <h2 className="section-title">Education</h2>
        <p className="section-subtitle">My academic background</p>

        <div className="bg-white dark:bg-slate-800 p-8 md:p-10 rounded-2xl shadow-sm dark:shadow-slate-800/50 transition-colors duration-300 text-center">
          <h3 className="text-2xl font-bold text-slate-800 dark:text-white">BSc (Hons) in Information Technology</h3>
          <p className="text-indigo-600 dark:text-indigo-400 font-semibold text-base md:text-lg">Sri Lanka Institute of Information Technology (SLIIT), Malabe</p>
          <p className="text-slate-600 dark:text-slate-400 mt-1">Oct 2023 – Present · 3rd Year</p>
        </div>
      </div>
    </section>
  )
}

export default EducationSection