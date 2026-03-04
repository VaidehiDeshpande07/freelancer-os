import { Check } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const plans = [
  {
    name: 'Starter',
    price: 'Free',
    description: 'Perfect for getting started',
    features: [
      'Up to 5 invoices/month',
      'Basic portfolio',
      'Email reminders',
      'Monthly reports',
      'Community support'
    ],
    highlighted: false
  },
  {
    name: 'Professional',
    price: '₹199',
    period: '/month',
    description: 'For growing freelancers',
    features: [
      'Unlimited invoices',
      'Advanced portfolio',
      'Automated reminders',
      'Weekly reports & analytics',
      'Credit score calculation',
      'GST support',
      'Priority support',
      'Client feedback system'
    ],
    highlighted: true
  },
  {
    name: 'Enterprise',
    price: '₹499',
    period: '/month',
    description: 'For established professionals',
    features: [
      'Everything in Professional',
      'Team management',
      'Advanced integrations',
      'Loan eligibility tracking',
      'Custom branding',
      'Dedicated account manager',
      'API access',
      'White-label options'
    ],
    highlighted: false
  }
]

export default function Pricing() {
  return (
    <section id="pricing" className="relative min-h-screen py-24 px-6 bg-background overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-40"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 space-y-16">
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30">
            <span className="text-sm font-medium text-primary">Flexible Plans</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-foreground">
            Transparent Pricing for Every Stage
          </h2>
          <p className="text-xl text-muted-foreground">
            Start free. Scale up whenever you're ready. No hidden fees.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, i) => (
            <div 
              key={i} 
              className={`relative group transition-all duration-500 ${
                plan.highlighted ? 'md:scale-105 md:z-10' : ''
              }`}
            >
              {/* Glow effect for highlighted */}
              {plan.highlighted && (
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              )}
              
              <div className={`relative h-full p-8 rounded-2xl backdrop-blur-xl transition-all duration-500 flex flex-col ${
                plan.highlighted 
                  ? 'bg-gradient-to-br from-card/80 to-card/40 border-2 border-primary/60 shadow-2xl shadow-primary/20' 
                  : 'bg-card/50 border border-primary/20 hover:border-primary/50'
              }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-primary to-accent text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg shadow-primary/30">
                      ⭐ Most Popular
                    </div>
                  </div>
                )}

                <div className="space-y-8 flex-1">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">{plan.name}</h3>
                    <p className="text-sm text-muted-foreground mt-2">{plan.description}</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-baseline gap-1">
                      <span className="text-5xl font-bold text-foreground">{plan.price}</span>
                      {plan.period && <span className="text-muted-foreground text-lg">{plan.period}</span>}
                    </div>
                  </div>

                  <Button 
                    className={`w-full py-6 text-base font-semibold transition-all duration-300 ${
                      plan.highlighted
                        ? 'bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/40 text-white'
                        : 'border border-primary/30 hover:border-primary/60 text-foreground hover:bg-primary/10'
                    }`}
                    size="lg"
                  >
                    Get Started
                  </Button>

                  <div className="space-y-3 border-t border-primary/10 pt-8">
                    {plan.features.map((feature, j) => (
                      <div key={j} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center space-y-4 pt-8 border-t border-primary/10">
          <p className="text-lg text-muted-foreground">
            Start free, upgrade anytime. All plans include 14-day free trial. No credit card required.
          </p>
          <p className="text-sm text-muted-foreground">
            Have questions? <a href="#" className="text-primary hover:text-accent transition">Contact our sales team</a>
          </p>
        </div>
      </div>
    </section>
  )
}
