'use client'

import { ReactNode, useEffect, useState } from 'react'

type HydrateProps = {
  skeleton?: ReactNode
  children: ReactNode
}

const Hydrate = ({ skeleton, children }: HydrateProps) => {
  const [isMounted, setIsMounted] = useState<boolean>(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (isMounted === false) {
    if (!skeleton) return null
    return <>{skeleton}</>
  }

  return <>{children}</>
}

export default Hydrate
