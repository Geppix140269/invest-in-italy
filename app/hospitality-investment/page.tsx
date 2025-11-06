import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Globe,
  Hotel,
  TrendingUp,
  MapPin,
  Users,
  DollarSign,
  CheckCircle2,
  ArrowRight,
  Wine,
  Palmtree,
  Home,
  Star
} from "lucide-react";

export default function HospitalityInvestmentPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
        <nav className="container-elegant py-4 md:py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <Globe className="h-6 w-6 text-accent" />
              <span className="font-display text-xl font-semibold">Invest in Italy</span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/services" className="text-sm font-medium hover:text-accent transition-colors">
                Services
              </Link>
              <Link href="/tax-benefits" className="text-sm font-medium hover:text-accent transition-colors">
                Tax Benefits
              </Link>
              <Link href="/#contact">
                <Button className="bg-primary hover:bg-primary/90">Get Started</Button>
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-accent/5 to-background">
        <div className="container-elegant">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-accent/10 text-accent hover:bg-accent/20 border-accent/20">
              Hospitality Real Estate
            </Badge>
            <h1 className="heading-display mb-6">
              Italy's Booming Hospitality Investment Market
            </h1>
            <p className="prose-elegant max-w-2xl mx-auto mb-8">
              Capitalize on record tourism numbers and strong yields in one of the world's
              most desirable destinations. From boutique hotels to luxury vacation rentals,
              discover opportunities that combine lifestyle with exceptional returns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#opportunities">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  View Opportunities
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="#contact">
                <Button size="lg" variant="outline">
                  Schedule Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Market Overview */}
      <section className="section-padding">
        <div className="container-elegant">
          <div className="grid md:grid-cols-4 gap-8 text-center mb-16">
            <div>
              <div className="text-3xl md:text-4xl font-display font-semibold text-accent mb-2">94M+</div>
              <p className="text-sm text-muted-foreground">Annual Tourists</p>
              <p className="text-xs text-muted-foreground mt-1">(Pre-pandemic record)</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-display font-semibold text-accent mb-2">8-12%</div>
              <p className="text-sm text-muted-foreground">Average Annual Yields</p>
              <p className="text-xs text-muted-foreground mt-1">(Vacation rentals)</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-display font-semibold text-accent mb-2">€2.4B</div>
              <p className="text-sm text-muted-foreground">Foreign Investment</p>
              <p className="text-xs text-muted-foreground mt-1">(2023)</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-display font-semibold text-accent mb-2">#5</div>
              <p className="text-sm text-muted-foreground">Global Tourism Rank</p>
              <p className="text-xs text-muted-foreground mt-1">(UNWTO)</p>
            </div>
          </div>

          <Card className="bg-primary text-primary-foreground">
            <CardHeader>
              <CardTitle className="font-display text-2xl">Why Now is the Perfect Time</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h3 className="font-semibold mb-2">Post-Pandemic Recovery</h3>
                  <p className="text-sm opacity-90">
                    Tourism has fully recovered, with 2023 exceeding 2019 levels. Strong demand continues.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Undervalued Assets</h3>
                  <p className="text-sm opacity-90">
                    Many properties still priced below 2008 peaks, offering exceptional value.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Favorable Regulations</h3>
                  <p className="text-sm opacity-90">
                    New legislation supports short-term rentals and hospitality investments.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Investment Opportunities */}
      <section id="opportunities" className="section-padding bg-secondary/20">
        <div className="container-elegant">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="heading-section mb-4">Investment Opportunities</h2>
            <p className="prose-elegant">
              Diverse options to match your investment strategy and return objectives
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Boutique Hotels */}
            <Card className="hover:shadow-xl transition-all">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Hotel className="h-12 w-12 text-accent" />
                  <Badge className="bg-accent text-accent-foreground">Premium Returns</Badge>
                </div>
                <CardTitle className="font-display text-2xl">Boutique Hotels & B&Bs</CardTitle>
                <CardDescription className="text-base">
                  Small luxury properties with unique character and high occupancy rates
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6 p-4 bg-accent/5 rounded-lg border border-accent/20">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="font-semibold mb-1">Investment Range</div>
                      <div className="text-accent">€500K - €5M</div>
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Expected Yield</div>
                      <div className="text-accent">8-15% annually</div>
                    </div>
                  </div>
                </div>

                <h4 className="font-semibold mb-3">Key Features:</h4>
                <ul className="space-y-2 text-sm mb-6">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-accent mr-2 flex-shrink-0 mt-0.5" />
                    <span>8-20 rooms in historic buildings or restored villas</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-accent mr-2 flex-shrink-0 mt-0.5" />
                    <span>Prime locations: Tuscany, Amalfi Coast, Lake Como, Rome</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-accent mr-2 flex-shrink-0 mt-0.5" />
                    <span>Turnkey or development opportunities</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-accent mr-2 flex-shrink-0 mt-0.5" />
                    <span>Management contracts available</span>
                  </li>
                </ul>

                <h4 className="font-semibold mb-3">Success Factors:</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <Star className="h-4 w-4 text-accent mr-2 flex-shrink-0 mt-0.5" />
                    <span>Strong brand/online presence drives bookings</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="h-4 w-4 text-accent mr-2 flex-shrink-0 mt-0.5" />
                    <span>Authentic Italian experience with modern amenities</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="h-4 w-4 text-accent mr-2 flex-shrink-0 mt-0.5" />
                    <span>Extended season through events/wellness offerings</span>
                  </li>
                </ul>

                <Link href="#contact">
                  <Button className="w-full mt-6">
                    View Available Properties
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Vacation Rentals */}
            <Card className="hover:shadow-xl transition-all">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Home className="h-12 w-12 text-accent" />
                  <Badge className="bg-green-100 text-green-800 border-green-300">High Yield</Badge>
                </div>
                <CardTitle className="font-display text-2xl">Luxury Vacation Rentals</CardTitle>
                <CardDescription className="text-base">
                  High-end villas and apartments for short-term luxury stays
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6 p-4 bg-accent/5 rounded-lg border border-accent/20">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="font-semibold mb-1">Investment Range</div>
                      <div className="text-accent">€300K - €3M</div>
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Expected Yield</div>
                      <div className="text-accent">10-18% annually</div>
                    </div>
                  </div>
                </div>

                <h4 className="font-semibold mb-3">Key Features:</h4>
                <ul className="space-y-2 text-sm mb-6">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-accent mr-2 flex-shrink-0 mt-0.5" />
                    <span>3-6 bedroom luxury properties</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-accent mr-2 flex-shrink-0 mt-0.5" />
                    <span>Pool, views, and premium amenities</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-accent mr-2 flex-shrink-0 mt-0.5" />
                    <span>Weekly rentals at €3K-€20K per week</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-accent mr-2 flex-shrink-0 mt-0.5" />
                    <span>Personal use 4-8 weeks per year</span>
                  </li>
                </ul>

                <h4 className="font-semibold mb-3">Popular Markets:</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <MapPin className="h-4 w-4 text-accent mr-2 flex-shrink-0 mt-0.5" />
                    <span><strong>Tuscany:</strong> Countryside villas, wine estates</span>
                  </li>
                  <li className="flex items-start">
                    <MapPin className="h-4 w-4 text-accent mr-2 flex-shrink-0 mt-0.5" />
                    <span><strong>Amalfi/Capri:</strong> Coastal properties with sea views</span>
                  </li>
                  <li className="flex items-start">
                    <MapPin className="h-4 w-4 text-accent mr-2 flex-shrink-0 mt-0.5" />
                    <span><strong>Lakes:</strong> Como, Maggiore, Garda waterfront homes</span>
                  </li>
                </ul>

                <Link href="#contact">
                  <Button className="w-full mt-6">
                    Browse Rental Properties
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Agriturismos */}
            <Card className="hover:shadow-xl transition-all">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Wine className="h-12 w-12 text-accent" />
                  <Badge>Government Incentives</Badge>
                </div>
                <CardTitle className="font-display text-2xl">Agriturismos & Wine Estates</CardTitle>
                <CardDescription className="text-base">
                  Farm-stay properties combining agriculture, hospitality, and lifestyle
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6 p-4 bg-accent/5 rounded-lg border border-accent/20">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="font-semibold mb-1">Investment Range</div>
                      <div className="text-accent">€400K - €10M</div>
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Expected Yield</div>
                      <div className="text-accent">6-12% annually</div>
                    </div>
                  </div>
                </div>

                <h4 className="font-semibold mb-3">Key Features:</h4>
                <ul className="space-y-2 text-sm mb-6">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-accent mr-2 flex-shrink-0 mt-0.5" />
                    <span>Working farms with guest accommodation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-accent mr-2 flex-shrink-0 mt-0.5" />
                    <span>Vineyards, olive groves, or specialty crops</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-accent mr-2 flex-shrink-0 mt-0.5" />
                    <span>Multiple revenue streams (rooms + products + experiences)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-accent mr-2 flex-shrink-0 mt-0.5" />
                    <span>EU and regional agricultural subsidies available</span>
                  </li>
                </ul>

                <div className="p-4 bg-green-50 rounded-lg border border-green-200 mb-4">
                  <h4 className="font-semibold mb-2 text-green-900">Special Benefits:</h4>
                  <ul className="space-y-1 text-sm text-green-800">
                    <li>• Lower property taxes for agricultural use</li>
                    <li>• EU Common Agricultural Policy subsidies</li>
                    <li>• Organic farming grants and certifications</li>
                    <li>• Tourism development funds</li>
                  </ul>
                </div>

                <Link href="#contact">
                  <Button className="w-full">
                    Explore Wine Estates
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Wellness Retreats */}
            <Card className="hover:shadow-xl transition-all">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Palmtree className="h-12 w-12 text-accent" />
                  <Badge>Emerging Sector</Badge>
                </div>
                <CardTitle className="font-display text-2xl">Wellness & Lifestyle Retreats</CardTitle>
                <CardDescription className="text-base">
                  Capitalize on the booming wellness tourism trend
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6 p-4 bg-accent/5 rounded-lg border border-accent/20">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="font-semibold mb-1">Investment Range</div>
                      <div className="text-accent">€600K - €8M</div>
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Expected Yield</div>
                      <div className="text-accent">12-20% annually</div>
                    </div>
                  </div>
                </div>

                <h4 className="font-semibold mb-3">Opportunities:</h4>
                <ul className="space-y-2 text-sm mb-6">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-accent mr-2 flex-shrink-0 mt-0.5" />
                    <span>Yoga and meditation retreats</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-accent mr-2 flex-shrink-0 mt-0.5" />
                    <span>Thermal spa properties (Italy has 350+ thermal springs)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-accent mr-2 flex-shrink-0 mt-0.5" />
                    <span>Detox and wellness centers</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-accent mr-2 flex-shrink-0 mt-0.5" />
                    <span>Eco-resorts and sustainable properties</span>
                  </li>
                </ul>

                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200 mb-4">
                  <h4 className="font-semibold mb-2 text-blue-900">Market Trend:</h4>
                  <p className="text-sm text-blue-800">
                    Global wellness tourism growing at 21% annually. Italy's wellness market
                    reached €15B in 2023, with strong international demand.
                  </p>
                </div>

                <Link href="#contact">
                  <Button className="w-full">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Financial Projections */}
      <section className="section-padding">
        <div className="container-elegant">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="heading-section mb-4">Sample Investment Analysis</h2>
            <p className="prose-elegant">
              Typical returns for a Tuscan vacation rental property
            </p>
          </div>

          <Card className="max-w-4xl mx-auto">
            <CardContent className="pt-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-display text-xl font-semibold mb-6">Investment Details</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-secondary/30 rounded">
                      <span className="text-sm font-medium">Property Purchase:</span>
                      <span className="font-semibold">€800,000</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-secondary/30 rounded">
                      <span className="text-sm font-medium">Renovation:</span>
                      <span className="font-semibold">€150,000</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-secondary/30 rounded">
                      <span className="text-sm font-medium">Furnishing & Setup:</span>
                      <span className="font-semibold">€50,000</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-accent/10 rounded border border-accent/30">
                      <span className="font-semibold">Total Investment:</span>
                      <span className="font-bold text-lg">€1,000,000</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-display text-xl font-semibold mb-6">Annual Returns (Year 1)</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-green-50 rounded">
                      <span className="text-sm font-medium">Rental Income (30 weeks):</span>
                      <span className="font-semibold text-green-700">€150,000</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-secondary/30 rounded">
                      <span className="text-sm font-medium">Operating Costs:</span>
                      <span className="font-semibold">-€30,000</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-secondary/30 rounded">
                      <span className="text-sm font-medium">Property Management (15%):</span>
                      <span className="font-semibold">-€22,500</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-accent/10 rounded border border-accent/30">
                      <span className="font-semibold">Net Annual Income:</span>
                      <span className="font-bold text-lg text-accent">€97,500</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-primary text-primary-foreground rounded">
                      <span className="font-bold">Annual Yield:</span>
                      <span className="font-bold text-2xl">9.75%</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-accent/5 rounded-lg border border-accent/20">
                <h4 className="font-semibold mb-3">Additional Benefits:</h4>
                <ul className="grid md:grid-cols-2 gap-3 text-sm">
                  <li className="flex items-start">
                    <TrendingUp className="h-4 w-4 text-accent mr-2 flex-shrink-0 mt-0.5" />
                    <span>Property appreciation: 3-5% annually</span>
                  </li>
                  <li className="flex items-start">
                    <TrendingUp className="h-4 w-4 text-accent mr-2 flex-shrink-0 mt-0.5" />
                    <span>Personal use: 4-6 weeks per year</span>
                  </li>
                  <li className="flex items-start">
                    <TrendingUp className="h-4 w-4 text-accent mr-2 flex-shrink-0 mt-0.5" />
                    <span>Renovation tax credits: up to 50%</span>
                  </li>
                  <li className="flex items-start">
                    <TrendingUp className="h-4 w-4 text-accent mr-2 flex-shrink-0 mt-0.5" />
                    <span>Growing market demand</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Our Services */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-elegant">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="heading-section mb-4">How We Support Your Hospitality Investment</h2>
            <p className="text-lg leading-relaxed opacity-90">
              End-to-end guidance from property search to profitable operations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-card/10 backdrop-blur border-primary-foreground/20 text-primary-foreground">
              <CardHeader>
                <MapPin className="h-10 w-10 text-accent mb-3" />
                <CardTitle className="font-display text-lg">Property Sourcing</CardTitle>
              </CardHeader>
              <CardContent className="text-sm opacity-90">
                <ul className="space-y-2">
                  <li>• Access to off-market opportunities</li>
                  <li>• Detailed market analysis by region</li>
                  <li>• Property inspections and due diligence</li>
                  <li>• Negotiation and purchase support</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card/10 backdrop-blur border-primary-foreground/20 text-primary-foreground">
              <CardHeader>
                <DollarSign className="h-10 w-10 text-accent mb-3" />
                <CardTitle className="font-display text-lg">Financial Structuring</CardTitle>
              </CardHeader>
              <CardContent className="text-sm opacity-90">
                <ul className="space-y-2">
                  <li>• Tax optimization strategies</li>
                  <li>• Financing and mortgage arrangements</li>
                  <li>• ROI and cash flow projections</li>
                  <li>• Exit strategy planning</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card/10 backdrop-blur border-primary-foreground/20 text-primary-foreground">
              <CardHeader>
                <Users className="h-10 w-10 text-accent mb-3" />
                <CardTitle className="font-display text-lg">Operations Setup</CardTitle>
              </CardHeader>
              <CardContent className="text-sm opacity-90">
                <ul className="space-y-2">
                  <li>• Licensing and permits</li>
                  <li>• Property management referrals</li>
                  <li>• Marketing and booking systems</li>
                  <li>• Staff recruitment support</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="section-padding">
        <div className="container-elegant">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="heading-section mb-6">Ready to Explore Hospitality Investments?</h2>
            <p className="prose-elegant mb-8">
              Schedule a consultation to review current opportunities and develop
              your personalized investment strategy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#contact">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  Schedule Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline">
                  View All Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-secondary/10 py-8">
        <div className="container-elegant text-center">
          <Link href="/" className="inline-flex items-center space-x-2 mb-4">
            <Globe className="h-6 w-6 text-accent" />
            <span className="font-display text-xl font-semibold">Invest in Italy</span>
          </Link>
          <p className="text-sm text-muted-foreground">
            &copy; 2024 Invest in Italy. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
