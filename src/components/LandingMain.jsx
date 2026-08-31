import HeroSection from './sections/HeroSection'
import IngredientStripSection from './sections/IngredientStripSection'
import ProductCarouselSection from './sections/ProductCarouselSection'
import WhyStripSection from './sections/WhyStripSection'
import IngredientsSection from './sections/IngredientsSection'

export default function LandingMain() {
  return (
    <main>
      <HeroSection />
      <IngredientStripSection />
      <ProductCarouselSection />
      <WhyStripSection />
      <IngredientsSection />
    </main>
  )
}