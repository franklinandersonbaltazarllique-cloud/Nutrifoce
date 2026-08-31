import { ingredientStripItems } from '../../data/nutriforceContent'

export default function IngredientStripSection() {
  return (
    <section className="border-y py-5" style={{ background: '#F9FBE7', borderColor: '#DCEDC8' }}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
          {ingredientStripItems.map((ingredient) => (
            <div key={ingredient.label} className="flex items-center gap-2">
              <span className="text-xl">{ingredient.icon}</span>
              <span className="text-[11px] font-bold uppercase tracking-widest" style={{ color: '#558B2F' }}>{ingredient.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}