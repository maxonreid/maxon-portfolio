'use client'

import Link from 'next/link'
import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
import { useCallback, useEffect, useRef, useState } from 'react'

// Client-only Particles component
const Particles = dynamic(
  () => import('react-tsparticles').then((mod) => mod.Particles),
  { ssr: false }
)

import { loadFull } from 'tsparticles'
import type { Engine } from '@tsparticles/engine'

export default function Hero() {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const particlesRef = useRef<any>(null)
  const [reduceMotion, setReduceMotion] = useState(false)
  const [shouldInit, setShouldInit] = useState(false)

  // Respect prefers-reduced-motion
  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return
    const m = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReduceMotion(m.matches)
    update()
    try {
      m.addEventListener('change', update)
      return () => m.removeEventListener('change', update)
    } catch {
      m.addListener(update)
      return () => m.removeListener(update)
    }
  }, [])

  // Defer init until client, above mobile width, and when hero is in viewport
  useEffect(() => {
    if (typeof window === 'undefined') return
    const minWidth = 640
    if (window.innerWidth < minWidth) return

    const el = containerRef.current
    if (!el) {
      setShouldInit(true)
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setShouldInit(true)
            io.disconnect()
            break
          }
        }
      },
      { root: null, rootMargin: '200px', threshold: 0.1 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  // Initialize engine (loadFull or use slim build) — memoized
  const particlesInit = useCallback(async (engine: Engine) => {
    // If you want a smaller bundle, replace loadFull(engine) with:
    // await import('tsparticles-slim').then((m) => m.loadSlim(engine))
    await loadFull(engine)
  }, [])

  // Helper: choose particle count based on screen width and reduced-motion
  const getParticleCount = () => {
    if (reduceMotion) return 8
    if (typeof window === 'undefined') return 30
    const w = window.innerWidth
    if (w < 900) return 24
    if (w < 1400) return 40
    return 60
  }

  // Options tuned for a subtle DOTS+LINKS techy feel (accent #58A6FF)
  const particleOptions = {
    fullScreen: { enable: false },
    background: { color: { value: 'transparent' } },
    fpsLimit: 60,
    detectRetina: true,
    pauseOnBlur: true,
    pauseOnOutsideViewport: true,
    interactivity: {
      detectsOn: 'canvas',
      events: {
        onHover: {
          enable: true,
          mode: 'repulse'
        },
        onClick: {
          enable: false
        },
        resize: true
      },
      modes: {
        repulse: {
          distance: 120,
          duration: 0.4
        }
      }
    },
    particles: {
      number: {
        value: getParticleCount(),
        density: { enable: true, area: 900 }
      },
      color: { value: '#58A6FF' },
      links: {
        enable: true,
        distance: 140,
        color: '#58A6FF',
        opacity: 0.06,
        width: 1
      },
      move: {
        enable: !reduceMotion,
        speed: 0.8,
        direction: 'none',
        outModes: { default: 'out' }
      },
      opacity: {
        value: 0.9,
        random: { enable: true, minimumValue: 0.3 }
      },
      size: {
        value: { min: 1, max: 3 }
      }
    }
  }

  // Clean up when unmounting
  useEffect(() => {
    return () => {
      try {
        if (particlesRef.current && typeof particlesRef.current.destroy === 'function') {
          particlesRef.current.destroy()
        }
      } catch {
        // ignore
      }
      particlesRef.current = null
    }
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-16 relative overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(88,166,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(88,166,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:linear-gradient(180deg,transparent,rgba(0,0,0,0.08))]" />

      {/* Particles container (behind content, non-interactive) */}
      <div
        ref={containerRef}
        aria-hidden="true"
        className="absolute inset-0 z-0 pointer-events-none"
        style={{ position: 'absolute', width: '100%', height: '100%' }}
      >
        {shouldInit && !reduceMotion && (
          <Particles
            id="hero-particles"
            init={particlesInit}
            options={particleOptions}
            loaded={(container) => {
              particlesRef.current = container
            }}
            className="w-full h-full"
          />
        )}
      </div>

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