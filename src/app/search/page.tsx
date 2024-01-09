import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { APIDataType } from '@/types/TypesAPI'
import Link from 'next/link'
import InputSearch from './_components/InputSearch'
import PanelSearch from './_components/PanelSearch'

type SearchPageProps = {
  searchParams: {
    q: string
    _limit: number
    _page: number
  }
}

type PromiseGetCoursesType = {
  data: APIDataType[]
  headers: Headers
}

export type RelType = 'first' | 'prev' | 'next' | 'last'

export type URLsType = { [K in RelType]?: string }

const extractURLs = (header: string): URLsType => {
  const regex = /<([^>]+)>;\srel="([^"]+)"/g
  const urls: URLsType = {}

  let match
  while ((match = regex.exec(header)) !== null) {
    const url = match[1]
    const rel = match[2] as RelType
    urls[rel] = url
  }

  return urls
}

const getCourses = async (
  q: string,
  _limit: number,
  _page: number,
): Promise<PromiseGetCoursesType> => {
  const response = await fetch(
    `${process.env.URL_API_JSON_SERVER}/cursos?q=${q}&_limit=${_limit}&_page=${_page}`,
    {
      cache: 'no-cache',
    },
  )

  if (!response.ok) {
    throw new Error('Failed to fetch data.')
  }

  const data = await response.json()
  const headers = response.headers

  return { data, headers }
}

const SearchPage = async ({ searchParams }: SearchPageProps) => {
  const q = searchParams.q || ''
  const _limit = searchParams._limit || 6
  const _page = searchParams._page || 1

  const { data, headers } = await getCourses(q, _limit, _page)

  const numberOfCoursesFoundInTheSearch = headers.get('x-total-count')
  const numberOfPages = Math.ceil(
    Number(numberOfCoursesFoundInTheSearch) / _limit,
  )

  const searchRange = {
    from: (_page - 1) * _limit + 1,
    to: _page * _limit,
  }

  const headerLink = headers.get('link') || ''

  const urls = extractURLs(headerLink)

  return (
    <>
      <Header />
      <main className="mt-[100px] flex-1">
        <nav className="container mt-[30px]">
          <ul className="flex items-center gap-2 text-tw-text-16 font-semibold text-tw-secundary-color-light">
            <li>
              <Link href={'/home'}>Início</Link>
            </li>
            <li className="text-tw-neutral-400">
              <Link href={'/search'}>/ Pesquisa</Link>
            </li>
          </ul>
        </nav>
        <h1 className="container mt-10 text-center text-tw-text-40 font-semibold text-tw-primary-color">
          Pesquisa
        </h1>
        <InputSearch />
        {data.length > 0 && (
          <>
            <span className="container mt-8 block text-tw-text-16 italic sm:hidden">{`Resultados: ${searchRange.from} - ${searchRange.to}`}</span>
            <span className="container mt-8 block text-tw-text-16 italic max-sm:hidden">{`Resultados da pesquisa: itens ${searchRange.from} - ${searchRange.to}`}</span>
          </>
        )}
        <PanelSearch data={data} urls={urls} numberOfPages={numberOfPages} />
      </main>
      <Footer />
    </>
  )
}

export default SearchPage
