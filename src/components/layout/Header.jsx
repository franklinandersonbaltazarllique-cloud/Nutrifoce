export default function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-[#DCEDC8] bg-white/95 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl shadow-md" style={{ background: '#7CB342' }}>
            <span className="text-base font-black leading-none text-white">NF</span>
          </div>
          <div className="leading-tight">
            <p className="text-[9px] font-semibold uppercase tracking-[0.22em]" style={{ color: '#9CCC65' }}>Nutri Force</p>
            <p className="text-base font-black leading-none" style={{ color: '#33691E' }}>ENERCORN</p>
          </div>
        </div>

        <nav className="hidden items-center gap-8 text-[11px] font-semibold uppercase tracking-widest md:flex" style={{ color: '#7CB342' }}>
          <a href="#productos" className="transition-opacity hover:opacity-70">Productos</a>
          <a href="#ingredientes" className="transition-opacity hover:opacity-70">Ingredientes</a>
        </nav>

        <a href="#contacto" className="rounded-full px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.14em] text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg" style={{ background: '#7CB342' }}>
          Contáctanos
        </a>
      </div>
    </header>
  )
}