import Container from '@/components/container'
import FancyLink from './fancyLink'
import SunIcon from "@/icons/sun.svg";
import FooterLockupIcon from "@/icons/footer-lockup.svg";

export default function Footer() {
  return (
    <footer className="bg-yellow text-black pb-3 lg:pb-4 relative">
      <div className="arrow-up absolute top-[-5vw] lg:top-[-5vw] left-0 right-0 w-full transform scale-x-[1000%]"></div>
      <Container>
        <div className="flex flex-wrap items-end relative z-10">
          <div className="w-full lg:w-auto mr-auto order-3 lg:order-1 text-center lg:text-left text-xs lg:text-base 2xl:text-xl 2xl:leading-none">
            <span className="block">© 2023 Anotherkind Architects Limited, C/N - 2345623</span>
          </div>

          <FooterLockupIcon className="w-[125px] lg:w-[180px] xl:w-[250px] mx-auto order-1 lg:order-2 mb-4 lg:mb-0 translate-x-[4px] lg:translate-x-[-19px] xl:translate-x-[-23px]" />

          <nav className="ml-auto flex space-x-2 xl:space-x-3 w-full text-sm lg:text-base 2xl:text-xl 2xl:leading-none lg:w-auto order-2 lg:order-3 justify-center lg:justify-end mb-1 lg:mb-0">
            <FancyLink destination="/privacy" a11yText="Navigate to the privacy page" label="Privacy" />
            <SunIcon className="w-5 mt-[2px]" />
            <FancyLink destination="/journal" a11yText="Navigate to the journal page" label="Journal" />
            <SunIcon className="w-5 mt-[2px]" />
            <a href="https://example.com" target="_blank" rel="noopener noreferrer" className="relative group">
              <span className="block relative z-10">
                Instagram
              </span>
              <span className={`w-0 group-hover:w-full opacity-100 rotate-0 transition-ak ease-in-out duration-[350ms] z-[0] h-[10px] bg-white absolute bottom-[-2px] left-0 right-0`}></span>
            </a>
            <SunIcon className="w-5 mt-[2px]" />
            <FancyLink destination="/contact" a11yText="Navigate to the contact page" label="Contact" />
          </nav>
        </div>
      </Container>
    </footer>
  )
}