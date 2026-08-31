import { whyCards } from '../../data/nutriforceContent'

export default function WhyStripSection() {
  return (
    <section className="py-14 px-6" style={{ background: '#33691E' }}>
      <div className="mx-auto grid max-w-6xl gap-8 text-center md:grid-cols-4">
        {whyCards.map((item) => (
          <div key={item.title} className="flex flex-col items-center">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-2xl">{item.icon}</div>
            <h4 className="mb-2 text-[11px] font-black uppercase tracking-widest text-white">{item.title}</h4>
            <p className="text-[12px] font-normal leading-relaxed text-[#DCEDC8]">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}