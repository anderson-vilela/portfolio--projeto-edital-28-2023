import { APIDataType } from '@/types/TypesAPI'
import Link from 'next/link'
import Panel from './Panel'

async function fetchCourses(resource: string) {
  const response = await fetch(
    `${process.env.URL_API_JSON_SERVER}${resource}`,
    { next: { revalidate: 3600, tags: ['courses'] } },
  )

  if (!response.ok) {
    throw new Error('Failed to fetch data')
  }

  return response.json()
}

async function getCourses(): Promise<APIDataType[][]> {
  const data = await Promise.all([
    fetchCourses('/cursos?_sort=matriculados&_order=desc&_limit=3'),
    fetchCourses('/cursos?_sort=avaliacao&_order=desc&_limit=3'),
    fetch(`${process.env.URL_API_JSON_SERVER}/cursos`, {
      next: { revalidate: 3600, tags: ['latestCourses'] },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch data')
        }

        return response.json()
      })
      .then((data) => {
        return data
          .sort((a: APIDataType, b: APIDataType) => {
            const [diaA, mesA, anoA] = a.criado_em.split('/')
            const [diaB, mesB, anoB] = b.criado_em.split('/')

            const dataA = new Date(Number(anoA), Number(mesA) - 1, Number(diaA))
            const dataB = new Date(Number(anoB), Number(mesB) - 1, Number(diaB))

            return dataB.getTime() - dataA.getTime()
          })
          .slice(0, 3)
      }),
  ])

  return data
}

const SectionEducationalModule = async () => {
  const [mostPopularCourses, topRatedCourses, latestCourses] =
    await getCourses()

  return (
    <section className="container mt-[115px]">
      <h2 className="text-center font-semibold text-tw-primary-color">
        Módulos Educacionais
      </h2>
      <Panel
        mostPopularCourses={mostPopularCourses}
        topRatedCourses={topRatedCourses}
        latestCourses={latestCourses}
      />
      <div className="mt-16 flex items-center justify-center">
        <Link
          href={'/courses'}
          className="inline-block rounded-[20px] bg-tw-secundary-color-light px-28 py-3 text-2xl font-semibold text-tw-neutral-0 duration-300 hover:bg-tw-secundary-color"
        >
          Ver mais
        </Link>
      </div>
    </section>
  )
}

export default SectionEducationalModule
