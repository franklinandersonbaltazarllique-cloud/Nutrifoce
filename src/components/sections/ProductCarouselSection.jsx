import { useState } from 'react'
import { products } from '../../data/nutriforceContent'
import SectionBadge from '../ui/SectionBadge'
import ProductCard from '../ui/ProductCard'

export default function ProductCarouselSection() {
  const [current, setCurrent] = useState(0)
  const total = products.length
  const currentProduct = products[current]

  const prev = () => setCurrent((value) => (value - 1 + total) % total)
  const next = () => setCurrent((value) => (value + 1) % total)

  return (
    <section id="productos" className="overflow-hidden bg-white px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <SectionBadge>Nuestros Sabores</SectionBadge>
          <h2 className="mb-4 text-5xl font-black leading-tight tracking-tight md:text-6xl" style={{ color: '#33691E' }}>
            5 Variedades, <span className="font-light italic" style={{ fontFamily: 'Lora, Georgia, serif', color: '#7CB342' }}>una sola energía</span>
          </h2>
          <p className="text-lg font-semibold" style={{ color: '#8BC34A' }}>elige tu sabor favorito</p>
        </div>

        <div className="relative flex flex-col items-center">
          <div className="mb-8 flex gap-2">
            {products.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className="rounded-full transition-all duration-300"
                style={{
                  width: index === current ? '28px' : '8px',
                  height: '8px',
                  background: index === current ? currentProduct.accent : '#DCEDC8',
                }}
                aria-label={`Ver producto ${index + 1}`}
              />
            ))}
          </div>

          <div className="flex w-full items-center justify-center gap-4 md:gap-6">
            <button
              onClick={prev}
              aria-label="Producto anterior"
              className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border-2 text-lg font-black transition-all duration-200 hover:-translate-x-1 hover:shadow-md md:h-14 md:w-14"
              style={{ borderColor: currentProduct.accent, color: currentProduct.accent, background: `${currentProduct.accent}10` }}
            >
              ←
            </button>

            <ProductCard product={currentProduct} />

            <button
              onClick={next}
              aria-label="Producto siguiente"
              className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border-2 text-lg font-black transition-all duration-200 hover:translate-x-1 hover:shadow-md md:h-14 md:w-14"
              style={{ borderColor: currentProduct.accent, color: currentProduct.accent, background: `${currentProduct.accent}10` }}
            >
              →
            </button>
          </div>

          <div className="mt-4 flex items-center rounded-full px-5 py-2 text-sm font-bold" style={{ background: '#F1F8E9', color: '#558B2F' }}>
            {current + 1} / {total}
          </div>

          <div className="mt-6 flex gap-3">
            {products.map((product, index) => (
              <button
                key={product.id}
                onClick={() => setCurrent(index)}
                className="h-14 w-14 overflow-hidden rounded-2xl border-2 transition-all duration-200"
                style={{
                  borderColor: index === current ? product.accent : 'transparent',
                  opacity: index === current ? 1 : 0.5,
                  transform: index === current ? 'scale(1.12)' : 'scale(1)',
                }}
              >
                <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {['✅ 25g Peso Neto', '🚫 Sin Conservantes', '⚡ Energía Instantánea', '💊 Fortificado con Vitaminas'].map((tag) => (
            <span key={tag} className="rounded-full border px-4 py-2 text-[11px] font-semibold" style={{ color: '#558B2F', borderColor: '#DCEDC8', background: '#F9FBE7' }}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}