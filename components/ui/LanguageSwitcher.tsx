'use client'

import { useLocale } from 'next-intl'
import { usePathname, useRouter } from '@/lib/navigation'
import { useState, useTransition } from 'react'
import ReactCountryFlag from 'react-country-flag'

const languages = [
  { code: 'en', name: 'English', countryCode: 'us' },
  { code: 'lo', name: 'ລາວ', countryCode: 'la' }
]

export default function LanguageSwitcher() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const [isPending, startTransition] = useTransition()
  const [isOpen, setIsOpen] = useState(false)

  const currentLanguage = languages.find(lang => lang.code === locale)

  const handleLanguageChange = (newLocale: string) => {
    startTransition(() => {
      router.replace(pathname, { locale: newLocale })
    })
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg border border-border hover:bg-surface transition-colors"
        disabled={isPending}
      >
        <span>{currentLanguage?.name}
          &nbsp;
          <ReactCountryFlag
            svg
            countryCode={currentLanguage?.countryCode}
            style={{ width: '1.25rem', height: '1.25rem' }}
            title={currentLanguage?.name}
            aria-label={currentLanguage?.name} />
        </span>
        {/* <span className="text-sm font-medium">{currentLanguage?.code.toUpperCase()}</span> */}
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-surface border border-border rounded-lg shadow-lg overflow-hidden z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-background transition-colors ${locale === lang.code ? 'bg-background text-primary' : 'text-textSecondary'
                }`}
            >
              <span className="text-xl">
                <ReactCountryFlag svg countryCode={lang.countryCode} style={{ width: '1.25rem', height: '1.25rem' }} title={lang.name} aria-label={lang.name} />
              </span>
              <span className="text-sm font-medium">{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
