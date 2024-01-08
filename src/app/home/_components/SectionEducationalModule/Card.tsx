import Stars from '@/components/Stars'
import { APIDataType } from '@/types/TypesAPI'
import Image from 'next/image'
import Link from 'next/link'
import { FaClock } from 'react-icons/fa6'
import { HiUsers } from 'react-icons/hi2'

const Card = ({
  capa,
  titulo,
  parceiros,
  matriculados,
  duracao,
  avaliacao,
  id,
}: Pick<
  APIDataType,
  | 'capa'
  | 'titulo'
  | 'parceiros'
  | 'matriculados'
  | 'duracao'
  | 'avaliacao'
  | 'id'
>) => {
  const formatTitle = (text: string, maxLength: number) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength).replace(/$/, '...')
    } else {
      return text
    }
  }

  return (
    <div className="mx-auto flex w-full flex-col items-center justify-between gap-5 rounded-[20px] bg-tw-neutral-100 p-5 last:max-lg:col-span-2 last:max-lg:max-w-[336px] last:max-md:max-w-[288px] last:max-sm:col-span-1 last:max-sm:max-w-full xl:flex-row">
      <div className="relative flex w-full items-center justify-center overflow-hidden rounded-[20px] bg-tw-neutral-300 max-xl:h-[250px] xl:h-full xl:min-h-[120px] xl:w-[120px]">
        <Image
          src={capa}
          alt={`Capa do Módulo: ${titulo}`}
          className="object-cover"
          quality={50}
          fill
          sizes="(max-width: 768px) 100vw, 280px"
        />
      </div>
      <div className="flex flex-col justify-center gap-4 xl:max-w-[280px]">
        <h2 className="text-tw-text-20 font-semibold leading-7 max-xl:hidden">
          {formatTitle(titulo, 50)}
        </h2>
        <h2 className="text-tw-text-20 font-semibold leading-7 max-sm:text-center xl:hidden">
          {titulo}
        </h2>
        <span className="text-tw-text-14 font-semibold text-tw-primary-color-light max-sm:text-center">
          {parceiros}
        </span>
      </div>
      <div className="flex flex-1 items-center justify-between px-2 max-xl:grid max-xl:grid-cols-2 max-xl:flex-col max-xl:gap-4">
        <div className="flex items-center justify-center gap-2">
          <div className="h-7 w-7 text-tw-primary-color-light">
            <HiUsers className="h-full w-full" />
          </div>
          <span className="text-tw-text-16 font-normal">
            {matriculados.toLocaleString('pt-BR')}
          </span>
        </div>
        <div className="flex items-center justify-center gap-2">
          <div className="h-6 w-6 text-tw-primary-color-light">
            <FaClock className="h-full w-full" />
          </div>
          <span className="text-tw-text-16 font-normal">{duracao}</span>
        </div>
        <div className="flex items-center justify-center gap-2 max-xl:col-span-2">
          <Stars rating={avaliacao} />
          <span className="text-tw-text-16 font-normal">
            {avaliacao.replace('.', ',')}
          </span>
        </div>
      </div>
      <div className="flex items-center justify-center max-xl:mt-8">
        <Link
          href={`/courses/${id}`}
          className="text-tw-text-20 rounded-[20px] bg-tw-secundary-color-light px-[28px] py-[8px] font-semibold text-tw-neutral-0 duration-300 hover:bg-tw-secundary-color"
        >
          Ver módulo
        </Link>
      </div>
    </div>
  )
}

export default Card
