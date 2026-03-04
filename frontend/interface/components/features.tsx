'use client'

import { BarChart3, FileText, Users, Zap, Clock, Shield } from 'lucide-react'

const features = [
  {
    icon: FileText,
    title: 'Smart Invoicing',
    description: 'Create and send invoices instantly. Track payments, set reminders, and get paid faster.'
  },
  {
    icon: BarChart3,
    title: 'Payment Analytics',
    description: 'Real-time dashboard showing earnings, pending payments, and financial trends.'
  },
  {
    icon: Users,
    title: 'Client Management',
    description: 'Store client details, project history, and rates all in one organized place.'
  },
  {
    icon: Zap,
    title: 'Workflow Automation',
    description: 'Automate invoicing, reminders, and reporting to save hours every week.'
  },
  {
    icon: Clock,
    title: 'Time Tracking',
    description: 'Track billable hours, project time, and generate timesheets automatically.'
  },
  {
    icon: Shield,
    title: 'Secure & Private',
    description: 'Bank-level encryption protects all your data and transactions securely.'
  }
]

export default function Features() {
  return (
    <section id="features" className="relative py-32 px-6 bg-background overflow-hidden">
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 -right-96 w-96 h-96 bg-primary/15 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-1/3 -left-96 w-96 h-96 bg-accent/15 rounded-full blur-3xl opacity-60"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl sm:text-6xl font-bold text-foreground mb-6">
            Powerful Features
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to manage your freelance business professionally and efficiently.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => {
            const Icon = feature.icon
            const isAccent = i % 2 === 1
            return (
              <div 
                key={i} 
                className="group"
              >
                <div className="relative h-full bg-gradient-to-br from-card/80 to-card/40 border border-primary/20 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ${
                    isAccent 
                      ? 'bg-accent/20 text-accent' 
                      : 'bg-primary/20 text-primary'
                  }`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
