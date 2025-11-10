"use client";

import { Navigation } from "@/components/navigation";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export default function TermsOfUse() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-background">
      <Navigation variant="solid" />

      <section className="py-20">
        <div className="container-elegant max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <Badge className="mb-4 bg-accent/10 text-accent hover:bg-accent/20">
              Legal
            </Badge>
            <h1 className="heading-display mb-6">Terms of Use</h1>
            <p className="text-muted-foreground">
              Last updated: November 2024
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg max-w-none space-y-8"
          >
            <section className="glass p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
              <p>
                Welcome to Capitaly Group, a trademark of <strong>1402 Celsius Ltd</strong> ("Company", "we", "our", or "us").
                By accessing or using our website and services, you agree to be bound by these Terms of Use and our Privacy Policy.
                If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section className="glass p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">2. Description of Services</h2>
              <p>
                Capitaly Group provides information, guidance, and advisory services related to investment opportunities
                in Italy, including but not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Real estate investment opportunities and market analysis</li>
                <li>Business investment and acquisition advisory</li>
                <li>Tax optimization and legal framework guidance</li>
                <li>Educational resources including investment guides and market reports</li>
                <li>Connection to professional service providers (legal, accounting, real estate)</li>
              </ul>
            </section>

            <section className="glass p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">3. No Financial Advice</h2>
              <p className="font-semibold text-accent">IMPORTANT DISCLAIMER:</p>
              <p>
                The information provided through our website and services is for informational and educational purposes only
                and does not constitute financial, legal, tax, or investment advice. We are not licensed financial advisors,
                and nothing on this website should be construed as a recommendation to buy, sell, or hold any investment.
              </p>
              <p className="mt-4">
                You should always:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Conduct your own due diligence and research</li>
                <li>Consult with qualified professional advisors (lawyers, accountants, financial planners) before making investment decisions</li>
                <li>Consider your own financial situation, goals, and risk tolerance</li>
                <li>Understand that all investments carry risk, including potential loss of capital</li>
              </ul>
            </section>

            <section className="glass p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">4. User Obligations</h2>
              <p>When using our services, you agree to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Provide accurate and truthful information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Use our services only for lawful purposes</li>
                <li>Respect intellectual property rights</li>
                <li>Not engage in any activity that could harm or disrupt our services</li>
                <li>Not attempt to gain unauthorized access to our systems</li>
                <li>Comply with all applicable laws and regulations</li>
              </ul>
            </section>

            <section className="glass p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">5. Intellectual Property</h2>
              <p>
                All content on this website, including text, graphics, logos, images, software, and compilations,
                is the property of 1402 Celsius Ltd or its content suppliers and is protected by international
                copyright, trademark, and other intellectual property laws.
              </p>
              <p className="mt-4">
                <strong>Capitaly Group</strong> is a registered trademark of 1402 Celsius Ltd. Unauthorized use of
                this trademark is strictly prohibited.
              </p>
              <p className="mt-4">
                You may view, download, and print materials from this website for personal, non-commercial use only,
                provided you keep all copyright and proprietary notices intact. Any other use requires our prior written permission.
              </p>
            </section>

            <section className="glass p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">6. Investment Risks</h2>
              <p className="font-semibold text-accent">Risk Disclosure:</p>
              <p>
                Investing in real estate, businesses, or any other assets in Italy or elsewhere carries significant risks, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>Market Risk:</strong> Property values and business valuations can decrease</li>
                <li><strong>Currency Risk:</strong> Exchange rate fluctuations may affect returns</li>
                <li><strong>Liquidity Risk:</strong> Real estate and private investments may be difficult to sell quickly</li>
                <li><strong>Regulatory Risk:</strong> Changes in laws, taxes, or regulations may affect investments</li>
                <li><strong>Economic Risk:</strong> Economic downturns may impact investment performance</li>
                <li><strong>Political Risk:</strong> Political instability or policy changes may affect investments</li>
              </ul>
              <p className="mt-4 font-semibold">
                Past performance is not indicative of future results. You may lose some or all of your invested capital.
              </p>
            </section>

            <section className="glass p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">7. Third-Party Services and Links</h2>
              <p>
                Our website may contain links to third-party websites or services that are not owned or controlled by
                1402 Celsius Ltd. We have no control over, and assume no responsibility for, the content, privacy policies,
                or practices of any third-party websites or services.
              </p>
              <p className="mt-4">
                We may connect you with third-party service providers (lawyers, accountants, real estate agents, etc.).
                These providers are independent professionals, and we do not guarantee their services or accept liability
                for their actions. You are responsible for conducting your own due diligence when engaging any third-party provider.
              </p>
            </section>

            <section className="glass p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">8. Limitation of Liability</h2>
              <p className="font-semibold">TO THE MAXIMUM EXTENT PERMITTED BY LAW:</p>
              <p className="mt-4">
                1402 Celsius Ltd, its directors, employees, partners, agents, and affiliates shall not be liable for any
                indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits,
                data, use, or other intangible losses, resulting from:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Your use or inability to use our services</li>
                <li>Any investment decisions made based on information from our website</li>
                <li>Any errors or omissions in our content</li>
                <li>Unauthorized access to your personal information</li>
                <li>Third-party conduct or content</li>
              </ul>
              <p className="mt-4">
                Our total liability to you for any claims arising from your use of our services shall not exceed
                the amount you paid to us in the twelve (12) months preceding the claim, or £100, whichever is greater.
              </p>
            </section>

            <section className="glass p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">9. Indemnification</h2>
              <p>
                You agree to indemnify, defend, and hold harmless 1402 Celsius Ltd and its officers, directors, employees,
                and agents from any claims, liabilities, damages, losses, and expenses (including reasonable attorney fees)
                arising from:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Your use of our services</li>
                <li>Your violation of these Terms of Use</li>
                <li>Your violation of any rights of another person or entity</li>
                <li>Any investment decisions you make</li>
              </ul>
            </section>

            <section className="glass p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">10. Accuracy of Information</h2>
              <p>
                While we strive to provide accurate and up-to-date information, we make no warranties or representations
                about the accuracy, completeness, or reliability of any information on our website. Market conditions,
                laws, regulations, and other factors change frequently, and information may become outdated.
              </p>
              <p className="mt-4">
                Case studies and examples provided are for illustrative purposes only and do not guarantee similar results.
                Individual circumstances vary, and you should not rely solely on our information when making investment decisions.
              </p>
            </section>

            <section className="glass p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">11. Termination</h2>
              <p>
                We reserve the right to terminate or suspend your access to our services at any time, without prior notice
                or liability, for any reason, including if you breach these Terms of Use.
              </p>
              <p className="mt-4">
                Upon termination, your right to use our services will immediately cease. Provisions of these Terms that
                by their nature should survive termination shall survive, including ownership provisions, warranty disclaimers,
                indemnity, and limitations of liability.
              </p>
            </section>

            <section className="glass p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">12. Privacy and Data Protection</h2>
              <p>
                Your use of our services is also governed by our Privacy Policy, which explains how we collect, use,
                and protect your personal information. By using our services, you consent to our Privacy Policy.
              </p>
              <p className="mt-4">
                Please review our <a href="/privacy" className="text-accent hover:underline">Privacy Policy</a> for detailed
                information about our data practices.
              </p>
            </section>

            <section className="glass p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">13. Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms of Use at any time. We will notify you of significant changes
                by posting a notice on our website or sending an email to your registered email address.
              </p>
              <p className="mt-4">
                Your continued use of our services after such modifications constitutes your acceptance of the updated terms.
                If you do not agree to the modified terms, you should discontinue use of our services.
              </p>
            </section>

            <section className="glass p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">14. Governing Law and Jurisdiction</h2>
              <p>
                These Terms of Use shall be governed by and construed in accordance with the laws of England and Wales,
                without regard to its conflict of law provisions.
              </p>
              <p className="mt-4">
                Any disputes arising from these terms or your use of our services shall be subject to the exclusive
                jurisdiction of the courts of England and Wales.
              </p>
            </section>

            <section className="glass p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">15. Severability</h2>
              <p>
                If any provision of these Terms of Use is found to be unenforceable or invalid, that provision shall be
                limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full
                force and effect.
              </p>
            </section>

            <section className="glass p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">16. Entire Agreement</h2>
              <p>
                These Terms of Use, together with our Privacy Policy, constitute the entire agreement between you and
                1402 Celsius Ltd regarding use of our services and supersede any prior agreements or understandings.
              </p>
            </section>

            <section className="glass p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">17. Contact Information</h2>
              <p>
                If you have any questions about these Terms of Use, please contact us:
              </p>
              <div className="mt-4 p-4 bg-accent/10 rounded-lg">
                <p className="font-semibold">1402 Celsius Ltd</p>
                <p className="mt-2">Trading as: Capitaly Group™</p>
                <p className="mt-2">Email: <a href="mailto:info@1402celsius.com" className="text-accent hover:underline">info@1402celsius.com</a></p>
                <p>Phone: <a href="tel:+441696434469" className="text-accent hover:underline">+44 1696 434469</a></p>
              </div>
            </section>

            <div className="glass p-6 rounded-lg text-center text-sm text-muted-foreground mt-8">
              <p>
                By using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Use.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
