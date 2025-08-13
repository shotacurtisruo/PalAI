import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const FloatingElements = () => {
  const [particles, setParticles] = useState<Array<{
    id: number
    x: number
    y: number
    size: number
    duration: number
    delay: number
  }>>([])

  useEffect(() => {
    const generateParticles = () => {
      const newParticles = Array.from({ length: 15 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 2,
        duration: Math.random() * 10 + 10,
        delay: Math.random() * 5,
      }))
      setParticles(newParticles)
    }

    generateParticles()
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Background Flow Lines */}
      <div className="absolute inset-0">
        {Array.from({ length: 5 }, (_, i) => (
          <motion.div
            key={`flow-${i}`}
            className="absolute h-px bg-gradient-to-r from-transparent via-golden-400/20 to-transparent"
            style={{
              top: `${20 + i * 15}%`,
              left: '-100%',
              width: '200%',
            }}
            animate={{
              x: ['0%', '100%'],
            }}
            transition={{
              duration: 20 + i * 5,
              repeat: Infinity,
              ease: 'linear',
              delay: i * 2,
            }}
          />
        ))}
      </div>

      {/* Floating Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-golden-400 rounded-full opacity-60"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 50 - 25, 0],
            opacity: [0.6, 0.2, 0.6],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: particle.delay,
          }}
        />
      ))}

      {/* Golden Orbs */}
      {Array.from({ length: 3 }, (_, i) => (
        <motion.div
          key={`orb-${i}`}
          className="absolute rounded-full bg-gradient-radial from-golden-400/20 to-transparent"
          style={{
            width: `${100 + i * 50}px`,
            height: `${100 + i * 50}px`,
            left: `${20 + i * 30}%`,
            top: `${30 + i * 20}%`,
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 15 + i * 5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 3,
          }}
        />
      ))}

      {/* Corner Accents */}
      <div className="absolute top-0 left-0 w-32 h-32">
        <motion.div
          className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-golden-400/30"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="absolute top-0 right-0 w-32 h-32">
        <motion.div
          className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-golden-400/30"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        />
      </div>

      <div className="absolute bottom-0 left-0 w-32 h-32">
        <motion.div
          className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-golden-400/30"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
        />
      </div>

      <div className="absolute bottom-0 right-0 w-32 h-32">
        <motion.div
          className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-golden-400/30"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 3,
          }}
        />
      </div>

      {/* Center Flow Effect */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-64 h-64 -translate-x-1/2 -translate-y-1/2"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        <div className="absolute inset-0 border border-golden-400/10 rounded-full" />
        <div className="absolute inset-8 border border-golden-400/5 rounded-full" />
        <div className="absolute inset-16 border border-golden-400/3 rounded-full" />
      </motion.div>
    </div>
  )
}

export default FloatingElements
