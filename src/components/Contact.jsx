import React, { useState, useEffect } from 'react';
import { FaSpinner, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const channels = [
  {
    icon: <FaEnvelope size={22} />,
    label: 'Email',
    value: 'vazquezgurrolajavier@gmail.com',
    href: 'mailto:vazquezgurrolajavier@gmail.com',
    color: 'hover:border-[#49AF73]',
    iconColor: 'text-[#49AF73]',
  },
  {
    icon: <FaLinkedin size={22} />,
    label: 'LinkedIn',
    value: 'javier-vázquez-gurrola',
    href: 'https://www.linkedin.com/in/javier-v%C3%A1zquez-gurrola-01615b241/',
    color: 'hover:border-blue-400',
    iconColor: 'text-blue-400',
  },
  {
    icon: <FaGithub size={22} />,
    label: 'GitHub',
    value: 'Java-Vazquez',
    href: 'https://github.com/Java-Vazquez',
    color: 'hover:border-purple-400',
    iconColor: 'text-purple-400',
  },
]

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formError, setFormError] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error' | null

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Please enter your name';
    if (!formData.email.trim()) errors.email = 'Please enter your email';
    else if (!/^\S+@\S+\.\S+$/.test(formData.email)) errors.email = 'Invalid email format';
    if (!formData.message.trim()) errors.message = 'Please enter your message';

    if (Object.keys(errors).length > 0) {
      setFormError(errors);
      return;
    }

    setIsLoading(true);
    setFormError({});
    try {
      const response = await fetch('https://getform.io/f/aeae574a-9610-4065-93cf-69f937d1d9dc', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setFormData({ name: '', email: '', message: '' });
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (status) {
      const t = setTimeout(() => setStatus(null), 5000);
      return () => clearTimeout(t);
    }
  }, [status]);

  return (
    <section name="contact" aria-label="Contact" className="w-full py-20 bg-[#0a192f] text-[#F8FBFF]">
      <div className="max-w-[1000px] mx-auto px-4">

        {/* Header */}
        <div className="mb-12">
          <p className="text-4xl font-bold inline border-b-4 border-[#49AF73]">Contact</p>
          <p className="py-4 text-[#8892b0]">Have a project in mind or just want to connect? Reach out.</p>
        </div>

        {/* Contact channel cards */}
        <div className="grid sm:grid-cols-3 gap-4 mb-12">
          {channels.map((ch, i) => (
            <a
              key={i}
              href={ch.href}
              target={ch.href.startsWith('mailto') ? '_self' : '_blank'}
              rel="noreferrer"
              className={`bg-[#112240] rounded-xl p-5 border border-[#1e3a5f] ${ch.color} transition-all duration-300 hover:-translate-y-1 flex items-center gap-4`}
            >
              <span className={ch.iconColor}>{ch.icon}</span>
              <div>
                <p className="text-xs text-[#8892b0] mb-0.5">{ch.label}</p>
                <p className="text-sm font-semibold text-[#ccd6f6] truncate">{ch.value}</p>
              </div>
            </a>
          ))}
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-[#112240] rounded-xl p-8 border border-[#1e3a5f]">
          <h3 className="text-lg font-bold text-[#ccd6f6] mb-6">Send a message</h3>
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <div>
              <input
                className="w-full bg-[#0a192f] text-[#F8FBFF] p-3 rounded-lg border border-[#1e3a5f] focus:border-[#49AF73] focus:outline-none transition-colors placeholder-[#4a5568]"
                type="text"
                placeholder="Your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
              {formError.name && <p className="text-red-400 text-xs mt-1">{formError.name}</p>}
            </div>
            <div>
              <input
                className="w-full bg-[#0a192f] text-[#F8FBFF] p-3 rounded-lg border border-[#1e3a5f] focus:border-[#49AF73] focus:outline-none transition-colors placeholder-[#4a5568]"
                type="email"
                placeholder="Your email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
              {formError.email && <p className="text-red-400 text-xs mt-1">{formError.email}</p>}
            </div>
          </div>
          <div className="mb-6">
            <textarea
              className="w-full bg-[#0a192f] text-[#F8FBFF] p-3 rounded-lg border border-[#1e3a5f] focus:border-[#49AF73] focus:outline-none transition-colors placeholder-[#4a5568] resize-none"
              rows="6"
              placeholder="Your message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
            {formError.message && <p className="text-red-400 text-xs mt-1">{formError.message}</p>}
          </div>
          <div className="flex items-center justify-between flex-wrap gap-4">
            <button
              type="submit"
              disabled={isLoading}
              className="bg-[#49AF73] hover:bg-[#3d9862] text-[#0a192f] font-bold px-8 py-3 rounded-lg flex items-center gap-2 transition-colors duration-200 disabled:opacity-60"
            >
              {isLoading ? <><FaSpinner className="animate-spin" /> Sending...</> : "Send Message"}
            </button>
            {status === 'success' && (
              <p className="text-[#49AF73] text-sm">Message sent! I'll get back to you soon.</p>
            )}
            {status === 'error' && (
              <p className="text-red-400 text-sm">Something went wrong. Try emailing me directly.</p>
            )}
          </div>
        </form>

      </div>
    </section>
  );
}

export default Contact;
