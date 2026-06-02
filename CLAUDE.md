# Convenções do projeto

## Versionamento do design (regra obrigatória)

A **versão mais recente** do portfolio mora **sempre na raiz `/`**. As versões
anteriores viram **histórico** em `/v1`, `/v2`, `/v3`, ... e exibem o
`HistoryBanner` com link para a versão atual.

Estado atual das rotas:

| Rota   | Conteúdo                          |
| ------ | --------------------------------- |
| `/`    | Versão atual (mais nova) — hoje V3 |
| `/v1`  | Histórico — V1                    |
| `/v2`  | Histórico — V2                    |
| `/v3`  | Redireciona para `/`              |

### Como adicionar uma nova versão (ex.: V4)

1. Crie os componentes da nova versão (ex.: `src/components/v4/...`).
2. Mova o conteúdo atual da raiz para uma rota de histórico: o que está em
   `src/app/page.tsx` (hoje V3) passa a ser uma página real em `src/app/v3/page.tsx`
   (substituindo o redirect), adicionando `<HistoryBanner version="v3" />`.
3. Faça `src/app/page.tsx` renderizar a V4 (a nova versão atual).
4. Adicione o redirect da versão atual antiga, se desejar manter o atalho.
5. Atualize os seletores de versão nas navbars (pill "atual" → `/`, demais → `/vN`).

## Stack & comandos

- Next.js (App Router) + React + TypeScript + Tailwind v4 + Three.js (R3F) + Framer Motion + Lenis.
- **Node >= 24** (use `nvm use`).
- `npm run dev` · `npm run build` · `npm run lint`.

## Conteúdo

Conteúdo centralizado e bilíngue (PT/EN) em `src/content/data.ts`; strings de UI
em `src/i18n/translations.ts`.
