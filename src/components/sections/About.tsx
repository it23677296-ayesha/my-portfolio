const AboutSection = () => {
  return (
    <section className="py-16 md:py-20 px-6 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">Who I am & what I do</p>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-4 text-base md:text-lg text-slate-700 dark:text-slate-300">
            <div className="inline-block bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 px-4 py-1.5 rounded-full text-sm font-semibold transition-colors duration-300">
              🎓 3rd Year Undergraduate
            </div>

            <p>
              <span className="font-semibold text-slate-900 dark:text-white">Motivated Full Stack Developer</span> and 3rd-year IT undergraduate at SLIIT,
              with hands-on project experience across Java, PHP, and JavaScript — including full-stack development
              with the <span className="font-semibold text-slate-900 dark:text-white">MERN stack</span> and <span className="font-semibold text-slate-900 dark:text-white">Spring Boot</span>.
            </p>
            <p>
              Comfortable working across the stack, from React front-ends to backend REST APIs and database design.
              Experienced in Agile teams using Git/GitHub. Passionate about building user-centric applications.
            </p>
            <p className="font-semibold text-indigo-700 dark:text-indigo-400">
              Currently seeking a Full Stack Developer Internship to apply my skills in a real-world setting.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-80 h-80 rounded-full overflow-hidden shadow-xl border-4 border-indigo-200 dark:border-indigo-800 transition-colors duration-300">
              <img 
                src="/profile.jpeg" 
                alt="Ayesha Gayanthi"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 font-medium">Ayesha Gayanthi</p>
            <p className="text-sm text-slate-400 dark:text-slate-500">Full Stack Developer</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection