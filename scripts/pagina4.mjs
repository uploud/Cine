// Página 4: a página inicial (/) passa a ser a página da WinTube no formato CutFlow (public/pagina4).
// Para voltar para a página 1, tire "&& node scripts/pagina4.mjs" do build no package.json.
import fs from "node:fs"
fs.copyFileSync("out/pagina4/index.html", "out/index.html")
console.log("página 4 ativa em /")
