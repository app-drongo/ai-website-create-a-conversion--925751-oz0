import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Zap, 
  Shield, 
  Smartphone, 
  Globe, 
  BarChart3, 
  Palette,
  Code2,
  Headphones,
  Blocks,
  Workflow,
  Database,
  Rocket
} from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: Blocks,
      title: "Visual Builder",
      description: "Drag-and-drop interface to build complex applications without writing a single line of code.",
      badge: "No-Code"
    },
    {
      icon: Zap,
      title: "Rapid Deployment",
      description: "Launch your MVP in days, not months. Get to market faster than your competition.",
      badge: "Speed"
    },
    {
      icon: Workflow,
      title: "Smart Automation",
      description: "Automate business processes with intelligent workflows and trigger-based actions.",
      badge: "Automation"
    },
    {
      icon: Database,
      title: "Integrated Database",
      description: "Built-in database management with real-time sync and automatic backups.",
      badge: "Data"
    },
    {
      icon: Smartphone,
      title: "Mobile-Ready",
      description: "Every app is automatically optimized for mobile devices and progressive web apps.",
      badge: "Mobile"
    },
    {
      icon: BarChart3,
      title: "Business Analytics",
      description: "Track user behavior, conversion rates, and business metrics with built-in analytics.",
      badge: "Analytics"
    },
    {
      icon: Palette,
      title: "Brand Customization",
      description: "Complete control over design, branding, and user experience to match your vision.",
      badge: "Design"
    },
    {
      icon: Code2,
      title: "API Integrations",
      description: "Connect with 1000+ services including payment processors, CRMs, and marketing tools.",
      badge: "Integrations"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security with SSL encryption, user authentication, and data protection.",
      badge: "Security"
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Platform Features
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Everything Your Startup
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Needs to Scale
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            From idea to launch, Techo provides all the tools entrepreneurs need to build, 
            test, and grow their software products without technical barriers.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card 
                key={index} 
                className="group relative overflow-hidden border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <CardHeader className="relative">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="size-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="relative">
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-primary/20 transition-colors duration-300" />
              </Card>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Ready to turn your startup idea into reality?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors flex items-center justify-center gap-2">
              <Rocket className="size-4" />
              Launch Your MVP
            </button>
            <button className="px-6 py-3 border border-border rounded-lg font-medium hover:bg-accent transition-colors">
              Book Strategy Call
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}