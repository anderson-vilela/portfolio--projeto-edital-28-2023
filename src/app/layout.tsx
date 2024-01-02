import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import { ReactNode } from 'react'
import './globals.css'

const monstserrat = Montserrat({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  preload: true,
})

export const metadata: Metadata = {
  title: 'Next-SUS',
  description:
    'Desenvolvimento para o projeto avaliativo do Edital 028/2023 - LAIS / HUOL / UFRN. O projeto foi desenvolvido em React.js / Next.js pelo candidato Anderson Vilela.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={monstserrat.className}>{children}</body>
    </html>
  )
}
