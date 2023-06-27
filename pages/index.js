import Layout from '@/components/layout'
import Footer from '@/components/footer'
import Container from '@/components/container'
import { fade, reveal, scale } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m, useScroll, useTransform} from 'framer-motion'
import { NextSeo } from 'next-seo'
import LogoIcon from "@/icons/logo.svg";
import BadgeIcon from "@/icons/badge.svg";
import SunnyNoRaysIcon from "@/icons/sunny-no-rays.svg";
import { useRef } from 'react'
import ImageScale from '@/components/image-scale'
import { MouseParallax } from 'react-just-parallax'
import { homeQuery } from '@/helpers/queries'
import SanityPageService from '@/services/sanityPageService'
import PortableText from "react-portable-text"
import Link from 'next/link'

const pageService = new SanityPageService(homeQuery)

export default function Home(initialData) {
  const { data: { home }  } = pageService.getPreviewHook(initialData)()

  const ref = useRef(null)
  const parallaxRef = useRef(null)
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  
  const rotateBadge = useTransform(scrollYProgress,[0, 1],[-360, 360],{ clamp: true })
  const lerpBadge = useTransform(scrollYProgress,[0, 1],[150, -150],{ clamp: true })
  
  return (
    <Layout>
      <NextSeo title={home.title} />

      <LazyMotion features={domAnimation}>
        <m.div
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <m.main className="pb-12 md:pb-16 xl:pb-24 pt-[90px] xl:pt-[99px]">           
            <m.article variants={fade}>
              <Container>
                <div className="w-full mb-6 overflow-hidden">
                  <m.div variants={reveal}>
                    <LogoIcon className="w-full" />
                  </m.div>
                </div>

                <div className="flex flex-wrap items-end mb-[20vw] lg:mb-[10.5vw] max-w-[1920px]" ref={ref}>
                  <div className="w-full lg:w-1/2 mb-3 lg:mb-0 relative">
                    <div className="w-full relative overflow-hidden rounded-xl">
                      <ImageScale image="/images/home.jpg" w={767} h={688} p />
                    </div>
            
                    <m.div style={{ rotateZ: rotateBadge, y: lerpBadge }} className="absolute top-auto bottom-0 lg:bottom-auto lg:top-[-12%] left-0 lg:left-auto lg:right-[-15%] w-[33%] max-w-[220px] will-change-transform">
                      <BadgeIcon className="w-full" />
                    </m.div>
                  </div>
                  {home.heroText && (
                    <div className="w-full lg:w-1/2">
                      <div className="w-11/12 content text-lg/[1.28] 2xl:text-xl/[1.28] lg:px-5">
                        <p>{home.heroText}</p>
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex flex-wrap justify-center mb-[20vw] lg:mb-[10.5vw]">
                  {home.quoteTitle && (
                    <span className="block mb-8 overflow-hidden relative w-full text-center">
                      <m.span variants={reveal} className="block text-lg leading-none lg:text-xl lg:leading-none">{home.quoteTitle}</m.span>
                    </span>
                  )}
                  {home.quoteText && (
                  <span className="font-display block w-full md:w-[90%] lg:w-[85%] text-center text-[8vw] md:text-[6vw] lg:text-[4.2vw] leading-[0.9] md:leading-[0.9] lg:leading-[0.9]">
                    <PortableText content={home.quoteText} />
                  </span>
                  )}
                </div>
              </Container>


              <div className="bg-orange text-white flex flex-wrap mb-[20vw] lg:mb-[10.5vw]">
                <div className="w-full lg:w-[50%] mb-3 lg:mb-0 relative p-5 flex flex-col">
                  <h1 className="text-[16vw] lg:text-[9vw] leading-[0.82] lg:leading-[0.82] text-yellow w-[90%] md:w-[80%] lg:w-[95%] mb-[25vw] lg:mb-0">{home.pulloutSectionHeading}</h1>

                  <div className="w-full lg:w-10/12 text-base/[1.28] xl:text-lg/[1.28] mt-auto max-w-[800px]">
                    <PortableText className="content" content={home.pulloutSectionText} />
                  </div>
                </div>
                <div className="w-full lg:w-[50%] relative">
                  <div className="w-full relative overflow-hidden" ref={parallaxRef}>
                    <MouseParallax lerpEase={0.5} strength={-0.017} enableOnTouchDevice={false} isAbsolutelyPositioned={true} zIndex={10} >
                      <div className="absolute inset-0 z-10 flex items-center justify-center">
                        <Link href="/projects" className="w-[140px] xl:w-[180px] aspect-square bg-green text-yellow rounded-full flex items-center justify-center transition-translate ease-ak duration-[500ms] hover:scale-[1.2] relative overflow-hidden group">
                          <div className="absolute inset-0 bg-orange transition-transform ease-ak duration-[500ms] translate-y-full group-hover:translate-y-0 group-hover:rotate-[-80deg] group-hover:scale-[1.3] rounded-[50%]"></div>
                          <div className="w-full text-center -mt-3 lg:-mt-5 relative z-1">
                            <SunnyNoRaysIcon className="w-[25px] lg:w-[33px] mx-auto mb-1 lg:mb-2 transition-transform ease-ak duration-[500ms] group-hover:rotate-[360deg]" />
                            <span className="block font-display text-3xl xl:text-4xl leading-none lg:leading-none">See Work!</span>
                          </div>
                        </Link>
                      </div>
                    </MouseParallax>
                    <ImageScale image="/images/home-01.jpg" w={736} h={1001} />
                  </div>
                </div>
              </div>

              <Container>
                <div className="flex flex-wrap justify-center mb-[20vw] lg:mb-[10.5vw]">
                  {home.quote2Title && (
                    <span className="block mb-8 overflow-hidden relative w-full text-center">
                      <m.span variants={reveal} className="block text-lg leading-[1.2] lg:text-xl lg:leading-[1.2]">{home.quote2Title}</m.span>
                    </span>
                  )}
                  {home.quote2Text && (
                  <span className="font-display block w-full md:w-[90%] lg:w-[85%] text-center text-[8vw] md:text-[6vw] lg:text-[4.2vw] leading-[0.9] md:leading-[0.9] lg:leading-[0.9]">
                    <PortableText content={home.quote2Text} />
                  </span>
                  )}
                </div>

                <div className="flex flex-wrap mb-[10vw] lg:mb-[7.5vw] px-[10vw] lg:px-[8vw] lg:space-x-[5vw]">
                  <Link href="/mission" className="w-full lg:flex-1 mb-12 lg:mb-0 group">
                    <div className="w-full relative overflow-hidden rounded-xl mb-8">
                      <div className="transition-translate ease-ak duration-[500ms] group-hover:scale-[1.1]">
                        <ImageScale image="/images/home-02.jpg" w={736} h={1001} />
                      </div>
                    </div>

                    <span className="block text-lg leading-none lg:text-xl lg:leading-none w-full text-center mb-2">01</span>

                    <span className="font-display block w-full text-center text-[8.2vw] md:text-[5vw] lg:text-[3.2vw] xl:text-[2.8vw] leading-[0.9] md:leading-[0.9] lg:leading-[0.9] xl:leading-[0.9]">Our Mission</span>
                  </Link>

                  <Link href="/team" className="w-full lg:flex-1 mb-12 lg:mb-0 group">
                    <div className="w-full relative overflow-hidden rounded-xl mb-8">
                      <div className="transition-translate ease-ak duration-[500ms] group-hover:scale-[1.1]">
                        <ImageScale image="/images/home-03.jpg" w={736} h={1001} />
                      </div>
                    </div>

                    <span className="block text-lg leading-none lg:text-xl lg:leading-none w-full text-center mb-2">02</span>

                    <span className="font-display block w-full text-center text-[8.2vw] md:text-[5vw] lg:text-[3.2vw] xl:text-[2.8vw] leading-[0.9] md:leading-[0.9] lg:leading-[0.9] xl:leading-[0.9]">Our Team</span>
                  </Link>

                  <Link href="/projects" className="w-full lg:flex-1 mb-12 lg:mb-0 group">
                    <div className="w-full relative overflow-hidden rounded-xl mb-8">
                      <div className="transition-translate ease-ak duration-[500ms] group-hover:scale-[1.1]">
                        <ImageScale image="/images/home-04.jpg" w={736} h={1001} />
                      </div>
                    </div>

                    <span className="block text-lg leading-none lg:text-xl lg:leading-none w-full text-center mb-2">03</span>

                    <span className="font-display block w-full text-center text-[8.2vw] md:text-[5vw] lg:text-[3.2vw] xl:text-[2.8vw] leading-[0.9] md:leading-[0.9] lg:leading-[0.9] xl:leading-[0.9]">Our Work</span>
                  </Link>
                </div>
              </Container>            
            </m.article>
          </m.main>
        
          <m.div variants={fade}>
            <div className="overflow-hidden">
              <div className="w-full relative overflow-hidden">
                <ImageScale image="/images/footer-01.jpg" w={2400} h={1345} />
              </div>
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