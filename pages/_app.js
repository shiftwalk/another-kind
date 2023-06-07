import '@/styles/main.css'
import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'
import { DefaultSeo } from 'next-seo'
import Header from '@/components/header';
import SEO from '@/helpers/seo.config';
import { Lenis as ReactLenis, useLenis } from '@studio-freight/react-lenis'
import { PPEditorialNewItalic, Sohne, VCGaramondCondensed, Verlag } from '@/helpers/fonts';

export default function App({ Component, pageProps }) {
  const router = useRouter()

  return (
    <ReactLenis root>
      <div id="app" className={`${Sohne.variable} ${PPEditorialNewItalic.variable} ${Verlag.variable} ${VCGaramondCondensed.variable} font-sans`}>
        <DefaultSeo {...SEO} /> 

        <Header sunny={router.asPath == '/'} />

        <AnimatePresence mode="wait" initial={false}>
          <Component {...pageProps} key={router.asPath} />
        </AnimatePresence>
      </div>
    // </ReactLenis>
  )
}