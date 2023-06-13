import '@/styles/main.css'
import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'
import { DefaultSeo } from 'next-seo'
import Header from '@/components/header';
import SEO from '@/helpers/seo.config';
import { Lenis as ReactLenis, useLenis } from '@studio-freight/react-lenis'
import { PPEditorialNewItalic, Sohne, VCGaramondCondensed, Verlag } from '@/helpers/fonts';
// import FPSStats from "react-fps-stats";

export default function App({ Component, pageProps }) {
  const router = useRouter()

  return (
    <ReactLenis root>
      
      {/* <FPSStats top="auto" bottom="20px" left="20px" /> */}
      <div id="app" className={`${Sohne.variable} ${PPEditorialNewItalic.variable} ${Verlag.variable} ${VCGaramondCondensed.variable} font-sans`}>
        <DefaultSeo {...SEO} /> 

        <Header sunny={router.asPath == '/'} />

        <AnimatePresence mode="wait" initial={true}>
          <Component {...pageProps} key={router.asPath} />
        </AnimatePresence>
      </div>
    </ReactLenis>
  )
}