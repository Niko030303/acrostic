import '../styles/globals.css'
import 'remixicon/fonts/remixicon.css'
import type { AppProps } from 'next/app'
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/react';

export default function App({ Component, pageProps }: AppProps) {
  return <>
  <Component {...pageProps} />
  <Analytics />
  <Script src="https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js" data-name="bmc-button" data-slug="niko030303" data-color="#FFDD00" data-emoji="" data-font="Lato" data-text="Buy me a coffee" data-outline-color="#000000" data-font-color="#000000" data-coffee-color="#ffffff" />
  <Script src="https://unpkg.com/dockbar@latest/dockbar.iife.js" />
  </>
}
