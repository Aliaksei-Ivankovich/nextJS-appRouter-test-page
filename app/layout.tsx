import { Montserrat } from 'next/font/google'
import { AppHeader } from '@/components'

import '../styles/globals.css';


const montserrat = Montserrat({
  weight: '400',
  subsets: ['cyrillic']
})

export const metadata = {
  title: 'Test page',
  description: 'next 13.4 test page',
}

const  RootLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <html lang="ru">
      <body className={montserrat.className}>
        <AppHeader/>
        <main className='main-container'>
          {children}
        </main>
      </body>
    </html>
  )
}

export default RootLayout
