export default function Contact(){
  return (
    <section id="contact" className="py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="rounded-3xl p-8 md:p-10 bg-gradient-to-br from-fuchsia-500 via-violet-500 to-sky-500 text-white shadow-xl">
          <h2 className="text-3xl md:text-4xl font-extrabold">Let’s work together</h2>
          <p className="mt-2 text-white/90 max-w-2xl">Have an idea or need a developer for your next project? Reach out and let’s build something amazing.</p>
          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            <a href="tel:+251903677757" className="px-5 py-3 rounded-xl bg-white text-slate-900 font-bold text-center hover:opacity-90">Call: +251 903 677 757</a>
            <a href="mailto:hello@legasyasin.dev" className="px-5 py-3 rounded-xl bg-white/20 border border-white/40 text-white font-semibold text-center hover:bg-white/25">Email: hello@legasyasin.dev</a>
          </div>
        </div>
      </div>
    </section>
  )
}
