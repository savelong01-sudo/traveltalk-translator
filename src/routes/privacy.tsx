import { createFileRoute } from "@tanstack/react-router";
import { Footer } from "@/components/site/Footer";
import { Navbar } from "@/components/site/Navbar";

export const Route = createFileRoute("/privacy")({
  component: PrivacyPolicy,
});

function PrivacyPolicy() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <Navbar />
      <div className="mx-auto max-w-3xl px-6 pt-36 pb-24">
        <div className="text-center mb-16">
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-gold">Legal</span>
          <h1 className="mt-5 font-serif text-4xl font-medium leading-tight md:text-5xl">
            Privacy <span className="italic text-gradient-gold">Policy</span>
          </h1>
          <p className="mt-3 text-sm text-muted-foreground">Effective Date: June 1, 2025</p>
        </div>

        <div className="space-y-10 text-sm font-light leading-relaxed text-muted-foreground">
          <section>
            <h2 className="font-serif text-2xl font-medium text-foreground mb-4">1. Introduction</h2>
            <p className="mb-3">Welcome to TraveTalk ("App", "we", "our", or "us"). We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application.</p>
            <p>By using TraveTalk, you agree to the collection and use of information in accordance with this policy.</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-medium text-foreground mb-4">2. Information We Collect</h2>
            
            <h3 className="text-base font-medium text-foreground mt-5 mb-2">2.1 Information You Provide</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Voice Data:</strong> When using voice translation features, audio recordings are transmitted to our translation service providers for processing. We do not permanently store your voice recordings.</li>
              <li><strong>Camera/Photo Data:</strong> When using camera translation, images are processed in real-time or transmitted to our service providers for OCR and translation. Images are not stored permanently.</li>
              <li><strong>Text Input:</strong> Text you enter for translation is transmitted to translation APIs for processing.</li>
            </ul>

            <h3 className="text-base font-medium text-foreground mt-5 mb-2">2.2 Automatically Collected Information</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Device Information:</strong> Device model, operating system version, unique device identifiers, and mobile network information.</li>
              <li><strong>Usage Data:</strong> App features used, translation language pairs, crash logs, and performance analytics.</li>
              <li><strong>Advertising ID:</strong> For displaying relevant advertisements (where applicable).</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-medium text-foreground mb-4">3. How We Use Your Information</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>To provide, maintain, and improve our translation services</li>
              <li>To process voice, text, and image translations in real-time</li>
              <li>To analyze app performance and fix technical issues</li>
              <li>To display relevant advertisements (free version)</li>
              <li>To process in-app purchases and subscriptions</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-medium text-foreground mb-4">4. Third-Party Service Providers</h2>
            <p className="mb-3">We employ third-party companies and individuals to facilitate our App, provide translation services, and perform App-related functions. These third parties have access to your information only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Translation APIs:</strong> Apple Translate, Google Translate, Tencent Translate, and other machine translation providers</li>
              <li><strong>Speech-to-Text & TTS:</strong> Apple Speech, Google Speech-to-Text, and other voice processing providers</li>
              <li><strong>Analytics:</strong> Firebase, Google Analytics, or similar services</li>
              <li><strong>Advertising:</strong> Google AdMob or similar advertising networks</li>
              <li><strong>Payment Processing:</strong> Apple App Store & Google Play Store payment systems</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-medium text-foreground mb-4">5. Data Retention</h2>
            <p>Translation data (voice, text, images) is processed in real-time and is not stored on our servers after the translation is delivered to you. Usage analytics and crash logs may be retained for up to 12 months for app improvement purposes.</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-medium text-foreground mb-4">6. Data Security</h2>
            <p>We implement industry-standard security measures including encryption in transit (TLS/SSL) for all data transmissions. However, no method of electronic storage or transmission is 100% secure, and we cannot guarantee absolute security.</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-medium text-foreground mb-4">7. Children's Privacy</h2>
            <p>Our App does not knowingly collect personally identifiable information from children under 13. If we discover that a child under 13 has provided us with personal information, we will immediately delete it.</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-medium text-foreground mb-4">8. Your Data Rights</h2>
            <p className="mb-3">Depending on your jurisdiction, you may have the right to:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Access, update, or delete your personal information</li>
              <li>Object to or restrict processing of your data</li>
              <li>Data portability</li>
              <li>Withdraw consent at any time</li>
              <li>Lodge a complaint with a supervisory authority</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-medium text-foreground mb-4">9. Changes to This Policy</h2>
            <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and within the App. Changes are effective immediately upon posting.</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-medium text-foreground mb-4">10. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us:</p>
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
