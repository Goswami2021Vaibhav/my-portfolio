import BlogSection from "@/components/BlogSection";
import FinalCTA from "@/components/FinalCTA";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/Services";
import TestimonialMarquee from "@/components/TestimonialMarquee";
import WorkPreview from "@/components/WorkPreview";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <WorkPreview />
      <ServicesSection />
      <TestimonialMarquee />
      {/* <BlogSection/> */}
      <FinalCTA/>
    </main>
  )
}