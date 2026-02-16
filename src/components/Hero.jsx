import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from 'react-icons/fi'
import { SiLeetcode } from 'react-icons/si'
import profileImg from '../assets/image.jpeg'

const roles = ['MERN Stack Developer', 'Software Engineer', 'React Specialist', 'Full Stack Developer']

const Hero = () => {
    const [roleIndex, setRoleIndex] = useState(0)
    const [displayText, setDisplayText] = useState('')
    const [isDeleting, setIsDeleting] = useState(false)

    useEffect(() => {
        const currentRole = roles[roleIndex]
        let timeout
        if (!isDeleting && displayText === currentRole) {
            timeout = setTimeout(() => setIsDeleting(true), 2000)
        } else if (isDeleting && displayText === '') {
            setIsDeleting(false)
            setRoleIndex((prev) => (prev + 1) % roles.length)
        } else {
            timeout = setTimeout(() => {
                setDisplayText(isDeleting
                    ? currentRole.substring(0, displayText.length - 1)
                    : currentRole.substring(0, displayText.length + 1)
                )
            }, isDeleting ? 40 : 80)
        }
        return () => clearTimeout(timeout)
    }, [displayText, isDeleting, roleIndex])

    const container = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.3 } }
    }
    const item = {
        hidden: { opacity: 0, y: 40, filter: 'blur(10px)' },
        visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } }
    }

    return (
        <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 z-0" style={{
                background: 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(108,99,255,0.15), transparent 70%), radial-gradient(ellipse 60% 40% at 80% 60%, rgba(0,212,170,0.08), transparent 60%)'
            }} />
            <div className="absolute inset-0 z-0 opacity-30" style={{
                backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
                backgroundSize: '60px 60px',
                maskImage: 'radial-gradient(ellipse 70% 60% at 50% 50%, black 30%, transparent 70%)',
                WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 50%, black 30%, transparent 70%)'
            }} />

            <div className="relative z-[2] max-w-[1200px] mx-auto px-6 pt-28 md:pt-32 pb-16 w-full">
                <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">

                    {/* Left — Text */}
                    <motion.div className="flex-1" variants={container} initial="hidden" animate="visible">
                        {/* Badge */}
                        <motion.div variants={item}
                            className="glass inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-medium text-txt-dim mb-8">
                            <span className="w-2 h-2 rounded-full bg-mint" style={{ boxShadow: '0 0 12px rgba(0,212,170,0.6)', animation: 'pulse-dot 2s infinite' }} />
                            Available for opportunities
                        </motion.div>

                        {/* Title */}
                        <motion.h1 variants={item}
                            className="text-5xl md:text-7xl lg:text-7xl font-black leading-[1.1] mb-5 tracking-tighter">
                            Hi, I'm{' '}
                            <span className="gradient-text">Azan Latif</span>
                        </motion.h1>

                        {/* Typing role */}
                        <motion.div variants={item} className="font-mono text-lg md:text-xl text-mint mb-7 flex items-center">
                            <span className="text-txt-mute mr-2">{'> '}</span>
                            <span>{displayText}</span>
                            <span className="text-accent ml-0.5" style={{ animation: 'blink 1s step-end infinite' }}>|</span>
                        </motion.div>

                        {/* Description */}
                        <motion.p variants={item} className="text-base md:text-lg text-txt-dim max-w-[560px] leading-relaxed mb-10">
                            Passionate Software Engineering student crafting modern, scalable web
                            applications with the MERN stack. I turn ideas into elegant digital
                            experiences with clean code and pixel-perfect design.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 mb-12">
                            <motion.a href="#projects"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold text-white gradient-bg rounded-xl hoverable"
                                whileHover={{ scale: 1.05, boxShadow: '0 8px 30px rgba(108,99,255,0.4)' }}
                                whileTap={{ scale: 0.95 }}>
                                View My Work
                                <FiArrowDown style={{ animation: 'bounce-down 2s infinite' }} />
                            </motion.a>
                            <motion.a href="#contact"
                                className="glass inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold text-txt rounded-xl transition-all duration-200 hover:border-accent hoverable"
                                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                Get In Touch
                            </motion.a>
                        </motion.div>

                        {/* Social links */}
                        <motion.div variants={item} className="flex gap-3">
                            {[
                                { icon: <FiGithub />, href: 'https://github.com/azanlatif', label: 'GitHub' },
                                { icon: <FiLinkedin />, href: 'https://www.linkedin.com/in/azanlatif/', label: 'LinkedIn' },
                                { icon: <SiLeetcode />, href: 'https://leetcode.com/', label: 'LeetCode' },
                                { icon: <FiMail />, href: 'mailto:azanlatif01@gmail.com', label: 'Email' },
                            ].map((s) => (
                                <motion.a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                                    className="glass flex items-center justify-center w-11 h-11 rounded-xl text-txt-dim text-lg hover:text-accent hover:border-accent transition-all duration-200 hoverable"
                                    whileHover={{ y: -4, scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                                    {s.icon}
                                </motion.a>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Right — Blob Profile Image */}
                    <motion.div className="relative flex-shrink-0"
                        initial={{ opacity: 0, scale: 0.8, x: 60 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ delay: 0.6, duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}>

                        {/* Glow behind blob */}
                        <div className="absolute inset-0 rounded-full opacity-30 blur-3xl scale-110"
                            style={{ background: 'linear-gradient(135deg, #6c63ff, #00d4aa)' }} />

                        {/* Rotating ring */}
                        <motion.div
                            className="absolute -inset-4 rounded-full opacity-20"
                            style={{
                                border: '2px dashed #6c63ff',
                                borderRadius: '50%',
                            }}
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                        />

                        {/* Blob image container */}
                        <div className="relative w-[280px] h-[280px] md:w-[340px] md:h-[340px] lg:w-[380px] lg:h-[380px]">
                            <div className="w-full h-full overflow-hidden"
                                style={{
                                    borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
                                    border: '3px solid rgba(108,99,255,0.3)',
                                    boxShadow: '0 0 40px rgba(108,99,255,0.15), 0 0 80px rgba(0,212,170,0.1), inset 0 0 30px rgba(0,0,0,0.3)',
                                    animation: 'blob-morph 8s ease-in-out infinite',
                                }}>
                                <img
                                    src={profileImg}
                                    alt="Azan Latif"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Accent dots */}
                            <motion.div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-accent"
                                style={{ boxShadow: '0 0 20px rgba(108,99,255,0.5)' }}
                                animate={{ y: [0, -8, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }} />
                            <motion.div className="absolute -bottom-3 -left-3 w-3 h-3 rounded-full bg-mint"
                                style={{ boxShadow: '0 0 20px rgba(0,212,170,0.5)' }}
                                animate={{ y: [0, 8, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }} />
                            <motion.div className="absolute top-1/2 -right-5 w-2 h-2 rounded-full bg-pink"
                                style={{ boxShadow: '0 0 16px rgba(255,107,157,0.5)' }}
                                animate={{ x: [0, 6, 0] }}
                                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }} />
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-txt-mute text-xl z-[2]"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}>
                <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                    <FiArrowDown />
                </motion.div>
            </motion.div>
        </section>
    )
}

export default Hero
