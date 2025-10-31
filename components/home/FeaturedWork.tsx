'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    tagline: 'Modern shopping experience',
    tech: ['Next.js', 'Tailwind', 'Stripe'],
    slug: 'ecommerce-platform',
  },
  {
    id: 2,
    title: 'Task Management App',
    tagline: 'Productivity made simple',
    tech: ['React', 'Node.js', 'MongoDB'],
    slug: 'task-management',
  },
  {
    id: 3,
    title: 'Portfolio CMS',
    tagline: 'Content at your fingertips',
    tech: ['Next.js', 'Prisma', 'PostgreSQL'],
    slug: 'portfolio-cms',
  },
]

export default function FeaturedWork() {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading font-bold text-4xl md:text-5xl text-textPrimary mb-12 text-center"
        >
          Featured Work
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-surface border border-border rounded-xl p-6 hover:border-primary/50 transition-all group"
            >
              <div className="h-48 bg-background border border-border rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                <span className="text-textMuted font-mono text-sm">Project Image</span>
              </div>
              
              <h3 className="font-heading font-semibold text-2xl text-textPrimary mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              
              <p className="text-textSecondary mb-4">{project.tagline}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-mono border border-primary/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <Link
                href={`/projects/${project.slug}`}
                className="text-primary hover:text-secondary font-semibold inline-flex items-center gap-2 group-hover:gap-3 transition-all"
              >
                View Case Study →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
