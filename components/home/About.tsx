'use client'

import { motion } from 'framer-motion'

export default function About() {
  const highlights = [
    'Full-stack web development',
    'Mobile app development',
    'Web Development Instructor',

  ]

  return (
    <section className="py-20 px-4 bg-surface">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 md:order-1"
          >
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-textPrimary mb-6">
              About Me
            </h2>
            
            <p className="text-textSecondary text-lg mb-6 leading-relaxed">
              I&apos;m a passionate developer focused on creating exceptional digital experiences. 
              With expertise in modern web technologies, I help businesses build scalable 
              and performant applications.
            </p>
            
            <div className="space-y-3">
              {highlights.map((highlight) => (
                <div key={highlight} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full shadow-sm shadow-accent/50"></div>
                  <span className="text-textPrimary font-medium">{highlight}</span>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 md:order-2"
          >
            <div className="aspect-square bg-background border-2 border-border rounded-2xl flex items-center justify-center hover:border-primary/50 transition-colors">
              <span className="text-textMuted font-mono text-sm">Photo Placeholder</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
