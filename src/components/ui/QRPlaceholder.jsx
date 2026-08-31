export default function QRPlaceholder({ imageSrc }) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="h-36 w-36 overflow-hidden rounded-2xl border-2 border-white/30 bg-white p-2.5 shadow-xl">
        <img src={imageSrc} alt="Código QR para pedir por WhatsApp" className="h-full w-full object-contain" />
      </div>
      <div className="text-center">
        <p className="text-[11px] font-bold uppercase tracking-wider text-white">Escanea para pedir</p>
        <p className="mt-0.5 text-[10px] font-normal text-[#DCEDC8]">Redirige a WhatsApp</p>
      </div>
    </div>
  )
}