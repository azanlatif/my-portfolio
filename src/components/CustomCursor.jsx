import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const CustomCursor = () => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
    const [isHovering, setIsHovering] = useState(false)

    useEffect(() => {
        const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY })
        const handleMouseOver = (e) => setIsHovering(!!e.target.closest('a, button, .hoverable'))
        window.addEventListener('mousemove', handleMouseMove)
        window.addEventListener('mouseover', handleMouseOver)
        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
            window.removeEventListener('mouseover', handleMouseOver)
        }
    }, [])

    return (
        <>
            <motion.div
                className="fixed top-0 left-0 w-2 h-2 bg-accent rounded-full pointer-events-none z-[99999] mix-blend-difference hidden md:block"
                animate={{ x: mousePos.x - 4, y: mousePos.y - 4, scale: isHovering ? 0 : 1 }}
                transition={{ type: 'spring', stiffness: 500, damping: 28, mass: 0.5 }}
            />
            <motion.div
                className="fixed top-0 left-0 w-10 h-10 rounded-full pointer-events-none z-[99998] opacity-50 hidden md:block"
                style={{ border: '1.5px solid #6c63ff' }}
                animate={{ x: mousePos.x - 20, y: mousePos.y - 20, scale: isHovering ? 1.8 : 1 }}
                transition={{ type: 'spring', stiffness: 250, damping: 20, mass: 0.8 }}
            />
        </>
    )
}

export default CustomCursor
