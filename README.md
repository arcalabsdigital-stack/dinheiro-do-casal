# Dinheiro do Casal — Página de Vendas

Página de vendas do produto digital **Dinheiro do Casal** (planilha financeira do casal + materiais de apoio + aula gravada), de Márcio Morais.

- **Produção:** `dinheirodocasal.mentormarciomorais.com.br` (GitHub Pages, publicado a partir da raiz da branch `main`, com `CNAME` apontando para o domínio custom).
- **Stack:** HTML estático + Tailwind CSS v4 (compilado para produção, sem CDN) + JS vanilla (IntersectionObserver para animação de entrada, barra fixa de compra no celular). Tipografia: Poppins (corpo/UI) + Fraunces (títulos de destaque).
- **Variáveis de configuração:** dentro de `index.html` — `CHECKOUT_URL` (JS, no fim do arquivo) e `META_PIXEL_ID` (dentro do `initPixel()`, carregado só após o `load` da página, via `requestIdleCallback`).
- **Design v2 (redesign):** a v1 (mais simples) ficou marcada com a tag git `v1-primeira-versao`. Mockups de produto (planilhas, e-books, aula) são imagens estáticas renderizadas a partir de HTML/CSS via Playwright — os arquivos-fonte não fazem parte deste repositório (pasta local `_mockups/`, fora do commit).

## Estrutura

```
index.html          página principal
termos.html          termos de uso + política de privacidade
disclosure.html       aviso de divulgação
scripts/
  check-checkout.js  verifica se o CHECKOUT_URL ainda tem placeholder (npm run check)
assets/
  css/                input.css (fonte Tailwind) + styles.css (build de produção)
  img/                fotos otimizadas (WebP, com srcset) e ícones/favicons
  img/mockups/        mockups de produto (planilha, e-books, aula) em WebP
  svg/                fontes dos SVGs (logo, favicon)
  CREDITOS.md         créditos das fotos de banco de imagens
```

## Rebuild do CSS

```bash
npm install
npm run build:css
```

## Antes de publicar

```bash
npm run check   # falha se o CHECKOUT_URL ainda tiver CHECKOUT_ID/OFFER_CODE de exemplo
```

## Pendências

Ver `RELATORIO_FINAL.md` na raiz do projeto (fora deste repositório) para a lista completa de pendências (checkout, DNS, termos/privacidade, etc.).
