import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi'

const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <motion.footer className="pt-20 pb-8 border-t border-border relative z-[1]"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Brand */}
                    <div>
                        <a href="#home" className="font-mono text-lg font-bold inline-flex items-center gap-0.5 mb-3 hoverable">
                            <span className="gradient-text">&lt;</span>
                            <span className="text-txt">Azan</span>
                            <span className="gradient-text">/&gt;</span>
                        </a>
                        <p className="text-sm text-txt-mute leading-relaxed max-w-[280px]">
                            Building digital experiences with passion and precision.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-sm font-semibold text-txt mb-4">Quick Links</h4>
                        <div className="flex flex-col gap-2.5">
                            {['About', 'Skills', 'Projects', 'Contact'].map(link => (
                                <a key={link} href={`#${link.toLowerCase()}`}
                                    className="text-sm text-txt-mute hover:text-accent transition-colors duration-200 hoverable">
                                    {link}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Social */}
                    <div>
                        <h4 className="text-sm font-semibold text-txt mb-4">Connect</h4>
                        <div className="flex gap-2.5">
                            {[
                                { icon: <FiGithub />, href: 'https://github.com/azanlatif' },
                                { icon: <FiLinkedin />, href: 'https://www.linkedin.com/in/azanlatif/' },
                                { icon: <FiMail />, href: 'mailto:azanlatif01@gmail.com' },
                            ].map((s, i) => (
                                <motion.a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                                    className="glass w-10 h-10 flex items-center justify-center rounded-xl text-txt-dim text-base hover:text-accent hover:border-accent transition-all duration-200 hoverable"
                                    whileHover={{ y: -4, scale: 1.1 }}>
                                    {s.icon}
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="pt-6 border-t border-border text-center">
                    <p className="text-xs text-txt-mute flex items-center justify-center gap-1.5">
                        © {currentYear} Azan Latif. Made with
                        <FiHeart className="text-pink text-sm" style={{ animation: 'heartbeat 1.5s ease infinite' }} />
                        and lots of coffee.
                    </p>
                </div>
            </div>
        </motion.footer>
    )
}

export default Footer
