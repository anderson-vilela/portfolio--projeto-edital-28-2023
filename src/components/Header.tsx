import logoAvaSus from '@/assets/img/logo-avasus.svg'
import NavLink from '@/fragments/NavLink'
import Image from 'next/image'
import Link from 'next/link'
import { RiMenuLine } from 'react-icons/ri'
import SearchButton from './SearchButton'

const Header = () => {
  return (
    <header className="fixed left-0 top-0 z-50 grid min-h-[100px] w-full gap-2 bg-tw-neutral-0 px-5 py-5 font-bold text-tw-neutral-400 drop-shadow-md xl:px-10 2xl:text-[18px] min-[1800px]:gap-4 min-[1800px]:px-20 min-[1800px]:text-xl">
      <div className="flex w-full items-center justify-between gap-8">
        <div className="flex items-center gap-2">
          <Link href="/home">
            <Image
              src={logoAvaSus}
              alt="Logomarca"
              width={200}
              className="h-[22px] w-[100px] xl:h-[33px] xl:w-[150px] 2xl:h-[44px] 2xl:w-[200px]"
            />
          </Link>
          <div className="h-[44px] w-[2px] rounded-full bg-tw-neutral-300 min-[1100px]:hidden" />
          <div className="flex items-center gap-2 min-[1100px]:hidden">
            <RiMenuLine className="text-xl" />
            <span>Menu</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <nav className="hidden pr-2 min-[1100px]:block xl:pr-4 min-[1850px]:py-2 min-[1920px]:px-8 min-[1920px]:py-4">
            <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 min-[1800px]:gap-x-9">
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
          <SearchButton />
          <div className="flex items-center gap-4">
            <button className="rounded-[16px] border border-tw-secundary-color-light bg-transparent px-4 py-1 font-semibold text-tw-secundary-color-light duration-300 hover:border-tw-primary-color-dark hover:bg-tw-primary-color-dark hover:text-tw-neutral-0 min-[1800px]:rounded-[20px] min-[1800px]:px-7 min-[1800px]:py-2">
              Entrar
            </button>
            <button className="rounded-[16px] bg-tw-secundary-color-light px-4 py-1 font-semibold text-tw-neutral-0 hover:border-tw-primary-color-dark hover:bg-tw-primary-color-dark min-[1800px]:rounded-[20px] min-[1800px]:px-7 min-[1800px]:py-2">
              Cadastrar
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
