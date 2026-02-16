import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiExternalLink, FiGithub, FiFolder } from 'react-icons/fi'
import { SiReact, SiNodedotjs, SiMongodb, SiExpress, SiTailwindcss, SiFirebase, SiSocketdotio, SiRedux } from 'react-icons/si'

const techIcons = {
    'React': <SiReact />, 'Node.js': <SiNodedotjs />, 'MongoDB': <SiMongodb />,
    'Express': <SiExpress />, 'Tailwind': <SiTailwindcss />, 'Firebase': <SiFirebase />,
    'Socket.io': <SiSocketdotio />, 'Redux': <SiRedux />,
}

const projects = [
    {
        title: 'E-Commerce Platform',
        description: 'A full-featured e-commerce platform with user authentication, product management, cart system, Stripe payments, and admin dashboard.',
        tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Redux'],
        github: 'https://github.com/azanlatif', live: '#', color: '#6c63ff', category: 'Full Stack',
    },
    {
        title: 'Real-Time Chat App',
        description: 'A real-time messaging application with private/group chat, online status, typing indicators, and message read receipts.',
        tech: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
        github: 'https://github.com/azanlatif', live: '#', color: '#00d4aa', category: 'Full Stack',
    },
    {
        title: 'Task Management System',
        description: 'A project management tool with drag-and-drop Kanban boards, team collaboration, task assignment, and real-time notifications.',
        tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind'],
        github: 'https://github.com/azanlatif', live: '#', color: '#ff6b9d', category: 'Full Stack',
    },
    {
        title: 'Portfolio Website',
        description: 'A modern, animated portfolio built with React and Framer Motion, featuring glassmorphism, particle effects, and smooth animations.',
        tech: ['React', 'Tailwind'],
        github: 'https://github.com/azanlatif', live: '#', color: '#ffd93d', category: 'Frontend',
    },
    {
        title: 'Blog Platform',
        description: 'A full-stack blog with markdown support, categories, comments, user roles, and a rich text editor for managing posts.',
        tech: ['React', 'Node.js', 'MongoDB', 'Express'],
        github: 'https://github.com/azanlatif', live: '#', color: '#6BCB77', category: 'Full Stack',
    },
    {
        title: 'Weather Dashboard',
        description: 'A beautiful weather dashboard with location-based forecasts, interactive maps, hourly/weekly predictions, and animated visuals.',
        tech: ['React', 'Tailwind', 'Firebase'],
        github: 'https://github.com/azanlatif', live: '#', color: '#4D96FF', category: 'Frontend',
    },
]

const categories = ['All', 'Full Stack', 'Frontend']

/* Single card with its own inView trigger for staggered scroll reveal */
const ProjectCard = ({ project, i }) => {
    const [cardRef, cardInView] = useInView({ threshold: 0.15, triggerOnce: true })

    return (
        <motion.div
            ref={cardRef}
            className="glass glass-hover relative p-8 rounded-3xl overflow-hidden flex flex-col hoverable group"
            layout
            initial={{ opacity: 0, y: 60, scale: 0.9, filter: 'blur(8px)' }}
            animate={cardInView
                ? { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }
                : { opacity: 0, y: 60, scale: 0.9, filter: 'blur(8px)' }}
            exit={{ opacity: 0, scale: 0.85, y: 30, filter: 'blur(6px)', transition: { duration: 0.3 } }}
            transition={{
                delay: i * 0.12,
                duration: 0.7,
                ease: [0.25, 0.46, 0.45, 0.94],
            }}
            whileHover={{
                y: -12,
                boxShadow: `0 20px 60px ${project.color}25, 0 0 0 1px ${project.color}40`,
                transition: { duration: 0.3, ease: 'easeOut' }
            }}
        >
            {/* Accent gradient — animates on hover */}
            <motion.div
                className="absolute top-0 left-0 right-0 h-40 z-0 pointer-events-none"
                style={{ background: `linear-gradient(135deg, ${project.color}15, transparent)` }}
                initial={{ opacity: 0.5 }}
                whileHover={{ opacity: 1 }}
            />

            {/* Shimmer line on hover */}
            <div className="absolute top-0 left-0 right-0 h-[1px] z-[1] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `linear-gradient(90deg, transparent, ${project.color}80, transparent)` }} />

            <div className="flex items-center justify-between mb-5 relative z-[1]">
                <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0], transition: { duration: 0.5 } }}
                >
                    <FiFolder className="text-3xl" style={{ color: project.color }} />
                </motion.div>
                <div className="flex gap-3">
                    <motion.a href={project.github} target="_blank" rel="noopener noreferrer"
                        className="text-txt-mute text-lg hover:text-txt transition-colors duration-200 hoverable"
                        whileHover={{ y: -3, scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                        <FiGithub />
                    </motion.a>
                    <motion.a href={project.live} target="_blank" rel="noopener noreferrer"
                        className="text-txt-mute text-lg hover:text-txt transition-colors duration-200 hoverable"
                        whileHover={{ y: -3, scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                        <FiExternalLink />
                    </motion.a>
                </div>
            </div>

            <h3 className="text-lg font-bold text-txt mb-3 relative z-[1] group-hover:text-white transition-colors duration-300">
                {project.title}
            </h3>
            <p className="text-sm text-txt-mute leading-relaxed mb-6 relative z-[1] flex-1">
                {project.description}
            </p>

            <div className="flex flex-wrap gap-2 relative z-[1]">
                {project.tech.map((t, idx) => (
                    <motion.span key={t}
                        className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium font-mono text-mint rounded-full"
                        style={{ background: 'rgba(0,212,170,0.1)' }}
                        initial={{ opacity: 0, x: -10 }}
                        animate={cardInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: i * 0.12 + 0.4 + idx * 0.06, duration: 0.4 }}
                    >
                        {techIcons[t] && <span className="text-xs flex">{techIcons[t]}</span>}
                        {t}
                    </motion.span>
                ))}
            </div>
        </motion.div>
    )
}

const Projects = () => {
    const [ref, inView] = useInView({ threshold: 0.02, triggerOnce: true })
    const [activeCategory, setActiveCategory] = useState('All')
    const filtered = activeCategory === 'All' ? projects : projects.filter(p => p.category === activeCategory)

    return (
        <section id="projects" className="py-28 relative overflow-hidden" ref={ref}>
            <div className="glow-orb w-[350px] h-[350px] bg-pink top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            <div className="max-w-[1200px] mx-auto px-6">

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                    <p className="section-label">Projects</p>
                    <h2 className="section-title">Things I've Built</h2>
                    <p className="section-desc">A collection of projects that showcase my expertise in full-stack development.</p>
                </motion.div>

                {/* Filter pills */}
                <motion.div className="flex gap-2.5 mt-10 mb-12 flex-wrap"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.25, duration: 0.6 }}
                >
                    {categories.map((cat) => (
                        <motion.button key={cat}
                            className={`px-6 py-2.5 text-sm font-medium rounded-full transition-all duration-200 hoverable ${activeCategory === cat
                                ? 'text-white gradient-bg'
                                : 'glass text-txt-dim hover:text-txt'
                                }`}
                            onClick={() => setActiveCategory(cat)}
                            whileHover={{ scale: 1.08 }}
                            whileTap={{ scale: 0.92 }}
                            layout
                        >
                            {cat}
                        </motion.button>
                    ))}
                </motion.div>

                {/* Project cards */}
                <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" layout>
                    <AnimatePresence mode="popLayout">
                        {filtered.map((project, i) => (
                            <ProjectCard key={project.title} project={project} i={i} />
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    )
}

export default Projects
