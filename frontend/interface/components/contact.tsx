'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Mail, Loader2 } from 'lucide-react'

export default function Contact() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
      setEmail('')
      setTimeout(() => setSubmitted(false), 3000)
    }, 1000)
  }

  return (
    <section id="contact" className="relative py-32 px-6 bg-background overflow-hidden">
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/15 rounded-full blur-3xl opacity-40"></div>
      </div>

      <div className="max-w-2xl mx-auto relative z-10 text-center">
        <div className="mb-12">
          <h2 className="text-5xl sm:text-6xl font-bold text-foreground mb-6">
            Ready to Grow?
          </h2>
          <p className="text-lg text-muted-foreground">
            Join thousands of freelancers using FreelanceHub to manage their business smarter and earn more.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 mb-8">
          <div className="flex-1">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-6 py-3 rounded-lg bg-card/80 border border-primary/20 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-all duration-300"
            />
          </div>
          <Button
            type="submit"
            disabled={loading}
            className="bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 px-8"
          >
            {loading ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <>
                <Mail className="w-4 h-4 mr-2" />
                Get Started Free
              </>
            )}
          </Button>
        </form>

        {submitted && (
          <p className="text-accent font-semibold">
            Thank you! Check your email to get started.
          </p>
        )}

        <p className="text-sm text-muted-foreground">
          No credit card required. Free forever plan available.
        </p>
      </div>
    </section>
  )
}
