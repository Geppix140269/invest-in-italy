import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Building2,
  TrendingUp,
  Users,
  Globe,
  Award,
  Calculator,
  FileText,
  Mail,
  ArrowRight,
  CheckCircle2
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen smooth-scroll">
      {/* Header/Navigation */}
      <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
        <nav className="container-elegant py-4 md:py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <Globe className="h-6 w-6 text-accent" />
              <span className="font-display text-xl font-semibold">Invest in Italy</span>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <Link href="#services" className="text-sm font-medium hover:text-accent transition-colors">
                Services
              </Link>
              <Link href="#about" className="text-sm font-medium hover:text-accent transition-colors">
                About
              </Link>
              <Link href="#insights" className="text-sm font-medium hover:text-accent transition-colors">
                Insights
              </Link>
              <Link href="#tools" className="text-sm font-medium hover:text-accent transition-colors">
                Tools
              </Link>
              <Link href="#contact">
                <Button className="bg-primary hover:bg-primary/90">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="container-elegant">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-accent/10 text-accent hover:bg-accent/20 border-accent/20">
              Your Gateway to Italian Investment Opportunities
            </Badge>

            <h1 className="heading-display mb-6 text-balance">
              Unlock Exceptional Investment Opportunities in Italy
            </h1>

            <p className="prose-elegant max-w-2xl mx-auto mb-10">
              Leverage decades of international executive experience and exclusive
              connections to navigate the Italian market with confidence. From real
              estate to business development, we transform your investment vision into reality.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
                  Schedule a Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="#services">
                <Button size="lg" variant="outline" className="text-lg px-8">
                  Explore Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-secondary/30 border-y border-border">
        <div className="container-elegant">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-display font-semibold text-accent mb-2">20+</div>
              <p className="text-sm text-muted-foreground">Years Experience</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-display font-semibold text-accent mb-2">€500M+</div>
              <p className="text-sm text-muted-foreground">Investments Facilitated</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-display font-semibold text-accent mb-2">150+</div>
              <p className="text-sm text-muted-foreground">Successful Projects</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-display font-semibold text-accent mb-2">35+</div>
              <p className="text-sm text-muted-foreground">Countries Served</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding">
        <div className="container-elegant">
          <div className="max-w-3xl mb-16">
            <Badge className="mb-4 bg-accent/10 text-accent hover:bg-accent/20 border-accent/20">
              Our Services
            </Badge>
            <h2 className="heading-section mb-6">
              Comprehensive Investment Solutions
            </h2>
            <p className="prose-elegant">
              From identifying opportunities to closing deals, we provide end-to-end
              support for your Italian investment journey.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Real Estate */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-accent/50">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <Building2 className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="font-display text-2xl">Real Estate Investment</CardTitle>
                <CardDescription className="text-base">
                  Premium properties in Italy&apos;s most sought-after locations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-accent mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Luxury residential & commercial properties</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-accent mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Investment property analysis & due diligence</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-accent mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Property management solutions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-accent mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Legal & tax optimization</span>
                  </li>
                </ul>
                <Button className="w-full mt-6 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            {/* Business Development */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-accent/50">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <TrendingUp className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="font-display text-2xl">Business Development</CardTitle>
                <CardDescription className="text-base">
                  Strategic guidance for market entry and expansion
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-accent mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Market entry strategy & feasibility studies</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-accent mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Partnership & acquisition opportunities</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-accent mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">SME investment advisory</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-accent mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Government incentives & funding programs</span>
                  </li>
                </ul>
                <Button className="w-full mt-6 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            {/* Management Consulting */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-accent/50">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="font-display text-2xl">Management Expertise</CardTitle>
                <CardDescription className="text-base">
                  Executive leadership for your Italian operations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-accent mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Operational strategy & optimization</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-accent mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Cross-cultural management consulting</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-accent mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Interim executive services</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-accent mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Performance improvement programs</span>
                  </li>
                </ul>
                <Button className="w-full mt-6 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About/Credentials Section */}
      <section id="about" className="section-padding bg-secondary/20">
        <div className="container-elegant">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="mb-4 bg-accent/10 text-accent hover:bg-accent/20 border-accent/20">
                Your Trusted Advisor
              </Badge>
              <h2 className="heading-section mb-6">
                Experience That Transforms Opportunities
              </h2>
              <p className="prose-elegant mb-6">
                With decades of international executive experience and deep roots in
                the Italian business ecosystem, I bring unparalleled expertise to your
                investment journey.
              </p>
              <p className="prose-elegant mb-8">
                My unique position as a member of both the Italian Association of Small
                and Medium Enterprises and the International Trade Council (ITC) provides
                exclusive access to opportunities and insights unavailable elsewhere.
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <Award className="h-6 w-6 text-accent mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">International Executive Background</h3>
                    <p className="text-sm text-muted-foreground">
                      20+ years leading multinational teams across Europe, Asia, and the Americas
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Award className="h-6 w-6 text-accent mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Italian SME Association Member</h3>
                    <p className="text-sm text-muted-foreground">
                      Direct connections to Italy&apos;s thriving small and medium enterprise sector
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Award className="h-6 w-6 text-accent mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">International Trade Council</h3>
                    <p className="text-sm text-muted-foreground">
                      Global network facilitating cross-border investments and partnerships
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="border-2 border-accent/20">
                <CardHeader>
                  <CardTitle className="font-display text-xl">Why Italy?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-sm">
                  <p>
                    Italy offers a unique combination of world-class lifestyle, strategic
                    EU market access, and exceptional investment opportunities across multiple sectors.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <ArrowRight className="h-4 w-4 text-accent mr-2 flex-shrink-0 mt-0.5" />
                      <span>3rd largest economy in the Eurozone</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-4 w-4 text-accent mr-2 flex-shrink-0 mt-0.5" />
                      <span>Gateway to Mediterranean and EU markets</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-4 w-4 text-accent mr-2 flex-shrink-0 mt-0.5" />
                      <span>World-leading sectors: fashion, design, automotive, food</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-4 w-4 text-accent mr-2 flex-shrink-0 mt-0.5" />
                      <span>Attractive investment incentives and tax benefits</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-4 w-4 text-accent mr-2 flex-shrink-0 mt-0.5" />
                      <span>Unparalleled quality of life and cultural heritage</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Insights/Blog Preview Section */}
      <section id="insights" className="section-padding">
        <div className="container-elegant">
          <div className="flex items-end justify-between mb-12">
            <div>
              <Badge className="mb-4 bg-accent/10 text-accent hover:bg-accent/20 border-accent/20">
                Latest Insights
              </Badge>
              <h2 className="heading-section">
                Investment Intelligence
              </h2>
            </div>
            <Link href="/insights">
              <Button variant="outline">
                View All Articles
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <Badge className="w-fit mb-3">Real Estate</Badge>
                <CardTitle className="font-display text-xl group-hover:text-accent transition-colors">
                  Italian Property Market Trends 2024
                </CardTitle>
                <CardDescription>
                  Analyzing the post-pandemic recovery and emerging opportunities in
                  key Italian cities.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/insights/property-trends-2024">
                  <Button variant="ghost" className="group-hover:text-accent p-0">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <Badge className="w-fit mb-3">Business</Badge>
                <CardTitle className="font-display text-xl group-hover:text-accent transition-colors">
                  Navigating Italian Business Culture
                </CardTitle>
                <CardDescription>
                  Essential insights for foreign investors entering the Italian market.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/insights/business-culture">
                  <Button variant="ghost" className="group-hover:text-accent p-0">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <Badge className="w-fit mb-3">Tax & Legal</Badge>
                <CardTitle className="font-display text-xl group-hover:text-accent transition-colors">
                  Tax Incentives for Foreign Investors
                </CardTitle>
                <CardDescription>
                  Understanding Italy&apos;s favorable tax regimes and investment incentives.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/insights/tax-incentives">
                  <Button variant="ghost" className="group-hover:text-accent p-0">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section id="tools" className="section-padding bg-primary text-primary-foreground">
        <div className="container-elegant">
          <div className="max-w-3xl mb-12">
            <Badge className="mb-4 bg-accent text-accent-foreground hover:bg-accent/90">
              Investment Tools
            </Badge>
            <h2 className="heading-section mb-6">
              Make Informed Decisions
            </h2>
            <p className="text-lg leading-relaxed opacity-90">
              Access our suite of tools designed to help you evaluate and plan your
              Italian investment strategy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-card/5 backdrop-blur border-primary-foreground/20 text-primary-foreground hover:bg-card/10 transition-colors">
              <CardHeader>
                <Calculator className="h-8 w-8 mb-3 text-accent" />
                <CardTitle className="font-display text-xl">ROI Calculator</CardTitle>
                <CardDescription className="text-primary-foreground/80">
                  Estimate potential returns on Italian real estate and business investments
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="border-primary-foreground/30 hover:bg-primary-foreground hover:text-primary">
                  Launch Calculator
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-card/5 backdrop-blur border-primary-foreground/20 text-primary-foreground hover:bg-card/10 transition-colors">
              <CardHeader>
                <FileText className="h-8 w-8 mb-3 text-accent" />
                <CardTitle className="font-display text-xl">Investment Guide</CardTitle>
                <CardDescription className="text-primary-foreground/80">
                  Download our comprehensive guide to investing in Italy
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="border-primary-foreground/30 hover:bg-primary-foreground hover:text-primary">
                  Download Guide
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section-padding bg-secondary/20">
        <div className="container-elegant">
          <div className="max-w-2xl mx-auto text-center">
            <Mail className="h-12 w-12 text-accent mx-auto mb-6" />
            <h2 className="heading-section mb-4">
              Stay Informed
            </h2>
            <p className="prose-elegant mb-8">
              Receive exclusive insights, market updates, and investment opportunities
              directly to your inbox.
            </p>

            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Your email address"
                className="flex-1"
              />
              <Button type="submit" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Subscribe
              </Button>
            </form>

            <p className="text-xs text-muted-foreground mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding">
        <div className="container-elegant">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <Badge className="mb-4 bg-accent/10 text-accent hover:bg-accent/20 border-accent/20">
                Get in Touch
              </Badge>
              <h2 className="heading-section mb-6">
                Start Your Investment Journey
              </h2>
              <p className="prose-elegant mb-8">
                Whether you&apos;re exploring opportunities or ready to invest, I&apos;m here
                to provide personalized guidance tailored to your goals.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">What to Expect</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-4 w-4 text-accent mr-2 flex-shrink-0 mt-0.5" />
                      <span>Initial consultation within 24 hours</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-4 w-4 text-accent mr-2 flex-shrink-0 mt-0.5" />
                      <span>Confidential discussion of your investment goals</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-4 w-4 text-accent mr-2 flex-shrink-0 mt-0.5" />
                      <span>Customized strategy recommendations</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-4 w-4 text-accent mr-2 flex-shrink-0 mt-0.5" />
                      <span>No obligation, complimentary initial assessment</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <Card className="border-2 border-accent/20">
              <CardHeader>
                <CardTitle className="font-display text-2xl">Request a Consultation</CardTitle>
                <CardDescription>
                  Fill out the form below and I&apos;ll get back to you promptly.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john@example.com" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone (Optional)</Label>
                    <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="interest">Area of Interest</Label>
                    <select
                      id="interest"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <option>Real Estate Investment</option>
                      <option>Business Development</option>
                      <option>Management Consulting</option>
                      <option>General Inquiry</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell me about your investment goals and timeline..."
                      rows={5}
                    />
                  </div>

                  <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-secondary/10">
        <div className="container-elegant py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <Globe className="h-6 w-6 text-accent" />
                <span className="font-display text-xl font-semibold">Invest in Italy</span>
              </Link>
              <p className="text-sm text-muted-foreground max-w-md">
                Expert guidance for foreign investors seeking opportunities in Italy&apos;s
                dynamic market. Backed by decades of international experience and exclusive
                industry connections.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="#services" className="hover:text-accent transition-colors">Real Estate</Link></li>
                <li><Link href="#services" className="hover:text-accent transition-colors">Business Development</Link></li>
                <li><Link href="#services" className="hover:text-accent transition-colors">Management Consulting</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="#insights" className="hover:text-accent transition-colors">Insights</Link></li>
                <li><Link href="#tools" className="hover:text-accent transition-colors">Investment Tools</Link></li>
                <li><Link href="#about" className="hover:text-accent transition-colors">About</Link></li>
                <li><Link href="#contact" className="hover:text-accent transition-colors">Contact</Link></li>
              </ul>
            </div>
          </div>

          <Separator className="my-8" />

          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>&copy; 2024 Invest in Italy. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="/privacy" className="hover:text-accent transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-accent transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
