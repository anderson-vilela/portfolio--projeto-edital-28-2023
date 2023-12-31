import Footer from '@/components/Footer'
import Header from '@/components/Header'

type CourseDetailsProps = {
  id: number
}

const CourseDetails = ({ id }: CourseDetailsProps) => {
  return (
    <>
      <Header />
      <main className="flex-1">CourseDetails {id}</main>
      <Footer />
    </>
  )
}

export default CourseDetails
