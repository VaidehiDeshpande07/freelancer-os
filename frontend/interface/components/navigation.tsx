import Link from "next/link"
import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'

export default function Navigation() {
  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-xl border-b border-primary/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
            <span className="text-white font-bold text-lg">H</span>
          </div>
          <span className="font-bold text-lg text-foreground">FreelanceHub</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-muted-foreground hover:text-primary transition duration-300">Features</a>
          <a href="#testimonials" className="text-muted-foreground hover:text-primary transition duration-300">Testimonials</a>
          <a href="#pricing" className="text-muted-foreground hover:text-primary transition duration-300">Pricing</a>
        </div>

        <div className="flex items-center gap-3">
          
          {/* SIGN IN BUTTON */}
          <Link href="/login">
            <Button
              variant="outline"
              className="hidden sm:inline-flex border-primary/30 hover:border-primary/60 hover:text-primary"
            >
              Sign In
            </Button>
          </Link>

          {/* GET STARTED BUTTON */}
          <Link href="/login">
            <Button className="bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/30 transition-all duration-300">
              Get Started
            </Button>
          </Link>

        </div>
      </div>
    </nav>
  )
}