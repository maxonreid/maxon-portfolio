'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function ContactSection() {
  return (
    <section className="py-20 px-4 bg-surface border-t border-border">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-textPrimary mb-6">
            Have an idea in mind?
          </h2>
          
          <p className="text-textSecondary text-xl mb-8 leading-relaxed">
            Let&apos;s make it real. I&apos;m available for freelance projects and collaborations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-3 bg-accent text-textPrimary font-semibold rounded-lg hover:bg-accent/80 transition-all shadow-lg shadow-accent/20"
            >
              Get in Touch
            </Link>
            <a
              href="mailto:hello@maxon.dev"
              className="px-8 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-background transition-all"
            >
              Send an Email
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
