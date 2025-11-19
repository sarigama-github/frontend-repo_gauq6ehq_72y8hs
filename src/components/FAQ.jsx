import React from 'react'

const faqs = [
  { q: 'Does Jot247 support Malay?', a: 'Yes. It is optimized for Malaysian English and Bahasa Melayu.' },
  { q: 'Can I use it for long meetings?', a: 'Yes. Up to 30 hours/month on Pro. Additional hours available.' },
  { q: 'Does it work with the phone locked?', a: 'Yes. Background recording + lock-screen controls included.' },
  { q: 'Can I export notes?', a: 'PDF, Markdown, WhatsApp, Email and more.' },
  { q: 'Is Jot247 cheaper than Granola?', a: 'Yes—up to 40% cheaper with more features.' },
]

export default function FAQ() {
  return (
    <section className="py-20 md:py-28 bg-slate-950">
      <div className="container mx-auto px-6">
        <h3 className="text-2xl md:text-3xl font-semibold text-white text-center">FAQ</h3>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {faqs.map((f) => (
            <div key={f.q} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
              <div className="text-white font-medium">{f.q}</div>
              <div className="text-white/80 text-sm mt-2">{f.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
