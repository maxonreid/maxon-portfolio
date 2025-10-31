import { Link } from '@/lib/navigation'

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-textMuted text-sm">
            &copy; {new Date().getFullYear()} Maxon. All rights reserved.
          </div>
          
          <div className="flex gap-6">
            <Link
              href="https://github.com"
              target="_blank"
              className="text-textSecondary hover:text-primary transition-colors"
            >
              GitHub
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              className="text-textSecondary hover:text-secondary transition-colors"
            >
              LinkedIn
            </Link>
          </div>
        </div>
        
        <div className="mt-4 text-center text-textMuted text-xs font-mono">
          Built with Next.js · By Maxon
        </div>
      </div>
    </footer>
  )
}
