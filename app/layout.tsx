import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { M_PLUS_Rounded_1c, Noto_Sans_JP } from 'next/font/google'
import './globals.css'

const rounded = M_PLUS_Rounded_1c({
  weight: ['500', '700', '800'],
  subsets: ['latin'],
  variable: '--font-rounded',
  display: 'swap',
})

const notoSans = Noto_Sans_JP({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-noto',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'ものがたりポスト | 小説・漫画の投稿・閲覧サイト',
  description:
    'パスワードを持つ登録メンバーだけが参加できる、小説と漫画の投稿・閲覧サイトです。',
  generator: 'v0.app',
  robots: { index: false, follow: false },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#F5EBED',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja" className={`${rounded.variable} ${notoSans.variable}`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
