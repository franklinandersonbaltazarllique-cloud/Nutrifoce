import { ingredientMeters, ingredientsImage, productImageAlt } from '../../data/nutriforceContent'
import SectionBadge from '../ui/SectionBadge'
import IngredientMeterCard from '../ui/IngredientMeterCard'

export default function IngredientsSection() {
  return (
    <section id="ingredientes" className="px-4 py-12 sm:px-6 sm:py-20" style={{ background: '#F9FBE7' }}>
      <div className="mx-auto grid max-w-6xl items-center gap-8 md:grid-cols-2 md:gap-14">
        <div>
          <SectionBadge>Ingredientes Esenciales</SectionBadge>
          <h2 className="mb-4 text-3xl font-black leading-tight tracking-tight sm:text-4xl" style={{ color: '#33691E' }}>
            Cinco ingredientes, <span className="font-light italic" style={{ fontFamily: 'Lora, Georgia, serif', color: '#7CB342' }}>un propósito</span>
          </h2>
          <p className="mb-8 text-[14px] font-normal leading-relaxed sm:text-[15px]" style={{ color: '#558B2F' }}>
            Seleccionamos cada ingrediente por su poder nutricional para darte energía real, limpia y sostenida.
          </p>

          <div className="space-y-3">
            {ingredientMeters.map((ingredient) => (
              <IngredientMeterCard key={ingredient.name} ingredient={ingredient} />
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="flex items-center justify-center overflow-hidden rounded-3xl p-8 shadow-2xl sm:p-12" style={{ background: '#DCEDC8' }}>
            <img src={ingredientsImage} alt={productImageAlt} className="w-full max-w-xs object-contain drop-shadow-xl" style={{ transform: 'rotate(-8deg)' }} />
          </div>
          <div className="absolute -bottom-5 -left-5 rounded-2xl border bg-white px-4 py-3 shadow-xl sm:px-5 sm:py-4" style={{ borderColor: '#DCEDC8' }}>
            <p className="text-2xl font-black leading-none sm:text-3xl" style={{ color: '#33691E' }}>100%</p>
            <p className="mt-1 text-[9px] font-bold uppercase tracking-widest sm:text-[10px]" style={{ color: '#7CB342' }}>Ingredientes<br />Naturales</p>
          </div>
          <div className="absolute -right-3 -top-3 rounded-xl px-3 py-2 shadow-lg sm:px-4 sm:py-2.5" style={{ background: '#558B2F' }}>
            <p className="text-[10px] font-bold uppercase tracking-wider sm:text-[11px]" style={{ color: '#DCEDC8' }}>✅ Sin OGM</p>
          </div>
        </div>
      </div>
    </section>
  )
}