import Layout from '@/components/layout'
import Footer from '@/components/footer'
import Container from '@/components/container'
import { fade, reveal } from '@/helpers/transitions'
import { LazyMotion, domMax, m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import SunnyNoRaysIcon from "@/icons/sunny-no-rays.svg";
import SunnyIcon from "@/icons/sunny.svg";
import SquiggleTeamIcon from "@/icons/squiggle-team.svg";
import ArrowIcon from "@/icons/arrow.svg";
import ImageScale from '@/components/image-scale'
import Link from 'next/link'
import { MouseParallax } from 'react-just-parallax'
import { useState } from 'react'
import { SplitTextHover } from '@/components/splitTextHover'

export default function Team() {
  const [currentImage, setCurrentImage] = useState(0);
  
  function nextImage() {
    setCurrentImage(currentImage == 2 ? 0 : currentImage + 1)
  }

  function prevImage() {
    setCurrentImage(currentImage == 0 ? 2 : currentImage - 1)
  }
  
  return (
    <Layout>
      <NextSeo title="Team" />

      <LazyMotion features={domMax}>
        <m.div
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <m.main className="pb-12 md:pb-16 xl:pb-24 pt-[90px] xl:pt-[103px]">
            <Container>
              <m.article variants={fade}>
                <div className="flex flex-wrap max-w-[1920px] mx-auto">
                  <div className="w-full lg:w-1/2 order-2 lg:order-1 relative mb-[30vw] lg:mb-0">
                    <div className="flex flex-wrap lg:justify-center lg:pt-[7.5vw] h-full lg:px-5">
                      <div className="lg:w-[80%] lg:max-w-[720px] lg:translate-x-[-5%] xl:translate-x-[-10%] relative z-10">
                        <span className="font-mono text-center uppercase tracking-[11.5px] block w-[110px] lg:w-[140px] text-[47px] mb-6 lg:mb-10 translate-x-[-8%]">
                          <svg className="w-full" viewBox="0 0 500 140">
                            <path id="curve" d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97" fill="transparent" />
                            <text>
                              <textPath href="#curve">
                                Our People
                              </textPath>
                            </text>
                          </svg>
                        </span>

                        <div className="relative w-auto mb-8 lg:mb-10">
                          <h1 className="text-[15vw] lg:text-[9.8vw] xl:text-[9vw] 2xl:text-[150px] leading-[0.85] lg:leading-[0.85] xl:leading-[0.85] 2xl:leading-[0.85] mb-0 pb-0 block">
                            <span className="block relative overflow-hidden">
                              <m.span variants={reveal} className="block">
                                <span className="block translate-y-[-20%]">It&rsquo;s a team</span>
                              </m.span>
                            </span>
                            <span className="block relative overflow-hidden">
                              <m.span variants={reveal} className="block">
                                <span className="block translate-y-[-30%]">game.</span>
                              </m.span>
                            </span>
                          </h1>
                        </div>

                        <div className="w-[95%] lg:w-[90%] content text-lg/[1.28] xl:text-xl/[1.28] max-w-[800px]">
                          <p>Our collaborative studio culture is centred around flexibility and wellbeing: putting people at the heart of everything that we do.</p>
                        </div>
                      </div>

                      <SquiggleTeamIcon className="w-[70%] absolute left-0 bottom-[-35vw] lg:bottom-[-10vw] xl:bottom-[-5vw] 2xl:bottom-[0] -translate-x-5" />
                    </div>
                  </div>

                  <div className="w-full lg:w-1/2 mb-5 lg:mb-0 relative order-1 lg:order-2">
                    <div className="w-[120px] xl:w-[170px] rotate-12 aspect-square absolute bottom-5 left-5 lg:bottom-auto lg:top-[10%] lg:left-[-10%] z-10 rounded-full bg-yellow text-green p-3">
                      <SunnyIcon className="w-[100%] aspect-square" />
                    </div>
                    <div className="w-full relative overflow-hidden rounded-xl">
                      <ImageScale image="/images/team.jpg" w={1196} h={1321} p />
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap justify-center pt-[20vw] lg:pt-[7.8vw] pb-[10vw] lg:pb-[6.25vw]">
                  <span className="block mb-8 overflow-hidden relative w-full text-center">
                    <m.span variants={reveal} className="block text-lg leading-none lg:text-xl lg:leading-none">A life-led company</m.span>
                  </span>

                  <span className="font-display block w-full md:w-[90%] lg:w-[85%] text-center text-[8vw] md:text-[6vw] lg:text-[4.2vw] leading-[0.9] md:leading-[0.9] lg:leading-[0.9] mb-10 lg:mb-16">We&rsquo;re a friendly, forward-thinking collective — an approachable <em>team</em> with a can-do attitude.</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-[20vw] lg:mb-[10vw] px-[10vw] lg:px-[8vw] gap-[6vw] lg:gap-[5vw]">
                  {Array.from(Array(9), (e, i) => {
                    return (
                      <div className="w-full lg:col-span-1 group" key={i}>
                        <div className="w-full relative overflow-hidden rounded-xl mb-8">
                          <div className="absolute inset-0 bg-orange z-[9] translate-y-[150%] group-hover:translate-y-0 transition-transition ease-ak duration-[750ms] rounded-full scale-[1.8] group-hover:rotate-45 delay-[100ms] group-hover:delay-[0ms]"></div>

                          <div className="absolute inset-0 text-yellow z-[10] p-8 flex items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity ease-ak duration-[600ms] rounded-full">

                            <div className="w-full">
                              <div className="w-[42px] mb-4 mx-auto">
                                <SunnyNoRaysIcon className="w-full aspect-square mb-2 transition-transform ease-ak duration-[650ms] scale-0 group-hover:scale-[1] group-hover:rotate-[360deg]" />
                              </div>
                            
                              <span className="font-display text-[5.2vw] md:text-[3vw] lg:text-[1.75vw] leading-[1.1] lg:leading-[1.1] flex flex-wrap overflow-hidden justify-center">
                                <SplitTextHover>
                                  “Passionate about creating positive environments, Nilesh takes a methodical and caring approach to design and detail.”
                                </SplitTextHover>
                              </span>
                            </div>
                          </div>
                          <div className="scale-[1] group-hover:scale-[1.25] transition-all ease-ak duration-[1000ms]">
                            <ImageScale image={`/images/team/team-${i+1}.jpg`} w={388} h={510} />
                          </div>
                        </div>

                        <span className="block text-lg leading-none lg:text-xl lg:leading-none w-full text-center mb-2">Job Role</span>

                        <span className="font-display block w-full text-center text-[8.2vw] md:text-[5vw] lg:text-[3.2vw] xl:text-[2.8vw] leading-[0.9] md:leading-[0.9] lg:leading-[0.9] xl:leading-[0.9]">Member Name</span>
                      </div>
                    )
                  })}
                </div>
              </m.article>
            </Container>

            <div className="bg-green text-off-white flex flex-wrap mb-[20vw] lg:mb-[10vw]">
              <div className="w-full lg:w-[48%] relative">
                <div className="w-full relative overflow-hidden">
                  <div className={`w-full relative overflow-hidden aspect-[10/13]`}>
                    <div className="opacity-0">
                      <ImageScale image="/images/team-cara-1.jpg" w={1105} h={1501} />
                    </div>
                  </div>

                  <div className={`w-full absolute inset-0 z-[10] transition-transform ease-ak duration-[600ms] ${ currentImage == 0 && 'translate-y-[0%]'} ${ currentImage == 1 && 'translate-y-[-100%]'} ${ currentImage == 2 && 'translate-y-[-200%]'} ${ currentImage == 3 && 'translate-y-[-300%]'} `}>
                    <div className="w-full relative overflow-hidden aspect-[10/13]">
                      <div className={`transition-transform ease-ak duration-[800ms] ${currentImage == 0 ? 'scale-1' : 'scale-[1.3]' }`}>
                        <ImageScale image="/images/team-cara-2.jpg" w={1105} h={1501} />
                      </div>
                    </div>
                    <div className="w-full relative overflow-hidden aspect-[10/13]">
                      <div className={`transition-transform ease-ak duration-[800ms] ${currentImage == 1 ? 'scale-1' : 'scale-[1.3]' }`}>
                        <ImageScale image="/images/team-cara-3.jpg" w={1105} h={1501} />
                      </div>
                    </div>
                    <div className="w-full relative overflow-hidden aspect-[10/13]">
                      <div className={`transition-transform ease-ak duration-[800ms] ${currentImage == 2 ? 'scale-1' : 'scale-[1.3]' }`}>
                        <ImageScale image="/images/team-cara-4.jpg" w={1105} h={1501} />
                      </div>
                    </div>
                    {/* <div className="w-full relative overflow-hidden aspect-[10/13]">
                      <div className={`transition-transform ease-ak duration-[800ms] ${currentImage == 3 ? 'scale-1' : 'scale-[1.3]' }`}>
                        <ImageScale image="/images/team-cara-4.jpg" w={1105} h={1501} />
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-[52%] mb-3 lg:mb-0 relative p-5 flex flex-col">
                <h1 className="text-[16vw] lg:text-[9vw] leading-[0.82] lg:leading-[0.82] text-yellow w-[85%] md:w-[85%] lg:w-[100%] mb-[25vw] lg:mb-0">Life-led.<br/> social at heart.</h1>

                <div className="w-full lg:w-10/12 mt-auto max-w-[800px]">
                  <div className="content text-base/[1.28] xl:text-lg/[1.28] mb-5">
                    <p>Conservation is a passion. Our aim is to always preserve life in the places we shape where it&rsquo;s possible, and valuable. Stories. Memories. History. Breathing new life into old places is central to our approach.</p>
                    <p>Finding the unusual and remarkable in the places we conserve, then elevating and re-purposing the form and fabric that gave that place life to begin with. No life left behind. We have two RIBA Conservation & AABC accredited architects, with more of the team completing accreditations as we type.</p>
                  </div>

                  <div className="flex space-x-3">
                    <button onClick={prevImage} className={`w-[50px] xl:w-[60px] h-[50px] xl:h-[60px] transition-colors ease-ak duration-[350ms] text-blue p-[10px] flex items-center justify-center rounded-full border border-blue relative overflow-hidden outline-none hover:outline-none focus:outline-none group`}>
                      <div className="absolute z-[10] inset-0 transition-transform ease-ak duration-[400ms] bg-yellow text-green translate-x-[100%] group-hover:translate-x-0 flex items-center justify-center p-[10px]">
                        <ArrowIcon className="w-full rotate-180" />
                      </div>
                      <ArrowIcon className="w-full rotate-180 transition-translate ease-ak duration-[400ms] group-hover:translate-x-[-150%]" />
                    </button>

                    <button onClick={nextImage} className={`w-[50px] xl:w-[60px] h-[50px] xl:h-[60px] transition-colors ease-ak duration-[350ms] text-blue p-[10px] flex items-center justify-center rounded-full border border-blue relative overflow-hidden outline-none hover:outline-none focus:outline-none group`}>
                      <div className="absolute z-[10] inset-0 transition-transform ease-ak duration-[400ms] bg-yellow text-green translate-x-[-100%] group-hover:translate-x-0 flex items-center justify-center p-[10px]">
                        <ArrowIcon className="w-full" />
                      </div>

                      <ArrowIcon className="w-full transition-translate ease-ak duration-[400ms] group-hover:translate-x-[150%]" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <Container>
              <div className="flex flex-wrap justify-center pb-[10vw] lg:pb-[6.25vw]">
                <span className="block mb-8 overflow-hidden relative w-full text-center">
                  <m.span variants={reveal} className="block text-lg leading-none lg:text-xl lg:leading-none">Want to join the team?</m.span>
                </span>

                <span className="font-display block w-full md:w-[90%] lg:w-[85%] text-center text-[8vw] md:text-[6vw] lg:text-[4.2vw] leading-[0.9] md:leading-[0.9] lg:leading-[0.9] mb-10 lg:mb-16">We&rsquo;re always on the lookout for <em>amazing</em> talent with a <em>passion</em> for building spaces with meaning.</span>

                <MouseParallax lerpEase={0.5} strength={-0.017} enableOnTouchDevice={false}>
                  <div className="w-full flex justify-center">
                    <Link href="/contact" className="w-[140px] xl:w-[180px] aspect-square bg-green text-yellow rounded-full flex items-center justify-center transition-translate ease-ak duration-[500ms] hover:scale-[1.2] relative overflow-hidden group">
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
