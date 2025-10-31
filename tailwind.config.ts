import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0D1117',
        surface: '#161B22',
        border: '#30363D',
        primary: '#58A6FF',
        secondary: '#BC8CFF',
        accent: '#F778BA',
        textPrimary: '#E6EDF3',
        textSecondary: '#8B949E',
        textMuted: '#6E7681',
      },
      fontFamily: {
        heading: ['JetBrains Mono', 'monospace'],
        body: ['IBM Plex Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
export default config
