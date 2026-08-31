import QRPlaceholder from '../ui/QRPlaceholder'
import SocialLink from '../ui/SocialLink'
import { qrAsset } from '../../data/nutriforceContent'

function SocialIcon({ name }) {
  if (name === 'WhatsApp') {
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    )
  }

  if (name === 'Facebook') {
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    )
  }

  if (name === 'TikTok') {
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
      <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 010 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.907 1.528-1.148C21.69 2.28 24 3.434 24 5.457z" />
    </svg>
  )
}

export default function Footer({ socials }) {
  return (
    <footer id="contacto" className="px-6 py-16" style={{ background: 'linear-gradient(145deg, #33691E 0%, #558B2F 50%, #7CB342 100%)' }}>
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/20">
              <span className="text-base font-black text-white">NF</span>
            </div>
            <div className="text-left">
              <p className="text-[9px] font-semibold uppercase tracking-[0.22em]" style={{ color: '#DCEDC8' }}>Nutri Force</p>
              <p className="text-lg font-black leading-none tracking-tight text-white">ENERCORN</p>
            </div>
          </div>
          <h2 className="mb-3 text-3xl font-black leading-tight text-white md:text-4xl">
            ¿Listo para pedir? <span className="font-light italic" style={{ fontFamily: 'Lora, Georgia, serif', color: '#DCEDC8' }}>Contáctanos</span>
          </h2>
          <p className="mx-auto max-w-md text-sm font-normal leading-relaxed" style={{ color: '#DCEDC8' }}>
            Distribución mayorista, minorista y pedidos especiales. Escríbenos por WhatsApp o síguenos en redes.
          </p>
        </div>

        <div className="mx-auto grid max-w-3xl gap-10 md:grid-cols-2 md:items-center">
          <div className="space-y-3">
            {socials.map((social) => (
              <SocialLink key={social.name} social={social} icon={<SocialIcon name={social.name} />} />
            ))}
          </div>

          <div className="flex flex-col items-center justify-center gap-4">
            <div className="rounded-3xl border border-white/20 bg-white/12 p-8 text-center">
              <p className="mb-5 text-sm font-black uppercase tracking-wide text-white">
                Escanea y pide
                <br />
                <span className="text-xs font-normal" style={{ color: '#DCEDC8' }}>Directo a WhatsApp</span>
              </p>
              <QRPlaceholder imageSrc={qrAsset} />
              <p className="mt-4 text-[10px] font-normal" style={{ color: '#DCEDC8' }}>📱 +51 988 645 827</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-6xl flex-col items-center justify-between gap-3 border-t border-white/15 pt-6 md:flex-row">
        <p className="text-[12px]" style={{ color: '#DCEDC8' }}>© 2026 Nutri Force · ENERCORN · Todos los derechos reservados.</p>
        <p className="text-[12px]" style={{ color: '#DCEDC8' }}>Hecho con 🌽 y amor — Coviriali, Satipo, Perú</p>
      </div>
    </footer>
  )
}