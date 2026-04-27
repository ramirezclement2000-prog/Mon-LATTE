import { AnchorScroll } from "@/components/AnchorScroll";
import { BentoValues } from "@/components/BentoValues";
import { EditorialMenu } from "@/components/EditorialMenu";
import { EventSection } from "@/components/EventSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { PartnersSection } from "@/components/PartnersSection";
import { SocialSection } from "@/components/SocialSection";
import { StackSection } from "@/components/StackSection";
import { StorySection } from "@/components/StorySection";
import { VisitSection } from "@/components/VisitSection";

export default function Home() {
  return (
    <>
      <AnchorScroll />
      <Navbar />
      <main className="relative bg-cream">
        <StackSection id="hero" className="bg-cream bg-paper-grain">
          <Hero />
        </StackSection>

        <StackSection id="values" className="bg-[#f2ede5]">
          <BentoValues />
        </StackSection>

        <StackSection id="experience" className="bg-[#fbf2e8]">
          <ExperienceSection />
        </StackSection>

        <StackSection id="story" className="bg-[#fcf4ea]">
          <StorySection />
        </StackSection>

        <StackSection id="menu" className="bg-[#fffaf4]">
          <EditorialMenu />
        </StackSection>

        <StackSection id="events" className="bg-[#f6eee3]">
          <EventSection />
        </StackSection>

        <StackSection id="socials" className="min-h-0 bg-[#f3ece1] pb-10">
          <SocialSection />
        </StackSection>

        <StackSection id="partners" className="bg-[#f6efe6]">
          <PartnersSection />
        </StackSection>

        <StackSection id="visit" className="bg-text">
          <VisitSection />
        </StackSection>
      </main>
    </>
  );
}
