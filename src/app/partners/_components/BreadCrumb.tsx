import Link from 'next/link'

const BreadCrumb = () => {
  return (
    <nav className="container mt-[130px]">
      <ul className="flex items-center gap-2 font-semibold text-tw-secundary-color-light">
        <li>
          <Link href={'/home'}>Início</Link>
        </li>
        <li className="text-tw-neutral-400">
          <Link href={'/partners'}>/ Parceiros</Link>
        </li>
      </ul>
    </nav>
  )
}

export default BreadCrumb
