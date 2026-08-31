export default function IngredientMeterCard({ ingredient }) {
  return (
    <div className="flex items-start gap-3 rounded-2xl bg-white px-4 py-3.5 shadow-sm">
      <span className="mt-0.5 text-2xl">{ingredient.icon}</span>
      <div className="flex-1">
        <div className="mb-1.5 flex items-center justify-between">
          <p className="text-sm font-bold" style={{ color: '#33691E' }}>{ingredient.name}</p>
          <p className="text-[11px] font-semibold" style={{ color: ingredient.color }}>{ingredient.pct}% pureza</p>
        </div>
        <div className="mb-2 h-1.5 overflow-hidden rounded-full" style={{ background: '#F1F8E9' }}>
          <div className="h-full rounded-full" style={{ width: `${ingredient.pct}%`, background: `linear-gradient(to right, ${ingredient.color}88, ${ingredient.color})` }} />
        </div>
        <p className="text-[12px] font-normal leading-relaxed" style={{ color: '#7CB342' }}>{ingredient.desc}</p>
      </div>
    </div>
  )
}