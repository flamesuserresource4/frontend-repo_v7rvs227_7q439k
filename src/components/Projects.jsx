import { useState } from 'react'
import { motion } from 'framer-motion'

const projects = [
  {
    title: 'NeoDash',
    description: 'A realtime analytics dashboard with fluid motion and streaming charts.',
    stack: ['React', 'TypeScript', 'Framer Motion'],
    image: 'https://images.unsplash.com/photo-1526378722484-bd91ca387e72?q=80&w=1800&auto=format&fit=crop',
    demo: '#',
    code: '#'
  },
  {
    title: 'Muse AI',
    description: 'An AI-assisted sketch-to-UI tool that turns ideas into components.',
    stack: ['Next.js', 'Tailwind', 'OpenAI'],
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1800&auto=format&fit=crop',
    demo: '#',
    code: '#'
  },
  {
    title: 'Lumen',
    description: 'A minimalist blog engine with beautiful typography and dark mode.',
    stack: ['Astro', 'MDX', 'Vercel'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1800&auto=format&fit=crop',
    demo: '#',
    code: '#'
  },
]

function Card({ p }) {
  const [pos, setPos] = useState({ x: 0, y: 0 })

  const onMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    setPos({ x, y })
  }

  return (
    <motion.article
      onMouseMove={onMouseMove}
      whileHover={{ scale: 1.03 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5"
    >
      <div
        className="relative h-44 w-full overflow-hidden md:h-56"
        style={{
          transform: `translate3d(${pos.x * 12}px, ${pos.y * 12}px, 0)`,
          transition: 'transform 120ms ease-out'
        }}
      >
        <img src={p.image} alt="Project" className="h-full w-full object-cover opacity-90" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />
      </div>

      <div className="space-y-3 p-5">
        <h3 className="text-lg font-semibold text-white">{p.title}</h3>
        <p className="text-sm leading-relaxed text-[#A7A7A7]">{p.description}</p>
        <div className="flex flex-wrap gap-2">
          {p.stack.map((t) => (
            <span key={t} className="rounded-full bg-white/5 px-3 py-1 text-xs text-[#C6C6C6]">{t}</span>
          ))}
        </div>

        <div className="mt-3 flex items-center gap-4">
          <a href={p.demo} className="text-sm font-semibold text-cyan-400 hover:underline">Live Demo</a>
          <a href={p.code} className="text-sm font-semibold text-cyan-400/80 hover:underline">GitHub</a>
        </div>

        <motion.a
          href={p.demo}
          className="invisible absolute right-4 top-4 rounded-full bg-cyan-400 px-3 py-1 text-xs font-bold text-[#0A0A0A] shadow-md group-hover:visible"
          initial={{ opacity: 0, y: -6 }}
          whileHover={{ scale: 1.05 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          View Case Study
        </motion.a>
      </div>
    </motion.article>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="w-full bg-[#0A0A0A] py-24 text-[#EAEAEA]">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-3xl font-bold tracking-tight md:text-4xl"
        >
          Selected Projects
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1 } }
          }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((p) => (
            <motion.div
              key={p.title}
              variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <Card p={p} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
