import { Differentiator } from "@/components/site/differentiator";
import { FeatureGrid } from "@/components/site/feature-grid";
import { FinalCta } from "@/components/site/final-cta";
import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import { Hero } from "@/components/site/hero";
import { PersonaDiagram } from "@/components/site/persona-diagram";
import { UseCases } from "@/components/site/use-cases";
import { WorkflowDiagram } from "@/components/site/workflow-diagram";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <div aria-hidden="true" className="soft-grid absolute inset-x-0 top-0 h-[760px]" />
      <Header />
      <Hero />
      <Differentiator />
      <WorkflowDiagram />
      <PersonaDiagram />
      <FeatureGrid />
      <UseCases />
      <FinalCta />
      <Footer />
    </main>
  );
}
