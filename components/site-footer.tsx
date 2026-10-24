import { SiteLogo } from '@/components/site-logo'

export function SiteFooter() {
  return (
    <footer className="mt-16 bg-secondary">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-4 py-8 text-center">
        <SiteLogo />
        <p className="text-xs text-muted-foreground">
          このサイトは登録メンバー限定です。作品の無断転載はご遠慮ください。
        </p>
        <p className="text-xs text-muted-foreground">{'© 2026 ものがたりポスト'}</p>
      </div>
    </footer>
  )
}
