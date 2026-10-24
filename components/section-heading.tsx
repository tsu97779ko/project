import Link from 'next/link'
import { ChevronRight, type LucideIcon } from 'lucide-react'

type Props = {
  id: string
  title: string
  icon: LucideIcon
  moreHref?: string
}

export function SectionHeading({ id, title, icon: Icon, moreHref }: Props) {
  return (
    <div className="mb-4 flex items-center justify-between gap-4">
      <h2 id={id} className="flex items-center gap-2 text-xl font-extrabold">
        <span className="flex size-8 items-center justify-center rounded-full bg-primary/10 text-primary">
          <Icon className="size-4" aria-hidden="true" />
        </span>
        {title}
      </h2>
      {moreHref && (
        <Link
          href={moreHref}
          className="flex items-center text-sm font-medium text-primary hover:underline"
        >
          もっと見る
          <ChevronRight className="size-4" aria-hidden="true" />
        </Link>
      )}
    </div>
  )
}
