import Layout from '@/components/layout'
import Footer from '@/components/footer'
import Container from '@/components/container'
import { fade, reveal, revealLtr, revealTtb } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import SunnyNoRaysIcon from "@/icons/sunny-no-rays.svg";
import ArrowIcon from "@/icons/arrow.svg";
import ImageScale from '@/components/image-scale'
import Link from 'next/link'
import { MouseParallax } from 'react-just-parallax'
import { journalLandingQuery } from '@/helpers/queries'
import SanityPageService from '@/services/sanityPageService'
import PortableText from "react-portable-text"
import SanityImageScale from '@/components/sanity-image-scale'
import { IntroContext } from '@/context/intro'
import { useContext, useEffect, useState } from 'react'

const pageService = new SanityPageService(journalLandingQuery)

export default function Journal(initialData) {
  const { data: { journalLanding }  } = pageService.getPreviewHook(initialData)()
  let colors = ['bg-orange text-off-white', 'bg-blue text-off-white', 'bg-green text-off-white']
  const [introContext, setIntroContext] = useContext(IntroContext);
  const [journalCap, setJournalCap] = useState(6);

  useEffect(() => {
    setIntroContext(true)
  });

  return (
    <Layout>
      <NextSeo title={journalLanding.title} />

      <LazyMotion features={domAnimation}>
        <m.div
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <m.main className="">
            <m.article variants={fade}>
              <div className="relative bg-off-white">
                <Container>
                  <div className="flex flex-wrap justify-center pt-[100px] pb-[15vw] lg:pt-[12.5vw] lg:pb-[10vw] overflow-hidden">
                    <span className="font-mono text-center uppercase tracking-widest block w-[110px] lg:w-[160px] mx-auto text-[53px] mb-4 lg:mb-8 relative">
                      <m.div variants={revealLtr} className="bg-off-white absolute inset-0"></m.div>
                      <svg className="w-full" viewBox="0 0 131 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.90486 32.6716L10.0819 33.5302L8.31097 35.9579L14.6795 40.6037L13.6982 41.9488L7.32967 37.303L5.55875 39.7307L4.38172 38.872L8.90486 32.6716Z" fill="black"/>
                        <path d="M20.3367 26.4105L17.7633 23.6165L18.9881 22.4885L25.3157 29.3585L24.0909 30.4865L21.3237 27.4821L18.0323 30.5137L20.7995 33.5181L19.5747 34.6461L13.2472 27.7762L14.4719 26.6481L17.0452 29.4421L20.3367 26.4105Z" fill="black"/>
                        <path d="M29.7569 26.0861L24.8902 18.1143L30.2862 14.8201L31.0453 16.0636L27.0483 18.5038L28.2684 20.5023L31.6325 18.4485L32.3917 19.692L29.0275 21.7458L30.3967 23.9886L34.3937 21.5484L35.1529 22.7919L29.7569 26.0861Z" fill="black"/>
                        <path d="M47.284 17.8887C47.0585 17.9517 46.8515 18.0004 46.6631 18.035C46.483 18.0673 46.2839 18.0958 46.0657 18.1207L45.6671 16.6923C45.921 16.6665 46.1129 16.6444 46.2429 16.6262C46.3705 16.5995 46.522 16.5618 46.6974 16.5128C47.2153 16.3683 47.5579 16.1601 47.7251 15.8884C47.8901 15.6082 47.9073 15.2343 47.7767 14.7665L46.0144 8.45166L47.6181 8.00408L49.4155 14.4442C49.6579 15.313 49.5998 16.0405 49.2412 16.6267C48.8803 17.2046 48.2279 17.6253 47.284 17.8887Z" fill="black"/>
                        <path d="M56.2159 14.4162C55.8039 14.0197 55.4716 13.5459 55.2191 12.9948C54.9744 12.4343 54.8206 11.8217 54.7577 11.1569C54.6949 10.4921 54.7314 9.86583 54.8675 9.27804C55.0113 8.6808 55.2484 8.14878 55.5788 7.68197C55.9327 7.18682 56.3702 6.79264 56.8912 6.49944C57.4114 6.19761 57.991 6.01647 58.6299 5.95603C59.2688 5.89559 59.872 5.96482 60.4396 6.16374C61.0064 6.35403 61.51 6.65917 61.9505 7.07918C62.3626 7.47575 62.6909 7.95427 62.9356 8.51475C63.1881 9.06579 63.3458 9.6737 63.4087 10.3385C63.4716 11.0033 63.4311 11.6343 63.2872 12.2315C63.1512 12.8193 62.918 13.3466 62.5876 13.8134C62.2337 14.3086 61.7967 14.7071 61.2764 15.0089C60.7554 15.3021 60.1754 15.4789 59.5365 15.5394C58.8976 15.5998 58.2948 15.5349 57.728 15.3446C57.1604 15.1457 56.6564 14.8362 56.2159 14.4162ZM59.3981 14.076C60.1924 14.0008 60.8066 13.6335 61.2407 12.9739C61.6748 12.3144 61.8449 11.4882 61.751 10.4953C61.6571 9.50244 61.335 8.72279 60.7849 8.15636C60.2348 7.58993 59.5626 7.34429 58.7683 7.41943C57.974 7.49457 57.3598 7.86192 56.9257 8.52147C56.4916 9.18101 56.3215 10.0072 56.4154 11.0001C56.5093 11.993 56.8314 12.7726 57.3815 13.339C57.9316 13.9055 58.6038 14.1511 59.3981 14.076Z" fill="black"/>
                        <path d="M72.5142 15.6024C71.3425 15.468 70.463 15.0311 69.8756 14.2916C69.2979 13.5445 69.0782 12.5679 69.2165 11.3617L69.8581 5.76575L71.5123 5.95543L70.8766 11.4997C70.7867 12.2837 70.8947 12.9027 71.2005 13.3568C71.5159 13.8032 72.0097 14.065 72.6817 14.142C73.3623 14.2201 73.9025 14.0769 74.3022 13.7125C74.7115 13.3404 74.961 12.7623 75.0509 11.9783L75.6867 6.43408L77.3409 6.62376L76.6992 12.2197C76.5599 13.4345 76.1206 14.3356 75.3811 14.9229C74.6502 15.5113 73.6946 15.7377 72.5142 15.6024Z" fill="black"/>
                        <path d="M86.203 14.6996L84.769 14.2299L83.6434 17.6665L82.061 17.1483L84.9682 8.27229L88.5161 9.43436C89.5381 9.76908 90.251 10.2672 90.6548 10.9288C91.0614 11.5821 91.1229 12.3414 90.8395 13.2068C90.6155 13.8908 90.2534 14.3973 89.7532 14.7263C89.2531 15.0552 88.6436 15.1887 87.9247 15.1266L89.0456 19.436L87.2407 18.8448L86.203 14.6996ZM86.1052 10.1504L85.2144 12.8701L87.0934 13.4855C87.6538 13.6691 88.1202 13.694 88.4925 13.5605C88.8757 13.4213 89.1388 13.1334 89.2819 12.6966C89.4276 12.2516 89.39 11.8651 89.1689 11.5371C88.9478 11.2092 88.5529 10.9521 87.9842 10.7658L86.1052 10.1504Z" fill="black"/>
                        <path d="M103.677 16.4109L105.067 17.2044L100.435 25.3149L99.1698 24.5924L98.548 16.3429L95.1484 22.2959L93.759 21.5024L98.3908 13.3919L99.8818 14.2434L100.432 22.0928L103.677 16.4109Z" fill="black"/>
                        <path d="M104.442 28.0591L113.295 23.4355L114.704 24.6897L111.136 34.0185L109.883 32.9028L110.699 30.7731L107.687 28.0918L105.676 29.1576L104.442 28.0591ZM111.26 29.3216L112.747 25.4207L109.064 27.3668L111.26 29.3216Z" fill="black"/>
                        <path d="M118.211 42.6834L114.526 37.8699L121.943 32.1928L122.955 33.5149L116.695 38.3065L119.368 41.7979L118.211 42.6834Z" fill="black"/>
                        </svg>

                    </span>

                    <div className="relative overflow-hidden w-full mb-6 lg:mb-8">
                      <m.h1 variants={reveal} className="text-[15vw] lg:text-[10vw] xl:text-[9vw] 2xl:text-[10vw] leading-[1] lg:leading-[1] xl:leading-[1] 2xl:leading-[1] text-center mb-0 pb-0"><span className="block translate-y-[-11%]"><PortableText content={journalLanding.heroHeading} /></span></m.h1>
                    </div>

                    <div className="w-[95%] lg:w-[60%] content text-base/[1.28] lg:text-lg/[1.28] xl:text-xl/[1.28] text-center mx-auto max-w-[800px] relative">
                      <m.div variants={revealTtb} className="absolute inset-0 bg-gradient-to-b from-off-white via-off-white to-transparent via-[70%]"></m.div>
                      <p>{journalLanding.heroText}</p>
                    </div>
                  </div>

                  <div className="w-full grid grid-cols-2 gap-5 max-w-[1920px] mx-auto mb-[18vw] lg:mb-[9.2vw]">
                    {journalLanding.journals.slice(0,2).map((e, i) => {

                      let color = 'bg-blue text-off-white' 
                      let d = new Date(e.postDate);
                      let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
                      let mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d);
                      let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);

                      e.category.title == 'Project News' && (
                        color = 'bg-orange text-off-white'
                      )
  
                      e.category.title == 'Team News' && (
                        color = 'bg-green text-off-white'
                      )
  
                      e.category.title == 'Company News' && (
                        color = 'bg-blue text-off-white'
                      )

                      return (
                        <div className="col-span-2 lg:col-span-1" key={i}>
                          <div className="w-full block relative">
                            <Link scroll={false} href={`/journal/${e.slug.current}`} className={`group w-full block border-b border-black lg:border-none pb-5 lg:pb-0 mb-0`}>
                              <div className="relative">
                                <div className={`absolute inset-0 ${ i == 0 ? 'bg-yellow' : 'bg-orange'} z-[8] h-[100%] transition-transition ease-ak duration-[750ms] rounded-2xl delay-[100ms] lg:group-hover:delay-[0ms] ${ i == 0 ? 'lg:group-hover:rotate-[-3deg]' : 'lg:group-hover:rotate-[3deg]' }`}></div>

                                <div className="w-full relative z-10">
                                  <div className="relative overflow-hidden rounded-xl">
                                    <div className="lg:group-hover:scale-[1.05] transition-transform ease-ak duration-[750ms]">
                                      <div className="aspect-[14/10]">
                                        <SanityImageScale image={e.images[0]} fill sizes="(max-width: 1024px) 100vw, 50vw" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="flex-1 relative z-10 mt-5">
                                <span className={`inline-block px-[9px] md:px-[13px] pt-[7px] md:pt-[9px] pb-[7px] md:pb-[9px] rounded-full font-sans font-bold tracking-wider uppercase text-[8px] md:text-[10px] leading-none mb-2 ${color}`}>{e.category.title}</span>
                                <h2 className="text-3xl md:text-3xl xl:text-4xl leading-none md:leading-none xl:leading-none mb-3 pb-0 lg:max-w-[80%]">{e.title}</h2>
                                <span className="text-sm md:text-sm lg:text-base leading-none md:leading-none lg:leading-none block">{da} {mo}, {ye}</span>
                              </div>
                            </Link>
                          </div>
                        </div>
                      )
                    })}
                  </div>

                 
                  <div className="flex flex-wrap justify-center mb-[12vw] lg:mb-[6.5vw]">
                    {journalLanding.quoteTitle && (
                      <span className="block mb-8 overflow-hidden relative w-full text-center">
                        <m.span variants={reveal} className="block text-base leading-none lg:text-xl lg:leading-none">{journalLanding.quoteTitle}</m.span>
                      </span>
                    )}
                    {journalLanding.quoteText && (
                      <span className="font-display block w-full md:w-[80%] lg:w-[75%] text-center text-[8vw] md:text-[6vw] lg:text-[4.2vw] leading-[1] md:leading-[0.9] lg:leading-[0.9] mb-10 lg:mb-16"><PortableText content={journalLanding.quoteText} /></span>
                    )}
                  </div>
                </Container>

                <ul className="mb-[7.5vw] w-full">
                  {journalLanding.journals.slice(2, journalCap).map((e, i) => {
                    let color = colors[colors.length * Math.random() | 0]
                    
                    e.category.title == 'Project News' && (
                      color = 'bg-orange text-off-white'
                    )

                    e.category.title == 'Team News' && (
                      color = 'bg-green text-off-white'
                    )

                    e.category.title == 'Company News' && (
                      color = 'bg-blue text-off-white'
                    )

                    let d = new Date(e.postDate);
                      let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
                      let mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d);
                      let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
                    return (
                      <li className="w-full block px-3 lg:px-5 relative" key={i}>
                        <Link scroll={false} href={`/journal/${e.slug.current}`} className={`group w-full flex flex-wrap border-b border-black transition-colors ease-ak duration-[400ms] hover:border-green py-5 lg:py-8 ${i == 0 ? 'border-t' : '' }`}>
                          <div className="absolute bottom-0 left-0 right-0 transition-all ease-ak duration-[400ms] bg-green h-0 scale-y-[1.01] lg:group-hover:h-full z-0 rounded-2xl mx-1"></div>

                          <div className="w-[35%] lg:w-[22%] lg:max-w-[300px] relative z-10 hidden lg:block">
                            <div className="relative overflow-hidden rounded-xl">
                              <div className="lg:group-hover:scale-[1.07] transition-transform ease-ak duration-[750ms]">
                                <div className="aspect-square">
                                  <SanityImageScale image={e.images[0]} fill sizes="(max-width: 1024px) 30vw, 25vw" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex-1 lg:pl-5 relative z-10 transition-colors ease-ak duration-[400ms] lg:group-hover:text-off-white flex flex-wrap">
                            <div className="w-full mb-auto">
                              <span className={`inline-block px-[9px] md:px-[13px] pt-[7px] md:pt-[9px] pb-[7px] md:pb-[9px] rounded-full font-sans font-bold tracking-wider uppercase text-[8px] md:text-[10px] leading-none ${color} mb-2 transition-colors ease-ak duration-[400ms] lg:group-hover:bg-yellow lg:group-hover:text-green`}>{e.category.title}</span>
                            </div>
                            <div className="w-full mt-auto">
                              <h2 className="text-2xl md:text-3xl xl:text-4xl leading-none md:leading-none lg:leading-none mb-3 pb-0 lg:w-8/12">{e.title}</h2>
                              <span className="text-sm md:text-sm lg:text-base leading-none md:leading-none lg:leading-none block">{da} {mo}, {ye}</span>
                            </div>

                            <div className={`w-[4vw] h-[4vw] max-w-[60px] max-h-[60px] hidden lg:flex absolute bottom-0 right-0 transition-colors ease-ak duration-[400ms] lg:group-hover:bg-yellow lg:group-hover:text-green ${color} p-[10px] flex items-center justify-center rounded-full`}>
                              <ArrowIcon className="w-full" />
                            </div>
                          </div>
                        </Link>
                      </li>
                    )
                  })}
                </ul>

                {/* <Container>
                  <MouseParallax lerpEase={0.5} strength={-0.017} enableOnTouchDevice={false}>
                    <div className="w-full flex justify-center mb-[20vw] lg:mb-[10vw]">
                      <button className="w-[140px] xl:w-[180px] aspect-square bg-green text-yellow rounded-full flex items-center justify-center transition-translate ease-ak duration-[500ms] hover:scale-[1.2] relative overflow-hidden group outline-none border-none">
                        <div className="absolute inset-0 bg-orange transition-transform ease-ak duration-[500ms] translate-y-full group-hover:translate-y-0 group-hover:rotate-[-80deg] group-hover:scale-[1.3] rounded-[50%]"></div>
                        <div className="w-full text-center -mt-3 lg:-mt-5 relative z-1">
                          <SunnyNoRaysIcon className="w-[25px] lg:w-[33px] mx-auto mb-1 lg:mb-2 transition-transform ease-ak duration-[500ms] group-hover:rotate-[360deg]" />
                          <span className="block font-display text-3xl xl:text-4xl leading-none lg:leading-none">Load More</span>
                        </div>
                      </button>
                    </div>
                  </MouseParallax>
                </Container> */}

              </div>
              
              {!(journalCap > 10) && (
                <Container className="mb-[7.5vw]">
                  <MouseParallax lerpEase={0.5} strength={-0.017} enableOnTouchDevice={false}>
                    <div className="w-full flex justify-center mb-[0vw] lg:mb-[3vw]">
                      <button onClick={()=>setJournalCap(100)} className="w-[140px] xl:w-[180px] aspect-square bg-green text-yellow rounded-full flex items-center justify-center transition-translate ease-ak duration-[500ms] hover:scale-[1.2] relative overflow-hidden group outline-none border-none">
                        <div className="absolute inset-0 bg-orange transition-transform ease-ak duration-[500ms] translate-y-full group-hover:translate-y-0 group-hover:rotate-[-80deg] group-hover:scale-[1.3] rounded-[50%]"></div>
                        <div className="w-full text-center -mt-3 lg:-mt-5 relative z-1">
                          <SunnyNoRaysIcon className="w-[33px] lg:w-[45px] mx-auto mb-0 transition-transform ease-ak duration-[500ms] group-hover:rotate-[360deg]" />
                          <span className="block font-display text-3xl xl:text-4xl leading-none lg:leading-none">Load More</span>
                        </div>
                      </button>
                    </div>
                  </MouseParallax>
                </Container>
              )}
            </m.article>
          </m.main>
        
          <m.div variants={fade}>
            <div className="overflow-hidden">
              <Footer image={journalLanding.footerImage} />
            </div>
          </m.div>
        </m.div>
      </LazyMotion>
    </Layout>
  )
}

export async function getStaticProps(context) {
  const props = await pageService.fetchQuery(context)
  return { 
    props: props
  };
}