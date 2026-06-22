import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { TrustIndicators } from "@/components/sections/TrustIndicators";
import { PainPoints } from "@/components/sections/PainPoints";
import { WhyRahiSir } from "@/components/sections/WhyRahiSir";
import { Courses } from "@/components/sections/Courses";
import { Transformation } from "@/components/sections/Transformation";
import { MeetRahiSir } from "@/components/sections/MeetRahiSir";
import { SuccessStories } from "@/components/sections/SuccessStories";
import { Testimonials } from "@/components/sections/Testimonials";
import { Gallery } from "@/components/sections/Gallery";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <TrustIndicators />
        <PainPoints />
        <WhyRahiSir />
        <Courses />
        <Transformation />
        <MeetRahiSir />
        <SuccessStories />
        <Testimonials />
        <Gallery />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingCTA />
      {/* Spacer so mobile floating action bar never overlaps footer content */}
      <div aria-hidden className="h-14 sm:hidden" />
    </div>
  );
}
