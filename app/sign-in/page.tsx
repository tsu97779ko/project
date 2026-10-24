import type { Metadata } from 'next'
import Image from 'next/image'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'
import { ShieldCheck } from 'lucide-react'
import { auth } from '@/lib/auth'
import { LoginForm } from '@/components/login-form'
import { SiteLogo } from '@/components/site-logo'

export const metadata: Metadata = {
  title: 'ログイン | ものがたりポスト',
}

export default async function SignInPage() {
  const session = await auth.api.getSession({ headers: await headers() })
  if (session?.user) redirect('/')

  return (
    <main className="flex min-h-dvh flex-col lg:flex-row">
      <section
        aria-hidden="true"
        className="hidden flex-1 flex-col items-center justify-center gap-6 bg-secondary p-10 lg:flex"
      >
        <Image
          src="/images/login-illustration.png"
          alt=""
          width={440}
          height={440}
          priority
          className="h-auto w-full max-w-md rounded-[2.5rem]"
        />
        <p className="max-w-sm text-balance text-center font-heading text-xl font-bold leading-relaxed">
          ちいさな物語も、
          <br />
          ここならきっと誰かに届く。
        </p>
      </section>

      <section className="flex flex-1 items-center justify-center px-5 py-12">
        <div className="w-full max-w-sm">
          <SiteLogo className="justify-center" />

          <div className="mt-8 rounded-3xl border border-border bg-white p-6 shadow-[0_8px_30px_-12px_rgba(89,124,235,0.25)] sm:p-8">
            <h1 className="text-center text-2xl font-extrabold">ログイン</h1>
            <p className="mt-2 text-center text-sm leading-relaxed text-muted-foreground">
              登録メンバーの方はメールアドレスと
              <br />
              パスワードでログインしてください。
            </p>
            <div className="mt-6">
              <LoginForm />
            </div>
          </div>

          <p className="mt-6 flex items-start gap-2 rounded-2xl bg-secondary px-4 py-3 text-xs leading-relaxed text-foreground/80">
            <ShieldCheck className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
            このサイトは招待制です。アカウントをお持ちでない方は、管理者にお問い合わせください。
          </p>
        </div>
      </section>
    </main>
  )
}
