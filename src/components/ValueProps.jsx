import React from 'react'

const items = [
  {
    title: 'Crystal-Clear Transcriptions',
    points: [
      'Best-in-class accuracy powered by Scribe V2',
      'Works with Malaysian accents',
      'Handles bilingual (English + Malay) switching seamlessly',
    ],
  },
  {
    title: 'Real-Time Meeting Intelligence',
    points: [
      'Live transcript',
      'Live topic detection',
      'Live AI summary as you speak',
    ],
  },
  {
    title: 'Smart Summaries You’ll Actually Use',
    points: [
      'Structured by topics',
      'Decisions, risks, and follow-ups',
      'Action items generated automatically',
      'Merges your manual notes into the summary',
    ],
  },
]

export default function ValueProps() {
  return (
    <section className="py-20 md:py-28 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((card) => (
            <div key={card.title} className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-6">
              <h3 className="text-white text-xl font-semibold">{card.title}</h3>
              <ul className="mt-4 space-y-2 text-white/80 text-sm">
                {card.points.map((p) => (
                  <li key={p} className="flex gap-2"><span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-white/60" /> {p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
