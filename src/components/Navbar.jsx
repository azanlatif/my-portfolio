import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenuAlt3, HiX } from 'react-icons/hi'

const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
]

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false)
    const [mobileOpen, setMobileOpen] = useState(false)
    const [activeSection, setActiveSection] = useState('home')

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 50)
            const sections = navLinks.map(l => l.href.replace('#', ''))
            for (let i = sections.length - 1; i >= 0; i--) {
                const el = document.getElementById(sections[i])
                if (el && el.getBoundingClientRect().top <= 200) {
                    setActiveSection(sections[i])
                    break
                }
            }
        }
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <motion.nav
            className="fixed top-0 left-0 right-0 z-[1000] transition-all duration-300"
            style={{
                padding: scrolled ? '12px 0' : '20px 0',
                background: scrolled ? 'rgba(10,10,15,0.85)' : 'transparent',
                backdropFilter: scrolled ? 'blur(20px)' : 'none',
                borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
            }}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
        >
            <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <motion.a href="#home" className="font-mono text-xl font-bold flex items-center gap-0.5 hoverable"
                    whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <span className="gradient-text">&lt;</span>
                    <span className="text-txt">Azan</span>
                    <span className="gradient-text">/&gt;</span>
                </motion.a>

                {/* Desktop links */}
                <div className="hidden md:flex items-center gap-2">
                    {navLinks.map((link) => (
                        <motion.a key={link.name} href={link.href}
                            className={`relative px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-200 hoverable ${activeSection === link.href.replace('#', '') ? 'text-txt' : 'text-txt-dim hover:text-txt'
                                }`}
                            whileHover={{ y: -2 }} transition={{ type: 'spring', stiffness: 300 }}>
                            {link.name}
                            {activeSection === link.href.replace('#', '') && (
                                <motion.span className="absolute bottom-0 left-4 right-4 h-0.5 gradient-bg rounded-full"
                                    layoutId="navIndicator" transition={{ type: 'spring', stiffness: 350, damping: 30 }} />
                            )}
                        </motion.a>
                    ))}
                </div>

                {/* CTA */}
                <motion.a href="#contact"
                    className="hidden md:inline-flex px-6 py-2.5 text-sm font-semibold text-white gradient-bg rounded-lg hoverable"
                    style={{ boxShadow: '0 2px 12px rgba(108,99,255,0.2)' }}
                    whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    Let's Talk
                </motion.a>

                {/* Hamburger */}
                <button className="md:hidden text-txt relative z-[1001] hoverable"
                    onClick={() => setMobileOpen(!mobileOpen)}>
                    {mobileOpen ? <HiX size={26} /> : <HiMenuAlt3 size={26} />}
                </button>
            </div>

            {/* Mobile overlay */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        className="md:hidden fixed inset-0 z-[999] flex"
                        style={{ background: 'rgba(10,10,15,0.96)', backdropFilter: 'blur(30px)' }}
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}>
                        <div className="flex flex-col items-center justify-center h-full w-full gap-2 px-6 py-20">
                            {navLinks.map((link, i) => (
                                <motion.a key={link.name} href={link.href}
                                    className="flex items-center gap-3 px-8 py-4 text-2xl font-bold text-txt-dim hover:text-txt transition-all duration-300 hoverable"
                                    initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
                                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ delay: 0.1 + i * 0.07, duration: 0.4, ease: 'easeOut' }}
                                    onClick={() => setMobileOpen(false)}>
                                    <span className="font-mono text-xs font-medium text-accent opacity-70">0{i + 1}.</span>
                                    {link.name}
                                </motion.a>
                            ))}
                            <motion.a href="#contact"
                                className="mt-6 px-10 py-3.5 text-base font-semibold text-white gradient-bg rounded-xl hoverable"
                                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5, duration: 0.4 }}
                                onClick={() => setMobileOpen(false)}>
                                Let's Talk
                            </motion.a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    )
}

export default Navbar
