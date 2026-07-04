import { FaEnvelope, FaPhone, FaDownload } from 'react-icons/fa'
import { useState } from 'react'

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  })

  const downloadCV = () => {
    const cvUrl = '/cv/Ayesha_Gayanthi_CV.pdf'
    const link = document.createElement('a')
    link.href = cvUrl
    link.download = 'Ayesha_Gayanthi_CV.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const validateForm = () => {
    let isValid = true
    const newErrors = { name: '', email: '', message: '' }

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
      isValid = false
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
      isValid = false
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
      isValid = false
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setStatus('loading')

    try {
      const response = await fetch('https://formspree.io/f/mdarpekn', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', message: '' })
        setErrors({ name: '', email: '', message: '' })
        setTimeout(() => setStatus('idle'), 5000)
      } else {
        setStatus('error')
        setTimeout(() => setStatus('idle'), 5000)
      }
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    setErrors({
      ...errors,
      [e.target.name]: ''
    })
  }

  return (
    <section className="py-16 md:py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">Let's connect and discuss opportunities</p>

        {/* Contact Cards - 3 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {/* Email Card */}
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm dark:shadow-slate-800/50 border-l-4 border-indigo-600 dark:border-indigo-400 transition-colors duration-300">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 p-2 rounded-full">
                <FaEnvelope className="text-lg" />
              </div>
              <h4 className="font-semibold text-slate-800 dark:text-white">Email</h4>
            </div>
            <a href="mailto:ayesha20021210@gmail.com" className="text-indigo-600 dark:text-indigo-400 hover:underline">
              ayesha20021210@gmail.com
            </a>
          </div>

          {/* Phone Card */}
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm dark:shadow-slate-800/50 border-l-4 border-indigo-600 dark:border-indigo-400 transition-colors duration-300">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 p-2 rounded-full">
                <FaPhone className="text-lg" />
              </div>
              <h4 className="font-semibold text-slate-800 dark:text-white">Phone</h4>
            </div>
            <a href="tel:+94770614999" className="text-indigo-600 dark:text-indigo-400 hover:underline">
              +94 77 061 4999
            </a>
          </div>

          {/* Download CV Card */}
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm dark:shadow-slate-800/50 border-l-4 border-indigo-600 dark:border-indigo-400 transition-colors duration-300">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 p-2 rounded-full">
                <FaDownload className="text-lg" />
              </div>
              <h4 className="font-semibold text-slate-800 dark:text-white">CV</h4>
            </div>
            <button 
              onClick={downloadCV} 
              className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium"
            >
              Download CV
            </button>
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-sm dark:shadow-slate-800/50 transition-colors duration-300">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg bg-white dark:bg-slate-900 text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-transparent transition-colors duration-300 ${
                    errors.name ? 'border-red-500 ring-1 ring-red-500' : 'border-slate-300 dark:border-slate-600'
                  }`}
                  placeholder="Your name"
                  required
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg bg-white dark:bg-slate-900 text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-transparent transition-colors duration-300 ${
                    errors.email ? 'border-red-500 ring-1 ring-red-500' : 'border-slate-300 dark:border-slate-600'
                  }`}
                  placeholder="your@email.com"
                  required
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg bg-white dark:bg-slate-900 text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-transparent transition-colors duration-300 ${
                    errors.message ? 'border-red-500 ring-1 ring-red-500' : 'border-slate-300 dark:border-slate-600'
                  }`}
                  placeholder="Your message..."
                  required
                />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>

              {status === 'loading' && <div className="text-indigo-600 dark:text-indigo-400 text-center font-medium">⏳ Sending message...</div>}
              {status === 'success' && <div className="text-green-600 dark:text-green-400 text-center font-medium">✅ Message sent successfully!</div>}
              {status === 'error' && <div className="text-red-600 dark:text-red-400 text-center font-medium">❌ Failed to send. Please try again.</div>}

              <button 
                type="submit" 
                className="btn-primary w-full text-center"
                disabled={status === 'loading'}
              >
                {status === 'loading' ? 'Sending...' : 'Send Message'}
              </button>

              <p className="text-xs text-slate-400 dark:text-slate-500 text-center mt-2">
                <span className="text-red-500">*</span> All fields are required
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection