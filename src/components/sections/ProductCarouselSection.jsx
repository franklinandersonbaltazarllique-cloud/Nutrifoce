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
    <section id="productos" className="overflow-hidden bg-white px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center sm:mb-14">
          <SectionBadge>Nuestros Sabores</SectionBadge>
          <h2 className="mb-4 text-4xl font-black leading-tight tracking-tight sm:text-5xl md:text-6xl" style={{ color: '#33691E' }}>
            5 Variedades, <span className="font-light italic" style={{ fontFamily: 'Lora, Georgia, serif', color: '#7CB342' }}>una sola energía</span>
          </h2>
          <p className="text-base font-semibold sm:text-lg" style={{ color: '#8BC34A' }}>elige tu sabor favorito</p>
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

          <div className="flex w-full items-center justify-center gap-2 sm:gap-4 md:gap-6">
            <button
              onClick={prev}
              aria-label="Producto anterior"
              className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 text-lg font-black transition-all duration-200 hover:-translate-x-1 hover:shadow-md sm:h-12 sm:w-12 md:h-14 md:w-14"
              style={{ borderColor: currentProduct.accent, color: currentProduct.accent, background: `${currentProduct.accent}10` }}
            >
              ←
            </button>

            <ProductCard product={currentProduct} />

            <button
              onClick={next}
              aria-label="Producto siguiente"
              className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 text-lg font-black transition-all duration-200 hover:translate-x-1 hover:shadow-md sm:h-12 sm:w-12 md:h-14 md:w-14"
              style={{ borderColor: currentProduct.accent, color: currentProduct.accent, background: `${currentProduct.accent}10` }}
            >
              →
            </button>
          </div>

          <div className="mt-4 flex items-center rounded-full px-4 py-2 text-xs font-bold sm:px-5 sm:text-sm" style={{ background: '#F1F8E9', color: '#558B2F' }}>
            {current + 1} / {total}
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {products.map((product, index) => (
              <button
                key={product.id}
                onClick={() => setCurrent(index)}
                className="h-12 w-12 overflow-hidden rounded-2xl border-2 transition-all duration-200 sm:h-14 sm:w-14"
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

        <div className="mt-10 flex flex-wrap justify-center gap-2 sm:mt-12 sm:gap-3">
          {['✅ 25g Peso Neto', '🚫 Sin Conservantes', '⚡ Energía Instantánea', '💊 Fortificado con Vitaminas'].map((tag) => (
            <span key={tag} className="rounded-full border px-3 py-2 text-[10px] font-semibold sm:px-4 sm:text-[11px]" style={{ color: '#558B2F', borderColor: '#DCEDC8', background: '#F9FBE7' }}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}