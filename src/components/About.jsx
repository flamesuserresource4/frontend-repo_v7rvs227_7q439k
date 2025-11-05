import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative w-full bg-[#0A0A0A] py-24 text-[#EAEAEA]">
      <div className="mx-auto max-w-5xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-6 text-3xl font-bold tracking-tight md:text-4xl"
        >
          About
        </motion.h2>

        <div className="grid gap-10 md:grid-cols-12">
          <motion.div
            className="md:col-span-7 space-y-5 text-[#A7A7A7]"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <p>
              I craft engaging, performant web experiences that blend engineering precision with thoughtful design. My work focuses on translating complex ideas into intuitive interfaces.
            </p>
            <p>
              I thrive across the stack but specialize in front-end architecture, motion design, and design systems. I value simplicity, accessibility, and details that make products feel alive.
            </p>
            <p>
              Outside of code, I explore generative art and 3D to push visual storytelling on the web.
            </p>
          </motion.div>

          <motion.div
            className="md:col-span-5"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <h3 className="mb-4 text-lg font-semibold text-white">Capabilities</h3>
              <ul className="grid grid-cols-2 gap-3 text-sm text-[#C6C6C6]">
                <li className="rounded-md bg-white/5 px-3 py-2">React</li>
                <li className="rounded-md bg-white/5 px-3 py-2">TypeScript</li>
                <li className="rounded-md bg-white/5 px-3 py-2">Framer Motion</li>
                <li className="rounded-md bg-white/5 px-3 py-2">Node.js</li>
                <li className="rounded-md bg-white/5 px-3 py-2">Tailwind CSS</li>
                <li className="rounded-md bg-white/5 px-3 py-2">Figma</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
