'use server'

import API from '@/libs/axios'
import { APIDataType } from '@/types/TypesAPI'
import { revalidateTag } from 'next/cache'

type handleSubscribeProps = {
  actionType: 'subscribe' | 'unsubscribe'
  userId: string
  course: APIDataType
}

const handleSubscribe = async ({
  actionType,
  userId,
  course,
}: handleSubscribeProps) => {
  if (actionType === 'unsubscribe') {
    if (course.lista_de_usuarios_matriculados) {
      const newData = {
        ...course,
        matriculados: course.matriculados - 1,
        lista_de_usuarios_matriculados:
          course.lista_de_usuarios_matriculados.filter((id) => id !== userId),
      }

      await API.put(`/cursos/${course.id}`, newData)
      revalidateTag('listOfCoursesSeparatedByCategories')
      revalidateTag('courseDetails')
    }
  }

  if (actionType === 'subscribe') {
    const newData = {
      ...course,
      matriculados: course.matriculados + 1,
      lista_de_usuarios_matriculados: course.lista_de_usuarios_matriculados
        ? [...course.lista_de_usuarios_matriculados, userId]
        : [userId],
    }

    await API.put(`/cursos/${course.id}`, newData)
    revalidateTag('listOfCoursesSeparatedByCategories')
    revalidateTag('courseDetails')
  }
}

export default handleSubscribe
