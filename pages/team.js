import Layout from '@/components/layout'
import Footer from '@/components/footer'
import Container from '@/components/container'
import { fade, reveal, revealLtr, revealTtb, scale } from '@/helpers/transitions'
import { LazyMotion, domMax, m, useScroll, useTransform } from 'framer-motion'
import { NextSeo } from 'next-seo'
import SunnyNoRaysIcon from "@/icons/sunny-no-rays.svg";
import SunnyIcon from "@/icons/sunny.svg";
import SquiggleTeamIcon from "@/icons/squiggle-team.svg";
import ArrowIcon from "@/icons/arrow.svg";
import ImageScale from '@/components/image-scale'
import Link from 'next/link'
import { MouseParallax } from 'react-just-parallax'
import { useContext, useEffect, useRef, useState } from 'react'
import { SplitTextHover } from '@/components/splitTextHover'
import SanityPageService from '@/services/sanityPageService'
import { teamQuery } from '@/helpers/queries'
import PortableText from "react-portable-text"
import SanityImageScale from '@/components/sanity-image-scale'
import { IntroContext } from '@/context/intro'

const pageService = new SanityPageService(teamQuery)

export default function Team(initialData) {
  const { data: { team }  } = pageService.getPreviewHook(initialData)()
  const [introContext, setIntroContext] = useContext(IntroContext);

  // const [currentImage, setCurrentImage] = useState(0);
  const scrollerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: scrollerRef,
    offset: ["-70%", "30%"]
  })

  const { scrollY } = useScroll()
  
  const rotate = useTransform(scrollY, [0, 1000], ['-20deg', '360deg'], { clamp: false })
  const moveY = useTransform(scrollYProgress,[0, 1],['0%', '-100%'],{ clamp: true })

  const draw = {
    initial: { pathLength: 0 },
    enter: { pathLength: 1, transition: { delay: 0.2, duration: 1, ease: [0.71,0,0.17,1] }},
  };

  useEffect(() => {
    setIntroContext(true)
  }, [setIntroContext]);
  
  // function nextImage() {
  //   setCurrentImage(currentImage == 2 ? 0 : currentImage + 1)
  // }

  // function prevImage() {
  //   setCurrentImage(currentImage == 0 ? 2 : currentImage - 1)
  // }
  
  return (
    <Layout>
      <NextSeo title={team.title} />

      <LazyMotion features={domMax}>
        <m.div
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <m.main className="pb-12 md:pb-16 xl:pb-24 pt-[70px] lg:pt-[95px] xl:pt-[103px]">
            <Container>
              <m.article variants={fade}>
                <div className="flex flex-wrap max-w-[1920px] mx-auto">
                  <div className="w-full lg:w-1/2 order-2 lg:order-1 relative mb-[30vw] lg:mb-0">
                    <div className="flex flex-wrap justify-center lg:pt-[7.5vw] h-full lg:px-5">
                      <div className="lg:w-[80%] lg:max-w-[720px] lg:translate-x-[-5%] xl:translate-x-[-10%] relative z-10">
                        <span className="font-mono text-center uppercase tracking-[11.5px] block w-[110px] lg:w-[140px] text-[50px] mb-6 lg:mb-10 translate-x-[-8%] mx-auto lg:mx-0 relative overflow-hidden">
                          <m.div variants={revealLtr} className="bg-off-white absolute inset-0"></m.div>
                          <svg className="w-full ml-1 lg:ml-2" viewBox="0 0 116 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.8203 41.3751C11.2591 41.4855 10.6804 41.4862 10.0842 41.3772C9.48468 41.2564 8.89454 41.0312 8.31376 40.7017C7.73298 40.3721 7.24076 39.9832 6.8371 39.5348C6.43018 39.0745 6.13017 38.5753 5.93707 38.0369C5.73417 37.4632 5.66194 36.8788 5.72037 36.2837C5.77126 35.6844 5.95505 35.1057 6.27175 34.5476C6.58845 33.9894 6.99098 33.5348 7.47934 33.1837C7.96016 32.8284 8.49888 32.5906 9.0955 32.4705C9.65666 32.3602 10.237 32.3654 10.8365 32.4862C11.4327 32.5952 12.0213 32.8144 12.602 33.144C13.1828 33.4735 13.6767 33.8684 14.0836 34.3286C14.4873 34.777 14.7856 35.2704 14.9787 35.8087C15.1816 36.3825 15.2576 36.969 15.2067 37.5683C15.1483 38.1633 14.9607 38.7399 14.644 39.2981C14.3273 39.8562 13.9286 40.313 13.4478 40.6683C12.9594 41.0194 12.4169 41.255 11.8203 41.3751ZM13.3656 38.5726C13.7593 37.8787 13.8104 37.1649 13.5188 36.4311C13.2272 35.6973 12.6477 35.0843 11.7803 34.5921C10.9129 34.1 10.0895 33.9169 9.31003 34.043C8.53056 34.1691 7.94396 34.5791 7.55022 35.273C7.15649 35.9669 7.10541 36.6808 7.39699 37.4145C7.68858 38.1483 8.26807 38.7613 9.13546 39.2535C10.0029 39.7456 10.8263 39.9287 11.6058 39.8026C12.3852 39.6766 12.9718 39.2666 13.3656 38.5726Z" fill="black"/>
                            <path d="M22.3191 29.0465C21.4881 29.8835 20.6005 30.3037 19.6562 30.3072C18.7118 30.2984 17.8088 29.8663 16.9471 29.011L12.9497 25.0427L14.1227 23.8611L18.0832 27.7926C18.6433 28.3486 19.1963 28.647 19.7422 28.688C20.2881 28.7166 20.7993 28.4909 21.2758 28.0109C21.7585 27.5247 21.9805 27.0118 21.9417 26.4723C21.9029 25.9206 21.6034 25.3667 21.0434 24.8107L17.0829 20.8791L18.2559 19.6975L22.2533 23.6657C23.1211 24.5271 23.5568 25.4301 23.5602 26.3744C23.5698 27.3126 23.1561 28.2033 22.3191 29.0465Z" fill="black"/>
                            <path d="M30.3398 17.9874L29.0388 18.7519L30.8709 21.8698L29.4353 22.7133L24.7036 14.6607L27.9224 12.7693C28.8495 12.2245 29.6947 12.0196 30.458 12.1545C31.2168 12.2819 31.8269 12.7382 32.2882 13.5232C32.6529 14.1438 32.7931 14.7505 32.7088 15.3431C32.6245 15.9358 32.3213 16.4811 31.7992 16.979L35.772 18.9899L34.1345 19.9521L30.3398 17.9874ZM26.864 15.0508L28.3139 17.5182L30.0186 16.5165C30.5271 16.2177 30.8544 15.8846 31.0005 15.5171C31.1497 15.1377 31.1079 14.7499 30.8751 14.3536C30.6378 13.9498 30.3231 13.7224 29.9309 13.6712C29.5387 13.62 29.0847 13.746 28.5688 14.0491L26.864 15.0508Z" fill="black"/>
                            <path d="M50.2748 10.9721L48.2269 11.262L48.7338 14.8426L47.0852 15.076L45.7761 5.8282L49.4726 5.30492C50.5373 5.1542 51.3969 5.28652 52.0513 5.70189C52.7044 6.10867 53.0948 6.76285 53.2225 7.66444C53.3501 8.56604 53.1529 9.30778 52.631 9.88967C52.1164 10.4618 51.331 10.8226 50.2748 10.9721ZM47.6252 7.01161L48.0264 9.84518L49.9841 9.56804C50.568 9.48539 50.9975 9.30197 51.2726 9.01779C51.555 8.7238 51.664 8.34927 51.5996 7.89418C51.534 7.4305 51.3296 7.10033 50.9864 6.90366C50.6433 6.707 50.1755 6.6506 49.583 6.73447L47.6252 7.01161Z" fill="black"/>
                            <path d="M59.4078 14.0175L60.3548 4.72572L66.6442 5.3667L66.4965 6.81612L61.8377 6.34132L61.6003 8.67074L65.5215 9.07037L65.3738 10.5198L61.4526 10.1202L61.1862 12.7343L65.845 13.2091L65.6973 14.6585L59.4078 14.0175Z" fill="black"/>
                            <path d="M71.896 14.752C71.6952 14.2165 71.5997 13.6457 71.6096 13.0397C71.6306 12.4285 71.756 11.8094 71.986 11.1825C72.2159 10.5556 72.519 10.0063 72.8952 9.53466C73.2826 9.05785 73.726 8.6801 74.2254 8.40143C74.7582 8.10729 75.3229 7.94031 75.9194 7.90048C76.5189 7.85251 77.12 7.93903 77.7224 8.16002C78.3249 8.38101 78.8393 8.70364 79.2657 9.12789C79.695 9.54401 80.0178 10.0365 80.234 10.6054C80.4348 11.1409 80.5247 11.7142 80.5037 12.3254C80.4939 12.9315 80.374 13.548 80.144 14.1749C79.9141 14.8018 79.6054 15.3537 79.2181 15.8305C78.8418 16.3021 78.404 16.6773 77.9046 16.956C77.3718 17.2501 76.8056 17.4212 76.2061 17.4691C75.6096 17.509 75.01 17.4184 74.4075 17.1974C73.8051 16.9764 73.2891 16.6578 72.8598 16.2417C72.4335 15.8175 72.1122 15.3209 71.896 14.752ZM74.9137 15.8174C75.6628 16.0921 76.3754 16.0256 77.0515 15.6177C77.7276 15.2099 78.2374 14.5378 78.5808 13.6015C78.9242 12.6652 78.9699 11.8229 78.7179 11.0746C78.4658 10.3263 77.9653 9.8148 77.2163 9.54005C76.4672 9.2653 75.7546 9.33185 75.0785 9.73969C74.4024 10.1475 73.8926 10.8196 73.5492 11.7559C73.2058 12.6922 73.1601 13.5345 73.4121 14.2828C73.6641 15.0311 74.1647 15.5426 74.9137 15.8174Z" fill="black"/>
                            <path d="M88.035 20.0982L86.339 18.9144L84.2691 21.8798L82.9038 20.9268L88.2496 13.268L91.3109 15.4048C92.1927 16.0203 92.7315 16.703 92.9272 17.453C93.1278 18.1959 92.9675 18.9406 92.4464 19.6873C91.9252 20.434 91.2753 20.8423 90.4967 20.9123C89.7303 20.9801 88.9097 20.7088 88.035 20.0982ZM88.7959 15.3944L87.1579 17.7411L88.7793 18.8728C89.2629 19.2103 89.7021 19.3688 90.0971 19.3484C90.5042 19.3258 90.8393 19.1261 91.1023 18.7492C91.3704 18.3652 91.4459 17.9843 91.3288 17.6065C91.2118 17.2287 90.908 16.8685 90.4173 16.526L88.7959 15.3944Z" fill="black"/>
                            <path d="M96.6678 33.1126L92.6387 28.5835L99.617 22.3755L100.724 23.6196L94.8339 28.8591L97.7564 32.1442L96.6678 33.1126Z" fill="black"/>
                            <path d="M99.3906 36.9984L107.585 32.5166L110.619 38.0632L109.34 38.7623L107.093 34.6537L105.039 35.7773L106.93 39.2354L105.652 39.9345L103.761 36.4764L101.455 37.7373L103.702 41.8459L102.424 42.545L99.3906 36.9984Z" fill="black"/>
                            </svg>

                        </span>

                        <div className="relative w-auto mb-5 lg:mb-10">
                          <h1 className="text-[15vw] lg:text-[9.8vw] xl:text-[9vw] 2xl:text-[150px] leading-[1] lg:leading-[0.85] xl:leading-[0.85] 2xl:leading-[0.85] mb-0 pb-0 block text-center lg:text-left">
                            <span className="block relative overflow-hidden">
                              <m.span variants={reveal} className="block">
                                <span className="block translate-y-[-10%]">
                                  It’s a team
                                </span>
                              </m.span>
                            </span>
                            <span className="block relative overflow-hidden">
                              <m.span variants={reveal} className="block">
                                <span className="block translate-y-[-35%] lg:translate-y-[-25%]">
                                  game.
                                </span>
                              </m.span>
                            </span>
                          </h1>
                        </div>

                        {team.heroText && (
                          <div className="w-[95%] lg:w-[90%] content text-base/[1.28] lg:text-lg/[1.28] xl:text-xl/[1.28] max-w-[800px] text-center lg:text-left relative">
                            <m.div variants={revealTtb} className="absolute inset-0 bg-gradient-to-b from-off-white via-off-white to-transparent via-[70%]"></m.div>
                            <p>{team.heroText}</p>
                          </div>
                        )}
                      </div>

                      {/* <SquiggleTeamIcon className="w-[70%] absolute left-0 bottom-[-40vw] lg:bottom-[-10vw] xl:bottom-[-5vw] 2xl:bottom-[0] -translate-x-5 z-10" /> */}

                      <m.svg className="w-[70%] absolute left-0 bottom-[-40vw] lg:bottom-[-10vw] xl:bottom-[-5vw] 2xl:bottom-[0] -translate-x-5 z-10" viewBox="0 0 750 316" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <m.path variants={draw} d="M11.8027 76.8723C36.5866 63.368 59.6574 47.1272 83.6404 32.4438C97.9678 24.1231 123.619 7.37066 140.327 11.7312C158.526 17.4043 155.011 50.976 153.743 65.9932C152.319 79.8534 151.14 93.7582 150.739 107.73C149.849 140.701 152.564 187.977 192.164 197.432C225.781 204.841 265.092 188.489 295.46 175.274C346.897 151.736 394.885 121.813 441.872 90.7993C453.53 83.2574 466.055 76.7388 478.647 70.7542C578.828 23.7449 678.987 26.9486 717.275 144.817C734.362 197.699 736.52 254.141 735.029 309.316" stroke="black" stroke-width="3"/>
                      </m.svg>

                    </div>
                  </div>

                  <div className="w-full lg:w-1/2 mb-16 lg:mb-0 relative order-1 lg:order-2">
                    <m.div variants={scale} transition={{ delay: 0.25, duration: 0.6, ease: [0.71,0,0.17,1] }} className="absolute bottom-[-55px] left-5 lg:bottom-auto lg:top-[10%] lg:left-[-10%] z-10">
                      <div className="motion-safe:animate-spin-slower">
                        <m.div style={{ rotateZ: rotate }} className="w-[115px] xl:w-[170px] rotate-12 aspect-square rounded-full bg-yellow text-green p-3">
                          <SunnyIcon className="w-[100%] aspect-square" />
                        </m.div>
                      </div>
                    </m.div>
                    <div className="w-full relative overflow-hidden rounded-xl">
                      <div className="aspect-[10/9] lg:aspect-[10/11]">
                        <SanityImageScale p invert heroOffset fill sizes="(max-width: 1024px) 100vw, 65vw" image={team.heroImage} />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap justify-center pt-[20vw] lg:pt-[7.8vw] pb-[7vw] lg:pb-[3.5vw]">
                  {team.quoteTitle && (
                    <span className="block mb-8 overflow-hidden relative w-full text-center">
                      <m.span variants={reveal} className="block text-base leading-[1.25] lg:text-xl lg:leading-[1.25]">{team.quoteTitle}</m.span>
                    </span>
                  )}
                  {team.quoteText && (
                    <span className="font-display block w-full md:w-[90%] lg:w-[85%] text-center text-[8vw] md:text-[6vw] lg:text-[4.2vw] leading-[1] md:leading-[0.9] lg:leading-[0.9] mb-10 lg:mb-16">We&rsquo;re a friendly, forward-thinking collective — an approachable <em>team</em> with a can-do attitude.</span>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-[20vw] lg:mb-[15vw] px-[10vw] lg:px-[8vw] gap-[12vw] lg:gap-[5vw] lg:gap-y-[6vw]">
                  {team.teamMembers.map((e, i) => {
                    let rotation = 'group-hover:rotate-[-3deg]'
                    let bgRotation = 'group-hover:rotate-[3deg]'
                    
                    if ((i + 1) % 1 == 0) {
                      rotation = 'lg:group-hover:rotate-[-3deg]'
                      bgRotation = 'lg:group-hover:rotate-[3deg]'
                    }

                    if ((i + 1) % 2 == 0) {
                      rotation = 'lg:group-hover:rotate-[3deg]'
                      bgRotation = 'lg:group-hover:rotate-[-3deg]'
                    }
                    return (
                      <div className="w-full lg:col-span-1 group relative" key={i}>
                        <div className={`absolute inset-0 bg-yellow z-[8] h-[77%] transition-transition ease-ak duration-[750ms] rounded-2xl delay-[100ms] lg:group-hover:delay-[0ms] ${bgRotation}`}></div>
                        
                        <div className={`w-full relative overflow-hidden rounded-xl mb-4 lg:mb-6 transition-transform ease-ak duration-[750ms] z-[9]`}>
                          <div className="absolute inset-0 bg-orange z-[9] lg:translate-y-[150%] lg:group-hover:translate-y-0 transition-transition ease-ak duration-[750ms] rounded-full scale-[1.8] delay-[100ms] lg:group-hover:rotate-45 lg:group-hover:delay-[0ms] hidden lg:block"></div>

                          <div className="absolute inset-0 text-yellow z-[10] p-8 items-center justify-center text-center opacity-0 lg:group-hover:opacity-100 transition-opacity ease-ak duration-[600ms] rounded-full hidden lg:flex">

                            <div className="w-full">
                              <div className="w-[33px] lg:w-[55px] mx-auto mb-0">
                                <SunnyNoRaysIcon className="w-full aspect-square mb-2 transition-transform ease-ak duration-[650ms] scale-0 lg:group-hover:scale-[1] lg:group-hover:rotate-[360deg]" />
                              </div>

                              {e.bio && (
                                <span className="font-display text-[5.2vw] md:text-[2.8vw] lg:text-[1.6vw] leading-[1.2] lg:leading-[1.2] flex flex-wrap overflow-hidden justify-center">
                                  “
                                  <SplitTextHover>
                                    {e.bio}
                                  </SplitTextHover>
                                  ”
                                </span>
                              )}
                            </div>
                          </div>
                          <div className="scale-[1] lg:group-hover:scale-[1.18] transition-all ease-ak duration-[850ms]">
                            <div className="aspect-[10/14]">
                              {e.image ? (
                              <SanityImageScale fill sizes="(max-width: 1024px) 100vw, 33vw" image={e.image} />
                              ) : (
                                <div className="w-full h-full inset-0 absolute bg-green"></div>
                              )}
                            </div>
                          </div>
                        </div>
                        
                        {e.role && (
                          <span className="block text-base leading-none lg:text-lg lg:leading-none w-full text-center mb-1 lg:mb-2">{e.role}</span>
                        )}

                        {e.name && (
                          <span className="font-display block w-full text-center text-[8.2vw] md:text-[5vw] lg:text-[3.2vw] xl:text-[2.8vw] leading-[0.9] md:leading-[0.9] lg:leading-[0.9] xl:leading-[0.9]">{e.name}</span>
                        )}
                      </div>
                    )
                  })}
                </div>
              </m.article>
            </Container>

            <div className="bg-green text-off-white flex flex-wrap mb-[20vw] lg:mb-[10vw]" ref={scrollerRef}>
              <div className="w-full lg:w-[48%] relative">
                <div className="w-full relative overflow-hidden">
                  <div className={`w-full relative overflow-hidden aspect-[10/13]`}>
                    <div className="opacity-0">
                      <SanityImageScale fill sizes="(max-width: 1024px) 100vw, 50vw" image={team.pulloutSectionImages[0]} />
                    </div>
                  </div>

                  <m.div className={`w-full absolute inset-0 z-[10]`} style={{y: moveY }}>
                    {team.pulloutSectionImages.map((e, i) => {
                      return (
                        <div className="w-full relative overflow-hidden aspect-[10/13]" key={i}>
                          <div className={`transition-transform ease-ak duration-[800ms]`}>
                            <SanityImageScale fill sizes="(max-width: 1024px) 100vw, 70vw" image={e} />
                          </div>
                        </div>
                      )
                    })}
                    {/* <div className="w-full relative overflow-hidden aspect-[10/13]">
                      <div className={`transition-transform ease-ak duration-[800ms]`}>
                        <ImageScale image="/images/team-cara-4.jpg" w={1105} h={1501} />
                      </div>
                    </div> */}
                    {/* <div className="w-full relative overflow-hidden aspect-[10/13]">
                      <div className={`transition-transform ease-ak duration-[800ms] ${currentImage == 3 ? 'scale-1' : 'scale-[1.3]' }`}>
                        <ImageScale image="/images/team-cara-4.jpg" w={1105} h={1501} />
                      </div>
                    </div> */}
                  </m.div>
                </div>
              </div>
              <div className="w-full lg:w-[52%] relative p-3 lg:p-5 flex flex-col">
                {team.pulloutSectionHeading && (
                  <h1 className="text-[15vw] lg:text-[9vw] leading-[0.82] lg:leading-[0.82] text-yellow w-[85%] md:w-[85%] lg:w-[90%] mb-[25vw] lg:mb-0">{team.pulloutSectionHeading}</h1>
                )}

                <div className="w-full lg:w-10/12 mt-auto max-w-[800px]">
                  <div className="content text-base/[1.28] xl:text-lg/[1.28] lg:mb-0">
                    <PortableText className="content" content={team.pulloutSectionText} />
                  </div>

                  {/* <div className="flex space-x-3">
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
                  </div> */}
                </div>
              </div>
            </div>

            <Container>
              <div className="flex flex-wrap justify-center pb-[0vw] lg:pb-[4.25vw]">
                {team.footerCtaTitle && (
                  <span className="block mb-8 overflow-hidden relative w-full text-center">
                    <m.span variants={reveal} className="block text-base leading-[1.25] lg:text-xl lg:leading-[1.25]">{team.footerCtaTitle}</m.span>
                  </span>
                )}

                {team.footerCtaText && (
                    <span className="font-display block w-full md:w-[90%] lg:w-[85%] text-center text-[8vw] md:text-[6vw] lg:text-[4.2vw] leading-[1] md:leading-[0.9] lg:leading-[0.9] mb-10 lg:mb-16"><PortableText content={team.footerCtaText} /></span>
                  )}

                <MouseParallax lerpEase={0.5} strength={-0.017} enableOnTouchDevice={false}>
                  <div className="w-full flex justify-center">
                    <Link scroll={false} href="/contact" className="w-[140px] xl:w-[180px] aspect-square bg-green text-yellow rounded-full flex items-center justify-center transition-translate ease-ak duration-[500ms] hover:scale-[1.2] relative overflow-hidden group">
                      <div className="absolute inset-0 bg-orange transition-transform ease-ak duration-[500ms] translate-y-full group-hover:translate-y-0 group-hover:rotate-[-80deg] group-hover:scale-[1.3] rounded-[50%]"></div>
                      <div className="w-full text-center -mt-3 lg:-mt-5 relative z-1">
                        <SunnyNoRaysIcon className="w-[33px] lg:w-[45px] mx-auto mb-0 transition-transform ease-ak duration-[500ms] group-hover:rotate-[360deg]" />
                        <span className="block font-display text-3xl xl:text-4xl leading-none lg:leading-none">Let&rsquo;s Talk!</span>
                      </div>
                    </Link>
                  </div>
                </MouseParallax>
              </div>
            </Container>
          </m.main>
        
          <m.div variants={fade}>
            <div className="overflow-hidden pt-[12vw] lg:pt-[5vw]">
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