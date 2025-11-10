import { motion } from 'framer-motion'

export default function Hero() {
  const handleError = (e) => {
    e.currentTarget.src = '/images/placeholder.svg'
  }
  return (
    <section id="home" className="relative min-h-[90vh] overflow-hidden flex items-center">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-20 h-80 w-80 rounded-full bg-fuchsia-500/20 blur-3xl animate-pulse"/>
        <div className="absolute top-40 -right-10 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl animate-pulse [animation-delay:150ms]"/>
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-amber-400/10 blur-3xl animate-pulse [animation-delay:300ms]"/>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,.06),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(255,255,255,.04),transparent_40%)]"/>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-24 grid md:grid-cols-2 items-center gap-10">
        <div>
          <motion.h1 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:.6}} className="text-5xl md:text-6xl font-extrabold leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-400">Legas Yasin</span>
          </motion.h1>
          <motion.p initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:.1,duration:.6}} className="mt-4 text-slate-300 text-lg">
            Web Developer crafting colorful, modern, and high-performance web experiences.
          </motion.p>
          <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:.2,duration:.6}} className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="px-5 py-2.5 rounded-xl text-white font-semibold bg-gradient-to-r from-fuchsia-600 via-violet-600 to-cyan-600 shadow hover:opacity-90 transition">
              View Projects
            </a>
            <a href="#contact" className="px-5 py-2.5 rounded-xl font-semibold bg-white/5 border border-white/10 text-slate-100 hover:bg-white/10 transition">
              Contact Me
            </a>
          </motion.div>
          <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.3}} className="mt-6 text-slate-300">
            <p className="font-medium">Phone: <a href="tel:+251903677757" className="underline decoration-wavy decoration-fuchsia-400">+251 903 677 757</a></p>
          </motion.div>
        </div>
        <motion.div initial={{opacity:0,scale:.95}} animate={{opacity:1,scale:1}} transition={{duration:.6}} className="relative">
          <div className="aspect-square rounded-3xl p-1 bg-gradient-to-br from-fuchsia-600 via-rose-600 to-amber-500 shadow-2xl">
            <div className="h-full w-full rounded-2xl bg-slate-900/60 backdrop-blur p-6 grid grid-cols-3 gap-3">
              {[1,2,3,4,5,6,7,8,9].map((i)=> (
                <div key={i} className="h-20 rounded-xl overflow-hidden bg-white/5 border border-white/10">
                  <img src={`/images/sample-${i}.jpg`} alt={`Gallery ${i}`} className="h-full w-full object-cover" onError={handleError} />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
