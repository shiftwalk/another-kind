import Layout from '@/components/layout'
import Footer from '@/components/footer'
import Container from '@/components/container'
import { fade, reveal, revealNoTransition, scale } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m, useScroll, useTransform, useReducedMotion} from 'framer-motion'
import { NextSeo } from 'next-seo'
import LogoIcon from "@/icons/logo.svg";
import BadgeIcon from "@/icons/badge.svg";
import SunnyNoRaysIcon from "@/icons/sunny-no-rays.svg";
import { useContext, useEffect, useRef } from 'react'
import ImageScale from '@/components/image-scale'
import { MouseParallax } from 'react-just-parallax'
import { homeQuery } from '@/helpers/queries'
import SanityPageService from '@/services/sanityPageService'
import PortableText from "react-portable-text"
import Link from 'next/link'
import SanityImageScale from '@/components/sanity-image-scale'
import { IntroContext } from '@/context/intro'

const pageService = new SanityPageService(homeQuery)

export default function Home(initialData) {
  const { data: { home }  } = pageService.getPreviewHook(initialData)()
  const shouldReduceMotion = useReducedMotion()
  const [introContext, setIntroContext] = useContext(IntroContext);

  useEffect(() => {
    setTimeout(() => {
      setIntroContext(true)
    }, shouldReduceMotion ? 0 : 2800);
  });

  const ref = useRef(null)
  const parallaxRef = useRef(null)
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  
  const rotateBadge = useTransform(scrollYProgress,[0, 1],[-360, 360],{ clamp: true })
  const lerpBadge = useTransform(scrollYProgress,[0, 1],[100, -150],{ clamp: true })
  
  return (
    <Layout>
      <NextSeo title={home.title} />
      <LazyMotion features={domAnimation}>
        <m.div
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <m.main className="pb-6 md:pb-16 xl:pb-24 pt-[80px] lg:pt-[90px] xl:pt-[99px]">           
            <m.article variants={fade}>
              <Container>
                <div className="w-full mb-6 overflow-hidden">
                  <m.div variants={revealNoTransition} transition={{ delay: introContext ? 0.25 : 2.1, duration: 0.6, ease: [0.83, 0, 0.17, 1] }}>
                    <LogoIcon className="w-full" />
                  </m.div>
                </div>

                <div className="flex flex-wrap items-end mb-[20vw] lg:mb-[10.5vw] max-w-[1920px]" ref={ref}>
                  <div className="w-full lg:w-1/2 mb-[100px] lg:mb-0 relative">
                    <div className="w-full relative overflow-hidden rounded-xl aspect-[10/9]">
                      <SanityImageScale fill sizes="(max-width: 1024px) 100vw, 70vw" image={home.heroImage} p invert />
                    </div>
            
                    <m.div style={{ rotateZ: rotateBadge, y: lerpBadge }} className="absolute top-auto bottom-0 lg:bottom-auto lg:top-[-12%] left-0 lg:left-auto lg:right-[-15%] w-[33%] max-w-[220px] will-change-transform hidden lg:block">
                      <m.div variants={scale} transition={{ delay: introContext ? 0.25 : 2.1, duration: 0.6, ease: [0.83, 0, 0.17, 1] }}>
                        <div className="animate-spin-slower">
                          <BadgeIcon className="w-full" />
                        </div>
                      </m.div>
                    </m.div>

                    <m.div style={{ rotateZ: rotateBadge  }} className="absolute top-auto bottom-[-70px] lg:bottom-auto lg:top-[-12%] left-0 lg:left-auto lg:right-[-15%] w-[50%] max-w-[155px] will-change-transform block lg:hidden">
                      <div variants={scale} transition={{ delay: introContext ? 0 : 2.1, duration: 0.6, ease: [0.83, 0, 0.17, 1] }}>
                        <div className="animate-spin-slower">
                          <BadgeIcon className="w-full" />
                        </div>
                      </div>
                    </m.div>
                  </div>
                  {home.heroText && (
                    <div className="w-full lg:w-1/2">
                      <div className="w-[95%] lg:w-11/12 content text-base/[1.28] lg:text-lg/[1.28] 2xl:text-xl/[1.28] lg:px-5">
                        <p>{home.heroText}</p>
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex flex-wrap justify-center mb-[20vw] lg:mb-[10.5vw]">
                  {home.quoteTitle && (
                    <span className="block mb-8 overflow-hidden relative w-full text-center">
                      <m.span variants={reveal} className="block text-base leading-none lg:text-xl lg:leading-none">{home.quoteTitle}</m.span>
                    </span>
                  )}
                  {home.quoteText && (
                  <span className="font-display block w-full md:w-[90%] lg:w-[85%] text-center text-[8vw] md:text-[6vw] lg:text-[4.2vw] leading-[1] md:leading-[0.9] lg:leading-[0.9]">
                    <PortableText content={home.quoteText} />
                  </span>
                  )}
                </div>
              </Container>


              <div className="bg-orange text-white flex flex-wrap mb-[20vw] lg:mb-[10.5vw]">
                <div className="w-full lg:w-[50%] mb-0 lg:mb-0 relative p-3 lg:p-5 flex flex-col">
                  <h1 className="text-[15vw] lg:text-[9vw] leading-[0.82] lg:leading-[0.82] text-yellow w-[90%] md:w-[80%] lg:w-[95%] mb-[25vw] lg:mb-0">{home.pulloutSectionHeading}</h1>

                  <div className="w-full lg:w-10/12 text-base/[1.28] xl:text-lg/[1.28] mt-auto max-w-[800px]">
                    <PortableText className="content" content={home.pulloutSectionText} />
                  </div>
                </div>
                <div className="w-full lg:w-[50%] relative">
                  <div className="w-full relative overflow-hidden" ref={parallaxRef}>
                    <MouseParallax lerpEase={0.5} strength={-0.017} enableOnTouchDevice={false} isAbsolutelyPositioned={true} zIndex={10} >
                      <div className="absolute inset-0 z-10 flex items-center justify-center">
                        <Link scroll={false} href="/projects" className="w-[140px] xl:w-[180px] aspect-square bg-green text-yellow rounded-full flex items-center justify-center transition-translate ease-ak duration-[500ms] hover:scale-[1.2] relative overflow-hidden group">
                          <div className="absolute inset-0 bg-orange transition-transform ease-ak duration-[500ms] translate-y-full group-hover:translate-y-0 group-hover:rotate-[-80deg] group-hover:scale-[1.3] rounded-[50%]"></div>
                          <div className="w-full text-center -mt-3 lg:-mt-5 relative z-1">
                            <SunnyNoRaysIcon className="w-[33px] lg:w-[45px] mx-auto mb-0 transition-transform ease-ak duration-[500ms] group-hover:rotate-[360deg]" />
                            <span className="block font-display text-3xl xl:text-4xl leading-none lg:leading-none">See Work!</span>
                          </div>
                        </Link>
                      </div>
                    </MouseParallax>

                    <div className="w-full aspect-[10/13.5] relative">
                      <SanityImageScale fill sizes="(max-width: 1024px) 100vw, 50vw" image={home.pulloutSectionImage} />
                    </div>
                  </div>
                </div>
              </div>

              <Container>
                <div className="flex flex-wrap justify-center mb-[20vw] lg:mb-[10.5vw]">
                  {home.quote2Title && (
                    <span className="block mb-6 lg:mb-8 overflow-hidden relative w-full text-center">
                      <m.span variants={reveal} className="block text-base leading-[1.2] lg:text-xl lg:leading-[1.2]">{home.quote2Title}</m.span>
                    </span>
                  )}
                  {home.quote2Text && (
                  <span className="font-display block w-full md:w-[90%] lg:w-[85%] text-center text-[8vw] md:text-[6vw] lg:text-[4.2vw] leading-[1] md:leading-[0.9] lg:leading-[0.9]">
                    <PortableText content={home.quote2Text} />
                  </span>
                  )}
                </div>

                <div className="flex flex-wrap mb-[10vw] lg:mb-[7.5vw] px-[10vw] lg:px-[8vw] lg:space-x-[5vw]">
                  <Link scroll={false} href="/mission" className="w-full lg:flex-1 mb-12 lg:mb-0 group">
                    <div className="relative">
                      <div className={`absolute inset-0 bg-yellow z-[8] h-[100%] transition-transition ease-ak duration-[750ms] rounded-2xl delay-[100ms] lg:group-hover:delay-[0ms] group-hover:rotate-[3deg]`}></div>

                      <div className="w-full relative overflow-hidden rounded-xl mb-4 lg:mb-6 z-10">
                        <div className="transition-translate ease-ak duration-[750ms] group-hover:scale-[1.05]">
                          <div className="aspect-[10/13]">
                            <SanityImageScale fill sizes="(max-width: 1024px) 100vw, 50vw" image={home.missionImage} />
                          </div>
                        </div>
                      </div>
                    </div>

                    <span className="block text-base leading-none 2xl:text-xl 2xl:leading-none w-full text-center mb-2">01</span>

                    <span className="font-display block w-full text-center text-[8.2vw] md:text-[5vw] lg:text-[3.2vw] xl:text-[2.8vw] leading-[0.9] md:leading-[0.9] lg:leading-[0.9] xl:leading-[0.9]">Our Mission</span>
                  </Link>

                  <Link scroll={false} href="/team" className="w-full lg:flex-1 mb-12 lg:mb-0 group">
                    <div className="relative">
                      <div className={`absolute inset-0 bg-yellow z-[8] h-[100%] transition-transition ease-ak duration-[750ms] rounded-2xl delay-[100ms] lg:group-hover:delay-[0ms] group-hover:rotate-[-3deg]`}></div>

                      <div className="w-full relative overflow-hidden rounded-xl mb-4 lg:mb-6 z-10">
                        <div className="transition-translate ease-ak duration-[750ms] group-hover:scale-[1.05]">
                          <div className="aspect-[10/13]">
                            <SanityImageScale fill sizes="(max-width: 1024px) 100vw, 50vw" image={home.teamImage} />
                          </div>
                        </div>
                      </div>
                    </div>

                    <span className="block text-base leading-none 2xl:text-xl 2xl:leading-none w-full text-center mb-2">02</span>

                    <span className="font-display block w-full text-center text-[8.2vw] md:text-[5vw] lg:text-[3.2vw] xl:text-[2.8vw] leading-[0.9] md:leading-[0.9] lg:leading-[0.9] xl:leading-[0.9]">Our Team</span>
                  </Link>

                  <Link scroll={false} href="/projects" className="w-full lg:flex-1 mb-12 lg:mb-0 group">
                    <div className="relative">
                      <div className={`absolute inset-0 bg-yellow z-[8] h-[100%] transition-transition ease-ak duration-[750ms] rounded-2xl delay-[100ms] lg:group-hover:delay-[0ms] group-hover:rotate-[3deg]`}></div>

                        <div className="w-full relative overflow-hidden rounded-xl mb-4 lg:mb-6 z-10">
                        <div className="transition-translate ease-ak duration-[750ms] group-hover:scale-[1.05]">
                          <div className="aspect-[10/13]">
                            <SanityImageScale fill sizes="(max-width: 1024px) 100vw, 33vw" image={home.workImage} />
                          </div>
                        </div>
                      </div>
                    </div>

                    <span className="block text-base leading-none 2xl:text-xl 2xl:leading-none w-full text-center mb-2">03</span>

                    <span className="font-display block w-full text-center text-[8.2vw] md:text-[5vw] lg:text-[3.2vw] xl:text-[2.8vw] leading-[0.9] md:leading-[0.9] lg:leading-[0.9] xl:leading-[0.9]">Our Work</span>
                  </Link>
                </div>
              </Container>            
            </m.article>
          </m.main>
        
          <m.div variants={fade}>
            <div className="overflow-hidden">
              <Footer image={home.footerImage} />
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