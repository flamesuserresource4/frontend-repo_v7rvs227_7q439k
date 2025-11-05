import { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] })

  // Parallax depths: back moves slowest, front moves fastest
  const backY = useTransform(scrollYProgress, [0, 1], [0, 80])
  const midY = useTransform(scrollYProgress, [0, 1], [0, 140])
  const frontY = useTransform(scrollYProgress, [0, 1], [0, 220])

  const backYS = useSpring(backY, { stiffness: 90, damping: 30 })
  const midYS = useSpring(midY, { stiffness: 90, damping: 30 })
  const frontYS = useSpring(frontY, { stiffness: 90, damping: 30 })

  const title = "Hi, I'm Alex."
  const tagline = 'A creative developer building at the intersection of code and design.'

  return (
    <section id="home" ref={containerRef} className="relative min-h-[100svh] w-full overflow-hidden bg-[#0A0A0A] text-[#EAEAEA]">
      {/* Background gradient accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute -right-24 top-1/3 h-72 w-72 rounded-full bg-fuchsia-500/10 blur-3xl" />
      </div>

      {/* Back layer: subtle gradient mesh moving slowest */}
      <motion.div style={{ y: backYS }} className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_20%_20%,#171717_0%,#0A0A0A_60%)] opacity-80" />
      </motion.div>

      {/* Mid layer: Spline scene */}
      <motion.div style={{ y: midYS }} className="relative h-[65vh] md:h-[75vh] w-full">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        {/* Soft gradient overlay to blend into page without blocking interaction */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0A0A0A] to-transparent" />
      </motion.div>

      {/* Front layer: Heading + CTA moving fastest */}
      <motion.div style={{ y: frontYS }} className="relative z-10 mx-auto -mt-10 max-w-5xl px-6 md:-mt-20">
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.05 }
            }
          }}
          className="mb-4 text-4xl font-extrabold tracking-tight md:text-6xl"
        >
          {title.split('').map((ch, i) => (
            <motion.span key={i} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
              {ch}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6, ease: 'easeOut' }}
          className="max-w-2xl text-lg leading-relaxed text-[#A7A7A7] md:text-xl"
        >
          {tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6, ease: 'easeOut' }}
          className="mt-8 flex flex-wrap items-center gap-4"
        >
          <a href="#projects" className={`group inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-white/5 px-6 py-3 text-sm font-semibold text-[#EAEAEA] transition-colors hover:bg-white/10`}>
            <span className={`h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_20px_theme(colors.cyan.400)]`} />
            View Projects
          </a>
          <a href="#contact" className="inline-flex items-center rounded-full bg-[#EAEAEA] px-6 py-3 text-sm font-bold text-[#0A0A0A] transition-transform hover:scale-[1.03]">
            Get in Touch
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
