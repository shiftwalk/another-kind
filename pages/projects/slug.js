import Layout from '@/components/layout'
import Footer from '@/components/footer'
import Container from '@/components/container'
import { fade, reveal } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import SunnyNoRaysIcon from "@/icons/sunny-no-rays.svg";
import HeroProject from '@/components/hero-project'
import ImageScale from '@/components/image-scale'

export default function ProjectSlug() {
  return (
    <Layout>
      <NextSeo title="Project Slug" />

      <LazyMotion features={domAnimation}>
        <m.div
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <m.main className="">
            <m.article variants={fade}>
              <HeroProject />
              <div className="relative bg-off-white mt-[100dvh] z-10">
                <Container>
                  <div className="flex flex-wrap justify-center pt-[20vw] lg:pt-[12.5vw] mb-[20vw] lg:mb-[12.5vw]">
                    <span className="block mb-8 overflow-hidden relative w-full text-center">
                      <m.span variants={reveal} className="block text-lg leading-none lg:text-xl lg:leading-none">Overview</m.span>
                    </span>

                    <span className="font-display block w-full md:w-[95%] lg:w-[95%] text-center text-[8vw] md:text-[6vw] lg:text-[4.2vw] leading-[0.9] md:leading-[0.9] lg:leading-[0.9] mb-10 lg:mb-16">Behold the stunning <em>transformation</em> of this 1960&rsquo;s split level bungalow. Externally the property now has a combination of stunning standing seam metal, and robust timber cladding. A <em>dramatic</em> change to a deserving property.</span>
                  </div>

                  <div className="w-full mb-5 flex space-x-[4vw]">
                    <div className="">
                      <span className="block text-base leading-[1.2] lg:text-xl lg:leading-[1.2] mb-[2px]">Location</span>
                      <span className="block text-base leading-[1.2] lg:text-xl lg:leading-[1.2]">Keyworth, Nottingham</span>
                    </div>
                    <div className="">
                      <span className="block text-base leading-[1.2] lg:text-xl lg:leading-[1.2] mb-[2px]">Type</span>
                      <span className="block text-base leading-[1.2] lg:text-xl lg:leading-[1.2]">Conservation</span>
                    </div>
                    <div className="">
                      <span className="block text-base leading-[1.2] lg:text-xl lg:leading-[1.2] mb-[2px]">Services</span>
                      <span className="block text-base leading-[1.2] lg:text-xl lg:leading-[1.2]">Concept Design, Planning Process, etc...</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 w-full gap-5 mb-5">
                    <div className="col-span-1">
                      <div className="relative overflow-hidden rounded-2xl">
                        <ImageScale image="/images/projects/slug-1.jpg"/>
                      </div>
                    </div>
                    <div className="col-span-1">
                      <div className="relative overflow-hidden rounded-2xl">
                        <ImageScale image="/images/projects/slug-2.jpg"/>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 w-full gap-5 mb-5">
                    <div className="col-span-1">
                      <div className="relative overflow-hidden rounded-2xl">
                        <ImageScale image="/images/projects/slug-3.jpg"/>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 w-full gap-5 mb-5">
                    <div className="col-span-2 lg:col-span-1">
                      <div className="relative overflow-hidden rounded-2xl">
                        <ImageScale image="/images/projects/slug-4.jpg"/>
                      </div>
                    </div>
                    <div className="col-span-2 lg:col-span-1 flex items-center justify-center">
                      <div className="w-[90%] md:w-[90%] lg:w-[80%] py-[10vw] lg:py-0">
                        <span className="block mb-8 overflow-hidden relative w-full text-center">
                          <span className="block text-lg leading-none lg:text-xl lg:leading-none">Details</span>
                        </span>

                        <span className="font-display block w-full text-center text-[7.5vw] md:text-[3.2vw] lg:text-[3vw] xl:text-[2.7vw] leading-[0.9] md:leading-[0.9] lg:leading-[0.9]">The property occupies an <em>enviable</em> plot overlooking the Derbyshire countryside. The client has maximised their ability to enjoy the <em>stunning</em> views by really opening up the façade of the house and installing a series of large sliding doors and picture windows.</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 w-full gap-5">
                    <div className="col-span-1">
                      <div className="relative overflow-hidden rounded-2xl">
                        <ImageScale image="/images/projects/slug-5.jpg"/>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap justify-center pt-[20vw] lg:pt-[12.5vw] pb-[20vw] lg:pb-[12.5vw]">
                    <span className="block mb-8 overflow-hidden relative w-full text-center">
                      <m.span variants={reveal} className="block text-lg leading-none lg:text-xl lg:leading-none">Need a hand?</m.span>
                    </span>

                    <span className="font-display block w-full md:w-[90%] lg:w-[85%] text-center text-[8vw] md:text-[6vw] lg:text-[4.2vw] leading-[0.9] md:leading-[0.9] lg:leading-[0.9] mb-10 lg:mb-16">Need help transforming a residential property into a beautiful, <em>lasting</em> home? We&rsquo;d love to talk!</span>

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

              </div>
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
