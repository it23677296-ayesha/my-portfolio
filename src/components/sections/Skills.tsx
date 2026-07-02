const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: "fa-code",
      skills: ["Java", "JavaScript", "PHP", "SQL", "Kotlin"]
    },
    {
      title: "Frontend",
      icon: "fa-layer-group",
      skills: ["React.js", "HTML5 / CSS3", "Bootstrap", "Tailwind CSS"]
    },
    {
      title: "Backend",
      icon: "fa-server",
      skills: ["Node.js", "Express.js", "Spring Boot", "Java Servlets & JSP", "REST APIs"]
    },
    {
      title: "Database",
      icon: "fa-database",
      skills: ["MySQL", "MongoDB"]
    },
    {
      title: "Mobile",
      icon: "fa-mobile-alt",
      skills: ["Android Studio", "Kotlin", "XML UI"]
    },
    {
      title: "Tools",
      icon: "fa-tools",
      skills: ["Git / GitHub", "VS Code", "Eclipse", "Postman"]
    }
  ]

  return (
    <section className="py-16 md:py-20 px-6 bg-slate-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">Technical Skills</h2>
        <p className="section-subtitle">Tools & technologies I work with</p>

        <div className="bg-white p-6 md:p-10 rounded-2xl shadow-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {skillCategories.map((category, index) => (
              <div key={index}>
                <h4 className="text-indigo-600 font-semibold text-base md:text-lg mb-3 border-b-2 border-slate-200 pb-2">
                  <i className={`fas ${category.icon} mr-2`}></i> {category.title}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <span key={idx} className="bg-slate-100 text-slate-800 px-3 py-1.5 rounded-full text-xs md:text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills