export default function SocialLink({ social, icon }) {
  return (
    <a
      href={social.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-4 rounded-2xl border border-white/20 bg-white/12 px-5 py-4 transition-all duration-200 hover:bg-white/20"
    >
      <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl text-white shadow-md" style={{ background: social.color === '#010101' ? '#111' : social.color }}>
        {icon}
      </div>
      <div className="min-w-0">
        <p className="mb-0.5 text-[10px] font-bold uppercase tracking-[0.16em]" style={{ color: '#DCEDC8' }}>{social.name}</p>
        <p className="truncate text-sm font-semibold text-white group-hover:underline">{social.handle}</p>
      </div>
      <svg className="ml-auto h-4 w-4 flex-shrink-0 text-white/40 transition-colors group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </a>
  )
}