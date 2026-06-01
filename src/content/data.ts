import type { Lang } from "@/i18n/translations";

/**
 * CONTEÚDO CENTRAL DO PORTFOLIO
 * -----------------------------
 * Edite este arquivo para atualizar todo o conteúdo do site.
 * Textos bilíngues usam o formato { pt: "...", en: "..." }.
 */

export type Localized<T = string> = Record<Lang, T>;

export interface Project {
  slug: string;
  title: string;
  description: Localized;
  tags: string[];
  href: string;
  /** Rótulo opcional (ex.: "Projeto anterior"). */
  badge?: Localized;
}

export const profile = {
  name: "Emmanoel Vieira",
  nickname: "Arandas",
  role: {
    pt: "Engenheiro de Software",
    en: "Software Engineer",
  } satisfies Localized,
  tagline: {
    pt: "Desenvolvo soluções que facilitam a vida de pessoas e empresas.",
    en: "I build software that makes life easier for people and companies.",
  } satisfies Localized,
};

export const about = {
  paragraphs: {
    pt: [
      "Olá! Me chamo Emmanoel — mas pode me chamar de Arandas. Sou engenheiro de software movido por um propósito: usar o melhor da tecnologia para impactar a vida de milhões de pessoas e empresas.",
      "Sou apaixonado de verdade pela forma como a tecnologia evolui e pelo poder que ela tem de transformar o cotidiano. Essa mesma curiosidade me leva às estrelas: acompanho de perto a engenharia espacial e os avanços da SpaceX, as missões à Lua e o futuro da exploração do espaço.",
      "Acredito que aprender é uma jornada sem fim. Hoje me aprofundo em Engenharia de Dados para construir soluções cada vez mais inteligentes — sempre disposto a ir até os limites do horizonte.",
    ],
    en: [
      "Hi! I'm Emmanoel — but you can call me Arandas. I'm a software engineer driven by one purpose: using the best of technology to impact the lives of millions of people and companies.",
      "I'm genuinely passionate about the way technology evolves and its power to transform everyday life. That same curiosity pulls me toward the stars: I closely follow space engineering and SpaceX's progress, the missions to the Moon, and the future of space exploration.",
      "I believe learning is a never-ending journey. These days I'm diving into Data Engineering to build ever smarter solutions — always ready to push to the edge of the horizon.",
    ],
  } satisfies Localized<string[]>,
  skills: [
    "TypeScript",
    "Node.js",
    "Express",
    "REST APIs",
    "MongoDB",
    "JWT",
    "Jest",
    "Kotlin",
    "Android",
    "Data Engineering",
    "Git",
  ],
};

export const projects: Project[] = [
  {
    slug: "to-do-api",
    title: "to-do-api",
    description: {
      pt: "API REST para gerenciamento de tarefas com autenticação JWT, testes automatizados e documentação Swagger.",
      en: "REST API for task management featuring JWT authentication, automated tests and Swagger documentation.",
    },
    tags: ["Node.js", "Express", "TypeScript", "MongoDB", "JWT", "Jest", "Swagger"],
    href: "https://github.com/ArandasDev/to-do-api",
  },
  {
    slug: "smartweather",
    title: "SmartWeather",
    description: {
      pt: "Aplicativo Android de previsão do tempo com clima atual, próximos dias, alertas e mapas meteorológicos.",
      en: "Android weather app with current conditions, daily forecast, alerts and meteorological maps.",
    },
    tags: ["Kotlin", "Android", "Gradle"],
    href: "https://github.com/ArandasDev/SmartWeather",
    badge: { pt: "Projeto anterior", en: "Past project" },
  },
  {
    // TODO: confirmar descrição e URL — o repositório retornou 404 (privado ou nome diferente).
    slug: "push-or-fall",
    title: "push-or-fall",
    description: {
      pt: "Projeto pessoal em desenvolvimento. Em breve mais detalhes por aqui.",
      en: "Personal project in the works. More details coming soon.",
    },
    tags: ["Em breve", "Coming soon"],
    href: "https://github.com/ArandasDev?tab=repositories",
  },
];

export const social = {
  email: "emmanoelkratos2@gmail.com",
  github: "https://github.com/ArandasDev",
  githubRepos: "https://github.com/ArandasDev?tab=repositories",
  // TODO: substituir pela URL real do LinkedIn.
  linkedin: "https://www.linkedin.com/in/arandasdev",
};
