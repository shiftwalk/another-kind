import Layout from '@/components/layout'
import Footer from '@/components/footer'
import Container from '@/components/container'
import { fade, reveal } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import SunnyNoRaysIcon from "@/icons/sunny-no-rays.svg";
import ArrowIcon from "@/icons/arrow.svg";
import ImageScale from '@/components/image-scale'
import Link from 'next/link'
import { MouseParallax } from 'react-just-parallax'
import SanityPageService from '@/services/sanityPageService'
import { journalQuery } from '@/helpers/queries'
import PortableText from 'react-portable-text'
import BodyRenderer from '@/components/body-renderer'
import SanityImageScale from '@/components/sanity-image-scale'
import { useContext, useEffect } from 'react'
import { IntroContext } from '@/context/intro'

const pageService = new SanityPageService(journalQuery)

export default function JournalSlug(initialData) {
  const { data: { journal }  } = pageService.getPreviewHook(initialData)()
  let colors = ['bg-orange text-off-white', 'bg-blue text-off-white', 'bg-green text-off-white']
  const [introContext, setIntroContext] = useContext(IntroContext);

  let color = 'bg-orange text-off-white'
  journal.category.title == 'Project News' && (
    color = 'bg-orange text-off-white'
  )

  journal.category.title == 'Team News' && (
    color = 'bg-green text-off-white'
  )

  journal.category.title == 'Company News' && (
    color = 'bg-blue text-off-white'
  )

  useEffect(() => {
    setIntroContext(true)
  });

  let maind = new Date(journal.postDate);
  let mainye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(maind);
  let mainmo = new Intl.DateTimeFormat('en', { month: 'short' }).format(maind);
  let mainda = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(maind);

  return (
    <Layout>
      <NextSeo title={journal.title} />

      <LazyMotion features={domAnimation}>
        <m.div
          initial="initial"
          animate="enter"
          exit="exit"
          className="flex flex-wrap"
        >
          <m.main className="pb-12 md:pb-16 xl:pb-24 pt-[90px] lg:pt-[110px] xl:pt-[120px] w-full">
            <m.article variants={fade}>
              <Container>
                <span className={`inline-block px-[9px] md:px-[13px] pt-[7px] md:pt-[9px] pb-[7px] md:pb-[9px] rounded-full font-sans font-bold tracking-wider uppercase text-[8px] md:text-[10px] leading-none md:leading-none mb-3 lg:mb-5 ${color}`}>{journal.category.title}</span>

                <h1 className="text-[13.5vw] md:text-[9vw] lg:text-[8.5vw] leading-[0.8] md:leading-[0.8] lg:leading-[0.8] pb-0 w-[95%] mb-8 lg:mb-16 xl:mb-20">{journal.title}</h1>

                <div className="grid grid-cols-2 mb-[18vw] lg:mb-[10vw]">
                  <div className="col-span-2 lg:col-span-1 mb-10 lg:mb-0">
                    { journal.images.length > 1 ? (
                      <div className="grid grid-cols-2 gap-3 lg:gap-5">
                      {journal.images.map((e, i) => {
                        return (
                          <div className="relative overflow-hidden rounded-2xl col-span-1" key={i}>
                            <div className="aspect-square">
                              <SanityImageScale image={e} fill sizes="(max-width: 1024px) 100vw, 65vw" />
                            </div>
                          </div>
                        )
                      })}
                      </div>
                    ) : (
                      <div className="relative overflow-hidden rounded-2xl">
                        <div className="aspect-square">
                          <SanityImageScale image={journal.images[0]} fill sizes="(max-width: 1024px) 100vw, 65vw" />
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="col-span-2 lg:col-span-1 pt-[5vw]">
                    <div className="w-[90%] lg:w-[65%] lg:max-w-[520px] lg:mx-auto text-base/[1.28] lg:text-base/[1.28] 2xl:text-xl/[1.28] break-words">
                      <p className="block mb-5 font-medium">{mainda} {mainmo} {mainye}</p>

                      <PortableText content={journal.content} className="content" />
                    </div>
                  </div>
                </div>

                <span className="font-display block w-full text-[10vw] lg:text-[5.5vw] leading-[0.9] lg:leading-[0.9] mb-5 lg:mb-8">More News!</span>
              </Container>

              <ul className="mb-[20vw] lg:mb-[10vw] w-full">
                {journal.more.map((e, i) => {
                  let color = colors[colors.length * Math.random() | 0]
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
                    <li className="w-full block px-3 lg:px-5 relative" key={i}>
                      <Link scroll={false} href={`/journal/${e.slug.current}`} className={`group w-full flex flex-wrap border-b border-black transition-colors ease-ak duration-[350ms] hover:border-green py-5 lg:py-8 md:items-end ${i == 0 ? 'border-t' : '' }`}>
                        <div className="absolute inset-0 transition-opacity ease-ak duration-[350ms] bg-green opacity-0 scale-y-[1.01] lg:group-hover:opacity-100 z-0 rounded-2xl mx-1"></div>
                        <div className="w-[35%] lg:w-[22%] lg:max-w-[300px] relative z-10 hidden lg:block">
                          <div className="relative overflow-hidden rounded-xl">
                            <div className="lg:group-hover:scale-[1.1] transition-transform ease-ak duration-[500ms]">
                              <div className="aspect-square">
                                <SanityImageScale image={e.images[0]} fill sizes="(max-width: 1024px) 100vw, 50vw" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex-1 lg:pl-5 relative z-10 lg:group-hover:text-off-white">
                          <span className={`inline-block px-[9px] md:px-[13px] pt-[7px] md:pt-[9px] pb-[7px] md:pb-[9px] rounded-full font-sans font-bold tracking-wider uppercase text-[8px] md:text-[10px] leading-none ${color} mb-2 transition-colors ease-ak duration-[350ms] lg:group-hover:bg-yellow lg:group-hover:text-green`}>{e.category.title}</span>
                          <h2 className="text-2xl md:text-3xl xl:text-4xl leading-none md:leading-none lg:leading-none mb-3 pb-0 lg:w-8/12">{e.title}</h2>
                          <span className="text-sm md:text-sm lg:text-base leading-none md:leading-none lg:leading-none block">{da} {mo}, {ye}</span>
                          <div className={`w-[4vw] h-[4vw] max-w-[60px] max-h-[60px] hidden lg:flex absolute bottom-0 right-0 transition-colors ease-ak duration-[350ms] lg:group-hover:bg-yellow lg:group-hover:text-green ${color} p-[10px] flex items-center justify-center rounded-full`}>
                            <ArrowIcon className="w-full" />
                          </div>
                        </div>
                      </Link>
                    </li>
                  )
                })}
              </ul>

              <Container>
                <MouseParallax lerpEase={0.5} strength={-0.017} enableOnTouchDevice={false}>
                  <div className="w-full flex justify-center mb-[0vw] lg:mb-[3vw]">
                    <Link scroll={false} href="/journal" className="w-[140px] xl:w-[180px] aspect-square bg-green text-yellow rounded-full flex items-center justify-center transition-translate ease-ak duration-[500ms] hover:scale-[1.2] relative overflow-hidden group outline-none border-none">
                      <div className="absolute inset-0 bg-orange transition-transform ease-ak duration-[500ms] translate-y-full group-hover:translate-y-0 group-hover:rotate-[-80deg] group-hover:scale-[1.3] rounded-[50%]"></div>
                      <div className="w-full text-center -mt-3 lg:-mt-5 relative z-1">
                        <SunnyNoRaysIcon className="w-[33px] lg:w-[45px] mx-auto mb-0 transition-transform ease-ak duration-[500ms] group-hover:rotate-[360deg]" />
                        <span className="block font-display text-3xl xl:text-4xl leading-none lg:leading-none">To Journal</span>
                      </div>
                    </Link>
                  </div>
                </MouseParallax>
              </Container>
            </m.article>
          </m.main>
        
          <m.div variants={fade} className="w-full">
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
  const paths = await pageService.fetchPaths('journals')
  return {
    paths: paths,
    fallback: false,
  };
}