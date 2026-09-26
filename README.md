# Dinheiro do Casal — Página de Vendas

Página de vendas do produto digital **Dinheiro do Casal** (planilha financeira do casal + materiais de apoio + aula gravada), de Márcio Morais.

- **Produção:** `dinheirodocasal.mentormarciomorais.com.br` (GitHub Pages, publicado a partir da raiz da branch `main`, com `CNAME` apontando para o domínio custom).
- **Stack:** HTML estático + Tailwind CSS (compilado para produção, sem CDN) + JS vanilla.
- **Variáveis de configuração:** dentro de `index.html`, no `<script>` final — `CHECKOUT_URL` (link de checkout da Hotmart) e, no `<head>`, `META_PIXEL_ID` (Pixel da Meta).

## Estrutura

```
index.html          página principal
termos.html          termos de uso + política de privacidade
disclosure.html       aviso de divulgação
assets/
  css/                input.css (fonte Tailwind) + styles.css (build de produção)
  img/                fotos otimizadas (WebP) e ícones/favicons
  svg/                fontes dos SVGs (logo, favicon)
  CREDITOS.md         créditos das fotos de banco de imagens
```

## Rebuild do CSS

```bash
npm install
npx @tailwindcss/cli -i assets/css/input.css -o assets/css/styles.css --minify
```

## Pendências

Ver `RELATORIO_FINAL.md` na raiz do projeto (fora deste repositório) para a lista completa de pendências (checkout, DNS, termos/privacidade, etc.).
