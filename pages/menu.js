import Layout from '@/components/layout'
import Container from '@/components/container'
import { fade, reveal, scaleSunny } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import SunnyIcon from "@/icons/sunny.svg";
import SunIcon from "@/icons/sun.svg";
import Link from 'next/link'
import FancyLink from '@/components/fancyLink'
import { IntroContext } from '@/context/intro'
import { useContext, useEffect } from 'react'

export default function Menu() {
  const [introContext, setIntroContext] = useContext(IntroContext);

  useEffect(() => {
    setIntroContext(true)
  });

  return (
    <Layout>
      <NextSeo title="Menu" />

      <LazyMotion features={domAnimation}>
        <m.div
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <m.main className="">
            <m.article variants={fade}>
              <div className="w-[100vw] relative bg-orange text-off-white h-screen flex items-center justify-center overflow-hidden">
                <div className={`absolute bottom-2 right-3`}>
                  <m.div variants={scaleSunny} className="w-[100%] max-w-[125px]">
                    <SunnyIcon className="w-full text-yellow aspect-square" />
                  </m.div>
                </div>

                <div className={`absolute left-3 bottom-2`}>
                  <nav className="ml-auto flex space-x-2 xl:space-x-3 w-full text-base xl:text-xl xl:leading-none lg:w-auto order-2 lg:order-3 justify-center lg:justify-end mb-2 lg:mb-0">
                    <a href="https://example.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <SunIcon className="w-5 mt-[2px]" />
                    <a href="https://example.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                  </nav>
                </div>

                <div className="w-full relative z-10 translate-y-[-6.75vw] lg:translate-y-0">
                  <Container>
                    <ul className="font-display text-[12vw] leading-none md:text-6xl md:leading-none">
                      <li className="w-full block">
                        <Link scroll={false} href="/" className="block w-full border-t border-yellow pt-[2vw] pb-[2vw] md:pt-4 md:pb-3">
                          <span className="block overflow-hidden relative">
                            <m.span className="block" variants={reveal}>
                              <span className="block translate-y-[-8%]">
                                Home
                              </span>
                            </m.span>
                          </span>
                        </Link>
                      </li>
                      <li className="w-full block">
                        <Link scroll={false} href="/mission" className="block w-full border-t border-yellow pt-[2vw] pb-[2vw] md:pt-4 md:pb-3">
                          <span className="block overflow-hidden relative">
                            <m.span className="block" variants={reveal}>
                              <span className="block translate-y-[-8%]">
                                Mission
                              </span>
                            </m.span>
                          </span>
                        </Link>
                      </li>
                      <li className="w-full block">
                        <Link scroll={false} href="/projects" className="block w-full border-t border-yellow pt-[2vw] pb-[2vw] md:pt-4 md:pb-3">
                          <span className="block overflow-hidden relative">
                            <m.span className="block" variants={reveal}>
                              <span className="block translate-y-[-8%]">
                                Projects
                              </span>
                            </m.span>
                          </span>
                        </Link>
                      </li>
                      <li className="w-full block">
                        <Link scroll={false} href="/team" className="block w-full border-t border-yellow pt-[2vw] pb-[2vw] md:pt-4 md:pb-3">
                          <span className="block overflow-hidden relative">
                            <m.span className="block" variants={reveal}>
                              <span className="block translate-y-[-8%]">
                                Team
                              </span>
                            </m.span>
                          </span>
                        </Link>
                      </li>
                      <li className="w-full block">
                        <Link scroll={false} href="/journal" className="block w-full border-t border-yellow pt-[2vw] pb-[2vw] md:pt-4 md:pb-3">
                          <span className="block overflow-hidden relative">
                            <m.span className="block" variants={reveal}>
                              <span className="block translate-y-[-8%]">
                                Journal
                              </span>
                            </m.span>
                          </span>
                        </Link>
                      </li>
                      <li className="w-full block">
                        <Link scroll={false} href="/contact" className="block w-full border-t border-yellow border-b pt-[2vw] pb-[2vw] md:pt-4 md:pb-3">
                          <span className="block overflow-hidden relative">
                            <m.span className="block" variants={reveal}>
                              <span className="block translate-y-[-8%]">
                                Contact
                              </span>
                            </m.span>
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </Container>
                </div>
              </div>
            </m.article>
          </m.main>
        </m.div>
      </LazyMotion>
    </Layout>
  )
}
