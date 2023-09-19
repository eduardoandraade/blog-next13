import { Providers } from './components/Providers'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import ThemeButton from './components/ThemeButton'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dr. Bruno Ferreira Urologista e Cirurgião Geral | Fortaleza',
  description: 'Urologista formado na Santa Casa da Misericórdia de Fortaleza com especialização em Cirurgia Robótica, Vídeo-Cirurgia, Cirurgia Urológica Minimamente Invasiva e Cirurgia Laparoscópica. Atende no Instituto Ariel Scafuri, em Fortaleza-CE.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-white text-black dark:bg-gray-900 dark:selection:bg-gray-900 dark:text-white h-full selection:bg-gray-50`}>
        
       <Providers>
       <Navbar />
       
            {children}
            <ThemeButton/>

       </Providers>
      </body>
    </html>
  )
}
