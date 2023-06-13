import Layout from '@/components/layout'
import Container from '@/components/container'
import { fade, reveal, scale } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import SunnyIcon from "@/icons/sunny.svg";
import Link from 'next/link'

export default function Error() {
  return (
    <Layout>
      <NextSeo title="404: Page Not Found" />

      <LazyMotion features={domAnimation}>
        <m.div
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <m.main className="">
            <m.article variants={fade}>
              <div className="w-[100vw] relative bg-orange text-yellow h-screen flex items-center justify-center overflow-hidden">
                <div className={`w-full absolute inset-0 flex items-center justify-center`}>
                  <m.div variants={scale} className="w-[80%] lg:w-[50%] max-w-[800px]">
                    <SunnyIcon className="w-full text-yellow opacity-[9%] aspect-square" />
                  </m.div>
                </div>

                <div className="w-full relative z-10">
                  <Container>
                    <div className="flex flex-wrap justify-center">
                      <span className="font-mono text-center uppercase tracking-widest block w-[110px] lg:w-[120px] mx-auto text-[72px] mb-4">
                        <svg className="w-full" viewBox="0 0 500 140">
                          <path id="curve" d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97" fill="transparent" />
                          <text>
                            <textPath href="#curve" fill="currentColor">
                              Whoops!
                            </textPath>
                          </text>
                        </svg>
                      </span>

                      <div className="relative overflow-hidden w-full mb-8 lg:mb-10">
                        <m.h1 variants={reveal} className="text-[15vw] lg:text-[10vw] xl:text-[9vw] 2xl:text-[150px] leading-[1] lg:leading-[1] xl:leading-[1] 2xl:leading-[1] text-center mb-0 pb-0"><span className="block translate-y-[-11%]">There&rsquo;s been a <em>mistake</em>.</span></m.h1>
                      </div>

                      <div className="w-[95%] lg:w-[60%] content text-lg xl:text-xl text-center mx-auto max-w-[720px]">
                        <p>Unfortunately, this page doesn&rsquo;t exist! We're really sorry about that. You can head back to the <Link href="/">home page here</Link>, or not, it's upto you...</p>
                      </div>
                    </div>
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
