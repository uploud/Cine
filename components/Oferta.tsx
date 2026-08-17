import React from "react"

export function Oferta() {
  return (
    <section id="oferta" className="bg-[#07080E] border-t border-[#10141F] py-24 px-4">
      <div className="max-w-[520px] mx-auto rounded-[20px] border border-[#1C2334] bg-[linear-gradient(180deg,#0C1020,#080A12)] relative overflow-hidden p-8 sm:p-10 shadow-2xl">
        {/* Top gradient bar */}
        <div className="absolute top-0 left-0 w-full h-[2px] bg-[linear-gradient(100deg,#4C8DF7_0%,#6A2EF0_100%)]" />
        
        <div className="text-wt-blue font-mono text-[12px] uppercase font-bold tracking-widest mb-4">
          Licença Vitalícia
        </div>
        
        <div className="font-mono font-[800] text-[46px] text-white leading-none mb-2">
          R$ 57,97 <span className="text-wt-muted text-[16px] font-normal tracking-normal align-middle">à vista</span>
        </div>
        
        <p className="text-wt-muted text-[14px] font-sans mb-8">
          Uma vez. Sem mensalidade, sem crédito, sem limite de vídeos.
        </p>

        <ul className="space-y-4 mb-8">
          {[
            "Baixa vídeo e playlist inteira em até 4K",
            "Transcrição automática e roteiro com IA",
            "Corte vertical com enquadramento e rastreio de rosto",
            "Legenda viral palavra por palavra",
            "Montagem com trilha, pronta pra postar",
            "Atualizações inclusas pra sempre"
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-[14px] text-wt-ink font-sans">
              <div className="w-[8px] h-[8px] rounded-full mt-[6px] shrink-0 bg-[linear-gradient(100deg,#4C8DF7_0%,#6A2EF0_100%)]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <a 
          href="https://pay.kiwify.com.br/yTa2MmY" 
          className="block w-full text-center bg-[linear-gradient(100deg,#4C8DF7_0%,#6A2EF0_100%)] text-white font-mono font-[700] text-[16px] rounded-[10px] py-[16px] shadow-[0_10px_30px_-14px_rgba(76,141,247,0.9)] hover:opacity-90 transition-opacity mb-4"
        >
          Comprar o WinTube
        </a>
        
        <div className="text-center font-mono text-[11px] text-[#4E566E]">
          compra segura via Kiwify · acesso imediato por e-mail
        </div>
      </div>
    </section>
  )
}
