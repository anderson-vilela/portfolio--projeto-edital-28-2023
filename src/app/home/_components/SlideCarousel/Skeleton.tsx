import loadingSlide from '@/assets/img/loading-slide.svg'
import Image from 'next/image'

const Skeleton = () => {
  return (
    <div className="flex h-full w-full items-center justify-center bg-gray-200">
      <Image
        src={loadingSlide}
        alt="Carregando Slide"
        className="animate-pulse"
      />
    </div>
  )
}

export default Skeleton
