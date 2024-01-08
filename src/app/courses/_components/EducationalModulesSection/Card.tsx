import Stars from '@/components/Stars'
import { APIDataType } from '@/types/TypesAPI'
import Image from 'next/image'
import Link from 'next/link'
import { FaClock } from 'react-icons/fa6'
import { HiUsers } from 'react-icons/hi2'

const Card = ({
  id,
  capa,
  titulo,
  parceiros,
  matriculados,
  duracao,
  avaliacao,
  resumo,
}: Pick<
  APIDataType,
  | 'capa'
  | 'titulo'
  | 'parceiros'
  | 'matriculados'
  | 'duracao'
  | 'avaliacao'
  | 'id'
  | 'resumo'
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
          priority
          fill
        />
      </div>
      <div>
        <h2 className="text-[25px] font-semibold">{titulo}</h2>
        <span className="text-[13px] text-tw-primary-color-light">
          {parceiros}
        </span>
      </div>
      <div className="flex items-center justify-between">
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
          <span className="text-[17px] font-normal">
            {avaliacao.replace('.', ',')}
          </span>
        </div>
      </div>
      <div>{resumo.replace(/ Ver mais$/, '...')}</div>
      <div className="mt-1 flex justify-end">
        <Link
          href={`/courses/${id}`}
          className="text-tw-text-18 font-semibold text-tw-secundary-color-light duration-300 hover:text-tw-secundary-color-dark hover:underline"
        >
          Ver mais
        </Link>
      </div>
    </div>
  )
}

export default Card
