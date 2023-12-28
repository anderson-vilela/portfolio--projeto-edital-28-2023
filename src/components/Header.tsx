import logoAvaSus from '@/assets/img/logo-avasus.svg'
import NavLink from '@/fragments/NavLink'
import Image from 'next/image'
import Link from 'next/link'
import { HiMagnifyingGlass } from 'react-icons/hi2'

const Header = () => {
  return (
    <header className="flex items-center justify-between gap-8 px-20 py-7 text-xl font-bold text-neutral-400">
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
          className="group flex w-[21.875rem] items-center rounded-[20px] border-2 border-neutral-200 bg-transparent px-4 text-neutral-300 duration-300 hover:cursor-text hover:border-primary-color-dark"
        >
          <HiMagnifyingGlass className="duration-300 group-hover:text-primary-color-dark" />
          <input
            type="search"
            name="search"
            id="header-search"
            placeholder="Buscar por um assunto..."
            className="w-full bg-transparent p-2 text-base text-neutral-300 outline-none duration-300 placeholder:text-neutral-300 group-hover:placeholder:text-primary-color-dark"
          />
        </label>
        <div className="flex items-center gap-4">
          <button className="rounded-[20px] border border-neutral-300 bg-transparent px-7 py-2 text-neutral-300 duration-300 hover:border-primary-color-dark hover:bg-primary-color-dark hover:text-neutral-0">
            Entrar
          </button>
          <button className="rounded-[20px] bg-neutral-300 px-7 py-2 text-neutral-0 hover:border-primary-color-dark hover:bg-primary-color-dark">
            Cadastrar
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
