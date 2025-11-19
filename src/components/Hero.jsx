import React from 'react'
import Spline from '@splinetool/react-spline'
import { Play, Download } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10">
        <div className="pt-24 md:pt-32 pb-16 md:pb-24">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl">
              <div className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur-sm">
                Jot247 for iOS
              </div>
              <h1 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tight text-white">
                AI Meeting Notes That Actually Understand Your Meetings
              </h1>
              <p className="mt-5 text-lg md:text-xl text-white/80 max-w-2xl">
                Record, transcribe, and summarize every conversation with real-time AI. Cheaper than Granola. Built for iOS.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a href="#pricing" className="inline-flex items-center justify-center rounded-full bg-white text-slate-900 px-5 py-3 text-sm font-semibold shadow-lg shadow-black/20 hover:shadow-black/30 transition">
                  <Download className="w-4 h-4 mr-2" />
                  Get Jot247 for iOS
                </a>
                <a href="#showcase" className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 text-white px-5 py-3 text-sm font-semibold hover:bg-white/10 transition">
                  <Play className="w-4 h-4 mr-2" />
                  Watch Demo
                </a>
              </div>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-white/80">
                <div className="rounded-xl border border-white/15 bg-white/5 p-3 backdrop-blur-sm">Supports Malay + English bilingual meetings</div>
                <div className="rounded-xl border border-white/15 bg-white/5 p-3 backdrop-blur-sm">Powered by ElevenLabs Scribe V2</div>
                <div className="rounded-xl border border-white/15 bg-white/5 p-3 backdrop-blur-sm">97% transcription accuracy</div>
              </div>
            </div>

            {/* Visuals */}
            <div className="mt-16 md:mt-20">
              <div className="relative w-full">
                <div className="grid md:grid-cols-3 gap-6">
                  {/* Lock-screen recording */}
                  <div className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md p-4">
                    <div className="mx-auto aspect-[9/19] w-56 sm:w-72 rounded-[2rem] border border-white/20 bg-gradient-to-b from-slate-900 to-slate-800 p-3 shadow-2xl">
                      <div className="h-full rounded-[1.6rem] bg-slate-900 p-4 flex flex-col">
                        <div className="text-white/60 text-xs">Lock Screen</div>
                        <div className="mt-auto">
                          <div className="text-center text-white font-medium">Recording…</div>
                          <div className="mt-1 mx-auto h-1.5 w-32 rounded-full bg-gradient-to-r from-fuchsia-400 via-blue-400 to-orange-300 animate-pulse" />
                          <div className="mt-2 text-center text-white/60 text-xs">00:12:35</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Transcript view */}
                  <div className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md p-4">
                    <div className="mx-auto aspect-[9/19] w-56 sm:w-72 rounded-[2rem] border border-white/20 bg-gradient-to-b from-slate-900 to-slate-800 p-3 shadow-2xl">
                      <div className="h-full rounded-[1.6rem] bg-slate-900 p-4 overflow-hidden">
                        <div className="text-white/70 text-xs mb-2">Live Transcript</div>
                        <div className="space-y-2">
                          <div className="self-start max-w-[85%] rounded-2xl bg-white/10 p-2 text-white text-sm"><span className="font-semibold">Them:</span> Let's align on the timeline for the launch next Friday.</div>
                          <div className="self-end max-w-[85%] rounded-2xl bg-blue-500/20 p-2 text-white text-sm text-right"><span className="font-semibold">Me:</span> We can ship the MVP by Wednesday and polish on Thursday.</div>
                          <div className="self-start max-w-[85%] rounded-2xl bg-white/10 p-2 text-white text-sm"><span className="font-semibold">Them:</span> Great. Can you also include Malay support?</div>
                          <div className="self-end max-w-[85%] rounded-2xl bg-blue-500/20 p-2 text-white text-sm text-right"><span className="font-semibold">Me:</span> Boleh, kita akan tambah sokongan BM juga.</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Markdown summary */}
                  <div className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md p-4">
                    <div className="mx-auto aspect-[9/19] w-56 sm:w-72 rounded-[2rem] border border-white/20 bg-gradient-to-b from-slate-900 to-slate-800 p-3 shadow-2xl">
                      <div className="h-full rounded-[1.6rem] bg-slate-900 p-4 overflow-hidden text-white">
                        <div className="text-white/70 text-xs mb-2">AI Summary (Markdown)</div>
                        <div className="text-sm space-y-2">
                          <div>
                            <div className="font-semibold">Topics</div>
                            <ul className="list-disc list-inside text-white/80">
                              <li>Launch timeline</li>
                              <li>Malay support</li>
                            </ul>
                          </div>
                          <div>
                            <div className="font-semibold">Decisions</div>
                            <ul className="list-disc list-inside text-white/80">
                              <li>Ship MVP Wednesday; polish Thursday</li>
                            </ul>
                          </div>
                          <div>
                            <div className="font-semibold">Action Items</div>
                            <ul className="list-disc list-inside text-white/80">
                              <li>Add Bahasa Melayu support</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Gradient veil to ensure readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-950/70 to-slate-950" />
    </section>
  )
}
