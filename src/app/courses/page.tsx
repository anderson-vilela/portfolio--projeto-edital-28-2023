import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Link from 'next/link'
import EducationalModulesSection from './_components/EducationalModulesSection'

const Courses = () => {
  return (
    <>
      <Header />
      <main className="flex-1 pt-[130px]">
        <nav className="container">
          <ul className="flex items-center gap-2 text-tw-text-16 font-semibold text-tw-secundary-color-light">
            <li>
              <Link href={'/home'}>Início</Link>
            </li>
            <li>
              <Link href={'/courses'}>/ Cursos</Link>
            </li>
            <li className="text-tw-neutral-400">
              <Link href={'/courses'}>/ Módulos</Link>
            </li>
          </ul>
        </nav>
        <EducationalModulesSection />
      </main>
      <Footer />
    </>
  )
}

export default Courses
