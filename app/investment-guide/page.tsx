"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/navigation";
import { InvestmentGuide } from "@/components/investment-guide";
import { FileText, Download } from "lucide-react";
import { motion } from "framer-motion";

export default function InvestmentGuidePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-background">
      {/* Header */}
      <Navigation variant="solid" />

      {/* Hero Section */}
      <section className="py-20">
        <div className="container-elegant">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <Badge className="mb-4 bg-accent/10 text-accent hover:bg-accent/20 shimmer">
              <Download className="w-3 h-3 mr-1 inline" />
              FREE Resource
            </Badge>
            <h1 className="heading-display mb-6">
              Complete <span className="gradient-text">Investment Guide</span>
            </h1>
            <p className="prose-elegant max-w-2xl mx-auto">
              Download our comprehensive 8-chapter guide covering everything you need to know
              about investing in Italy. From real estate to business opportunities, tax benefits
              to legal requirements—get all the insights in one place.
            </p>
          </motion.div>

          {/* Guide Component */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <InvestmentGuide />
          </motion.div>

          {/* Benefits Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 grid md:grid-cols-4 gap-6"
          >
            <div className="glass p-6 rounded-lg text-center">
              <div className="text-3xl font-bold gradient-text mb-2">8</div>
              <p className="text-sm text-muted-foreground">Comprehensive Chapters</p>
            </div>
            <div className="glass p-6 rounded-lg text-center">
              <div className="text-3xl font-bold gradient-text mb-2">50+</div>
              <p className="text-sm text-muted-foreground">Pages of Insights</p>
            </div>
            <div className="glass p-6 rounded-lg text-center">
              <div className="text-3xl font-bold gradient-text mb-2">100%</div>
              <p className="text-sm text-muted-foreground">Free to Download</p>
            </div>
            <div className="glass p-6 rounded-lg text-center">
              <div className="text-3xl font-bold gradient-text mb-2">2024</div>
              <p className="text-sm text-muted-foreground">Latest Edition</p>
            </div>
          </motion.div>

          {/* Testimonial / Trust */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 glass p-12 rounded-lg max-w-3xl mx-auto"
          >
            <FileText className="h-12 w-12 text-accent mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-center mb-4">
              Why This Guide is Essential
            </h3>
            <p className="text-center text-muted-foreground mb-8">
              Italy's investment landscape offers tremendous opportunities, but navigating the legal,
              tax, and regulatory requirements can be complex. This guide consolidates decades of
              experience into an accessible resource that saves you time, money, and potential pitfalls.
            </p>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="flex items-start gap-2">
                <span className="text-accent">✓</span>
                <span>Written by investment professionals with 20+ years experience</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-accent">✓</span>
                <span>Updated for 2024 market conditions and tax laws</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-accent">✓</span>
                <span>Real case studies from successful investments</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-accent">✓</span>
                <span>Step-by-step process walkthroughs</span>
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 text-center"
          >
            <h2 className="text-3xl font-bold mb-4">
              Have Questions? <span className="gradient-text">Let's Talk</span>
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Our team is here to help you navigate your investment journey in Italy.
              Schedule a free consultation to discuss your specific goals.
            </p>
            <Link href="/#contact">
              <Button size="lg" className="glow">
                Schedule Free Consultation
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
