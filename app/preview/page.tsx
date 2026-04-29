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

export default function Preview() {
  return (
    <main className="min-h-screen bg-cream bg-paper-grain text-text">
      <AnchorScroll />
      <Navbar />
      <StackSection id="hero">
        <Hero />
      </StackSection>
      <StackSection id="values">
        <BentoValues />
      </StackSection>
      <StackSection id="experience">
        <ExperienceSection />
      </StackSection>
      <StackSection id="story">
        <StorySection />
      </StackSection>
      <StackSection id="menu">
        <EditorialMenu />
      </StackSection>
      <StackSection id="events">
        <EventSection />
      </StackSection>
      <StackSection id="socials">
        <SocialSection />
      </StackSection>
      <StackSection id="partners">
        <PartnersSection />
      </StackSection>
      <StackSection id="visit" className="bg-text">
        <VisitSection />
      </StackSection>
    </main>
  );
}
