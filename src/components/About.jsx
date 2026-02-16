import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiCode, FiLayers, FiCpu, FiBookOpen } from 'react-icons/fi'

const stats = [
    { number: '10+', label: 'Projects Completed' },
    { number: '5+', label: 'Technologies' },
    { number: '2+', label: 'Years Learning' },
    { number: '100%', label: 'Passion' },
]

const highlights = [
    { icon: <FiCode />, title: 'Clean Code', desc: 'Writing maintainable, scalable code with best practices' },
    { icon: <FiLayers />, title: 'Full Stack', desc: 'End-to-end development from database to deployment' },
    { icon: <FiCpu />, title: 'Problem Solver', desc: 'Analytical thinker with strong DSA fundamentals' },
    { icon: <FiBookOpen />, title: 'Continuous Learner', desc: 'Always exploring new technologies and frameworks' },
]

const About = () => {
    const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true })

    return (
        <section id="about" className="py-28 relative overflow-hidden" ref={ref}>
            <div className="glow-orb w-[400px] h-[400px] bg-mint -bottom-24 -right-36" />
            <div className="max-w-[1200px] mx-auto px-6">

                <motion.div initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>
                    <p className="section-label">About Me</p>
                    <h2 className="section-title">Turning Coffee Into Code</h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mt-12 items-start">
                    {/* Left - text & stats */}
                    <motion.div initial={{ opacity: 0, x: -40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.2 }}>
                        <p className="text-base text-txt-dim leading-relaxed mb-5">
                            I'm a <strong className="text-txt font-semibold">Software Engineering student</strong> with a deep passion for building
                            web applications that make a difference. Specializing in the <strong className="text-txt font-semibold">MERN stack</strong>,
                            I love creating seamless user experiences backed by robust server-side architecture.
                        </p>
                        <p className="text-base text-txt-dim leading-relaxed mb-5">
                            My journey in software development started with curiosity and has evolved into a
                            commitment to crafting elegant solutions. I believe in writing clean, efficient code
                            and staying up-to-date with the latest technologies.
                        </p>
                        <p className="text-base text-txt-dim leading-relaxed mb-5">
                            When I'm not coding, you'll find me solving problems on LeetCode, exploring open-source
                            projects, or learning about system design and cloud technologies.
                        </p>

                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-9">
                            {stats.map((stat, i) => (
                                <motion.div key={stat.label}
                                    className="glass text-center py-5 px-2 rounded-xl"
                                    initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ delay: 0.4 + i * 0.1 }}>
                                    <span className="block text-2xl font-extrabold gradient-text mb-1">{stat.number}</span>
                                    <span className="text-[0.72rem] text-txt-mute font-medium">{stat.label}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right - highlight cards */}
                    <div className="flex flex-col gap-4">
                        {highlights.map((item, i) => (
                            <motion.div key={item.title}
                                className="glass glass-hover flex items-start gap-4 p-6 rounded-2xl transition-all duration-300 hoverable"
                                initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.3 + i * 0.12, duration: 0.6 }}
                                whileHover={{ y: -5, transition: { duration: 0.2 } }}>
                                <div className="shrink-0 w-11 h-11 flex items-center justify-center rounded-xl text-accent text-xl"
                                    style={{ background: 'rgba(108,99,255,0.1)' }}>
                                    {item.icon}
                                </div>
                                <div>
                                    <h4 className="text-sm font-semibold text-txt mb-1">{item.title}</h4>
                                    <p className="text-sm text-txt-mute leading-relaxed">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
