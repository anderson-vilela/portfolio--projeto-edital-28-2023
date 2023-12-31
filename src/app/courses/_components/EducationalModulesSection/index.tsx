import { APIDataType } from '@/types/TypesAPI'

async function getListOfCourses() {
  const response = await fetch(`${process.env.URL_API_JSON_SERVER}/cursos`)
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
  })

  return listOfCourses
}

const EducationalModulesSection = async () => {
  const listOfCoursesSeparatedByCategories = await getListOfCourses()

  return (
    <>
      <section className="container">
        <h1 className="mt-[30px] text-center text-[40px] font-semibold text-tw-primary-color">
          Módulos Educacionais
        </h1>
        {listOfCoursesSeparatedByCategories.map(({ category, courses }) => (
          <div key={category} className="mt-8">
            <h2 className="text-2xl font-semibold">{category}</h2>
            <ul className="grid gap-2">
              {courses.map((course) => (
                <li key={course.id}>
                  <h3 className="text-xl font-semibold">{course.titulo}</h3>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </>
  )
}

export default EducationalModulesSection
