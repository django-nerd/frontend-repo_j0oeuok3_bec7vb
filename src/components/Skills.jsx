export default function Skills(){
  const skills = [
    { name:'React', level:90, colors:'from-cyan-500 to-sky-400' },
    { name:'Tailwind CSS', level:90, colors:'from-fuchsia-500 to-pink-500' },
    { name:'JavaScript', level:85, colors:'from-amber-400 to-orange-500' },
    { name:'Node & APIs', level:75, colors:'from-violet-500 to-purple-500' },
  ]
  return (
    <section id="skills" className="py-24">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold">Skills</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {skills.map((s)=> (
            <div key={s.name} className="p-5 rounded-2xl bg-white/5 backdrop-blur border border-white/10 shadow">
              <div className="flex justify-between text-sm font-semibold text-slate-300">
                <span>{s.name}</span><span>{s.level}%</span>
              </div>
              <div className="mt-3 h-3 w-full bg-white/5 rounded-full overflow-hidden">
                <div className={`h-full bg-gradient-to-r ${s.colors}`} style={{width:`${s.level}%`}} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
