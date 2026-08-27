import Image from "next/image"

export function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-slate-200 bg-slate-50">
      <div className="flex flex-col items-center justify-center gap-4 text-center">
        <p className="text-sm text-slate-500 font-medium max-w-2xl">
          Este produto não garante resultados. O resultado depende do seu uso e dedicação. Este site não faz parte do YouTube nem do Google, e não é endossado por eles.
        </p>
        <p className="text-sm text-slate-500 font-medium">
          &copy; 2026 WinTube Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
