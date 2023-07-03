import FancyLink from '@/components/fancyLink'
import { useRouter } from 'next/router'
import LogoIcon from "@/icons/logo.svg";
import SunIcon from "@/icons/sun.svg";
import SunnyIcon from "@/icons/sunny.svg";
import Link from 'next/link';
import { m, useScroll, useTransform, LazyMotion, domAnimation, AnimatePresence } from 'framer-motion';

export default function Header({ sunny }) {
  const router = useRouter()

  const { scrollYProgress } = useScroll()
  const rotate = useTransform(scrollYProgress,[0, 1],[-360, 360],{ clamp: true })
  
  return (
    <LazyMotion features={domAnimation}>
      <div className="fixed top-5 left-5 right-5 z-[1000]">
        <header className="w-full flex flex-wrap">
          <div className="flex-1 pr-2">
            <div className={`w-full bg-yellow rounded-full px-10 ${sunny ? 'py-[3px] lg:py-[7px]' : 'py-[3px] lg:py-[7px]' }`}>
              <div className="flex flex-wrap items-center">
                <nav className="mr-auto hidden space-x-2 xl:space-x-3 w-full text-lg xl:text-xl xl:leading-none md:w-auto mt-[-2px] lg:flex">
                  <FancyLink destination="/" active={router.asPath == '/'} a11yText="Navigate to the home page" label="Home" />
                  <SunIcon className="w-5 mt-[2px]" />
                  <FancyLink destination="/projects" active={router.asPath.includes('/projects')} a11yText="Navigate to the projects page" label="Projects" />
                  <SunIcon className="w-5 mt-[2px]" />
                  <FancyLink destination="/mission" a11yText="Navigate to the mission page" label="Mission" active={router.asPath == '/mission'} />
                  <SunIcon className="w-5 mt-[2px]" />
                  <FancyLink destination="/team" a11yText="Navigate to the team page" label="Team" active={router.asPath == '/team'} />
                </nav>
                <div className={`h-[40px] xl:h-[48px] lg:translate-x-[-30px] mx-auto relative overflow-hidden flex items-center`}>
                  <AnimatePresence mode="wait" initial={false}>
                    { sunny && (
                      <m.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        transition={{ duration: 0.6, ease: [0.83, 0, 0.17, 1]}}
                        key="sunny"
                        className="w-full"
                      >
                        <m.div style={{ rotate: rotate }} className="mx-auto">
                          <Link href="/" aria-label="Navigate to the home page" className={`mx-auto relative group`}>
                            <SunnyIcon className={`w-[36px] xl:w-[48px] inset-0 text-orange opacity-100 transition-transform ease-ak duration-[600ms] group-hover:rotate-[360deg]`} />
                          </Link>
                        </m.div>
                      </m.div>
                    )}
                    { !sunny && (
                      <m.div
                        initial={{ y: '150%' }}
                        animate={{ y: 0 }}
                        exit={{ y: '150%' }}
                        transition={{ duration: 0.6, ease: [0.83, 0, 0.17, 1]}}
                        className="w-full"
                        key="nosunny"
                      >
                        <div className="mx-auto">
                          <Link href="/" aria-label="Navigate to the home page" className={`block mx-auto relative group`}>
                            <LogoIcon className={`w-[200px] lg:w-[210px] xl:w-[270px] 2xl:w-[300px] inset-0 text-orange opacity-100 transition-transform ease-ak duration-[600ms] group-hover:translate-y-[150%]`} />

                            <div className="absolute inset-0 flex items-center justify-center">
                              <SunnyIcon className={`w-[36px] xl:w-[48px] inset-0 text-orange opacity-100 transition-transform ease-ak duration-[600ms] group-hover:rotate-[360deg] translate-y-full group-hover:translate-y-0`} />
                            </div>
                          </Link>
                        </div>
                      </m.div>
                    )}
                  </AnimatePresence>
                </div>
              
                <nav className="ml-auto hidden lg:flex space-x-2 xl:space-x-3 w-full text-lg xl:text-xl xl:leading-none md:w-auto -mt-1">
                  <FancyLink destination="/journal" a11yText="Navigate to the journal page" label="Journal" active={router.asPath.includes('/journal')} />
                  <SunIcon className="w-5 mt-[2px]" />
                  <a href="https://example.com" target="_blank" rel="noopener noreferrer" className="relative group">
                    <span className="block relative z-10">
                      Instagram
                    </span>
                    <span className={`w-0 group-hover:w-full opacity-100 rotate-0 transition-ak ease-in-out duration-[350ms] z-[0] h-[10px] bg-white absolute bottom-[-2px] left-0 right-0`}></span>
                  </a>
                  <SunIcon className="w-5 mt-[2px]" />
                  <FancyLink destination="/contact" a11yText="Navigate to the contact page" label="Contact" active={router.asPath == '/contact'} />
                </nav>
              </div>
            </div>
          </div>

          <Link href="/menu" className={`w-[46px] lg:hidden bg-yellow rounded-full flex items-center justify-center`}>
            <div className="w-[55%] flex flex-wrap justify-center">
              <span className="block w-[65%] mb-[3px] h-[2px] rounded-full bg-orange"></span>
              <span className="block w-full mb-[3px] h-[2px] rounded-full bg-orange"></span>
              <span className="block w-[65%] h-[2px] rounded-full bg-orange"></span>
            </div>
          </Link>
        </header>
      </div>
    </LazyMotion>
  )
}