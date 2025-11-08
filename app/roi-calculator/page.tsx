"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/navigation";
import { ROICalculator } from "@/components/roi-calculator";
import { Calculator } from "lucide-react";
import { motion } from "framer-motion";

export default function ROICalculatorPage() {
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
            <Badge className="mb-4 bg-accent/10 text-accent hover:bg-accent/20">
              Investment Tool
            </Badge>
            <h1 className="heading-display mb-6">
              <span className="gradient-text">ROI Calculator</span>
            </h1>
            <p className="prose-elegant max-w-2xl mx-auto">
              Calculate your potential returns on Italian real estate and business investments.
              Get instant insights into rental yields, capital gains, and total ROI.
            </p>
          </motion.div>

          {/* Calculator */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ROICalculator />
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 grid md:grid-cols-3 gap-6"
          >
            <div className="glass p-6 rounded-lg text-center">
              <Calculator className="h-8 w-8 text-accent mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Accurate Calculations</h3>
              <p className="text-sm text-muted-foreground">
                Based on current Italian market conditions and typical investment scenarios
              </p>
            </div>
            <div className="glass p-6 rounded-lg text-center">
              <Calculator className="h-8 w-8 text-accent mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Real-Time Results</h3>
              <p className="text-sm text-muted-foreground">
                Instant calculations as you adjust your investment parameters
              </p>
            </div>
            <div className="glass p-6 rounded-lg text-center">
              <Calculator className="h-8 w-8 text-accent mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Comprehensive Metrics</h3>
              <p className="text-sm text-muted-foreground">
                View gross yield, net yield, cash flow, and projected appreciation
              </p>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 text-center glass p-12 rounded-lg"
          >
            <h2 className="text-3xl font-bold mb-4">
              Ready to <span className="gradient-text">Start Investing</span>?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Our expert team can help you find the perfect investment opportunity in Italy
              and guide you through every step of the process.
            </p>
            <Link href="/#contact">
              <Button size="lg" className="glow">
                Schedule a Consultation
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
