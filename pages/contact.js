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
import { contactQuery } from '@/helpers/queries'
import SanityPageService from '@/services/sanityPageService'
import PortableText from "react-portable-text"
import SanityImageScale from '@/components/sanity-image-scale'

const pageService = new SanityPageService(contactQuery)
export default function Contact(initialData) {
  const { data: { contact }  } = pageService.getPreviewHook(initialData)()

  const { scrollY } = useScroll()
  
  const rotate = useTransform(scrollY, [0, 1000], ['-20deg', '360deg'], { clamp: false })

  return (
    <Layout>
      <NextSeo title={contact.title} />

      <LazyMotion features={domAnimation}>
        <m.div
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <m.main className="pb-12 md:pb-16 xl:pb-24 pt-[70px] lg:pt-[95px] xl:pt-[103px]">
            <Container>
              <m.article variants={fade}>
                <div className="flex flex-wrap max-w-[1920px] mx-auto">
                  <div className="w-full lg:w-1/2 mb-[60px] lg:mb-0 relative">
                    <m.div variants={scale} transition={{ delay: 0.25, duration: 0.6, ease: [0.71,0,0.17,1] }} className="absolute bottom-[-50px] left-5 lg:bottom-auto lg:left-auto lg:top-[10%] lg:right-[-10%] z-10">
                      <div className="motion-safe:animate-spin-slower">
                        <m.div style={{ rotateZ: rotate }} className="w-[120px] xl:w-[170px]  rounded-full bg-yellow text-green p-3 rotate-12">
                          <SunnyIcon className="w-[100%] aspect-square" />
                        </m.div>
                      </div>
                    </m.div>

                    <div className="w-full relative overflow-hidden rounded-xl">
                      <div className="aspect-[11/10] lg:aspect-[10/11]">
                        <SanityImageScale p invert heroOffset fill sizes="(max-width: 1024px) 100vw, 55vw" image={contact.heroImage} />
                      </div>
                    </div>
                  </div>

                  <div className="w-full lg:w-1/2">
                    <div className="flex flex-wrap lg:justify-center lg:pt-[7.5vw] h-full lg:px-5">
                      <div className="lg:w-[75%] lg:max-w-[720px] lg:translate-x-[5%] xl:translate-x-[10%]">
                        <span className="font-mono text-center uppercase tracking-[11.5px] block w-[110px] lg:w-[140px] text-[50px] mb-3 lg:mb-6 translate-x-[-8%] mx-auto lg:mx-0 relative overflow-hidden">
                          <m.div variants={revealLtr} className="bg-off-white absolute inset-0"></m.div>

                          <svg className="w-full ml-1 lg:ml-2" viewBox="0 0 117 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.47662 37.9582C7.63082 38.2845 7.85216 38.589 8.14063 38.8717C8.42154 39.1501 8.7545 39.3982 9.13948 39.6159C9.52447 39.8336 9.91242 39.9932 10.3033 40.0947C10.6867 40.192 11.058 40.2226 11.4171 40.1866C11.8343 40.1535 12.2113 40.033 12.5481 39.8249C12.8774 39.6126 13.1424 39.3291 13.343 38.9743C13.6077 38.5063 13.7018 38.0315 13.6254 37.5499C13.5415 37.0641 13.2943 36.6204 12.8837 36.2189L14.1164 35.1226C14.7228 35.7944 15.0698 36.5286 15.1573 37.3253C15.249 38.1144 15.0707 38.9053 14.6225 39.6979C14.3109 40.2489 13.9111 40.7003 13.4233 41.0521C12.9354 41.4039 12.3916 41.6344 11.7919 41.7435C11.2352 41.8471 10.6607 41.8411 10.0686 41.7254C9.47648 41.6098 8.89356 41.3897 8.31985 41.0653C7.74615 40.7408 7.25715 40.3547 6.85285 39.9069C6.44854 39.4591 6.14732 38.9699 5.94918 38.4394C5.73365 37.8692 5.65089 37.2844 5.70092 36.685C5.75095 36.0857 5.93178 35.5105 6.24341 34.9594C6.69164 34.1668 7.27752 33.6064 8.00105 33.2783C8.72885 32.9427 9.53685 32.8616 10.425 33.0352L10.1209 34.6565C9.56521 34.5116 9.06134 34.5305 8.6093 34.7132C8.14972 34.8917 7.78759 35.215 7.52292 35.683C7.32228 36.0378 7.21962 36.4131 7.21494 36.809C7.2027 37.2006 7.28993 37.5836 7.47662 37.9582Z" fill="black"/>
                            <path d="M18.7545 31.1307C18.1836 31.0981 17.6229 30.955 17.0724 30.7013C16.5217 30.4353 16.006 30.0705 15.5253 29.607C15.0447 29.1435 14.6645 28.6444 14.385 28.1098C14.1052 27.5629 13.9386 27.0047 13.8853 26.4353C13.8314 25.8291 13.9066 25.2451 14.1111 24.6833C14.3093 24.1154 14.6311 23.6005 15.0766 23.1385C15.522 22.6766 16.0249 22.3363 16.5852 22.1175C17.1392 21.8928 17.7201 21.7964 18.3279 21.8283C18.8989 21.8608 19.4597 22.0101 20.0104 22.2761C20.5608 22.5298 21.0764 22.8884 21.5571 23.3519C22.0378 23.8155 22.418 24.3207 22.6978 24.8676C22.9774 25.4022 23.1438 25.9542 23.1971 26.5237C23.2511 27.1299 23.1789 27.7169 22.9807 28.2848C22.7763 28.8466 22.4513 29.3585 22.0059 29.8204C21.5604 30.2824 21.0606 30.6257 20.5066 30.8505C19.9463 31.0692 19.3623 31.1626 18.7545 31.1307ZM20.9477 28.8001C21.5015 28.2258 21.7284 27.547 21.6283 26.7638C21.5282 25.9805 21.1192 25.2428 20.4013 24.5505C19.6834 23.8583 18.9313 23.4763 18.1449 23.4048C17.3586 23.3332 16.6885 23.5846 16.1347 24.1589C15.5809 24.7332 15.354 25.412 15.4541 26.1952C15.5542 26.9784 15.9632 27.7162 16.6811 28.4084C17.399 29.1007 18.1511 29.4826 18.9375 29.5542C19.7238 29.6258 20.3939 29.3744 20.9477 28.8001Z" fill="black"/>
                            <path d="M29.1998 12.3775L30.5694 11.5502L35.3984 19.545L34.1513 20.2982L26.6429 16.8245L30.1873 22.6925L28.8177 23.5198L23.9888 15.525L25.4586 14.6373L32.5828 17.9782L29.1998 12.3775Z" fill="black"/>
                            <path d="M44.3856 6.36854L44.814 7.76105L41.9419 8.64467L44.26 16.1792L42.6685 16.6688L40.3505 9.13429L37.4784 10.0179L37.05 8.6254L44.3856 6.36854Z" fill="black"/>
                            <path d="M50.9 14.5084L53.9331 4.9924L55.8166 4.8914L59.8499 14.0285L58.1742 14.1183L57.2546 12.0312L53.2279 12.2472L52.5497 14.42L50.9 14.5084ZM56.6311 10.6057L54.9413 6.78817L53.6954 10.7631L56.6311 10.6057Z" fill="black"/>
                            <path d="M67.9537 8.0299C67.6914 8.27779 67.4706 8.58273 67.2915 8.94471C67.114 9.29818 66.9816 9.6917 66.8942 10.1253C66.8068 10.5588 66.7755 10.9771 66.8004 11.3803C66.8269 11.7749 66.9131 12.1373 67.0589 12.4675C67.2198 12.8538 67.4515 13.1747 67.7538 13.4303C68.0578 13.6774 68.4096 13.8413 68.8092 13.9218C69.3362 14.0281 69.8168 13.9702 70.2508 13.7481C70.6866 13.5175 71.0316 13.1447 71.2858 12.6298L72.7106 13.4612C72.2604 14.2462 71.6702 14.804 70.94 15.1344C70.2184 15.4667 69.4112 15.5428 68.5186 15.3628C67.898 15.2376 67.3448 14.9978 66.859 14.6433C66.3731 14.2887 65.9852 13.8434 65.6952 13.3072C65.4239 12.8101 65.2513 12.2622 65.1774 11.6634C65.1035 11.0646 65.1317 10.4422 65.262 9.79612C65.3923 9.15004 65.6075 8.56532 65.9076 8.04196C66.2078 7.5186 66.5793 7.0804 67.022 6.72734C67.4971 6.34542 68.0273 6.08519 68.6126 5.94666C69.1979 5.80812 69.8008 5.80143 70.4214 5.92656C71.314 6.10656 72.0286 6.48951 72.5651 7.07542C73.1101 7.66305 73.438 8.40595 73.5489 9.30412L71.9132 9.51838C71.8784 8.94517 71.704 8.47208 71.39 8.09912C71.0776 7.71765 70.6579 7.47378 70.1308 7.3675C69.7313 7.28693 69.3426 7.30587 68.9649 7.42433C68.5888 7.53428 68.2518 7.73614 67.9537 8.0299Z" fill="black"/>
                            <path d="M87.0771 12.0532L86.4616 13.3737L83.738 12.104L80.4073 19.2488L78.8982 18.5453L82.2289 11.4005L79.5054 10.1309L80.121 8.81038L87.0771 12.0532Z" fill="black"/>
                            <path d="M94.877 30.0013C94.0714 29.1399 93.6844 28.2372 93.716 27.2934C93.7599 26.35 94.2252 25.4636 95.112 24.6344L99.2259 20.7871L100.363 22.0032L96.2873 25.8149C95.7109 26.354 95.3921 26.8955 95.3309 27.4395C95.282 27.984 95.4886 28.5032 95.9506 28.9972C96.4186 29.4976 96.9228 29.7385 97.4634 29.7198C98.0162 29.7015 98.5808 29.4228 99.1572 28.8838L103.233 25.072L104.37 26.2881L100.257 30.1354C99.3634 30.9706 98.445 31.3724 97.5011 31.3408C96.5632 31.3155 95.6885 30.869 94.877 30.0013Z" fill="black"/>
                            <path d="M102.262 40.0417C101.866 39.3291 101.649 38.5718 101.61 37.7699C101.579 36.9638 101.735 36.2622 102.078 35.665L103.618 36.2678C103.33 36.8044 103.179 37.3447 103.164 37.8888C103.149 38.433 103.27 38.9363 103.527 39.3987C103.8 39.8915 104.123 40.223 104.496 40.3932C104.88 40.5667 105.257 40.5503 105.629 40.344C105.788 40.2555 105.906 40.1456 105.981 40.0142C106.069 39.8862 106.117 39.7308 106.124 39.548C106.134 39.4233 106.126 39.2839 106.1 39.1298C106.082 38.9714 106.044 38.779 105.988 38.5524C105.952 38.4336 105.902 38.263 105.838 38.0407C105.781 37.8141 105.742 37.6625 105.719 37.5858C105.567 37.045 105.469 36.6184 105.424 36.3059C105.384 36.001 105.374 35.7238 105.394 35.4745C105.429 35.1081 105.541 34.783 105.73 34.4991C105.924 34.2229 106.199 33.9858 106.556 33.7879C106.935 33.5773 107.322 33.4615 107.717 33.4405C108.124 33.4228 108.525 33.5025 108.921 33.6794C109.269 33.8234 109.592 34.0404 109.892 34.3301C110.192 34.6199 110.452 34.9619 110.671 35.3561C111.028 36.0005 111.22 36.6677 111.247 37.3575C111.277 38.055 111.143 38.68 110.845 39.2325L109.33 38.6752C109.592 38.1825 109.727 37.7205 109.735 37.2892C109.751 36.8537 109.642 36.4237 109.406 35.9992C109.161 35.5595 108.861 35.26 108.505 35.1008C108.156 34.9373 107.819 34.9461 107.493 35.1272C107.296 35.2367 107.16 35.3765 107.086 35.5467C107.012 35.7168 106.992 35.9409 107.028 36.2188C107.045 36.3384 107.07 36.4829 107.105 36.6522C107.151 36.8249 107.229 37.0991 107.339 37.4747C107.543 38.1646 107.67 38.6599 107.718 38.9606C107.77 39.2689 107.789 39.5456 107.777 39.7907C107.764 40.2144 107.656 40.5821 107.452 40.8937C107.26 41.2087 106.967 41.4757 106.573 41.6947C106.178 41.9137 105.768 42.0324 105.342 42.0509C104.923 42.0652 104.506 41.9843 104.091 41.8082C103.731 41.6414 103.392 41.4076 103.077 41.1069C102.761 40.8062 102.489 40.4511 102.262 40.0417Z" fill="black"/>
                            </svg>

                        </span>

                        <div className="relative overflow-hidden w-auto mb-6 lg:mb-8">
                          <m.h1 variants={reveal} className="text-[15vw] lg:text-[10vw] xl:text-[9vw] 2xl:text-[150px] leading-[1] lg:leading-[1] xl:leading-[1] 2xl:leading-[1] mb-0 pb-0 block text-center lg:text-left">
                            <span className="block translate-y-[-10%]">
                              <PortableText content={contact.heroHeading} />
                            </span>
                          </m.h1>
                        </div>

                        <div className="w-[95%] lg:w-[100%] content text-base/[1.28] lg:text-lg/[1.28] xl:text-xl/[1.28] max-w-[800px] mb-12 text-center lg:text-left relative">
                          <m.div variants={revealTtb} className="absolute inset-0 bg-gradient-to-b from-off-white via-off-white to-transparent via-[70%]"></m.div>
                          <p>{contact.heroText}</p>
                        </div>

                        {contact.emailAddress && (
                          <div className="border-b border-black lg:border-none">
                            <a href={`mailto:${contact.emailAddress}`} className="py-5 relative group block transition-colors ease-ak duration-[400ms] lg:hover:text-yellow">
                              <div className="bg-orange w-full bottom-0 left-0 right-0 absolute z-0 lg:scale-x-[1.065] rounded-xl hidden lg:block transition-all ease-ak duration-[400ms] h-[0px] lg:group-hover:h-full"></div>

                              <div className="relative z-[1]">
                                <div className="mb-2 lg:mb-3">
                                  <span className="block text-base leading-none lg:text-xl lg:leading-none">Email</span>
                                </div>

                                <span className="font-display block w-full text-2xl md:text-3xl lg:text-3xl leading-[0.9] md:leading-[0.9] lg:leading-[0.9]">{contact.emailAddress}</span>
                              </div>
                            </a>
                          </div>
                        )}
                      
                        {contact.telephone && (
                          <div className="border-b border-black lg:border-none">
                            <a href={`tel:${contact.telephone}`} className="py-5 relative group block transition-colors ease-ak duration-[400ms] lg:hover:text-yellow">
                              <div className="bg-orange w-full bottom-0 left-0 right-0 absolute z-0 lg:scale-x-[1.065] rounded-xl hidden lg:block transition-all ease-ak duration-[400ms] h-[0px] lg:group-hover:h-full"></div>

                              <div className="relative z-[1]">
                                <div className="mb-2 lg:mb-3">
                                  <span className="block text-base leading-none lg:text-xl lg:leading-none">Call</span>
                                </div>

                                <span className="font-display block w-full text-2xl md:text-3xl lg:text-3xl leading-[0.9] md:leading-[0.9] lg:leading-[0.9]">{contact.telephone}</span>
                              </div>
                            </a>
                          </div>
                        )}
                        <div className="border-b border-black lg:border-none">
                          <div className="py-5">
                            <div className="mb-2 lg:mb-3">
                              <span className="block text-base leading-none lg:text-xl lg:leading-none">Socials</span>
                            </div>

                            <span className="font-display block w-full text-2xl md:text-3xl lg:text-3xl leading-[0.9] md:leading-[0.9] lg:leading-[0.9]">
                              {contact.socials.map((e,i) => {
                                return (
                                  <a key={i} target="_blank" rel="noopener noreferrer" href={e.url} className="relative group">
                                    <span className="relative z-10">{e.name}{(i !== contact.socials.length - 1) && ', '}</span>
                                    <span className={`w-0 lg:group-hover:w-full opacity-100 rotate-0 transition-ak ease-in-out duration-[350ms] z-[0] h-[7px] bg-orange rounded-full absolute bottom-[0px] left-0 right-0`}></span>
                                  </a>
                                )
                              })}
                            </span>
                          </div>
                        </div>
                        
                        {contact.address && (
                          <div className="border-b border-black lg:border-none">
                            <div className="py-5">
                              <div className="mb-2 lg:mb-3">
                                <span className="block text-base leading-none lg:text-xl lg:leading-none">Address</span>
                              </div>

                              <p className="w-[90%] max-w-[500px]">{contact.address}{contact.directionsUrl && (<> - <a target="_blank" rel="noopener noreferrer" href={contact.directionsUrl} className="relative group font-medium">
                                  <span className="relative z-10">Get Directions</span>
                                  <span className={`w-0 lg:group-hover:w-full opacity-100 rotate-0 transition-ak ease-in-out duration-[350ms] z-[0] h-[7px] bg-orange rounded-full absolute bottom-[0px] left-0 right-0`}></span>
                                </a></>)}</p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap justify-center pt-[20vw] lg:pt-[10vw] pb-0 lg:pb-[4.25vw]">
                  {contact.footerCtaTitle && (
                    <span className="block mb-8 overflow-hidden relative w-full text-center">
                      <m.span variants={reveal} className="block text-base leading-[1.25] lg:text-xl lg:leading-[1.25]">{contact.footerCtaTitle}</m.span>
                    </span>
                  )}

                  {contact.footerCtaText && (
                    <span className="font-display block w-full md:w-[90%] lg:w-[85%] text-center text-[8vw] md:text-[6vw] lg:text-[4.2vw] leading-[1] md:leading-[0.9] lg:leading-[0.9] mb-10 lg:mb-16"><PortableText content={contact.footerCtaText} /></span>
                  )}

                  <MouseParallax lerpEase={0.5} strength={-0.017} enableOnTouchDevice={false}>
                    <div className="w-full flex justify-center">
                      <a href="mailto:hello@anotherkind.studio" className="w-[140px] xl:w-[180px] aspect-square bg-green text-yellow rounded-full flex items-center justify-center transition-translate ease-ak duration-[500ms] hover:scale-[1.2] relative overflow-hidden group">
                        <div className="absolute inset-0 bg-orange transition-transform ease-ak duration-[500ms] translate-y-full group-hover:translate-y-0 group-hover:rotate-[-80deg] group-hover:scale-[1.3] rounded-[50%]"></div>
                        <div className="w-full text-center -mt-3 lg:-mt-5 relative z-1">
                          <SunnyNoRaysIcon className="w-[33px] lg:w-[45px] mx-auto mb-0 transition-transform ease-ak duration-[500ms] group-hover:rotate-[360deg]" />
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
            <div className="overflow-hidden pt-[15vw] lg:pt-[5vw]">
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