import Layout from '@/components/layout'
import Footer from '@/components/footer'
import Container from '@/components/container'
import { fade, reveal, revealLtr, revealTtb, scale } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m, useScroll, useTransform } from 'framer-motion'
import { NextSeo } from 'next-seo'
import SunnyNoRaysIcon from "@/icons/sunny-no-rays.svg";
import SunnyIcon from "@/icons/sunny.svg";
import ImageScale from '@/components/image-scale'
import Link from 'next/link'
import { MouseParallax } from 'react-just-parallax'
import { projectsLandingQuery } from '@/helpers/queries'
import SanityPageService from '@/services/sanityPageService'
import PortableText from "react-portable-text"
import SanityImageScale from '@/components/sanity-image-scale'
import { useContext, useEffect, useRef } from 'react'
import { IntroContext } from '@/context/intro'

const pageService = new SanityPageService(projectsLandingQuery)

export default function Projects(initialData) {
  const { data: { projectsLanding }  } = pageService.getPreviewHook(initialData)()
  let colors = ['border-orange bg-orange text-yellow', 'border-yellow bg-yellow text-orange', 'border-blue bg-blue text-green', 'border-green bg-green text-blue', 'border-orange bg-orange text-yellow', 'border-yellow bg-yellow text-orange', 'border-blue bg-blue text-green', 'border-green bg-green text-blue', 'border-orange bg-orange text-yellow', 'border-yellow bg-yellow text-orange', 'border-blue bg-blue text-green', 'border-green bg-green text-blue', 'border-orange bg-orange text-yellow', 'border-yellow bg-yellow text-orange', 'border-blue bg-blue text-green', 'border-green bg-green text-blue']
  const [introContext, setIntroContext] = useContext(IntroContext);

  const ref = useRef(null)
  const parallaxRef = useRef(null)
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  
  const rotateBadge = useTransform(scrollYProgress,[0, 0.5],[-180, 360],{ clamp: true })

  useEffect(() => {
    setIntroContext(true)
  });

  return (
    <Layout>
      <NextSeo title={projectsLanding.title} />

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
                  <div className="flex flex-wrap justify-center pt-[100px] pb-[25vw] lg:pt-[12.5vw] lg:pb-[10vw]">
                    <span className="font-sans text-center uppercase tracking-widest block w-[105px] lg:w-[135px] mx-auto text-[50px] mb-2 lg:mb-3 relative">
                      <m.div variants={revealLtr} className="bg-off-white absolute inset-0"></m.div>
                      <svg className="w-full" viewBox="0 0 101 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.4832 35.8023C10.9161 35.8768 10.3385 35.8407 9.75043 35.694C9.15982 35.5353 8.58518 35.2731 8.02652 34.9073C7.46787 34.5415 7.00137 34.122 6.62704 33.6489C6.2502 33.1637 5.98253 32.6464 5.82404 32.0969C5.65804 31.5114 5.62311 30.9235 5.71925 30.3335C5.80813 29.7386 6.02834 29.1727 6.37988 28.6358C6.73143 28.099 7.16204 27.6708 7.67173 27.3515C8.17417 27.0275 8.72691 26.8245 9.32997 26.7425C9.89701 26.668 10.4758 26.7102 11.0664 26.8688C11.6546 27.0155 12.2279 27.2717 12.7866 27.6375C13.3453 28.0033 13.813 28.4288 14.1898 28.9139C14.5642 29.3871 14.8306 29.8984 14.9891 30.4479C15.1551 31.0335 15.1936 31.6236 15.1048 32.2185C15.0086 32.8086 14.7848 33.3721 14.4332 33.909C14.0817 34.4459 13.6547 34.8763 13.1523 35.2004C12.6426 35.5197 12.0862 35.7204 11.4832 35.8023ZM13.2035 33.1038C13.6405 32.4363 13.7369 31.7271 13.4925 30.9763C13.2482 30.2254 12.7088 29.5768 11.8745 29.0305C11.0401 28.4842 10.23 28.2492 9.44409 28.3254C8.65819 28.4017 8.04671 28.7736 7.60965 29.4411C7.1726 30.1085 7.07625 30.8177 7.32059 31.5686C7.56493 32.3194 8.10428 32.968 8.93863 33.5143C9.77299 34.0606 10.5831 34.2956 11.369 34.2194C12.1549 34.1431 12.7664 33.7712 13.2035 33.1038Z" fill="black"/>
                        <path d="M22.8439 24.4049C21.9324 25.1533 21.0068 25.4814 20.0669 25.3891C19.1283 25.2846 18.2737 24.7632 17.5033 23.8249L13.9288 19.4718L15.2156 18.4152L18.7571 22.728C19.2579 23.3379 19.7777 23.6909 20.3167 23.787C20.8569 23.8708 21.3883 23.6981 21.9111 23.2689C22.4406 22.8341 22.7134 22.3464 22.7295 21.8057C22.7468 21.2529 22.5051 20.6715 22.0043 20.0616L18.4628 15.7488L19.7496 14.6921L23.3241 19.0452C24.1001 19.9902 24.4419 20.9326 24.3496 21.8724C24.264 22.8068 23.7621 23.6509 22.8439 24.4049Z" fill="black"/>
                        <path d="M32.0918 14.4033L30.6978 14.981L32.0822 18.3218L30.544 18.9593L26.9684 10.3308L30.4173 8.90158C31.4108 8.4899 32.2762 8.40352 33.0135 8.64243C33.7475 8.87333 34.2888 9.40939 34.6374 10.2506C34.913 10.9156 34.9682 11.5357 34.8029 12.1111C34.6377 12.6865 34.2622 13.1848 33.6763 13.6059L37.3338 16.1456L35.5792 16.8727L32.0918 14.4033ZM29.0544 11.0153L30.15 13.6591L31.9766 12.9022C32.5214 12.6764 32.8915 12.3916 33.087 12.0478C33.2871 11.6926 33.2992 11.3027 33.1232 10.8781C32.944 10.4455 32.6636 10.1767 32.2823 10.0719C31.9009 9.96713 31.4338 10.0293 30.881 10.2583L29.0544 11.0153Z" fill="black"/>
                        <path d="M51.8612 11.792L54.1957 5.11821L55.6598 5.24928L56.7847 12.2328L59.1581 5.56245L60.8165 5.71092L57.4701 14.7886L55.8376 14.6425L54.6624 7.92878L52.3264 14.3282L50.6939 14.182L49.0002 4.65308L50.7104 4.80619L51.8612 11.792Z" fill="black"/>
                        <path d="M65.2519 15.5073C65.088 14.9594 65.0316 14.3835 65.0826 13.7795C65.1451 13.1712 65.3124 12.5621 65.5845 11.9522C65.8565 11.3424 66.1963 10.815 66.6037 10.3701C67.0226 9.9207 67.4907 9.574 68.0079 9.32994C68.5595 9.07273 69.1342 8.94455 69.7321 8.9454C70.3335 8.93832 70.9272 9.06552 71.5133 9.32699C72.0993 9.58846 72.5906 9.94533 72.9871 10.3976C73.3871 10.842 73.6756 11.3553 73.8527 11.9376C74.0165 12.4855 74.0672 13.0636 74.0047 13.672C73.9537 14.2759 73.7921 14.8828 73.5201 15.4927C73.248 16.1025 72.9025 16.6321 72.4836 17.0814C72.0762 17.5264 71.6139 17.8709 71.0966 18.115C70.5451 18.3722 69.9686 18.5043 69.3672 18.5114C68.7693 18.5105 68.1773 18.3794 67.5913 18.1179C67.0052 17.8564 66.5122 17.5035 66.1122 17.0592C65.7157 16.6069 65.4289 16.0896 65.2519 15.5073ZM68.1902 16.7755C68.9188 17.1006 69.6342 17.0827 70.3365 16.7218C71.0388 16.3609 71.5931 15.725 71.9995 14.8143C72.4058 13.9035 72.5087 13.0662 72.3081 12.3025C72.1076 11.5388 71.643 10.9945 70.9144 10.6694C70.1858 10.3443 69.4703 10.3622 68.768 10.7231C68.0657 11.084 67.5114 11.7199 67.1051 12.6306C66.6987 13.5414 66.5958 14.3787 66.7964 15.1424C66.997 15.9061 67.4615 16.4504 68.1902 16.7755Z" fill="black"/>
                        <path d="M80.4519 21.8033L79.3118 20.8148L76.9428 23.5471L75.6848 22.4564L81.8031 15.3995L84.6239 17.8452C85.4364 18.5496 85.9007 19.285 86.0168 20.0513C86.1385 20.8111 85.9012 21.535 85.3047 22.223C84.8331 22.7669 84.3031 23.0936 83.7146 23.2031C83.1261 23.3126 82.5125 23.1996 81.8738 22.8639L81.2379 27.271L79.8029 26.0269L80.4519 21.8033ZM82.1238 17.5714L80.2491 19.7337L81.7431 21.0289C82.1886 21.4152 82.6089 21.6189 83.0038 21.64C83.411 21.6601 83.7652 21.4966 84.0663 21.1493C84.373 20.7955 84.488 20.4246 84.4112 20.0366C84.3344 19.6486 84.0699 19.2586 83.6178 18.8666L82.1238 17.5714Z" fill="black"/>
                        <path d="M92.3145 25.9784L93.2141 27.3795L89.4924 29.7692L95.3086 30.6415L96.3698 32.2943L91.0047 31.4262L88.623 37.5159L87.5617 35.863L89.3924 31.1784L87.7301 30.9008L85.3548 32.4259L84.4552 31.0248L92.3145 25.9784Z" fill="black"/>
                        </svg>

                    </span>

                    <div className="relative overflow-hidden w-full mb-6 lg:mb-8">
                      <m.h1 variants={reveal} className="text-[15vw] lg:text-[10vw] xl:text-[9vw] 2xl:text-[10vw] leading-[1] lg:leading-[1.1] xl:leading-[1.1] 2xl:leading-[1.1] text-center mb-0 pb-0 hero--projects">
                        <div className="translate-y-[-5%]">
                          <PortableText content={projectsLanding.heroHeading} />
                        </div>
                      </m.h1>
                    </div>

                    <div className="w-[95%] lg:w-[60%] content text-base/[1.28] lg:text-lg/[1.28] xl:text-xl/[1.28] text-center mx-auto max-w-[800px] relative">
                      <m.div variants={revealTtb} className="absolute inset-0 bg-gradient-to-b from-off-white via-off-white to-transparent via-[70%]"></m.div>
                      <p>{projectsLanding.heroText}</p>
                    </div>
                  </div>

                  <ul className="grid grid-cols-2 lg:px-[6vw] gap-[12vw] lg:gap-[5vw] lg:gap-y-[6.5vw] mb-[10vw] lg:mb-[3vw] relative">
                    <m.div variants={scale} transition={{ delay: 0.25, duration: 0.6, ease: [0.71,0,0.17,1] }} className="absolute top-[-50px] lg:top-[-70px] left-[10%] lg:left-[9%] z-[20]">
                      <div className="motion-safe:animate-spin-slower">
                        <m.div style={{ rotateZ: rotateBadge }} className="w-[120px] xl:w-[170px] p-3 z-[20] bg-orange text-yellow rounded-full">                      
                          <SunnyIcon className="w-full aspect-square" />
                        </m.div>
                      </div>
                    </m.div>
                    {projectsLanding.projects.map((e, i) => {
                      let color = colors[colors.length * Math.random() | 0]
                      let rotation = 'lg:group-hover:rotate-[-3deg]'

                      if ((i + 1) % 2 == 0) {
                        rotation = 'lg:group-hover:rotate-[3deg]'
                      }

                      return (
                        <li className="col-span-2 lg:col-span-1" key={i}>
                          <Link scroll={false} href={`/projects/${e.slug.current}`} className="group">
                            <div className="relative">
                              <div className={`absolute inset-0 ${colors[i]} z-[8] h-[100%] transition-transition ease-ak duration-[750ms] rounded-2xl delay-[100ms] lg:group-hover:delay-[0ms] ${rotation}`}></div>

                              <div className="relative overflow-hidden mb-4 lg:mb-6 rounded-2xl z-10">
                                <div className={`absolute pointer-events-none inset-0 z-10 rounded-2xl transition-all ease-ak duration-[500ms]`} style={{ background: 'transparent'}}></div>

                                <div className="absolute inset-0 z-10 items-center justify-center hidden lg:flex lg:group-hover:scale-[1] scale-0 transition-transform ease-ak duration-[650ms]">
                                  <div className={`w-[140px] xl:w-[180px] aspect-square rounded-full flex items-center justify-center ${colors[i]} scale-[0] lg:group-hover:scale-[1] transition-transform ease-ak duration-[500ms]`}>
                                    <div className={`w-full text-center -mt-3 lg:-mt-5`}>
                                      <SunnyNoRaysIcon className="w-[33px] lg:w-[45px] mx-auto mb-0" />
                                      <span className="block font-display text-3xl xl:text-4xl leading-none lg:leading-none">See More!</span>
                                    </div>
                                  </div>
                                </div>

                                <div className="relative overflow-hidden">
                                  <div className="lg:group-hover:scale-[1.05] transition-transform ease-ak duration-[600ms]">
                                    <div className="aspect-[15/10]">
                                      { (e.teaserImage || e.heroImage) ? (
                                        <SanityImageScale fill sizes="(max-width: 1024px) 100vw, 50vw" image={e.teaserImage ? e.teaserImage : e.heroImage} />
                                      ) : (
                                        <div className="w-full h-full absolute inset-0 bg-green"></div>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {e.location && (
                              <span className="block relative overflow-hidden">
                                <m.span variants={reveal} className="block text-base leading-[1.25] lg:text-xl lg:leading-[1.25] w-full text-center">{e.location}</m.span>
                              </span>
                            )}

                            <span className="block relative overflow-hidden mb-2">
                              <m.span variants={reveal} className="font-display block w-full text-center text-[8.2vw] md:text-[5vw] lg:text-[3.2vw] xl:text-[2.8vw] leading-[1.2] md:leading-[1.2] lg:leading-[1.2] xl:leading-[1.2]">{e.title}</m.span>
                            </span>
                          </Link>
                        </li>
                      )
                    })}
                  </ul>

                  <div className="flex flex-wrap justify-center pt-[15vw] lg:pt-[10vw] mb-[17vw] lg:mb-[10vw]">
                    {projectsLanding.footerCtaTitle && (
                      <span className="block mb-8 overflow-hidden relative w-full text-center">
                        <m.span variants={reveal} className="block text-base leading-none lg:text-xl lg:leading-none">{projectsLanding.footerCtaTitle}</m.span>
                      </span>
                    )}

                    {projectsLanding.footerCtaText && (
                      <span className="font-display block w-full md:w-[90%] lg:w-[85%] text-center text-[8vw] md:text-[6vw] lg:text-[4.2vw] leading-[1] md:leading-[0.9] lg:leading-[0.9] mb-10 lg:mb-16">
                        <PortableText content={projectsLanding.footerCtaText} />
                      </span>
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

              </div>
            </m.article>
          </m.main>
        
          <m.div variants={fade}>
            <div className="overflow-hidden bg-off-white z-[20] relative pt-[10vw] lg:pt-[5vw]">
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