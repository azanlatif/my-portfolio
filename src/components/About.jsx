import { motion, useAnimationControls } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiCode, FiLayers, FiCpu, FiBookOpen } from 'react-icons/fi'
import { useEffect, useState, useMemo } from 'react'

const stats = [
    { number: 10, suffix: '+', label: 'Projects Completed' },
    { number: 5, suffix: '+', label: 'Technologies' },
    { number: 2, suffix: '+', label: 'Years Learning' },
    { number: 100, suffix: '%', label: 'Passion' },
]

const highlights = [
    { icon: <FiCode />, title: 'Clean Code', desc: 'Writing maintainable, scalable code with best practices', color: '#6c63ff' },
    { icon: <FiLayers />, title: 'Full Stack', desc: 'End-to-end development from database to deployment', color: '#00d4aa' },
    { icon: <FiCpu />, title: 'Problem Solver', desc: 'Analytical thinker with strong DSA fundamentals', color: '#ff6b9d' },
    { icon: <FiBookOpen />, title: 'Continuous Learner', desc: 'Always exploring new technologies and frameworks', color: '#6c63ff' },
]

/* ── Animated counter ── */
const AnimatedCounter = ({ target, suffix, inView }) => {
    const [count, setCount] = useState(0)
    useEffect(() => {
        if (!inView) return
        let start = 0
        const duration = 1800
        const step = Math.ceil(target / (duration / 30))
        const timer = setInterval(() => {
            start += step
            if (start >= target) { setCount(target); clearInterval(timer) }
            else setCount(start)
        }, 30)
        return () => clearInterval(timer)
    }, [inView, target])
    return <>{count}{suffix}</>
}

/* ── Steam particle for coffee ── */
const SteamParticle = ({ delay }) => (
    <motion.div
        className="absolute rounded-full bg-white/20"
        style={{ width: Math.random() * 4 + 2, height: Math.random() * 4 + 2 }}
        initial={{ opacity: 0, y: 0, x: 0 }}
        animate={{
            opacity: [0, 0.6, 0],
            y: [0, -28, -48],
            x: [0, (Math.random() - 0.5) * 16, (Math.random() - 0.5) * 24],
        }}
        transition={{
            duration: 2,
            delay,
            repeat: Infinity,
            ease: 'easeOut',
        }}
    />
)

/* ── Title letter animation ── */
const titleText = 'Turning Coffee Into Code'
const letterVariants = {
    hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: { delay: 0.5 + i * 0.04, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
    }),
}

/* ── Floating particle for background ── */
const FloatingParticle = ({ size, x, y, duration, color }) => (
    <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{ width: size, height: size, left: x, top: y, background: color }}
        animate={{ y: [0, -20, 0], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration, repeat: Infinity, ease: 'easeInOut' }}
    />
)

