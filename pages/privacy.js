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

export default function Privacy() {
  const [introContext, setIntroContext] = useContext(IntroContext);

  useEffect(() => {
    setIntroContext(true)
  });

  return (
    <Layout>
      <NextSeo title="Privacy Policy" />

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
                    <h2>Introduction</h2>
                    <p>This is the Website Privacy Policy (“Website Policy”) for Player Robert Bell Architects Ltd (“PRB”).</p>
                    
                    <p>PRB respects your privacy and is committed to protecting your personal data. Our Website Policy applies when you visit our website as well as when we are in contact with you in other ways - this may be in your capacity as an individual or as director, shareholder, partner, employee or representative of a company or organisation.</p>
                    
                    <p>It sets out how we look after your personal data when you visit our website; your privacy rights; and how the law protects you. Our Website Policy does not apply to personal data you might provide to us, or which we might collect, in the context of providing architectural services to you.</p>

                    <h2>Important Information</h2>
                    <p>This is the Website Privacy Policy (“Website Policy”) for Player Robert Bell Architects Ltd (“PRB”).</p>
                    
                    <p>PRB respects your privacy and is committed to protecting your personal data. Our Website Policy applies when you visit our website as well as when we are in contact with you in other ways - this may be in your capacity as an individual or as director, shareholder, partner, employee or representative of a company or organisation.</p>
                    
                    <p>It sets out how we look after your personal data when you visit our website; your privacy rights; and how the law protects you. Our Website Policy does not apply to personal data you might provide to us, or which we might collect, in the context of providing architectural services to you.</p>

                    <h2>How else we use your data</h2>
                    <p>This is the Website Privacy Policy (“Website Policy”) for Player Robert Bell Architects Ltd (“PRB”).</p>
                    
                    <p>PRB respects your privacy and is committed to protecting your personal data. Our Website Policy applies when you visit our website as well as when we are in contact with you in other ways - this may be in your capacity as an individual or as director, shareholder, partner, employee or representative of a company or organisation.</p>
                    
                    <p>It sets out how we look after your personal data when you visit our website; your privacy rights; and how the law protects you. Our Website Policy does not apply to personal data you might provide to us, or which we might collect, in the context of providing architectural services to you.</p>

                    <h2>Introduction</h2>
                    <p>This is the Website Privacy Policy (“Website Policy”) for Player Robert Bell Architects Ltd (“PRB”).</p>
                    
                    <p>PRB respects your privacy and is committed to protecting your personal data. Our Website Policy applies when you visit our website as well as when we are in contact with you in other ways - this may be in your capacity as an individual or as director, shareholder, partner, employee or representative of a company or organisation.</p>
                    
                    <p>It sets out how we look after your personal data when you visit our website; your privacy rights; and how the law protects you. Our Website Policy does not apply to personal data you might provide to us, or which we might collect, in the context of providing architectural services to you.</p>

                    <h2>Important Information</h2>
                    <p>This is the Website Privacy Policy (“Website Policy”) for Player Robert Bell Architects Ltd (“PRB”).</p>
                    
                    <p>PRB respects your privacy and is committed to protecting your personal data. Our Website Policy applies when you visit our website as well as when we are in contact with you in other ways - this may be in your capacity as an individual or as director, shareholder, partner, employee or representative of a company or organisation.</p>
                    
                    <p>It sets out how we look after your personal data when you visit our website; your privacy rights; and how the law protects you. Our Website Policy does not apply to personal data you might provide to us, or which we might collect, in the context of providing architectural services to you.</p>

                    <h2>How else we use your data</h2>
                    <p>This is the Website Privacy Policy (“Website Policy”) for Player Robert Bell Architects Ltd (“PRB”).</p>
                    
                    <p>PRB respects your privacy and is committed to protecting your personal data. Our Website Policy applies when you visit our website as well as when we are in contact with you in other ways - this may be in your capacity as an individual or as director, shareholder, partner, employee or representative of a company or organisation.</p>
                    
                    <p>It sets out how we look after your personal data when you visit our website; your privacy rights; and how the law protects you. Our Website Policy does not apply to personal data you might provide to us, or which we might collect, in the context of providing architectural services to you.</p>
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
