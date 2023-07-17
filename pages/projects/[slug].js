import Layout from '@/components/layout'
import Footer from '@/components/footer'
import Container from '@/components/container'
import { fade, reveal } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import SunnyNoRaysIcon from "@/icons/sunny-no-rays.svg";
import HeroProject from '@/components/hero-project'
import ImageScale from '@/components/image-scale'
import Link from 'next/link'
import { MouseParallax } from 'react-just-parallax'
import SanityPageService from '@/services/sanityPageService'
import { projectQuery } from '@/helpers/queries'
import PortableText from 'react-portable-text'
import BodyRenderer from '@/components/body-renderer'
import { useContext, useEffect } from 'react'
import { IntroContext } from '@/context/intro'

const pageService = new SanityPageService(projectQuery)

export default function ProjectSlug(initialData) {
  const { data: { project }  } = pageService.getPreviewHook(initialData)()
  const [introContext, setIntroContext] = useContext(IntroContext);

  useEffect(() => {
    setIntroContext(true)
  });

  return (
    <Layout>
      <NextSeo title={project.title} />

      <LazyMotion features={domAnimation}>
        <m.div
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <m.main className="">
            <m.article variants={fade}>
              <HeroProject heading={project.title} image={project.heroImage} />

              <div className="relative bg-off-white mt-[100dvh] z-10">
                <Container>
                  {project.overview && (
                    <div className="flex flex-wrap justify-center pt-[17vw] lg:pt-[10.5vw]">
                      <span className="block mb-8 overflow-hidden relative w-full text-center">
                        <m.span variants={reveal} className="block text-sm leading-none lg:text-xl lg:leading-none">Overview</m.span>
                      </span>

                      <span className="font-display block w-full md:w-[95%] lg:w-[95%] text-center text-[8vw] md:text-[6vw] lg:text-[4.2vw] leading-[1] md:leading-[0.9] lg:leading-[0.9] mb-10 lg:mb-16"><PortableText content={project.overview} /></span>
                    </div>
                  )}

                  <div className="w-full mb-5 lg:flex lg:space-x-[4vw] pt-[12vw] lg:pt-[8.5vw]">
                    {project.location && (
                      <div className="mb-5 lg:mb-0">
                        <span className="block text-base leading-[1.2] lg:text-xl lg:leading-[1.2] mb-[2px] font-medium">Location</span>
                        <span className="block text-base leading-[1.2] lg:text-xl lg:leading-[1.2]">{project.location}</span>
                      </div>
                    )}
                    {project.type && (
                      <div className="mb-5 lg:mb-0">
                        <span className="block text-base leading-[1.2] lg:text-xl lg:leading-[1.2] mb-[2px] font-medium">Type</span>
                        <span className="block text-base leading-[1.2] lg:text-xl lg:leading-[1.2]">{project.type}</span>
                      </div>
                    )}
                    {(project.services && !project.servicess) && (
                      <div className="mb-5 lg:mb-0">
                        <span className="block text-base leading-[1.2] lg:text-xl lg:leading-[1.2] mb-[2px] font-medium">Services</span>
                        <span className="block text-base leading-[1.2] lg:text-xl lg:leading-[1.2]">
                          <div className="relative flex overflow-x-hidden w-2/3 max-w-[320px] lg:max-w-[550px] remove-scroll">
                            <div className="absolute top-0 right-0 bottom-0 w-16 bg-gradient-to-r from-transparent to-off-white z-10"></div>
                            <div className="animate-marqueeSlow whitespace-nowrap">
                              <span clasName="">{project.services},&nbsp;</span>
                              <span clasName="">{project.services},&nbsp;</span>
                              <span clasName="">{project.services},&nbsp;</span>
                              <span clasName="">{project.services},&nbsp;</span>
                            </div>

                            <div className="absolute top-0 animate-marquee2Slow whitespace-nowrap">
                              <span clasName="">{project.services},&nbsp;</span>
                              <span clasName="">{project.services},&nbsp;</span>
                              <span clasName="">{project.services},&nbsp;</span>
                              <span clasName="">{project.services},&nbsp;</span>
                            </div>
                          </div>
                        </span>
                      </div>
                    )}
                    {project.servicess && (
                      <div className="mb-5 lg:mb-0">
                        <span className="block text-base leading-[1.2] lg:text-xl lg:leading-[1.2] mb-[2px] font-medium">Services</span>
                        <span className="block text-base leading-[1.2] lg:text-xl lg:leading-[1.2]">
                          <div className="relative flex overflow-x-hidden w-2/3 max-w-[320px] lg:max-w-[550px] remove-scroll">
                            <div className="absolute top-0 right-0 bottom-0 w-16 bg-gradient-to-r from-transparent to-off-white z-10"></div>
                            <div className="animate-marquee whitespace-nowrap">
                              {project.servicess.map((e, i) => {
                                return (
                                  <span clasName="" key={i}>{e.title},&nbsp;</span>
                                )
                              })}
                            </div>

                            <div className="absolute top-0 animate-marquee2 whitespace-nowrap">
                              {project.servicess.map((e, i) => {
                                return (
                                  <span clasName="" key={i}>{e.title},&nbsp;</span>
                                )
                              })}
                            </div>
                          </div>
                        </span>
                      </div>
                    )}
                  </div>
                  
                  <BodyRenderer body={project.contentBlocks} />

                  {/* <div className="grid grid-cols-2 w-full gap-5 mb-5">
                    <div className="col-span-1">
                      <div className="relative overflow-hidden rounded-2xl">
                        <ImageScale image="/images/projects/slug-1.jpg" w={1157} h={1734} />
                      </div>
                    </div>
                    <div className="col-span-1">
                      <div className="relative overflow-hidden rounded-2xl">
                        <ImageScale image="/images/projects/slug-2.jpg" w={1157} h={1734} />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 w-full gap-5 mb-5">
                    <div className="col-span-1">
                      <div className="relative overflow-hidden rounded-2xl">
                        <ImageScale image="/images/projects/slug-3.jpg" w={2343} h={1562} />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 w-full gap-5 mb-5">
                    <div className="col-span-2 lg:col-span-1">
                      <div className="relative overflow-hidden rounded-2xl">
                        <ImageScale image="/images/projects/slug-4.jpg" w={1157} h={1734} />
                      </div>
                    </div>
                    <div className="col-span-2 lg:col-span-1 flex items-center justify-center">
                      <div className="w-[90%] md:w-[90%] lg:w-[80%] py-[10vw] lg:py-0">
                        <span className="block mb-8 overflow-hidden relative w-full text-center">
                          <span className="block text-lg leading-none lg:text-xl lg:leading-none">Details</span>
                        </span>

                        <span className="font-display block w-full text-center text-[7.5vw] md:text-[3.2vw] lg:text-[3vw] xl:text-[2.7vw] leading-[0.9] md:leading-[0.9] lg:leading-[0.9]">The property occupies an <em>enviable</em> plot overlooking the Derbyshire countryside. The client has maximised their ability to enjoy the <em>stunning</em> views by really opening up the façade of the house and installing a series of large sliding doors and picture windows.</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 w-full gap-5">
                    <div className="col-span-1">
                      <div className="relative overflow-hidden rounded-2xl">
                        <ImageScale image="/images/projects/slug-5.jpg" w={2343} h={1562} />
                      </div>
                    </div>
                  </div> */}

                  <div className="flex flex-wrap justify-center pt-[20vw] lg:pt-[10vw] pb-[20vw] lg:pb-[10vw]">
                    <span className="block mb-8 overflow-hidden relative w-full text-center">
                      <m.span variants={reveal} className="block text-sm leading-none lg:text-xl lg:leading-none">Need a hand?</m.span>
                    </span>

                    <span className="font-display block w-full md:w-[90%] lg:w-[85%] text-center text-[8vw] md:text-[6vw] lg:text-[4.2vw] leading-[1] md:leading-[0.9] lg:leading-[0.9] mb-10 lg:mb-16">Need help transforming a residential property into a beautiful, <em>lasting</em> home? We&rsquo;d love to talk!</span>
                    
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
            <div className="overflow-hidden bg-off-white z-[10] relative pt-[10vw] lg:pt-[5vw]">
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

export async function getStaticPaths() {
  const paths = await pageService.fetchPaths('projects')
  return {
    paths: paths,
    fallback: false,
  };
}