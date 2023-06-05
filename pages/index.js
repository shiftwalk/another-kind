import Layout from '@/components/layout'
import Footer from '@/components/footer'
import Container from '@/components/container'
import FancyLink from '@/components/fancyLink'
import { fade } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import LogoIcon from "@/icons/logo.svg";
import BadgeIcon from "@/icons/badge.svg";

export default function Home() {
  return (
    <Layout>
      <NextSeo title="Home" />

      <LazyMotion features={domAnimation}>
        <m.div
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <m.main className="pb-12 md:pb-16 xl:pb-24 pt-24">
            <Container>              
              <m.article variants={fade}>
                <LogoIcon className="w-full mb-5" />

                <div className="flex flex-wrap items-end mb-[10vw]">
                  <div className="w-full lg:w-1/2 mb-3 lg:mb-0 relative">
                    <img src="/images/home.jpg" alt="Temp Home Image" className="will-change-transform rounded-xl" />
                    <BadgeIcon className="absolute top-auto bottom-0 lg:bottom-auto lg:top-[-12%] left-0 lg:left-auto lg:right-[-15%] w-[30%] will-change-transform" />
                  </div>
                  <div className="w-full lg:w-1/2">
                    <div className="w-11/12 content text-lg leading-tight lg:text-xl xl:leading-tight lg:px-5">
                      <p>Our RIBA Chartered Practice is brimming with forward-thinking, award-winning architects, technologists and other alternatively, really talented folks. For us Anotherkind is more than a name, it's a mission. Curiosity, playfulness, openness and a can-do attitude aren't just values scrawled on a wall, but qualities we truly value. If we work together we're sure you'll see there's much more to our name than our name.</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap justify-center mb-[10vw]">
                  <span className="block text-lg leading-none lg:text-xl lg:leading-none w-full text-center mb-8">Space needs life</span>

                  <span className="font-display block w-full md:w-[90%] lg:w-[85%] text-center text-[8vw] md:text-[6vw] lg:text-[4vw] leading-[0.9] md:leading-[0.9] lg:leading-[0.9]">It's the <em>beautiful</em> alchemy of space and colliding that makes a space, a place. We make grand plans for them to come together, creating progressive, sustainable, life-affirming places. Great places designed for life.</span>
                </div>

                <h1 className="text-2xl md:text-3xl xl:text-4xl mb-4">Next x <em>Tailwind</em> x Motion.</h1>
                <div className="content max-w-3xl mb-4">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.</p>

                  <p>Velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>

                <h1 className="text-2xl md:text-3xl xl:text-4xl mb-4">Next x <em>Tailwind</em> x Motion.</h1>
                <div className="content max-w-3xl mb-4">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.</p>

                  <p>Velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>

                <h1 className="text-2xl md:text-3xl xl:text-4xl mb-4">Next x <em>Tailwind</em> x Motion.</h1>
                <div className="content max-w-3xl mb-4">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.</p>

                  <p>Velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>

                <h1 className="text-2xl md:text-3xl xl:text-4xl mb-4">Next x <em>Tailwind</em> x Motion.</h1>
                <div className="content max-w-3xl mb-4">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.</p>

                  <p>Velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>

                <h1 className="text-2xl md:text-3xl xl:text-4xl mb-4">Next x <em>Tailwind</em> x Motion.</h1>
                <div className="content max-w-3xl mb-4">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.</p>

                  <p>Velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>

                <h1 className="text-2xl md:text-3xl xl:text-4xl mb-4">Next x <em>Tailwind</em> x Motion.</h1>
                <div className="content max-w-3xl mb-4">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.</p>

                  <p>Velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                
                <FancyLink destination="/about" a11yText="Navigate to the about page" label="About Page" />
              </m.article>
            </Container>
          </m.main>
        
          <m.div variants={fade}>
            <Footer />
          </m.div>
        </m.div>
      </LazyMotion>
    </Layout>
  )
}
