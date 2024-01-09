import Stars from '@/components/Stars'
import { APIDataType } from '@/types/TypesAPI'
import Image from 'next/image'
import Link from 'next/link'
import { FaClock } from 'react-icons/fa6'
import { HiUsers } from 'react-icons/hi2'

const CardSearch = ({
  capa,
  titulo,
  parceiros,
  matriculados,
  avaliacao,
  resumo,
  duracao,
  id,
}: Pick<
  APIDataType,
  | 'capa'
  | 'titulo'
  | 'parceiros'
  | 'matriculados'
  | 'avaliacao'
  | 'resumo'
  | 'duracao'
  | 'id'
>) => {
  return (
    <div key={id} className="grid gap-3">
      <div className="relative h-[200px] w-full overflow-hidden rounded-[20px]">
        <Image
          src={capa}
          alt={`Capa do curso: ${titulo}`}
          quality={50}
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
          fill
        />
      </div>
      <div className="grid gap-2">
        <h2 className="break-words text-tw-text-26 font-semibold max-lg:text-justify max-md:text-center">
          {titulo}
        </h2>
        <span className="break-words text-tw-text-14 font-semibold text-tw-primary-color-light max-lg:text-center">
          {parceiros}
        </span>
      </div>
      <div className="flex items-center justify-between max-xl:flex-col max-md:flex-row max-md:justify-center max-md:gap-8 max-sm:flex-col max-sm:gap-2">
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center gap-2">
            <div className="h-5 w-5 text-tw-primary-color-light">
              <HiUsers className="h-full w-full" />
            </div>
            <span className="text-tw-text-18 font-normal">
              {matriculados.toLocaleString('pt-BR')}
            </span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <div className="h-4 w-4 text-tw-primary-color-light">
              <FaClock className="h-full w-full" />
            </div>
            <span className="text-tw-text-18 font-normal">{duracao}</span>
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
          <span className="text-tw-text-18 font-normal">
            {avaliacao.replace('.', ',')}
          </span>
        </div>
      </div>
      <div>
        <p className="text-tw-text-16 font-medium max-lg:text-justify">
          {resumo.replace(/ Ver mais$/, '...')}
        </p>
      </div>
      <div className="flex justify-end">
        <Link
          href={`/courses/${id}`}
          className="text-tw-text-18 font-semibold text-tw-secundary-color-light duration-300 hover:text-tw-secundary-color-dark hover:underline"
        >
          Ver curso
        </Link>
      </div>
    </div>
  )
}

export default CardSearch
