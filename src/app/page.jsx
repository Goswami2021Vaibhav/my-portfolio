import FinalCTA from "@/components/FinalCTA";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/Services";
import WorkPreview from "@/components/WorkPreview";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <WorkPreview />
      <ServicesSection />
      <FinalCTA/>
    </main>
  )
}