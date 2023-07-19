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
import { useContext, useEffect } from 'react'

const pageService = new SanityPageService(journalLandingQuery)

export default function Journal(initialData) {
  const { data: { journalLanding }  } = pageService.getPreviewHook(initialData)()
  let colors = ['bg-orange text-off-white', 'bg-blue text-off-white', 'bg-green text-off-white']
  const [introContext, setIntroContext] = useContext(IntroContext);

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
                  <div className="flex flex-wrap justify-center pt-[100px] pb-[15vw] lg:pt-[12.5vw] lg:pb-[10vw]">
                    <span className="font-mono text-center uppercase tracking-widest block w-[110px] lg:w-[160px] mx-auto text-[53px] mb-4 lg:mb-8 relative">
                      <m.div variants={revealLtr} className="bg-off-white absolute inset-0"></m.div>
                      <svg className="w-full" viewBox="0 0 500 140">
                        <path id="curve" d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97" fill="transparent" />
                        <text>
                          <textPath className="font-sans font-bold" href="#curve">
                            The Journal
                          </textPath>
                        </text>
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

                <ul className="mb-[20vw] lg:mb-[10vw] w-full">
                  {journalLanding.journals.slice(2).map((e, i) => {
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

                          <div className="w-[35%] lg:w-[20%] relative z-10 hidden lg:block">
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