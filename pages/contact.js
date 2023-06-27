import Layout from '@/components/layout'
import Footer from '@/components/footer'
import Container from '@/components/container'
import { fade, reveal } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import SunnyNoRaysIcon from "@/icons/sunny-no-rays.svg";
import SunnyIcon from "@/icons/sunny.svg";
import ImageScale from '@/components/image-scale'
import Link from 'next/link'
import { MouseParallax } from 'react-just-parallax'
import { contactQuery } from '@/helpers/queries'
import SanityPageService from '@/services/sanityPageService'
import PortableText from "react-portable-text"

const pageService = new SanityPageService(contactQuery)
export default function Contact(initialData) {
  const { data: { contact }  } = pageService.getPreviewHook(initialData)()

  return (
    <Layout>
      <NextSeo title={contact.title} />

      <LazyMotion features={domAnimation}>
        <m.div
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <m.main className="pb-12 md:pb-16 xl:pb-24 pt-[90px] xl:pt-[103px]">
            <Container>
              <m.article variants={fade}>
                <div className="flex flex-wrap max-w-[1920px] mx-auto">
                  <div className="w-full lg:w-1/2 mb-5 lg:mb-0 relative">
                    <div className="w-[120px] xl:w-[170px] absolute bottom-5 left-5 lg:bottom-auto lg:left-auto lg:top-[10%] lg:right-[-10%] z-10 rounded-full bg-yellow text-green p-3 rotate-12">
                      <SunnyIcon className="w-[100%] aspect-square" />
                    </div>
                    <div className="w-full relative overflow-hidden rounded-xl">
                      <ImageScale image="/images/contact.jpg" w={1196} h={1321} p />
                    </div>
                  </div>

                  <div className="w-full lg:w-1/2">
                    <div className="flex flex-wrap lg:justify-center lg:pt-[7.5vw] h-full lg:px-5">
                      <div className="lg:w-[75%] lg:max-w-[720px] lg:translate-x-[5%] xl:translate-x-[10%]">
                        <span className="font-mono text-center uppercase tracking-[11.5px] block w-[110px] lg:w-[140px] text-[47px] mb-3 translate-x-[-8%]">
                          <svg className="w-full" viewBox="0 0 500 140">
                            <path id="curve" d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97" fill="transparent" />
                            <text>
                              <textPath href="#curve">
                                Contact Us
                              </textPath>
                            </text>
                          </svg>
                        </span>

                        <div className="relative overflow-hidden w-auto mb-6 lg:mb-8">
                          <m.h1 variants={reveal} className="text-[15vw] lg:text-[10vw] xl:text-[9vw] 2xl:text-[150px] leading-[1] lg:leading-[1] xl:leading-[1] 2xl:leading-[1] mb-0 pb-0 block">
                            <span className="block translate-y-[-10%]">
                              <PortableText content={contact.heroHeading} />
                            </span>
                          </m.h1>
                        </div>

                        <div className="w-[95%] lg:w-[90%] content text-lg/[1.28] xl:text-xl/[1.28] max-w-[800px] mb-12">
                          <p>{contact.heroText}</p>
                        </div>

                        {contact.emailAddress && (
                          <a href={`mailto:${contact.emailAddress}`} className="py-5 relative group block transition-colors ease-ak duration-[600ms] hover:text-yellow">
                            <div className="bg-orange w-full h-full inset-0 absolute z-0 scale-x-[1.065] rounded-xl hidden lg:block transition-opacity ease-ak duration-[600ms] opacity-0 group-hover:opacity-100"></div>

                            <div className="relative z-[1]">
                              <div className="mb-3">
                                <span className="block text-lg leading-none lg:text-xl lg:leading-none">Email</span>
                              </div>

                              <span className="font-display block w-full text-3xl md:text-3xl lg:text-3xl leading-[0.9] md:leading-[0.9] lg:leading-[0.9]">{contact.emailAddress}</span>
                            </div>
                          </a>
                        )}
                      
                        {contact.telephone && (
                          <a href={`tel:${contact.telephone}`} className="py-5 relative group block transition-colors ease-ak duration-[600ms] hover:text-yellow">
                            <div className="bg-orange w-full h-full inset-0 absolute z-0 scale-x-[1.065] rounded-xl hidden lg:block transition-opacity ease-ak duration-[600ms] opacity-0 group-hover:opacity-100"></div>

                            <div className="relative z-[1]">
                              <div className="mb-3">
                                <span className="block text-lg leading-none lg:text-xl lg:leading-none">Call</span>
                              </div>

                              <span className="font-display block w-full text-3xl md:text-3xl lg:text-3xl leading-[0.9] md:leading-[0.9] lg:leading-[0.9]">{contact.telephone}</span>
                            </div>
                          </a>
                        )}
                        
                        <div className="py-5">
                          <div className="mb-3">
                            <span className="block text-lg leading-none lg:text-xl lg:leading-none">Socials</span>
                          </div>

                          <span className="font-display block w-full text-3xl md:text-3xl lg:text-3xl leading-[0.9] md:leading-[0.9] lg:leading-[0.9]">
                            {contact.socials.map((e,i) => {
                              return (
                                <a key={i} target="_blank" rel="noopener noreferrer" href={e.url}>{e.name}{(i !== contact.socials.length - 1) && ', '}</a>
                              )
                            })}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap justify-center pt-[20vw] lg:pt-[10vw] pb-[10vw] lg:pb-[6.25vw]">
                  {contact.footerCtaTitle && (
                    <span className="block mb-8 overflow-hidden relative w-full text-center">
                      <m.span variants={reveal} className="block text-lg leading-none lg:text-xl lg:leading-none">{contact.footerCtaTitle}</m.span>
                    </span>
                  )}

                  {contact.footerCtaText && (
                    <span className="font-display block w-full md:w-[90%] lg:w-[85%] text-center text-[8vw] md:text-[6vw] lg:text-[4.2vw] leading-[0.9] md:leading-[0.9] lg:leading-[0.9] mb-10 lg:mb-16"><PortableText content={contact.footerCtaText} /></span>
                  )}

                  <MouseParallax lerpEase={0.5} strength={-0.017} enableOnTouchDevice={false}>
                    <div className="w-full flex justify-center">
                      <a href="mailto:hello@anotherkind.studio" className="w-[140px] xl:w-[180px] aspect-square bg-green text-yellow rounded-full flex items-center justify-center transition-translate ease-ak duration-[500ms] hover:scale-[1.2] relative overflow-hidden group">
                        <div className="absolute inset-0 bg-orange transition-transform ease-ak duration-[500ms] translate-y-full group-hover:translate-y-0 group-hover:rotate-[-80deg] group-hover:scale-[1.3] rounded-[50%]"></div>
                        <div className="w-full text-center -mt-3 lg:-mt-5 relative z-1">
                          <SunnyNoRaysIcon className="w-[25px] lg:w-[33px] mx-auto mb-1 lg:mb-2 transition-transform ease-ak duration-[500ms] group-hover:rotate-[360deg]" />
                          <span className="block font-display text-3xl xl:text-4xl leading-none lg:leading-none">Let&rsquo;s Talk!</span>
                        </div>
                      </a>
                    </div>
                  </MouseParallax>
                </div>
              </m.article>
            </Container>
          </m.main>
        
          <m.div variants={fade}>
            <div className="overflow-hidden pt-[20vw] lg:pt-[5vw]">
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