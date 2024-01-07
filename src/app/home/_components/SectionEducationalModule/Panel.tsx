'use client'

import { APIDataType } from '@/types/TypesAPI'
import { useState } from 'react'
import Card from './Card'

type PanelProps = {
  mostPopularCourses: APIDataType[]
  topRatedCourses: APIDataType[]
  latestCourses: APIDataType[]
}

const Panel = ({
  mostPopularCourses,
  topRatedCourses,
  latestCourses,
}: PanelProps) => {
  const [currentTab, setCurrentTab] = useState<
    'most-popular' | 'top-rated' | 'latest'
  >('most-popular')

  return (
    <div className="mt-8">
      <nav>
        <ul className="flex gap-8 text-[20px] font-semibold max-md:flex-wrap max-md:justify-center">
          <li
            onClick={() => setCurrentTab('most-popular')}
            data-active-tab={currentTab === 'most-popular'}
            className="cursor-pointer pb-2 hover:border-b-[3px] hover:border-tw-secundary-color-light data-[active-tab=true]:border-b-[3px] data-[active-tab=true]:border-tw-secundary-color-light "
          >
            Mais populares
          </li>
          <li
            onClick={() => setCurrentTab('top-rated')}
            data-active-tab={currentTab === 'top-rated'}
            className="cursor-pointer pb-2 hover:border-b-[3px] hover:border-tw-secundary-color-light data-[active-tab=true]:border-b-[3px] data-[active-tab=true]:border-tw-secundary-color-light "
          >
            Mais bem avaliados
          </li>
          <li
            onClick={() => setCurrentTab('latest')}
            data-active-tab={currentTab === 'latest'}
            className="cursor-pointer pb-2 hover:border-b-[3px] hover:border-tw-secundary-color-light data-[active-tab=true]:border-b-[3px] data-[active-tab=true]:border-tw-secundary-color-light "
          >
            Mais recentes
          </li>
        </ul>
      </nav>
      <div className="mt-8">
        <div
          data-active-tab={currentTab === 'most-popular'}
          className="hidden gap-8 data-[active-tab=true]:grid max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1"
        >
          {mostPopularCourses.map((course) => (
            <Card
              key={course.id}
              capa={course.capa}
              titulo={course.titulo}
              parceiros={course.parceiros}
              matriculados={course.matriculados}
              duracao={course.duracao}
              avaliacao={course.avaliacao}
              id={course.id}
            />
          ))}
        </div>
        <div
          data-active-tab={currentTab === 'top-rated'}
          className="hidden gap-8 data-[active-tab=true]:grid max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1"
        >
          {topRatedCourses.map((course) => (
            <Card
              key={course.id}
              capa={course.capa}
              titulo={course.titulo}
              parceiros={course.parceiros}
              matriculados={course.matriculados}
              duracao={course.duracao}
              avaliacao={course.avaliacao}
              id={course.id}
            />
          ))}
        </div>
        <div
          data-active-tab={currentTab === 'latest'}
          className="hidden gap-8 data-[active-tab=true]:grid max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1"
        >
          {latestCourses.map((course) => (
            <Card
              key={course.id}
              capa={course.capa}
              titulo={course.titulo}
              parceiros={course.parceiros}
              matriculados={course.matriculados}
              duracao={course.duracao}
              avaliacao={course.avaliacao}
              id={course.id}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Panel
