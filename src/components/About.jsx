export default function About(){
  return (
    <section id="about" className="relative py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_10%_10%,rgba(236,72,153,.08),transparent_40%),radial-gradient(circle_at_90%_20%,rgba(59,130,246,.08),transparent_40%)]"/>
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-start">
        <div className="prose prose-invert max-w-none">
          <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
          <p className="mt-4 text-slate-300 leading-relaxed">
            I'm a passionate Web Developer focused on building beautiful, colorful, and performant digital products. I love turning ideas into delightful interfaces with clean code and modern tools.
          </p>
          <p className="mt-3 text-slate-300 leading-relaxed">
            My toolkit includes React, Tailwind CSS, and modern JavaScript — with a constant drive to learn and grow.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {['React','Tailwind','JavaScript','UI/UX','APIs','Performance'].map((tag)=> (
            <div key={tag} className="p-4 rounded-2xl bg-white/5 backdrop-blur border border-white/10 shadow text-center font-semibold text-slate-200">
              {tag}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
