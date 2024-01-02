'use client'

import Stars from '@/components/Stars'
import { APIDataType } from '@/types/TypesAPI'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { FaClock } from 'react-icons/fa6'
import { HiUsers } from 'react-icons/hi2'
import { ListOfCoursesType } from '.'

type SearchResultsType = {
  resultsOnPage: number
  totalResults: number
} | null

type PanelProps = {
  listOfCourses: ListOfCoursesType
}

const Panel = ({ listOfCourses }: PanelProps) => {
  const categorys = listOfCourses
    ? listOfCourses.map((course) => course.category)
    : []

  const [currentTab, setCurrentTab] = useState<string>(categorys[0])
  const [currentPage, setCurrentPage] = useState<number>(1)

  const listOfCoursesToView = listOfCourses.find(
    (course) => course.category === currentTab,
  )

  if (!listOfCoursesToView) return null

  let coursesToView: APIDataType[] | null = null
  let searchResults: SearchResultsType = null
  let numberOfPages: number | null = null
  let arrayForPagination: number[] = []

  if (listOfCoursesToView?.courses) {
    coursesToView = listOfCoursesToView?.courses.slice(
      (currentPage - 1) * 6,
      currentPage * 6,
    )

    searchResults = {
      resultsOnPage:
        listOfCoursesToView.courses.length > currentPage * 6
          ? currentPage * 6
          : listOfCoursesToView.courses.length,
      totalResults: listOfCoursesToView.courses.length,
    }

    numberOfPages = Math.ceil(listOfCoursesToView.courses.length / 6)

    arrayForPagination = Array.from({ length: numberOfPages }, (_, i) => i + 1)
  }

  const handleTab = (category: string) => {
    setCurrentTab(category)
    setCurrentPage(1)
    scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }

  const handleChangePage = (number: number) => {
    setCurrentPage(number)
    scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }

  return (
    <div className="mt-8">
      <nav>
        <ul className="flex flex-wrap gap-x-8 gap-y-4 text-[20px] font-semibold">
          {categorys.map((category) => (
            <li
              key={category}
              onClick={() => handleTab(category)}
              data-active-tab={currentTab === category}
              className="cursor-pointer border-b-[3px] border-transparent pb-2 hover:border-b-[3px] hover:border-tw-secundary-color-light data-[active-tab=true]:border-b-[3px] data-[active-tab=true]:border-tw-secundary-color-light "
            >
              {category}
            </li>
          ))}
        </ul>
      </nav>
      <div className="mt-6">
        {!searchResults && (
          <span className="text-base italic">
            Ops, nenhum curso foi identificado...
          </span>
        )}
        {searchResults && (
          <span className="text-base italic">{`${searchResults.resultsOnPage} de ${searchResults.totalResults} resultados`}</span>
        )}
      </div>
      <div className="mt-8 grid grid-cols-3 gap-8">
        {coursesToView?.map(
          ({
            id,
            capa,
            titulo,
            parceiros,
            matriculados,
            duracao,
            avaliacao,
            resumo,
          }) => (
            <div key={id} className="grid gap-3">
              <div className="relative h-[200px] w-full overflow-hidden rounded-[20px]">
                <Image
                  src={capa}
                  alt={`Capa do curso: ${titulo}`}
                  quality={50}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority
                  fill
                />
              </div>
              <div className="grid gap-2">
                <h2 className="text-[25px] font-semibold">{titulo}</h2>
                <span className="text-[13px] font-semibold text-tw-primary-color-light">
                  {parceiros}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center gap-2">
                    <div className="h-5 w-5 text-tw-primary-color-light">
                      <HiUsers className="h-full w-full" />
                    </div>
                    <span className="text-[17px] font-normal">
                      {matriculados.toLocaleString('pt-BR')}
                    </span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <div className="h-4 w-4 text-tw-primary-color-light">
                      <FaClock className="h-full w-full" />
                    </div>
                    <span className="text-[17px] font-normal">{duracao}</span>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Stars
                    rating={avaliacao}
                    className={{
                      fullStarStyle: 'scale-75',
                      halfStarStyle: 'scale-75',
                      emptyStarStyle: 'scale-75',
                      mainDivStyle: 'gap-0',
                    }}
                  />
                  <span className="text-[17px] font-normal">{avaliacao}</span>
                </div>
              </div>
              <div>
                <p className="text-[15px] font-medium">
                  {resumo.replace(/ Ver mais$/, '...')}
                </p>
              </div>
              <div className="flex justify-end">
                <Link
                  href={`/courses/${id}`}
                  className="text-[18px] font-semibold text-tw-secundary-color-light duration-300 hover:text-tw-secundary-color-dark hover:underline"
                >
                  Ver mais
                </Link>
              </div>
            </div>
          ),
        )}
      </div>
      <div className="mb-[200px] mt-20 flex flex-col items-center">
        <nav className="inline-block overflow-hidden rounded-[10px] border border-tw-secundary-color-light/25 bg-tw-neutral-100">
          <ul className="flex items-center justify-center text-[16px] font-semibold text-tw-secundary-color-light">
            {arrayForPagination.map((_, index) => {
              const count = index + 1

              if (count === currentPage) {
                return (
                  <li
                    key={count}
                    onClick={() => handleChangePage(count)}
                    className="cursor-pointer bg-tw-primary-color px-2 py-1 text-white duration-300 hover:bg-tw-primary-color-dark"
                  >
                    {count}
                  </li>
                )
              }

              if (count > currentPage - 4 && count < currentPage + 4) {
                return (
                  <li
                    key={count}
                    onClick={() => handleChangePage(count)}
                    className="cursor-pointer border-r px-2 py-1 text-base font-semibold text-tw-secundary-color-light duration-300 hover:bg-tw-secundary-color-light/25"
                  >
                    {count}
                  </li>
                )
              }

              if (count === currentPage - 4) {
                return (
                  <>
                    <li
                      key={count}
                      onClick={() => handleChangePage(currentPage - 1)}
                      className="cursor-pointer border-r px-2 py-1 text-base font-semibold text-tw-secundary-color-light duration-300 hover:bg-tw-secundary-color-light/25"
                    >
                      Anterior
                    </li>
                    <li
                      key={count}
                      className="cursor-pointer border-r px-2 py-1 text-base font-semibold text-tw-secundary-color-light duration-300 hover:bg-tw-secundary-color-light/25"
                    >
                      ...
                    </li>
                  </>
                )
              }

              if (count === currentPage + 4) {
                return (
                  <>
                    <li
                      key={count}
                      className="cursor-pointer border-r px-2 py-1 text-base font-semibold text-tw-secundary-color-light duration-300 hover:bg-tw-secundary-color-light/25"
                    >
                      ...
                    </li>
                    <li
                      key={count}
                      onClick={() => handleChangePage(currentPage + 1)}
                      className="cursor-pointer border-r px-2 py-1 text-base font-semibold text-tw-secundary-color-light duration-300 hover:bg-tw-secundary-color-light/25"
                    >
                      Próximo
                    </li>
                  </>
                )
              }

              return null
            })}
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Panel
