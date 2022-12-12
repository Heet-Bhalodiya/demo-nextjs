import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Baloo_Bhai_2 } from '@next/font/google'
import Navbar from '../components/Navbar'

const roboto = Baloo_Bhai_2({
  weight: '400',
  subsets: ['latin'],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={roboto.className}>
      <Navbar />
      <Component {...pageProps} />
    </main>
  )
}
