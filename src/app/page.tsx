import { Differentiator } from "@/components/site/differentiator";
import { FaqSection } from "@/components/site/faq-section";
import { FeatureGrid } from "@/components/site/feature-grid";
import { FinalCta } from "@/components/site/final-cta";
import { FinalMessageCta } from "@/components/site/final-message-cta";
import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import { Hero } from "@/components/site/hero";
import { PersonaDiagram } from "@/components/site/persona-diagram";
import { ProductExample } from "@/components/site/product-example";
import { StakesSection } from "@/components/site/stakes-section";
import { TrustSection } from "@/components/site/trust-section";
import { UseCases } from "@/components/site/use-cases";
import { VoiceSection } from "@/components/site/voice-section";
import { WorkflowDiagram } from "@/components/site/workflow-diagram";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <div aria-hidden="true" className="soft-grid absolute inset-x-0 top-0 h-[760px]" />
      <Header />
      <Hero />
      <StakesSection />
      <Differentiator />
      <WorkflowDiagram />
      <ProductExample />
      <PersonaDiagram />
      <FeatureGrid />
      <VoiceSection />
      <UseCases />
      <TrustSection />
      <FinalCta />
      <FaqSection />
      <FinalMessageCta />
      <Footer />
    </main>
  );
}
