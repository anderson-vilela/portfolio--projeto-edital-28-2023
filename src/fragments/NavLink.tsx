'use client'

import Link, { LinkProps } from 'next/link'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'

type NavLinkProps = LinkProps & {
  children: ReactNode
}

const NavLink = ({ href, children, ...rest }: NavLinkProps) => {
  const pathname = usePathname()
  const isActive = pathname === href.toString()

  return (
    <>
      <Link
        href={href}
        className={`${
          isActive
            ? 'text-neutral-300 duration-300 hover:text-primary-color-dark'
            : 'duration-300 hover:text-primary-color-dark'
        }`}
        {...rest}
      >
        {children}
      </Link>
    </>
  )
}

export default NavLink
