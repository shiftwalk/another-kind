import Link from 'next/link'

export default function FancyLink( {destination, a11yText, label, className, active} ) {
  return (
    <Link scroll={false} href={destination} aria-label={a11yText} className={`${className} relative group`}>
      <span className="block relative z-[2]">{label}</span>
      
      <span className={`${active ? 'w-full opacity-100' : 'w-0 opacity-0 rotate-0' } transition-ak ease-in-out duration-[350ms] z-[1] h-[7px] rounded-full bg-orange absolute bottom-[2px] xl:bottom-[-2px] left-0 right-0`}></span>

      <span className={`${active ? 'w-full opacity-100' : 'w-0 group-hover:w-full opacity-100 rotate-0' } transition-ak ease-in-out duration-[350ms] z-[0] h-[7px] rounded-full bg-white absolute bottom-[2px] xl:bottom-[-2px] left-0 right-0`}></span>
    </Link>
  )
}