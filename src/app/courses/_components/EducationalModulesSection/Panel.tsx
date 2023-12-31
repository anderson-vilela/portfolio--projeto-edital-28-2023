'use client'

import { APIDataType } from '@/types/TypesAPI'
import { useState } from 'react'

type ListOfCoursesType = {
  courses: APIDataType[]
  category: string
}

type PanelProps = {
  listOfCourses: ListOfCoursesType[]
}

const Panel = ({ listOfCourses }: PanelProps) => {
  const categorys = listOfCourses.map((course) => course.category)

  const [currentTab, setCurrentTab] = useState<string>(categorys[0])

  return (
    <ul>
      {listOfCourses.map((course) => (
        <li key={course.category} className="mt-8">
          <h2 className="text-2xl font-semibold">{course.category}</h2>
        </li>
      ))}
    </ul>
  )

  return (
    <div className="mt-8">
      <nav>
        <ul className="flex gap-8 text-[20px] font-semibold">
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
          className="hidden gap-8 data-[active-tab=true]:grid"
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
          className="hidden gap-8 data-[active-tab=true]:grid"
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
          className="hidden gap-8 data-[active-tab=true]:grid"
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
