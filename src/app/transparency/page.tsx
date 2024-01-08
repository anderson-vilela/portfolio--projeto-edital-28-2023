import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { TransparencyType } from '@/types/Transparency'
import BreadCrumb from './_components/BreadCrumb'
import MapChart from './_components/MapChart'
import PieChart from './_components/PieChart'
import SectionGeneralData from './_components/SectionGeneralData'

type PromiseTransparencyType = {
  data: TransparencyType
  colorsForChart: string[]
}

async function GetTransparencyData(): Promise<PromiseTransparencyType> {
  const response = await fetch(
    `${process.env.URL_API_JSON_SERVER}/transparecia`,
    {
      next: { revalidate: 3600 * 24, tags: ['transparency'] },
    },
  )

  if (!response.ok) {
    throw new Error('Failed to fetch data')
  }

  const data = await response.json()

  const mainColors = ['#ffffff', '#d2202c', '#707070', '#2f2e41']

  const createColors = (colorsSetSize: number, mainList: string[]) => {
    const colorsSetData = new Set(mainList)

    while (colorsSetData.size < colorsSetSize) {
      const hexColor = Math.floor(Math.random() * 16777215).toString(16)
      colorsSetData.add(hexColor)
    }

    return Array.from(colorsSetData)
  }

  const colorsForChart = createColors(
    data.usuarios_por_curso.length,
    mainColors,
  )

  return { data, colorsForChart }
}

const TransparencyPage = async () => {
  const { data, colorsForChart } = await GetTransparencyData()

  return (
    <>
      <Header />
      <main className="mt-[100px] flex-1">
        <BreadCrumb />
        <h1 className="container mt-8 text-center text-tw-text-40 font-semibold text-tw-primary-color">
          Transparência
        </h1>
        <div className="container mb-[200px] mt-8 grid grid-cols-2 gap-8 max-lg:grid-cols-1">
          <SectionGeneralData generalData={data.dados_gerais} />
          <PieChart
            data={data.usuarios_por_curso}
            colorsForChart={colorsForChart}
          />
          <MapChart data={data.usuarios_por_estado} />
        </div>
      </main>
      <Footer />
    </>
  )
}

export default TransparencyPage
