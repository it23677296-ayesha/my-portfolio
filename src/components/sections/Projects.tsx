const ProjectsSection = () => {
  const webProjects = [
    {
      title: "UniSpectra",
      tech: "React.js · Spring Boot · MySQL",
      description: "Multi-module university platform. Built the Assignment Workflow module — task creation, Kanban-style tracking, and AI-powered Research Assistant for topic/resource suggestions.",
      link: "https://github.com/Chenuka01/UniSpectra",
      type: "Group Project"
    },
    {
      title: "Smart Campus Hub",
      tech: "React · TypeScript · Spring Boot · MySQL",
      description: "University ecosystem for facility management. Built Facility & Asset Management module — smart catalog with real-time availability, categorization, and favorites for quick booking.",
      link: "https://github.com/Chenuka01/smart-campus-hub",
      type: "Group Project"
    }
  ]

  const mobileProjects = [
    {
      title: "QuickBus",
      tech: "Kotlin · XML · Android Studio",
      description: "Android app for bus route search, schedule viewing, seat booking, and payments. Built end-to-end user flow with authentication, profile management, and bottom-navigation UI.",
      link: "https://github.com/it23677296-ayesha/quick-bus-app",
      type: "Individual Project"
    },
    {
      title: "TaskFlow",
      tech: "Kotlin · MPAndroidChart · Android Studio",
      description: "Productivity app with habit tracking, mood logging, hydration monitoring, and progress charts. Includes home-screen widget, scheduled reminders, and local data persistence.",
      link: "https://github.com/it23677296-ayesha/task-flow-app",
      type: "Individual Project"
    }
  ]

  return (
    <section className="py-16 md:py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">Some of the work I've built</p>

        {/* Web Projects - Group */}
        <h3 className="text-2xl font-bold text-slate-800 mb-4 border-b-2 border-indigo-200 pb-2 flex items-center gap-2">
          🌐 Web Projects <span className="text-sm font-normal text-slate-500">(Group)</span>
        </h3>
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {webProjects.map((project, index) => (
            <div key={index} className="card border-l-4 border-indigo-600">
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-bold text-slate-800 mb-1">{project.title}</h3>
                <span className="text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full">
                  {project.type}
                </span>
              </div>
              <p className="text-indigo-600 font-semibold text-sm mb-3">{project.tech}</p>
              <p className="text-slate-700 text-sm md:text-base mb-4">{project.description}</p>
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-indigo-600 font-semibold hover:underline inline-flex items-center gap-1 text-sm"
              >
                View Repository <i className="fas fa-arrow-right text-xs"></i>
              </a>
            </div>
          ))}
        </div>

        {/* Mobile Applications - Individual */}
        <h3 className="text-2xl font-bold text-slate-800 mb-4 border-b-2 border-purple-200 pb-2 flex items-center gap-2">
          📱 Mobile Applications <span className="text-sm font-normal text-slate-500">(Individual)</span>
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {mobileProjects.map((project, index) => (
            <div key={index} className="card border-l-4 border-purple-600">
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-bold text-slate-800 mb-1">{project.title}</h3>
                <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">
                  {project.type}
                </span>
              </div>
              <p className="text-purple-600 font-semibold text-sm mb-3">{project.tech}</p>
              <p className="text-slate-700 text-sm md:text-base mb-4">{project.description}</p>
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-purple-600 font-semibold hover:underline inline-flex items-center gap-1 text-sm"
              >
                View Repository <i className="fas fa-arrow-right text-xs"></i>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection