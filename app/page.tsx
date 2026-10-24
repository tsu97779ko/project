import { headers } from 'next/headers'
import { redirect } from 'next/navigation'
import { BookOpen, Image as ImageIcon } from 'lucide-react'
import { auth } from '@/lib/auth'
import { latestNovels, popularManga } from '@/lib/sample-works'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { WelcomeBanner } from '@/components/welcome-banner'
import { SectionHeading } from '@/components/section-heading'
import { NovelCard } from '@/components/novel-card'
import { MangaCard } from '@/components/manga-card'
import { RankingList } from '@/components/ranking-list'
import { PostCallout } from '@/components/post-callout'

export default async function HomePage() {
  const session = await auth.api.getSession({ headers: await headers() })
  if (!session?.user) redirect('/sign-in')

  const userName = session.user.name || 'メンバー'

  return (
    <>
      <SiteHeader userName={userName} />
      <main className="mx-auto max-w-6xl px-4 pt-6">
        <WelcomeBanner userName={userName} />

        <div className="mt-10 flex flex-col gap-10 lg:flex-row">
          <div className="flex min-w-0 flex-1 flex-col gap-12">
            <section aria-labelledby="manga-heading" id="manga" className="scroll-mt-32">
              <SectionHeading id="manga-heading" title="人気の漫画" icon={ImageIcon} moreHref="#" />
              <div className="grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-4">
                {popularManga.map((manga) => (
                  <MangaCard key={manga.id} manga={manga} />
                ))}
              </div>
            </section>

            <section aria-labelledby="novels-heading" id="novels" className="scroll-mt-32">
              <SectionHeading id="novels-heading" title="新着の小説" icon={BookOpen} moreHref="#" />
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {latestNovels.map((novel) => (
                  <NovelCard key={novel.id} novel={novel} />
                ))}
              </div>
            </section>
          </div>

          <aside className="flex w-full flex-col gap-6 lg:w-80 lg:shrink-0">
            <RankingList />
            <PostCallout />
          </aside>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
