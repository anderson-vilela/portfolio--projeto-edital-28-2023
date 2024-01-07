'use client'

import { useRouter } from 'next/navigation'
import React from 'react'
import { HiMagnifyingGlass } from 'react-icons/hi2'

const SearchButton = () => {
  const router = useRouter()
  const [search, setSearch] = React.useState('')

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
    console.log(event.target.value)
  }

  const handleSubmit = (event: React.KeyboardEvent<HTMLFormElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault()
      router.push(`/search?q=${search}`)
      setSearch('')
    }
  }

  return (
    <form onKeyUp={handleSubmit}>
      <label
        htmlFor="header-search-mobile"
        className="tw-default:w-[140px] tw-default:px-2 group flex w-[240px] items-center rounded-[16px] border-2 border-tw-secundary-color-dark/20 bg-transparent px-4 text-tw-secundary-color-light duration-300 hover:cursor-text hover:border-tw-primary-color-dark xl:w-[200px] 2xl:hidden"
      >
        <div className="tw-default:hidden xl:block">
          <HiMagnifyingGlass className="text-tw-secundary-color duration-300 group-hover:text-tw-primary-color-dark" />
        </div>
        <input
          type="text"
          name="search"
          id="header-search-mobile"
          placeholder="Pesquisar..."
          value={search}
          onChange={onChange}
          className="w-full bg-transparent px-2 py-1 text-base text-tw-secundary-color-light outline-none duration-300 placeholder:font-normal placeholder:text-tw-secundary-color group-hover:placeholder:text-tw-primary-color-dark min-[1800px]:p-2"
        />
      </label>
      <label
        htmlFor="header-search-desktop"
        className="group hidden w-[130px] items-center rounded-[16px] border-2 border-tw-secundary-color-dark/20 bg-transparent text-tw-secundary-color-light duration-300 hover:cursor-text hover:border-tw-primary-color-dark 2xl:flex 2xl:w-[280px] 2xl:px-2 min-[1800px]:rounded-[20px] min-[1920px]:w-[21.875rem] min-[1920px]:px-4"
      >
        <div className="">
          <HiMagnifyingGlass className="text-tw-secundary-color duration-300 group-hover:text-tw-primary-color-dark" />
        </div>
        <input
          type="text"
          name="search"
          id="header-search-desktop"
          placeholder="Buscar por um assunto..."
          value={search}
          onChange={onChange}
          className="w-full bg-transparent px-2 py-1 text-base text-tw-secundary-color-light outline-none duration-300 placeholder:font-normal placeholder:text-tw-secundary-color group-hover:placeholder:text-tw-primary-color-dark min-[1800px]:p-2"
        />
      </label>
    </form>
  )
}

export default SearchButton
