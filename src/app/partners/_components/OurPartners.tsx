'use client'

import Pagination from '@/app/courses/_components/Pagination'
import Image from 'next/image'
import { useState } from 'react'
import { TbCameraCancel } from 'react-icons/tb'
import { v4 } from 'uuid'
import { PartnersType } from '../page'

type OurPartnersProps = {
  partners: PartnersType[]
}

const OurPartners = ({ partners }: OurPartnersProps) => {
  const [page, setPage] = useState<number>(1)

  const totalPartners = partners.length
  const numberOfPages = Math.ceil(totalPartners / 6)
  const listOfPages = Array.from({ length: numberOfPages }, (_, i) => i + 1)

  const partnersInViewport = partners.slice((page - 1) * 6, page * 6)

  const handleChangePage = (page: number) => {
    scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    setPage(page)
  }

  return (
    <section className="container mt-8">
      <h1 className="text-tw-text-40 font-semibold text-tw-primary-color max-sm:text-center">
        Nossos parceiros
      </h1>
      <span className="mt-8 block text-tw-text-16 italic">
        {`${
          page * 6 > totalPartners ? totalPartners : page * 6
        } de ${totalPartners} resultados`}
      </span>
      <div className="mt-8 grid grid-cols-3 gap-x-8 gap-y-16 break-words max-lg:grid-cols-2 max-sm:grid-cols-1">
        {partnersInViewport?.map(({ capa, titulo }) => {
          const verifyUrlCapa = capa.includes('http://')

          return (
            <div key={v4()}>
              <div className="relative flex h-[200px] w-full items-center justify-center">
                {verifyUrlCapa ? (
                  <div className="flex h-full w-full flex-col items-center justify-center gap-2">
                    <TbCameraCancel className="h-1/2 w-1/2 text-tw-primary-color" />
                    <span className="text-center text-[20px] font-semibold text-tw-primary-color">
                      Imagem Bloqueada!
                    </span>
                  </div>
                ) : (
                  <Image
                    src={capa}
                    alt={titulo}
                    className="object-contain"
                    sizes="33vw"
                    fill
                  />
                )}
              </div>
              <div className="h-[2px] rounded-full bg-tw-primary-color-light" />
              <div>
                <h3 className="mt-2 break-words text-center text-tw-text-26 font-semibold">
                  {titulo}
                </h3>
              </div>
            </div>
          )
        })}
      </div>
      <Pagination
        currentPage={page}
        listOfPages={listOfPages}
        handleChangePage={handleChangePage}
      />
    </section>
  )
}

export default OurPartners
