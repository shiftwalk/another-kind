import localFont from 'next/font/local'

export const Sohne = localFont({
  src: [
    {
      path: '../public/fonts/Sohne-Buch.woff2',
      weight: '300',
      style: 'normal',
    }
  ],
  subsets: ['latin'],
  variable: '--font-Sohne',
})

export const Verlag = localFont({
  src: [
    {
      path: '../public/fonts/Verlag-Black.woff2',
      weight: '800',
      style: 'normal',
    }
  ],
  subsets: ['latin'],
  variable: '--font-Verlag',
})

export const VCGaramondCondensed = localFont({
  src: [
    {
      path: '../public/fonts/VCGaramondCondensed-medium.woff2',
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
      path: '../public/fonts/EditorialNew-Lightitalic.woff2',
      weight: '300',
      style: 'normal',
    }
  ],
  subsets: ['latin'],
  variable: '--font-PPEditorialNewItalic',
})