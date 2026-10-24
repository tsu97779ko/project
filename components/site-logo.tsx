import { BookHeart } from 'lucide-react'

export function SiteLogo({ className = '' }: { className?: string }) {
  return (
    <span className={`flex items-center gap-2 ${className}`}>
      <span className="flex size-9 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-sm">
        <BookHeart className="size-5" aria-hidden="true" />
      </span>
      <span className="font-heading text-lg font-extrabold tracking-wide text-foreground">
        ものがたりポスト
      </span>
    </span>
  )
}
