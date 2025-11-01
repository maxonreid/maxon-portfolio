'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { Link } from '@/lib/navigation'
import LanguageSwitcher from '@/components/ui/LanguageSwitcher'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const t = useTranslations('nav')

  const navLinks = [
    { href: '/', label: t('home') },
    { href: '/projects', label: t('projects') },
    { href: '/blog', label: t('blog') },
    { href: '/contact', label: t('contact') },
  ]

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="font-heading font-bold text-2xl text-primary hover:text-secondary transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              width="36"
              height="36"
              aria-label="MW Logo"
            >
              {/* <!-- Outer frame --> */}
              <rect
                x="24"
                y="24"
                width="464"
                height="464"
                fill="none"
                stroke="#3B19FF"
                stroke-width="32"
                rx="16"
                ry="16"
              />
              {/* <!-- M --> */}
              <path
                d="M128 120h64l64 72 64-72h64v144h-64V192l-64 72-64-72v72h-64V120z"
                fill="#00E0C6"
              />
              {/* <!-- W --> */}
              <path
                d="M128 392V248h64v72l64-72 64 72v-72h64v144h-64l-64-72-64 72h-64z"
                fill="#00E0C6"
              />
            </svg>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-textSecondary hover:text-primary transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="px-6 py-2 bg-accent text-textPrimary font-semibold rounded-lg hover:bg-accent/80 transition-all shadow-lg shadow-accent/20"
            >
              {t('cta')}
            </Link>
            <LanguageSwitcher />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-textPrimary"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-surface border-b border-border"
        >
          <div className="px-4 py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-textSecondary hover:text-primary transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block w-full text-center px-6 py-2 bg-accent text-textPrimary font-semibold rounded-lg hover:bg-accent/80 transition-all"
            >
              {t('cta')}
            </Link>
            <div className="pt-2">
              <LanguageSwitcher />
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  )
}
