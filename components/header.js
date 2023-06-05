import FancyLink from '@/components/fancyLink'
import { useRouter } from 'next/router'
import LogoIcon from "@/icons/logo.svg";
import SunIcon from "@/icons/sun.svg";
import SunnyIcon from "@/icons/sunny.svg";
import Link from 'next/link';
import { m, useScroll, useTransform, LazyMotion, domAnimation } from 'framer-motion';

export default function Header({ sunny }) {
  const router = useRouter()

  const { scrollYProgress } = useScroll()
  const rotate = useTransform(scrollYProgress,[0, 1],[-360, 360],{ clamp: true })
  
  return (
    <LazyMotion features={domAnimation}>
      <header className={`fixed top-5 left-5 right-5 z-[100] bg-yellow rounded-full px-10 ${sunny ? 'py-[7px]' : 'pt-[14px] pb-[15px]' }`}>
        <div className="flex flex-wrap items-center">
          <nav className="mr-auto hidden space-x-2 xl:space-x-3 w-full text-lg xl:text-xl xl:leading-none md:w-auto mt-[-2px] lg:flex">
            <FancyLink destination="/" active={router.asPath == '/'} a11yText="Navigate to the home page" label="Home" />
            <SunIcon className="w-5 mt-[2px]" />
            <FancyLink destination="/about" active={router.asPath == '/about'} a11yText="Navigate to the projects page" label="Projects" />
            <SunIcon className="w-5 mt-[2px]" />
            <FancyLink destination="/about" a11yText="Navigate to the mission page" label="Mission" />
            <SunIcon className="w-5 mt-[2px]" />
            <FancyLink destination="/about" a11yText="Navigate to the team page" label="Team" />
          </nav>

            <m.div style={{ rotate: sunny ? rotate : 0 }} className="mx-auto">
              <Link href="/" aria-label="Navigate to the home page" className={`block mx-auto relative`}>
                <SunnyIcon className={`transition-opacity ease-in-out duration-300 inset-0 w-[40px] h-[40px] xl:w-[48px] xl:h-[48px] text-orange ${sunny ? 'opacity-100' : 'absolute opacity-0' }`} />
                <LogoIcon className={`transition-opacity ease-in-out duration-300 inset-0 w-[240px] xl:w-[300px] text-orange ${sunny ? 'opacity-0 absolute' : 'opacity-100' }`} />
              </Link>
            </m.div>
          

          <nav className="ml-auto hidden lg:flex space-x-2 xl:space-x-3 w-full text-lg xl:text-xl xl:leading-none md:w-auto -mt-1">
            <FancyLink destination="/about" a11yText="Navigate to the journal page" label="Journal" />
            <SunIcon className="w-5 mt-[2px]" />
            <FancyLink destination="/about" a11yText="Navigate to the instagram page" label="Instagram" />
            <SunIcon className="w-5 mt-[2px]" />
            <FancyLink destination="/about" a11yText="Navigate to the contact page" label="Contact" />
          </nav>
        </div>
      </header>
    </LazyMotion>
  )
}