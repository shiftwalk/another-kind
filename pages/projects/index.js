import Layout from '@/components/layout'
import Footer from '@/components/footer'
import Container from '@/components/container'
import { fade, reveal } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import SunnyNoRaysIcon from "@/icons/sunny-no-rays.svg";
import ImageScale from '@/components/image-scale'
import Link from 'next/link'

export default function Projects() {
  let colors = ['border-orange bg-orange text-yellow', 'border-yellow bg-yellow text-orange', 'border-blue bg-blue text-green', 'border-green bg-green text-blue']

  return (
    <Layout>
      <NextSeo title="Projects" />

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
                  <div className="flex flex-wrap justify-center pt-[25vw] pb-[20vw] lg:py-[12.5vw]">
                    <span className="font-mono text-center uppercase tracking-widest block w-[110px] lg:w-[160px] mx-auto text-[47px] mb-3">
                      <svg className="w-full" viewBox="0 0 500 140">
                        <path id="curve" d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97" fill="transparent" />
                        <text>
                          <textPath href="#curve">
                            Our Projects
                          </textPath>
                        </text>
                      </svg>
                    </span>

                    <div className="relative overflow-hidden w-full mb-10 lg:mb-12">
                      <m.h1 variants={reveal} className="text-[15vw] lg:text-[10vw] xl:text-[9vw] 2xl:text-[150px] leading-[0.9] lg:leading-[0.9] xl:leading-[0.9] 2xl:leading-[0.9] text-center mb-0 pb-0">Places we’ve <em>shaped</em>.</m.h1>
                    </div>

                    <div className="w-[95%] lg:w-[60%] content text-lg xl:text-xl text-center mx-auto max-w-[800px]">
                      <p>We’re passionate about architecture that is appropriate and accessible, woven comfortably into their setting, respecting local character and celebrating community.</p>
                    </div>
                  </div>

                  <ul className="grid grid-cols-2 px-[3vw] lg:px-[6vw] gap-[6vw] lg:gap-[5vw] mb-[10vw] lg:mb-[6.25vw]">
                    {Array.from(Array(10), (e, i) => {
                      let color = colors[colors.length * Math.random() | 0]

                      return (
                        <li className="col-span-2 lg:col-span-1" key={i}>
                          <Link href="/projects/slug" className="group">
                            <div className="relative overflow-hidden mb-8 rounded-2xl">
                              <div className={`absolute pointer-events-none inset-0 z-10 rounded-2xl border-[0vw] group-hover:border-[1vw] transition-all ease-ak duration-[500ms] ${color} bg-transparent`}></div>

                              <div className="absolute inset-0 z-10 flex items-center justify-center">
                                <div className={`w-[33%] lg:w-[26%] aspect-square rounded-full flex items-center justify-center ${color} scale-[0] group-hover:scale-[1] transition-transform ease-ak duration-[500ms]`}>
                                  <div className={`w-full text-center -mt-3 lg:-mt-5`}>
                                    <SunnyNoRaysIcon className="w-[25px] lg:w-[33px] mx-auto mb-1 lg:mb-2" />
                                    <span className="block font-display text-[5.3vw] lg:text-[2.5vw] leading-none lg:leading-none">See More!</span>
                                  </div>
                                </div>
                              </div>

                              <div className="relative overflow-hidden">
                                <div className="group-hover:scale-[1.1] transition-transform ease-ak duration-[500ms]">
                                  <ImageScale image={`/images/projects/project-${i+1}.jpg`} />
                                </div>
                              </div>
                            </div>

                            <span className="block relative overflow-hidden mb-1">
                              <m.span variants={reveal} className="block text-lg leading-[1.125] lg:text-xl lg:leading-[1.125] w-full text-center">Keyworth, Nottingham</m.span>
                            </span>

                            <span className="block relative overflow-hidden mb-2">
                              <m.span variants={reveal} className="font-display block w-full text-center text-[8.2vw] md:text-[5vw] lg:text-[3.2vw] xl:text-[2.8vw] leading-[1.2] md:leading-[1.2] lg:leading-[1.2] xl:leading-[1.2]">Project Name</m.span>
                            </span>
                          </Link>
                        </li>
                      )
                    })}
                  </ul>

                  <div className="flex flex-wrap justify-center pt-[20vw] lg:pt-[12.5vw] mb-[20vw] lg:mb-[12.5vw]">
                    <span className="block mb-8 overflow-hidden relative w-full text-center">
                      <m.span variants={reveal} className="block text-lg leading-none lg:text-xl lg:leading-none">Need a hand?</m.span>
                    </span>

                    <span className="font-display block w-full md:w-[90%] lg:w-[85%] text-center text-[8vw] md:text-[6vw] lg:text-[4.2vw] leading-[0.9] md:leading-[0.9] lg:leading-[0.9] mb-10 lg:mb-16">Need help transforming a residential property into a beautiful, <em>lasting</em> home? We’d love to talk!</span>

                    <div className="w-full flex justify-center">
                      <div className="w-[30%] lg:w-[15%] 2xl:w-[12%] aspect-square bg-green text-yellow rounded-full flex items-center justify-center">
                        <div className="w-full text-center -mt-3 lg:-mt-5">
                          <SunnyNoRaysIcon className="w-[25px] lg:w-[33px] mx-auto mb-1 lg:mb-2" />
                          <span className="block font-display text-[5.3vw] lg:text-[2.5vw] leading-none lg:leading-none">Let’s Talk!</span>
                        </div>
                      </div>
                    </div>
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
