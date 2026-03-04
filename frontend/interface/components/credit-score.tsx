import { Shield, ArrowUp, CheckCircle2, Lock } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function CreditScore() {
  return (
    <section id="credit-score" className="relative min-h-screen py-24 px-6 bg-background overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -right-48 w-96 h-96 bg-primary/15 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-1/4 -left-48 w-96 h-96 bg-accent/15 rounded-full blur-3xl opacity-50"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Visualization */}
          <div className="space-y-6">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-gradient-to-br from-card/60 to-card/30 backdrop-blur-xl border border-primary/30 rounded-3xl p-10 space-y-8 hover:border-primary/60 transition-all duration-500">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Your Score</p>
                    <p className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">87</p>
                    <p className="text-sm text-accent flex items-center gap-2 mt-4">
                      <ArrowUp className="w-4 h-4" /> +12 this month
                    </p>
                  </div>
                  <Shield className="w-20 h-20 text-primary/30 group-hover:scale-110 transition-transform duration-300" />
                </div>

                <div className="space-y-4">
                  {[
                    { label: 'On-time Completion', value: '95%', percent: 95 },
                    { label: 'Invoice Payment Cycle', value: '5 days', percent: 85 },
                    { label: 'Client Retention', value: '92%', percent: 92 },
                  ].map((metric, i) => (
                    <div key={i}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-foreground">{metric.label}</span>
                        <span className="text-sm text-primary font-semibold">{metric.value}</span>
                      </div>
                      <div className="w-full bg-primary/10 rounded-full h-2.5 overflow-hidden">
                        <div
                          className="h-2.5 rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-700"
                          style={{ width: `${metric.percent}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-5xl md:text-6xl font-bold text-foreground text-balance">
                Your Digital Economic{' '}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Identity
                </span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Build a Freelancer Credit Score that opens doors. Get access to loans, financing, and opportunities previously unavailable to independent professionals.
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  icon: CheckCircle2,
                  title: 'Loan Eligibility',
                  desc: 'Access to micro-loans and financing options'
                },
                {
                  icon: Lock,
                  title: 'Financial Inclusion',
                  desc: 'Build formal credit history as a freelancer'
                },
                {
                  icon: Shield,
                  title: 'Trust & Credibility',
                  desc: 'Share your score with clients and partners'
                }
              ].map((item, i) => {
                const Icon = item.icon
                return (
                  <div key={i} className="flex gap-4 items-start p-4 rounded-xl bg-card/40 border border-primary/10 hover:border-primary/30 transition-all duration-300 group">
                    <Icon className="w-6 h-6 text-primary flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                    <div>
                      <p className="font-semibold text-foreground">{item.title}</p>
                      <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 text-base font-semibold mt-6">
              Learn About Your Score
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
