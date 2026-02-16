import { motion } from 'framer-motion'

const Loader = () => {
    return (
        <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-primary"
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
            <div className="flex flex-col items-center gap-8">
                <motion.div
                    className="font-mono text-5xl font-bold flex items-center gap-1"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
                >
                    <span className="gradient-text">&lt;</span>
                    <motion.span
                        className="text-txt"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                    >
                        AL
                    </motion.span>
                    <span className="gradient-text">/&gt;</span>
                </motion.div>
                <motion.div
                    className="h-[3px] rounded overflow-hidden bg-border"
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: 200 }}
                    transition={{ delay: 0.8, duration: 0.3 }}
                >
                    <motion.div
                        className="h-full gradient-bg rounded"
                        initial={{ width: '0%' }}
                        animate={{ width: '100%' }}
                        transition={{ delay: 1, duration: 1.2, ease: 'easeInOut' }}
                    />
                </motion.div>
            </div>
        </motion.div>
    )
}

export default Loader
