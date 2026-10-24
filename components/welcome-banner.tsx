import Link from 'next/link'
import { BookOpen, Image as ImageIcon, Sparkles } from 'lucide-react'
import { genres } from '@/lib/sample-works'

export function WelcomeBanner({ userName }: { userName: string }) {
  return (
    <section aria-labelledby="welcome-heading" className="rounded-3xl bg-secondary px-6 py-8 md:px-10 md:py-10">
      <p className="flex items-center gap-1.5 text-sm font-medium text-primary">
        <Sparkles className="size-4" aria-hidden="true" />
        メンバー限定のものがたり広場
      </p>
      <h1 id="welcome-heading" className="mt-2 text-balance text-2xl font-extrabold leading-snug md:text-3xl">
        おかえりなさい、{userName}さん。
        <br />
        今日はどんなお話を読みますか？
      </h1>

      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          href="#novels"
          className="flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
        >
          <BookOpen className="size-4" aria-hidden="true" />
          小説を読む
        </Link>
        <Link
          href="#manga"
          className="flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-primary shadow-sm ring-1 ring-primary/20 transition-colors hover:bg-accent"
        >
          <ImageIcon className="size-4" aria-hidden="true" />
          漫画を読む
        </Link>
      </div>

      <div className="mt-6">
        <h2 className="sr-only">ジャンルから探す</h2>
        <ul className="flex flex-wrap gap-2">
          {genres.map((genre) => (
            <li key={genre}>
              <Link
                href="#"
                className="block rounded-full bg-white px-3 py-1 text-xs font-medium text-foreground/80 transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                {'# '}
                {genre}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
