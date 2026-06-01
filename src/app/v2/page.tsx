import type { Metadata } from "next";
import { NavbarV2 } from "@/components/v2/NavbarV2";
import { HeroV2 } from "@/components/v2/HeroV2";
import { AboutV2 } from "@/components/v2/AboutV2";
import { ProjectsV2 } from "@/components/v2/ProjectsV2";
import { ContactV2 } from "@/components/v2/ContactV2";
import { Footer } from "@/components/Footer";
import { profile } from "@/content/data";

export const metadata: Metadata = {
  title: `${profile.name} — ${profile.role.en} · v2`,
  description: profile.tagline.en,
};

export default function V2Page() {
  return (
    <div className="theme-v2">
      <NavbarV2 />
      <main>
        <HeroV2 />
        <AboutV2 />
        <ProjectsV2 />
        <ContactV2 />
      </main>
      <Footer />
    </div>
  );
}
