'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState, useEffect, useMemo } from 'react'

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100
      const y = (e.clientY / window.innerHeight) * 100
      setMousePos({ x, y })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Generate star positions once and memoize them
  const starPositions = useMemo(() => ({
    small: Array.from({ length: 150 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5,
      duration: Math.random() * 3 + 2,
    })),
    medium: Array.from({ length: 70 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 7,
      duration: Math.random() * 4 + 3,
    })),
    large: Array.from({ length: 30 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 10,
      duration: Math.random() * 5 + 4,
    })),
  }), [])

  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-16 relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(88,166,255,0.1),transparent_50%)] animate-pulse-slow" />
      </div>
      
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(88,166,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(88,166,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:linear-gradient(180deg,transparent,rgba(0,0,0,0.08))]" />

      {/* Starfield with magnetic field effect */}
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Small twinkling stars */}
        {starPositions.small.map((star, i) => {
          const distanceFromMouse = Math.sqrt(
            Math.pow(star.x - mousePos.x, 2) + Math.pow(star.y - mousePos.y, 2)
          )
          
          const magneticRadius = 25
          let offsetX = 0
          let offsetY = 0
          
          if (distanceFromMouse < magneticRadius) {
            const angle = Math.atan2(mousePos.y - star.y, mousePos.x - star.x)
            const strength = (1 - distanceFromMouse / magneticRadius) * 3
            offsetX = Math.cos(angle) * strength
            offsetY = Math.sin(angle) * strength
          }
          
          return (
            <div
              key={`star-small-${i}`}
              className="absolute rounded-full bg-white animate-twinkle transition-all duration-700 ease-out"
              style={{
                left: `calc(${star.x}% + ${offsetX}%)`,
                top: `calc(${star.y}% + ${offsetY}%)`,
                width: '1px',
                height: '1px',
                animationDelay: `${star.delay}s`,
                animationDuration: `${star.duration}s`,
              }}
            />
          )
        })}
        {/* Medium stars */}
        {starPositions.medium.map((star, i) => {
          const distanceFromMouse = Math.sqrt(
            Math.pow(star.x - mousePos.x, 2) + Math.pow(star.y - mousePos.y, 2)
          )
          
          const magneticRadius = 30
          let offsetX = 0
          let offsetY = 0
          
          if (distanceFromMouse < magneticRadius) {
            const angle = Math.atan2(mousePos.y - star.y, mousePos.x - star.x)
            const strength = (1 - distanceFromMouse / magneticRadius) * 5
            offsetX = Math.cos(angle) * strength
            offsetY = Math.sin(angle) * strength
          }
          
          return (
            <div
              key={`star-medium-${i}`}
              className="absolute rounded-full bg-primary animate-twinkle-slow transition-all duration-700 ease-out"
              style={{
                left: `calc(${star.x}% + ${offsetX}%)`,
                top: `calc(${star.y}% + ${offsetY}%)`,
                width: '2px',
                height: '2px',
                animationDelay: `${star.delay}s`,
                animationDuration: `${star.duration}s`,
              }}
            />
          )
        })}
        {/* Large glowing stars */}
        {starPositions.large.map((star, i) => {
          const distanceFromMouse = Math.sqrt(
            Math.pow(star.x - mousePos.x, 2) + Math.pow(star.y - mousePos.y, 2)
          )
          
          const magneticRadius = 35
          let offsetX = 0
          let offsetY = 0
          
          if (distanceFromMouse < magneticRadius) {
            const angle = Math.atan2(mousePos.y - star.y, mousePos.x - star.x)
            const strength = (1 - distanceFromMouse / magneticRadius) * 7
            offsetX = Math.cos(angle) * strength
            offsetY = Math.sin(angle) * strength
          }
          
          return (
            <div
              key={`star-large-${i}`}
              className="absolute rounded-full bg-primary animate-pulse-glow transition-all duration-700 ease-out"
              style={{
                left: `calc(${star.x}% + ${offsetX}%)`,
                top: `calc(${star.y}% + ${offsetY}%)`,
                width: '3px',
                height: '3px',
                boxShadow: '0 0 6px rgba(88, 166, 255, 0.8)',
                animationDelay: `${star.delay}s`,
                animationDuration: `${star.duration}s`,
              }}
            />
          )
        })}
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-heading font-bold text-5xl md:text-7xl text-textPrimary mb-6 leading-tight"
        >
          Building web apps and digital solutions.
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