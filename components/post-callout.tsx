import Link from 'next/link'
import { BookOpen, Image as ImageIcon } from 'lucide-react'

export function PostCallout() {
  return (
    <section
      id="post"
      aria-labelledby="post-heading"
      className="rounded-3xl border-2 border-dashed border-primary/30 p-5"
    >
      <h2 id="post-heading" className="text-lg font-extrabold">
        あなたの作品を投稿しよう
      </h2>
      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
        書いたお話や描いた漫画を、メンバーだけにそっと届けられます。
      </p>
      <div className="mt-4 grid grid-cols-2 gap-2">
        <Link
          href="#"
          className="flex flex-col items-center gap-1.5 rounded-2xl bg-primary px-3 py-4 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/90"
        >
          <BookOpen className="size-5" aria-hidden="true" />
          小説を書く
        </Link>
        <Link
          href="#"
          className="flex flex-col items-center gap-1.5 rounded-2xl bg-accent px-3 py-4 text-sm font-bold text-primary transition-colors hover:bg-primary/15"
        >
          <ImageIcon className="size-5" aria-hidden="true" />
          漫画を載せる
        </Link>
      </div>
    </section>
  )
}
