'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'How do I get started with FreelanceHub?',
    answer: 'Sign up with your email, create your profile, and start adding clients and invoices. It takes less than 5 minutes to set up your first invoice.'
  },
  {
    question: 'Is my data safe and secure?',
    answer: 'Yes, we use bank-level encryption and secure servers to protect all your data. Your invoices and client information are completely private.'
  },
  {
    question: 'Can I integrate FreelanceHub with other tools?',
    answer: 'We support integrations with popular payment gateways, accounting software, and communication tools. More integrations coming soon.'
  },
  {
    question: 'Do you offer payment processing?',
    answer: 'We integrate with multiple payment gateways so your clients can pay you directly. You keep all your money minus standard payment processing fees.'
  },
  {
    question: 'What payment plans do you offer?',
    answer: 'We offer a free plan for getting started, plus affordable premium plans with more features for growing freelancers.'
  },
  {
    question: 'Do you provide customer support?',
    answer: 'Yes! We offer email support, documentation, and video tutorials. Premium members get priority support.'
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="relative py-32 px-6 bg-background overflow-hidden">
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-40"></div>
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-bold text-foreground mb-6">
            Frequently Asked
          </h2>
          <p className="text-lg text-muted-foreground">
            Find answers to common questions about FreelanceHub.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-primary/20 rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-6 py-5 flex items-center justify-between bg-card/50 hover:bg-card/70 transition-colors duration-200"
              >
                <span className="text-lg font-semibold text-foreground text-left">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-primary transition-transform duration-300 flex-shrink-0 ml-4 ${
                    openIndex === i ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openIndex === i && (
                <div className="px-6 py-5 bg-card/30 border-t border-primary/10">
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
