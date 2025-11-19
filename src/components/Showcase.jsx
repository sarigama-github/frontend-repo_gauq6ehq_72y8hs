import React from 'react'

const cards = [
  { title: 'Recording Screen', subtitle: 'Lock-screen + Dynamic Island controls' },
  { title: 'Transcript View', subtitle: 'Clean “Me” vs “Them” chat' },
  { title: 'Live Summary Panel', subtitle: 'Real-time AI insights as you speak' },
  { title: 'Full Markdown Summary', subtitle: 'Readable, structured, sharable' },
  { title: 'Action Items List', subtitle: 'Decisions, risks, follow-ups' },
]

export default function Showcase() {
  return (
    <section id="showcase" className="py-20 md:py-28 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-5 gap-6">
          {cards.map((c) => (
            <div key={c.title} className="aspect-[4/5] rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-5 flex flex-col justify-between">
              <div className="h-3/4 rounded-2xl bg-slate-900/60 border border-white/10" />
              <div className="text-white">
                <div className="font-semibold">{c.title}</div>
                <div className="text-white/70 text-sm">{c.subtitle}</div>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-white/70">“Looks simple. Works incredibly hard.”</p>
      </div>
    </section>
  )
}
