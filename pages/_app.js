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

      { pageProps.preview && (<div className={'fixed bottom-0 left-0 w-auto px-3 py-2 bg-green text-off-white justify-center flex z-[1000000] uppercase font-sans text-sm m-3'}>Preview Mode - <a className={'px-1 underline'} href={`/api/exit-preview?currentRoute=${router.route}`}>Click To Exit</a></div>)}

        <DefaultSeo {...SEO} /> 

        <Header sunny={router.asPath == '/'} />

        <AnimatePresence mode="wait" initial={true}>
          <Component {...pageProps} key={router.asPath} />
        </AnimatePresence>
      </div>
    </ReactLenis>
  )
}