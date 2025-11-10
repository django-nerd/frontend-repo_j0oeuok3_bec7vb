export default function Projects(){
  const projects = [
    { title:'ColorSplash Landing', desc:'Vibrant landing page with animated gradients and responsive design.', link:'#', tags:['React','Tailwind'], image:'/images/project-1.jpg' },
    { title:'Portfolio Grid', desc:'Masonry grid of projects with smooth hover effects and modals.', link:'#', tags:['React','Framer Motion'], image:'/images/project-2.jpg' },
    { title:'API Dashboard', desc:'Clean dashboard consuming REST APIs with reusable components.', link:'#', tags:['React','API'], image:'/images/project-3.jpg' },
  ]
  const onImgError = (e) => { e.currentTarget.src = '/images/placeholder.svg' }
  return (
    <section id="projects" className="relative py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_80%,rgba(59,130,246,.08),transparent_40%),radial-gradient(circle_at_85%_20%,rgba(168,85,247,.08),transparent_40%)]"/>
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold">Projects</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {projects.map((p)=> (
            <a key={p.title} href={p.link} className="group p-5 rounded-2xl bg-white/5 backdrop-blur border border-white/10 shadow hover:shadow-lg transition block">
              <div className="aspect-video rounded-xl overflow-hidden bg-white/5 border border-white/10">
                <img src={p.image} alt={p.title} className="h-full w-full object-cover group-hover:scale-105 transition" onError={onImgError} />
              </div>
              <h3 className="mt-4 font-bold text-lg text-slate-100 group-hover:underline decoration-wavy decoration-fuchsia-400">{p.title}</h3>
              <p className="text-slate-300 text-sm mt-1">{p.desc}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map(t => (
                  <span key={t} className="text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10 text-slate-200">{t}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
