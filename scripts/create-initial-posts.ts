import { createClient } from '@sanity/client';
import * as dotenv from 'dotenv';
import * as path from 'path';

// Load environment variables from .env.local
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  token: process.env.SANITY_API_TOKEN!,
  apiVersion: '2024-01-01',
  useCdn: false,
});

async function createInitialContent() {
  try {
    console.log('Creating author...');

    // Create author
    const author = await client.create({
      _type: 'author',
      name: '1402 Celsius Team',
      slug: {
        _type: 'slug',
        current: '1402-celsius-team',
      },
      role: 'Investment Advisors',
      bio: [
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: 'Our team of experienced investment advisors specializes in Italian market opportunities, providing expert guidance to international investors.',
            },
          ],
        },
      ],
    });

    console.log('Author created:', author._id);

    // Create categories
    console.log('Creating categories...');

    const realEstateCategory = await client.create({
      _type: 'category',
      title: 'Real Estate',
      slug: {
        _type: 'slug',
        current: 'real-estate',
      },
      description: 'Italian property market insights and opportunities',
    });

    const businessCategory = await client.create({
      _type: 'category',
      title: 'Business',
      slug: {
        _type: 'slug',
        current: 'business',
      },
      description: 'Business and entrepreneurship in Italy',
    });

    const taxCategory = await client.create({
      _type: 'category',
      title: 'Tax & Legal',
      slug: {
        _type: 'slug',
        current: 'tax-legal',
      },
      description: 'Italian tax regulations and legal frameworks',
    });

    console.log('Categories created');

    // Create blog posts
    console.log('Creating blog posts...');

    // Post 1: Property Market Trends
    const post1 = await client.create({
      _type: 'post',
      title: 'Italian Property Market Trends 2024',
      slug: {
        _type: 'slug',
        current: 'property-trends-2024',
      },
      author: {
        _type: 'reference',
        _ref: author._id,
      },
      categories: [
        {
          _type: 'reference',
          _ref: realEstateCategory._id,
        },
      ],
      publishedAt: new Date().toISOString(),
      excerpt: 'Analyzing the post-pandemic recovery and emerging opportunities in key Italian cities.',
      featured: true,
      seo: {
        metaTitle: 'Italian Property Market Trends 2024 | Investment Analysis',
        metaDescription: 'Comprehensive analysis of Italian real estate market trends, opportunities, and investment strategies for 2024.',
      },
      body: [
        {
          _type: 'block',
          style: 'h2',
          children: [{ _type: 'span', text: 'Market Overview' }],
        },
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: "Italy's property market has demonstrated remarkable resilience in 2024, with sustained growth across major cities including Milan, Rome, Florence, and Naples. The post-pandemic recovery has created unique opportunities for both residential and commercial real estate investors.",
            },
          ],
        },
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: 'According to recent data from the Italian Real Estate Market Observatory, property values have increased by an average of 3.2% year-over-year, with premium locations in historic city centers seeing even higher appreciation rates of 5-7%.',
            },
          ],
        },
        {
          _type: 'block',
          style: 'h2',
          children: [{ _type: 'span', text: 'Key Investment Opportunities' }],
        },
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: 'Milan continues to lead as the most dynamic market, driven by strong corporate presence and international demand. The city has seen a 12% increase in luxury property transactions, particularly in areas like Porta Nuova and CityLife.',
            },
          ],
        },
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: 'Florence and smaller Tuscan cities are experiencing renewed interest from international buyers seeking vacation properties and rental investments. The short-term rental market has rebounded strongly, with occupancy rates reaching 75-85% during peak seasons.',
            },
          ],
        },
        {
          _type: 'block',
          style: 'h2',
          children: [{ _type: 'span', text: 'Investment Strategy Recommendations' }],
        },
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: 'For investors entering the Italian market in 2024, we recommend focusing on properties in established tourist destinations with strong rental yield potential, or emerging neighborhoods in major cities that are benefiting from urban regeneration projects.',
            },
          ],
        },
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: "Consider leveraging Italy's favorable mortgage rates for non-residents, which currently range from 3.5% to 4.5% for qualified buyers. This, combined with the Golden Visa program, makes Italian real estate particularly attractive for international investors.",
            },
          ],
        },
      ],
    });

    console.log('Post 1 created:', post1._id);

    // Post 2: Business Culture
    const post2 = await client.create({
      _type: 'post',
      title: 'Navigating Italian Business Culture',
      slug: {
        _type: 'slug',
        current: 'business-culture',
      },
      author: {
        _type: 'reference',
        _ref: author._id,
      },
      categories: [
        {
          _type: 'reference',
          _ref: businessCategory._id,
        },
      ],
      publishedAt: new Date().toISOString(),
      excerpt: 'Essential insights for foreign investors entering the Italian market.',
      featured: true,
      seo: {
        metaTitle: 'Navigating Italian Business Culture | Investment Guide',
        metaDescription: 'Essential guide to Italian business culture, practices, and etiquette for successful foreign investment.',
      },
      body: [
        {
          _type: 'block',
          style: 'h2',
          children: [{ _type: 'span', text: 'Understanding Italian Business Relationships' }],
        },
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: 'Italian business culture places significant emphasis on personal relationships and trust-building. Unlike some markets where transactions can be purely professional, success in Italy often depends on developing genuine personal connections with business partners, suppliers, and clients.',
            },
          ],
        },
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: "The concept of 'la bella figura' - making a good impression - extends beyond appearance to include professionalism, reliability, and maintaining one's commitments. Foreign investors who understand and respect this cultural nuance often find doors opening more readily.",
            },
          ],
        },
        {
          _type: 'block',
          style: 'h2',
          children: [{ _type: 'span', text: 'Communication and Decision-Making' }],
        },
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: 'Italian business communication tends to be more indirect than in Northern European or North American contexts. Decisions may take longer as consensus is built across stakeholders, and hierarchy is often more pronounced than in flatter organizational structures.',
            },
          ],
        },
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: 'Business meetings typically start with social conversation before moving to agenda items. This is not wasted time but an essential part of relationship-building. Foreign investors should allow extra time for meetings and avoid appearing rushed.',
            },
          ],
        },
        {
          _type: 'block',
          style: 'h2',
          children: [{ _type: 'span', text: 'Regional Variations and Local Expertise' }],
        },
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: "Italy's regional diversity extends to business practices. Northern Italy (Milan, Turin) tends to be more internationally oriented and fast-paced, while central and southern regions may maintain more traditional business customs. Working with local advisors who understand regional nuances is invaluable.",
            },
          ],
        },
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: 'At 1402 Celsius, our team has deep connections across Italian business networks and can facilitate introductions, navigate cultural expectations, and help you build the relationships essential for long-term success in the Italian market.',
            },
          ],
        },
      ],
    });

    console.log('Post 2 created:', post2._id);

    // Post 3: Tax Incentives
    const post3 = await client.create({
      _type: 'post',
      title: 'Tax Incentives for Foreign Investors',
      slug: {
        _type: 'slug',
        current: 'tax-incentives',
      },
      author: {
        _type: 'reference',
        _ref: author._id,
      },
      categories: [
        {
          _type: 'reference',
          _ref: taxCategory._id,
        },
      ],
      publishedAt: new Date().toISOString(),
      excerpt: "Understanding Italy's favorable tax regimes and investment incentives.",
      featured: true,
      seo: {
        metaTitle: 'Tax Incentives for Foreign Investors in Italy | 2024 Guide',
        metaDescription: 'Comprehensive guide to Italian tax incentives, flat tax regimes, and investment benefits for foreign investors.',
      },
      body: [
        {
          _type: 'block',
          style: 'h2',
          children: [{ _type: 'span', text: 'Flat Tax Regime for New Residents' }],
        },
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: "Italy offers one of Europe's most attractive flat tax regimes for high-net-worth individuals relocating to Italy. The regime allows new tax residents to pay a substitute tax of just €100,000 per year on foreign-sourced income, regardless of the amount.",
            },
          ],
        },
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: 'This regime is valid for up to 15 years and can be extended to family members for an additional €25,000 per person. Italian-sourced income is taxed according to ordinary progressive rates, making this particularly beneficial for investors with significant international income streams.',
            },
          ],
        },
        {
          _type: 'block',
          style: 'h2',
          children: [{ _type: 'span', text: 'Special Tax Regime for Retirees' }],
        },
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: 'Foreign retirees moving to designated municipalities in Southern Italy can benefit from a 7% flat tax rate on all foreign pension income for up to 10 years. This applies to municipalities with populations under 20,000 in regions including Sicily, Calabria, Sardinia, Campania, Basilicata, Abruzzo, Molise, and Puglia.',
            },
          ],
        },
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: 'This regime has proven particularly popular among northern European retirees seeking a warmer climate and lower cost of living, while maintaining significant tax advantages on their pension income.',
            },
          ],
        },
        {
          _type: 'block',
          style: 'h2',
          children: [{ _type: 'span', text: 'Investment and Business Incentives' }],
        },
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: 'Italy offers various tax credits and incentives for business investments, particularly in research and development, innovation, and sustainable technologies. The Patent Box regime provides a 90% exemption on income derived from intellectual property assets.',
            },
          ],
        },
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: 'Additionally, the Super Depreciation and Hyper Depreciation schemes allow businesses to deduct 130-270% of eligible capital investments from taxable income, significantly reducing the effective cost of business expansion and modernization.',
            },
          ],
        },
        {
          _type: 'block',
          style: 'h2',
          children: [{ _type: 'span', text: 'VAT and Property Tax Considerations' }],
        },
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: 'First-time homebuyers in Italy benefit from reduced registration taxes of just 2% (instead of 9%) on property purchases, plus fixed rates for mortgage and cadastral taxes. Properties classified as "prima casa" (first home) also enjoy reduced annual property taxes (IMU).',
            },
          ],
        },
        {
          _type: 'block',
          children: [
            {
              _type: 'span',
              text: 'For commercial property investors, VAT rates vary by use: standard rate is 22%, but reduced rates of 4-10% apply to certain property categories. Our tax advisors can help structure your investment to maximize available benefits while ensuring full compliance.',
            },
          ],
        },
      ],
    });

    console.log('Post 3 created:', post3._id);

    console.log('\n✅ All content created successfully!');
    console.log('\nCreated:');
    console.log('- 1 Author');
    console.log('- 3 Categories');
    console.log('- 3 Blog Posts');
    console.log('\nYou can now view your blog posts at:');
    console.log('- http://localhost:3000/blog');
    console.log('- http://localhost:3000/studio');
  } catch (error) {
    console.error('Error creating content:', error);
    process.exit(1);
  }
}

createInitialContent();
