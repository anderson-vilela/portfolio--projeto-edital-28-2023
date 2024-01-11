'use client'

import handleSubscribe from '@/actions/handleSubscribe'
import { APIDataType } from '@/types/TypesAPI'
import { useAuth } from '@clerk/nextjs'

type FormSubscribeProps = {
  course: APIDataType
}

const FormSubscribe = ({ course }: FormSubscribeProps) => {
  const { userId } = useAuth()

  let isAlreadyRegistered = false

  if (course.lista_de_usuarios_matriculados && userId) {
    isAlreadyRegistered = course.lista_de_usuarios_matriculados.includes(userId)
  }

  return (
    <div>
      {userId && isAlreadyRegistered === true && (
        <form
          action={() =>
            handleSubscribe({
              actionType: 'unsubscribe',
              userId,
              course,
            })
          }
        >
          <button
            type="submit"
            className="rounded-lg border border-tw-primary-color-light px-2 py-1 text-tw-text-18 font-semibold text-tw-primary-color-light duration-300 hover:bg-tw-primary-color hover:text-tw-neutral-0"
          >
            Cancelar Inscrição
          </button>
        </form>
      )}
      {userId && isAlreadyRegistered === false && (
        <form
          action={() =>
            handleSubscribe({
              actionType: 'subscribe',
              userId,
              course,
            })
          }
        >
          <button
            type="submit"
            className="rounded-lg border bg-tw-primary-color-light px-2 py-1 text-tw-text-18 font-semibold text-tw-neutral-0 duration-300 hover:bg-tw-primary-color"
          >
            Inscrever-se
          </button>
        </form>
      )}
    </div>
  )
}

export default FormSubscribe
