import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Stars from '@/components/Stars'
import { APIDataType } from '@/types/TypesAPI'
import Image from 'next/image'
import Link from 'next/link'
import { FaCalendarCheck, FaClock } from 'react-icons/fa6'
import { HiUsers } from 'react-icons/hi2'

const GetCourseDetails = async (id: number): Promise<APIDataType> => {
  const response = await fetch(
    `${process.env.URL_API_JSON_SERVER}/cursos/${id}`,
    { next: { revalidate: 3600, tags: ['courseDetails'] } },
  )

  if (!response.ok) {
    throw new Error('Failed to fetch data')
  }

  const data = await response.json()

  return data
}

type CourseDetailsProps = {
  params: {
    id: number
  }
}

const CourseDetails = async ({ params }: CourseDetailsProps) => {
  const course = await GetCourseDetails(params.id)

  const formatStringDate = (text: string) => {
    const [day, month, year] = text.split('/')

    return `Desde ${day.padStart(2, '0')}/${month.padStart(2, '0')}/${year}`
  }

  return (
    <>
      <Header />
      <main className="flex-1">
        <div className="relative mt-[100px] min-h-[270px] p-8">
          <nav className="container">
            <ul className="flex items-center gap-2 font-semibold text-tw-neutral-200">
              <li>
                <Link
                  className="drop-shadow-[2px_2px_1px_rgba(0,0,0,0.5)]"
                  href={'/home'}
                >
                  Início
                </Link>
              </li>
              <li>
                <Link
                  className="drop-shadow-[2px_2px_1px_rgba(0,0,0,0.5)]"
                  href={'/courses'}
                >
                  / Cursos
                </Link>
              </li>
              <li>
                <Link
                  className="drop-shadow-[2px_2px_1px_rgba(0,0,0,0.5)]"
                  href={'/courses'}
                >
                  / Módulos
                </Link>
              </li>
              <li className="text-tw-neutral-0 drop-shadow-[2px_2px_1px_rgba(0,0,0,0.5)]">
                <Link href={`/courses/${params.id}`}>/ {course.titulo}</Link>
              </li>
            </ul>
          </nav>
          <Image
            src={course.capa}
            alt={course.titulo}
            quality={100}
            className="-z-10 h-full w-full bg-cover object-cover grayscale-[40%]"
            sizes="100vw"
            fill
          />
          <div className="container">
            <h1 className="mt-[60px] text-[40px] font-bold leading-none text-tw-neutral-0 drop-shadow-[2px_2px_1px_rgba(0,0,0,0.5)]">
              {course.titulo}
            </h1>
            <span className="mt-8 block font-serif text-[25px] text-tw-neutral-0 drop-shadow-[2px_2px_1px_rgba(0,0,0,0.5)]">
              {course.parceiros}
            </span>
          </div>
        </div>
        <section className="container mt-8">
          <h2 className="text-center text-[40px] font-semibold text-tw-primary-color">
            Informações Gerais do Curso
          </h2>
          <div className="mt-[45px] flex items-center justify-between">
            <div className="flex items-center justify-center gap-2">
              <div className="h-6 w-6 text-tw-primary-color-light">
                <FaClock className="h-full w-full" />
              </div>
              <span className="text-[18px] font-bold">
                {course.duracao.replace('h', ' horas')}
              </span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <div className="h-6 w-6 text-tw-primary-color-light">
                <FaCalendarCheck className="h-full w-full" />
              </div>
              <span className="text-[18px] font-bold">
                {formatStringDate(course.criado_em)}
              </span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <div className="h-7 w-7 text-tw-primary-color-light">
                <HiUsers className="h-full w-full" />
              </div>
              <span className="text-[18px] font-bold">
                {`${course.matriculados.toLocaleString(
                  'pt-BR',
                )} alunos matriculados`}
              </span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Stars
                rating={course.avaliacao}
                className={{
                  mainDivStyle: 'gap-2',
                }}
              />
              <span className="text-[18px] font-bold">
                {course.avaliacao}{' '}
                {`(${course.numero_avaliacoes.toLocaleString(
                  'pt-BR',
                )}  avaliações)`}
              </span>
            </div>
          </div>
          <div className="mt-[45px]">
            <h3 className="text-center text-[25px] font-semibold text-tw-primary-color">
              Sobre o curso
            </h3>
            <p className="mt-8 text-justify text-base font-normal text-black">
              {course.sobre}
            </p>
          </div>
          {course.objetivo_geral || course.objetivo_especifico ? (
            <div className="mt-[30px]">
              <h3 className="text-center text-[25px] font-semibold text-tw-primary-color">
                Objetivos
              </h3>
              {course.objetivo_geral && (
                <div className="mt-[30px]">
                  <h4 className="text-base font-bold text-black">
                    Objetivo Geral
                  </h4>
                  <p className="mt-3">{course.objetivo_geral}</p>
                </div>
              )}
              {course.objetivo_especifico && (
                <div className="mt-[30px]">
                  <h4 className="text-base font-bold text-black">
                    Objetivos Específicos
                  </h4>
                  <p className="mt-3 text-black">
                    {course.objetivo_especifico}
                  </p>
                </div>
              )}
            </div>
          ) : null}
          {course.recursos_educacionais && (
            <div className="mt-[30px]">
              <h3 className="text-center text-[25px] font-semibold text-tw-primary-color">
                Recursos educacionais
              </h3>
              <p className="mt-8 text-center text-base font-normal text-black">
                {course.recursos_educacionais}
              </p>
            </div>
          )}
          <div className="mb-[140px] mt-16">
            <h3 className="text-center text-[25px] font-semibold text-tw-primary-color">
              Créditos
            </h3>
            <div className="mt-8 grid grid-cols-4 content-center gap-10">
              {course.creditos.map((credit, index) => (
                <div
                  key={index}
                  className="flex h-full w-full items-center justify-center"
                >
                  <Image
                    src={credit.capa}
                    alt={credit.titulo}
                    className="object-contain"
                    height={400}
                    width={300}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default CourseDetails
