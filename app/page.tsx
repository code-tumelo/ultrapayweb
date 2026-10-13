import { Audiences } from "@/components/audiences";
import { Features } from "@/components/features";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { Navbar } from "@/components/navbar";
import { Partners } from "@/components/partners";
import { Unbanked } from "@/components/unbanked";
import { Why } from "@/components/why";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Audiences />
      <HowItWorks />
      <Unbanked />
      <Features />
      <Why />
      <Partners />
      <Footer />
    </main>
  );
}
