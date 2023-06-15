import Layout from '@/components/layout'
import Footer from '@/components/footer'
import Container from '@/components/container'
import { fade, reveal, scale } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m, useScroll, useTransform, AnimatePresence, useMotionValueEvent} from 'framer-motion'
import { NextSeo } from 'next-seo'
import SunnyNoRaysIcon from "@/icons/sunny-no-rays.svg";
import BadgeLightningIcon from "@/icons/badge-lightning.svg"
import ManifestoBadgeIcon from "@/icons/manifesto-badge.svg";
import ImageScale from '@/components/image-scale'
import HeroMission from '@/components/hero-mission'
import Link from 'next/link'
import { useRef, useState } from 'react'
import MissionManifesto from '@/components/mission-manifesto'
import { useLenis } from '@studio-freight/react-lenis'
import { MouseParallax } from 'react-just-parallax'
import { SplitTextHover } from '@/components/splitTextHover'

export default function Mission() {
  const badgeRef = useRef(null)
  const [manifestoOpen, setManifestoOpen] = useState(false);
  const lenis = useLenis();

  function openManifesto() {
    lenis.scrollTo(0, { duration: 0.6 })
    setManifestoOpen(true)
  }

  function closeManifesto() {
    lenis.scrollTo(0, { duration: 0.6 })
    setManifestoOpen(false)
  }

  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0%", "100%"]
  })

  const { scrollY } = useScroll()
  const moveX = useTransform(scrollYProgress,[0, 0.6],['-17.75dvw', '0dvw'],{ clamp: true })
  const moveY = useTransform(scrollYProgress,[0, 0.6],['-50dvh', '0dvh'],{ clamp: true })
  const rotate = useTransform(scrollY, [0, 15], [0, 1], { clamp: false })
  const rotateBadge = useTransform(scrollYProgress,[0, 4],[-360, 360],{ clamp: true })  
  
  return (
    <Layout>
      <NextSeo title="Mission" />

      <LazyMotion features={domAnimation}>
        <m.div
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <m.main className="">
            <m.article variants={fade}>
              <MissionManifesto manifestoOpen={manifestoOpen} openManifesto={openManifesto} closeManifesto={closeManifesto} />

              <m.button
                whileHover={{ scale: 1.15, transition:{ duration: 0.6, ease: [0.83, 0, 0.17, 1]} }}
                onClick={openManifesto}
                style={{ x: moveX, y: moveY, rotate: rotate  }}
                className="fixed w-[140px] xl:w-[180px] bottom-5 right-5 z-[100] hidden lg:block outline-none border-none"
              >
                <ManifestoBadgeIcon className="w-full" />
              </m.button>
              
              {/* Fake */}
              <div className="top-0 left-0 w-full h-[300dvh] fixed inset-0 z-[10] bg-none pointer-events-none" ref={ref}></div>

              <div className="hidden lg:block">
                <HeroMission />
              </div>
              
              <div className="block lg:hidden">
                <Container>
                  <div className="pt-[110px] mb-16 text-center">
                    <h1 className="text-[13vw] mb-0 pb-0 leading-[0.9]">Great Spaces Designed for <em>life</em>.</h1>
                  </div>
                </Container>

                <div className="relative">
                  <m.button
                    onClick={openManifesto}
                    className="absolute w-[140px] xl:w-[180px] -bottom-16 right-5 z-[100] block lg:hidden outline-none border-none"
                  >
                    <ManifestoBadgeIcon className="w-full" />
                  </m.button>

                  <div className="overflow-hidden relative">
                    <ImageScale
                      image={'/images/mission.jpg'}
                      w={1452}
                      h={973}
                      className="will-change-transform w-full absolute inset-0 h-full object-cover object-center" />
                  </div>
                </div>
              </div>

              <div className="relative bg-off-white lg:mt-[300dvh] z-[10]">
                <Container>
                  <div className="flex flex-wrap justify-center pt-[16vw] lg:pt-[10vw] mb-[18vw] lg:mb-[10vw]">
                    <span className="block mb-8 overflow-hidden relative w-full text-center">
                      <m.span variants={reveal} className="block text-lg leading-none lg:text-xl lg:leading-none">Our Mission.</m.span>
                    </span>

                    <span className="font-display block w-full md:w-[90%] lg:w-[85%] text-center text-[7vw] md:text-[6vw] lg:text-[4.2vw] leading-[0.9] md:leading-[0.9] lg:leading-[0.9]">
                      It&apos;s the <em>beautiful</em> alchemy of space and colliding that makes a space, a place. We make grand plans for them to come together, creating progressive, sustainable, life-affirming places. Great places designed for life.</span>
                  </div>
                </Container>

                <div className="bg-green text-off-white flex flex-wrap mb-[20vw] lg:mb-[10vw]">
                  <div className="w-full lg:w-[52%] mb-3 lg:mb-0 relative p-5 flex flex-col">
                    <h1 className="text-[16vw] lg:text-[9vw] leading-[0.82] lg:leading-[0.82] text-yellow w-[85%] md:w-[75%] lg:w-[85%] mb-[25vw] lg:mb-0">Sustainable as standard.</h1>

                    <div className="w-full lg:w-9/12 content text-base/[1.28] xl:text-lg/[1.28] mt-auto">
                      <p>We create for positive, enduring impact. Making sustainability a first thought is a no brainer. The future depends on it. Sustainability for main, not as an optional dessert. We look at how everything we do preserves, impacts, interacts with and inspires life. Commercially realistic. Future focused. Sustainable as standard.</p>
                      
                      <p>We have a passionate bunch of accredited Passive House Designers at Anotherkind, with more of the team on track to complete the qualification. Also bolstering our team is a retrofit specialist, who brings a wealth of sustainability consultant experience and knowledge to all of our projects.</p>
                    </div>
                  </div>
                  <div className="w-full lg:w-[48%] relative">
                    <div className="w-full relative overflow-hidden">
                      <MouseParallax lerpEase={0.5} strength={-0.017} enableOnTouchDevice={false} isAbsolutelyPositioned={true} zIndex={10} >
                        <div className="absolute inset-0 z-10 flex items-center justify-center">
                          <Link href="/projects" className="w-[140px] xl:w-[180px] aspect-square bg-yellow text-green rounded-full flex items-center justify-center transition-translate ease-ak duration-[500ms] hover:scale-[1.2] relative overflow-hidden group">
                            <div className="absolute inset-0 bg-orange transition-transform ease-ak duration-[500ms] translate-y-full group-hover:translate-y-0 group-hover:rotate-[-80deg] group-hover:scale-[1.3] rounded-[50%]"></div>
                            <div className="w-full text-center -mt-3 lg:-mt-5 relative z-1">
                              <SunnyNoRaysIcon className="w-[25px] lg:w-[33px] mx-auto mb-1 lg:mb-2 transition-transform ease-ak duration-[500ms] group-hover:rotate-[360deg]" />
                              <span className="block font-display text-3xl xl:text-4xl leading-none lg:leading-none">See Work!</span>
                            </div>
                          </Link>
                        </div>
                      </MouseParallax>
                      <ImageScale image="/images/mission-02.jpg" w={900} h={1224} />
                    </div>
                  </div>
                </div>

                <Container>
                  <div className="flex flex-wrap justify-center mb-[20vw] lg:mb-[10vw]">
                    <span className="block text-lg leading-none lg:text-xl lg:leading-none w-full text-center mb-3 lg:mb-0">Creating new stories.</span>

                    <span className="font-display block w-full md:w-[90%] lg:w-[85%] text-center text-[10vw] md:text-[10vw] lg:text-[8vw] leading-[0.9] md:leading-[0.9] lg:leading-[0.9] mb-8 lg:mb-10">Sectors we serve.</span>

                    <div className="content text-lg/[1.28] lg:text-xl/[1.28] w-[90%] lg:w-[45%] mx-auto max-w-[800px] text-center">
                      <p>We&apos;re passionate about architecture that is appropriate and accessible, woven comfortably into their setting, respecting local character and celebrating community.</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap mb-[20vw] lg:mb-[10vw] px-[10vw] lg:px-[8vw] lg:space-x-[5vw]">
                    <div className="w-full lg:flex-1 mb-12 lg:mb-0 group relative">
                      <div className={`absolute inset-0 bg-yellow z-[8] h-[68%] transition-transition ease-ak duration-[750ms] rounded-2xl delay-[100ms] group-hover:delay-[0ms] group-hover:rotate-[-1.5deg]`}></div>

                      <div className={`w-full relative overflow-hidden rounded-xl mb-8 transition-transform ease-ak duration-[750ms] z-[9] group-hover:rotate-[1.5deg]`}>
                        <div className="absolute inset-0 bg-orange z-[9] translate-y-[150%] group-hover:translate-y-0 transition-transition ease-ak duration-[750ms] rounded-full scale-[1.8] delay-[100ms] group-hover:rotate-45 group-hover:delay-[0ms]"></div>

                        <div className="absolute inset-0 text-yellow z-[10] p-8 flex items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity ease-ak duration-[600ms] rounded-full">

                          <div className="w-full">                          
                            <span className="font-display text-[5.2vw] md:text-[3vw] lg:text-[1.75vw] leading-[1.1] lg:leading-[1.1] flex flex-wrap overflow-hidden justify-center">
                              <SplitTextHover>
                              Our Conservation Accreditations are the cornerstone of our practice, enabling us to manage complex repairs, alterations and specialist grant aided works. It also means we are adept at finding new uses for old buildings, looking for ways to recycle rather than demolish, or retrofit for the future.
                              </SplitTextHover>
                            </span>
                          </div>
                        </div>
                        <div className="scale-[1] group-hover:scale-[1.18] transition-all ease-ak duration-[850ms]">
                          <ImageScale image={`/images/home-02.jpg`} w={736} h={1001} />
                        </div>
                      </div>
                      
                      <span className="block text-lg leading-none lg:text-xl lg:leading-none w-full text-center mb-2">01</span>

                      <span className="font-display block w-full text-center text-[8.2vw] md:text-[5vw] lg:text-[3.2vw] xl:text-[2.8vw] leading-[0.9] md:leading-[0.9] lg:leading-[0.9] xl:leading-[0.9] mb-3">Conservation</span>

                      <span className="block text-lg leading-[1.125] lg:text-xl lg:leading-[1.125] w-full text-center">Finding beauty in the imperfect</span>
                    </div>

                    <div className="w-full lg:flex-1 mb-12 lg:mb-0 group relative">
                      <div className={`absolute inset-0 bg-yellow z-[8] h-[68%] transition-transition ease-ak duration-[750ms] rounded-2xl delay-[100ms] group-hover:delay-[0ms] group-hover:rotate-[-1.5deg]`}></div>

                        <div className={`w-full relative overflow-hidden rounded-xl mb-8 transition-transform ease-ak duration-[750ms] z-[9] group-hover:rotate-[1.5deg]`}>
                          <div className="absolute inset-0 bg-orange z-[9] translate-y-[150%] group-hover:translate-y-0 transition-transition ease-ak duration-[750ms] rounded-full scale-[1.8] delay-[100ms] group-hover:rotate-45 group-hover:delay-[0ms]"></div>

                          <div className="absolute inset-0 text-yellow z-[10] p-8 flex items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity ease-ak duration-[600ms] rounded-full">

                            <div className="w-full">                          
                              <span className="font-display text-[5.2vw] md:text-[3vw] lg:text-[1.75vw] leading-[1.1] lg:leading-[1.1] flex flex-wrap overflow-hidden justify-center">
                                <SplitTextHover>
                                Our Conservation Accreditations are the cornerstone of our practice, enabling us to manage complex repairs, alterations and specialist grant aided works. It also means we are adept at finding new uses for old buildings, looking for ways to recycle rather than demolish, or retrofit for the future.
                                </SplitTextHover>
                              </span>
                            </div>
                          </div>
                          <div className="scale-[1] group-hover:scale-[1.18] transition-all ease-ak duration-[850ms]">
                            <ImageScale image={`/images/home-03.jpg`} w={736} h={1001} />
                          </div>
                        </div>

                      <span className="block text-lg leading-[1.125] lg:text-xl lg:leading-[1.125] w-full text-center mb-2">02</span>

                      <span className="font-display block w-full text-center text-[8.2vw] md:text-[5vw] lg:text-[3.2vw] xl:text-[2.8vw] leading-[0.9] md:leading-[0.9] lg:leading-[0.9] xl:leading-[0.9] mb-3">Commercial</span>

                      <span className="block text-lg leading-[1.125] lg:text-xl lg:leading-[1.125] w-full text-center">Finding beauty in the imperfect</span>
                    </div>

                    <div href="/" className="w-full lg:flex-1 mb-12 lg:mb-0 group relative">
                      <div className={`absolute inset-0 bg-yellow z-[8] h-[68%] transition-transition ease-ak duration-[750ms] rounded-2xl delay-[100ms] group-hover:delay-[0ms] group-hover:rotate-[-1.5deg]`}></div>

                        <div className={`w-full relative overflow-hidden rounded-xl mb-8 transition-transform ease-ak duration-[750ms] z-[9] group-hover:rotate-[1.5deg]`}>
                          <div className="absolute inset-0 bg-orange z-[9] translate-y-[150%] group-hover:translate-y-0 transition-transition ease-ak duration-[750ms] rounded-full scale-[1.8] delay-[100ms] group-hover:rotate-45 group-hover:delay-[0ms]"></div>

                          <div className="absolute inset-0 text-yellow z-[10] p-8 flex items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity ease-ak duration-[600ms] rounded-full">

                            <div className="w-full">                          
                              <span className="font-display text-[5.2vw] md:text-[3vw] lg:text-[1.75vw] leading-[1.1] lg:leading-[1.1] flex flex-wrap overflow-hidden justify-center">
                                <SplitTextHover>
                                Our Conservation Accreditations are the cornerstone of our practice, enabling us to manage complex repairs, alterations and specialist grant aided works. It also means we are adept at finding new uses for old buildings, looking for ways to recycle rather than demolish, or retrofit for the future.
                                </SplitTextHover>
                              </span>
                            </div>
                          </div>
                          <div className="scale-[1] group-hover:scale-[1.18] transition-all ease-ak duration-[850ms]">
                            <ImageScale image={`/images/home-04.jpg`} w={736} h={1001} />
                          </div>
                        </div>

                      <span className="block text-lg leading-[1.125] lg:text-xl lg:leading-[1.125] w-full text-center mb-2">03</span>

                      <span className="font-display block w-full text-center text-[8.2vw] md:text-[5vw] lg:text-[3.2vw] xl:text-[2.8vw] leading-[0.9] md:leading-[0.9] lg:leading-[0.9] xl:leading-[0.9] mb-3">Residential</span>

                      <span className="block text-lg leading-[1.125] lg:text-xl lg:leading-[1.125] w-full text-center">Finding beauty in the imperfect</span>
                    </div>
                  </div>
                </Container>

                <div className="bg-yellow text-black flex flex-wrap mb-[20vw] lg:mb-[10vw]">
                  <div className="w-full lg:w-[48%] relative">
                    <div className="w-full relative overflow-hidden">
                      <MouseParallax lerpEase={0.5} strength={-0.017} enableOnTouchDevice={false} isAbsolutelyPositioned={true} zIndex={10}>
                        <div className="absolute inset-0 z-10 flex items-center justify-center">
                          <Link href="/projects" className="w-[140px] xl:w-[180px] aspect-square bg-yellow text-green rounded-full flex items-center justify-center transition-translate ease-ak duration-[500ms] hover:scale-[1.2] relative overflow-hidden group">
                            <div className="absolute inset-0 bg-orange transition-transform ease-ak duration-[500ms] translate-y-full group-hover:translate-y-0 group-hover:rotate-[-80deg] group-hover:scale-[1.3] rounded-[50%]"></div>
                            <div className="w-full text-center -mt-3 lg:-mt-5 relative z-1">
                              <SunnyNoRaysIcon className="w-[25px] lg:w-[33px] mx-auto mb-1 lg:mb-2 transition-transform ease-ak duration-[500ms] group-hover:rotate-[360deg]" />
                              <span className="block font-display text-3xl xl:text-4xl leading-none lg:leading-none">See Work!</span>
                            </div>
                          </Link>
                        </div>
                      </MouseParallax>
                      <ImageScale image="/images/mission-04.jpg" w={1104} h={1501} />
                    </div>
                  </div>
                  <div className="w-full lg:w-[52%] mb-3 lg:mb-0 relative p-5 flex flex-col">
                    <h1 className="text-[16vw] lg:text-[9vw] leading-[0.82] lg:leading-[0.82] text-orange w-[85%] md:w-[75%] lg:w-[85%] mb-[25vw] lg:mb-0">Conserve and protect.</h1>

                    <div className="w-full lg:w-9/12 content text-base/[1.28] xl:text-lg/[1.28] mt-auto">
                      <p>We create for positive, enduring impact. Making sustainability a first thought is a no brainer. The future depends on it. Sustainability for main, not as an optional dessert. We look at how everything we do preserves, impacts, interacts with and inspires life. Commercially realistic. Future focused. Sustainable as standard.</p>
                      
                      <p>We have a passionate bunch of accredited Passive House Designers at Anotherkind, with more of the team on track to complete the qualification. Also bolstering our team is a retrofit specialist, who brings a wealth of sustainability consultant experience and knowledge to all of our projects.</p>
                    </div>
                  </div>
                </div>

                <Container className="lg:px-[5vw]">
                  <div className="pb-[20vw] lg:pb-[10vw]">
                    <span className="block text-lg leading-none lg:text-xl lg:leading-none w-full mb-3 lg:mb-0">Overview.</span>

                    <span className="font-display block w-full text-[10vw] md:text-[10vw] lg:text-[8vw] leading-[0.9] md:leading-[0.9] lg:leading-[0.9] mb-8 lg:mb-24">Services we supply.</span>

                    <div className="content text-lg/[1.28] lg:text-xl/[1.28] w-[90%] lg:flex lg:flex-wrap lg:mx-[-2.5vw] mb-8 lg:mb-24">
                      <p className="lg:w-1/2 lg:px-[2.5vw]">We&apos;re flexible in how we work, and on-hand as much or as little as you need. Following the RIBA Plan of Work, we offer full architectural services from inception to completion, guiding you through the process every step of the way: from early concepts, through planning permissions and building regulations consent, to effective management and delivery on site.</p>

                      <p className="lg:w-1/2 lg:px-[2.5vw]">We&apos;re committed to ensuring every project is fit for purpose with a sustainable legacy. Our combined experience has seen us work with a diverse mix of commercial & private clients, residential developers, housing associations and local authorities, church groups, museums and cultural sites, universities and schools, as well as retail, care and health sectors.</p>
                    </div>

                    <div className="flex flex-wrap items-start">
                      <div className="w-full lg:w-[55%] mb-16 lg:mb-0 relative" ref={badgeRef}>
                        <div className="overflow-hidden rounded-xl relative">
                          <ImageScale image="/images/mission-03.jpg" w={1224} h={779} />
                        </div>
                        <div className="absolute bottom-[-60px] xl:bottom-[-100px] left-[5%] xl:left-[25%] w-[140px] xl:w-[175px] rotate-12">
                          <BadgeLightningIcon className="w-full" />
                        </div>
                      </div>

                      <div className="w-full lg:w-[45%] content text-xl leading-[1.28] xl:text-[27px] xl:leading-[1.28] flex">
                        <ol className="lg:mx-auto w-auto tabular-nums">
                          <li className="pb-1 lg:pb-2"><span className="inline-block text-sm/[1.28] xl:text-base translate-y-[-4%]">01</span> Concept Design</li>
                          <li className="pb-1 lg:pb-2"><span className="inline-block text-sm/[1.28] xl:text-base translate-y-[-4%]">02</span> Masterplanning</li>
                          <li className="pb-1 lg:pb-2"><span className="inline-block text-sm/[1.28] xl:text-base translate-y-[-4%]">03</span> Planning Process</li>
                          <li className="pb-1 lg:pb-2"><span className="inline-block text-sm/[1.28] xl:text-base translate-y-[-4%]">04</span> Techinical Design</li>
                          <li className="pb-1 lg:pb-2"><span className="inline-block text-sm/[1.28] xl:text-base translate-y-[-4%]">05</span> Contract Administration</li>
                          <li className="pb-1 lg:pb-2"><span className="inline-block text-sm/[1.28] xl:text-base translate-y-[-4%]">06</span> Visualisations</li>
                          <li className="pb-1 lg:pb-2"><span className="inline-block text-sm/[1.28] xl:text-base translate-y-[-4%]">07</span> On Site Assistance</li>
                          <li className="pb-1 lg:pb-2"><span className="inline-block text-sm/[1.28] xl:text-base translate-y-[-4%]">08</span> Heritage Statements</li>
                          <li className="pb-1 lg:pb-2"><span className="inline-block text-sm/[1.28] xl:text-base translate-y-[-4%]">09</span> Listed Building Consent</li>
                          <li className="pb-1 lg:pb-2"><span className="inline-block text-sm/[1.28] xl:text-base translate-y-[-4%]">10</span> Condition Survey</li>
                          <li className="pb-1 lg:pb-2"><span className="inline-block text-sm/[1.28] xl:text-base translate-y-[-4%]">11</span> Community Consultation</li>
                          <li className="pb-1 lg:pb-2"><span className="inline-block text-sm/[1.28] xl:text-base translate-y-[-4%]">12</span> Stakeholder Engagement</li>
                          <li className="pb-1 lg:pb-2"><span className="inline-block text-sm/[1.28] xl:text-base translate-y-[-4%]">13</span> Grant Funding Process</li>
                          <li className="pb-1 lg:pb-2"><span className="inline-block text-sm/[1.28] xl:text-base translate-y-[-4%]">14</span> Site Analysis</li>
                        </ol>
                      </div>
                    </div>
                  </div>
                </Container>
              </div>
            </m.article>
          </m.main>
        
          <m.div variants={fade}>
            <div className="overflow-hidden bg-off-white z-[10] relative">
              <div className="w-full relative overflow-hidden">
                <ImageScale image="/images/footer-02.jpg" w={2400} h={1345} />
              </div>
              <Footer />
            </div>
          </m.div>
        </m.div>
      </LazyMotion>
    </Layout>
  )
}
