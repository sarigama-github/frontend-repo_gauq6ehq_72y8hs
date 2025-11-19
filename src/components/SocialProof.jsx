import React from 'react'

export default function SocialProof() {
  return (
    <section className="py-20 md:py-24 bg-slate-950">
      <div className="container mx-auto px-6">
        <h3 className="text-center text-white text-2xl md:text-3xl font-semibold">Trusted by Founders, Teams, and Students</h3>
        <div className="mt-8 grid md:grid-cols-3 gap-6 text-white/90">
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">“Jot247 replaced my meeting minutes forever.”</div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">“The Malay + English transcription accuracy is insane.”</div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">“Better and cheaper than Granola.”</div>
        </div>
        <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.03] h-20 opacity-70 flex items-center justify-center text-white/50">Logo bar – companies, universities, agencies</div>
      </div>
    </section>
  )
}
