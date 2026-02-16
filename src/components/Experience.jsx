import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiCalendar, FiMapPin } from 'react-icons/fi'

const experiences = [
    {
        role: 'Software Engineering Student',
        company: 'University',
        location: 'Pakistan',
        period: '2022 - Present',
        description: 'Pursuing a Bachelor\'s in Software Engineering, gaining strong fundamentals in data structures, algorithms, OOP, databases, and software design patterns.',
        highlights: ['Data Structures & Algorithms', 'Object-Oriented Design', 'Database Systems', 'Software Architecture'],
        type: 'education',
    },
    {
        role: 'MERN Stack Developer',
        company: 'Freelance / Self-Projects',
        location: 'Remote',
        period: '2023 - Present',
        description: 'Building full-stack web applications using the MERN stack. Developed multiple projects including e-commerce platforms, chat applications, and management systems.',
        highlights: ['React.js & Next.js', 'RESTful API Design', 'MongoDB & Mongoose', 'Auth & Authorization'],
        type: 'work',
    },
    {
        role: 'Open Source Contributor',
        company: 'GitHub',
        location: 'Remote',
        period: '2024 - Present',
        description: 'Contributing to open-source projects, collaborating with developers worldwide, and learning industry-standard development practices and workflows.',
        highlights: ['Git Workflow', 'Code Reviews', 'Documentation', 'Community Collaboration'],
        type: 'work',
    },
]

/* Each timeline card has its own scroll trigger */
const TimelineCard = ({ exp, i }) => {
    const [cardRef, cardInView] = useInView({ threshold: 0.2, triggerOnce: true })

    return (
        <motion.div
            ref={cardRef}
            className="relative hoverable group"
            initial={{ opacity: 0, x: -50, filter: 'blur(6px)' }}
            animate={cardInView
                ? { opacity: 1, x: 0, filter: 'blur(0px)' }
                : { opacity: 0, x: -50, filter: 'blur(6px)' }}
            transition={{
                duration: 0.7,
                delay: 0.1,
                ease: [0.25, 0.46, 0.45, 0.94]
            }}
            whileHover={{ y: -5, transition: { duration: 0.25 } }}
        >
            {/* Timeline dot — centered on the line */}
            <motion.div
                className="absolute -left-[26px] top-7 w-3 h-3 rounded-full gradient-bg z-[2]"
                style={{ boxShadow: '0 0 16px rgba(108,99,255,0.3)' }}
                initial={{ scale: 0, opacity: 0 }}
                animate={cardInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                transition={{ delay: 0.3, duration: 0.5, type: 'spring', stiffness: 300, damping: 15 }}
            >
                <span className="absolute -inset-1.5 border-2 border-accent rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-300"
                    style={{ animation: 'pulse-dot 2s infinite' }} />
            </motion.div>

            {/* Connecting horizontal line from dot to card */}
            <motion.div
                className="absolute -left-[14px] top-[30px] h-[2px] w-[14px] z-[1]"
                initial={{ scaleX: 0 }}
                animate={cardInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ delay: 0.5, duration: 0.3 }}
                style={{ transformOrigin: 'left', background: 'linear-gradient(90deg, #6c63ff, rgba(108,99,255,0.2))' }}
            />

            <motion.div
                className="glass p-7 md:p-8 rounded-3xl transition-all duration-300"
                style={{ transition: 'box-shadow 0.3s ease, border-color 0.3s ease' }}
                whileHover={{
                    boxShadow: exp.type === 'education'
                        ? '0 15px 50px rgba(108,99,255,0.15), 0 0 0 1px rgba(108,99,255,0.2)'
                        : '0 15px 50px rgba(0,212,170,0.12), 0 0 0 1px rgba(0,212,170,0.2)'
                }}
            >
                {/* Shimmer line */}
                <div className="absolute top-0 left-6 right-6 h-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"
                    style={{
                        background: exp.type === 'education'
                            ? 'linear-gradient(90deg, transparent, rgba(108,99,255,0.5), transparent)'
                            : 'linear-gradient(90deg, transparent, rgba(0,212,170,0.5), transparent)'
                    }} />

                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={cardInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.4, duration: 0.5 }}
                    >
                        <h3 className="text-lg font-bold text-txt group-hover:text-white transition-colors duration-300">{exp.role}</h3>
                        <p className="text-sm text-accent font-medium mt-0.5">{exp.company}</p>
                    </motion.div>
                    <motion.span
                        className={`self-start px-3.5 py-1 text-xs font-medium rounded-full whitespace-nowrap ${exp.type === 'education' ? 'text-accent' : 'text-mint'}`}
                        style={{
                            background: exp.type === 'education'
                                ? 'rgba(108,99,255,0.1)'
                                : 'rgba(0,212,170,0.1)'
                        }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={cardInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.5, duration: 0.4, type: 'spring' }}
                    >
                        {exp.type === 'education' ? '🎓' : '💼'} {exp.type}
                    </motion.span>
                </div>

                <motion.div className="flex gap-5 mb-3.5"
                    initial={{ opacity: 0 }}
                    animate={cardInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.5, duration: 0.4 }}
                >
                    <span className="flex items-center gap-1.5 text-xs text-txt-mute"><FiCalendar /> {exp.period}</span>
                    <span className="flex items-center gap-1.5 text-xs text-txt-mute"><FiMapPin /> {exp.location}</span>
                </motion.div>

                <motion.p className="text-sm text-txt-dim leading-relaxed mb-4"
                    initial={{ opacity: 0 }}
                    animate={cardInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.55, duration: 0.5 }}
                >
                    {exp.description}
                </motion.p>

                <div className="flex flex-wrap gap-2">
                    {exp.highlights.map((h, idx) => (
                        <motion.span key={h}
                            className="glass px-3 py-1 text-xs font-medium font-mono text-txt-dim rounded-full"
                            initial={{ opacity: 0, y: 8 }}
                            animate={cardInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.6 + idx * 0.08, duration: 0.4 }}
                        >
                            {h}
                        </motion.span>
                    ))}
                </div>
            </motion.div>
        </motion.div>
    )
}

const Experience = () => {
    const [ref, inView] = useInView({ threshold: 0.02, triggerOnce: true })

    return (
        <section id="experience" className="py-28 relative overflow-hidden" ref={ref}>
            <div className="glow-orb w-[400px] h-[400px] bg-mint -bottom-24 -right-36" />
            <div className="max-w-[1200px] mx-auto px-6">

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                    <p className="section-label">Experience</p>
                    <h2 className="section-title">My Journey</h2>
                    <p className="section-desc">Education, development experience, and contributions shaping my career.</p>
                </motion.div>

                <div className="mt-16 flex flex-col gap-7 relative pl-10">
                    {/* Timeline line — grows downward on scroll */}
                    <motion.div
                        className="absolute left-[19px] top-0 bottom-0 w-0.5 origin-top"
                        style={{ background: 'linear-gradient(to bottom, #6c63ff, #00d4aa, transparent)' }}
                        initial={{ scaleY: 0 }}
                        animate={inView ? { scaleY: 1 } : { scaleY: 0 }}
                        transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.3 }}
                    />

                    {experiences.map((exp, i) => (
                        <TimelineCard key={exp.role} exp={exp} i={i} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Experience
