import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'VetHoff - Ultrassonografia Veterinária',
  description: 'Levamos diagnósticos precisos aonde você está!',
  icons: {
    icon: '/favico.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className="font-brandink antialiased">{children}</body>
    </html>
  )
}

