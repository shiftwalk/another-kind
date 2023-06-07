import Layout from '@/components/layout'
import Footer from '@/components/footer'
import Container from '@/components/container'
import { fade, reveal } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import SunnyNoRaysIcon from "@/icons/sunny-no-rays.svg";
import SunnyIcon from "@/icons/sunny.svg";
import SquiggleTeamIcon from "@/icons/squiggle-team.svg";
import ImageScale from '@/components/image-scale'

export default function Team() {
  return (
    <Layout>
      <NextSeo title="Team" />

      <LazyMotion features={domAnimation}>
        <m.div
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <m.main className="pb-12 md:pb-16 xl:pb-24 pt-[90px] xl:pt-[103px]">
            <Container>
              <m.article variants={fade}>
                <div className="flex flex-wrap">
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

                        <div className="w-[95%] lg:w-[90%] content text-lg xl:text-xl max-w-[800px]">
                          <p>Our collaborative studio culture is centred around flexibility and wellbeing: putting people at the heart of everything that we do.</p>
                        </div>
                      </div>

                      <SquiggleTeamIcon className="w-[70%] absolute left-0 bottom-[-35vw] lg:bottom-[-10vw] xl:bottom-[-5vw] 2xl:bottom-[0] -translate-x-5" />
                    </div>
                  </div>

                  <div className="w-full lg:w-1/2 mb-5 lg:mb-0 relative order-1 lg:order-2">
                    <div className="w-[23%] max-w-[180px] rotate-12 aspect-square absolute bottom-5 left-5 lg:bottom-auto lg:top-[10%] lg:left-[-10%] z-10 rounded-full bg-yellow text-green p-3">
                      <SunnyIcon className="w-[100%] aspect-square" />
                    </div>
                    <div className="w-full relative overflow-hidden rounded-xl">
                      <ImageScale image="/images/team.jpg" w={1196} h={1321} p />
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap justify-center pt-[20vw] lg:pt-[14.5vw] 2xl:pt-[12.5vw] pb-[10vw] lg:pb-[6.25vw]">
                  <span className="block mb-8 overflow-hidden relative w-full text-center">
                    <m.span variants={reveal} className="block text-lg leading-none lg:text-xl lg:leading-none">A life-led company</m.span>
                  </span>

                  <span className="font-display block w-full md:w-[90%] lg:w-[85%] text-center text-[8vw] md:text-[6vw] lg:text-[4.2vw] leading-[0.9] md:leading-[0.9] lg:leading-[0.9] mb-10 lg:mb-16">We&rsquo;re a friendly, forward-thinking collective — an approachable <em>team</em> with a can-do attitude.</span>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-[20vw] lg:mb-[12.5vw] px-[10vw] lg:px-[8vw] gap-[6vw] lg:gap-[5vw]">
                  {Array.from(Array(9), (e, i) => {
                    return (
                      <div className="w-full lg:col-span-1 group" key={i}>
                        <div className="w-full relative overflow-hidden rounded-xl mb-8">
                          <div className="absolute inset-0 bg-orange text-yellow z-[10] p-8 flex items-center justify-center text-center translate-y-[101%] group-hover:translate-y-0 transition-transform ease-ak duration-[600ms]">
                            <span className="block font-display text-[5.2vw] md:text-[3vw] lg:text-[1.75vw] leading-[1.1] lg:leading-[1.1]">“Passionate about creating positive environments, Nilesh takes a methodical and caring approach to design and detail.”</span>
                          </div>
                          <ImageScale image={`/images/team/team-${i+1}.jpg`} w={388} h={510} />
                        </div>

                        <span className="block text-lg leading-none lg:text-xl lg:leading-none w-full text-center mb-2">Job Role</span>

                        <span className="font-display block w-full text-center text-[8.2vw] md:text-[5vw] lg:text-[3.2vw] xl:text-[2.8vw] leading-[0.9] md:leading-[0.9] lg:leading-[0.9] xl:leading-[0.9]">Member Name</span>
                      </div>
                    )
                  })}
                </div>
              </m.article>
            </Container>

            <div className="bg-green text-off-white flex flex-wrap mb-[20vw] lg:mb-[12.5vw]">
              <div className="w-full lg:w-[48%] relative">
                <div className="w-full relative overflow-hidden">
                  <ImageScale image="/images/team-2.jpg" w={1105} h={1501} />
                </div>
              </div>
              <div className="w-full lg:w-[52%] mb-3 lg:mb-0 relative p-5 flex flex-col">
                <h1 className="text-[16vw] lg:text-[9vw] leading-[0.9] lg:leading-[0.9] text-yellow w-[85%] md:w-[85%] lg:w-[100%] mb-[25vw] lg:mb-0">Life-led.<br/> social at heart.</h1>

                <div className="w-full lg:w-9/12 content text-base xl:text-lg mt-auto">
                  <p>Conservation is a passion. Our aim is to always preserve life in the places we shape where it&rsquo;s possible, and valuable. Stories. Memories. History. Breathing new life into old places is central to our approach.</p>
                  <p>Finding the unusual and remarkable in the places we conserve, then elevating and re-purposing the form and fabric that gave that place life to begin with. No life left behind. We have two RIBA Conservation & AABC accredited architects, with more of the team completing accreditations as we type.</p>
                </div>
              </div>
            </div>

            <Container>
              <div className="flex flex-wrap justify-center pb-[10vw] lg:pb-[6.25vw]">
                <span className="block mb-8 overflow-hidden relative w-full text-center">
                  <m.span variants={reveal} className="block text-lg leading-none lg:text-xl lg:leading-none">Want to join the team?</m.span>
                </span>

                <span className="font-display block w-full md:w-[90%] lg:w-[85%] text-center text-[8vw] md:text-[6vw] lg:text-[4.2vw] leading-[0.9] md:leading-[0.9] lg:leading-[0.9] mb-10 lg:mb-16">We&rsquo;re always on the lookout for <em>amazing</em> talent with a <em>passion</em> for building spaces with meaning.</span>

                <div className="w-full flex justify-center">
                  <div className="w-[30%] lg:w-[15%] 2xl:w-[12%] aspect-square bg-green text-yellow rounded-full flex items-center justify-center">
                    <div className="w-full text-center -mt-3 lg:-mt-5">
                      <SunnyNoRaysIcon className="w-[25px] lg:w-[33px] mx-auto mb-1 lg:mb-2" />
                      <span className="block font-display text-[5.3vw] lg:text-[2.5vw] leading-none lg:leading-none">Let&rsquo;s Talk!</span>
                    </div>
                  </div>
                </div>
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
