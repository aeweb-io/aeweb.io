import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Raleway } from '@next/font/google'

const raleway = Raleway({
  variable: '--raleway-font',
  subsets: ['latin'],
  preload: true
})

export default function App({ Component, pageProps }: AppProps) {
  return (<div className={raleway.variable}>
    <Component {...pageProps} />
  </div>)
}
