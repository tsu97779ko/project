import Link from 'next/link'
import { Clock, Heart, ListOrdered } from 'lucide-react'
import type { Novel } from '@/lib/sample-works'

export function NovelCard({ novel }: { novel: Novel }) {
  return (
    <article className="group relative flex flex-col rounded-2xl border border-border bg-white p-5 transition-shadow hover:shadow-md">
      <div className="flex items-center justify-between gap-2">
        <span className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-bold text-foreground/80">
          {novel.genre}
        </span>
        <span className="flex items-center gap-1 text-xs text-muted-foreground">
          <Clock className="size-3.5" aria-hidden="true" />
          {novel.updatedAt}
        </span>
      </div>

      <h3 className="mt-3 text-lg font-bold leading-snug">
        <Link href="#" className="after:absolute after:inset-0 group-hover:text-primary">
          {novel.title}
        </Link>
      </h3>
      <p className="mt-0.5 text-sm text-muted-foreground">{novel.author}</p>

      <p className="mt-3 line-clamp-3 flex-1 text-[0.95rem] leading-relaxed text-foreground/90">
        {novel.excerpt}
      </p>

      <div className="mt-4 flex items-center gap-4 border-t border-dashed border-border pt-3 text-xs text-muted-foreground">
        <span className="flex items-center gap-1">
          <ListOrdered className="size-3.5" aria-hidden="true" />
          全{novel.chapters}話
        </span>
        <span className="flex items-center gap-1">
          <Heart className="size-3.5 text-primary" aria-hidden="true" />
          <span className="sr-only">いいね</span>
          {novel.likes.toLocaleString('ja-JP')}
        </span>
      </div>
    </article>
  )
}
