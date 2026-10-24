import Image from 'next/image'
import Link from 'next/link'
import { Heart } from 'lucide-react'
import type { Manga } from '@/lib/sample-works'

export function MangaCard({ manga }: { manga: Manga }) {
  return (
    <article className="group relative flex flex-col">
      <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-secondary">
        <Image
          src={manga.cover || '/placeholder.svg'}
          alt={`${manga.title}の表紙`}
          fill
          sizes="(min-width: 1024px) 220px, (min-width: 640px) 33vw, 50vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <span className="absolute left-2 top-2 rounded-full bg-white/90 px-2 py-0.5 text-xs font-bold text-foreground">
          {manga.genre}
        </span>
      </div>
      <h3 className="mt-2.5 line-clamp-1 font-bold">
        <Link href="#" className="after:absolute after:inset-0 group-hover:text-primary">
          {manga.title}
        </Link>
      </h3>
      <div className="mt-0.5 flex items-center justify-between gap-2 text-xs text-muted-foreground">
        <span className="truncate">{manga.author}</span>
        <span className="flex shrink-0 items-center gap-1">
          <Heart className="size-3.5 text-primary" aria-hidden="true" />
          <span className="sr-only">いいね</span>
          {manga.likes.toLocaleString('ja-JP')}
        </span>
      </div>
      <p className="mt-0.5 text-xs text-muted-foreground">{`第${manga.episodes}話まで公開`}</p>
    </article>
  )
}
