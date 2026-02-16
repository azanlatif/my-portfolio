import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
    SiReact, SiNodedotjs, SiExpress, SiMongodb,
    SiJavascript, SiTypescript, SiHtml5, SiCss3,
    SiTailwindcss, SiGit, SiGithub, SiPostman,
    SiRedux, SiNextdotjs, SiFirebase, SiFigma
} from 'react-icons/si'

const skillCategories = [
    {
        title: 'Frontend',
        skills: [
            { name: 'React.js', icon: <SiReact />, level: 90, color: '#61DAFB' },
            { name: 'JavaScript', icon: <SiJavascript />, level: 88, color: '#F7DF1E' },
            { name: 'TypeScript', icon: <SiTypescript />, level: 75, color: '#3178C6' },
            { name: 'HTML5', icon: <SiHtml5 />, level: 95, color: '#E34F26' },
            { name: 'CSS3', icon: <SiCss3 />, level: 90, color: '#1572B6' },
            { name: 'Tailwind', icon: <SiTailwindcss />, level: 85, color: '#06B6D4' },
            { name: 'Redux', icon: <SiRedux />, level: 78, color: '#764ABC' },
            { name: 'Next.js', icon: <SiNextdotjs />, level: 72, color: '#ffffff' },
        ]
    },
    {
        title: 'Backend',
        skills: [
            { name: 'Node.js', icon: <SiNodedotjs />, level: 85, color: '#339933' },
            { name: 'Express.js', icon: <SiExpress />, level: 83, color: '#ffffff' },
            { name: 'MongoDB', icon: <SiMongodb />, level: 82, color: '#47A248' },
            { name: 'Firebase', icon: <SiFirebase />, level: 70, color: '#FFCA28' },
        ]
    },
    {
        title: 'Tools',
        skills: [
            { name: 'Git', icon: <SiGit />, level: 85, color: '#F05032' },
            { name: 'GitHub', icon: <SiGithub />, level: 88, color: '#ffffff' },
            { name: 'Postman', icon: <SiPostman />, level: 80, color: '#FF6C37' },
            { name: 'Figma', icon: <SiFigma />, level: 65, color: '#F24E1E' },
        ]
    },
]

const Skills = () => {
    const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true })

    return (
        <section id="skills" className="py-28 relative overflow-hidden" ref={ref}>
            <div className="glow-orb w-[500px] h-[500px] bg-accent -top-24 -left-48" />
            <div className="max-w-[1200px] mx-auto px-6">

                <motion.div initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>
                    <p className="section-label">Skills & Tools</p>
                    <h2 className="section-title">My Tech Arsenal</h2>
                    <p className="section-desc">Technologies I've been working with to build modern, scalable applications.</p>
                </motion.div>

                <div className="mt-16 flex flex-col gap-12">
                    {skillCategories.map((category, catIdx) => (
                        <motion.div key={category.title}
                            initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: catIdx * 0.15, duration: 0.6 }}>
                            <h3 className="text-base font-semibold text-txt-dim mb-5 pb-3 border-b border-border tracking-wide">
                                {category.title}
                            </h3>
                            <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-8 gap-3">
                                {category.skills.map((skill, i) => (
                                    <motion.div key={skill.name}
                                        className="glass glass-hover flex flex-col items-center gap-2.5 py-6 px-3 rounded-2xl transition-all duration-300 hoverable group"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                                        transition={{ delay: catIdx * 0.15 + i * 0.06, duration: 0.4, type: 'spring' }}
                                        whileHover={{
                                            y: -8,
                                            boxShadow: `0 12px 40px ${skill.color}33`,
                                            borderColor: `${skill.color}66`,
                                            transition: { duration: 0.2 }
                                        }}>
                                        <span className="text-3xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
                                            style={{ color: skill.color }}>
                                            {skill.icon}
                                        </span>
                                        <span className="text-xs font-semibold text-txt text-center">{skill.name}</span>
                                        <div className="w-full h-[3px] rounded overflow-hidden" style={{ background: 'rgba(255,255,255,0.06)' }}>
                                            <motion.div className="h-full rounded opacity-70"
                                                style={{ background: skill.color }}
                                                initial={{ width: 0 }}
                                                animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                                                transition={{ delay: catIdx * 0.15 + i * 0.06 + 0.3, duration: 0.8, ease: 'easeOut' }}
                                            />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills
