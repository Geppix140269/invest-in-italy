import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/navigation";
import { Logo } from "@/components/logo";
import {
  Building2,
  TrendingUp,
  Users,
  Home,
  Hotel,
  Palmtree,
  Wine,
  Sparkles,
  CheckCircle2,
  ArrowRight
} from "lucide-react";

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <Navigation variant="solid" />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container-elegant">
          <div className="max-w-3xl">
            <Badge className="mb-6 bg-accent/10 text-accent hover:bg-accent/20 border-accent/20">
              Our Services
            </Badge>
            <h1 className="heading-display mb-6">
              Comprehensive Investment Solutions
            </h1>
            <p className="prose-elegant">
              From identifying prime opportunities to closing deals and managing operations,
              we provide end-to-end support tailored to your investment goals.
            </p>
          </div>
        </div>
      </section>

      {/* Real Estate Services */}
      <section className="section-padding bg-secondary/20">
        <div className="container-elegant">
          <div className="max-w-3xl mb-12">
            <h2 className="heading-section mb-4">Real Estate Investment Services</h2>
            <p className="prose-elegant">
              Access Italy&apos;s most prestigious properties and emerging opportunities with
              expert guidance every step of the way.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Luxury Residential */}
            <Card className="group hover:shadow-lg transition-all">
              <CardHeader>
                <Home className="h-10 w-10 text-accent mb-4" />
                <CardTitle className="font-display text-xl">Luxury Residential</CardTitle>
                <CardDescription>
                  Premium villas, apartments, and estates in Italy&apos;s most sought-after locations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-accent mr-2 flex-shrink-0 mt-0.5" />
                    <span>Lake Como & Maggiore waterfront properties</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-accent mr-2 flex-shrink-0 mt-0.5" />
                    <span>Tuscany countryside estates</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-accent mr-2 flex-shrink-0 mt-0.5" />
                    <span>Historic city center apartments</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-accent mr-2 flex-shrink-0 mt-0.5" />
                    <span>Coastal properties (Amalfi, Liguria, Sardinia)</span>
                  </li>
                </ul>
                <Link href="#contact">
                  <Button className="w-full mt-6" variant="outline">
                    Explore Opportunities
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Hospitality Real Estate */}
            <Card className="group hover:shadow-lg transition-all border-2 border-accent/30">
              <CardHeader>
                <div className="flex items-center gap-2 mb-4">
                  <Hotel className="h-10 w-10 text-accent" />
                  <Badge className="bg-accent text-accent-foreground">High ROI</Badge>
                </div>
                <CardTitle className="font-display text-xl">Hospitality Properties</CardTitle>
                <CardDescription>
                  Income-generating hotels, B&Bs, and vacation rental properties
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-accent mr-2 flex-shrink-0 mt-0.5" />
                    <span>Boutique hotels & luxury B&Bs</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-accent mr-2 flex-shrink-0 mt-0.5" />
                    <span>Vacation rental portfolios</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-accent mr-2 flex-shrink-0 mt-0.5" />
                    <span>Agriturismos (farm stay properties)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-accent mr-2 flex-shrink-0 mt-0.5" />
                    <span>Historic property conversions</span>
                  </li>
                </ul>
                <Link href="/hospitality-investment">
                  <Button className="w-full mt-6 bg-accent hover:bg-accent/90 text-accent-foreground">
                    View Hospitality Guide
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Wellness & Lifestyle */}
            <Card className="group hover:shadow-lg transition-all">
              <CardHeader>
                <Palmtree className="h-10 w-10 text-accent mb-4" />
                <CardTitle className="font-display text-xl">Wellness & Lifestyle</CardTitle>
                <CardDescription>
                  Emerging opportunities in Italy&apos;s booming wellness tourism sector
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-accent mr-2 flex-shrink-0 mt-0.5" />
                    <span>Wellness retreats & spa properties</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-accent mr-2 flex-shrink-0 mt-0.5" />
                    <span>Yoga & meditation centers</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-accent mr-2 flex-shrink-0 mt-0.5" />
                    <span>Thermal spa developments</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-accent mr-2 flex-shrink-0 mt-0.5" />
                    <span>Luxury eco-resorts</span>
                  </li>
                </ul>
                <Link href="#contact">
                  <Button className="w-full mt-6" variant="outline">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Wine & Food Tourism */}
            <Card className="group hover:shadow-lg transition-all">
              <CardHeader>
                <Wine className="h-10 w-10 text-accent mb-4" />
                <CardTitle className="font-display text-xl">Wine & Food Tourism</CardTitle>
                <CardDescription>
                  Vineyards, wineries, and culinary tourism properties
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-accent mr-2 flex-shrink-0 mt-0.5" />
                    <span>Tuscan & Piedmont vineyards</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-accent mr-2 flex-shrink-0 mt-0.5" />
                    <span>Wine estate acquisitions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-accent mr-2 flex-shrink-0 mt-0.5" />
                    <span>Farm-to-table restaurants</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-accent mr-2 flex-shrink-0 mt-0.5" />
                    <span>Culinary experience centers</span>
                  </li>
                </ul>
                <Link href="#contact">
                  <Button className="w-full mt-6" variant="outline">
                    Explore Properties
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Commercial Real Estate */}
            <Card className="group hover:shadow-lg transition-all">
              <CardHeader>
                <Building2 className="h-10 w-10 text-accent mb-4" />
                <CardTitle className="font-display text-xl">Commercial Properties</CardTitle>
                <CardDescription>
                  Office buildings, retail spaces, and mixed-use developments
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-accent mr-2 flex-shrink-0 mt-0.5" />
                    <span>Prime Milan & Rome office buildings</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-accent mr-2 flex-shrink-0 mt-0.5" />
                    <span>Retail & shopping centers</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-accent mr-2 flex-shrink-0 mt-0.5" />
                    <span>Industrial & logistics facilities</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-accent mr-2 flex-shrink-0 mt-0.5" />
                    <span>Mixed-use developments</span>
                  </li>
                </ul>
                <Link href="#contact">
                  <Button className="w-full mt-6" variant="outline">
                    View Opportunities
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Renovation Projects */}
            <Card className="group hover:shadow-lg transition-all">
              <CardHeader>
                <Sparkles className="h-10 w-10 text-accent mb-4" />
                <CardTitle className="font-display text-xl">Renovation Projects</CardTitle>
                <CardDescription>
                  Historic properties with renovation tax incentives (up to 50% for 2025)
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-accent mr-2 flex-shrink-0 mt-0.5" />
                    <span>Historic villa restorations</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-accent mr-2 flex-shrink-0 mt-0.5" />
                    <span>Castle & monastery conversions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-accent mr-2 flex-shrink-0 mt-0.5" />
                    <span>Energy efficiency upgrades</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-accent mr-2 flex-shrink-0 mt-0.5" />
                    <span>Seismic safety improvements</span>
                  </li>
                </ul>
                <Link href="/tax-benefits#renovation">
                  <Button className="w-full mt-6" variant="outline">
                    Learn About Tax Incentives
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Business Investment Services */}
      <section className="section-padding">
        <div className="container-elegant">
          <div className="max-w-3xl mb-12">
            <h2 className="heading-section mb-4">Business Investment & M&A</h2>
            <p className="prose-elegant">
              Strategic guidance for acquiring, partnering with, or establishing businesses in Italy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-all">
              <CardHeader>
                <TrendingUp className="h-10 w-10 text-accent mb-4" />
                <CardTitle className="font-display text-2xl">SME Acquisitions</CardTitle>
                <CardDescription className="text-base">
                  Access Italy&apos;s thriving small and medium enterprise sector
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-accent mr-2 flex-shrink-0 mt-0.5" />
                    <span>Manufacturing & industrial companies</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-accent mr-2 flex-shrink-0 mt-0.5" />
                    <span>Technology & innovation firms</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-accent mr-2 flex-shrink-0 mt-0.5" />
                    <span>Food & beverage businesses</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-accent mr-2 flex-shrink-0 mt-0.5" />
                    <span>Family business succession opportunities</span>
                  </li>
                </ul>
                <div className="mt-6 p-4 bg-accent/5 rounded-lg border border-accent/20">
                  <p className="text-sm font-semibold mb-1">Exclusive Access</p>
                  <p className="text-xs text-muted-foreground">
                    Through our membership in the Italian SME Association, we provide direct access to
                    off-market opportunities not available through traditional channels.
                  </p>
                </div>
                <Link href="#contact">
                  <Button className="w-full mt-4">Schedule Consultation</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all">
              <CardHeader>
                <Users className="h-10 w-10 text-accent mb-4" />
                <CardTitle className="font-display text-2xl">Market Entry Strategy</CardTitle>
                <CardDescription className="text-base">
                  Establish and grow your operations in Italy
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-accent mr-2 flex-shrink-0 mt-0.5" />
                    <span>Market feasibility studies</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-accent mr-2 flex-shrink-0 mt-0.5" />
                    <span>Company formation & legal structure</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-accent mr-2 flex-shrink-0 mt-0.5" />
                    <span>Partnership identification & vetting</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-accent mr-2 flex-shrink-0 mt-0.5" />
                    <span>Government incentives navigation</span>
                  </li>
                </ul>
                <div className="mt-6 p-4 bg-accent/5 rounded-lg border border-accent/20">
                  <p className="text-sm font-semibold mb-1">International Trade Council Network</p>
                  <p className="text-xs text-muted-foreground">
                    Leverage global connections to facilitate cross-border partnerships
                    and supply chain development.
                  </p>
                </div>
                <Link href="#contact">
                  <Button className="w-full mt-4">Get Started</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tax Benefits CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-elegant">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-section mb-6">
              Maximize Returns with Italian Tax Benefits
            </h2>
            <p className="text-lg leading-relaxed opacity-90 mb-8 max-w-2xl mx-auto">
              Italy offers some of Europe&apos;s most attractive tax incentives for foreign investors,
              including special flat tax regimes (€200,000-€300,000), renovation tax credits up to 50%, and programs
              for new residents.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/tax-benefits">
                <Button size="lg" variant="outline" className="border-primary-foreground/30 hover:bg-primary-foreground hover:text-primary text-lg">
                  Explore Tax Benefits
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="#contact">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg">
                  Free Tax Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="section-padding">
        <div className="container-elegant">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="heading-section mb-6">Ready to Get Started?</h2>
            <p className="prose-elegant mb-8">
              Schedule a complimentary consultation to discuss your investment goals
              and explore opportunities tailored to your objectives.
            </p>
            <Link href="/#contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
                Schedule Free Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-secondary/10 py-8">
        <div className="container-elegant text-center">
          <div className="flex justify-center mb-4">
            <Logo width={40} height={40} />
          </div>
          <p className="text-sm text-muted-foreground">
            &copy; 2024 Capitaly Group. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
