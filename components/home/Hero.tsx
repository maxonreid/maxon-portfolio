'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-16 relative overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(88,166,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(88,166,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-heading font-bold text-5xl md:text-7xl text-textPrimary mb-6 leading-tight"
        >
          Building performant and refined apps and digital solutions.
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl text-textSecondary mb-8 max-w-3xl mx-auto"
        >
          I develop web applications that will supercharge your business and scale globally — based in Vientiane, Laos.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/projects"
            className="px-8 py-3 bg-primary text-background font-semibold rounded-lg hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
          >
            View My Work
          </Link>
          <Link
            href="/contact"
            className="px-8 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-background transition-all"
          >
            Contact Me
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
