import Link from 'next/link'

const BreadCrumb = () => {
  return (
    <nav className="container pt-[30px]">
      <ul className="flex items-center gap-2 text-tw-text-16 font-semibold text-tw-secundary-color-light">
        <li>
          <Link href={'/home'}>Início</Link>
        </li>
        <li className="text-tw-neutral-400">
          <Link href={'/transparency'}>/ Transparência</Link>
        </li>
      </ul>
    </nav>
  )
}

export default BreadCrumb
