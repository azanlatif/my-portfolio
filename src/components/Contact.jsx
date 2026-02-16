import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiSend, FiMail, FiMapPin, FiPhone, FiGithub, FiLinkedin } from 'react-icons/fi'

const Contact = () => {
    const [ref, inView] = useInView({ threshold: 0.02, triggerOnce: true })
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setSubmitted(true)
        setTimeout(() => setSubmitted(false), 3000)
        setFormData({ name: '', email: '', subject: '', message: '' })
    }
    const handleChange = (e) => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))

    const contactInfo = [
        { icon: <FiMail />, label: 'Email', value: 'azanlatif01@gmail.com', href: 'mailto:azanlatif01@gmail.com' },
        { icon: <FiMapPin />, label: 'Location', value: 'Pakistan', href: '#' },
        { icon: <FiPhone />, label: 'Phone', value: '+92 XXX XXXXXXX', href: '#' },
    ]

    return (
        <section id="contact" className="py-28 relative overflow-hidden" ref={ref}>
            <div className="glow-orb w-[500px] h-[500px] bg-accent -top-24 -left-48" />
            <div className="glow-orb w-[400px] h-[400px] bg-mint -bottom-24 -right-36" />
            <div className="max-w-[1200px] mx-auto px-6">

                <motion.div className="text-center mb-16"
                    initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>
                    <p className="section-label justify-center">Contact</p>
                    <h2 className="section-title">Let's Work Together</h2>
                    <p className="section-desc mx-auto text-center">
                        Have a project in mind or want to collaborate? Feel free to reach out.
                        I'm always open to new opportunities.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-[0.4fr_0.6fr] gap-12 items-start">
                    {/* Left - info */}
                    <motion.div initial={{ opacity: 0, x: -40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.2, duration: 0.6 }}>
                        <div className="flex flex-col gap-3.5 mb-10">
                            {contactInfo.map((info, i) => (
                                <motion.a key={info.label} href={info.href}
                                    className="glass glass-hover flex items-center gap-4 p-5 rounded-2xl transition-all duration-300 hoverable"
                                    initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ delay: 0.3 + i * 0.1 }}
                                    whileHover={{ y: -4, transition: { duration: 0.2 } }}>
                                    <div className="shrink-0 w-11 h-11 flex items-center justify-center rounded-xl text-accent text-lg"
                                        style={{ background: 'rgba(108,99,255,0.1)' }}>
                                        {info.icon}
                                    </div>
                                    <div>
                                        <span className="block text-xs text-txt-mute font-medium mb-0.5">{info.label}</span>
                                        <span className="block text-sm text-txt font-medium">{info.value}</span>
                                    </div>
                                </motion.a>
                            ))}
                        </div>

                        <div>
                            <p className="text-xs text-txt-mute font-medium mb-3.5">Find me on</p>
                            <div className="flex gap-3">
                                {[
                                    { icon: <FiGithub />, href: 'https://github.com/azanlatif', label: 'GitHub' },
                                    { icon: <FiLinkedin />, href: 'https://www.linkedin.com/in/azanlatif/', label: 'LinkedIn' },
                                ].map(s => (
                                    <motion.a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                                        className="glass flex items-center gap-2 px-5 py-3 rounded-xl text-txt-dim text-sm font-medium hover:text-accent hover:border-accent transition-all duration-200 hoverable"
                                        whileHover={{ scale: 1.1, y: -3 }} whileTap={{ scale: 0.95 }}>
                                        {s.icon}
                                        <span>{s.label}</span>
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Right - form */}
                    <motion.form className="glass p-9 rounded-3xl flex flex-col gap-5"
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, x: 40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.3, duration: 0.6 }}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="flex flex-col gap-1.5">
                                <label htmlFor="name" className="text-xs font-semibold text-txt-dim">Name</label>
                                <input type="text" id="name" name="name" placeholder="Your name"
                                    value={formData.name} onChange={handleChange} required className="input-field" />
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <label htmlFor="email" className="text-xs font-semibold text-txt-dim">Email</label>
                                <input type="email" id="email" name="email" placeholder="your@email.com"
                                    value={formData.email} onChange={handleChange} required className="input-field" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <label htmlFor="subject" className="text-xs font-semibold text-txt-dim">Subject</label>
                            <input type="text" id="subject" name="subject" placeholder="What's this about?"
                                value={formData.subject} onChange={handleChange} required className="input-field" />
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <label htmlFor="message" className="text-xs font-semibold text-txt-dim">Message</label>
                            <textarea id="message" name="message" rows={5} placeholder="Tell me about your project..."
                                value={formData.message} onChange={handleChange} required className="input-field" style={{ resize: 'vertical' }} />
                        </div>
                        <motion.button type="submit"
                            className="flex items-center justify-center gap-2.5 px-8 py-4 text-base font-semibold text-white gradient-bg rounded-xl hoverable"
                            whileHover={{ scale: 1.03, boxShadow: '0 8px 30px rgba(108,99,255,0.4)' }}
                            whileTap={{ scale: 0.97 }}>
                            {submitted ? '✓ Message Sent!' : <><span>Send Message</span> <FiSend /></>}
                        </motion.button>
                    </motion.form>
                </div>
            </div>
        </section>
    )
}

export default Contact
