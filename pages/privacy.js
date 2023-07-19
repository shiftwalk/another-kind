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
import { useContext, useEffect } from 'react'
import { IntroContext } from '@/context/intro'
import SanityPageService from '@/services/sanityPageService'
import { privacyQuery } from '@/helpers/queries'
import PortableText from 'react-portable-text'
import Table from '@/components/table'

const pageService = new SanityPageService(privacyQuery)

export default function Privacy(initialData) {
  const { data: { privacy }  } = pageService.getPreviewHook(initialData)()
  const [introContext, setIntroContext] = useContext(IntroContext);

  useEffect(() => {
    setIntroContext(true)
  });

  return (
    <Layout>
      <NextSeo title={privacy.title}  />

      <LazyMotion features={domAnimation}>
        <m.div
          initial="initial"
          animate="enter"
          exit="exit"
          className="flex flex-wrap"
        >
          <m.main className="w-full pb-12 md:pb-16 xl:pb-24 pt-[100px] lg:pt-[110px] xl:pt-[120px]">
            <m.article variants={fade}>
              <Container>
                <h1 className="text-[13.5vw] md:text-[9vw] lg:text-[8.5vw] leading-[0.8] md:leading-[0.8] lg:leading-[0.8] pb-0 w-[95%] mb-12 md:mb-16 lg:mb-20">Privacy Policy</h1>

                <div className="mb-[18vw] lg:mb-[10vw] w-full">
                  <div className="content w-[90%] lg:w-[72%] lg:max-w-[1250px] text-base/[1.28] lg:text-lg/[1.28] break-words">
                    <PortableText
                    content={privacy.content}
                    className="content"
                    serializers={{table: (props) => <Table props={props} />}}
                  />
                  </div>
                </div>
              </Container>
            </m.article>
          </m.main>
        
          <m.div variants={fade} className="w-full">
            <div className="overflow-hidden bg-off-white z-[10] relative pt-[10vw] lg:pt-[5vw]">
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