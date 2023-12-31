import { APIDataType } from '@/types/TypesAPI'
import Image from 'next/image'
import { FaClock } from 'react-icons/fa6'
import { HiUsers } from 'react-icons/hi2'

const Card = ({
  capa,
  titulo,
  parceiros,
  matriculados,
  duracao,
  avaliacao,
}: Pick<
  APIDataType,
  'capa' | 'titulo' | 'parceiros' | 'matriculados' | 'duracao' | 'avaliacao'
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
        />
      </div>
      <div className="flex max-w-[270px] flex-col justify-center">
        <h2 className="text-[20px] font-semibold">{formatTitle(titulo, 50)}</h2>
        <span className="text-[13px] font-semibold text-tw-primary-color-light">
          {parceiros}
        </span>
      </div>
      <div className="flex flex-1 items-center justify-between">
        <div className="flex items-center justify-center gap-2">
          <div className="h-7 w-7 text-tw-primary-color-light">
            <HiUsers className="h-full w-full" />
          </div>
          <span className="text-[17px] font-normal">{matriculados}</span>
        </div>
        <div className="flex items-center justify-center gap-2">
          <div className="h-6 w-6 text-tw-primary-color-light">
            <FaClock className="h-full w-full" />
          </div>
          <span className="text-[17px] font-normal">{duracao}</span>
        </div>
        <div className="flex items-center justify-center gap-2">
          <div>estrelas</div>
          <span className="text-[17px] font-normal">{avaliacao}</span>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <button
          type="button"
          className="rounded-[20px] bg-tw-secundary-color-light px-[28px] py-[8px] text-[20px] font-semibold text-tw-neutral-0 duration-300 hover:bg-tw-secundary-color"
        >
          Ver módulo
        </button>
      </div>
    </div>
  )
}

export default Card
