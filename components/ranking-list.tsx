import Link from 'next/link'
import { Crown } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { ranking } from '@/lib/sample-works'

export function RankingList() {
  return (
    <section aria-labelledby="ranking-heading" id="ranking" className="rounded-3xl bg-secondary p-5">
      <SectionHeading id="ranking-heading" title="今週のランキング" icon={Crown} />
      <ol className="flex flex-col gap-2">
        {ranking.map((item, index) => (
          <li key={item.id}>
            <Link
              href="#"
              className="flex items-center gap-3 rounded-2xl bg-white p-3 transition-colors hover:bg-accent"
            >
              <span
                className={`flex size-8 shrink-0 items-center justify-center rounded-full text-sm font-extrabold ${
                  index < 3 ? 'bg-primary text-primary-foreground' : 'bg-secondary text-foreground'
                }`}
              >
                {index + 1}
                <span className="sr-only">位</span>
              </span>
              <span className="min-w-0 flex-1">
                <span className="block truncate text-sm font-bold">{item.title}</span>
                <span className="block truncate text-xs text-muted-foreground">{item.author}</span>
              </span>
              <span className="shrink-0 rounded-full border border-primary/30 px-2 py-0.5 text-[0.7rem] font-bold text-primary">
                {item.type}
              </span>
            </Link>
          </li>
        ))}
      </ol>
    </section>
  )
}
