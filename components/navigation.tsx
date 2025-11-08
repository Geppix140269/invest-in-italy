"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

interface NavigationProps {
  variant?: "glass" | "solid";
  className?: string;
}

export function Navigation({ variant = "glass", className = "" }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const headerClass = variant === "glass"
    ? "fixed top-0 w-full glass border-b border-white/20 z-50"
    : "fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50";

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`${headerClass} ${className}`}
    >
      <nav className="container-elegant py-4 md:py-6">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Logo width={50} height={50} />
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="hidden md:flex items-center space-x-8"
          >
            <Link href="/services" className="text-sm font-medium hover:text-accent transition-all hover:scale-105">
              Services
            </Link>
            <Link href="/tax-benefits" className="text-sm font-medium hover:text-accent transition-all hover:scale-105">
              Tax Benefits
            </Link>
            <Link href="/roi-calculator" className="text-sm font-medium hover:text-accent transition-all hover:scale-105">
              ROI Calculator
            </Link>
            <Link href="/investment-guide" className="text-sm font-medium hover:text-accent transition-all hover:scale-105">
              Guide
            </Link>
            <Link href="/blog" className="text-sm font-medium hover:text-accent transition-all hover:scale-105">
              Blog
            </Link>
            <Link href="/#contact">
              <Button className="bg-primary hover:bg-primary/90 glow transition-all hover:scale-105">
                Get Started
              </Button>
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-4 pb-4 space-y-4"
          >
            <Link
              href="/services"
              className="block text-sm font-medium hover:text-accent transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/tax-benefits"
              className="block text-sm font-medium hover:text-accent transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Tax Benefits
            </Link>
            <Link
              href="/roi-calculator"
              className="block text-sm font-medium hover:text-accent transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              ROI Calculator
            </Link>
            <Link
              href="/investment-guide"
              className="block text-sm font-medium hover:text-accent transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Investment Guide
            </Link>
            <Link
              href="/blog"
              className="block text-sm font-medium hover:text-accent transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <Link href="/#contact" onClick={() => setMobileMenuOpen(false)}>
              <Button className="w-full bg-primary hover:bg-primary/90">
                Get Started
              </Button>
            </Link>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
}
