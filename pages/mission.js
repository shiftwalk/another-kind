import Layout from '@/components/layout'
import Footer from '@/components/footer'
import Container from '@/components/container'
import { fade, reveal, scale } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m, useScroll, useTransform, AnimatePresence} from 'framer-motion'
import { NextSeo } from 'next-seo'
import SunnyNoRaysIcon from "@/icons/sunny-no-rays.svg";
import BadgeLightningIcon from "@/icons/badge-lightning.svg"
import ManifestoBadgeIcon from "@/icons/manifesto-badge.svg";
import ImageScale from '@/components/image-scale'
import HeroMission from '@/components/hero-mission'
import Link from 'next/link'
import { useRef, useState } from 'react'

export default function Mission() {
  const badgeRef = useRef(null)
  const [manifestoOpen, setManifestoOpen] = useState(false);

  // const { scrollYProgress } = useScroll({
  //   target: badgeRef,
  //   offset: ["start end", "end start"]
  // })

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
              <AnimatePresence>
                {manifestoOpen && (
                  <>
                    <m.button
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.7 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.6, ease: [0.83, 0, 0.17, 1]}}
                      className="fixed inset-0 bg-black  z-[1000] outline-none border-none"
                      key="manifestobg"
                      onClick={() => setManifestoOpen(manifestoOpen ? false : true)}
                    >
                    </m.button>
                    <m.div
                      initial={{ y: '100%' }}
                      animate={{ y: 0 }}
                      exit={{ y: '100%' }}
                      transition={{ duration: 0.6, ease: [0.83, 0, 0.17, 1]}}
                      className="fixed bottom-0 left-0 right-0 bg-off-white z-[1000] p-5"
                      key="manifesto"
                    >
                      <span className="font-display block w-full text-[12.5vw] md:text-[10vw] lg:text-[8vw] leading-[0.9] md:leading-[0.9] lg:leading-[0.9] mb-[8vw]">What we believe in.</span>
                      
                      <div className="flex space-x-5">
                        <div className="w-1/2 lg:w-1/3 bg-orange text-yellow rounded-xl p-5">
                          <span className="font-display block w-full text-[10.2vw] md:text-[7.5vw] lg:text-[8vw] xl:text-[10vw] 2xl:text-[170px] leading-[0] md:leading-[0] lg:leading-[0] xl:leading-[0] mb-[20vw] lg:mb-[15vw] xl:mb-[200px] translate-x-[2%] translate-y-[20%]"><em>1</em></span>

                          <div className="mt-auto">
                            <span className="font-display block w-[90%] lg:w-[75%] text-[6.5vw] md:text-[5vw] lg:text-[3.5vw] xl:text-[4.5vw] leading-[0.9] md:leading-[0.9] lg:leading-[0.9] xl:leading-[0.9] mb-8">Putting people first.</span>

                            <div className="w-full content text-sm md:text-base xl:text-lg">
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse posuere sollicitudin mauris, at scelerisque lorem pulvinar et. Mauris iaculis auctor imperdiet.</p>
                            </div>
                          </div>
                        </div>
                        <div className="w-1/2 lg:w-1/3 bg-blue text-green rounded-xl p-5">
                          <span className="font-display block w-full text-[10.2vw] md:text-[7.5vw] lg:text-[8vw] xl:text-[10vw] 2xl:text-[170px] leading-[0] md:leading-[0] lg:leading-[0] xl:leading-[0] mb-[20vw] lg:mb-[15vw] xl:mb-[200px] translate-x-[2%] translate-y-[20%]"><em>2</em></span>

                          <div className="mt-auto">
                            <span className="font-display block w-[90%] lg:w-[75%] text-[6.5vw] md:text-[5vw] lg:text-[3.5vw] xl:text-[4.5vw] leading-[0.9] md:leading-[0.9] lg:leading-[0.9] xl:leading-[0.9] mb-8">Making a difference.</span>

                            <div className="w-full content text-sm md:text-base xl:text-lg">
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse posuere sollicitudin mauris, at scelerisque lorem pulvinar et. Mauris iaculis auctor imperdiet.</p>
                            </div>
                          </div>
                        </div>
                        <div className="w-1/2 lg:w-1/3 bg-green text-blue rounded-xl p-5">
                          <span className="font-display block w-full text-[10.2vw] md:text-[7.5vw] lg:text-[8vw] xl:text-[10vw] 2xl:text-[170px] leading-[0] md:leading-[0] lg:leading-[0] xl:leading-[0] mb-[20vw] lg:mb-[15vw] xl:mb-[200px] translate-x-[2%] translate-y-[20%]"><em>3</em></span>

                          <div className="mt-auto">
                            <span className="font-display block w-[90%] lg:w-[75%] text-[6.5vw] md:text-[5vw] lg:text-[3.5vw] xl:text-[4.5vw] leading-[0.9] md:leading-[0.9] lg:leading-[0.9] xl:leading-[0.9] mb-8">Great client experiences.</span>

                            <div className="w-full content text-sm md:text-base xl:text-lg">
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse posuere sollicitudin mauris, at scelerisque lorem pulvinar et. Mauris iaculis auctor imperdiet.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </m.div>
                  </>
                )}
              </AnimatePresence>

              <m.button
                whileHover={{ scale: 1.15, transition:{ duration: 0.6, ease: [0.83, 0, 0.17, 1]} }}
                onClick={() => setManifestoOpen(manifestoOpen ? false : true)}
                style={{ x: moveX, y: moveY, rotate: rotate  }}
                className="fixed w-[30%] lg:w-[10vw] max-w-[180px] bottom-5 right-5 z-[100] hidden lg:block outline-none border-none"
              >
                <ManifestoBadgeIcon className="w-full" />
              </m.button>
              
              {/* Fake */}
              <div className="top-0 left-0 w-full h-[300dvh] fixed inset-0 z-[10] bg-none pointer-events-none" ref={ref}></div>

              <HeroMission />

              <div className="relative bg-off-white mt-[300dvh] z-[10]">
                <Container>
                  <div className="flex flex-wrap justify-center pt-[20vw] lg:pt-[12.5vw] mb-[20vw] lg:mb-[12.5vw]">
                    <span className="block mb-8 overflow-hidden relative w-full text-center">
                      <m.span variants={reveal} className="block text-lg leading-none lg:text-xl lg:leading-none">Our Mission.</m.span>
                    </span>

                    <span className="font-display block w-full md:w-[90%] lg:w-[85%] text-center text-[8vw] md:text-[6vw] lg:text-[4.2vw] leading-[0.9] md:leading-[0.9] lg:leading-[0.9]">
                      It&apos;s the <em>beautiful</em> alchemy of space and colliding that makes a space, a place. We make grand plans for them to come together, creating progressive, sustainable, life-affirming places. Great places designed for life.</span>
                  </div>
                </Container>

                <div className="bg-green text-off-white flex flex-wrap mb-[20vw] lg:mb-[12.5vw]">
                  <div className="w-full lg:w-[52%] mb-3 lg:mb-0 relative p-5 flex flex-col">
                    <h1 className="text-[16vw] lg:text-[9vw] leading-[0.9] lg:leading-[0.9] text-yellow w-[85%] md:w-[75%] lg:w-[85%] mb-[25vw] lg:mb-0">Sustainable as standard.</h1>

                    <div className="w-full lg:w-9/12 content text-base xl:text-lg mt-auto">
                      <p>We create for positive, enduring impact. Making sustainability a first thought is a no brainer. The future depends on it. Sustainability for main, not as an optional dessert. We look at how everything we do preserves, impacts, interacts with and inspires life. Commercially realistic. Future focused. Sustainable as standard.</p>
                      
                      <p>We have a passionate bunch of accredited Passive House Designers at Anotherkind, with more of the team on track to complete the qualification. Also bolstering our team is a retrofit specialist, who brings a wealth of sustainability consultant experience and knowledge to all of our projects.</p>
                    </div>
                  </div>
                  <div className="w-full lg:w-[48%] relative">
                    <div className="w-full relative overflow-hidden">
                      <div className="absolute inset-0 z-10 flex items-center justify-center">
                        <div className="w-[33%] lg:w-[26%] aspect-square bg-yellow text-green rounded-full flex items-center justify-center">
                          <div className="w-full text-center -mt-3 lg:-mt-5">
                            <SunnyNoRaysIcon className="w-[25px] lg:w-[33px] mx-auto mb-1 lg:mb-2" />
                            <span className="block font-display text-[5.3vw] lg:text-[2.5vw] leading-none lg:leading-none">See Work!</span>
                          </div>
                        </div>
                      </div>
                      <ImageScale image="/images/mission-02.jpg" w={900} h={1224} />
                    </div>
                  </div>
                </div>

                <Container>
                  <div className="flex flex-wrap justify-center mb-[20vw] lg:mb-[12.5vw]">
                    <span className="block text-lg leading-none lg:text-xl lg:leading-none w-full text-center mb-3 lg:mb-0">Creating new stories.</span>

                    <span className="font-display block w-full md:w-[90%] lg:w-[85%] text-center text-[12.5vw] md:text-[10vw] lg:text-[8vw] leading-[0.9] md:leading-[0.9] lg:leading-[0.9] mb-8 lg:mb-10">Sectors we serve.</span>

                    <div className="content text-lg lg:text-xl w-[90%] lg:w-[45%] mx-auto text-center">
                      <p>We&apos;re passionate about architecture that is appropriate and accessible, woven comfortably into their setting, respecting local character and celebrating community.</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap mb-[20vw] lg:mb-[12.5vw] px-[10vw] lg:px-[8vw] lg:space-x-[5vw]">
                    <Link href="/" className="w-full lg:flex-1 mb-12 lg:mb-0 group">
                      <div className="w-full relative overflow-hidden rounded-xl mb-8">
                        <div className="absolute inset-0 bg-orange text-yellow z-[10] p-8 flex items-center justify-center text-center translate-y-[101%] group-hover:translate-y-0 transition-transform ease-ak duration-[600ms]">
                          <span className="block font-display text-[5.2vw] lg:text-[1.75vw] leading-[1.1] lg:leading-[1.1]">Our Conservation Accreditations are the cornerstone of our practice, enabling us to manage complex repairs, alterations and specialist grant aided works. It also means we are adept at finding new uses for old buildings, looking for ways to recycle rather than demolish, or retrofit for the future.</span>
                        </div>
                        <ImageScale image="/images/home-02.jpg" w={736} h={1001} />
                      </div>
                      
                      <span className="block text-lg leading-none lg:text-xl lg:leading-none w-full text-center mb-2">01</span>

                      <span className="font-display block w-full text-center text-[8.2vw] md:text-[5vw] lg:text-[3.2vw] xl:text-[2.8vw] leading-[0.9] md:leading-[0.9] lg:leading-[0.9] xl:leading-[0.9] mb-3">Conservation</span>

                      <span className="block text-lg leading-[1.125] lg:text-xl lg:leading-[1.125] w-full text-center">Finding beauty in the imperfect</span>
                    </Link>

                    <Link href="/" className="w-full lg:flex-1 mb-12 lg:mb-0 group">
                      <div className="w-full relative overflow-hidden rounded-xl mb-8">
                        <div className="absolute inset-0 bg-orange text-yellow z-[10] p-8 flex items-center justify-center text-center translate-y-[101%] group-hover:translate-y-0 transition-transform ease-ak duration-[600ms]">
                          <span className="block font-display text-[5.2vw] lg:text-[1.75vw] leading-[1.1] lg:leading-[1.1]">Our Conservation Accreditations are the cornerstone of our practice, enabling us to manage complex repairs, alterations and specialist grant aided works. It also means we are adept at finding new uses for old buildings, looking for ways to recycle rather than demolish, or retrofit for the future.</span>
                        </div>
                        <ImageScale image="/images/home-03.jpg" w={736} h={1001} />
                      </div>

                      <span className="block text-lg leading-[1.125] lg:text-xl lg:leading-[1.125] w-full text-center mb-2">02</span>

                      <span className="font-display block w-full text-center text-[8.2vw] md:text-[5vw] lg:text-[3.2vw] xl:text-[2.8vw] leading-[0.9] md:leading-[0.9] lg:leading-[0.9] xl:leading-[0.9] mb-3">Commercial</span>

                      <span className="block text-lg leading-[1.125] lg:text-xl lg:leading-[1.125] w-full text-center">Finding beauty in the imperfect</span>
                    </Link>

                    <Link href="/" className="w-full lg:flex-1 mb-12 lg:mb-0 group">
                      <div className="w-full relative overflow-hidden rounded-xl mb-8">
                        <div className="absolute inset-0 bg-orange text-yellow z-[10] p-8 flex items-center justify-center text-center translate-y-[101%] group-hover:translate-y-0 transition-transform ease-ak duration-[600ms]">
                          <span className="block font-display text-[5.2vw] lg:text-[1.75vw] leading-[1.1] lg:leading-[1.1]">Our Conservation Accreditations are the cornerstone of our practice, enabling us to manage complex repairs, alterations and specialist grant aided works. It also means we are adept at finding new uses for old buildings, looking for ways to recycle rather than demolish, or retrofit for the future.</span>
                        </div>

                        <ImageScale image="/images/home-04.jpg" w={736} h={1001} />
                      </div>

                      <span className="block text-lg leading-[1.125] lg:text-xl lg:leading-[1.125] w-full text-center mb-2">03</span>

                      <span className="font-display block w-full text-center text-[8.2vw] md:text-[5vw] lg:text-[3.2vw] xl:text-[2.8vw] leading-[0.9] md:leading-[0.9] lg:leading-[0.9] xl:leading-[0.9] mb-3">Residential</span>

                      <span className="block text-lg leading-[1.125] lg:text-xl lg:leading-[1.125] w-full text-center">Finding beauty in the imperfect</span>
                    </Link>
                  </div>
                </Container>

                <div className="bg-yellow text-black flex flex-wrap mb-[20vw] lg:mb-[12.5vw]">
                  <div className="w-full lg:w-[48%] relative">
                    <div className="w-full relative overflow-hidden">
                      <div className="absolute inset-0 z-10 flex items-center justify-center">
                        <div className="w-[33%] lg:w-[26%] aspect-square bg-yellow text-orange rounded-full flex items-center justify-center">
                          <div className="w-full text-center -mt-3 lg:-mt-5">
                            <SunnyNoRaysIcon className="w-[25px] lg:w-[33px] mx-auto mb-1 lg:mb-2" />
                            <span className="block font-display text-[5.3vw] lg:text-[2.5vw] leading-none lg:leading-none">See Work!</span>
                          </div>
                        </div>
                      </div>
                      <ImageScale image="/images/mission-04.jpg" w={1104} h={1501} />
                    </div>
                  </div>
                  <div className="w-full lg:w-[52%] mb-3 lg:mb-0 relative p-5 flex flex-col">
                    <h1 className="text-[16vw] lg:text-[9vw] leading-[0.9] lg:leading-[0.9] text-orange w-[85%] md:w-[75%] lg:w-[85%] mb-[25vw] lg:mb-0">Conserve and protect.</h1>

                    <div className="w-full lg:w-9/12 content text-base xl:text-lg mt-auto">
                      <p>We create for positive, enduring impact. Making sustainability a first thought is a no brainer. The future depends on it. Sustainability for main, not as an optional dessert. We look at how everything we do preserves, impacts, interacts with and inspires life. Commercially realistic. Future focused. Sustainable as standard.</p>
                      
                      <p>We have a passionate bunch of accredited Passive House Designers at Anotherkind, with more of the team on track to complete the qualification. Also bolstering our team is a retrofit specialist, who brings a wealth of sustainability consultant experience and knowledge to all of our projects.</p>
                    </div>
                  </div>
                </div>

                <Container className="lg:px-[5vw]">
                  <div className="pb-[20vw] lg:pb-[12.5vw]">
                    <span className="block text-lg leading-none lg:text-xl lg:leading-none w-full mb-3 lg:mb-0">Overview.</span>

                    <span className="font-display block w-full text-[12.5vw] md:text-[10vw] lg:text-[8vw] leading-[0.9] md:leading-[0.9] lg:leading-[0.9] mb-8 lg:mb-24">Services we supply.</span>

                    <div className="content text-lg lg:text-xl w-[90%] lg:flex lg:flex-wrap lg:mx-[-2.5vw] mb-8 lg:mb-24">
                      <p className="lg:w-1/2 lg:px-[2.5vw]">We&apos;re flexible in how we work, and on-hand as much or as little as you need. Following the RIBA Plan of Work, we offer full architectural services from inception to completion, guiding you through the process every step of the way: from early concepts, through planning permissions and building regulations consent, to effective management and delivery on site.</p>

                      <p className="lg:w-1/2 lg:px-[2.5vw]">We&apos;re committed to ensuring every project is fit for purpose with a sustainable legacy. Our combined experience has seen us work with a diverse mix of commercial & private clients, residential developers, housing associations and local authorities, church groups, museums and cultural sites, universities and schools, as well as retail, care and health sectors.</p>
                    </div>

                    <div className="flex flex-wrap items-start">
                      <div className="w-full lg:w-[55%] mb-16 lg:mb-0 relative" ref={badgeRef}>
                        <div className="overflow-hidden rounded-xl relative">
                          <ImageScale image="/images/mission-03.jpg" w={1224} h={779} />
                        </div>
                        <m.div style={{ rotate: rotateBadge }} className="absolute bottom-[-60px] xl:bottom-[-100px] left-[5%] xl:left-[25%] w-[120px] xl:w-[200px]">
                          <BadgeLightningIcon className="w-full" />
                        </m.div>
                      </div>

                      <div className="w-full lg:w-[45%] content text-2xl xl:text-3xl flex">
                        <ol className="lg:mx-auto w-auto list-decimal list-inside">
                          <li className="pb-1 lg:pb-2">Concept Design</li>
                          <li className="pb-1 lg:pb-2">Masterplanning</li>
                          <li className="pb-1 lg:pb-2">Planning Process</li>
                          <li className="pb-1 lg:pb-2">Techinical Design</li>
                          <li className="pb-1 lg:pb-2">Contract Administration</li>
                          <li className="pb-1 lg:pb-2">Visualisations</li>
                          <li className="pb-1 lg:pb-2">On Site Assistance</li>
                          <li className="pb-1 lg:pb-2">Heritage Statements</li>
                          <li className="pb-1 lg:pb-2">Listed Building Consent</li>
                          <li className="pb-1 lg:pb-2">Condition Survey</li>
                          <li className="pb-1 lg:pb-2">Community Consultation</li>
                          <li className="pb-1 lg:pb-2">Stakeholder Engagement</li>
                          <li className="pb-1 lg:pb-2">Grant Funding Process</li>
                          <li className="pb-1 lg:pb-2">Site Analysis</li>
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
