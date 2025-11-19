import React, { useEffect } from 'react'
import Hero from './components/Hero'
import ValueProps from './components/ValueProps'
import Features from './components/Features'
import Showcase from './components/Showcase'
import Pricing from './components/Pricing'
import SocialProof from './components/SocialProof'
import Security from './components/Security'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    // SEO metadata injection
    const title = 'Jot247 – AI Meeting Notes for iOS (Better & Cheaper Than Granola)'
    const description = 'Jot247 is an iOS-native AI meeting note taker with real-time transcription, smart summaries, action items, and Malay-English bilingual support. Background recording included. Try for free.'
    const keywords = 'AI notes app, meeting minutes app, Granola alternative, iOS AI recorder, Malay transcription, ElevenLabs Scribe V2, meeting summary app.'

    document.title = title

    const metaDesc = document.querySelector('meta[name="description"]') || document.createElement('meta')
    metaDesc.setAttribute('name', 'description')
    metaDesc.setAttribute('content', description)
    document.head.appendChild(metaDesc)

    const metaKeywords = document.querySelector('meta[name="keywords"]') || document.createElement('meta')
    metaKeywords.setAttribute('name', 'keywords')
    metaKeywords.setAttribute('content', keywords)
    document.head.appendChild(metaKeywords)
  }, [])

  return (
    <div className="bg-slate-950 text-white">
      {/* Top nav */}
      <header className="sticky top-0 z-20 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
        <div className="container mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-full bg-gradient-to-tr from-fuchsia-400 via-blue-400 to-orange-300" />
            <span className="font-semibold">Jot247</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#faq" className="hover:text-white">FAQ</a>
          </nav>
          <a href="#pricing" className="inline-flex items-center rounded-full bg-white text-slate-900 px-4 py-2 text-xs font-semibold">Get Jot247</a>
        </div>
      </header>

      <main>
        <Hero />
        <ValueProps />
        <section id="features"><Features /></section>
        <Showcase />
        <Pricing />
        <SocialProof />
        <Security />
        <section id="faq"><FAQ /></section>
        <FinalCTA />
      </main>

      <Footer />
    </div>
  )
}

export default App
