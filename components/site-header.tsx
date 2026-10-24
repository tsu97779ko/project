import Link from 'next/link'
import { PenLine, Search } from 'lucide-react'
import { SiteLogo } from '@/components/site-logo'
import { SignOutButton } from '@/components/sign-out-button'

const navItems = [
  { href: '/', label: 'ホーム', current: true },
  { href: '#novels', label: '小説', current: false },
  { href: '#manga', label: '漫画', current: false },
  { href: '#ranking', label: 'ランキング', current: false },
]

export function SiteHeader({ userName }: { userName: string }) {
  return (
    <header className="sticky top-0 z-30 bg-secondary/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-3">
        <Link href="/" aria-label="ものがたりポスト ホーム">
          <SiteLogo />
        </Link>

        <form role="search" className="ml-auto hidden flex-1 md:flex md:max-w-xs">
          <label htmlFor="site-search" className="sr-only">
            作品を検索
          </label>
          <div className="relative w-full">
            <Search
              className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
              aria-hidden="true"
            />
            <input
              id="site-search"
              type="search"
              placeholder="作品名・作者名で検索"
              className="h-10 w-full rounded-full border border-border bg-white pl-9 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
          </div>
        </form>

        <div className="ml-auto flex items-center gap-1 md:ml-0">
          <Link
            href="#post"
            className="flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-bold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
          >
            <PenLine className="size-4" aria-hidden="true" />
            <span>投稿する</span>
          </Link>
          <span className="hidden items-center gap-2 pl-2 lg:flex">
            <span
              className="flex size-8 items-center justify-center rounded-full bg-white text-sm font-bold text-primary"
              aria-hidden="true"
            >
              {userName.slice(0, 1)}
            </span>
            <span className="max-w-28 truncate text-sm font-medium">{userName}さん</span>
          </span>
          <SignOutButton />
        </div>
      </div>

      <nav aria-label="メインメニュー" className="border-t border-white/70">
        <ul className="mx-auto flex max-w-6xl gap-1 overflow-x-auto px-4">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                aria-current={item.current ? 'page' : undefined}
                className="relative block whitespace-nowrap px-4 py-2.5 text-sm font-medium text-foreground/80 transition-colors hover:text-primary aria-[current=page]:font-bold aria-[current=page]:text-primary aria-[current=page]:after:absolute aria-[current=page]:after:inset-x-3 aria-[current=page]:after:bottom-0 aria-[current=page]:after:h-0.5 aria-[current=page]:after:rounded-full aria-[current=page]:after:bg-primary"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
