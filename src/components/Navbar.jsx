import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setOpen(false)
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? 'backdrop-blur bg-slate-900/70 shadow-sm border-b border-white/10' : 'bg-transparent'}`}>
      <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-fuchsia-500 via-rose-500 to-amber-500 animate-pulse" />
          <span className="font-bold text-lg tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-400">
            Legas Yasin
          </span>
        </div>
        <div className="hidden md:flex items-center gap-6">
          {sections.map((s) => (
            <button key={s.id} onClick={() => scrollTo(s.id)} className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
              {s.label}
            </button>
          ))}
        </div>
        <button className="md:hidden p-2 rounded-lg bg-slate-800/80 border border-white/10" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>
      {open && (
        <div className="md:hidden border-t border-white/10 bg-slate-900/90 backdrop-blur">
          <div className="max-w-6xl mx-auto px-4 py-3 grid gap-2">
            {sections.map((s) => (
              <button key={s.id} onClick={() => scrollTo(s.id)} className="text-left py-2 px-3 rounded-lg hover:bg-white/5 text-slate-200">
                {s.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
