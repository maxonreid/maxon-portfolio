'use client'

import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  return (
    <div className="min-h-screen pt-24 px-4 bg-background">
      <div className="max-w-2xl mx-auto">
        <h1 className="font-heading font-bold text-5xl text-textPrimary mb-4">
          Get in Touch
        </h1>
        <p className="text-textSecondary text-xl mb-12">
          Let&apos;s discuss your project and bring your ideas to life.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6 bg-surface border border-border rounded-xl p-8">
          <div>
            <label htmlFor="name" className="block text-textPrimary font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 bg-background border border-border rounded-lg text-textPrimary focus:outline-none focus:border-primary transition-colors"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-textPrimary font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 bg-background border border-border rounded-lg text-textPrimary focus:outline-none focus:border-primary transition-colors"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-textPrimary font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              rows={6}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 bg-background border border-border rounded-lg text-textPrimary focus:outline-none focus:border-primary resize-none transition-colors"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full px-8 py-3 bg-accent text-textPrimary font-semibold rounded-lg hover:bg-accent/80 transition-all shadow-lg shadow-accent/20"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}
