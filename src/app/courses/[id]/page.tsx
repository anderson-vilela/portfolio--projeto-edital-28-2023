import Footer from '@/components/Footer'
import Header from '@/components/Header'

type CourseDetailsProps = {
  params: {
    id: number
  }
}

const CourseDetails = ({ params }: CourseDetailsProps) => {
  return (
    <>
      <Header />
      <main className="flex-1">{params.id}</main>
      <Footer />
    </>
  )
}

export default CourseDetails
