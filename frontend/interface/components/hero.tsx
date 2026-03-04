import { Button } from '@/components/ui/button'
import { ArrowRight, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 px-6 overflow-hidden bg-background">
      {/* Grid background */}
      <div className="absolute inset-0 -z-10 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)',
          backgroundSize: '80px 80px'
        }}></div>
      </div>

      {/* Glowing orbs */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/30 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/30 rounded-full blur-3xl opacity-50"></div>
      </div>

      <div className="max-w-5xl mx-auto text-center space-y-12 relative z-10">
        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-primary/10 border border-primary/30 backdrop-blur-sm hover:border-primary/60 transition-all duration-300">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-xs font-bold uppercase tracking-wider text-primary">FreelanceHub</span>
        </div>

        <div className="space-y-10">
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-balance text-foreground leading-[1.05]">
            Grow Your
            <br />
            <span className="inline-block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Freelance Business
            </span>
          </h1>
          
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed">
            One platform for invoicing, payments, portfolio, and client management. Everything freelancers need to succeed.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <Button size="lg" className="bg-white text-black hover:bg-gray-100 transition-all duration-300 text-base font-semibold h-14 px-10 rounded-full shadow-xl shadow-white/10">
            Get Started <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button size="lg" variant="outline" className="text-base font-semibold h-14 px-10 rounded-full border-white/20 hover:border-white/40 text-foreground transition-all duration-300 bg-white/5 backdrop-blur-sm">
            Watch Demo
          </Button>
        </div>

        {/* Stats */}
        <div className="pt-16 grid grid-cols-3 gap-8 border-t border-primary/10">
          <div className="space-y-2">
            <div className="text-4xl sm:text-5xl font-bold text-white">10K+</div>
            <p className="text-sm text-muted-foreground">Active Users</p>
          </div>
          <div className="space-y-2">
            <div className="text-4xl sm:text-5xl font-bold text-white">₹50Cr+</div>
            <p className="text-sm text-muted-foreground">Managed</p>
          </div>
          <div className="space-y-2">
            <div className="text-4xl sm:text-5xl font-bold text-white">99.9%</div>
            <p className="text-sm text-muted-foreground">Uptime</p>
          </div>
        </div>
      </div>
    </section>
  )
}
