import NavLink from './NavLink'

const NavBarDesktop = () => {
  return (
    <nav className="hidden pr-2 tw-default:block xl:pr-4 min-[1850px]:py-2 min-[1920px]:px-8 min-[1920px]:py-4">
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
  )
}

export default NavBarDesktop
