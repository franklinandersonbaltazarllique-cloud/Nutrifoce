import { ingredientStripItems } from '../../data/nutriforceContent'

export default function IngredientStripSection() {
  return (
    <section className="border-y py-4 sm:py-5" style={{ background: '#F9FBE7', borderColor: '#DCEDC8' }}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 sm:gap-x-8 sm:gap-y-3">
          {ingredientStripItems.map((ingredient) => (
            <div key={ingredient.label} className="flex items-center gap-2">
              <span className="text-lg sm:text-xl">{ingredient.icon}</span>
              <span className="text-[10px] font-bold uppercase tracking-widest sm:text-[11px]" style={{ color: '#558B2F' }}>{ingredient.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}