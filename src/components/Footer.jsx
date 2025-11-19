import React from 'react'

export default function Footer() {
  return (
    <footer className="py-10 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-white/70 text-sm">
          <nav className="flex gap-5">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Support</a>
          </nav>
          <div>© 2025 Jot247. All rights reserved.</div>
        </div>
      </div>
    </footer>
  )
}
