import { whyCards } from '../../data/nutriforceContent'

export default function WhyStripSection() {
  return (
    <section className="px-4 py-10 sm:px-6 sm:py-14" style={{ background: '#33691E' }}>
      <div className="mx-auto grid max-w-6xl gap-6 text-center sm:gap-8 md:grid-cols-4">
        {whyCards.map((item) => (
          <div key={item.title} className="flex flex-col items-center">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-xl sm:h-14 sm:w-14 sm:text-2xl">{item.icon}</div>
            <h4 className="mb-2 text-[10px] font-black uppercase tracking-widest text-white sm:text-[11px]">{item.title}</h4>
            <p className="text-[11px] font-normal leading-relaxed text-[#DCEDC8] sm:text-[12px]">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}