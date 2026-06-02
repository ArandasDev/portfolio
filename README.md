# Portfolio — Emmanoel Vieira (Arandas)

Portfolio pessoal com animações 3D na hero e transições fluidas. Single-page,
bilíngue (PT/EN), tema minimalista escuro.

## Stack

- **Next.js (App Router)** + **React** + **TypeScript**
- **Three.js** via `@react-three/fiber` + `@react-three/drei` (cena 3D da hero)
- **Framer Motion** (animações de entrada/scroll)
- **Lenis** (rolagem suave)
- **Tailwind CSS v4**

## Requisitos

- **Node.js >= 24** (veja `.nvmrc`). Com `nvm`: `nvm use`.

## Como rodar

```bash
nvm use          # garante Node 24+
npm install
npm run dev      # http://localhost:3000
```

Outros scripts:

```bash
npm run build    # build de produção
npm run start    # serve o build
npm run lint     # ESLint
```

## Editar o conteúdo

Todo o conteúdo fica centralizado e é bilíngue (`{ pt, en }`):

- **`src/content/data.ts`** — perfil, bio (`about`), lista de `projects` e links (`social`).
- **`src/i18n/translations.ts`** — rótulos de interface (menu, botões, títulos de seção).

### Pendências a confirmar

No `src/content/data.ts` há dois `TODO`:

1. **LinkedIn** — substituir `social.linkedin` pela URL real.
2. **push-or-fall** — repositório retornou 404; ajustar `description` e `href` quando confirmado.

## Rotas / versões

A versão mais recente fica sempre na raiz; as anteriores viram histórico
(ver `CLAUDE.md`):

- `/` — versão atual (hoje V3: crachá interativo, foco em tecnologia)
- `/v1` — histórico (primeira versão)
- `/v2` — histórico (layout editorial)
- `/v3` — redireciona para `/`

## Estrutura

```
src/
  app/            layout, página e estilos globais
  content/data.ts conteúdo central (perfil, projetos, links)
  i18n/           idioma (provider + traduções de UI)
  components/
    three/        cena 3D (HeroScene, FloatingObject, Starfield)
    ui/           Navbar, LanguageToggle, SmoothScroll, etc.
    sections/     Hero, About, Projects, Contact
```

## Acessibilidade

Respeita `prefers-reduced-motion`: a rolagem suave e as animações pesadas são
reduzidas para quem prefere menos movimento.
