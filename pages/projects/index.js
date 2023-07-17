import Layout from '@/components/layout'
import Footer from '@/components/footer'
import Container from '@/components/container'
import { fade, reveal, revealLtr, revealTtb, scale } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m, useScroll, useTransform } from 'framer-motion'
import { NextSeo } from 'next-seo'
import SunnyNoRaysIcon from "@/icons/sunny-no-rays.svg";
import SunnyIcon from "@/icons/sunny.svg";
import ImageScale from '@/components/image-scale'
import Link from 'next/link'
import { MouseParallax } from 'react-just-parallax'
import { projectsLandingQuery } from '@/helpers/queries'
import SanityPageService from '@/services/sanityPageService'
import PortableText from "react-portable-text"
import SanityImageScale from '@/components/sanity-image-scale'
import { useContext, useEffect, useRef } from 'react'
import { IntroContext } from '@/context/intro'

const pageService = new SanityPageService(projectsLandingQuery)

export default function Projects(initialData) {
  const { data: { projectsLanding }  } = pageService.getPreviewHook(initialData)()
  let colors = ['border-orange bg-orange text-yellow', 'border-yellow bg-yellow text-orange', 'border-blue bg-blue text-green', 'border-green bg-green text-blue']
  const [introContext, setIntroContext] = useContext(IntroContext);

  const ref = useRef(null)
  const parallaxRef = useRef(null)
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  
  const rotateBadge = useTransform(scrollYProgress,[0, 0.5],[-180, 360],{ clamp: true })

  useEffect(() => {
    setIntroContext(true)
  });

  return (
    <Layout>
      <NextSeo title={projectsLanding.title} />

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
                  <div className="flex flex-wrap justify-center pt-[100px] pb-[25vw] lg:pt-[12.5vw] lg:pb-[10vw]">
                    <span className="font-mono text-center uppercase tracking-widest block w-[110px] lg:w-[160px] mx-auto text-[47px] mb-3 lg:mb-6 relative">
                      <m.div variants={revealLtr} className="bg-off-white absolute inset-0"></m.div>
                      <svg className="w-full" viewBox="0 0 500 140">
                        <path id="curve" d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97" fill="transparent" />
                        <text>
                          <textPath href="#curve">
                            Our Projects
                          </textPath>
                        </text>
                      </svg>
                    </span>

                    <div className="relative overflow-hidden w-full mb-6 lg:mb-8">
                      <m.h1 variants={reveal} className="text-[15vw] lg:text-[10vw] xl:text-[9vw] 2xl:text-[10vw] leading-[1] lg:leading-[1.1] xl:leading-[1.1] 2xl:leading-[1.1] text-center mb-0 pb-0 hero--projects">
                        <div className="translate-y-[-5%]">
                          <PortableText content={projectsLanding.heroHeading} />
                        </div>
                      </m.h1>
                    </div>

                    <div className="w-[95%] lg:w-[60%] content text-base/[1.28] lg:text-lg/[1.28] xl:text-xl/[1.28] text-center mx-auto max-w-[800px] relative">
                      <m.div variants={revealTtb} className="absolute inset-0 bg-gradient-to-b from-off-white via-off-white to-transparent via-[70%]"></m.div>
                      <p>{projectsLanding.heroText}</p>
                    </div>
                  </div>

                  <ul className="grid grid-cols-2 lg:px-[6vw] gap-[12vw] lg:gap-[5vw] lg:gap-y-[6.5vw] mb-[10vw] lg:mb-[3vw] relative">
                    <m.div variants={scale} transition={{ delay: 0.25, duration: 0.6, ease: [0.71,0,0.17,1] }} className="absolute top-[-50px] lg:top-[-70px] left-[10%] lg:left-[9%] z-[20]">
                      <m.div style={{ rotateZ: rotateBadge }} className="w-[120px] xl:w-[170px] p-3 z-[20] bg-orange text-yellow rounded-full">                      
                        <SunnyIcon className="w-full aspect-square" />
                      </m.div>
                    </m.div>
                    {projectsLanding.projects.map((e, i) => {
                      let color = colors[colors.length * Math.random() | 0]

                      return (
                        <li className="col-span-2 lg:col-span-1" key={i}>
                          <Link scroll={false} href={`/projects/${e.slug.current}`} className="group">
                            <div className="relative overflow-hidden mb-4 lg:mb-6 rounded-2xl">
                              <div className={`absolute pointer-events-none inset-0 z-10 rounded-2xl border-[0vw] lg:group-hover:border-[1vw] transition-all ease-ak duration-[500ms] ${color}`} style={{ background: 'transparent'}}></div>

                              <div className="absolute inset-0 z-10 items-center justify-center hidden lg:flex lg:group-hover:scale-[1] scale-0 transition-transform ease-ak duration-[400ms]">
                                <div className={`w-[140px] xl:w-[180px] aspect-square rounded-full flex items-center justify-center ${color} scale-[0] lg:group-hover:scale-[1] transition-transform ease-ak duration-[500ms]`}>
                                  <div className={`w-full text-center -mt-3 lg:-mt-5`}>
                                    <SunnyNoRaysIcon className="w-[25px] lg:w-[33px] mx-auto mb-1 lg:mb-2" />
                                    <span className="block font-display text-3xl xl:text-4xl leading-none lg:leading-none">See More!</span>
                                  </div>
                                </div>
                              </div>

                              <div className="relative overflow-hidden">
                                <div className="lg:group-hover:scale-[1.1] transition-transform ease-ak duration-[500ms]">
                                  <div className="aspect-[15/10]">
                                    { (e.teaserImage || e.heroImage) ? (
                                      <SanityImageScale fill sizes="(max-width: 1024px) 100vw, 65vw" image={e.teaserImage ? e.teaserImage : e.heroImage} />
                                    ) : (
                                      <div className="w-full h-full absolute inset-0 bg-green"></div>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>

                            {e.location && (
                              <span className="block relative overflow-hidden">
                                <m.span variants={reveal} className="block text-base leading-[1.25] lg:text-xl lg:leading-[1.25] w-full text-center">{e.location}</m.span>
                              </span>
                            )}

                            <span className="block relative overflow-hidden mb-2">
                              <m.span variants={reveal} className="font-display block w-full text-center text-[8.2vw] md:text-[5vw] lg:text-[3.2vw] xl:text-[2.8vw] leading-[1.2] md:leading-[1.2] lg:leading-[1.2] xl:leading-[1.2]">{e.title}</m.span>
                            </span>
                          </Link>
                        </li>
                      )
                    })}
                  </ul>

                  <div className="flex flex-wrap justify-center pt-[15vw] lg:pt-[10vw] mb-[17vw] lg:mb-[10vw]">
                    {projectsLanding.footerCtaTitle && (
                      <span className="block mb-8 overflow-hidden relative w-full text-center">
                        <m.span variants={reveal} className="block text-base leading-none lg:text-xl lg:leading-none">{projectsLanding.footerCtaTitle}</m.span>
                      </span>
                    )}

                    {projectsLanding.footerCtaText && (
                      <span className="font-display block w-full md:w-[90%] lg:w-[85%] text-center text-[8vw] md:text-[6vw] lg:text-[4.2vw] leading-[1] md:leading-[0.9] lg:leading-[0.9] mb-10 lg:mb-16">
                        <PortableText content={projectsLanding.footerCtaText} />
                      </span>
                    )}
                    
                    <MouseParallax lerpEase={0.5} strength={-0.017} enableOnTouchDevice={false}>
                      <div className="w-full flex justify-center">
                        <Link scroll={false} href="/contact" className="w-[140px] xl:w-[180px] aspect-square bg-green text-yellow rounded-full flex items-center justify-center transition-translate ease-ak duration-[500ms] hover:scale-[1.2] relative overflow-hidden group">
                          <div className="absolute inset-0 bg-orange transition-transform ease-ak duration-[500ms] translate-y-full group-hover:translate-y-0 group-hover:rotate-[-80deg] group-hover:scale-[1.3] rounded-[50%]"></div>
                          <div className="w-full text-center -mt-3 lg:-mt-5 relative z-1">
                            <SunnyNoRaysIcon className="w-[25px] lg:w-[33px] mx-auto mb-1 lg:mb-2 transition-transform ease-ak duration-[500ms] group-hover:rotate-[360deg]" />
                            <span className="block font-display text-3xl xl:text-4xl leading-none lg:leading-none">Let&rsquo;s Talk!</span>
                          </div>
                        </Link>
                      </div>
                    </MouseParallax>
                  </div>
                </Container>

              </div>
            </m.article>
          </m.main>
        
          <m.div variants={fade}>
            <div className="overflow-hidden bg-off-white z-[20] relative pt-[10vw] lg:pt-[5vw]">
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