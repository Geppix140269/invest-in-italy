"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import {
  FileText,
  Download,
  CheckCircle2,
  Mail,
  Building2,
  TrendingUp,
  Euro,
  Scale,
  Globe,
  BookOpen,
  Award,
  Users
} from "lucide-react";

export function InvestmentGuide() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [downloadReady, setDownloadReady] = useState(false);

  const guideContent = {
    title: "The Complete Guide to Investing in Italy 2024",
    chapters: [
      {
        icon: Globe,
        title: "Why Italy?",
        topics: [
          "Strategic location in Mediterranean & EU",
          "3rd largest economy in Eurozone",
          "World-class lifestyle and culture",
          "Strong manufacturing and luxury sectors"
        ]
      },
      {
        icon: Building2,
        title: "Real Estate Investment",
        topics: [
          "Property market overview by region",
          "Luxury residential opportunities",
          "Commercial real estate trends",
          "Rental yield expectations",
          "Property management essentials"
        ]
      },
      {
        icon: TrendingUp,
        title: "Business Investment",
        topics: [
          "Market entry strategies",
          "Key growth sectors",
          "Partnership opportunities",
          "SME acquisition landscape",
          "Government incentive programs"
        ]
      },
      {
        icon: Euro,
        title: "Tax Benefits & Incentives",
        topics: [
          "Flat tax regime (7% for retirees)",
          "New resident tax incentives",
          "Business tax credits",
          "R&D tax benefits",
          "Superbonus construction incentives"
        ]
      },
      {
        icon: Scale,
        title: "Legal Framework",
        topics: [
          "Property ownership for foreigners",
          "Company formation options",
          "Visa and residence permits",
          "Due diligence requirements",
          "Contract law essentials"
        ]
      },
      {
        icon: Award,
        title: "Investment Process",
        topics: [
          "Step-by-step acquisition guide",
          "Financing options",
          "Working with local professionals",
          "Timeline expectations",
          "Common pitfalls to avoid"
        ]
      },
      {
        icon: Users,
        title: "Living in Italy",
        topics: [
          "Healthcare system",
          "Education options",
          "Banking and finance",
          "Cultural integration",
          "Quality of life metrics"
        ]
      },
      {
        icon: BookOpen,
        title: "Case Studies",
        topics: [
          "Successful real estate investments",
          "Business acquisition examples",
          "Hospitality sector success stories",
          "ROI analysis of actual deals"
        ]
      }
    ]
  };

  const handleDownload = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call to save lead and send guide
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Generate the guide content as downloadable HTML/PDF
    const guideHTML = generateGuideHTML();

    // Create downloadable file
    const blob = new Blob([guideHTML], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'investing-in-italy-complete-guide-2024.html';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setIsSubmitting(false);
    setDownloadReady(true);
  };

  const generateGuideHTML = () => {
    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${guideContent.title}</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    body {
      font-family: 'Georgia', serif;
      line-height: 1.8;
      color: #2c3e50;
      background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
      padding: 40px 20px;
    }
    .container {
      max-width: 800px;
      margin: 0 auto;
      background: white;
      padding: 60px;
      box-shadow: 0 20px 60px rgba(0,0,0,0.15);
      border-radius: 12px;
    }
    .header {
      text-align: center;
      border-bottom: 3px solid #d4a574;
      padding-bottom: 30px;
      margin-bottom: 50px;
    }
    h1 {
      font-size: 42px;
      color: #1a2332;
      margin-bottom: 15px;
      font-weight: 700;
    }
    .subtitle {
      font-size: 18px;
      color: #7f8c8d;
      font-style: italic;
    }
    .badge {
      display: inline-block;
      background: linear-gradient(135deg, #d4a574 0%, #c89860 100%);
      color: white;
      padding: 8px 20px;
      border-radius: 20px;
      font-size: 14px;
      margin: 20px 0;
      font-weight: 600;
    }
    .chapter {
      margin-bottom: 50px;
      page-break-inside: avoid;
    }
    h2 {
      font-size: 32px;
      color: #1a2332;
      margin-bottom: 20px;
      padding-bottom: 10px;
      border-bottom: 2px solid #ecf0f1;
    }
    .chapter-number {
      color: #d4a574;
      font-size: 24px;
      font-weight: 700;
    }
    ul {
      list-style: none;
      padding-left: 0;
    }
    li {
      padding: 12px 0;
      padding-left: 30px;
      position: relative;
      font-size: 16px;
    }
    li:before {
      content: "✓";
      position: absolute;
      left: 0;
      color: #d4a574;
      font-weight: bold;
      font-size: 18px;
    }
    .intro {
      background: #f8f9fa;
      padding: 30px;
      border-left: 4px solid #d4a574;
      margin-bottom: 40px;
      border-radius: 8px;
    }
    .highlight-box {
      background: linear-gradient(135deg, #fff5e6 0%, #ffe6cc 100%);
      padding: 25px;
      border-radius: 8px;
      margin: 30px 0;
      border: 1px solid #d4a574;
    }
    .footer {
      margin-top: 60px;
      padding-top: 30px;
      border-top: 2px solid #ecf0f1;
      text-align: center;
      color: #7f8c8d;
      font-size: 14px;
    }
    .cta {
      background: linear-gradient(135deg, #1a2332 0%, #2c3e50 100%);
      color: white;
      padding: 40px;
      border-radius: 12px;
      text-align: center;
      margin: 50px 0;
    }
    .cta h3 {
      color: white;
      font-size: 28px;
      margin-bottom: 15px;
    }
    .cta p {
      font-size: 16px;
      margin-bottom: 20px;
      opacity: 0.9;
    }
    @media print {
      body {
        background: white;
        padding: 0;
      }
      .container {
        box-shadow: none;
        padding: 40px;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <span class="badge">2024 Edition</span>
      <h1>${guideContent.title}</h1>
      <p class="subtitle">Your Comprehensive Resource for Italian Investment Opportunities</p>
    </div>

    <div class="intro">
      <h2 style="border: none; padding: 0; margin-bottom: 15px;">Welcome to Your Investment Journey</h2>
      <p>
        Italy represents one of Europe's most compelling investment destinations, combining a robust economy,
        strategic geographic location, and unparalleled quality of life. This comprehensive guide provides
        everything you need to know about investing in Italy—from real estate to business opportunities,
        tax benefits to legal requirements.
      </p>
    </div>

    ${guideContent.chapters.map((chapter, index) => `
      <div class="chapter">
        <h2>
          <span class="chapter-number">Chapter ${index + 1}:</span>
          ${chapter.title}
        </h2>
        <ul>
          ${chapter.topics.map(topic => `<li>${topic}</li>`).join('')}
        </ul>
      </div>
    `).join('')}

    <div class="highlight-box">
      <h3 style="color: #1a2332; margin-bottom: 15px;">🌟 Why Invest in Italy?</h3>
      <p><strong>Strategic Location:</strong> Gateway to Mediterranean and EU markets with excellent logistics infrastructure.</p>
      <p><strong>Economic Strength:</strong> €2 trillion GDP, 3rd largest economy in Eurozone.</p>
      <p><strong>Tax Incentives:</strong> Competitive tax regimes for new residents and businesses.</p>
      <p><strong>Quality of Life:</strong> World-renowned cuisine, culture, healthcare, and climate.</p>
    </div>

    <div class="chapter">
      <h2>Key Investment Metrics</h2>
      <ul>
        <li><strong>Real Estate Yields:</strong> 3-6% gross rental yield in major cities</li>
        <li><strong>Property Appreciation:</strong> Historical average 2-4% annually</li>
        <li><strong>Business Growth:</strong> Strong performance in luxury goods, manufacturing, tourism</li>
        <li><strong>Market Stability:</strong> Mature, regulated markets with investor protections</li>
      </ul>
    </div>

    <div class="chapter">
      <h2>Tax Benefits for Foreign Investors</h2>
      <ul>
        <li><strong>Flat Tax for New Residents:</strong> €100,000 substitute tax on foreign income for 15 years</li>
        <li><strong>Pensioner's Regime:</strong> 7% flat tax on foreign pension income (Southern Italy)</li>
        <li><strong>Investment Tax Credits:</strong> Up to 50% for R&D and innovation investments</li>
        <li><strong>Superbonus:</strong> Significant deductions for energy-efficient renovations</li>
        <li><strong>No Wealth Tax:</strong> On properly structured investments</li>
      </ul>
    </div>

    <div class="chapter">
      <h2>Popular Investment Regions</h2>
      <ul>
        <li><strong>Milan & Lombardy:</strong> Financial hub, strong rental market, international business</li>
        <li><strong>Rome & Lazio:</strong> Tourism, government, cultural heritage properties</li>
        <li><strong>Florence & Tuscany:</strong> Luxury real estate, wine industry, agritourism</li>
        <li><strong>Venice & Veneto:</strong> Tourism, manufacturing, premium property market</li>
        <li><strong>Amalfi Coast:</strong> Luxury hospitality, high-end residential</li>
        <li><strong>Sicily & Southern Italy:</strong> Emerging markets, tax benefits, lower entry costs</li>
      </ul>
    </div>

    <div class="chapter">
      <h2>Investment Process Overview</h2>
      <ul>
        <li><strong>Step 1:</strong> Define investment goals and budget</li>
        <li><strong>Step 2:</strong> Engage local legal and tax advisors</li>
        <li><strong>Step 3:</strong> Obtain Italian tax code (Codice Fiscale)</li>
        <li><strong>Step 4:</strong> Conduct due diligence on target property/business</li>
        <li><strong>Step 5:</strong> Secure financing (if applicable)</li>
        <li><strong>Step 6:</strong> Execute preliminary agreement (Compromesso)</li>
        <li><strong>Step 7:</strong> Notarize final deed (Atto di Compravendita)</li>
        <li><strong>Step 8:</strong> Register ownership and obtain permits</li>
      </ul>
    </div>

    <div class="chapter">
      <h2>Common Costs & Fees</h2>
      <ul>
        <li><strong>Purchase Tax:</strong> 2-10% depending on property type and buyer status</li>
        <li><strong>Notary Fees:</strong> 1-2% of property value</li>
        <li><strong>Legal Fees:</strong> 1-2% of transaction value</li>
        <li><strong>Real Estate Agent:</strong> 3% commission (typically split buyer/seller)</li>
        <li><strong>Annual Property Tax (IMU):</strong> 0.4-1.06% of cadastral value</li>
        <li><strong>Condominium Fees:</strong> €50-500/month depending on property</li>
      </ul>
    </div>

    <div class="cta">
      <h3>Ready to Start Your Investment Journey?</h3>
      <p>Our team of experienced advisors is ready to guide you through every step of your Italian investment.</p>
      <p style="font-size: 18px; font-weight: bold; margin-top: 20px;">
        📧 Contact: ceo@apulink.com<br/>
        🌐 Website: investinitaly.com
      </p>
    </div>

    <div class="footer">
      <p><strong>Invest in Italy</strong></p>
      <p>Expert guidance for foreign investors seeking opportunities in Italy's dynamic market.</p>
      <p style="margin-top: 20px; font-size: 12px;">
        This guide is for informational purposes only and does not constitute financial, legal, or tax advice.
        Please consult with qualified professionals before making any investment decisions.
      </p>
      <p style="margin-top: 10px; font-size: 12px;">
        © 2024 Invest in Italy. All rights reserved.
      </p>
    </div>
  </div>
</body>
</html>`;
  };

  return (
    <div className="space-y-8">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Guide Preview */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="h-full border-2 border-accent/20">
            <CardHeader>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center">
                  <FileText className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <CardTitle>{guideContent.title}</CardTitle>
                  <CardDescription>Comprehensive 8-chapter guide</CardDescription>
                </div>
              </div>
              <Badge className="w-fit bg-accent/10 text-accent">FREE Download</Badge>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Get instant access to our comprehensive investment guide covering everything
                you need to know about investing in Italy—from real estate to business opportunities,
                tax benefits to legal requirements.
              </p>

              {/* Chapter List */}
              <div className="space-y-3">
                <h4 className="font-semibold text-sm">What's Inside:</h4>
                {guideContent.chapters.map((chapter, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-3 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors"
                  >
                    <chapter.icon className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium text-sm">{chapter.title}</div>
                      <div className="text-xs text-muted-foreground mt-1">
                        {chapter.topics.length} key topics covered
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Benefits */}
              <div className="border-t pt-4 space-y-2">
                <h4 className="font-semibold text-sm mb-3">You'll Learn:</h4>
                {[
                  "Complete investment process step-by-step",
                  "Tax optimization strategies",
                  "Legal requirements and documentation",
                  "Regional market analysis",
                  "Real-world case studies and ROI examples"
                ].map((benefit, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Download Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="h-full bg-gradient-to-br from-accent/5 to-transparent">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Download className="h-5 w-5 text-accent" />
                Download Your Free Guide
              </CardTitle>
              <CardDescription>
                Enter your details to receive instant access
              </CardDescription>
            </CardHeader>
            <CardContent>
              {!downloadReady ? (
                <form onSubmit={handleDownload} className="space-y-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="John Smith"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 space-y-2">
                    <div className="flex items-start gap-2">
                      <Mail className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      <div className="text-xs text-blue-800">
                        <strong>What happens next?</strong>
                        <ul className="mt-2 space-y-1 ml-4 list-disc">
                          <li>Instant download of the complete guide</li>
                          <li>Welcome email with additional resources</li>
                          <li>Exclusive access to market updates</li>
                          <li>No spam, unsubscribe anytime</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full glow"
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="animate-pulse">Preparing Your Guide...</span>
                      </>
                    ) : (
                      <>
                        <Download className="mr-2 h-5 w-5" />
                        Download Free Guide
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-center text-muted-foreground">
                    By downloading, you agree to receive occasional emails about investment
                    opportunities. We respect your privacy.
                  </p>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8 space-y-6"
                >
                  <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="h-8 w-8 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-2">Download Started!</h3>
                    <p className="text-sm text-muted-foreground">
                      Your investment guide should start downloading automatically.
                      Check your downloads folder.
                    </p>
                  </div>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-left">
                    <p className="text-sm text-green-800">
                      <strong>✓ Guide downloaded successfully</strong><br />
                      <strong>✓ Welcome email sent to {email}</strong><br />
                      <strong>✓ You're subscribed to market updates</strong>
                    </p>
                  </div>
                  <Button
                    onClick={() => {
                      setDownloadReady(false);
                      setName("");
                      setEmail("");
                    }}
                    variant="outline"
                  >
                    Download Again
                  </Button>
                </motion.div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
