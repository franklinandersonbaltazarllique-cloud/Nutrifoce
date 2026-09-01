import { heroImage, heroStats, heroTags } from '../../data/nutriforceContent'

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pb-0 pt-20 sm:pt-24" style={{ background: 'linear-gradient(145deg, #33691E 0%, #558B2F 35%, #7CB342 70%, #9CCC65 100%)' }}>
      <div className="pointer-events-none absolute right-8 top-12 h-96 w-96 rounded-full border border-white/10" />
      <div className="pointer-events-none absolute -bottom-24 -left-20 h-80 w-80 rounded-full bg-white/5" />

      <div className="mx-auto grid max-w-6xl items-end gap-6 px-4 sm:px-6 md:grid-cols-2 md:gap-8">
        <div className="pb-10 pt-4 sm:pb-16 sm:pt-6">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/20 px-3 py-1.5 sm:mb-7 sm:px-4">
            <span className="text-sm">🌿</span>
            <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-green-50 sm:text-[10px]">Natural · Nutritivo · Energizante</span>
          </div>

          <h1 className="mb-5 text-4xl font-black leading-[0.96] tracking-tight text-white sm:text-5xl md:text-6xl">
            Activa tu energía
            <br />
            <span className="block text-3xl font-light italic text-[#F1F8E9] sm:text-4xl md:text-5xl" style={{ fontFamily: 'Lora, Georgia, serif' }}>
              supera tu día
            </span>
          </h1>

          <p className="mb-7 max-w-md text-[14px] font-normal leading-relaxed text-green-50 sm:text-[15px]">
            Barritas nutritivas con base de maiz seleccionado, sin conservantes artificiales. <strong className="font-bold text-white">25g de pura nutrición</strong> — alto en fibras y proteínas, fortificado con vitaminas.
          </p>

          <div className="mb-8 flex flex-wrap gap-3 sm:gap-8">
            {heroStats.map((item) => (
              <div key={item.label}>
                <p className="text-2xl font-black leading-none text-white sm:text-3xl">{item.value}</p>
                <p className="mt-1 text-[10px] font-medium uppercase tracking-wider text-green-100 sm:text-[11px]">{item.label}</p>
              </div>
            ))}
          </div>

          <div className="mb-8 flex flex-wrap gap-2">
            {heroTags.map((tag) => (
              <span key={tag} className="rounded-full border border-white/25 bg-white/20 px-3 py-1.5 text-[9px] font-semibold tracking-wide text-green-50 sm:text-[10px]">{tag}</span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <a href="#productos" className="rounded-full px-5 py-3 text-xs font-black tracking-wide text-[#33691E] shadow-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-2xl sm:px-7 sm:py-3.5 sm:text-sm" style={{ background: '#FFEE58' }}>
              Ver Productos →
            </a>
            <a href="#ingredientes" className="rounded-full border-2 border-white/50 px-5 py-3 text-xs font-semibold tracking-wide text-white transition-all duration-200 hover:bg-white/10 sm:px-7 sm:py-3.5 sm:text-sm">
              Ingredientes
            </a>
          </div>
        </div>

        <div className="relative flex items-end justify-center">
          <div className="pointer-events-none absolute bottom-0 left-1/2 h-24 w-52 -translate-x-1/2 rounded-full blur-3xl sm:h-28 sm:w-64" style={{ background: '#FFEE5830' }} />
          <div className="relative w-52 sm:w-56 md:w-72" style={{ animation: 'float 4s ease-in-out infinite' }}>
            <img src={heroImage} alt="ENERCORN Maíz Original — empaque plateado 25g" className="w-full rounded-2xl object-contain drop-shadow-2xl" style={{ transform: 'rotate(-5deg)' }} />
            <div className="absolute -right-4 -top-4 rounded-2xl px-2.5 py-2 text-center shadow-xl rotate-6 sm:-right-6 sm:px-3" style={{ background: '#FFEE58' }}>
              <p className="text-[9px] font-black uppercase leading-none sm:text-[10px]" style={{ color: '#33691E' }}>Peso Neto</p>
              <p className="text-lg font-black leading-tight sm:text-xl" style={{ color: '#33691E' }}>25g</p>
            </div>
            <div className="absolute -left-5 top-1/3 rounded-2xl bg-white px-2.5 py-2 text-center shadow-lg -rotate-3 sm:-left-8">
              <p className="text-sm sm:text-base">🌽</p>
              <p className="text-[8px] font-bold uppercase tracking-wide sm:text-[9px]" style={{ color: '#33691E' }}>Maíz</p>
            </div>
            <div className="absolute -right-5 bottom-1/4 rounded-2xl bg-white px-2.5 py-2 text-center shadow-lg rotate-3 sm:-right-7">
              <p className="text-sm sm:text-base">🍯</p>
              <p className="text-[8px] font-bold uppercase tracking-wide sm:text-[9px]" style={{ color: '#33691E' }}>Miel</p>
            </div>
          </div>
        </div>
      </div>

      <div className="h-14 bg-white" style={{ clipPath: 'ellipse(58% 100% at 50% 100%)', marginTop: '-2px' }} />
    </section>
  )
}