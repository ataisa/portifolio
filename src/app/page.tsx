"use client";
import { useRef } from "react";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { ProjectSection } from "@/components/ProjectSection";
import { SkillSection } from "@/components/SkillSection";
import { twMerge } from "tailwind-merge";

export default function Home() {
  const mainRef = useRef<HTMLElement>(null);
  return (
    <main
      ref={mainRef}
      className={twMerge(
        "bg-white-linear",
        "max-h-[100vh] w-full max-w-[100vw] overflow-x-hidden overflow-y-scroll",
        "relative",
        "snap-y snap-proximity snap-start scroll-smooth",
      )}
    >
      <Nav scrollRef={mainRef} />
      <AboutSection />
      <SkillSection />
      <ProjectSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
