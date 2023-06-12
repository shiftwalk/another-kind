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

export default function Journal() {
  let colors = ['bg-orange text-off-white', 'bg-blue text-off-white', 'bg-green text-off-white']

  return (
    <Layout>
      <NextSeo title="Journal" />

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
                    <span className="font-mono text-center uppercase tracking-widest block w-[110px] lg:w-[160px] mx-auto text-[50px] mb-3">
                      <svg className="w-full" viewBox="0 0 500 140">
                        <path id="curve" d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97" fill="transparent" />
                        <text>
                          <textPath href="#curve">
                            The Journal
                          </textPath>
                        </text>
                      </svg>
                    </span>

                    <div className="relative overflow-hidden w-full mb-10 lg:mb-12">
                      <m.h1 variants={reveal} className="text-[15vw] lg:text-[10vw] xl:text-[9vw] 2xl:text-[150px] leading-[0.9] lg:leading-[0.9] xl:leading-[0.9] 2xl:leading-[0.9] text-center mb-0 pb-0"><em>Life</em> in full flow.</m.h1>
                    </div>

                    <div className="w-[95%] lg:w-[60%] content text-lg xl:text-xl text-center mx-auto max-w-[800px]">
                      <p>Welcome, friends! Here you&rsquo;ll find all things Anotherkind — project updates, new team members, social initiatives, and more!</p>
                    </div>
                  </div>

                  <div className="w-full flex flex-wrap max-w-[1800px] mx-auto">
                    <div className="w-full lg:w-1/2">
                      <div className="w-full block relative">
                        <Link href="/journal/slug" className={`group w-full block border-b border-black lg:border-none pb-6 lg:pb-0 mb-6`}>
                          <div className="w-full relative z-10">
                            <div className="relative overflow-hidden rounded-xl">
                              <div className="group-hover:scale-[1.1] transition-transform ease-ak duration-[500ms]">
                                <ImageScale image={`/images/journal/journal-1.jpg`} w={1196} h={841} />
                              </div>
                            </div>
                          </div>
                          <div className="flex-1 relative z-10 mt-5">
                            <span className={`inline-block px-[9px] md:px-[13px] pt-[7px] md:pt-[9px] pb-[5px] md:pb-[7px] rounded-full font-mono uppercase text-[8px] md:text-[10px] leading-none mb-2 bg-orange text-off-white`}>Project News</span>
                            <h2 className="text-2xl md:text-2xl lg:text-3xl leading-none md:leading-none lg:leading-none mb-3 pb-0">We survive the tough mudder challenge, just about!</h2>
                            <span className="text-sm md:text-base lg:text-lg leading-none md:leading-none lg:leading-none block">14 March, 2013 - 2 Min Read</span>
                          </div>
                        </Link>
                      </div>
                    </div>
                    
                    <div className="w-full lg:w-1/2">
                      <ul className="mb-[20vw] lg:mb-[12.5vw] w-full lg:mx-0">
                        {Array.from(Array(3), (e, i) => {
                          let color = colors[colors.length * Math.random() | 0]
                          return (
                            <li className="w-full block lg:px-4 relative" key={i}>
                              <Link href="/journal/slug" className={`group w-full flex flex-wrap pb-5 md:items-end`}>
                                <div className="w-[35%] lg:w-1/2 relative z-10">
                                  <div className="relative overflow-hidden rounded-xl">
                                    <div className="group-hover:scale-[1.1] transition-transform ease-ak duration-[500ms]">
                                      <ImageScale image={`/images/journal/journal-${i+2}.jpg`} w={520} h={320} />
                                    </div>
                                  </div>
                                </div>
                                <div className="flex-1 pl-5 relative z-10">
                                  <span className={`inline-block px-[9px] xl:px-[13px] pt-[7px] xl:pt-[9px] pb-[5px] xl:pb-[7px] rounded-full font-mono uppercase text-[8px] xl:text-[10px] leading-none ${color} mb-2`}>Project News</span>
                                  <h2 className="text-2xl md:text-[2vw] lg:text-[2vw] 2xl:text-3xl leading-none md:leading-none lg:leading-none xl:leading-none mb-3 pb-0">We survive the tough mudder challenge, just about!</h2>
                                  <span className="text-sm md:text-sm lg:text-base 2xl:text-lg leading-none md:leading-none lg:leading-none 2xl:leading-none block">14 March, 2013 - 2 Min Read</span>
                                </div>
                              </Link>
                            </li>
                          )
                        })}
                      </ul>
                    </div>
                  </div>

                 
                  <div className="flex flex-wrap justify-center pt-[6vw] lg:pt-[5vw] mb-[20vw] lg:mb-[12.5vw]">
                    <span className="block mb-8 overflow-hidden relative w-full text-center">
                      <m.span variants={reveal} className="block text-lg leading-none lg:text-xl lg:leading-none">A life-led company</m.span>
                    </span>

                    <span className="font-display block w-full md:w-[80%] lg:w-[75%] text-center text-[8vw] md:text-[6vw] lg:text-[4.2vw] leading-[0.9] md:leading-[0.9] lg:leading-[0.9] mb-10 lg:mb-16">There&rsquo;s <em>always</em> something going on at Anotherkind — new projects, new members of the team, social events, and more!</span>
                  </div>
                </Container>

                <ul className="mb-[20vw] lg:mb-[12.5vw] w-full">
                  {Array.from(Array(5), (e, i) => {
                    let color = colors[colors.length * Math.random() | 0]
                    return (
                      <li className="w-full block px-5 relative" key={i}>
                        <Link href="/journal/slug" className={`group w-full flex flex-wrap border-b border-black transition-colors ease-ak duration-[350ms] hover:border-green py-5 lg:py-8 md:items-end ${i == 0 ? 'border-t' : '' }`}>
                          <div className="absolute inset-0 transition-opacity ease-ak duration-[350ms] bg-green opacity-0 scale-y-[1.01] lg:group-hover:opacity-100 z-0 rounded-2xl mx-1"></div>
                          <div className="w-[35%] lg:w-1/4 relative z-10">
                            <div className="relative overflow-hidden rounded-xl">
                              <div className="lg:group-hover:scale-[1.1] transition-transform ease-ak duration-[500ms]">
                                <ImageScale image={`/images/projects/project-${i+1}.jpg`} w={994} h={704} />
                              </div>
                            </div>
                          </div>
                          <div className="flex-1 pl-5 relative z-10 lg:group-hover:text-off-white">
                            <span className={`inline-block px-[9px] md:px-[13px] pt-[7px] md:pt-[9px] pb-[5px] md:pb-[7px] rounded-full font-mono uppercase text-[8px] md:text-[10px] leading-none ${color} mb-2 transition-colors ease-ak duration-[350ms] lg:group-hover:bg-yellow lg:group-hover:text-green`}>Project News</span>
                            <h2 className="text-2xl md:text-[4vw] lg:text-[3vw] leading-none md:leading-none lg:leading-none mb-3 pb-0 lg:w-10/12">We survive the tough mudder challenge, just about!</h2>
                            <span className="text-sm md:text-base lg:text-lg leading-none md:leading-none lg:leading-none block">14 March, 2013 - 2 Min Read</span>
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
                  <div className="w-full flex justify-center mb-[20vw] lg:mb-[12.5vw]">
                    <div className="w-[30%] lg:w-[15%] 2xl:w-[12%] aspect-square bg-green text-yellow rounded-full flex items-center justify-center">
                      <div className="w-full text-center -mt-3 lg:-mt-5">
                        <SunnyNoRaysIcon className="w-[25px] lg:w-[33px] mx-auto mb-1 lg:mb-2" />
                        <span className="block font-display text-[5.3vw] lg:text-[2.5vw] leading-none lg:leading-none">Load More!</span>
                      </div>
                    </div>
                  </div>
                </Container>

              </div>
            </m.article>
          </m.main>
        
          <m.div variants={fade}>
            <div className="overflow-hidden">
              <div className="w-full relative overflow-hidden">
                <ImageScale image="/images/journal-footer.jpg" w={2400} h={1345} />
              </div>
              <Footer />
            </div>
          </m.div>
        </m.div>
      </LazyMotion>
    </Layout>
  )
}
