import { Card } from '@/components/ui/card'
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { DollarSign, TrendingUp, Clock, CheckCircle2 } from 'lucide-react'

const chartData = [
  { month: 'Jan', earnings: 4000 },
  { month: 'Feb', earnings: 5200 },
  { month: 'Mar', earnings: 6800 },
  { month: 'Apr', earnings: 7200 },
  { month: 'May', earnings: 8100 },
  { month: 'Jun', earnings: 9400 }
]

export default function Dashboard() {
  return (
    <section className="relative min-h-screen py-24 px-6 bg-background overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-40"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 space-y-16">
        <div className="text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30">
            <span className="text-sm font-medium text-accent">Dashboard</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-foreground text-balance">
            Your Command Center
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real-time insights and full control over your freelance business in one powerful dashboard
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { icon: DollarSign, label: 'Total Earnings', value: '$24,500', change: '+12.5%', color: 'primary' },
            { icon: TrendingUp, label: 'Monthly Revenue', value: '$9,400', change: '+8.2%', color: 'accent' },
            { icon: Clock, label: 'Pending', value: '$3,200', change: '2 invoices', color: 'primary' },
            { icon: CheckCircle2, label: 'Completed', value: '28 projects', change: '100% on-time', color: 'accent' }
          ].map((stat, i) => {
            const Icon = stat.icon
            return (
              <div key={i} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative p-6 border border-primary/20 rounded-2xl bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-lg ${stat.color === 'accent' ? 'bg-accent/20 text-accent' : 'bg-primary/20 text-primary'}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{stat.label}</p>
                  <p className="text-3xl font-bold text-foreground mb-2">{stat.value}</p>
                  <p className={`text-xs font-semibold ${stat.color === 'accent' ? 'text-accent' : 'text-primary'}`}>{stat.change}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Charts */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Line Chart */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative p-8 border border-primary/20 rounded-2xl bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
              <h3 className="text-lg font-semibold text-foreground mb-8">Earnings Trend</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--primary)" opacity={0.1} />
                  <XAxis dataKey="month" stroke="var(--muted-foreground)" />
                  <YAxis stroke="var(--muted-foreground)" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'var(--card)',
                      border: '1px solid var(--primary)',
                      borderRadius: '8px',
                      boxShadow: '0 8px 16px rgba(0,0,0,0.3)'
                    }}
                    formatter={(value) => `$${value}`}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="earnings" 
                    stroke="var(--primary)"
                    strokeWidth={3}
                    dot={{ fill: 'var(--primary)', r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Recent Invoices */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative p-8 border border-accent/20 rounded-2xl bg-card/50 backdrop-blur-sm hover:border-accent/50 transition-all duration-300">
              <h3 className="text-lg font-semibold text-foreground mb-8">Recent Invoices</h3>
              <div className="space-y-3">
                {[
                  { client: 'Tech Startup Inc', amount: '$2,500', status: 'Paid', date: 'Mar 10' },
                  { client: 'Design Agency Co', amount: '$1,800', status: 'Pending', date: 'Mar 15' },
                  { client: 'E-commerce Store', amount: '$3,200', status: 'Overdue', date: 'Feb 28' },
                  { client: 'Marketing Firm', amount: '$950', status: 'Paid', date: 'Mar 5' }
                ].map((invoice, i) => (
                  <div key={i} className="flex items-center justify-between p-4 rounded-lg bg-primary/5 border border-primary/10 hover:border-primary/30 transition-all duration-300">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground">{invoice.client}</p>
                      <p className="text-xs text-muted-foreground mt-1">{invoice.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-semibold text-foreground">{invoice.amount}</p>
                      <p className={`text-xs font-bold mt-1 ${
                        invoice.status === 'Paid' ? 'text-green-500' :
                        invoice.status === 'Pending' ? 'text-yellow-500' :
                        'text-red-500'
                      }`}>
                        {invoice.status}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
