import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'
import PageWrapper from '../components/layout/PageWrapper'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Asylum HRF',
  description: 'Human Rights First Asylum Application',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <PageWrapper>
            {children}
          </PageWrapper>
        </Providers>
      </body>
    </html>
  )
}
