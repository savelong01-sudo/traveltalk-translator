import { createFileRoute } from "@tanstack/react-router";
import { Footer } from "@/components/site/Footer";
import { Navbar } from "@/components/site/Navbar";

export const Route = createFileRoute("/terms")({
  component: TermsOfService,
});

function TermsOfService() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <Navbar />
      <div className="mx-auto max-w-3xl px-6 pt-36 pb-24">
        <div className="text-center mb-16">
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-gold">Legal</span>
          <h1 className="mt-5 font-serif text-4xl font-medium leading-tight md:text-5xl">
            Terms of <span className="italic text-gradient-gold">Service</span>
          </h1>
          <p className="mt-3 text-sm text-muted-foreground">Effective Date: June 1, 2025</p>
        </div>

        <div className="space-y-10 text-sm font-light leading-relaxed text-muted-foreground">
          <section>
            <h2 className="font-serif text-2xl font-medium text-foreground mb-4">1. Acceptance of Terms</h2>
            <p>By downloading, installing, or using the TraveTalk mobile application ("App"), you acknowledge that you have read, understood, and agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use TraveTalk.</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-medium text-foreground mb-4">2. Description of Service</h2>
            <p className="mb-3">TraveTalk is an AI-powered travel companion that provides:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Voice Translation:</strong> Real-time speech-to-text and text-to-speech translation across 100+ languages</li>
              <li><strong>Camera Translation:</strong> OCR and translation of text captured via device camera</li>
              <li><strong>Currency Conversion:</strong> Live exchange rate calculations for multiple currencies</li>
              <li><strong>Bill Splitter:</strong> Utility for calculating shared expenses</li>
              <li><strong>Travel Phrasebook:</strong> Pre-loaded essential phrases organized by language and category</li>
            </ul>
            <p className="mt-3 font-medium text-foreground">⚠️ Translation Accuracy Disclaimer:</p>
            <p>Translation services are powered by AI and machine learning models. We do not guarantee 100% accuracy. TraveTalk is designed as a travel aid and should not be relied upon for medical, legal, or other critical communications.</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-medium text-foreground mb-4">3. User Eligibility</h2>
            <p>By using TraveTalk, you represent that: (a) you are at least 13 years of age; (b) you have the legal capacity to enter into a binding agreement; (c) you will comply with all applicable laws; and (d) you will not use the App for any illegal or unauthorized purpose.</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-medium text-foreground mb-4">4. In-App Purchases & Subscriptions</h2>
            <p className="mb-3">TraveTalk may offer optional in-app purchases and subscriptions for premium features. All purchases are processed through Apple App Store or Google Play Store and are subject to their respective terms. Refund requests must be directed to the respective app store.</p>
            <p>Premium features may include: unlimited translations, ad-free experience, offline phrasebook access, and priority support.</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-medium text-foreground mb-4">5. Intellectual Property</h2>
            <p>All content, features, and functionality of the App, including but not limited to the TraveTalk name, logo, design, text, graphics, and software, are the exclusive property of TraveTalk and are protected by copyright, trademark, and other intellectual property laws.</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-medium text-foreground mb-4">6. User Conduct</h2>
            <p>You agree not to: (a) reverse engineer, decompile, or disassemble the App; (b) use the App for any unlawful purpose; (c) interfere with or disrupt the App's functionality; (d) upload malicious code; (e) violate any applicable laws or regulations.</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-medium text-foreground mb-4">7. Third-Party Services</h2>
            <p>The App uses third-party services for translation, speech recognition, and advertising. We are not responsible for the content, accuracy, or practices of these third-party services. Your use of such services may be subject to their respective terms.</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-medium text-foreground mb-4">8. Limitation of Liability</h2>
            <p>To the fullest extent permitted by law, TraveTalk shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of the App. Our total liability shall not exceed the amount you paid us for the App in the 12 months preceding the claim.</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-medium text-foreground mb-4">9. Disclaimer of Warranties</h2>
            <p>The App is provided "AS IS" and "AS AVAILABLE" without warranties of any kind, either express or implied. We do not warrant uninterrupted or error-free operation.</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-medium text-foreground mb-4">10. Indemnification</h2>
            <p>You agree to indemnify and hold harmless TraveTalk and its officers, directors, employees, and agents from any claims, damages, or expenses arising from your use of the App or violation of these Terms.</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-medium text-foreground mb-4">11. Modifications to Terms</h2>
            <p>We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting within the App. Continued use after modifications constitutes acceptance.</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-medium text-foreground mb-4">12. Termination</h2>
            <p>We may terminate or suspend your access to the App immediately, without prior notice, for any reason including breach of these Terms.</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-medium text-foreground mb-4">13. Governing Law</h2>
            <p>These Terms shall be governed by the laws of the jurisdiction in which TraveTalk operates, without regard to conflict of law provisions.</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-medium text-foreground mb-4">14. Contact</h2>
            <p>For questions about these Terms:</p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li>Email: support@travetalk.app</li>
              <li>Website: https://travetalk.app</li>
            </ul>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}
