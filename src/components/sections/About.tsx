const AboutSection = () => {
  return (
    <section className="py-16 md:py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">Who I am & what I do</p>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Left Side - Description + 3+ Projects Card */}
          <div className="space-y-4 text-base md:text-lg text-slate-700">
            <div className="inline-block bg-indigo-100 text-indigo-700 px-4 py-1.5 rounded-full text-sm font-semibold">
              🎓 3rd Year Undergraduate
            </div>

            <p>
              <span className="font-semibold text-slate-900">Motivated Full Stack Developer</span> and 3rd-year IT undergraduate at SLIIT,
              with hands-on project experience across Java, PHP, and JavaScript — including full-stack development
              with the <span className="font-semibold text-slate-900">MERN stack</span> and <span className="font-semibold text-slate-900">Spring Boot</span>.
            </p>
            <p>
              Comfortable working across the stack, from React front-ends to backend REST APIs and database design.
              Experienced in Agile teams using Git/GitHub. Passionate about building user-centric applications.
            </p>
            <p className="font-semibold text-indigo-700">
              Currently seeking a Full Stack Developer Internship to apply my skills in a real-world setting.
            </p>

            {/* 3+ Projects Card - Description එකට පහළින් */}
            <div className="bg-white p-6 rounded-xl text-center shadow-sm hover:shadow-md transition-shadow border border-slate-200 max-w-xs">
              <div className="text-4xl font-extrabold text-indigo-600">3+</div>
              <div className="text-slate-600 text-lg font-medium mt-1">Projects</div>
              <div className="mt-2 text-sm text-slate-400">Completed</div>
            </div>
          </div>

          {/* Right Side - Profile Photo */}
          <div className="flex flex-col items-center">
            <div className="w-full max-w-md aspect-square rounded-full overflow-hidden shadow-xl border-4 border-indigo-200">
              <img 
                src="/profile.jpeg" 
                alt="Ayesha Gayanthi"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="mt-4 text-lg text-slate-600 font-medium">Ayesha Gayanthi</p>
            <p className="text-sm text-slate-400">Full Stack Developer</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection