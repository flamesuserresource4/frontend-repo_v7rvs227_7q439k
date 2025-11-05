import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | loading | success

  const onSubmit = (e) => {
    e.preventDefault()
    setStatus('loading')
    setTimeout(() => setStatus('success'), 1200)
  }

  return (
    <section id="contact" className="w-full bg-[#0A0A0A] py-24 text-[#EAEAEA]">
      <div className="mx-auto max-w-3xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-8 text-3xl font-bold tracking-tight md:text-4xl"
        >
          Contact
        </motion.h2>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="space-y-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm text-[#C6C6C6]">Name</label>
              <input required placeholder="Your name" className="w-full rounded-lg border border-white/10 bg-[#111] px-4 py-3 text-sm outline-none ring-cyan-400/30 focus:ring" />
            </div>
            <div>
              <label className="mb-2 block text-sm text-[#C6C6C6]">Email</label>
              <input type="email" required placeholder="you@example.com" className="w-full rounded-lg border border-white/10 bg-[#111] px-4 py-3 text-sm outline-none ring-cyan-400/30 focus:ring" />
            </div>
          </div>
          <div>
            <label className="mb-2 block text-sm text-[#C6C6C6]">Message</label>
            <textarea required rows={5} placeholder="Let's build something great together." className="w-full resize-none rounded-lg border border-white/10 bg-[#111] px-4 py-3 text-sm outline-none ring-cyan-400/30 focus:ring" />
          </div>

          <motion.button
            type="submit"
            disabled={status !== 'idle'}
            className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3 font-bold text-[#0A0A0A] disabled:cursor-not-allowed disabled:opacity-70"
            whileHover={{ scale: status === 'idle' ? 1.03 : 1 }}
            whileTap={{ scale: status === 'idle' ? 0.98 : 1 }}
            animate={status === 'loading' ? { scale: [1, 1.05, 1], transition: { repeat: Infinity, duration: 1 } } : {}}
          >
            {status === 'idle' && 'Send'}
            {status === 'loading' && (
              <span className="inline-flex items-center gap-2">
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-[#0A0A0A]/20 border-t-[#0A0A0A]" />
                Sending
              </span>
            )}
            {status === 'success' && (
              <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="inline-flex items-center gap-2">
                ✅ Sent!
              </motion.span>
            )}
          </motion.button>
        </motion.form>
      </div>
    </section>
  )
}
