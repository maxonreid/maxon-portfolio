import Hero from '@/components/home/Hero'
import FeaturedWork from '@/components/home/FeaturedWork'
import About from '@/components/home/About'
import BlogPreview from '@/components/home/BlogPreview'
import ContactSection from '@/components/home/ContactSection'

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedWork />
      <About />
      <BlogPreview />
      <ContactSection />
    </>
  )
}
