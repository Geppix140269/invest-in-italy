import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Globe,
  Home,
  Shield,
  Calculator,
  FileText,
  CheckCircle2,
  ArrowRight,
  Euro,
  Percent,
  Award
} from "lucide-react";

export default function TaxBenefitsPage() {
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
              <Link href="/#about" className="text-sm font-medium hover:text-accent transition-colors">
                About
              </Link>
              <Link href="/tax-benefits" className="text-sm font-medium text-accent">
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
              Tax Advantages
            </Badge>
            <h1 className="heading-display mb-6">
              Italy&apos;s Exceptional Tax Benefits for Foreign Investors
            </h1>
            <p className="prose-elegant max-w-2xl mx-auto mb-8">
              Discover why Italy has become one of Europe&apos;s most tax-efficient destinations
              for international investors and high-net-worth individuals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#calculator">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  Calculate Your Savings
                  <Calculator className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="#contact">
                <Button size="lg" variant="outline">
                  Free Tax Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Tax Regimes */}
      <section className="section-padding">
        <div className="container-elegant">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-section mb-4">Major Tax Incentive Programs</h2>
            <p className="prose-elegant">
              Italy offers multiple tax regimes designed to attract foreign investment and talent
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Flat Tax Regime - Standard */}
            <Card className="border-2 border-accent/30 hover:shadow-xl transition-all">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Euro className="h-12 w-12 text-accent" />
                  <Badge className="bg-accent text-accent-foreground">Most Popular</Badge>
                </div>
                <CardTitle className="font-display text-2xl">Flat Tax Regime</CardTitle>
                <CardDescription className="text-base">
                  €100,000 per year flat tax on all foreign income
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="p-6 bg-accent/5 rounded-lg border-2 border-accent/20">
                  <div className="text-3xl font-display font-bold text-accent mb-2">€100,000/year</div>
                  <p className="text-sm text-muted-foreground">
                    Fixed annual tax on all foreign-sourced income, regardless of amount
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Key Benefits:</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-4 w-4 text-accent mr-2 flex-shrink-0 mt-0.5" />
                      <span>Unlimited foreign income tax-free (after flat tax)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-4 w-4 text-accent mr-2 flex-shrink-0 mt-0.5" />
                      <span>No wealth tax, inheritance tax, or gift tax on foreign assets</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-4 w-4 text-accent mr-2 flex-shrink-0 mt-0.5" />
                      <span>Option to extend to family members (€25k each)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-4 w-4 text-accent mr-2 flex-shrink-0 mt-0.5" />
                      <span>Valid for up to 15 years</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-4 w-4 text-accent mr-2 flex-shrink-0 mt-0.5" />
                      <span>Can be combined with Italian citizenship</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Eligibility:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start">
                      <ArrowRight className="h-4 w-4 text-accent mr-2 flex-shrink-0 mt-0.5" />
                      <span>Not tax resident in Italy for 9 of last 10 years</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-4 w-4 text-accent mr-2 flex-shrink-0 mt-0.5" />
                      <span>Establish tax residency in Italy</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-4 w-4 text-accent mr-2 flex-shrink-0 mt-0.5" />
                      <span>Can live anywhere in Italy</span>
                    </li>
                  </ul>
                </div>

                <Link href="#contact">
                  <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                    Apply for Flat Tax Regime
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Southern Italy Flat Tax */}
            <Card className="border-2 border-accent/30 hover:shadow-xl transition-all">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Percent className="h-12 w-12 text-accent" />
                  <Badge className="bg-green-100 text-green-800 border-green-300">Best Value</Badge>
                </div>
                <CardTitle className="font-display text-2xl">Southern Italy Special Regime</CardTitle>
                <CardDescription className="text-base">
                  7% flat tax on all foreign income for South Italy residents
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="p-6 bg-green-50 rounded-lg border-2 border-green-200">
                  <div className="text-3xl font-display font-bold text-green-700 mb-2">7% Tax Rate</div>
                  <p className="text-sm text-green-800">
                    On all foreign-sourced income - one of Europe&apos;s lowest rates
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Key Benefits:</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-4 w-4 text-accent mr-2 flex-shrink-0 mt-0.5" />
                      <span>Only 7% tax on foreign pension, dividends, capital gains</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-4 w-4 text-accent mr-2 flex-shrink-0 mt-0.5" />
                      <span>No wealth or inheritance tax on foreign assets</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-4 w-4 text-accent mr-2 flex-shrink-0 mt-0.5" />
                      <span>Valid for up to 10 years</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-4 w-4 text-accent mr-2 flex-shrink-0 mt-0.5" />
                      <span>Italian-sourced income taxed normally (but lower cost of living)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-4 w-4 text-accent mr-2 flex-shrink-0 mt-0.5" />
                      <span>Live in beautiful regions: Sicily, Calabria, Puglia, Sardinia</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Eligible Regions:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start">
                      <ArrowRight className="h-4 w-4 text-accent mr-2 flex-shrink-0 mt-0.5" />
                      <span>Sicily, Sardinia, Calabria, Campania, Basilicata</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-4 w-4 text-accent mr-2 flex-shrink-0 mt-0.5" />
                      <span>Abruzzo, Molise, Puglia (selected municipalities)</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-4 w-4 text-accent mr-2 flex-shrink-0 mt-0.5" />
                      <span>Towns with population under 20,000</span>
                    </li>
                  </ul>
                </div>

                <Link href="#contact">
                  <Button className="w-full" variant="outline">
                    Explore Southern Italy Options
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Real Estate Tax Benefits */}
      <section id="renovation" className="section-padding bg-secondary/20">
        <div className="container-elegant">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="heading-section mb-4">Real Estate Tax Incentives</h2>
            <p className="prose-elegant">
              Unprecedented tax credits for property renovation and energy efficiency
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Superbonus 110% */}
            <Card className="hover:shadow-lg transition-all">
              <CardHeader>
                <Home className="h-10 w-10 text-accent mb-4" />
                <CardTitle className="font-display text-xl">Superbonus 110%</CardTitle>
                <CardDescription>
                  Get 110% of renovation costs back as tax credit
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4 p-4 bg-accent/5 rounded-lg border border-accent/20">
                  <div className="text-2xl font-display font-bold text-accent mb-1">110% Credit</div>
                  <p className="text-xs text-muted-foreground">
                    More than your investment returned
                  </p>
                </div>
                <ul className="space-y-2 text-sm mb-4">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-accent mr-2 flex-shrink-0 mt-0.5" />
                    <span>Energy efficiency improvements</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-accent mr-2 flex-shrink-0 mt-0.5" />
                    <span>Seismic safety upgrades</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-accent mr-2 flex-shrink-0 mt-0.5" />
                    <span>Solar panel installation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-accent mr-2 flex-shrink-0 mt-0.5" />
                    <span>Credit can be sold or transferred</span>
                  </li>
                </ul>
                <p className="text-xs text-muted-foreground italic">
                  *Subject to specific requirements and property types. Consult for latest rates.
                </p>
              </CardContent>
            </Card>

            {/* Bonus Ristrutturazioni */}
            <Card className="hover:shadow-lg transition-all">
              <CardHeader>
                <Award className="h-10 w-10 text-accent mb-4" />
                <CardTitle className="font-display text-xl">Renovation Bonus</CardTitle>
                <CardDescription>
                  50-65% tax deduction on renovation costs
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4 p-4 bg-accent/5 rounded-lg border border-accent/20">
                  <div className="text-2xl font-display font-bold text-accent mb-1">Up to 65%</div>
                  <p className="text-xs text-muted-foreground">
                    Tax deduction over 10 years
                  </p>
                </div>
                <ul className="space-y-2 text-sm mb-4">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-accent mr-2 flex-shrink-0 mt-0.5" />
                    <span>General property renovations (50%)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-accent mr-2 flex-shrink-0 mt-0.5" />
                    <span>Energy saving work (65%)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-accent mr-2 flex-shrink-0 mt-0.5" />
                    <span>Maximum €96,000 per unit</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-accent mr-2 flex-shrink-0 mt-0.5" />
                    <span>Includes furniture purchase (50%)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* First Home Benefits */}
            <Card className="hover:shadow-lg transition-all">
              <CardHeader>
                <Shield className="h-10 w-10 text-accent mb-4" />
                <CardTitle className="font-display text-xl">First Home Purchase</CardTitle>
                <CardDescription>
                  Reduced taxes on primary residence purchase
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4 p-4 bg-accent/5 rounded-lg border border-accent/20">
                  <div className="text-2xl font-display font-bold text-accent mb-1">2-3% Tax</div>
                  <p className="text-xs text-muted-foreground">
                    vs. 9-11% standard rate
                  </p>
                </div>
                <ul className="space-y-2 text-sm mb-4">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-accent mr-2 flex-shrink-0 mt-0.5" />
                    <span>2% registration tax (vs. 9%)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-accent mr-2 flex-shrink-0 mt-0.5" />
                    <span>Fixed €200 mortgage tax (vs. 2%)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-accent mr-2 flex-shrink-0 mt-0.5" />
                    <span>Fixed €200 cadastral tax (vs. 1%)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-accent mr-2 flex-shrink-0 mt-0.5" />
                    <span>Available for EU and some non-EU residents</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Business & Investment Incentives */}
      <section className="section-padding">
        <div className="container-elegant">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="heading-section mb-4">Business Investment Incentives</h2>
            <p className="prose-elegant">
              Government programs supporting foreign business investment
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-lg transition-all">
              <CardHeader>
                <CardTitle className="font-display text-lg">Golden Visa</CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                <p className="mb-3">Residence permit through investment:</p>
                <ul className="space-y-1 text-xs text-muted-foreground">
                  <li>• €2M government bonds</li>
                  <li>• €500K company investment</li>
                  <li>• €250K innovative startup</li>
                  <li>• €1M philanthropy</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all">
              <CardHeader>
                <CardTitle className="font-display text-lg">Startup Incentives</CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                <p className="mb-3">For innovative businesses:</p>
                <ul className="space-y-1 text-xs text-muted-foreground">
                  <li>• Tax exemptions for 5 years</li>
                  <li>• Fast-track incorporation</li>
                  <li>• R&D tax credits up to 50%</li>
                  <li>• Reduced social contributions</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all">
              <CardHeader>
                <CardTitle className="font-display text-lg">Tourism Investment</CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                <p className="mb-3">Hospitality sector benefits:</p>
                <ul className="space-y-1 text-xs text-muted-foreground">
                  <li>• Low-interest loans</li>
                  <li>• Grants for rural tourism</li>
                  <li>• Agriturismo subsidies</li>
                  <li>• Regional development funds</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all">
              <CardHeader>
                <CardTitle className="font-display text-lg">Manufacturing</CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                <p className="mb-3">Industrial investment support:</p>
                <ul className="space-y-1 text-xs text-muted-foreground">
                  <li>• Industry 4.0 tax credits</li>
                  <li>• R&D deductions up to 50%</li>
                  <li>• Training credits</li>
                  <li>• Machinery amortization</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Comparison Calculator Section */}
      <section id="calculator" className="section-padding bg-primary text-primary-foreground">
        <div className="container-elegant">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Calculator className="h-12 w-12 text-accent mx-auto mb-6" />
              <h2 className="heading-section mb-4">Calculate Your Tax Savings</h2>
              <p className="text-lg leading-relaxed opacity-90">
                See how much you could save with Italy&apos;s flat tax regime
              </p>
            </div>

            <Card className="bg-card/10 backdrop-blur border-primary-foreground/20">
              <CardContent className="pt-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold text-lg mb-4 text-primary-foreground">Example Scenario</h3>
                      <div className="space-y-3 text-sm">
                        <div className="flex justify-between items-center p-3 bg-background/10 rounded">
                          <span>Annual Foreign Income:</span>
                          <span className="font-semibold">€1,000,000</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-background/10 rounded">
                          <span>Tax in Home Country (40%):</span>
                          <span className="font-semibold text-red-400">€400,000</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-accent/20 rounded border-2 border-accent">
                          <span>Tax with Italian Flat Tax:</span>
                          <span className="font-semibold text-accent">€100,000</span>
                        </div>
                        <div className="flex justify-between items-center p-4 bg-green-500/20 rounded border-2 border-green-400">
                          <span className="font-semibold">Annual Savings:</span>
                          <span className="font-bold text-xl text-green-300">€300,000</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold text-lg mb-4 text-primary-foreground">15-Year Projection</h3>
                      <div className="p-6 bg-accent/20 rounded-lg border-2 border-accent text-center">
                        <div className="text-sm opacity-90 mb-2">Total Tax Savings Over 15 Years</div>
                        <div className="text-4xl font-display font-bold text-accent mb-2">€4,500,000</div>
                        <p className="text-xs opacity-75">
                          Based on €1M annual income with flat tax vs. 40% standard rate
                        </p>
                      </div>
                    </div>
                    <div className="p-4 bg-background/10 rounded-lg">
                      <p className="text-sm opacity-90">
                        <strong>Note:</strong> Actual savings depend on your income level, home country tax rates,
                        and specific circumstances. Schedule a consultation for a personalized analysis.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <Link href="#contact">
                    <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                      Get Your Personalized Tax Analysis
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding">
        <div className="container-elegant">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="heading-section mb-4">How We Help You Access These Benefits</h2>
            <p className="prose-elegant">
              Navigating Italian tax law is complex. We make it simple.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                  <span className="text-2xl font-display font-bold text-accent">1</span>
                </div>
                <CardTitle className="font-display text-lg">Assessment</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                We analyze your financial situation and determine which tax regime offers maximum benefit
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                  <span className="text-2xl font-display font-bold text-accent">2</span>
                </div>
                <CardTitle className="font-display text-lg">Application</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                We prepare and submit all required documentation to the Italian tax authorities
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                  <span className="text-2xl font-display font-bold text-accent">3</span>
                </div>
                <CardTitle className="font-display text-lg">Relocation</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Support with establishing residency, finding property, and settling in Italy
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                  <span className="text-2xl font-display font-bold text-accent">4</span>
                </div>
                <CardTitle className="font-display text-lg">Ongoing Support</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Annual tax filing, compliance monitoring, and optimization strategies
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="section-padding bg-accent/5">
        <div className="container-elegant">
          <div className="max-w-2xl mx-auto text-center">
            <FileText className="h-12 w-12 text-accent mx-auto mb-6" />
            <h2 className="heading-section mb-6">Ready to Optimize Your Tax Situation?</h2>
            <p className="prose-elegant mb-8">
              Schedule a complimentary consultation to discover how much you could save
              with Italy&apos;s exceptional tax benefits.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#contact">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  Free Tax Consultation
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
          <p className="text-xs text-muted-foreground mt-2">
            This information is for general guidance only. Tax situations vary by individual circumstances.
            Consult with qualified tax professionals for advice specific to your situation.
          </p>
        </div>
      </footer>
    </div>
  );
}
