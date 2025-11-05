import { motion, useScroll, useSpring } from 'framer-motion'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

function ScrollProgressBar() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 20 })
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed left-0 top-0 z-50 h-1 w-full origin-left bg-cyan-400"
    />
  )
}

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#home" className="text-sm font-bold tracking-wider text-[#EAEAEA]">ALEX • DEV</a>
        <div className="hidden gap-6 md:flex">
          <a href="#about" className="text-sm text-[#C6C6C6] hover:text-white">About</a>
          <a href="#projects" className="text-sm text-[#C6C6C6] hover:text-white">Projects</a>
          <a href="#contact" className="text-sm text-[#C6C6C6] hover:text-white">Contact</a>
        </div>
      </nav>
    </header>
  )
}

function Footer() {
  return (
    <footer className="w-full bg-[#0A0A0A] py-16 text-[#888888]">
      <div className="mx-auto max-w-6xl px-6 text-sm">© {new Date().getFullYear()} Alex — Crafted with React & Framer Motion</div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen scroll-smooth bg-[#0A0A0A]">
      <ScrollProgressBar />
      <Header />
      <main className="w-full">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
