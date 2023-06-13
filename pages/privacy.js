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
import { MouseParallax } from 'react-just-parallax'

export default function Privacy() {
  return (
    <Layout>
      <NextSeo title="Privacy Policy" />

      <LazyMotion features={domAnimation}>
        <m.div
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <m.main className="pb-12 md:pb-16 xl:pb-24 pt-[100px] lg:pt-[110px] xl:pt-[120px]">
            <m.article variants={fade}>
              <Container>
                <h1 className="text-[13.5vw] md:text-[9vw] lg:text-[8.5vw] leading-[0.8] md:leading-[0.8] lg:leading-[0.8] pb-0 w-[95%] mb-8 lg:mb-16 xl:mb-20">Privacy Policy</h1>

                <div className="grid grid-cols-2 mb-[18vw] lg:mb-[10vw]">
                  <div className="col-span-2 lg:col-span-1 mb-5 lg:mb-0">
                    <div className="relative overflow-hidden rounded-2xl">
                      <ImageScale image="/images/journal/journal-inner.jpg" w={1297} h={930} />
                    </div>
                  </div>
                  <div className="col-span-2 lg:col-span-1">
                    <div className="content w-[90%] lg:w-[65%] lg:max-w-[520px] lg:mx-auto text-lg/[1.28] lg:text-xl/[1.28] break-words">
                      <p>30.09.2022</p>
                      <p>The Greyfriar&rsquo;s project is a labour of love for PRB&rsquo;s conservation specialists Lucy Wilson, Joe Player and Joris Vreeswijk Working with Heritage Lincolnshire, City of Lincoln Council and the entire design team, planning and scheduled monument consent have been secured for this beautiful 13th century friary in Lincoln.</p>
                      
                      <p>It&rsquo;s been amazing, as always, working with Sarah Sorrell BSc (Hons) C.Build.E MCABE to ensure that inclusivity and accessibility were absolutely fundamental to the design; promoting accessible heritage for all.</p>
                      
                      <p>We loved contributing to the latest edition of Context - issued by the . Read more about the approach here: <a href="https://ihbconline.co.uk/context/173/index.html" className="underline" target="_blank" rel="noopener noreferrer">https://ihbconline.co.uk/context/173/index.html</a></p>
                    </div>
                  </div>
                </div>
              </Container>
            </m.article>
          </m.main>
        
          <m.div variants={fade}>
            <div className="overflow-hidden bg-off-white z-[10] relative pt-[10vw] lg:pt-[5vw]">
              <Footer />
            </div>
          </m.div>
        </m.div>
      </LazyMotion>
    </Layout>
  )
}
