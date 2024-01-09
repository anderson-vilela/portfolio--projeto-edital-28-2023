import { APIDataType } from '@/types/TypesAPI'
import { URLsType } from '../../page'
import CardSearch from './CardSearch'
import PaginationSearch from './PaginationSearch'

type PanelSearchProps = {
  data: APIDataType[]
  urls: URLsType
  numberOfPages: number
}

const PanelSearch = ({ data, urls, numberOfPages }: PanelSearchProps) => {
  if (data.length === 0) {
    return (
      <div className="container mt-32 min-h-[50vh]">
        <p className="text-center text-tw-text-40">
          Ops, nenhum curso foi encontrado.
        </p>
      </div>
    )
  }

  return (
    <>
      <div className="container mt-8 grid grid-cols-3 gap-8 max-lg:grid-cols-2 max-md:grid-cols-1 max-md:gap-16">
        {data.map(
          ({
            capa,
            titulo,
            parceiros,
            matriculados,
            avaliacao,
            resumo,
            duracao,
            id,
          }) => (
            <CardSearch
              key={id}
              capa={capa}
              titulo={titulo}
              parceiros={parceiros}
              matriculados={matriculados}
              avaliacao={avaliacao}
              resumo={resumo}
              duracao={duracao}
              id={id}
            />
          ),
        )}
      </div>
      <PaginationSearch urls={urls} numberOfPages={numberOfPages} />
    </>
  )
}

export default PanelSearch
