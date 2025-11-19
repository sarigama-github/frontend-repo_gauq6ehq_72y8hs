import React from 'react'

export default function FinalCTA() {
  return (
    <section className="py-20 md:py-28 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.06] p-10 text-center">
          <h3 className="text-white text-3xl md:text-4xl font-semibold">Never Miss Important Details Again</h3>
          <a href="#pricing" className="mt-6 inline-flex items-center justify-center rounded-full bg-white text-slate-900 px-6 py-3 text-sm font-semibold shadow-lg shadow-black/20 hover:shadow-black/30 transition">Download Jot247 for iOS</a>
          <div className="mt-3 text-white/70 text-sm">100% free to try • No credit card required</div>
        </div>
      </div>
    </section>
  )
}
