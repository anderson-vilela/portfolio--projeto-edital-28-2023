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
    <section className="container col-span-2 rounded-[20px] bg-tw-neutral-100 p-8 shadow-md">
      <h2 className="text-center text-[25px] font-bold text-tw-primary-color">
        Dados Gerais
      </h2>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-16">
        <div className="grid gap-2">
          <div className="flex items-center justify-center gap-2">
            <div className="h-6 w-6 text-tw-primary-color-light">
              <HiUsers className="h-full w-full" />
            </div>
            <span className="text-[16px] font-bold">
              Total de usuários registrados
            </span>
          </div>
          <div>
            <span className="block text-center text-[30px] font-semibold text-tw-primary-color">
              {generalData?.usuarios_registrados.toLocaleString('pt-BR')}
            </span>
          </div>
        </div>
        <div className="grid gap-2">
          <div className="flex items-center justify-center gap-2">
            <div className="h-5 w-5 text-tw-primary-color-light">
              <Image
                src={registrationsMade}
                alt="Ícone Inscrições Realiazadas"
              />
            </div>
            <span className="text-[16px] font-bold">Inscrições realizadas</span>
          </div>
          <div>
            <span className="block text-center text-[30px] font-semibold text-tw-primary-color">
              {generalData.incricoes_realizadas.toLocaleString('pt-BR')}
            </span>
          </div>
        </div>
        <div className="grid gap-2">
          <div className="flex items-center justify-center gap-2">
            <div className="h-6 w-6 text-tw-primary-color-light">
              <FaGraduationCap className="h-full w-full" />
            </div>
            <span className="text-[16px] font-bold">Cursos ativos</span>
          </div>
          <div>
            <span className="block text-center text-[30px] font-semibold text-tw-primary-color">
              {generalData.cursos_ativos.toLocaleString('pt-BR')}
            </span>
          </div>
        </div>
        <div className="grid gap-2">
          <div className="flex items-center justify-center gap-2">
            <div className="h-7 w-7 text-tw-primary-color-light">
              <Image
                src={rightToCertification}
                alt="Ícone Direito à Certificação"
              />
            </div>
            <span className="text-[16px] font-bold">
              Direito à Certificação
            </span>
          </div>
          <div>
            <span className="block text-center text-[30px] font-semibold text-tw-primary-color">
              {generalData.direito_certificacao.toLocaleString('pt-BR')}
            </span>
          </div>
        </div>
        <div className="grid gap-2">
          <div className="flex items-center justify-center gap-2">
            <div className="h-7 w-7 text-tw-primary-color-light">
              <Image
                src={averageInvestmentPerCourse}
                alt="Ícone Investimento médio por curso"
              />
            </div>
            <span className="text-[16px] font-bold">
              Investimento médio por curso
            </span>
          </div>
          <div>
            <span className="block text-center text-[30px] font-semibold text-tw-primary-color">
              {generalData.investimento_medio_curso}
            </span>
          </div>
        </div>
        <div className="grid gap-2">
          <div className="flex items-center justify-center gap-2">
            <div className="h-7 w-7 text-tw-primary-color-light">
              <Image
                src={averageInvestmentPerStudent}
                alt="Ícone Investimento médio por aluno"
              />
            </div>
            <span className="text-[16px] font-bold">
              Investimento médio por aluno
            </span>
          </div>
          <div>
            <span className="block text-center text-[30px] font-semibold text-tw-primary-color">
              {generalData.investimento_medio_aluno}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionGeneralData
