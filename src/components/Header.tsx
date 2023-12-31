import logoAvaSus from '@/assets/img/logo-avasus.svg'
import NavLink from '@/fragments/NavLink'
import Image from 'next/image'
import Link from 'next/link'
import { HiMagnifyingGlass } from 'react-icons/hi2'

const Header = () => {
  return (
    <header className="fixed left-0 top-0 z-50 flex w-full items-center justify-between gap-8 bg-tw-neutral-0 px-20 py-5 text-xl font-bold text-tw-neutral-400">
      <div>
        <Link href="/home">
          <Image src={logoAvaSus} alt="Logomarca" width={200} />
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <nav className="px-8 py-4">
          <ul className="flex items-center justify-center gap-9">
            <li>
              <NavLink href="/home">Início</NavLink>
            </li>
            <li>
              <NavLink href="/about">Sobre Nós</NavLink>
            </li>
            <li>
              <NavLink href="/courses">Cursos</NavLink>
            </li>
            <li>
              <NavLink href="/partners">Parceiros</NavLink>
            </li>
            <li>
              <NavLink href="/transparency">Transparência</NavLink>
            </li>
            <li>
              <NavLink href="/contacts">Contato</NavLink>
            </li>
          </ul>
        </nav>
        <label
          htmlFor="header-search"
          className="group flex w-[21.875rem] items-center rounded-[20px] border-2 border-tw-secundary-color-dark/20 bg-transparent px-4 text-tw-secundary-color-light duration-300 hover:cursor-text hover:border-tw-primary-color-dark"
        >
          <HiMagnifyingGlass className="text-tw-secundary-color-light duration-300 group-hover:text-tw-primary-color-dark" />
          <input
            type="search"
            name="search"
            id="header-search"
            placeholder="Buscar por um assunto..."
            className="w-full bg-transparent p-2 text-base text-tw-secundary-color-light outline-none duration-300 placeholder:text-tw-secundary-color-light group-hover:placeholder:text-tw-primary-color-dark"
          />
        </label>
        <div className="flex items-center gap-4">
          <button className="rounded-[20px] border border-tw-secundary-color-light bg-transparent px-7 py-2 font-semibold text-tw-secundary-color-light duration-300 hover:border-tw-primary-color-dark hover:bg-tw-primary-color-dark hover:text-tw-neutral-0">
            Entrar
          </button>
          <button className="rounded-[20px] bg-tw-secundary-color-light px-7 py-2 font-semibold text-tw-neutral-0 hover:border-tw-primary-color-dark hover:bg-tw-primary-color-dark">
            Cadastrar
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
