import { ingredientMeters, ingredientsImage, productImageAlt } from '../../data/nutriforceContent'
import SectionBadge from '../ui/SectionBadge'
import IngredientMeterCard from '../ui/IngredientMeterCard'

export default function IngredientsSection() {
  return (
    <section id="ingredientes" className="py-20 px-6" style={{ background: '#F9FBE7' }}>
      <div className="mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-2">
        <div>
          <SectionBadge>Ingredientes Esenciales</SectionBadge>
          <h2 className="mb-4 text-4xl font-black leading-tight tracking-tight" style={{ color: '#33691E' }}>
            Cinco ingredientes, <span className="font-light italic" style={{ fontFamily: 'Lora, Georgia, serif', color: '#7CB342' }}>un propósito</span>
          </h2>
          <p className="mb-8 text-[15px] font-normal leading-relaxed" style={{ color: '#558B2F' }}>
            Seleccionamos cada ingrediente por su poder nutricional para darte energía real, limpia y sostenida.
          </p>

          <div className="space-y-3">
            {ingredientMeters.map((ingredient) => (
              <IngredientMeterCard key={ingredient.name} ingredient={ingredient} />
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="flex items-center justify-center overflow-hidden rounded-3xl p-12 shadow-2xl" style={{ background: '#DCEDC8' }}>
            <img src={ingredientsImage} alt={productImageAlt} className="w-full max-w-xs object-contain drop-shadow-xl" style={{ transform: 'rotate(-8deg)' }} />
          </div>
          <div className="absolute -bottom-5 -left-5 rounded-2xl border bg-white px-5 py-4 shadow-xl" style={{ borderColor: '#DCEDC8' }}>
            <p className="text-3xl font-black leading-none" style={{ color: '#33691E' }}>100%</p>
            <p className="mt-1 text-[10px] font-bold uppercase tracking-widest" style={{ color: '#7CB342' }}>Ingredientes<br />Naturales</p>
          </div>
          <div className="absolute -right-3 -top-3 rounded-xl px-4 py-2.5 shadow-lg" style={{ background: '#558B2F' }}>
            <p className="text-[11px] font-bold uppercase tracking-wider" style={{ color: '#DCEDC8' }}>✅ Sin OGM</p>
          </div>
        </div>
      </div>
    </section>
  )
}