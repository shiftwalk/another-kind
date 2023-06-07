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
      <header className={`fixed top-5 left-5 right-5 z-[100] bg-yellow rounded-full px-10 ${sunny ? 'py-[7px]' : 'py-[7px]' }`}>
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
                    <Link href="/" aria-label="Navigate to the home page" className={`block mx-auto relative`}>
                      <SunnyIcon className={`w-[40px] xl:w-[48px] inset-0 text-orange opacity-100`} />
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
                    <Link href="/" aria-label="Navigate to the home page" className={`block mx-auto relative`}>
                      <LogoIcon className={`w-[200px] lg:w-[210px] xl:w-[270px] 2xl:w-[300px] inset-0 text-orange opacity-100`} />
                    </Link>
                  </div>
                </m.div>
              )}
            </AnimatePresence>
          </div>
        
          <nav className="ml-auto hidden lg:flex space-x-2 xl:space-x-3 w-full text-lg xl:text-xl xl:leading-none md:w-auto -mt-1">
            <FancyLink destination="/about" a11yText="Navigate to the journal page" label="Journal" />
            <SunIcon className="w-5 mt-[2px]" />
            <FancyLink destination="/about" a11yText="Navigate to the instagram page" label="Instagram" />
            <SunIcon className="w-5 mt-[2px]" />
            <FancyLink destination="/contact" a11yText="Navigate to the contact page" label="Contact" active={router.asPath == '/contact'} />
          </nav>
        </div>
      </header>
    </LazyMotion>
  )
}