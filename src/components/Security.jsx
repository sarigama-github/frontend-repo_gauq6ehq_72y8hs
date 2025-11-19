import React from 'react'

export default function Security() {
  return (
    <section className="py-20 md:py-24 bg-slate-950">
      <div className="container mx-auto px-6">
        <h3 className="text-2xl md:text-3xl font-semibold text-white text-center">Your Data, Your Control</h3>
        <div className="mt-8 grid md:grid-cols-4 gap-6">
          {[
            'All recordings stored securely in CloudKit or on-device.',
            'No training on your data.',
            'End-to-end privacy by default.',
            'GDPR and PDPA friendly.',
          ].map((p) => (
            <div key={p} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-white/80 text-sm">
              {p}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
