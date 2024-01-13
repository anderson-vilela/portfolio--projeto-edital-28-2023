import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'

const ContactPage = () => {
  return (
    <>
      <Header />
      <main className="mt-[100px] flex-1">
        <nav className="container mt-[30px]">
          <ul className="flex items-center gap-2 text-tw-text-16 font-semibold text-tw-secundary-color-light">
            <li>
              <Link href={'/home'}>Início</Link>
            </li>
            <li className="text-tw-neutral-400">
              <Link href={'/contacts'}>/ Contatos</Link>
            </li>
          </ul>
        </nav>
        <section className="container mb-32">
          <h1 className="my-8 text-center text-tw-text-40 font-semibold text-tw-primary-color">
            Contatos
          </h1>
          <div className="mt-16 grid grid-cols-2 gap-8 max-lg:grid-cols-1">
            <div>
              <h4 className="text-tw-text-26">Nossos canais de suporte</h4>
              <ul className="mt-4 grid gap-2">
                <li className="flex items-center gap-3">
                  <FaWhatsapp className="text-2xl" />
                  <p className="text-tw-text-18 font-semibold max-sm:break-all max-sm:text-xs">
                    (84) 99927-8215
                  </p>
                </li>
                <li className="flex items-center gap-3">
                  <HiOutlineMail className="text-2xl" />
                  <p className="text-tw-text-18 font-semibold max-sm:break-all max-sm:text-xs">
                    suporte.avasus@lais.huol.ufrn.br
                  </p>
                </li>
              </ul>
            </div>
            <hr className="lg:hidden" />
            <div>
              <h4 className="text-tw-text-26">Formulário</h4>
              <p className="mt-4 text-tw-text-18 font-semibold">
                Deseja mais informações? Preencha o formulário e explique suas
                dúvidas, logo entraremos em contato.
              </p>
              <form className="grid gap-4 text-tw-neutral-400">
                <div className="mt-8 flex flex-col gap-2">
                  <label htmlFor="" className="text-tw-text-18 font-semibold">
                    Nome <span className="font-bold">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: Joãozinho da Silva"
                    required
                    className="w-full rounded-lg border px-4 py-2"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="" className="text-tw-text-18 font-semibold">
                    E-mail <span className="font-bold">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: joaozinho@gmail.com"
                    required
                    className="w-full rounded-lg border px-4 py-2"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="" className="text-tw-text-18 font-semibold">
                    Dúvida <span className="font-bold">*</span>
                  </label>
                  <textarea
                    rows={8}
                    required
                    placeholder="Explique suas dúvidas..."
                    className="w-full rounded-lg border px-4 py-2"
                  />
                </div>
                <button
                  type="submit"
                  className="max-w-fit rounded-xl bg-tw-secundary-color-light px-8 py-2 text-tw-text-18 font-semibold text-white duration-300 hover:bg-tw-secundary-color"
                >
                  Enviar
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default ContactPage
