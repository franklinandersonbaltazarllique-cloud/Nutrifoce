import { heroImage, heroStats, heroTags } from '../../data/nutriforceContent'

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-24 pb-0" style={{ background: 'linear-gradient(145deg, #33691E 0%, #558B2F 35%, #7CB342 70%, #9CCC65 100%)' }}>
      <div className="pointer-events-none absolute right-8 top-12 h-96 w-96 rounded-full border border-white/10" />
      <div className="pointer-events-none absolute -bottom-24 -left-20 h-80 w-80 rounded-full bg-white/5" />

      <div className="mx-auto grid max-w-6xl items-end gap-8 px-6 md:grid-cols-2">
        <div className="pb-16 pt-6">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/20 px-4 py-1.5">
            <span className="text-sm">🌿</span>
            <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-green-50">Natural · Nutritivo · Energizante</span>
          </div>

          <h1 className="mb-5 text-5xl font-black leading-[1.08] tracking-tight text-white md:text-6xl">
            Activa tu energía
            <br />
            <span className="text-4xl font-light italic text-[#F1F8E9] md:text-5xl" style={{ fontFamily: 'Lora, Georgia, serif' }}>
              supera tu día
            </span>
          </h1>

          <p className="mb-7 max-w-md text-[15px] font-normal leading-relaxed text-green-50">
            Barritas nutritivas con base de maiz seleccionado, sin conservantes artificiales. <strong className="font-bold text-white">25g de pura nutrición</strong> — alto en fibras y proteínas, fortificado con vitaminas.
          </p>

          <div className="mb-8 flex gap-8">
            {heroStats.map((item) => (
              <div key={item.label}>
                <p className="text-3xl font-black leading-none text-white">{item.value}</p>
                <p className="mt-1 text-[11px] font-medium uppercase tracking-wider text-green-100">{item.label}</p>
              </div>
            ))}
          </div>

          <div className="mb-8 flex flex-wrap gap-2">
            {heroTags.map((tag) => (
              <span key={tag} className="rounded-full border border-white/25 bg-white/20 px-3 py-1.5 text-[10px] font-semibold tracking-wide text-green-50">{tag}</span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <a href="#productos" className="rounded-full px-7 py-3.5 text-sm font-black tracking-wide text-[#33691E] shadow-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-2xl" style={{ background: '#FFEE58' }}>
              Ver Productos →
            </a>
            <a href="#ingredientes" className="rounded-full border-2 border-white/50 px-7 py-3.5 text-sm font-semibold tracking-wide text-white transition-all duration-200 hover:bg-white/10">
              Ingredientes
            </a>
          </div>
        </div>

        <div className="relative flex items-end justify-center">
          <div className="pointer-events-none absolute bottom-0 left-1/2 h-28 w-64 -translate-x-1/2 rounded-full blur-3xl" style={{ background: '#FFEE5830' }} />
          <div className="relative w-56 md:w-72" style={{ animation: 'float 4s ease-in-out infinite' }}>
            <img src={heroImage} alt="ENERCORN Maíz Original — empaque plateado 25g" className="w-full rounded-2xl object-contain drop-shadow-2xl" style={{ transform: 'rotate(-5deg)' }} />
            <div className="absolute -right-6 -top-4 rounded-2xl px-3 py-2 text-center shadow-xl rotate-6" style={{ background: '#FFEE58' }}>
              <p className="text-[10px] font-black uppercase leading-none" style={{ color: '#33691E' }}>Peso Neto</p>
              <p className="text-xl font-black leading-tight" style={{ color: '#33691E' }}>25g</p>
            </div>
            <div className="absolute -left-8 top-1/3 rounded-2xl bg-white px-3 py-2 text-center shadow-lg -rotate-3">
              <p className="text-base">🌽</p>
              <p className="text-[9px] font-bold uppercase tracking-wide" style={{ color: '#33691E' }}>Maíz</p>
            </div>
            <div className="absolute -right-7 bottom-1/4 rounded-2xl bg-white px-3 py-2 text-center shadow-lg rotate-3">
              <p className="text-base">🍯</p>
              <p className="text-[9px] font-bold uppercase tracking-wide" style={{ color: '#33691E' }}>Miel</p>
            </div>
          </div>
        </div>
      </div>

      <div className="h-14 bg-white" style={{ clipPath: 'ellipse(58% 100% at 50% 100%)', marginTop: '-2px' }} />
    </section>
  )
}