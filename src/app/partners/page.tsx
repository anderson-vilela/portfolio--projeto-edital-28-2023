import Footer from '@/components/Footer'
import Header from '@/components/Header'
import BreadCrumb from './_components/BreadCrumb'
import OurPartners from './_components/OurPartners'

export type PartnersType = {
  id: number
  capa: string
  titulo: string
}

async function getPartners(): Promise<PartnersType[]> {
  const response = await fetch(`${process.env.URL_API_JSON_SERVER}/parceiros`, {
    next: { revalidate: 3600 },
  })

  if (!response.ok) {
    throw new Error(response.statusText)
  }

  const data = await response.json()

  return data
}

const PartnersPage = async () => {
  const partners = await getPartners()

  return (
    <>
      <Header />
      <main>
        <BreadCrumb />
        <OurPartners partners={partners} />
      </main>
      <Footer />
    </>
  )
}

export default PartnersPage
