// Página 2: a página inicial (/) passa a ser a página da WiSkills (public/pagina2).
// Para voltar para a página 1, tire "&& node scripts/pagina2.mjs" do build no package.json.
import fs from "node:fs"
fs.copyFileSync("out/pagina2/index.html", "out/index.html")
console.log("página 2 ativa em /")
