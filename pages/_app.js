import '@/styles/main.css'
import { AnimatePresence, domAnimation, LazyMotion, m, shouldReduceMotion } from 'framer-motion'
import { useRouter } from 'next/router'
import { DefaultSeo } from 'next-seo'
import SunnyIcon from "@/icons/sunny.svg";
import Header from '@/components/header';
import SEO from '@/helpers/seo.config';
import { Lenis as ReactLenis } from '@studio-freight/react-lenis'
import { PPEditorialNewItalic, Sohne, VCGaramondCondensed } from '@/helpers/fonts';
import { IntroContext } from '@/context/intro'
import { useEffect, useState } from 'react';
import Div100vh from 'react-div-100vh';
import { useReducedMotion } from "framer-motion"

// import FPSStats from "react-fps-stats";

export default function App({ Component, pageProps }) {
  const router = useRouter()
  const shouldReduceMotion = useReducedMotion()
  const [introContext, setIntroContext] = useState(false);

  const introEnd = {
    visible: { y: 0 },
    hidden: { y: '100%' },
  }
  
  const introContainer = {
    visible: { opacity: 0 },
    hidden: {
      opacity: 1,
      transition: {
        staggerChildren: 0.035
      }
    }
  }
  const introContainerUnreveal = {
    visible: { opacity: 1 },
    hidden: { opacity: 1 }
  }
  const letterHider = {
    visible: { x: '-110%' },
    hidden: { x: 0, transition: { delay: 0.65, duration: 2.25 } }
  }

  const letterRevealer = {
    visible: { x: '-10%' },
    hidden: { x: '100%', transition: { delay: 0.2, duration: 2 } }
  }

  const introLetter = {
    visible: { opacity: 0 },
    hidden: { opacity: 1, transition: { duration: 0.3, ease: [0.71,0,0.17,1] }}
  }
  const introFullEnd = {
    visible: { visibility: 'block' },
    hidden: { visibility: 'hidden' }
  }

  return (
    <ReactLenis root options={{ lerp: 0.125 }}>
      <IntroContext.Provider value={[introContext, setIntroContext]}>
        <div id="app" className={`${Sohne.variable} ${PPEditorialNewItalic.variable} ${VCGaramondCondensed.variable} font-sans`}>

          <LazyMotion features={domAnimation}>
            { !introContext && router.asPath == '/' && (
              <Div100vh className={`fixed inset-0 z-[2100] flex flex-wrap items-end ${ introContext ? 'cursor-wait' : 'cursor-default' }`}>
                <m.div 
                  initial="visible"
                  animate="hidden"
                  variants={introFullEnd}
                  transition={{ delay: 2.7, duration: 0, ease: [0.71,0,0.17,1] }}
                  className="w-full h-full cursor-wait absolute inset-0"
                >
                  <m.div 
                    initial="visible"
                    animate="hidden"
                    variants={introEnd}
                    transition={{ delay: 1.9, duration: 0.8, ease: [0.71,0,0.17,1] }}
                    className="text-yellow absolute inset-0 z-[1000] w-full h-full cursor-wait"

                  >
                    <div className="absolute inset-0 bg-green"></div>

                    {/* <m.div initial="visible" animate="hidden" variants={introContainerUnreveal} transition={{ delay: 1.5, duration: 0.6, ease: [0.71,0,0.17,1] }}>
                      <SunnyIcon className={`w-[55px] xl:w-[75px] absolute top-0 left-0 m-4 text-yellow opacity-100 animate-sunny-spin`} />
                    </m.div> */}

                    <m.div initial="visible" animate="hidden" variants={introContainerUnreveal} transition={{ delay: 1.65, duration: 0.6, ease: [0.71,0,0.17,1] }} className="flex flex-wrap items-center justify-center w-full h-full">
                      <m.div initial="visible" animate="hidden" variants={introContainer} className="w-10/12 md:w-8/12 lg:w-1/2 relative">
                        <m.div initial="visible" animate="hidden" variants={letterHider} className="absolute left-0 h-full bg-gradient-to-r from-green via-green to-transparent via-[90%] z-10 w-[150%]"></m.div>

                        <m.div initial="visible" animate="hidden" variants={letterRevealer} className="absolute left-0 h-full bg-gradient-to-l from-green via-green to-transparent via-[90%] z-10 w-[150%]"></m.div>

                        <svg className="w-full" viewBox="0 0 670 196" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M19.725 104.4L0.86499 90.94L3.98499 86.54L18.865 97.18L24.265 89.61L28.265 92.46L19.725 104.4Z" fill="currentColor"/>
                          <path d="M33.1149 86.78L15.7349 71.47L19.2849 67.47L36.6649 82.75L33.1149 86.78Z" fill="currentColor"/>
                          <path d="M34.675 58.85L38.145 62.61L43.995 57.21L47.195 60.67L41.345 66.07L47.045 72.24L43.045 75.89L27.335 58.89L38.105 48.89L41.495 52.54L34.675 58.85Z" fill="currentColor"/>
                          <path d="M59.7049 61.28L46.2749 42.41L58.2149 33.91L61.0749 37.91L53.5049 43.3L55.9149 46.67L62.8049 41.76L65.5249 45.54L58.6249 50.54L61.2449 54.22L68.8649 48.79L71.7049 52.79L59.7049 61.28Z" fill="currentColor"/>
                          <path d="M106.505 35.54L88.6851 29.64L93.5251 40.74L88.5951 42.88L79.2051 21.37L79.8251 20.96L97.4251 26.86L92.6251 15.86L97.5451 13.71L106.955 35.26L106.505 35.54Z" fill="currentColor"/>
                          <path  d="M115.395 32.13L109.315 9.77001L123.465 5.92001L124.755 10.68L115.755 13.12L116.835 17.12L125.015 14.9L126.245 19.41L118.065 21.64L119.255 26L128.255 23.56L129.535 28.29L115.395 32.13Z" fill="currentColor"/>
                          <path d="M138.135 26.54L135.135 3.54001L149.695 1.64001L150.325 6.54001L141.115 7.74001L141.645 11.84L150.045 10.75L150.645 15.39L142.245 16.48L142.835 20.96L152.045 19.77L152.675 24.62L138.135 26.54Z" fill="currentColor"/>
                          <path  d="M168.465 24.05C166.102 24.0289 163.742 23.882 161.395 23.61L161.595 0.859994C163.874 0.622313 166.164 0.515471 168.455 0.539994C178.055 0.629994 182.455 5.65999 182.455 12.2C182.385 19.02 178.075 24.14 168.465 24.05ZM169.135 5.34999C168.397 5.33447 167.658 5.37123 166.925 5.45999L166.805 19.11C167.655 19.2105 168.509 19.2606 169.365 19.26C174.415 19.26 176.685 16.48 176.725 12.15C176.765 7.81999 174.135 5.38999 169.135 5.34999Z" fill="currentColor"/>
                          <path d="M196.205 26.2C193.492 25.698 190.959 24.4871 188.865 22.69L191.055 18.1C192.713 19.7509 194.833 20.8598 197.135 21.28C199.005 21.57 199.855 20.8 200.025 19.68C200.195 18.56 199.735 17.59 196.445 15.68C192.665 13.44 191.615 10.89 192.025 8.14002C192.535 4.79002 195.745 1.95002 201.085 2.76002C203.342 3.10614 205.464 4.05636 207.225 5.51002L205.165 10.06C203.833 8.7727 202.184 7.86171 200.385 7.42002C198.445 7.13002 197.525 7.91002 197.385 8.85002C197.155 10.35 198.245 11.03 200.935 12.68C204.935 15.14 205.935 17.4 205.465 20.34C204.865 23.96 201.705 27.03 196.205 26.2Z" fill="currentColor"/>
                          <path  d="M228.195 34.04C225.607 33.0552 223.332 31.3941 221.605 29.23L224.605 25.13C225.928 27.0577 227.803 28.5394 229.985 29.38C231.775 30 232.755 29.38 233.135 28.33C233.515 27.28 233.235 26.22 230.355 23.72C227.045 20.82 226.485 18.11 227.355 15.49C228.475 12.29 232.155 10.09 237.255 11.87C239.436 12.6236 241.373 13.9499 242.865 15.71L239.995 19.8C238.925 18.2873 237.472 17.0862 235.785 16.32C233.935 15.68 232.885 16.32 232.575 17.18C232.075 18.61 233.015 19.47 235.355 21.59C238.835 24.75 239.355 27.15 238.355 29.95C237.145 33.45 233.445 35.88 228.195 34.04Z" fill="currentColor"/>
                          <path d="M252.945 36.62C252.275 36.28 251.835 36.02 251.195 35.67L248.095 41.86L243.295 39.45L253.575 18.94C255.598 19.6959 257.578 20.5639 259.505 21.54C265.505 24.54 267.115 29.35 265.025 33.54C262.935 37.73 258.435 39.36 252.945 36.62ZM258.075 26.39C257.48 26.0887 256.865 25.8281 256.235 25.61L253.235 31.52C253.905 31.88 254.235 32.07 254.655 32.29C257.195 33.57 259.015 33.1 260.025 31.1C260.865 29.43 260.445 27.54 258.075 26.39Z" fill="currentColor"/>
                          <path  d="M275.075 57.91L275.985 53.46L269.365 48.98L265.575 51.48L261.045 48.42L283.165 35.19L283.765 35.6L279.705 61.05L275.075 57.91ZM278.075 43.22L273.075 46.53L276.865 49.1L278.075 43.22Z" fill="currentColor"/>
                          <path d="M292.335 72.69C286.725 67.63 286.335 60.42 290.945 55.33C295.555 50.24 302.775 49.88 308.385 54.95C310.265 56.6721 311.647 58.8691 312.385 61.31L308.115 63.54C307.521 61.6878 306.469 60.016 305.055 58.68C301.845 55.78 298.055 55.94 295.185 59.13C292.315 62.32 292.515 66.13 295.725 68.99C297.272 70.3323 299.151 71.2368 301.165 71.61L299.305 76.06C296.712 75.6116 294.297 74.4439 292.335 72.69Z" fill="currentColor"/>
                          <path  d="M303.185 83.02L320.965 68.17L330.365 79.42L326.575 82.54L320.625 75.41L317.445 78.07L322.875 84.57L319.285 87.57L313.865 81.11L310.395 84L316.395 91.13L312.635 94.27L303.185 83.02Z" fill="currentColor"/>
                          <path d="M313.725 103.54L314.055 102.79C315.402 103.257 316.868 103.257 318.215 102.79C318.027 102.519 317.894 102.214 317.824 101.892C317.754 101.569 317.749 101.236 317.809 100.912C317.868 100.587 317.991 100.278 318.171 100.001C318.35 99.7247 318.583 99.4864 318.855 99.3C319.37 98.9452 320.004 98.8091 320.619 98.9216C321.234 99.0341 321.779 99.386 322.135 99.9C323.135 101.31 322.485 102.83 321.135 103.76C319.995 104.397 318.705 104.712 317.4 104.674C316.095 104.635 314.825 104.243 313.725 103.54Z" fill="currentColor"/>
                          <path  d="M332.215 122.24C330.487 120.076 329.365 117.491 328.965 114.75L333.635 112.75C333.792 115.084 334.661 117.314 336.125 119.14C337.345 120.59 338.495 120.57 339.365 119.83C340.235 119.09 340.515 118.06 339.305 114.44C337.915 110.27 338.795 107.65 340.915 105.85C343.495 103.66 347.785 103.63 351.285 107.74C352.758 109.486 353.732 111.597 354.105 113.85L349.565 115.92C349.406 114.078 348.761 112.311 347.695 110.8C346.425 109.3 345.215 109.3 344.495 109.91C343.335 110.91 343.705 112.11 344.655 115.12C346.065 119.61 345.315 121.95 343.045 123.88C340.235 126.25 335.865 126.48 332.215 122.24Z" fill="currentColor"/>
                          <path d="M355.555 136.05C354.995 135.54 354.645 135.18 354.125 134.66L349.465 139.78L345.465 136.17L360.905 119.17C362.642 120.434 364.311 121.789 365.905 123.23C370.855 127.74 371.115 132.8 367.975 136.23C364.835 139.66 360.095 140.18 355.555 136.05ZM363.255 127.59C362.765 127.141 362.248 126.723 361.705 126.34L357.255 131.23C357.795 131.76 358.035 132.02 358.405 132.36C360.505 134.27 362.405 134.36 363.905 132.66C365.155 131.28 365.225 129.38 363.255 127.59Z" fill="currentColor"/>
                          <path  d="M376.705 161.25L377.705 156.81L371.145 152.23L367.315 154.68L362.805 151.54L385.125 138.63L385.725 139.05L381.285 164.44L376.705 161.25ZM379.955 146.6L374.865 149.84L378.625 152.46L379.955 146.6Z" fill="currentColor"/>
                          <path d="M399.295 174.54C392.565 171.11 390.295 164.26 393.415 158.14C396.535 152.02 403.415 149.79 410.145 153.22C412.414 154.386 414.327 156.14 415.685 158.3L412.155 161.62C411.089 159.99 409.636 158.65 407.925 157.72C404.065 155.72 400.465 156.91 398.515 160.72C396.565 164.53 397.755 168.13 401.615 170.1C403.458 170.99 405.506 171.369 407.545 171.2L406.915 175.99C404.29 176.223 401.651 175.721 399.295 174.54Z" fill="currentColor"/>
                          <path  d="M416.305 181.68L423.895 159.78L437.755 164.58L436.135 169.24L427.355 166.24L426.005 170.15L434.005 172.93L432.475 177.35L424.475 174.58L422.995 178.85L431.775 181.85L430.175 186.48L416.305 181.68Z" fill="currentColor"/>
                          <path d="M473.315 195.31L461.065 181.07L459.515 193.07L454.185 192.38L457.185 169.09H457.915L469.985 183.21L471.525 171.3L476.855 171.99L473.855 195.31H473.315Z" fill="currentColor"/>
                          <path  d="M486.545 195.46L486.185 172.3L500.845 172.07L500.925 177L491.635 177.14L491.695 181.28L500.165 181.15L500.235 185.83L491.765 185.96L491.835 190.48L501.125 190.33L501.205 195.23L486.545 195.46Z" fill="currentColor"/>
                          <path d="M513.215 194.24L509.865 171.32L524.385 169.2L525.095 174.08L515.895 175.42L516.495 179.52L524.875 178.3L525.545 182.93L517.165 184.15L517.815 188.62L527.015 187.28L527.715 192.13L513.215 194.24Z" fill="currentColor"/>
                          <path  d="M546.605 187.86C544.335 188.527 542.032 189.075 539.705 189.5L533.275 167.67C535.386 166.781 537.546 166.013 539.745 165.37C548.965 162.66 554.675 166.18 556.525 172.45C558.455 179 555.865 185.15 546.605 187.86ZM541.805 169.77C541.093 169.974 540.394 170.225 539.715 170.52L543.575 183.62C544.416 183.469 545.248 183.269 546.065 183.02C550.915 181.59 552.265 178.22 551.065 174.07C549.865 169.92 546.595 168.36 541.805 169.77Z" fill="currentColor"/>
                          <path d="M576.155 177.33C573.6 178.395 570.808 178.761 568.065 178.39L567.405 173.39C569.693 173.876 572.074 173.657 574.235 172.76C575.955 171.97 576.235 170.87 575.785 169.83C575.335 168.79 574.405 168.24 570.595 168.4C566.205 168.59 563.925 167.02 562.775 164.49C561.385 161.41 562.525 157.28 567.445 155.05C569.529 154.131 571.822 153.786 574.085 154.05L574.835 158.99C573.019 158.632 571.141 158.766 569.395 159.38C567.605 160.19 567.265 161.38 567.655 162.21C568.285 163.59 569.555 163.57 572.715 163.49C577.415 163.37 579.455 164.74 580.715 167.44C582.215 170.73 581.215 175.03 576.155 177.33Z" fill="currentColor"/>
                          <path  d="M603.715 161.94L590.485 142.94L594.895 139.87L605.325 154.87L612.955 149.57L615.755 153.57L603.715 161.94Z" fill="currentColor"/>
                          <path d="M623.475 147.22L608.395 129.64L612.465 126.15L627.555 143.72L623.475 147.22Z" fill="currentColor"/>
                          <path  d="M626.865 119.17L630.585 122.69L636.065 116.91L639.485 120.15L633.995 125.93L640.095 131.72L636.405 135.61L619.595 119.67L629.685 109.03L633.265 112.42L626.865 119.17Z" fill="currentColor"/>
                          <path d="M653.235 116.77L634.585 103.04L643.275 91.23L647.275 94.15L641.765 101.64L645.105 104.09L650.105 97.27L653.865 100.04L648.865 106.86L652.505 109.54L658.015 102.06L662.015 104.96L653.235 116.77Z" fill="currentColor"/>
                          <path  d="M664.485 91.89C664.734 91.461 665.104 91.1158 665.55 90.898C665.995 90.6803 666.496 90.6 666.987 90.6673C667.478 90.7346 667.938 90.9464 668.309 91.2759C668.679 91.6054 668.944 92.0377 669.068 92.5177C669.192 92.9978 669.171 93.5039 669.007 93.9718C668.843 94.4397 668.543 94.8482 668.146 95.1454C667.749 95.4426 667.273 95.615 666.777 95.6408C666.282 95.6665 665.791 95.5444 665.365 95.29C664.799 94.9546 664.388 94.4087 664.223 93.7716C664.059 93.1345 664.153 92.458 664.485 91.89Z" fill="currentColor"/>
                        </svg>
                      </m.div>
                    </m.div>
                  </m.div>
                </m.div>
              </Div100vh>
            )}
          </LazyMotion>          

          { pageProps.preview && (<div className={'fixed bottom-0 left-0 w-auto px-3 py-2 bg-green text-off-white justify-center flex z-[1000000] uppercase font-sans text-sm m-3'}>Preview Mode - <a className={'px-1 underline'} href={`/api/exit-preview?currentRoute=${router.route}`}>Click To Exit</a></div>)}

          <DefaultSeo {...SEO} /> 

          <Header sunny={router.asPath == '/'} />

          <AnimatePresence mode="wait" initial={true}>
            <Component {...pageProps} key={router.asPath} />
          </AnimatePresence>
        </div>
      </IntroContext.Provider>
    </ReactLenis>
  )
}