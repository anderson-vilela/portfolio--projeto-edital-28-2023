import { v4 } from 'uuid'

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
  return (
    <div className="mb-[200px] mt-20 flex flex-col items-center">
      <nav className="inline-block overflow-hidden rounded-[10px] border border-tw-secundary-color-light/25 bg-tw-neutral-100">
        <ul className="flex items-center justify-center text-[16px] font-semibold text-tw-secundary-color-light">
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
                      className="cursor-pointer border-r px-2 py-1 text-base font-semibold text-tw-secundary-color-light duration-300 hover:bg-tw-secundary-color-light/25"
                    >
                      {'< Anterior'}
                    </div>
                    <div
                      onClick={() => handleChangePage(count)}
                      className="cursor-pointer border-r px-2 py-1 text-base font-semibold text-tw-secundary-color-light duration-300 hover:bg-tw-secundary-color-light/25"
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
                      className="cursor-pointer border-r px-2 py-1 text-base font-semibold text-tw-secundary-color-light duration-300 hover:bg-tw-secundary-color-light/25"
                    >
                      {count}
                    </div>
                    <div
                      onClick={() => handleChangePage(currentPage + 1)}
                      className="cursor-pointer border-r px-2 py-1 text-base font-semibold text-tw-secundary-color-light duration-300 hover:bg-tw-secundary-color-light/25"
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
                  className="cursor-pointer border-r px-2 py-1 text-base font-semibold text-tw-secundary-color-light duration-300 hover:bg-tw-secundary-color-light/25"
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
                    className="cursor-pointer border-r px-2 py-1 text-base font-semibold text-tw-secundary-color-light duration-300 hover:bg-tw-secundary-color-light/25"
                  >
                    {'< Anterior'}
                  </div>
                  <div className="cursor-pointer border-r px-2 py-1 text-base font-semibold text-tw-secundary-color-light duration-300 hover:bg-tw-secundary-color-light/25">
                    ...
                  </div>
                </li>
              )
            }

            if (count === listOfPages.length) {
              return (
                <li key={v4()} className="flex items-center">
                  <div className="cursor-pointer border-r px-2 py-1 text-base font-semibold text-tw-secundary-color-light duration-300 hover:bg-tw-secundary-color-light/25">
                    ...
                  </div>
                  <div
                    onClick={() => handleChangePage(currentPage + 1)}
                    className="cursor-pointer border-r px-2 py-1 text-base font-semibold text-tw-secundary-color-light duration-300 hover:bg-tw-secundary-color-light/25"
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
