import Layout from '@/components/layout'
import Footer from '@/components/footer'
import Container from '@/components/container'
import { fade, reveal, revealLtr, revealTtb, scale } from '@/helpers/transitions'
import { LazyMotion, domMax, m, useScroll, useTransform } from 'framer-motion'
import { NextSeo } from 'next-seo'
import SunnyNoRaysIcon from "@/icons/sunny-no-rays.svg";
import SunnyIcon from "@/icons/sunny.svg";
import SquiggleTeamIcon from "@/icons/squiggle-team.svg";
import ArrowIcon from "@/icons/arrow.svg";
import ImageScale from '@/components/image-scale'
import Link from 'next/link'
import { MouseParallax } from 'react-just-parallax'
import { useContext, useEffect, useRef, useState } from 'react'
import { SplitTextHover } from '@/components/splitTextHover'
import SanityPageService from '@/services/sanityPageService'
import { teamQuery } from '@/helpers/queries'
import PortableText from "react-portable-text"
import SanityImageScale from '@/components/sanity-image-scale'
import { IntroContext } from '@/context/intro'

const pageService = new SanityPageService(teamQuery)

export default function Team(initialData) {
  const { data: { team }  } = pageService.getPreviewHook(initialData)()
  const [introContext, setIntroContext] = useContext(IntroContext);

  // const [currentImage, setCurrentImage] = useState(0);
  const scrollerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: scrollerRef,
    offset: ["-70%", "30%"]
  })

  const { scrollY } = useScroll()
  
  const rotate = useTransform(scrollY, [0, 1000], ['-20deg', '360deg'], { clamp: false })
  const moveY = useTransform(scrollYProgress,[0, 1],['0%', '-100%'],{ clamp: true })

  const draw = {
    initial: { pathLength: 0 },
    enter: { pathLength: 1, transition: { delay: 0.2, duration: 1, ease: [0.71,0,0.17,1] }},
  };

  useEffect(() => {
    setIntroContext(true)
  }, [setIntroContext]);
  
  // function nextImage() {
  //   setCurrentImage(currentImage == 2 ? 0 : currentImage + 1)
  // }

  // function prevImage() {
  //   setCurrentImage(currentImage == 0 ? 2 : currentImage - 1)
  // }
  
  return (
    <Layout>
      <NextSeo title={team.title} />

      <LazyMotion features={domMax}>
        <m.div
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <m.main className="pb-12 md:pb-16 xl:pb-24 pt-[70px] lg:pt-[95px] xl:pt-[103px]">
            <Container>
              <m.article variants={fade}>
                <div className="flex flex-wrap max-w-[1920px] mx-auto">
                  <div className="w-full lg:w-1/2 order-2 lg:order-1 relative mb-[30vw] lg:mb-0">
                    <div className="flex flex-wrap justify-center lg:pt-[7.5vw] h-full lg:px-5">
                      <div className="lg:w-[80%] lg:max-w-[720px] lg:translate-x-[-5%] xl:translate-x-[-10%] relative z-10">
                        <span className="font-mono text-center uppercase tracking-[11.5px] block w-[110px] lg:w-[140px] text-[50px] mb-6 lg:mb-10 translate-x-[-8%] mx-auto lg:mx-0 relative">
                          <m.div variants={revealLtr} className="bg-off-white absolute inset-0"></m.div>
                          <svg className="w-full" viewBox="0 0 500 140">
                            <path id="curve" d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97" fill="transparent" />
                            <text>
                              <textPath className="font-sans font-bold" href="#curve">
                                Our People
                              </textPath>
                            </text>
                          </svg>
                        </span>

                        <div className="relative w-auto mb-5 lg:mb-10">
                          <h1 className="text-[15vw] lg:text-[9.8vw] xl:text-[9vw] 2xl:text-[150px] leading-[1] lg:leading-[0.85] xl:leading-[0.85] 2xl:leading-[0.85] mb-0 pb-0 block text-center lg:text-left">
                            <span className="block relative overflow-hidden">
                              <m.span variants={reveal} className="block">
                                <span className="block translate-y-[-10%]">
                                  It’s a team
                                </span>
                              </m.span>
                            </span>
                            <span className="block relative overflow-hidden">
                              <m.span variants={reveal} className="block">
                                <span className="block translate-y-[-35%] lg:translate-y-[-25%]">
                                  game.
                                </span>
                              </m.span>
                            </span>
                          </h1>
                        </div>

                        {team.heroText && (
                          <div className="w-[95%] lg:w-[90%] content text-base/[1.28] lg:text-lg/[1.28] xl:text-xl/[1.28] max-w-[800px] text-center lg:text-left relative">
                            <m.div variants={revealTtb} className="absolute inset-0 bg-gradient-to-b from-off-white via-off-white to-transparent via-[70%]"></m.div>
                            <p>{team.heroText}</p>
                          </div>
                        )}
                      </div>

                      {/* <SquiggleTeamIcon className="w-[70%] absolute left-0 bottom-[-40vw] lg:bottom-[-10vw] xl:bottom-[-5vw] 2xl:bottom-[0] -translate-x-5 z-10" /> */}

                      <m.svg className="w-[70%] absolute left-0 bottom-[-40vw] lg:bottom-[-10vw] xl:bottom-[-5vw] 2xl:bottom-[0] -translate-x-5 z-10" viewBox="0 0 750 316" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <m.path variants={draw} d="M11.8027 76.8723C36.5866 63.368 59.6574 47.1272 83.6404 32.4438C97.9678 24.1231 123.619 7.37066 140.327 11.7312C158.526 17.4043 155.011 50.976 153.743 65.9932C152.319 79.8534 151.14 93.7582 150.739 107.73C149.849 140.701 152.564 187.977 192.164 197.432C225.781 204.841 265.092 188.489 295.46 175.274C346.897 151.736 394.885 121.813 441.872 90.7993C453.53 83.2574 466.055 76.7388 478.647 70.7542C578.828 23.7449 678.987 26.9486 717.275 144.817C734.362 197.699 736.52 254.141 735.029 309.316" stroke="black" stroke-width="3"/>
                      </m.svg>

                    </div>
                  </div>

                  <div className="w-full lg:w-1/2 mb-16 lg:mb-0 relative order-1 lg:order-2">
                    <m.div variants={scale} transition={{ delay: 0.25, duration: 0.6, ease: [0.71,0,0.17,1] }} className="absolute bottom-[-55px] left-5 lg:bottom-auto lg:top-[10%] lg:left-[-10%] z-10">
                      <div className="animate-spin-slower">
                        <m.div style={{ rotateZ: rotate }} className="w-[115px] xl:w-[170px] rotate-12 aspect-square rounded-full bg-yellow text-green p-3">
                          <SunnyIcon className="w-[100%] aspect-square" />
                        </m.div>
                      </div>
                    </m.div>
                    <div className="w-full relative overflow-hidden rounded-xl">
                      <div className="aspect-[10/9] lg:aspect-[10/11]">
                        <SanityImageScale p invert heroOffset fill sizes="(max-width: 1024px) 100vw, 65vw" image={team.heroImage} />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap justify-center pt-[20vw] lg:pt-[7.8vw] pb-[7vw] lg:pb-[3.5vw]">
                  {team.quoteTitle && (
                    <span className="block mb-8 overflow-hidden relative w-full text-center">
                      <m.span variants={reveal} className="block text-base leading-[1.25] lg:text-xl lg:leading-[1.25]">{team.quoteTitle}</m.span>
                    </span>
                  )}
                  {team.quoteText && (
                    <span className="font-display block w-full md:w-[90%] lg:w-[85%] text-center text-[8vw] md:text-[6vw] lg:text-[4.2vw] leading-[1] md:leading-[0.9] lg:leading-[0.9] mb-10 lg:mb-16">We&rsquo;re a friendly, forward-thinking collective — an approachable <em>team</em> with a can-do attitude.</span>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-[20vw] lg:mb-[15vw] px-[10vw] lg:px-[8vw] gap-[12vw] lg:gap-[5vw] lg:gap-y-[6vw]">
                  {team.teamMembers.map((e, i) => {
                    let rotation = 'group-hover:rotate-[-3deg]'
                    let bgRotation = 'group-hover:rotate-[3deg]'
                    
                    if ((i + 1) % 1 == 0) {
                      rotation = 'lg:group-hover:rotate-[-3deg]'
                      bgRotation = 'lg:group-hover:rotate-[3deg]'
                    }

                    if ((i + 1) % 2 == 0) {
                      rotation = 'lg:group-hover:rotate-[3deg]'
                      bgRotation = 'lg:group-hover:rotate-[-3deg]'
                    }
                    return (
                      <div className="w-full lg:col-span-1 group relative" key={i}>
                        <div className={`absolute inset-0 bg-yellow z-[8] h-[77%] transition-transition ease-ak duration-[750ms] rounded-2xl delay-[100ms] lg:group-hover:delay-[0ms] ${bgRotation}`}></div>
                        
                        <div className={`w-full relative overflow-hidden rounded-xl mb-4 lg:mb-6 transition-transform ease-ak duration-[750ms] z-[9]`}>
                          <div className="absolute inset-0 bg-orange z-[9] lg:translate-y-[150%] lg:group-hover:translate-y-0 transition-transition ease-ak duration-[750ms] rounded-full scale-[1.8] delay-[100ms] lg:group-hover:rotate-45 lg:group-hover:delay-[0ms] hidden lg:block"></div>

                          <div className="absolute inset-0 text-yellow z-[10] p-8 items-center justify-center text-center opacity-0 lg:group-hover:opacity-100 transition-opacity ease-ak duration-[600ms] rounded-full hidden lg:flex">

                            <div className="w-full">
                              <div className="w-[33px] lg:w-[55px] mx-auto mb-0">
                                <SunnyNoRaysIcon className="w-full aspect-square mb-2 transition-transform ease-ak duration-[650ms] scale-0 lg:group-hover:scale-[1] lg:group-hover:rotate-[360deg]" />
                              </div>

                              {e.bio && (
                                <span className="font-display text-[5.2vw] md:text-[2.8vw] lg:text-[1.6vw] leading-[1.2] lg:leading-[1.2] flex flex-wrap overflow-hidden justify-center">
                                  “
                                  <SplitTextHover>
                                    {e.bio}
                                  </SplitTextHover>
                                  ”
                                </span>
                              )}
                            </div>
                          </div>
                          <div className="scale-[1] lg:group-hover:scale-[1.18] transition-all ease-ak duration-[850ms]">
                            <div className="aspect-[10/14]">
                              {e.image ? (
                              <SanityImageScale fill sizes="(max-width: 1024px) 100vw, 33vw" image={e.image} />
                              ) : (
                                <div className="w-full h-full inset-0 absolute bg-green"></div>
                              )}
                            </div>
                          </div>
                        </div>
                        
                        {e.role && (
                          <span className="block text-base leading-none lg:text-lg lg:leading-none w-full text-center mb-1 lg:mb-2">{e.role}</span>
                        )}

                        {e.name && (
                          <span className="font-display block w-full text-center text-[8.2vw] md:text-[5vw] lg:text-[3.2vw] xl:text-[2.8vw] leading-[0.9] md:leading-[0.9] lg:leading-[0.9] xl:leading-[0.9]">{e.name}</span>
                        )}
                      </div>
                    )
                  })}
                </div>
              </m.article>
            </Container>

            <div className="bg-green text-off-white flex flex-wrap mb-[20vw] lg:mb-[10vw]" ref={scrollerRef}>
              <div className="w-full lg:w-[48%] relative">
                <div className="w-full relative overflow-hidden">
                  <div className={`w-full relative overflow-hidden aspect-[10/13]`}>
                    <div className="opacity-0">
                      <SanityImageScale fill sizes="(max-width: 1024px) 100vw, 50vw" image={team.pulloutSectionImages[0]} />
                    </div>
                  </div>

                  <m.div className={`w-full absolute inset-0 z-[10]`} style={{y: moveY }}>
                    {team.pulloutSectionImages.map((e, i) => {
                      return (
                        <div className="w-full relative overflow-hidden aspect-[10/13]" key={i}>
                          <div className={`transition-transform ease-ak duration-[800ms]`}>
                            <SanityImageScale fill sizes="(max-width: 1024px) 100vw, 70vw" image={e} />
                          </div>
                        </div>
                      )
                    })}
                    {/* <div className="w-full relative overflow-hidden aspect-[10/13]">
                      <div className={`transition-transform ease-ak duration-[800ms]`}>
                        <ImageScale image="/images/team-cara-4.jpg" w={1105} h={1501} />
                      </div>
                    </div> */}
                    {/* <div className="w-full relative overflow-hidden aspect-[10/13]">
                      <div className={`transition-transform ease-ak duration-[800ms] ${currentImage == 3 ? 'scale-1' : 'scale-[1.3]' }`}>
                        <ImageScale image="/images/team-cara-4.jpg" w={1105} h={1501} />
                      </div>
                    </div> */}
                  </m.div>
                </div>
              </div>
              <div className="w-full lg:w-[52%] relative p-3 lg:p-5 flex flex-col">
                {team.pulloutSectionHeading && (
                  <h1 className="text-[15vw] lg:text-[9vw] leading-[0.82] lg:leading-[0.82] text-yellow w-[85%] md:w-[85%] lg:w-[90%] mb-[25vw] lg:mb-0">{team.pulloutSectionHeading}</h1>
                )}

                <div className="w-full lg:w-10/12 mt-auto max-w-[800px]">
                  <div className="content text-base/[1.28] xl:text-lg/[1.28] lg:mb-0">
                    <PortableText className="content" content={team.pulloutSectionText} />
                  </div>

                  {/* <div className="flex space-x-3">
                    <button onClick={prevImage} className={`w-[50px] xl:w-[60px] h-[50px] xl:h-[60px] transition-colors ease-ak duration-[350ms] text-blue p-[10px] flex items-center justify-center rounded-full border border-blue relative overflow-hidden outline-none hover:outline-none focus:outline-none group`}>
                      <div className="absolute z-[10] inset-0 transition-transform ease-ak duration-[400ms] bg-yellow text-green translate-x-[100%] group-hover:translate-x-0 flex items-center justify-center p-[10px]">
                        <ArrowIcon className="w-full rotate-180" />
                      </div>
                      <ArrowIcon className="w-full rotate-180 transition-translate ease-ak duration-[400ms] group-hover:translate-x-[-150%]" />
                    </button>

                    <button onClick={nextImage} className={`w-[50px] xl:w-[60px] h-[50px] xl:h-[60px] transition-colors ease-ak duration-[350ms] text-blue p-[10px] flex items-center justify-center rounded-full border border-blue relative overflow-hidden outline-none hover:outline-none focus:outline-none group`}>
                      <div className="absolute z-[10] inset-0 transition-transform ease-ak duration-[400ms] bg-yellow text-green translate-x-[-100%] group-hover:translate-x-0 flex items-center justify-center p-[10px]">
                        <ArrowIcon className="w-full" />
                      </div>

                      <ArrowIcon className="w-full transition-translate ease-ak duration-[400ms] group-hover:translate-x-[150%]" />
                    </button>
                  </div> */}
                </div>
              </div>
            </div>

            <Container>
              <div className="flex flex-wrap justify-center pb-[0vw] lg:pb-[4.25vw]">
                {team.footerCtaTitle && (
                  <span className="block mb-8 overflow-hidden relative w-full text-center">
                    <m.span variants={reveal} className="block text-base leading-[1.25] lg:text-xl lg:leading-[1.25]">{team.footerCtaTitle}</m.span>
                  </span>
                )}

                {team.footerCtaText && (
                    <span className="font-display block w-full md:w-[90%] lg:w-[85%] text-center text-[8vw] md:text-[6vw] lg:text-[4.2vw] leading-[1] md:leading-[0.9] lg:leading-[0.9] mb-10 lg:mb-16"><PortableText content={team.footerCtaText} /></span>
                  )}

                <MouseParallax lerpEase={0.5} strength={-0.017} enableOnTouchDevice={false}>
                  <div className="w-full flex justify-center">
                    <Link scroll={false} href="/contact" className="w-[140px] xl:w-[180px] aspect-square bg-green text-yellow rounded-full flex items-center justify-center transition-translate ease-ak duration-[500ms] hover:scale-[1.2] relative overflow-hidden group">
                      <div className="absolute inset-0 bg-orange transition-transform ease-ak duration-[500ms] translate-y-full group-hover:translate-y-0 group-hover:rotate-[-80deg] group-hover:scale-[1.3] rounded-[50%]"></div>
                      <div className="w-full text-center -mt-3 lg:-mt-5 relative z-1">
                        <SunnyNoRaysIcon className="w-[33px] lg:w-[45px] mx-auto mb-0 transition-transform ease-ak duration-[500ms] group-hover:rotate-[360deg]" />
                        <span className="block font-display text-3xl xl:text-4xl leading-none lg:leading-none">Let&rsquo;s Talk!</span>
                      </div>
                    </Link>
                  </div>
                </MouseParallax>
              </div>
            </Container>
          </m.main>
        
          <m.div variants={fade}>
            <div className="overflow-hidden pt-[12vw] lg:pt-[5vw]">
              <Footer />
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