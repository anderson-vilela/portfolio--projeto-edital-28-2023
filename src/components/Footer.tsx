import logoLAIS from '@/assets/img/logo-lais.svg'
import logoUFRN from '@/assets/img/logo-ufrn.svg'
import NavLink from '@/fragments/NavLink'
import Image from 'next/image'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa6'

const Footer = () => {
  return (
    <footer>
      <div className="bg-tw-primary-color">
        <div className="pt-8">
          <p className="text-center text-2xl font-semibold text-tw-neutral-0">
            Realização
          </p>
        </div>
        <div className="flex items-center justify-center gap-20 p-8">
          <Image src={logoLAIS} alt="Logomarca LAIS" width={245} />
          <Image src={logoUFRN} alt="Logomarca UFRN" width={224} />
        </div>
      </div>
      <div className="bg-tw-secundary-color">
        <div className="mx-auto flex max-w-[1000px] justify-between p-16">
          <div>
            <div>
              <Image src={logoLAIS} alt="Logomarca LAIS" width={120} />
            </div>
            <div className="mt-2">
              <p className="text-tw-neutral-0">
                Laboratório de Inovação
                <br />
                Tecnológica em Saúde.
              </p>
            </div>
          </div>
          <div>
            <h4 className="text-2xl text-tw-neutral-0">Links Úteis</h4>
            <nav className="mt-4">
              <ul className="grid gap-2 text-tw-neutral-0">
                <li>
                  <NavLink href="/home">Início</NavLink>
                </li>
                <li>
                  <NavLink href="/about">Sobre Nós</NavLink>
                </li>
                <li>
                  <NavLink href="/courses">Módulos</NavLink>
                </li>
                <li>
                  <NavLink href="/partners">Parceiros</NavLink>
                </li>
                <li>
                  <NavLink href="/transparency">Transparência</NavLink>
                </li>
              </ul>
            </nav>
          </div>
          <div className="flex justify-end ">
            <div>
              <h4 className="text-2xl text-tw-neutral-0">Redes sociais</h4>
              <div className="mt-4 flex items-center justify-between text-tw-neutral-0">
                <a href="https://www.facebook.com/lais.huol" target="_blank">
                  <FaFacebookF className="h-7 w-7" />
                </a>
                <a href="https://twitter.com/laishuol" target="_blank">
                  <FaTwitter className="h-7 w-7" />
                </a>
                <a href="https://www.instagram.com/laishuol/" target="_blank">
                  <FaInstagram className="h-7 w-7" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center bg-[#424146] p-6">
        <p className="text-[18px] text-tw-neutral-0">
          2022 © LAIS (HUOL). Todos os direitos reservados
        </p>
      </div>
    </footer>
  )
}

export default Footer
