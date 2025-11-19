import React from 'react'
import { Mic, MessageSquare, NotebookPen, Share2, Infinity } from 'lucide-react'

const features = [
  {
    icon: Mic,
    title: 'Background Recording',
    points: [
      'Continue recording even when the app is closed.',
      'Lock-screen and Dynamic Island controls.',
    ],
  },
  {
    icon: MessageSquare,
    title: 'Transcript Like a Chat',
    points: [
      '“Me” vs “Them” clean diarization.',
      'Grouped speech bubbles.',
      'No messy timestamps.',
    ],
  },
  {
    icon: NotebookPen,
    title: 'Manual Notes Integration',
    points: [
      'Add your thoughts during the meeting.',
      'Jot247 merges them seamlessly into the final AI summary.',
    ],
  },
  {
    icon: Share2,
    title: 'Share Instantly',
    points: [
      'Export to PDF, WhatsApp, Email, or copy Markdown.',
    ],
  },
  {
    icon: Infinity,
    title: 'Unlimited Meeting History',
    points: [
      'Everything synced via CloudKit.',
      'Private. Secure. On your device.',
    ],
  },
]

export default function Features() {
  return (
    <section className="py-20 md:py-28 bg-slate-950">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl md:text-4xl font-semibold text-white text-center">Your Personal AI Note-Taker, 24/7</h2>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, points }) => (
            <div key={title} className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-6">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-white font-semibold">{title}</h3>
              </div>
              <ul className="mt-4 space-y-2 text-white/80 text-sm">
                {points.map((p) => (
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
