'use client'

import { ReactNode, useEffect, useState } from 'react'

const Hydrate = ({ children }: { children: ReactNode }) => {
  const [isMounted, setIsMounted] = useState<boolean>(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (isMounted === false) return null

  return <>{children}</>
}

export default Hydrate
