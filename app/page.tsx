"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Navigation } from "@/components/navigation";
import { Logo } from "@/components/logo";
import { VideoHero } from "@/components/video-hero";
import { ContactForm } from "@/components/contact-form";
import { NewsletterForm } from "@/components/newsletter-form";
import { MarketInsights } from "@/components/market-insights";
import {
  Building2,
  TrendingUp,
  Users,
  Award,
  Calculator,
  FileText,
  Mail,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Star
} from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100
    }
  }
};

function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeInUp}
      transition={{ duration: 0.5 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen smooth-scroll relative overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl float" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl float-delayed" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-secondary/20 rounded-full blur-3xl float" style={{ animationDelay: "1.5s" }} />
      </div>

      {/* Header/Navigation - Glassmorphism */}
      <Navigation variant="glass" />

      {/* Video Hero Section */}
      <VideoHero
        videoSrc={[
          "https://res.cloudinary.com/dusubfxgo/video/upload/v1753030832/geppix1402_81420_Homepage_concept_for_Apulink.com_a_modern_di_02fb68c3-5806-40b5-984f-f47e14c23456_2_ropt8y.mp4",
          "https://res.cloudinary.com/dusubfxgo/video/upload/v1753030830/geppix1402_81420_Homepage_concept_for_Apulink.com_a_modern_di_02fb68c3-5806-40b5-984f-f47e14c23456_0_dk65ev.mp4",
          "https://res.cloudinary.com/dusubfxgo/video/upload/v1759170634/geppix1402_81420_A_small_industrial_plant_in_Puglia_converted_7ac04e16-2aa2-4e4c-9c6a-e88911a57e93_1_sjppvw.mp4",
          "https://res.cloudinary.com/dusubfxgo/video/upload/v1759170245/geppix1402_81420_Slow_push_through_ancient_stone_archway_into_95363dc1-0272-438a-99ed-d2cadf96052b_0_ylo2wh.mp4"
        ]}
        poster="https://res.cloudinary.com/dusubfxgo/image/upload/v1753030826/geppix1402_81420_Homepage_concept_for_Apulink.com_a_modern_di_8cc82465-1b62-45b5-863f-f8ca2c75318a_0_eorx9g.png"
        title="Invest in Italy"
        subtitle="Your Gateway to Italian Investment Opportunities"
        autoPlay={true}
        loop={true}
        showOverlay={true}
        showControls={true}
      />

      {/* Trust Indicators - Animated counters */}
      <AnimatedSection className="py-12 glass-dark border-y border-border">
        <div className="container-elegant">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            {[
              { value: "20+", label: "Years Experience" },
              { value: "€500M+", label: "Investments Facilitated" },
              { value: "150+", label: "Successful Projects" },
              { value: "35+", label: "Countries Served" }
            ].map((stat, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <div className="text-3xl md:text-4xl font-display font-semibold gradient-text mb-2">{stat.value}</div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Market Insights Section - Animated Charts */}
      <MarketInsights />

      {/* Services Section - 3D Cards */}
      <section id="services" className="section-padding">
        <div className="container-elegant">
          <AnimatedSection className="max-w-3xl mb-16">
            <Badge className="mb-4 bg-accent/10 text-accent hover:bg-accent/20 border-accent/20">
              Our Services
            </Badge>
            <h2 className="heading-section mb-6">
              Comprehensive <span className="gradient-text">Investment Solutions</span>
            </h2>
            <p className="prose-elegant">
              From identifying opportunities to closing deals, we provide end-to-end
              support for your Italian investment journey.
            </p>
          </AnimatedSection>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {/* Real Estate */}
            <motion.div variants={scaleIn}>
              <Card className="card-3d group h-full border-2 hover:border-accent/50 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <CardHeader className="relative">
                  <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Building2 className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="font-display text-2xl">Real Estate Investment</CardTitle>
                  <CardDescription className="text-base">
                    Premium properties in Italy&apos;s most sought-after locations
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative">
                  <ul className="space-y-3">
                    {[
                      "Luxury residential & commercial properties",
                      "Investment property analysis & due diligence",
                      "Property management solutions",
                      "Legal & tax optimization"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-accent mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/hospitality-investment">
                    <Button className="w-full mt-6 group-hover:glow transition-all">
                      View Hospitality Opportunities
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>

            {/* Business Development */}
            <motion.div variants={scaleIn}>
              <Card className="card-3d group h-full border-2 hover:border-accent/50 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <CardHeader className="relative">
                  <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <TrendingUp className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="font-display text-2xl">Business Development</CardTitle>
                  <CardDescription className="text-base">
                    Strategic guidance for market entry and expansion
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative">
                  <ul className="space-y-3">
                    {[
                      "Market entry strategy & feasibility studies",
                      "Partnership & acquisition opportunities",
                      "SME investment advisory",
                      "Government incentives & funding programs"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-accent mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/services">
                    <Button className="w-full mt-6 group-hover:glow transition-all">
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>

            {/* Management Consulting */}
            <motion.div variants={scaleIn}>
              <Card className="card-3d group h-full border-2 hover:border-accent/50 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <CardHeader className="relative">
                  <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Users className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="font-display text-2xl">Management Expertise</CardTitle>
                  <CardDescription className="text-base">
                    Executive leadership for your Italian operations
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative">
                  <ul className="space-y-3">
                    {[
                      "Operational strategy & optimization",
                      "Cross-cultural management consulting",
                      "Interim executive services",
                      "Performance improvement programs"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-accent mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/services">
                    <Button className="w-full mt-6 group-hover:glow transition-all">
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About/Credentials Section */}
      <section id="about" className="section-padding gradient-bg">
        <div className="container-elegant">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <Badge className="mb-4 bg-accent/10 text-accent hover:bg-accent/20 border-accent/20">
                Your Trusted Advisory Team
              </Badge>
              <h2 className="heading-section mb-6">
                Comprehensive <span className="gradient-text">Expertise</span> Across the Entire Value Chain
              </h2>
              <p className="prose-elegant mb-6">
                We are a team of international executives with decades of combined experience
                navigating every sector of the business value chain—from startups to multinational
                corporations. Our deep understanding of the Italian business ecosystem, combined
                with proven expertise in funding, financing, and scaling ventures, delivers
                unparalleled value to your investment journey.
              </p>
              <p className="prose-elegant mb-8">
                Our team&apos;s unique positioning within the Italian Association of Small and
                Medium Enterprises and the International Trade Council (ITC) provides exclusive
                access to opportunities and insights unavailable elsewhere. We excel at building
                and maintaining steady, profitable revenue streams while navigating the complexities
                of international business.
              </p>

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-4"
              >
                {[
                  {
                    title: "End-to-End Value Chain Expertise",
                    desc: "From startup launch through scale-up to MNC operations—funding, financing, growth strategies, and profitability optimization"
                  },
                  {
                    title: "Global Executive Leadership",
                    desc: "Collective experience leading multinational teams across Europe, Asia, Americas, and Middle East in diverse industries"
                  },
                  {
                    title: "Exclusive Network Access",
                    desc: "Italian SME Association and International Trade Council membership providing direct connections to decision-makers, deal flow, and off-market opportunities"
                  }
                ].map((item, i) => (
                  <motion.div key={i} variants={fadeInUp} className="flex items-start">
                    <Award className="h-6 w-6 text-accent mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatedSection>

            <AnimatedSection>
              <Card className="border-2 border-accent/20 glass hover:glow transition-all duration-500">
                <CardHeader>
                  <CardTitle className="font-display text-xl gradient-text">Why Italy?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-sm">
                  <p>
                    Italy offers a unique combination of world-class lifestyle, strategic
                    EU market access, and exceptional investment opportunities across multiple sectors.
                  </p>
                  <ul className="space-y-2">
                    {[
                      "3rd largest economy in the Eurozone",
                      "Gateway to Mediterranean and EU markets",
                      "World-leading sectors: fashion, design, automotive, food",
                      "Attractive investment incentives and tax benefits",
                      "Unparalleled quality of life and cultural heritage"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <ArrowRight className="h-4 w-4 text-accent mr-2 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Insights/Blog Preview Section */}
      <section id="insights" className="section-padding">
        <div className="container-elegant">
          <AnimatedSection className="flex items-end justify-between mb-12">
            <div>
              <Badge className="mb-4 bg-accent/10 text-accent hover:bg-accent/20 border-accent/20">
                Latest Insights
              </Badge>
              <h2 className="heading-section">
                Investment <span className="gradient-text">Intelligence</span>
              </h2>
            </div>
            <Link href="/insights">
              <Button variant="outline" className="hover:glow transition-all">
                View All Articles
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </AnimatedSection>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                badge: "Real Estate",
                title: "Italian Property Market Trends 2024",
                desc: "Analyzing the post-pandemic recovery and emerging opportunities in key Italian cities.",
                link: "/insights/property-trends-2024"
              },
              {
                badge: "Business",
                title: "Navigating Italian Business Culture",
                desc: "Essential insights for foreign investors entering the Italian market.",
                link: "/insights/business-culture"
              },
              {
                badge: "Tax & Legal",
                title: "Tax Incentives for Foreign Investors",
                desc: "Understanding Italy's favorable tax regimes and investment incentives.",
                link: "/insights/tax-incentives"
              }
            ].map((post, i) => (
              <motion.div key={i} variants={scaleIn}>
                <Card className="group hover:shadow-xl transition-all duration-500 card-3d h-full">
                  <CardHeader>
                    <Badge className="w-fit mb-3 shimmer">{post.badge}</Badge>
                    <CardTitle className="font-display text-xl group-hover:text-accent transition-colors">
                      {post.title}
                    </CardTitle>
                    <CardDescription>{post.desc}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link href={post.link}>
                      <Button variant="ghost" className="group-hover:text-accent p-0 transition-all">
                        Read More <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Tools Section - Glassmorphism with glow */}
      <section id="tools" className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-accent -z-10" />
        <div className="container-elegant relative z-10">
          <AnimatedSection className="max-w-3xl mb-12">
            <Badge className="mb-4 bg-accent text-accent-foreground hover:bg-accent/90">
              Investment Tools
            </Badge>
            <h2 className="heading-section mb-6 text-primary-foreground">
              Make <span className="text-accent">Informed Decisions</span>
            </h2>
            <p className="text-lg leading-relaxed opacity-90 text-primary-foreground">
              Access our suite of tools designed to help you evaluate and plan your
              Italian investment strategy.
            </p>
          </AnimatedSection>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6"
          >
            {[
              {
                icon: Calculator,
                title: "ROI Calculator",
                desc: "Estimate potential returns on Italian real estate and business investments",
                action: "Launch Calculator",
                link: "/roi-calculator"
              },
              {
                icon: FileText,
                title: "Investment Guide",
                desc: "Download our comprehensive guide to investing in Italy",
                action: "Download Guide",
                link: "/investment-guide"
              }
            ].map((tool, i) => (
              <motion.div key={i} variants={scaleIn}>
                <Card className="glass border-white/20 text-primary-foreground hover:glow transition-all duration-500 card-3d">
                  <CardHeader>
                    <tool.icon className="h-8 w-8 mb-3 text-accent" />
                    <CardTitle className="font-display text-xl">{tool.title}</CardTitle>
                    <CardDescription className="text-primary-foreground/80">
                      {tool.desc}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link href={tool.link}>
                      <Button variant="outline" className="border-primary-foreground/30 hover:bg-primary-foreground hover:text-primary transition-all">
                        {tool.action}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section-padding gradient-bg">
        <div className="container-elegant">
          <AnimatedSection className="max-w-2xl mx-auto text-center">
            <Mail className="h-12 w-12 text-accent mx-auto mb-6" />
            <h2 className="heading-section mb-4">
              Stay <span className="gradient-text">Informed</span>
            </h2>
            <p className="prose-elegant mb-8">
              Receive exclusive insights, market updates, and investment opportunities
              directly to your inbox.
            </p>
            <NewsletterForm />
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding">
        <div className="container-elegant">
          <div className="grid md:grid-cols-2 gap-16">
            <AnimatedSection>
              <Badge className="mb-4 bg-accent/10 text-accent hover:bg-accent/20 border-accent/20">
                Get in Touch
              </Badge>
              <h2 className="heading-section mb-6">
                Start Your <span className="gradient-text">Investment Journey</span>
              </h2>
              <p className="prose-elegant mb-8">
                Whether you&apos;re exploring opportunities or ready to invest, our team is here
                to provide personalized guidance tailored to your goals.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">What to Expect</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {[
                      "Initial consultation within 24 hours",
                      "Confidential discussion of your investment goals",
                      "Customized strategy recommendations",
                      "No obligation, complimentary initial assessment"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle2 className="h-4 w-4 text-accent mr-2 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="glass p-8 rounded-lg">
                <ContactForm />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border glass-dark">
        <div className="container-elegant py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center mb-4">
                <Logo width={40} height={40} />
              </div>
              <p className="text-sm text-muted-foreground max-w-md mb-4">
                Expert guidance for foreign investors seeking opportunities in Italy&apos;s
                dynamic market. Backed by decades of international experience and exclusive
                industry connections.
              </p>
              <div className="text-sm text-muted-foreground space-y-1">
                <p className="font-semibold text-foreground">1402 Celsius Ltd</p>
                <p>Email: <a href="mailto:info@1402celsius.com" className="text-accent hover:underline">info@1402celsius.com</a></p>
                <p>Phone: <a href="tel:+441696434469" className="text-accent hover:underline">+44 1696 434469</a></p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/services" className="hover:text-accent transition-colors">All Services</Link></li>
                <li><Link href="/hospitality-investment" className="hover:text-accent transition-colors">Hospitality Investment</Link></li>
                <li><Link href="/services#business" className="hover:text-accent transition-colors">Business Development</Link></li>
                <li><Link href="/services#management" className="hover:text-accent transition-colors">Management Consulting</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/tax-benefits" className="hover:text-accent transition-colors">Tax Benefits</Link></li>
                <li><Link href="#insights" className="hover:text-accent transition-colors">Insights</Link></li>
                <li><Link href="#about" className="hover:text-accent transition-colors">About</Link></li>
                <li><Link href="#contact" className="hover:text-accent transition-colors">Contact</Link></li>
              </ul>
            </div>
          </div>

          <Separator className="my-8" />

          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground gap-4">
            <div className="text-center md:text-left">
              <p>&copy; 2024 1402 Celsius Ltd. All rights reserved.</p>
              <p className="text-xs mt-1">Invest in Italy™ is a trademark of 1402 Celsius Ltd.</p>
            </div>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-accent transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-accent transition-colors">Terms of Use</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
