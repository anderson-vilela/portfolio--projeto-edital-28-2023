import imgAprendaNoSeuTempo from '@/assets/img/aprenda-no-seu-tempo.png'
import imgComeceAgora from '@/assets/img/comece-agora.png'
import imgNossaMissao from '@/assets/img/nossa-missao.png'
import imgQuemPodeParticipar from '@/assets/img/quem-pode-participar.png'
import imgReferenciaEAD from '@/assets/img/referencia-ead.png'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Image from 'next/image'
import Link from 'next/link'

const AboutPage = () => {
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
              <Link href={'/about'}>/ Sobre Nós</Link>
            </li>
          </ul>
        </nav>
        <section className="container mb-32">
          <h1 className="my-8 text-center text-tw-text-40 font-semibold text-tw-primary-color">
            Sobre Nós
          </h1>
          <hr />
          <div className="my-16 flex items-center justify-between gap-8 max-lg:flex-col">
            <div className="relative h-[200px] max-h-[200px] min-h-[200px] w-[400px] min-w-[400px] max-w-[400px] max-lg:order-1 max-sm:w-[100%] max-sm:min-w-[100%]">
              <Image
                className="object-contain"
                fill
                src={imgNossaMissao}
                alt="Imagem: Nossa Missão"
              />
            </div>
            <div className="w-full">
              <h2 className="text-tw-text-30 font-semibold text-tw-neutral-400">
                Nossa Missão
              </h2>
              <p className="text-tw-text-16">
                Promover conhecimento integrado e acessível em educação para a
                saúde.
              </p>
            </div>
          </div>
          <hr />
          <div className="my-16 flex items-center justify-between gap-8 max-lg:flex-col">
            <div className="w-full">
              <h2 className="text-tw-text-30 font-semibold text-tw-neutral-400">
                Referência em EaD
              </h2>
              <p className="text-tw-text-16">
                Os cursos são ofertados por instituições de ensino com
                referência em educação a distância. Cada módulo foi
                cuidadosamente elaborado para que você tenha a melhor
                experiência em aprendizado remoto.
              </p>
            </div>
            <div className="relative h-[200px] max-h-[200px] min-h-[200px] w-[400px] min-w-[400px] max-w-[400px] max-lg:order-1 max-sm:w-[100%] max-sm:min-w-[100%]">
              <Image
                src={imgReferenciaEAD}
                alt="Imagem: Referência em EAD"
                className="object-contain"
                sizes="33vw"
                fill
              />
            </div>
          </div>
          <hr />
          <div className="my-16 flex items-center justify-between gap-8 max-lg:flex-col">
            <div className="relative h-[200px] max-h-[200px] min-h-[200px] w-[400px] min-w-[400px] max-w-[400px] max-lg:order-1 max-sm:w-[100%] max-sm:min-w-[100%]">
              <Image
                src={imgQuemPodeParticipar}
                alt="Imagem: Quem pode participar"
                className="object-contain"
                sizes="33vw"
                fill
              />
            </div>
            <div className="w-full">
              <h2 className="text-tw-text-30 font-semibold text-tw-neutral-400">
                Quem pode participar
              </h2>
              <p className="text-tw-text-16">
                Os módulos foram elaborados a partir das necessidades do Sistema
                Único de Saúde (SUS) e têm objetivo de qualificar a formação de
                profissionais e trabalhadores da Saúde.
              </p>
            </div>
          </div>
          <hr />
          <div className="my-16 flex items-center justify-between gap-8 max-lg:flex-col">
            <div className="w-full">
              <h2 className="text-tw-text-30 font-semibold text-tw-neutral-400">
                Aprenda no seu tempo
              </h2>
              <p className="text-tw-text-16">
                O AVASUS permite que você acesse os módulos a qualquer hora,
                conforme sua rotina e necessidade.
              </p>
            </div>
            <div className="relative h-[200px] max-h-[200px] min-h-[200px] w-[400px] min-w-[400px] max-w-[400px] max-lg:order-1 max-sm:w-[100%] max-sm:min-w-[100%]">
              <Image
                src={imgAprendaNoSeuTempo}
                alt="Imagem: Aprenda no seu tempo"
                className="object-contain"
                sizes="33vw"
                fill
              />
            </div>
          </div>
          <hr />
          <div className="my-16 flex items-center justify-between gap-8 max-lg:flex-col">
            <div className="relative h-[200px] max-h-[200px] min-h-[200px] w-[400px] min-w-[400px] max-w-[400px] max-lg:order-1 max-sm:w-[100%] max-sm:min-w-[100%]">
              <Image
                src={imgComeceAgora}
                alt="Imagem: Comece agora"
                className="object-contain"
                sizes="33vw"
                fill
              />
            </div>
            <div className="w-full">
              <h2 className="text-tw-text-30 font-semibold text-tw-neutral-400">
                Comece agora
              </h2>
              <p className="text-tw-text-16">
                A qualquer hora e onde estiver, você poderá acessar os
                conteúdos. Escolha um dos módulos disponíveis e comece agora
                experiência no AVASUS.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default AboutPage