const About = () => {
    const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true })

    const particles = useMemo(() =>
        Array.from({ length: 6 }, (_, i) => ({
            size: Math.random() * 4 + 2,
            x: `${Math.random() * 100}%`,
            y: `${Math.random() * 100}%`,
            duration: 3 + Math.random() * 3,
            color: i % 2 === 0 ? 'rgba(108,99,255,0.25)' : 'rgba(0,212,170,0.25)',
        })), []
    )

    const containerVariants = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
    }
    const fadeUp = {
        hidden: { opacity: 0, y: 30, filter: 'blur(6px)' },
        visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
    }

    return (
        <section id="about" className="py-28 relative overflow-hidden" ref={ref}>
            <div className="glow-orb w-[400px] h-[400px] bg-mint -bottom-24 -right-36" />

            {/* Floating background particles */}
            {particles.map((p, i) => (
                <FloatingParticle key={i} {...p} />
            ))}

            <div className="max-w-[1200px] mx-auto px-6">

                {/* ── Section header with animated title ── */}
                <motion.div initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>
                    <p className="section-label">About Me</p>

                    <h2 className="section-title flex flex-wrap items-center gap-x-3">
                        {titleText.split('').map((char, i) => (
                            <motion.span
                                key={i}
                                custom={i}
                                variants={letterVariants}
                                initial="hidden"
                                animate={inView ? 'visible' : 'hidden'}
                                style={{ display: char === ' ' ? 'inline' : 'inline-block', whiteSpace: 'pre' }}
                            >
                                {char}
                            </motion.span>
                        ))}

                        {/* Animated coffee emoji */}
                        <motion.span
                            className="relative inline-block ml-1"
                            initial={{ opacity: 0, scale: 0, rotate: -30 }}
                            animate={inView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
                            transition={{ delay: 1.5, duration: 0.6, type: 'spring', stiffness: 200 }}
                        >
                            <motion.span
                                className="text-3xl md:text-4xl inline-block"
                                style={{ WebkitTextFillColor: 'initial' }}
                                animate={{ rotate: [0, -8, 8, -4, 0] }}
                                transition={{ delay: 2.2, duration: 0.6, repeat: Infinity, repeatDelay: 4 }}
                            >
                                ☕
                            </motion.span>
                            {/* Steam */}
                            <span className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-10">
                                {[0, 0.4, 0.8, 1.2, 1.6].map((d, i) => (
                                    <SteamParticle key={i} delay={d + 2} />
                                ))}
                            </span>
                        </motion.span>
                    </h2>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mt-12 items-start"
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                >
                    {/* Left - text & stats */}
                    <motion.div variants={fadeUp}>
                        <motion.p
                            className="text-base text-txt-dim leading-relaxed mb-5"
                            initial={{ opacity: 0, x: -30 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.7, delay: 0.3 }}
                        >
                            I'm a <strong className="text-txt font-semibold">Software Engineering student</strong> with a deep passion for building
                            web applications that make a difference. Specializing in the <strong className="text-txt font-semibold">MERN stack</strong>,
                            I love creating seamless user experiences backed by robust server-side architecture.
                        </motion.p>
                        <motion.p
                            className="text-base text-txt-dim leading-relaxed mb-5"
                            initial={{ opacity: 0, x: -30 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.7, delay: 0.5 }}
                        >
                            My journey in software development started with curiosity and has evolved into a
                            commitment to crafting elegant solutions. I believe in writing clean, efficient code
                            and staying up-to-date with the latest technologies.
                        </motion.p>
                        <motion.p
                            className="text-base text-txt-dim leading-relaxed mb-5"
                            initial={{ opacity: 0, x: -30 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.7, delay: 0.7 }}
                        >
                            When I'm not coding, you'll find me solving problems on LeetCode, exploring open-source
                            projects, or learning about system design and cloud technologies.
                        </motion.p>

                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-9">
                            {stats.map((stat, i) => (
                                <motion.div key={stat.label}
                                    className="glass text-center py-5 px-2 rounded-xl group"
                                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                                    animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
                                    transition={{ delay: 0.8 + i * 0.12, type: 'spring', stiffness: 200 }}
                                    whileHover={{ scale: 1.08, transition: { duration: 0.2 } }}
                                >
                                    <span className="block text-2xl font-extrabold gradient-text mb-1">
                                        <AnimatedCounter target={stat.number} suffix={stat.suffix} inView={inView} />
                                    </span>
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
                                initial={{ opacity: 0, x: 60, rotateY: 15 }}
                                animate={inView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
                                transition={{ delay: 0.5 + i * 0.15, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                                whileHover={{ y: -6, scale: 1.02, transition: { duration: 0.25 } }}
                            >
                                <motion.div
                                    className="shrink-0 w-11 h-11 flex items-center justify-center rounded-xl text-xl"
                                    style={{ background: `${item.color}15`, color: item.color }}
                                    whileHover={{
                                        boxShadow: `0 0 20px ${item.color}40`,
                                        scale: 1.15,
                                        rotate: 5,
                                    }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {item.icon}
                                </motion.div>
                                <div>
                                    <h4 className="text-sm font-semibold text-txt mb-1">{item.title}</h4>
                                    <p className="text-sm text-txt-mute leading-relaxed">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default About
