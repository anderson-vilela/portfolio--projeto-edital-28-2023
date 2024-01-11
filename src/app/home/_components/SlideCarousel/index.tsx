'use client'

import arrowLeft from '@/assets/img/arrow-left.svg'
import arrowRight from '@/assets/img/arrow-right.svg'
import slideLogoAvasus from '@/assets/img/slide-1-logo-avasus.png'
import slide1 from '@/assets/img/slide-1.png'
import slide2 from '@/assets/img/slide-2.png'
import slide3 from '@/assets/img/slide-3.jpg'
import Image from 'next/image'
import { useState } from 'react'

const SlideCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(1)

  const handlePrevSlide = () => {
    if (currentSlide === 1) {
      setCurrentSlide(3)
    } else {
      setCurrentSlide((prevCurrentSlide) => prevCurrentSlide - 1)
    }
  }

  const handleNextSlide = () => {
    if (currentSlide === 3) {
      setCurrentSlide(1)
    } else {
      setCurrentSlide((prevCurrentSlide) => prevCurrentSlide + 1)
    }
  }

  return (
    <div className="relative h-full w-full">
      <div
        data-showslide={currentSlide === 1}
        className="h-full w-full data-[showslide=true]:block data-[showslide=false]:hidden"
        id="slide-1"
      >
        <Image
          src={slide1}
          alt="Slide 1"
          className="h-full w-full object-cover grayscale-[25%]"
          placeholder="blur"
          quality={100}
          priority
        />
        <div className="absolute left-0 top-0 z-10 flex h-full w-full flex-col items-center justify-center gap-4 max-sm:gap-2">
          <Image
            src={slideLogoAvasus}
            quality={100}
            alt="Slide 1 - Logo AVASUS"
            className="object-cover drop-shadow-[1px_1px_1px_rgba(0,0,0,0.3)] max-lg:w-[400px] max-sm:w-[10rem]"
          />
          <div className="h-[2px] w-40 rounded-full bg-white" />
          <h2 className="font-light text-white drop-shadow-[1px_1px_2px_rgba(0,0,0,1)] max-lg:text-[1.5rem] max-sm:text-[0.5rem]">
            Conhecimento Aberto em Saúde
          </h2>
        </div>
      </div>
      <div
        data-showslide={currentSlide === 2}
        className="relative h-full w-full items-center justify-center bg-gray-200 data-[showslide=true]:flex data-[showslide=false]:hidden"
        id="slide-2"
      >
        <Image
          src={slide2}
          alt="Slide 2"
          className="object-cover grayscale-[70%]"
          quality={100}
          sizes="100vw"
          fill
          priority
        />
        <div className="absolute left-0 top-0 z-10 flex h-full w-full flex-col items-center justify-center gap-4">
          <h2 className="text-center text-[5rem] font-light leading-[6rem] text-white drop-shadow-[1px_1px_2px_rgba(0,0,0,1)] max-2xl:text-[4rem] max-xl:text-[3rem] max-xl:leading-[4rem] max-lg:text-[2rem] max-lg:font-semibold  max-sm:text-[0.75rem] max-sm:leading-[2rem]">
            Vírus respiratórios <br className="hidden max-xl:block" />
            emergentes,
            <br />
            incluindo o COVID-19
          </h2>
        </div>
      </div>
      <div
        data-showslide={currentSlide === 3}
        className="relative h-full w-full items-center justify-center bg-gray-200 data-[showslide=true]:flex data-[showslide=false]:hidden"
        id="slide-3"
      >
        <Image
          src={slide3}
          alt="Slide 3"
          className="object-cover grayscale-[70%]"
          quality={100}
          sizes="100vw"
          fill
          priority
        />
        <div className="absolute left-0 top-0 z-10 flex h-full w-full flex-col items-center justify-center gap-4">
          <h2 className="text-center text-[5rem] font-light text-white drop-shadow-[1px_1px_2px_rgba(0,0,0,1)] max-2xl:text-[4rem] max-xl:text-[3rem] max-lg:text-[2rem] max-lg:font-semibold max-sm:text-[0.75rem] max-sm:leading-[2rem]">
            Especialização PEPSUS
          </h2>
        </div>
      </div>

      <button
        onClick={handlePrevSlide}
        className="absolute left-8 top-1/2 z-20 flex h-[4.5rem] w-[4.5rem] cursor-pointer items-center justify-center rounded-full bg-slate-800/30 max-sm:hidden"
      >
        <Image src={arrowLeft} alt="Botão Slide Anterior" />
      </button>
      <button
        onClick={handleNextSlide}
        className="absolute right-8 top-1/2 z-20 flex h-[4.5rem] w-[4.5rem] cursor-pointer items-center justify-center rounded-full bg-slate-800/30 max-sm:hidden"
      >
        <Image src={arrowRight} alt="Botão Slide Seguinte" />
      </button>
      <nav className="absolute bottom-20 left-0 right-0 z-20">
        <ul className="flex items-center justify-center gap-2">
          <li
            data-activebutton={currentSlide === 1}
            className="h-4 w-4 cursor-pointer rounded-full border border-white duration-300 hover:bg-tw-primary-color-dark data-[activebutton=true]:w-14 data-[activebutton=true]:bg-white data-[activebutton=true]:hover:bg-tw-primary-color-dark"
            onClick={() => setCurrentSlide(1)}
          />
          <li
            data-activebutton={currentSlide === 2}
            className="h-4 w-4 cursor-pointer rounded-full border border-white duration-300 hover:bg-tw-primary-color-dark data-[activebutton=true]:w-14 data-[activebutton=true]:bg-white data-[activebutton=true]:hover:bg-tw-primary-color-dark"
            onClick={() => setCurrentSlide(2)}
          />
          <li
            data-activebutton={currentSlide === 3}
            className="h-4 w-4 cursor-pointer rounded-full border border-white duration-300 hover:bg-tw-primary-color-dark data-[activebutton=true]:w-14 data-[activebutton=true]:bg-white data-[activebutton=true]:hover:bg-tw-primary-color-dark"
            onClick={() => setCurrentSlide(3)}
          />
        </ul>
      </nav>
    </div>
  )
}

export default SlideCarousel
