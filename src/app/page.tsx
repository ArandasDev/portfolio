import type { Metadata } from "next";
import { NavbarV3 } from "@/components/v3/NavbarV3";
import { HeroV3 } from "@/components/v3/HeroV3";
import { AboutV3 } from "@/components/v3/AboutV3";
import { ProjectsV2 } from "@/components/v2/ProjectsV2";
import { ContactV2 } from "@/components/v2/ContactV2";
import { Footer } from "@/components/Footer";
import { profile } from "@/content/data";

// A versão mais recente do portfolio vive sempre na raiz. Versões anteriores
// ficam como histórico em /v1, /v2, ... (ver CLAUDE.md).
export const metadata: Metadata = {
  title: `${profile.name} — ${profile.role.en}`,
  description: profile.tagline.en,
};

export default function Home() {
  return (
    <div className="theme-v3">
      <NavbarV3 />
      <main>
        <HeroV3 />
        <AboutV3 />
        <ProjectsV2 />
        <ContactV2 />
      </main>
      <Footer />
    </div>
  );
}
