import averageInvestmentPerCourse from '@/assets/icon/averageInvestmentPerCourse.svg'
import averageInvestmentPerStudent from '@/assets/icon/averageInvestmentPerStudent.svg'
import registrationsMade from '@/assets/icon/registrationsMade.svg'
import rightToCertification from '@/assets/icon/rightToCertification.svg'
import { DadosGerais } from '@/types/Transparency'
import Image from 'next/image'
import { FaGraduationCap } from 'react-icons/fa6'
import { HiUsers } from 'react-icons/hi2'

type SectionGeneralDataProps = {
  generalData: DadosGerais
}

const SectionGeneralData = ({ generalData }: SectionGeneralDataProps) => {
  return (
    <section className="container rounded-[20px] bg-tw-neutral-100 p-8 shadow-md lg:col-span-2">
      <h2 className="text-center text-tw-text-26 font-bold text-tw-primary-color">
        Dados Gerais
      </h2>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-16 max-lg:grid max-lg:grid-cols-2 max-lg:gap-10 max-sm:grid-cols-1 max-sm:text-center">
        <div className="grid gap-2">
          <div className="flex items-center justify-center gap-2">
            <div className="h-6 w-6 text-tw-primary-color-light max-sm:hidden">
              <HiUsers className="h-full w-full" />
            </div>
            <span className="text-tw-text-16 font-bold">
              Total de usuários registrados
            </span>
          </div>
          <div>
            <span className="block break-words text-center text-tw-text-30 font-semibold text-tw-primary-color">
              {generalData?.usuarios_registrados.toLocaleString('pt-BR')}
            </span>
          </div>
        </div>
        <div className="grid gap-2">
          <div className="flex items-center justify-center gap-2">
            <div className="h-5 w-5 text-tw-primary-color-light max-sm:hidden">
              <Image
                src={registrationsMade}
                alt="Ícone Inscrições Realiazadas"
              />
            </div>
            <span className="text-tw-text-16 font-bold">
              Inscrições realizadas
            </span>
          </div>
          <div>
            <span className="block break-words text-center text-tw-text-30 font-semibold text-tw-primary-color">
              {generalData.incricoes_realizadas.toLocaleString('pt-BR')}
            </span>
          </div>
        </div>
        <div className="grid gap-2">
          <div className="flex items-center justify-center gap-2">
            <div className="h-6 w-6 text-tw-primary-color-light max-sm:hidden">
              <FaGraduationCap className="h-full w-full" />
            </div>
            <span className="text-tw-text-16 font-bold">Cursos ativos</span>
          </div>
          <div>
            <span className="block break-words text-center text-tw-text-30 font-semibold text-tw-primary-color">
              {generalData.cursos_ativos.toLocaleString('pt-BR')}
            </span>
          </div>
        </div>
        <div className="grid gap-2">
          <div className="flex items-center justify-center gap-2">
            <div className="h-7 w-7 text-tw-primary-color-light max-sm:hidden">
              <Image
                src={rightToCertification}
                alt="Ícone Direito à Certificação"
              />
            </div>
            <span className="text-tw-text-16 font-bold">
              Direito à Certificação
            </span>
          </div>
          <div>
            <span className="block break-words text-center text-tw-text-30 font-semibold text-tw-primary-color">
              {generalData.direito_certificacao.toLocaleString('pt-BR')}
            </span>
          </div>
        </div>
        <div className="grid gap-2">
          <div className="flex items-center justify-center gap-2">
            <div className="h-7 w-7 text-tw-primary-color-light max-sm:hidden">
              <Image
                src={averageInvestmentPerCourse}
                alt="Ícone Investimento médio por curso"
              />
            </div>
            <span className="text-tw-text-16 font-bold">
              Investimento médio por curso
            </span>
          </div>
          <div>
            <span className="block break-words text-center text-tw-text-30 font-semibold text-tw-primary-color">
              {generalData.investimento_medio_curso}
            </span>
          </div>
        </div>
        <div className="grid gap-2">
          <div className="flex items-center justify-center gap-2">
            <div className="h-7 w-7 text-tw-primary-color-light max-sm:hidden">
              <Image
                src={averageInvestmentPerStudent}
                alt="Ícone Investimento médio por aluno"
              />
            </div>
            <span className="text-tw-text-16 font-bold">
              Investimento médio por aluno
            </span>
          </div>
          <div>
            <span className="block break-words text-center text-tw-text-30 font-semibold text-tw-primary-color">
              {generalData.investimento_medio_aluno}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionGeneralData
