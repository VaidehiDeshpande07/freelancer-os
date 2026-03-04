'use client'

import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'UX Designer',
    avatar: 'P',
    content: 'FreelanceHub saved me so much time. I went from manually tracking invoices to automating everything. My income has increased by 40%.',
    rating: 5
  },
  {
    name: 'Rahul Patel',
    role: 'Web Developer',
    avatar: 'R',
    content: 'Finally a platform built for freelancers. The client management and invoicing features are incredibly intuitive. Highly recommended!',
    rating: 5
  },
  {
    name: 'Ananya Gupta',
    role: 'Content Writer',
    avatar: 'A',
    content: 'The best investment I made for my business. Payment tracking is seamless and I get paid on time consistently now.',
    rating: 5
  }
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-32 px-6 bg-background overflow-hidden">
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-40"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl sm:text-6xl font-bold text-foreground mb-6">
            Loved by Freelancers
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of freelancers who are growing their business with FreelanceHub.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <div 
              key={i}
              className="group relative"
            >
              <div className="relative bg-gradient-to-br from-card/80 to-card/40 border border-primary/20 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-bold text-foreground text-sm">{testimonial.name}</p>
                    <p className="text-muted-foreground text-xs">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  "{testimonial.content}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
