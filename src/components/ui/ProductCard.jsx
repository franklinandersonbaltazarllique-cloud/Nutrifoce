export default function ProductCard({ product }) {
  return (
    <div
      className="relative w-full max-w-sm overflow-hidden rounded-[2.5rem] shadow-2xl"
      style={{
        background: `linear-gradient(160deg, ${product.accent}15 0%, ${product.accent}28 100%)`,
        border: `2px solid ${product.accent}30`,
        animation: 'cardIn 0.4s cubic-bezier(.22,1,.36,1)',
      }}
    >
      {product.isHero ? (
        <div className="absolute left-1/2 top-5 z-10 -translate-x-1/2 whitespace-nowrap rounded-full bg-[#FFEE58] px-4 py-1.5 text-[10px] font-black uppercase tracking-widest text-[#33691E] shadow-lg">
          ⭐ Más Vendido
        </div>
      ) : null}

      <div className="relative h-72 overflow-hidden">
        <img src={product.image} alt={product.name} className="h-full w-full object-cover object-center" />
        <div className="absolute inset-0" style={{ background: `linear-gradient(to bottom, transparent 50%, ${product.accent}25 100%)` }} />
        <div className="absolute bottom-4 right-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/90 text-4xl shadow-lg backdrop-blur-sm">{product.icon}</div>
        <span
          className="absolute left-5 top-5 rounded-full px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.14em] text-white shadow-md"
          style={{ background: product.accent, display: product.isHero ? 'none' : 'inline' }}
        >
          {product.badge}
        </span>
      </div>

      <div className="px-7 py-7">
        <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.18em]" style={{ color: product.accent }}>{product.subtitle}</p>
        <h3 className="mb-3 text-2xl font-black leading-tight" style={{ color: '#33691E' }}>{product.name}</h3>
        <p className="mb-5 text-sm font-normal leading-relaxed" style={{ color: '#558B2F' }}>{product.description}</p>

        <div className="mb-5 flex flex-wrap gap-2">
          {product.ingredients.map((ingredient) => (
            <span key={ingredient} className="rounded-full border px-3 py-1.5 text-[10px] font-semibold" style={{ color: product.accent, borderColor: `${product.accent}55`, background: `${product.accent}15` }}>
              {ingredient}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-2">
          {['25g Peso Neto', 'Sin Conservantes', 'Energía Instantánea'].map((tag) => (
            <span key={tag} className="rounded-full bg-[#F1F8E9] px-3 py-1.5 text-[10px] font-semibold" style={{ color: '#558B2F' }}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}