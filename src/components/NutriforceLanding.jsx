import Header from './layout/Header'
import Footer from './layout/Footer'
import LandingMain from './LandingMain'
import { socials } from '../data/nutriforceContent'

export default function NutriforceLanding() {
  return (
    <div className="min-h-full bg-white font-['Montserrat',sans-serif] text-[#1B5E20]">
      <Header />
      <LandingMain />
      <Footer socials={socials} />

      <style>{`\n        @keyframes float {\n          0%, 100% { transform: rotate(-5deg) translateY(0); }\n          50% { transform: rotate(-5deg) translateY(-14px); }\n        }\n        @keyframes cardIn {\n          from { opacity: 0; transform: scale(0.96) translateY(12px); }\n          to { opacity: 1; transform: scale(1) translateY(0); }\n        }\n      `}</style>
    </div>
  )
}