import React from 'react'

const plans = [
  {
    name: 'Free',
    price: '$0',
    features: [
      '1 hour transcription/month',
      'Basic summaries',
      '30-day storage',
      'Manual notes',
    ],
    highlighted: false,
  },
  {
    name: 'Starter',
    price: '$8.99/mo',
    features: [
      '10 hours transcription',
      'Full summaries',
      'Manual notes integration',
      'Unlimited history',
      'PDF export',
    ],
    highlighted: true,
  },
  {
    name: 'Pro',
    price: '$14.99/mo',
    features: [
      '30 hours transcription',
      'Action items',
      'Advanced summaries',
      'Priority processing',
      'Speaker renaming',
    ],
    highlighted: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-28 bg-slate-950">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl md:text-4xl font-semibold text-white text-center">Fair Pricing. No Surprises. Cheaper Than Granola.</h2>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {plans.map((p) => (
            <div key={p.name} className={`rounded-3xl border ${p.highlighted ? 'border-white/20 bg-white/10' : 'border-white/10 bg-white/[0.04]'} p-6 flex flex-col`}>
              <div className="text-white text-xl font-semibold">{p.name}</div>
              <div className="text-white/90 text-3xl mt-2">{p.price}</div>
              <ul className="mt-4 space-y-2 text-white/80 text-sm">
                {p.features.map(f => (
                  <li key={f} className="flex gap-2"><span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-white/60" /> {f}</li>
                ))}
              </ul>
              <a href="#" className={`mt-6 inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition ${p.highlighted ? 'bg-white text-slate-900' : 'border border-white/20 text-white hover:bg-white/10'}`}>Choose Your Plan</a>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-white/60 text-sm">Business and Enterprise pricing available upon request.</p>
      </div>
    </section>
  )
}
