#!/usr/bin/env node
// Falha (exit 1) com aviso claro se o link de checkout da Hotmart ainda estiver
// com o placeholder. Rode antes de publicar: npm run check
const fs = require("fs");
const path = require("path");

const file = path.join(__dirname, "..", "index.html");
const html = fs.readFileSync(file, "utf-8");

const placeholders = ["CHECKOUT_ID", "OFFER_CODE"];
const found = placeholders.filter((p) => html.includes(p));

if (found.length) {
  console.error("\n⚠  ATENÇÃO: o link de checkout ainda está com placeholder(s): " + found.join(", "));
  console.error("   Abra index.html, ache a variável CHECKOUT_URL (marcada com TODO-PENDENTE)");
  console.error("   e troque pelo link real do produto na Hotmart antes de publicar.\n");
  process.exit(1);
} else {
  console.log("✓ CHECKOUT_URL sem placeholders — pronto para publicar.");
  process.exit(0);
}
