import { v4 } from 'uuid'

import { useState } from 'react'
import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from 'react-icons/fa'

type PaginationProps = {
  listOfPages: number[]
  currentPage: number
  handleChangePage: (number: number) => void
}

const Pagination = ({
  listOfPages,
  currentPage,
  handleChangePage,
}: PaginationProps) => {
  const [selectPageInput, setSelectPageInput] = useState<number | string>('')
  const [selectPageInputError, setSelectPageInputError] =
    useState<boolean>(false)

  return (
    <div className="mb-[200px] mt-20 flex flex-col items-center">
      <div className="w-full sm:hidden">
        <div className="flex w-full items-center justify-between">
          <button
            type="button"
            className="text-[32px] text-tw-primary-color"
            onClick={() => {
              if (currentPage !== 1) {
                handleChangePage(currentPage - 1)
              }
            }}
          >
            <FaRegArrowAltCircleLeft />
          </button>
          <span className="text-center text-lg">
            Página
            <br />
            {currentPage} de {listOfPages.length}
          </span>
          <button
            type="button"
            className="text-[32px] text-tw-primary-color"
            onClick={() => {
              if (currentPage !== listOfPages.length) {
                handleChangePage(currentPage + 1)
              }
            }}
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
                  Number(target.value) <= listOfPages.length) ||
                target.value === ''
              ) {
                setSelectPageInputError(false)
              }
            }}
            onKeyUp={({ key }) => {
              if (key === 'Enter') {
                if (
                  Number(selectPageInput) >= 1 &&
                  Number(selectPageInput) <= listOfPages.length
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
          {listOfPages.map((_, index) => {
            const count = index + 1

            if (count === currentPage) {
              return (
                <li
                  key={v4()}
                  onClick={() => handleChangePage(count)}
                  className="cursor-pointer bg-tw-primary-color px-2 py-1 text-white duration-300 hover:bg-tw-primary-color-dark"
                >
                  {count}
                </li>
              )
            }

            if (count > currentPage - 5 && count < currentPage + 5) {
              if (count === 1) {
                return (
                  <li key={v4()} className="flex items-center">
                    <div
                      onClick={() => handleChangePage(currentPage - 1)}
                      className="cursor-pointer border-r px-2 py-1 text-tw-text-16 font-semibold text-tw-secundary-color-light duration-300 hover:bg-tw-secundary-color-light/25"
                    >
                      {'< Anterior'}
                    </div>
                    <div
                      onClick={() => handleChangePage(count)}
                      className="cursor-pointer border-r px-2 py-1 text-tw-text-16 font-semibold text-tw-secundary-color-light duration-300 hover:bg-tw-secundary-color-light/25"
                    >
                      {count}
                    </div>
                  </li>
                )
              }

              if (count === listOfPages.length) {
                return (
                  <li key={v4()} className="flex items-center">
                    <div
                      onClick={() => handleChangePage(count)}
                      className="cursor-pointer border-r px-2 py-1 text-tw-text-16 font-semibold text-tw-secundary-color-light duration-300 hover:bg-tw-secundary-color-light/25"
                    >
                      {count}
                    </div>
                    <div
                      onClick={() => handleChangePage(currentPage + 1)}
                      className="cursor-pointer border-r px-2 py-1 text-tw-text-16 font-semibold text-tw-secundary-color-light duration-300 hover:bg-tw-secundary-color-light/25"
                    >
                      {'Próximo >'}
                    </div>
                  </li>
                )
              }

              return (
                <li
                  key={v4()}
                  onClick={() => handleChangePage(count)}
                  className="cursor-pointer border-r px-2 py-1 text-tw-text-16 font-semibold text-tw-secundary-color-light duration-300 hover:bg-tw-secundary-color-light/25"
                >
                  {count}
                </li>
              )
            }

            if (count === 1) {
              return (
                <li key={v4()} className="flex items-center">
                  <div
                    onClick={() => handleChangePage(currentPage - 1)}
                    className="cursor-pointer border-r px-2 py-1 text-tw-text-16 font-semibold text-tw-secundary-color-light duration-300 hover:bg-tw-secundary-color-light/25"
                  >
                    {'< Anterior'}
                  </div>
                  <div className="cursor-pointer border-r px-2 py-1 text-tw-text-16 font-semibold text-tw-secundary-color-light duration-300 hover:bg-tw-secundary-color-light/25">
                    ...
                  </div>
                </li>
              )
            }

            if (count === listOfPages.length) {
              return (
                <li key={v4()} className="flex items-center">
                  <div className="cursor-pointer border-r px-2 py-1 text-tw-text-16 font-semibold text-tw-secundary-color-light duration-300 hover:bg-tw-secundary-color-light/25">
                    ...
                  </div>
                  <div
                    onClick={() => handleChangePage(currentPage + 1)}
                    className="cursor-pointer border-r px-2 py-1 text-tw-text-16 font-semibold text-tw-secundary-color-light duration-300 hover:bg-tw-secundary-color-light/25"
                  >
                    {'Próximo >'}
                  </div>
                </li>
              )
            }

            return null
          })}
        </ul>
      </nav>
    </div>
  )
}

export default Pagination
