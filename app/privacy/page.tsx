"use client";

import { Navigation } from "@/components/navigation";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export default function PrivacyPolicy() {
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
            <h1 className="heading-display mb-6">Privacy Policy</h1>
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
              <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
              <p>
                Capitaly Group is a trademark of <strong>1402 Celsius Ltd</strong> ("we", "our", or "us").
                We are committed to protecting your privacy and handling your data in an open and transparent manner.
                This privacy policy explains how we collect, use, and protect your personal information when you use
                our website and services.
              </p>
            </section>

            <section className="glass p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>
              <h3 className="text-xl font-semibold mt-6 mb-3">Personal Information</h3>
              <p>We may collect the following types of personal information:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Name and contact details (email address, phone number)</li>
                <li>Investment preferences and interests</li>
                <li>Communication preferences</li>
                <li>Information you provide when downloading our investment guide</li>
                <li>Correspondence and feedback you provide to us</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">Technical Information</h3>
              <p>We automatically collect certain technical information when you visit our website:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>IP address and browser type</li>
                <li>Device information and operating system</li>
                <li>Pages visited and time spent on pages</li>
                <li>Referring website and clickstream data</li>
              </ul>
            </section>

            <section className="glass p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">3. How We Use Your Information</h2>
              <p>We use your personal information for the following purposes:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>To provide you with information about investment opportunities in Italy</li>
                <li>To send you our investment guide and related resources</li>
                <li>To respond to your inquiries and provide customer support</li>
                <li>To send you marketing communications (with your consent)</li>
                <li>To improve our website and services</li>
                <li>To comply with legal obligations</li>
              </ul>
            </section>

            <section className="glass p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">4. Legal Basis for Processing</h2>
              <p>We process your personal data based on:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>Consent:</strong> When you provide explicit consent (e.g., subscribing to our newsletter)</li>
                <li><strong>Contractual necessity:</strong> To provide services you have requested</li>
                <li><strong>Legitimate interests:</strong> To improve our services and communicate relevant opportunities</li>
                <li><strong>Legal compliance:</strong> To comply with applicable laws and regulations</li>
              </ul>
            </section>

            <section className="glass p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">5. Data Sharing and Disclosure</h2>
              <p>We do not sell your personal information. We may share your data with:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>Service providers:</strong> Third-party providers who help us operate our website and services (email delivery, analytics, hosting)</li>
                <li><strong>Professional advisors:</strong> Lawyers, accountants, and consultants when necessary</li>
                <li><strong>Legal authorities:</strong> When required by law or to protect our legal rights</li>
              </ul>
              <p className="mt-4">
                All third-party service providers are required to maintain the confidentiality and security of your personal information.
              </p>
            </section>

            <section className="glass p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">6. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information against
                unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Secure servers and encrypted data transmission (SSL/TLS)</li>
                <li>Regular security assessments and updates</li>
                <li>Access controls and authentication procedures</li>
                <li>Staff training on data protection</li>
              </ul>
            </section>

            <section className="glass p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">7. Your Rights</h2>
              <p>Under applicable data protection laws (including GDPR), you have the following rights:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>Access:</strong> Request access to your personal data</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data</li>
                <li><strong>Deletion:</strong> Request deletion of your personal data</li>
                <li><strong>Restriction:</strong> Request restriction of processing</li>
                <li><strong>Portability:</strong> Request transfer of your data to another service provider</li>
                <li><strong>Objection:</strong> Object to processing of your personal data</li>
                <li><strong>Withdraw consent:</strong> Withdraw consent at any time (where processing is based on consent)</li>
              </ul>
              <p className="mt-4">
                To exercise any of these rights, please contact us at <a href="mailto:info@1402celsius.com" className="text-accent hover:underline">info@1402celsius.com</a>
              </p>
            </section>

            <section className="glass p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">8. Cookies and Tracking</h2>
              <p>
                We use cookies and similar tracking technologies to enhance your experience on our website.
                Cookies are small text files stored on your device that help us:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Remember your preferences</li>
                <li>Understand how you use our website</li>
                <li>Improve website functionality</li>
                <li>Deliver relevant marketing messages</li>
              </ul>
              <p className="mt-4">
                You can control cookies through your browser settings. However, disabling cookies may affect website functionality.
              </p>
            </section>

            <section className="glass p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">9. Data Retention</h2>
              <p>
                We retain your personal information only for as long as necessary to fulfill the purposes outlined in this
                privacy policy, unless a longer retention period is required by law. Typically:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Contact information: Retained while you are an active subscriber or client, plus 3 years</li>
                <li>Transaction records: Retained for 7 years for legal and accounting purposes</li>
                <li>Marketing data: Retained until you unsubscribe or withdraw consent</li>
              </ul>
            </section>

            <section className="glass p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">10. International Data Transfers</h2>
              <p>
                Your personal information may be transferred to and processed in countries outside your country of residence.
                We ensure appropriate safeguards are in place to protect your data, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Standard contractual clauses approved by the European Commission</li>
                <li>Transfers to countries with adequate data protection laws</li>
                <li>Your explicit consent where required</li>
              </ul>
            </section>

            <section className="glass p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">11. Children's Privacy</h2>
              <p>
                Our services are not directed to individuals under 18 years of age. We do not knowingly collect
                personal information from children. If you become aware that a child has provided us with personal
                information, please contact us immediately.
              </p>
            </section>

            <section className="glass p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">12. Changes to This Policy</h2>
              <p>
                We may update this privacy policy from time to time to reflect changes in our practices or legal requirements.
                We will notify you of significant changes by posting a notice on our website or sending you an email.
                Your continued use of our services after such modifications constitutes acceptance of the updated policy.
              </p>
            </section>

            <section className="glass p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">13. Contact Us</h2>
              <p>If you have any questions about this privacy policy or our data practices, please contact us:</p>
              <div className="mt-4 p-4 bg-accent/10 rounded-lg">
                <p className="font-semibold">1402 Celsius Ltd</p>
                <p className="mt-2">Email: <a href="mailto:info@1402celsius.com" className="text-accent hover:underline">info@1402celsius.com</a></p>
                <p>Phone: <a href="tel:+441696434469" className="text-accent hover:underline">+44 1696 434469</a></p>
              </div>
            </section>

            <section className="glass p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">14. Supervisory Authority</h2>
              <p>
                If you are located in the European Economic Area, you have the right to lodge a complaint with your
                local data protection supervisory authority if you believe we have not complied with applicable data
                protection laws.
              </p>
            </section>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
