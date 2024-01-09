'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { HiMagnifyingGlass } from 'react-icons/hi2'

const InputSearch = () => {
  const router = useRouter()
  const [search, setSearch] = useState('')

  const handleInputSubmit = (event: React.KeyboardEvent<HTMLInputElement>) => {
    event.preventDefault()
    if (search !== '' && event.key === 'Enter') {
      router.push(`/search?q=${search}`)
      setSearch('')
    }
  }

  const handleButtonSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    if (search !== '') {
      router.push(`/search?q=${search}`)
      setSearch('')
    }
  }

  return (
    <div id="component-search" className="container my-10">
      <div className="group flex h-12 items-center justify-between overflow-hidden rounded-[20px] border-2 border-tw-neutral-300/30 duration-300 hover:border-tw-primary-color-dark">
        <HiMagnifyingGlass className="mx-4 text-tw-text-20 text-tw-secundary-color duration-300 group-hover:text-tw-primary-color-dark" />
        <input
          type="text"
          placeholder="Buscar por um assunto..."
          className="w-full flex-1 text-tw-text-18 outline-none group-hover:text-tw-primary-color-dark group-hover:placeholder:text-tw-primary-color-dark"
          value={search}
          onChange={({ target }) => setSearch(target.value)}
          onKeyUp={handleInputSubmit}
        />
        <button
          type="button"
          className="h-full bg-neutral-300 px-4 text-tw-text-18 font-semibold text-neutral-600 duration-300 group-hover:bg-tw-primary-color-dark group-hover:text-tw-neutral-0"
          onClick={handleButtonSubmit}
        >
          Pesquisar
        </button>
      </div>
    </div>
  )
}

export default InputSearch
