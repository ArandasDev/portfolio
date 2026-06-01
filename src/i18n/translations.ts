export type Lang = "pt" | "en";

export const LANGS: Lang[] = ["pt", "en"];

/**
 * Strings de interface (rótulos, botões, títulos de seção).
 * O conteúdo do perfil/projetos vive em `src/content/data.ts`.
 */
export const ui = {
  pt: {
    nav: { about: "Sobre", projects: "Projetos", contact: "Contato" },
    hero: {
      greeting: "Olá, eu sou",
      scroll: "Role para explorar",
      cta: "Ver projetos",
      ctaContact: "Entrar em contato",
    },
    about: { kicker: "Sobre mim", heading: "Quem é o Arandas", skills: "Tecnologias & ferramentas" },
    projects: {
      kicker: "Portfólio",
      heading: "Projetos em destaque",
      viewAll: "Ver todos os projetos",
      viewProject: "Ver projeto",
    },
    contact: {
      kicker: "Contato",
      heading: "Vamos construir algo juntos",
      subtitle:
        "Aberto a oportunidades, parcerias e boas conversas sobre tecnologia. Escolha o melhor canal:",
    },
    footer: { built: "Feito com Next.js, Three.js e muito café", rights: "Todos os direitos reservados." },
    a11y: { toggleLang: "Mudar idioma", openMenu: "Abrir menu", closeMenu: "Fechar menu" },
    v2: {
      badge: "Disponível para novos projetos",
      eyebrow: "Portfólio · 2026",
      focusKicker: "Áreas de foco",
      focus: [
        { title: "Back-end & APIs", desc: "Sistemas robustos, seguros e bem testados — da autenticação à documentação." },
        { title: "Engenharia de Dados", desc: "Transformar dados em decisões, construindo pipelines e soluções inteligentes." },
        { title: "Exploração & espaço", desc: "Curiosidade sem limites, inspirada pelos avanços da engenharia espacial." },
      ],
      selected: "Trabalhos selecionados",
      emailCta: "Enviar um email",
    },
  },
  en: {
    nav: { about: "About", projects: "Projects", contact: "Contact" },
    hero: {
      greeting: "Hi, I'm",
      scroll: "Scroll to explore",
      cta: "See projects",
      ctaContact: "Get in touch",
    },
    about: { kicker: "About me", heading: "Who is Arandas", skills: "Technologies & tools" },
    projects: {
      kicker: "Portfolio",
      heading: "Featured projects",
      viewAll: "View all projects",
      viewProject: "View project",
    },
    contact: {
      kicker: "Contact",
      heading: "Let's build something together",
      subtitle:
        "Open to opportunities, collaborations and good conversations about technology. Pick the best channel:",
    },
    footer: { built: "Built with Next.js, Three.js and a lot of coffee", rights: "All rights reserved." },
    a11y: { toggleLang: "Switch language", openMenu: "Open menu", closeMenu: "Close menu" },
    v2: {
      badge: "Available for new projects",
      eyebrow: "Portfolio · 2026",
      focusKicker: "Focus areas",
      focus: [
        { title: "Back-end & APIs", desc: "Robust, secure and well-tested systems — from auth to documentation." },
        { title: "Data Engineering", desc: "Turning data into decisions by building pipelines and smart solutions." },
        { title: "Exploration & space", desc: "Boundless curiosity, inspired by the advances of space engineering." },
      ],
      selected: "Selected work",
      emailCta: "Send an email",
    },
  },
} as const;

export type UiStrings = (typeof ui)[Lang];
