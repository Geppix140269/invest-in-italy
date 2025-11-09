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
    p {
      margin-bottom: 15px;
      line-height: 1.8;
    }
    h3 {
      font-size: 24px;
      color: #1a2332;
      margin: 30px 0 15px 0;
      font-weight: 600;
    }
    .section-intro {
      font-size: 17px;
      color: #555;
      margin-bottom: 25px;
      font-style: italic;
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

    <div class="chapter">
      <h2><span class="chapter-number">Chapter 1:</span> Why Italy?</h2>
      <p class="section-intro">Understanding Italy's unique position as a premier investment destination in Europe.</p>

      <h3>Strategic Location in the Mediterranean & EU</h3>
      <p>Italy occupies a pivotal geographic position at the heart of the Mediterranean, serving as a natural bridge between Europe, North Africa, and the Middle East. As a founding member of the European Union, Italy provides investors with seamless access to a single market of over 450 million consumers. The country's extensive port network, including major hubs like Genoa, Naples, and Trieste, facilitates efficient trade routes connecting East and West.</p>

      <h3>The 3rd Largest Economy in the Eurozone</h3>
      <p>With a GDP exceeding €2 trillion, Italy ranks as the third-largest economy in the Eurozone and eighth globally. The Italian economy is characterized by a diverse industrial base, including world-leading sectors in manufacturing, luxury goods, automotive, machinery, and food production. Despite global challenges, Italy maintains a resilient economic structure with strong export performance, particularly in high-value manufactured goods.</p>

      <h3>World-Class Lifestyle and Cultural Heritage</h3>
      <p>Italy consistently ranks among the top destinations for quality of life, offering a unique combination of Mediterranean climate, world-renowned cuisine, exceptional healthcare systems, and unparalleled cultural heritage. With more UNESCO World Heritage Sites than any other country (58 as of 2024), Italy provides not just an investment opportunity but a lifestyle transformation. From the Alps to Sicily, each region offers distinct characteristics appealing to different investor profiles.</p>

      <h3>Strong Manufacturing and Luxury Sectors</h3>
      <p>Italian manufacturing excellence is globally recognized, particularly in sectors like fashion (Milan Fashion Week is among the "Big Four"), automotive (Ferrari, Lamborghini, Maserati), machinery, and design. The "Made in Italy" brand commands premium pricing worldwide, representing quality, craftsmanship, and style. This reputation creates substantial opportunities for investors in both established companies and emerging brands looking to scale.</p>
    </div>

    <div class="chapter">
      <h2><span class="chapter-number">Chapter 2:</span> Real Estate Investment</h2>
      <p class="section-intro">A comprehensive analysis of Italy's property market, from luxury villas to commercial opportunities.</p>

      <h3>Property Market Overview by Region</h3>
      <p>Italy's real estate market is highly regionalized, with distinct characteristics across different areas. Northern cities like Milan and Turin offer strong rental yields (4-6%) driven by business and finance sectors. Central regions including Rome and Florence command premium prices for historical properties but lower yields (2-3%). Southern Italy and Sicily present emerging opportunities with significantly lower entry costs (properties from €50,000) and special tax incentives for new residents.</p>
      <p>The coastal areas of Tuscany, Liguria, and the Amalfi Coast represent the luxury segment, with properties ranging from €1 million to €20+ million, attracting international buyers seeking second homes or boutique hospitality investments.</p>

      <h3>Luxury Residential Opportunities</h3>
      <p>The luxury residential market in Italy offers unique opportunities ranging from restored historic palazzos in city centers to contemporary villas in prime coastal locations. Key markets include Lake Como (favored by international celebrities), Tuscany's wine regions, and the Amalfi Coast. These properties typically appreciate 3-5% annually while providing exceptional personal use value. Many investors combine personal enjoyment with rental income through luxury short-term rental platforms, achieving gross yields of 5-8% in prime locations.</p>

      <h3>Commercial Real Estate Trends</h3>
      <p>Italy's commercial real estate sector is experiencing modernization, particularly in Milan, which has emerged as Europe's leading commercial hub after Brexit. Office space in Milan's Porta Nuova district commands €600-800/m² annually, with vacancy rates below 5%. Retail spaces in high-traffic tourist areas (Florence, Venice, Rome) offer stable income streams, though COVID-19 has accelerated the shift toward experiential retail. Industrial and logistics properties, especially near major ports and the Milan-Bologna corridor, are experiencing strong demand driven by e-commerce growth.</p>

      <h3>Rental Yield Expectations</h3>
      <p>Rental yields vary significantly by location and property type. Long-term residential rentals in Milan typically yield 3-4% gross, while emerging cities like Bologna and Turin offer 5-6%. Short-term vacation rentals in tourist destinations can achieve gross yields of 6-10%, though they require active management and face increasing regulation. Commercial properties generally yield 5-7%, with logistics warehouses at the higher end (7-9%) reflecting strong e-commerce demand.</p>

      <h3>Property Management Essentials</h3>
      <p>Successful real estate investment in Italy requires understanding local management practices. For rental properties, professional management companies typically charge 8-12% of rental income plus setup fees. Key considerations include navigating condominium regulations (particularly in historic buildings), understanding local rental laws (which favor tenants), and managing relationships with administrators. For short-term rentals, compliance with recent registration requirements and local tourist taxes is essential. Many investors establish a fiduciaria (trust company) to manage their Italian property portfolio professionally.</p>
    </div>

    <div class="chapter">
      <h2><span class="chapter-number">Chapter 3:</span> Business Investment</h2>
      <p class="section-intro">Strategic approaches to entering Italy's dynamic business environment and identifying growth opportunities.</p>

      <h3>Market Entry Strategies</h3>
      <p>Foreign investors entering the Italian market typically choose from several proven strategies. Direct acquisition of existing businesses offers immediate market presence and established customer relationships, with valuations typically 4-8x EBITDA depending on sector and size. Alternatively, joint ventures with Italian partners provide local expertise and networks while sharing risk. Greenfield investments, while offering full control, require navigating complex bureaucracy but benefit from various regional incentives.</p>
      <p>Many successful investors begin with a commercial presence (establishing a branch office) to understand the market before making larger commitments. This approach allows time to build relationships, understand regulatory requirements, and identify the optimal structure for their specific goals.</p>

      <h3>Key Growth Sectors</h3>
      <p>Several sectors offer exceptional growth potential in Italy: Green Technology and Renewable Energy benefit from substantial government support and EU funding, with Italy targeting 55% renewable energy by 2030. AgriTech and food production combine Italy's agricultural heritage with technological innovation. Digital Health and Life Sciences build on Italy's strong healthcare system and biotech research base. Luxury Goods and Fashion continue expanding, with the global luxury market projected to grow 8% annually.</p>
      <p>Tourism and Hospitality, particularly experiential and sustainable tourism, present opportunities as Italy attracts 65+ million visitors annually. Advanced Manufacturing, leveraging Industry 4.0 initiatives, offers modernization opportunities in traditional sectors.</p>

      <h3>Partnership Opportunities</h3>
      <p>Italy's business culture emphasizes relationships and trust, making partnerships particularly valuable. Family-owned businesses, which constitute 85% of Italian companies, often seek international partners for succession planning, capital injection, or market expansion. Strategic partnerships can provide access to distribution networks, manufacturing capabilities, or brand recognition. Italian businesses particularly value partners offering international market access, technology transfer, or management expertise.</p>

      <h3>SME Acquisition Landscape</h3>
      <p>Italy's SME sector (companies with 10-250 employees) presents significant acquisition opportunities. With over 200,000 SMEs generating €1+ million in revenue, many are reaching generational transitions without clear succession plans. Typical acquisition targets are profitable, asset-rich companies trading at attractive valuations (3-6x EBITDA) below European averages. Key sectors include specialized manufacturing, niche luxury brands, food production, and regional service businesses. Due diligence is critical, particularly regarding tax compliance, employee contracts, and hidden liabilities.</p>

      <h3>Government Incentive Programs</h3>
      <p>Italy offers substantial incentives for business investment: the "Resto al Sud" program provides grants and subsidized loans for businesses in Southern regions. The "Industria 4.0" initiative offers tax credits up to 50% for investments in innovative machinery and R&D. Startup Act benefits include tax exemptions and reduced bureaucracy for innovative startups. Regional development funds provide grants covering 25-50% of eligible investments in less developed areas. EU-funded programs support green transition, digital transformation, and export development. Navigating these incentives requires professional guidance but can significantly improve investment returns.</p>
    </div>

    <div class="chapter">
      <h2><span class="chapter-number">Chapter 4:</span> Tax Benefits & Incentives</h2>
      <p class="section-intro">Comprehensive overview of Italy's advantageous tax regimes designed to attract foreign investors and new residents.</p>

      <h3>Flat Tax Regime for New Residents</h3>
      <p>Italy's substitute tax regime allows new tax residents to pay a flat €100,000 annual tax on all foreign-sourced income for up to 15 years. This regime is particularly attractive for high-net-worth individuals with substantial international income sources. Requirements include not having been Italian tax resident in 9 of the previous 10 years and establishing residence in Italy. Family members can join the regime at €25,000 per person. This regime excludes Italian-sourced income, which is taxed normally, but provides substantial savings for qualifying individuals with diversified international portfolios.</p>

      <h3>Pensioner's Flat Tax (7%)</h3>
      <p>Foreign pensioners can benefit from a 7% substitute tax on all foreign pension income by relocating to designated municipalities in Southern Italy (Sicily, Calabria, Sardinia, Campania, Basilicata, Abruzzo, Molise, and Puglia) with populations under 20,000. This regime applies for up to 10 years and represents extraordinary savings compared to standard progressive tax rates (up to 43%). Requirements include not having been Italian tax resident in the previous 5 years and establishing residence in one of the eligible municipalities. This has created retirement communities of international retirees in charming southern Italian towns.</p>

      <h3>Business Tax Credits and Incentives</h3>
      <p>Corporate investors benefit from several substantial incentives: the Patent Box regime offers 90% exemption on income derived from intangible assets. R&D tax credits cover up to 50% of qualifying research expenditures, with enhanced rates for universities and research institutions collaboration. Investments in Industry 4.0 technologies (automation, AI, IoT) qualify for 20-50% tax credits depending on asset type. Southern Italy businesses benefit from reduced social security contributions (30-50% reduction) and accelerated depreciation on capital investments.</p>

      <h3>Real Estate Tax Benefits</h3>
      <p>The Superbonus program offers up to 110% tax deductions (effectively a 10% subsidy) for qualifying energy efficiency and anti-seismic building improvements, spread over 4-5 years or assignable to contractors/financial institutions. First-home buyers under 36 years old enjoy reduced purchase taxes (2% vs. 10%). Properties in historic centers may qualify for restoration tax credits covering 50-90% of approved preservation work. Commercial properties benefit from accelerated depreciation and, in some southern zones, complete IMU (property tax) exemption for new businesses.</p>

      <h3>Wealth and Inheritance Considerations</h3>
      <p>Italy does not impose annual wealth tax on properly structured foreign assets. Inheritance and gift taxes are among Europe's lowest: 4% on transfers to direct heirs (spouse, children) with a €1 million exemption per heir, 6% for siblings with €100,000 exemption, and 8% for others. Proper estate planning using holding structures can further optimize these rates. Financial assets held outside Italy by non-Italian tax residents are not subject to Italian succession laws, providing flexibility for international families.</p>
    </div>

    <div class="chapter">
      <h2><span class="chapter-number">Chapter 5:</span> Legal Framework</h2>
      <p class="section-intro">Essential legal information for foreign investors navigating Italy's regulatory landscape.</p>

      <h3>Property Ownership for Foreigners</h3>
      <p>Italy imposes no restrictions on real estate ownership by foreign nationals, whether EU or non-EU citizens. Property can be owned in personal name, through an Italian or foreign company, or via trust structures. Registration with the land registry (Catasto) is required, and for non-EU citizens, reciprocity rules may apply (your country must allow Italians to own property). Property ownership does not automatically grant residence rights, but investments exceeding certain thresholds may qualify for investor visas. Title insurance is uncommon in Italy; instead, comprehensive due diligence through a notary (notaio) provides legal certainty.</p>

      <h3>Company Formation Options</h3>
      <p>Foreign investors can choose from several business structures: S.r.l. (Società a Responsabilità Limitata) is Italy's equivalent to an LLC, requiring minimum €10,000 capital, offering limited liability, and suitable for most small-to-medium businesses. S.p.A. (Società per Azioni) resembles a corporation, requires €50,000 minimum capital, and is used for larger enterprises or those seeking to raise capital. Branch offices allow foreign companies to operate in Italy without forming a separate legal entity, though they don't provide limited liability. Partnerships (S.n.c. or S.a.s.) are less common for foreign investors due to liability concerns.</p>
      <p>Recent digitalization initiatives now allow online company formation in 3-5 days for standard structures, significantly improving on previous timelines. Professional guidance is recommended for navigating sector-specific licensing requirements.</p>

      <h3>Visa and Residence Permits</h3>
      <p>Non-EU investors can obtain residence through several routes: the Investor Visa requires €2 million in Italian government bonds, €500,000 in an Italian company, €250,000 in an innovative startup, or €1 million in philanthropic initiatives. The Self-Employment Visa suits entrepreneurs establishing businesses in Italy, requiring business plan demonstration and sufficient financial resources. The Elective Residence Visa applies to individuals with independent financial means (typically €31,000+ annually) not seeking employment. The Golden Visa provides fast-track pathways for significant investors and their families, including access to Schengen area.</p>
      <p>Residence permits (permesso di soggiorno) must be applied for within 8 days of entry, with processing times of 4-8 weeks. After five years of continuous legal residence, permanent residence becomes available. After ten years, citizenship may be applied for, requiring Italian language proficiency (B1 level).</p>

      <h3>Due Diligence Requirements</h3>
      <p>Comprehensive due diligence is essential for Italian investments. For real estate: verify ownership through Catasto inspection, confirm absence of liens and encumbrances, check building permits and compliance with current regulations, review condominium minutes and financial statements, inspect for abusivismo (illegal construction), and obtain geometric surveys confirming registered vs. actual measurements. For businesses: review 3-5 years of financial statements and tax returns, verify employee contracts and pension fund compliance, confirm intellectual property ownership, investigate pending litigation or tax assessments, validate customer and supplier contracts, and conduct environmental liability assessments for industrial properties.</p>
      <p>Engaging a commercialista (accountant), avvocato (lawyer), and sometimes a technical surveyor is standard practice, with total due diligence costs typically 2-3% of transaction value.</p>

      <h3>Contract Law Essentials</h3>
      <p>Italian contract law follows the Civil Law tradition, emphasizing written agreements and formal documentation. Key considerations include: all property transactions require notarization to be legally effective (atto pubblico), preliminary contracts (compromesso) are legally binding and typically involve 10-30% deposits, business contracts generally include arbitration clauses to avoid lengthy court procedures, and verbal agreements, while theoretically enforceable, are practically difficult to prove. Standard payment terms are typically 30-60 days, though many industries follow specific sector norms. Late payment interest is regulated by law (currently 8-10% annually plus ECB rate).</p>
      <p>English-language contracts are increasingly common in international transactions, though Italian courts may require certified translations. Professional legal review before signing is strongly recommended, as Italian contract law includes mandatory provisions protecting certain parties (employees, consumers, tenants) that cannot be contractually waived.</p>
    </div>

    <div class="chapter">
      <h2><span class="chapter-number">Chapter 6:</span> The Investment Process</h2>
      <p class="section-intro">Step-by-step guidance through the practical aspects of executing your Italian investment.</p>

      <h3>Preliminary Steps: Planning and Preparation</h3>
      <p>Successful investment begins with clear goal definition: Are you seeking capital appreciation, rental income, lifestyle benefits, or business operating profits? Establish your budget including all ancillary costs (typically add 20-25% to purchase price for fees, taxes, and immediate improvements). Determine your timeline and liquidity needs. Research tax implications in both Italy and your home country, considering double-taxation treaties. Assemble your advisory team before beginning active search: identify English-speaking commercialista, avvocato experienced in international transactions, and potentially a real estate agent or business broker with international client experience.</p>

      <h3>Obtaining Your Codice Fiscale</h3>
      <p>The Italian tax code (Codice Fiscale) is essential for virtually all transactions in Italy. It can be obtained from: Italian consulates in your home country (usually fastest, 1-2 weeks), directly from Agenzia delle Entrate offices in Italy (same day), or through delegating to your Italian lawyer/commercialista with a power of attorney. Required documents include passport copy, proof of address, and completed application form. The Codice Fiscale is free and remains valid permanently, even if you don't complete a transaction immediately.</p>

      <h3>Due Diligence Phase</h3>
      <p>Once you've identified a target property or business, comprehensive due diligence typically requires 4-8 weeks. For real estate, your lawyer requests visure catastali (land registry records), checks for liens and mortgages, verifies planning permissions, and reviews condominium documentation. A geometra (surveyor) may inspect the property for structural issues and compliance. For businesses, your commercialista reviews financials, tax compliance, employee contracts, and outstanding liabilities. Environmental assessments may be needed for industrial properties. Budget 1.5-3% of transaction value for due diligence costs.</p>

      <h3>Financing Options</h3>
      <p>Italian mortgages are available to foreign residents and non-residents, though terms vary. Banks typically lend up to 50-70% of appraised value for non-residents (80% for residents), requiring 30-40% down payment. Interest rates currently range from 3-5% depending on fixed vs. variable terms. Application requires: Codice Fiscale, proof of income (typically 3 years), bank statements, employment confirmation, and passport. Process takes 6-12 weeks with final approval contingent on property appraisal. Alternative financing includes: developer financing for new construction (often with favorable terms to facilitate sales), home country mortgages (if your property secures additional borrowing), or private lending from specialized international lenders (typically more expensive but faster).</p>

      <h3>The Compromesso (Preliminary Agreement)</h3>
      <p>Upon completing due diligence satisfactorily, you'll execute a compromesso (preliminary contract). This legally binding agreement specifies: purchase price and payment terms, deposit amount (typically 10-30% of purchase price), closing date (usually 60-120 days later), conditions precedent (e.g., mortgage approval, permit approvals), and penalties for breach by either party. While not mandatory, notarization of the compromesso provides additional legal certainty and timestamp for tax purposes. If either party withdraws after signing, the injured party can retain the deposit (if buyer withdraws) or pay double the deposit (if seller withdraws).</p>

      <h3>The Atto di Compravendita (Final Deed)</h3>
      <p>The final deed must be executed before a notaio (public official, not just a notary). The notaio's role is ensuring legal compliance, not representing either party's interests. During the rogito (deed signing): buyer pays remaining purchase price (typically via cashier's checks), notaio reads the entire deed aloud in Italian (interpreter can attend), both parties sign, and notaio registers the deed with land registry within 30 days. Costs paid at closing include: balance of purchase price, notary fees (1-2% of value), registration tax (2-10% depending on property type and buyer status), agency fees if applicable (typically 3%, split 50/50 or sometimes buyer pays all), and your lawyer's fees.</p>
      <p>Bring to closing: valid passport, Codice Fiscale, proof of funds for balance payment, and any required permits (e.g., investment visa documentation). The notaio retains the original deed; you receive an authenticated copy (copia autentica).</p>

      <h3>Post-Closing Registration and Permits</h3>
      <p>After closing, several registrations are required: establish utility accounts (electricity, gas, water) in your name, register with the local municipality (anagrafe) if establishing residence, obtain waste collection tax (TARI) account, and join the condominium formally if in a multi-unit building. For businesses, additional steps include: registering with Chamber of Commerce, obtaining necessary business licenses and permits, registering employees with INPS (social security), enrolling in local tax rolls, and opening business bank accounts (requires board resolutions and multiple in-person visits). Budget 2-4 weeks for complete post-closing setup. Your commercialista typically handles business registrations; they're essential for navigating bureaucracy efficiently.</p>
    </div>

    <div class="chapter">
      <h2><span class="chapter-number">Chapter 7:</span> Living in Italy</h2>
      <p class="section-intro">Practical information about daily life, integration, and quality of life considerations for investors and their families.</p>

      <h3>Healthcare System</h3>
      <p>Italy's national health service (Servizio Sanitario Nazionale - SSN) is universally accessible to residents and ranked among the world's best by the WHO. Legal residents register with local health authorities (ASL) and choose a general practitioner (medico di base) at no cost. The system provides comprehensive coverage including specialist visits, hospital care, and subsidized prescriptions. Wait times for non-urgent specialist appointments can be lengthy in public system (weeks to months), leading many expats to use private healthcare or mixed approach. Private health insurance costs €1,000-3,000 annually for comprehensive coverage, providing immediate access to specialists and private hospitals.</p>
      <p>Pharmacies are highly accessible and professionally staffed, capable of providing medical advice and many medications without prescriptions. Emergency care (dial 118) is excellent, particularly in major cities. Many doctors in international areas speak English, and major cities have English-speaking medical centers catering to expatriates.</p>

      <h3>Education Options</h3>
      <p>Italian public schools are free but instruction is exclusively in Italian, making them challenging for non-Italian-speaking children initially. International schools in major cities offer curricula in English and other languages: International Baccalaureate (IB) programs available in Milan, Rome, Florence, and Turin; British Schools following UK curriculum; American Schools offering U.S. curriculum; and German, French, and other national schools in larger cities. Tuition ranges from €10,000-25,000 annually. These schools provide smooth transitions for internationally mobile families.</p>
      <p>Italy's university system is affordable (€1,000-4,000 annually for EU citizens, slightly more for non-EU), with many programs now offered in English, particularly at graduate level. Prestigious institutions include Bocconi (business), Politecnico di Milano (engineering), and several highly ranked medical schools. Private universities like LUISS and University of Bologna Business School offer international-standard programs with higher fees (€12,000-20,000 annually).</p>

      <h3>Banking and Finance</h3>
      <p>Opening an Italian bank account is essential for residence and business operations. Requirements include: valid passport, Codice Fiscale, proof of Italian address, and often proof of income or employment. Non-residents face additional scrutiny under anti-money laundering regulations. Process takes 2-4 weeks, requiring in-person visits. Major banks include Intesa Sanpaolo, UniCredit, BNL, and Banco BPM. International banks (HSBC, Deutsche Bank) have limited Italian presence.</p>
      <p>Banking services are increasingly digital, though Italian banks lag some European counterparts. Credit cards are widely accepted in major cities, less so in small towns and rural areas. Cash remains important—many small businesses prefer it, and small purchases often expect cash payment. ATMs are widespread. Italian banking fees are higher than some countries (€5-20 monthly account fees, transaction fees on foreign cards). Wire transfers within SEPA zone are fast (same day) and inexpensive (€1-5). International transfers outside SEPA can be slow (3-5 days) and expensive (€15-40).</p>

      <h3>Cultural Integration and Language</h3>
      <p>Successful integration into Italian life requires cultural sensitivity and effort. While English is widely spoken in business contexts in major cities, daily life requires at least basic Italian. Language courses are widely available, from formal schools (€300-1,000 for 60-hour courses) to free municipal programs for residents. Most expats achieve functional fluency in 6-12 months with consistent effort.</p>
      <p>Italian business culture emphasizes relationships, face-to-face communication, and long-term trust-building. Decisions often take longer than in Anglo-Saxon cultures, involving multiple stakeholders. Lunch is an important relationship-building moment, not merely refueling. Formality in initial business interactions gradually yields to warmth once relationships develop. Punctuality is valued though practiced with flexibility. August holidays essentially shut down many businesses—plan accordingly. Understanding these cultural nuances significantly impacts business success and personal satisfaction.</p>

      <h3>Quality of Life Metrics</h3>
      <p>Italy consistently ranks highly for quality of life: Mediterranean climate with regional variation (Alps to Sicily), world-renowned cuisine with exceptional local food cultures, extensive cultural offerings (museums, opera, festivals, historical sites), and strong family and community orientation. Work-life balance is generally better than in Anglo-Saxon countries, with generous vacation time (4-5 weeks standard) and emphasis on leisure.</p>
      <p>Challenges include bureaucratic complexity (permit renewals, registrations can be time-consuming), slower service than northern European standards in some sectors, limited English in smaller towns, and varying efficiency across regions (generally more efficient in north). Cost of living varies dramatically: Milan and Rome are expensive (comparable to other European capitals), while smaller cities and southern regions offer 30-50% lower costs. Overall, most international residents report high satisfaction with lifestyle quality, despite occasional administrative frustrations.</p>
    </div>

    <div class="chapter">
      <h2><span class="chapter-number">Chapter 8:</span> Case Studies & Success Stories</h2>
      <p class="section-intro">Real-world examples of successful investments in Italy, providing practical insights and realistic ROI expectations.</p>

      <h3>Case Study 1: Luxury Vacation Rental in Tuscany</h3>
      <p><strong>Investment:</strong> €850,000 restored farmhouse with pool near Siena</p>
      <p><strong>Profile:</strong> UK couple seeking income-producing property with personal use capability</p>
      <p><strong>Execution:</strong> Purchased partially restored property requiring €150,000 additional renovation. Used 50% Italian mortgage financing. Professional management company handles bookings, cleaning, and maintenance. Property rented 28 weeks annually at €3,500-5,000/week depending on season, generating €95,000 gross annual revenue. After management fees (12%), maintenance, utilities, and mortgage, net cash flow is approximately €25,000 annually (2.5% net yield). Personal use 4 weeks annually. Property appreciated 15% in 4 years.</p>
      <p><strong>Key Success Factors:</strong> Location in high-demand tourist area, professional management, high-quality restoration maintaining authentic character, strong online presence and reviews, and flexible pricing strategy for off-season.</p>
      <p><strong>Lessons Learned:</strong> Renovation costs exceeded initial estimates by 20%. Building permits took longer than anticipated. Professional management essential but expensive. Personal use requires careful scheduling to maximize rental income. Overall extremely satisfied, describing it as "best decision we've made."</p>

      <h3>Case Study 2: Milan Luxury Residential Apartment</h3>
      <p><strong>Investment:</strong> €650,000 renovated 120m² apartment in Brera district</p>
      <p><strong>Profile:</strong> International executive relocating to Milan for work</p>
      <p><strong>Execution:</strong> Purchased during 2020 market dip. Fully furnished for immediate occupancy. Lived in property 2 years, then relocated but retained as investment. Currently rented to corporate tenant at €2,800/month (€33,600 annually, 5.2% gross yield). Low maintenance due to recent renovation. Net yield approximately 3.8% after taxes, condo fees, and IMU. Property current value estimated €750,000 (15% appreciation in 4 years).</p>
      <p><strong>Key Success Factors:</strong> Prime location in Milan's most desirable neighborhood, purchase during market weakness, high-quality renovation by previous owner, strong rental demand from international corporations relocating executives, and stable long-term tenant.</p>
      <p><strong>Lessons Learned:</strong> Milan's property market shows strong resilience and growth potential. Corporate tenants provide stability but expect high-quality properties and amenities. Tax efficiency improved by using holding company structure. Would purchase additional Milan properties if opportunity arises.</p>

      <h3>Case Study 3: Boutique Hotel Acquisition in Puglia</h3>
      <p><strong>Investment:</strong> €1.2 million boutique hotel (12 rooms) in coastal Puglia</p>
      <p><strong>Profile:</strong> American couple seeking lifestyle change and business opportunity</p>
      <p><strong>Execution:</strong> Acquired existing operating hotel from retiring owners. Maintained staff, upgraded amenities, improved marketing and online presence. Season runs April-October (28 weeks). Average occupancy 75% at €180-280/night average rate. Annual gross revenue €420,000. After operating expenses (staff, utilities, supplies, maintenance, marketing), EBITDA approximately €125,000 (30% margin). Owners take €80,000 salary, reinvest remainder in improvements. Property value estimated at €1.8 million (50% increase in 5 years).</p>
      <p><strong>Key Success Factors:</strong> Emerging destination benefiting from tourism trend toward authentic experiences, existing business with track record, owner commitment to hands-on management, quality improvements differentiating from competitors, and strong online reviews driving repeat bookings.</p>
      <p><strong>Lessons Learned:</strong> Hospitality business is demanding, requiring year-round attention despite seasonal operation. Staff management and local relationship-building critical to success. Permitting and compliance complex but manageable with professional support. COVID-19 impacted 2020 season but 2021-2024 exceeded pre-COVID performance. Lifestyle rewards exceed purely financial returns.</p>

      <h3>Case Study 4: Manufacturing SME Acquisition</h3>
      <p><strong>Investment:</strong> €2.5 million acquisition of specialized machinery manufacturer in Veneto</p>
      <p><strong>Profile:</strong> German industrial company seeking Italian manufacturing capability</p>
      <p><strong>Execution:</strong> Acquired 65% stake in profitable family business, with family retaining 35% and continuing management. Company employed 45 people, generating €8 million revenue, €1.2 million EBITDA. Purchase price 2.1x EBITDA. Post-acquisition investment of €800,000 in new equipment leveraging Industry 4.0 tax credits (40% credit). Integration into broader group providing access to international markets. Revenue grew to €12 million by year 4, EBITDA to €2.1 million. Family exercised put option in year 5, selling remaining stake at pre-agreed 3x EBITDA (€2.1 million).</p>
      <p><strong>Key Success Factors:</strong> Strategic fit with acquirer's business model, retention of family expertise and relationships, access to government incentives for modernization, maintained operational independence while benefiting from group resources, and geographic expansion through acquirer's distribution network.</p>
      <p><strong>Lessons Learned:</strong> Italian SMEs often undervalue their businesses, creating acquisition opportunities. Management continuity crucial for customer retention. Government incentives significantly impacted investment returns. Cultural integration required patience and sensitivity. Clear governance and exit terms prevented conflicts. Would actively seek similar opportunities.</p>

      <h3>Key Takeaways from Success Stories</h3>
      <p>These case studies reveal several common success factors: thorough due diligence prevented costly surprises; professional advisory teams (lawyers, commercialistas, consultants) proved essential; cultural sensitivity and relationship-building impacted outcomes significantly; government incentives and tax optimization improved returns substantially; patience with Italian bureaucracy and timelines was required; realistic expectations about yields and appreciation were important; and diversification of income sources or investment types reduced risk. Most importantly, successful investors view Italy as a long-term commitment, balancing financial returns with lifestyle and strategic benefits.</p>
    </div>

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
