import { Mail, Github, Linkedin, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-background via-card/30 to-background border-t border-primary/10 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">H</span>
              </div>
              <span className="font-bold text-lg text-foreground">FreelanceHub</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The all-in-one platform for freelancers to manage invoices, clients, and grow their business.
            </p>
            <div className="flex gap-4">
              <Twitter className="w-5 h-5 text-muted-foreground hover:text-primary transition duration-300 cursor-pointer" />
              <Linkedin className="w-5 h-5 text-muted-foreground hover:text-primary transition duration-300 cursor-pointer" />
              <Github className="w-5 h-5 text-muted-foreground hover:text-primary transition duration-300 cursor-pointer" />
              <Mail className="w-5 h-5 text-muted-foreground hover:text-primary transition duration-300 cursor-pointer" />
            </div>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#features" className="text-muted-foreground hover:text-primary transition duration-300">Features</a></li>
              <li><a href="#testimonials" className="text-muted-foreground hover:text-primary transition duration-300">Testimonials</a></li>
              <li><a href="#pricing" className="text-muted-foreground hover:text-primary transition duration-300">Pricing</a></li>
              <li><a href="#faq" className="text-muted-foreground hover:text-primary transition duration-300">FAQ</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition duration-300">About</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition duration-300">Blog</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition duration-300">Careers</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition duration-300">Contact</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition duration-300">Privacy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition duration-300">Terms</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition duration-300">Security</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition duration-300">Cookies</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 FreelancerOS. All rights reserved. Aligned with UN SDG 8.
            </p>
            <p className="text-sm text-muted-foreground">
              Made with passion for independent professionals worldwide
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
