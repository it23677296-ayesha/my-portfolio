const EducationSection = () => {
  const coursework = [
    "OOP", "Data Structures & Algorithms", "DBMS",
    "Software Frameworks", "Mobile App Development", "IT Project Management"
  ]

  return (
    <section className="py-12 md:py-16 px-6 bg-slate-100">
      <div className="max-w-3xl mx-auto">
        <h2 className="section-title">Education</h2>
        <p className="section-subtitle">My academic background</p>

        <div className="card text-center">
          <h3 className="text-2xl font-bold">BSc (Hons) in Information Technology</h3>
          <p className="text-indigo-600 font-semibold text-base md:text-lg">Sri Lanka Institute of Information Technology (SLIIT), Malabe</p>
          <p className="text-slate-600 mt-1 mb-4">Oct 2023 – Present · 3rd Year</p>

          <div className="flex flex-wrap justify-center gap-3 mt-4">
            {coursework.map((course, index) => (
              <span key={index} className="bg-indigo-100 text-indigo-700 px-4 py-1.5 rounded-full text-sm font-medium">
                {course}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default EducationSection