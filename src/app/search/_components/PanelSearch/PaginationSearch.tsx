'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react'
import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from 'react-icons/fa'
import { URLsType } from '../../page'

type PaginationSearchProps = {
  urls: URLsType
  numberOfPages: number
}

const PaginationSearch = ({ urls, numberOfPages }: PaginationSearchProps) => {
  const [selectPageInput, setSelectPageInput] = useState<number | string>('')
  const [selectPageInputError, setSelectPageInputError] =
    useState<boolean>(false)

  const searchParams = useSearchParams()
  const router = useRouter()

  const q: string = searchParams.get('q') || ''
  const _limit: number = Number(searchParams.get('_limit')) || 6
  const _page: number = Number(searchParams.get('_page')) || 1

  const arrayForRendering = Array.from(
    { length: numberOfPages },
    (_, i) => i + 1,
  )

  const handleChangePage = (number: number) => {
    if (number >= 1 || number <= numberOfPages) {
      router.push(`/search?q=${q}&_limit=${_limit}&_page=${number}`)
    }
  }

  return (
    <div className="mb-[200px] mt-20 flex w-full flex-col items-center px-4 py-4">
      <div className="w-full sm:hidden">
        <div className="flex w-full items-center justify-between">
          <button
            type="button"
            className="text-[32px] text-tw-primary-color"
            onClick={() => handleChangePage(_page - 1)}
          >
            <FaRegArrowAltCircleLeft />
          </button>
          <span className="text-center text-lg">
            Página
            <br />
            {_page} de {numberOfPages}
          </span>
          <button
            type="button"
            className="text-[32px] text-tw-primary-color"
            onClick={() => handleChangePage(_page + 1)}
          >
            <FaRegArrowAltCircleRight />
          </button>
        </div>
        <div className="mt-5 flex items-center justify-center gap-4">
          <span className="text-base">Selecionar página:</span>
          <input
            type="text"
            value={selectPageInput}
            className="w-[40px] rounded-lg border-2 p-1 text-center"
            onChange={({ target }) => {
              setSelectPageInput(target.value)
              if (typeof target.value === 'string') {
                setSelectPageInputError(true)
              }
              if (
                (Number(target.value) >= 1 &&
                  Number(target.value) <= arrayForRendering.length) ||
                target.value === ''
              ) {
                setSelectPageInputError(false)
              }
            }}
            onKeyUp={({ key }) => {
              if (key === 'Enter') {
                if (
                  Number(selectPageInput) >= 1 &&
                  Number(selectPageInput) <= arrayForRendering.length
                ) {
                  handleChangePage(Number(selectPageInput))
                  setSelectPageInput('')
                }
              }
            }}
          />
        </div>
        {selectPageInputError && (
          <span className="block text-center text-sm font-bold text-red-500">
            Valor Inválido!
          </span>
        )}
      </div>
      <nav className="inline-block overflow-hidden rounded-[10px] border border-tw-secundary-color-light/25 bg-tw-neutral-100 max-sm:hidden">
        <ul className="flex items-center justify-center text-tw-text-16 font-semibold text-tw-secundary-color-light">
          {urls.prev && (
            <li
              onClick={() => handleChangePage(_page - 1)}
              className="cursor-pointer border-r px-2 py-1 text-tw-text-16 font-semibold text-tw-secundary-color-light duration-300 hover:bg-tw-secundary-color-light/25"
            >
              {'< Anterior'}
            </li>
          )}
          {arrayForRendering.map((_, index) => {
            const count = index + 1

            if (count === _page) {
              return (
                <li
                  key={count}
                  onClick={() => handleChangePage(count)}
                  className="cursor-pointer bg-tw-primary-color px-2 py-1 text-white duration-300 hover:bg-tw-primary-color-dark"
                >
                  {count}
                </li>
              )
            }

            if (count > _page - 5 && count < _page + 5) {
              return (
                <li
                  key={count}
                  onClick={() => handleChangePage(count)}
                  className="cursor-pointer border-r px-2 py-1 text-tw-text-16 font-semibold text-tw-secundary-color-light duration-300 hover:bg-tw-secundary-color-light/25"
                >
                  {count}
                </li>
              )
            }

            if (count === 1 || count === numberOfPages) {
              return (
                <li
                  key={count}
                  className="cursor-pointer border-r px-2 py-1 text-tw-text-16 font-semibold text-tw-secundary-color-light duration-300 hover:bg-tw-secundary-color-light/25"
                >
                  ...
                </li>
              )
            }

            return null
          })}
          {urls.next && (
            <li
              onClick={() => handleChangePage(_page + 1)}
              className="cursor-pointer border-r px-2 py-1 text-tw-text-16 font-semibold text-tw-secundary-color-light duration-300 hover:bg-tw-secundary-color-light/25"
            >
              {'Próximo >'}
            </li>
          )}
        </ul>
      </nav>
    </div>
  )
}

export default PaginationSearch
