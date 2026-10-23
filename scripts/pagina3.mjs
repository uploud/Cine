// Página 3: a página inicial (/) passa a ser a página da WinTube no modelo da Wi Afiliados (public/pagina3).
// Para voltar para a página 1, tire "&& node scripts/pagina3.mjs" do build no package.json.
import fs from "node:fs"
fs.copyFileSync("out/pagina3/index.html", "out/index.html")
console.log("página 3 ativa em /")
