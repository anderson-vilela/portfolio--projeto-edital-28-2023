import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hydrate from '@/components/Hydrate'
import SlideCarousel from '@/components/SlideCarousel'
import SkeletonSlideCarousel from '@/skeletons/SkeletonSlideCarousel'

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <div className="h-[54rem] pt-24">
          <Hydrate skeleton={<SkeletonSlideCarousel />}>
            <SlideCarousel />
          </Hydrate>
        </div>
      </main>
      <Footer />
    </>
  )
}
