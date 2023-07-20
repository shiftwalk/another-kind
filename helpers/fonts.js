import localFont from 'next/font/local'

export const Sohne = localFont({
  src: [
    {
      path: '../public/fonts/soehne-buch.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/soehne-kraftig.woff2',
      weight: '500',
      style: 'normal',
    }
  ],
  subsets: ['latin'],
  variable: '--font-Sohne',
})

export const VCGaramondCondensed = localFont({
  src: [
    {
      path: '../public/fonts/VCGaramondCondensed-Medium.woff2',
      weight: '600',
      style: 'normal',
    }
  ],
  subsets: ['latin'],
  variable: '--font-VCGaramondCondensed',
})

export const PPEditorialNewItalic = localFont({
  src: [
    {
      path: '../public/fonts/PPEditorialNew-LightItalic.woff2',
      weight: '300',
      style: 'normal',
    }
  ],
  subsets: ['latin'],
  variable: '--font-PPEditorialNewItalic',
})