'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const posts = [
  {
    id: 1,
    title: 'Getting Started with Next.js 15',
    excerpt: 'Learn about the latest features and improvements in Next.js 15.',
    date: '2025-10-15',
    slug: 'nextjs-15-guide',
  },
  {
    id: 2,
    title: 'Building Scalable Web Applications',
    excerpt: 'Best practices for creating applications that grow with your business.',
    date: '2025-10-20',
    slug: 'scalable-web-apps',
  },
  {
    id: 3,
    title: 'The Power of Tailwind CSS',
    excerpt: 'Why utility-first CSS is changing the way we build interfaces.',
    date: '2025-10-25',
    slug: 'tailwind-css-power',
  },
]

export default function BlogPreview() {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-textPrimary mb-4">
            Latest from the Blog
          </h2>
          <p className="text-textSecondary text-lg">
            Thoughts on development, design, and technology
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-surface border border-border rounded-xl p-6 hover:border-primary/50 transition-all group"
            >
              <time className="text-primary text-sm font-semibold font-mono">
                {new Date(post.date).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </time>
              
              <h3 className="font-heading font-semibold text-xl text-textPrimary mt-3 mb-2 group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              
              <p className="text-textSecondary mb-4 leading-relaxed">{post.excerpt}</p>
              
              <Link
                href={`/blog/${post.slug}`}
                className="text-primary hover:text-secondary font-semibold inline-flex items-center gap-2"
              >
                Read More →
              </Link>
            </motion.article>
          ))}
        </div>
        
        <div className="text-center">
          <Link
            href="/blog"
            className="inline-block px-8 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-background transition-all"
          >
            Visit the Blog
          </Link>
        </div>
      </div>
    </section>
  )
}
