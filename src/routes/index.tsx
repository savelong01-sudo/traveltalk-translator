import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Features } from "@/components/site/Features";
import { HowItWorks } from "@/components/site/HowItWorks";
import { Showcase } from "@/components/site/Showcase";
import { Stats } from "@/components/site/Stats";
import { DownloadCTA } from "@/components/site/DownloadCTA";
import { LegalBanner } from "@/components/site/LegalBanner";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Showcase />
      <Stats />
      <DownloadCTA />
      <LegalBanner />
      <Footer />
    </main>
  );
}
