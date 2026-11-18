# Astro 5: zero JavaScript por padrão

Material do vídeo **"Astro 5: Zero JavaScript por Padrão"** do canal da [Digital Lift](https://digitallift.com.br).

Um projeto Astro 5 completo com tudo o que aparece no vídeo:

| Recurso | Onde está |
|---|---|
| Zero JS por padrão | `src/pages/index.astro` e `src/components/Header.astro` viram HTML puro |
| Content Collections + Zod | `src/content.config.ts` e `src/content/blog/*.md` |
| `getCollection` / `getEntry` | `src/pages/blog/index.astro` e `src/pages/blog/[id].astro` |
| Imagens otimizadas (WebP, lazy, sem CLS) | `<Image />` de `astro:assets` com a capa do frontmatter |
| Islands com React, Svelte e Vue | `src/components/` + `astro.config.mjs` |
| `client:load`, `client:visible`, `client:idle` | `src/pages/index.astro` |
| View Transitions | `<ClientRouter />` em `src/layouts/Layout.astro` + `transition:name` no blog |

> No Astro 5 o componente `<ViewTransitions />` foi renomeado para `<ClientRouter />`. O import é `import { ClientRouter } from 'astro:transitions'`.

## Como rodar (passo a passo)

1. Instale o [Node.js](https://nodejs.org) (versão 18.20 ou mais nova; a LTS serve).
2. Baixe este repositório: botão verde **Code → Download ZIP** e descompacte.
3. Abra o terminal na pasta e instale as dependências:
   ```bash
   npm install
   ```
4. Rode em modo de desenvolvimento e abra http://localhost:4321:
   ```bash
   npm run dev
   ```
5. Gere a versão final (pasta `dist/`):
   ```bash
   npm run build
   ```

## Teste o schema
Abra `src/content/blog/primeiro-post.md`, apague a linha `title:` e rode `npm run build`. O build quebra com `InvalidContentEntryDataError` dizendo que `title` é obrigatório.

## Começar um projeto do zero
```bash
npm create astro@latest
```

## Deploy
Suba o repositório no GitHub e importe na [Vercel](https://vercel.com/new) (ou Netlify / Cloudflare Pages): o Astro é detectado sozinho.

Veja `QUANDO-USAR.md` para decidir entre Astro e Next.js.
