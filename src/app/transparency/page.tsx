import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { TransparencyType } from '@/types/Transparency'
import BreadCrumb from './_components/BreadCrumb'
import MapChart from './_components/MapChart'
import PieChart from './_components/PieChart'
import SectionGeneralData from './_components/SectionGeneralData'

async function GetTransparencyData(): Promise<TransparencyType> {
  const response = await fetch(
    `${process.env.URL_API_JSON_SERVER}/transparecia`,
    {
      next: { revalidate: 3600, tags: ['transparency'] },
    },
  )

  if (!response.ok) {
    throw new Error('Failed to fetch data')
  }

  const data = await response.json()

  return data
}

const TransparencyPage = async () => {
  const transparency = await GetTransparencyData()

  return (
    <>
      <Header />
      <main className="mt-[100px] flex-1">
        <BreadCrumb />
        <h1 className="container mt-8 text-center text-[40px] font-semibold text-tw-primary-color">
          Transparência
        </h1>
        <div className="container mb-[200px] mt-8 grid grid-cols-2 gap-8">
          <SectionGeneralData generalData={transparency.dados_gerais} />
          <PieChart data={transparency.usuarios_por_curso} />
          <MapChart />
        </div>
      </main>
      <Footer />
    </>
  )
}

export default TransparencyPage
