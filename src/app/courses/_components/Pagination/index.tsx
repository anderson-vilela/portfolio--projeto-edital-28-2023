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
                  key={count}
                  onClick={() => handleChangePage(count)}
                  className="cursor-pointer bg-tw-primary-color px-2 py-1 text-white duration-300 hover:bg-tw-primary-color-dark"
                >
                  {count}
                </li>
              )
            }

            if (count > currentPage - 4 && count < currentPage + 4) {
              if (count === 1) {
                return (
                  <>
                    <li
                      key={count}
                      onClick={() => handleChangePage(currentPage - 1)}
                      className="cursor-pointer border-r px-2 py-1 text-base font-semibold text-tw-secundary-color-light duration-300 hover:bg-tw-secundary-color-light/25"
                    >
                      Anterior
                    </li>
                    <li
                      key={count}
                      onClick={() => handleChangePage(count)}
                      className="cursor-pointer border-r px-2 py-1 text-base font-semibold text-tw-secundary-color-light duration-300 hover:bg-tw-secundary-color-light/25"
                    >
                      {count}
                    </li>
                  </>
                )
              }

              if (count === listOfPages.length) {
                return (
                  <>
                    <li
                      key={count}
                      onClick={() => handleChangePage(count)}
                      className="cursor-pointer border-r px-2 py-1 text-base font-semibold text-tw-secundary-color-light duration-300 hover:bg-tw-secundary-color-light/25"
                    >
                      {count}
                    </li>
                    <li
                      key={count}
                      onClick={() => handleChangePage(currentPage + 1)}
                      className="cursor-pointer border-r px-2 py-1 text-base font-semibold text-tw-secundary-color-light duration-300 hover:bg-tw-secundary-color-light/25"
                    >
                      Próximo
                    </li>
                  </>
                )
              }

              return (
                <li
                  key={count}
                  onClick={() => handleChangePage(count)}
                  className="cursor-pointer border-r px-2 py-1 text-base font-semibold text-tw-secundary-color-light duration-300 hover:bg-tw-secundary-color-light/25"
                >
                  {count}
                </li>
              )
            }

            if (count === 1) {
              return (
                <>
                  <li
                    key={count}
                    onClick={() => handleChangePage(currentPage - 1)}
                    className="cursor-pointer border-r px-2 py-1 text-base font-semibold text-tw-secundary-color-light duration-300 hover:bg-tw-secundary-color-light/25"
                  >
                    Anterior
                  </li>
                  <li
                    key={count}
                    className="cursor-pointer border-r px-2 py-1 text-base font-semibold text-tw-secundary-color-light duration-300 hover:bg-tw-secundary-color-light/25"
                  >
                    ...
                  </li>
                </>
              )
            }

            if (count === listOfPages.length) {
              return (
                <>
                  <li
                    key={count}
                    className="cursor-pointer border-r px-2 py-1 text-base font-semibold text-tw-secundary-color-light duration-300 hover:bg-tw-secundary-color-light/25"
                  >
                    ...
                  </li>
                  <li
                    key={count}
                    onClick={() => handleChangePage(currentPage + 1)}
                    className="cursor-pointer border-r px-2 py-1 text-base font-semibold text-tw-secundary-color-light duration-300 hover:bg-tw-secundary-color-light/25"
                  >
                    Próximo
                  </li>
                </>
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
