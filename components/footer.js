import Container from '@/components/container'
import FancyLink from './fancyLink'
import SunIcon from "@/icons/sun.svg";
import FooterLockupIcon from "@/icons/footer-lockup.svg";

export default function Footer() {
  return (
    <footer className="bg-yellow text-black pb-8 relative">
      <div class="arrow-up absolute top-[-10vw] lg:top-[-5vw] left-0 right-0 w-full transform scale-x-[1000%]"></div>
      <Container>
        <div className="flex flex-wrap items-end relative z-10">
          <div className="w-full lg:w-auto mr-auto order-3 lg:order-1 text-center lg:text-left text-base xl:text-xl xl:leading-none">
            <span className="block">© 2023 Anotherkind Architects Limited, C/N - 2345623</span>
          </div>

          <FooterLockupIcon className="w-[200px] lg:w-[180px] xl:w-[250px] mx-auto order-1 lg:order-2 mb-12 lg:mb-0" />

          <nav className="ml-auto flex space-x-2 xl:space-x-3 w-full text-base xl:text-xl xl:leading-none lg:w-auto order-2 lg:order-3 justify-center lg:justify-end mb-2 lg:mb-0">
            <FancyLink destination="/about" a11yText="Navigate to the privacy page" label="Privacy" />
            <SunIcon className="w-5 mt-[2px]" />
            <FancyLink destination="/about" a11yText="Navigate to the journal page" label="Journal" />
            <SunIcon className="w-5 mt-[2px]" />
            <FancyLink destination="/about" a11yText="Navigate to the instagram page" label="Instagram" />
            <SunIcon className="w-5 mt-[2px]" />
            <FancyLink destination="/about" a11yText="Navigate to the contact page" label="Contact" />
          </nav>
        </div>
      </Container>
    </footer>
  )
}