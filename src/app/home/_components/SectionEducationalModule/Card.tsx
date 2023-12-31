import { APIDataType } from '@/types/TypesAPI'
import Image from 'next/image'
import Link from 'next/link'
import { FaClock } from 'react-icons/fa6'
import { HiUsers } from 'react-icons/hi2'
import Stars from './Stars'

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
    <div className="flex items-center justify-between gap-5 rounded-[20px] bg-tw-neutral-100 p-5">
      <div className="relative flex h-[120px] w-[120px] items-center justify-center overflow-hidden rounded-[20px] bg-tw-neutral-300">
        <Image
          src={capa}
          alt={`Capa do Módulo: ${titulo}`}
          className="object-cover"
          quality={50}
          fill
          sizes="(max-width: 768px) 100vw, 280px"
        />
      </div>
      <div className="flex max-w-[280px] flex-col justify-center">
        <h2 className="text-[20px] font-semibold">{formatTitle(titulo, 50)}</h2>
        <span className="text-[13px] font-semibold text-tw-primary-color-light">
          {parceiros}
        </span>
      </div>
      <div className="flex flex-1 items-center justify-between px-2">
        <div className="flex items-center justify-center gap-2">
          <div className="h-7 w-7 text-tw-primary-color-light">
            <HiUsers className="h-full w-full" />
          </div>
          <span className="text-[17px] font-normal">
            {matriculados.toLocaleString('pt-BR')}
          </span>
        </div>
        <div className="flex items-center justify-center gap-2">
          <div className="h-6 w-6 text-tw-primary-color-light">
            <FaClock className="h-full w-full" />
          </div>
          <span className="text-[17px] font-normal">{duracao}</span>
        </div>
        <div className="flex items-center justify-center gap-2">
          <Stars rating={avaliacao} />
          <span className="text-[17px] font-normal">{avaliacao}</span>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <Link
          href={`/courses/${id}`}
          className="rounded-[20px] bg-tw-secundary-color-light px-[28px] py-[8px] text-[20px] font-semibold text-tw-neutral-0 duration-300 hover:bg-tw-secundary-color"
        >
          Ver módulo
        </Link>
      </div>
    </div>
  )
}

export default Card
