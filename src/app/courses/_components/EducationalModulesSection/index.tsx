import { APIDataType } from '@/types/TypesAPI'
import Panel from './Panel'

export type ListOfCoursesType = {
  category: string
  courses: APIDataType[]
}[]

async function getListOfCourses() {
  const response = await fetch(`${process.env.URL_API_JSON_SERVER}/cursos`, {
    next: { revalidate: 3600, tags: ['listOfCoursesSeparatedByCategories'] },
  })
  const data = await response.json()

  const listOfCategories = new Set(
    data
      .map((course: APIDataType) => course.cateroria)
      .sort((a: string, b: string) => {
        const nameA = a.toUpperCase()
        const nameB = b.toUpperCase()

        if (nameA < nameB) {
          return -1
        }

        if (nameA > nameB) {
          return 1
        }

        return 0
      }),
  )

  const listOfCourses = Array.from(listOfCategories).map((category) => {
    const courses = data.filter(
      (course: APIDataType) => course.cateroria === category,
    )

    return {
      category,
      courses,
    }
  }) as ListOfCoursesType

  return listOfCourses
}

const EducationalModulesSection = async () => {
  const listOfCoursesSeparatedByCategories = await getListOfCourses()

  return (
    <>
      <section className="container">
        <h1 className="text-tw-text-40 mt-[30px] text-center font-semibold text-tw-primary-color">
          Módulos Educacionais
        </h1>
        <Panel listOfCourses={listOfCoursesSeparatedByCategories} />
      </section>
    </>
  )
}

export default EducationalModulesSection
