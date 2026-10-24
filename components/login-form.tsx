'use client'

import { useState, type FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import { Eye, EyeOff, Lock, Mail } from 'lucide-react'
import { authClient } from '@/lib/auth-client'

export function LoginForm() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [pending, setPending] = useState(false)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError(null)
    const formData = new FormData(event.currentTarget)
    const email = String(formData.get('email') ?? '').trim()
    const password = String(formData.get('password') ?? '')

    if (!email || !password) {
      setError('メールアドレスとパスワードを入力してください。')
      return
    }

    setPending(true)
    const { error: signInError } = await authClient.signIn.email({ email, password })
    if (signInError) {
      setError('メールアドレスまたはパスワードが正しくありません。')
      setPending(false)
      return
    }
    router.push('/')
    router.refresh()
  }

  const inputClass =
    'h-12 w-full rounded-xl border border-input bg-white pl-10 pr-4 text-[0.95rem] text-foreground placeholder:text-muted-foreground/70 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30'

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <div className="flex flex-col gap-1.5">
        <label htmlFor="email" className="text-sm font-bold">
          メールアドレス
        </label>
        <div className="relative">
          <Mail
            className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
            aria-hidden="true"
          />
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="you@example.com"
            className={inputClass}
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="password" className="text-sm font-bold">
          パスワード
        </label>
        <div className="relative">
          <Lock
            className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
            aria-hidden="true"
          />
          <input
            id="password"
            name="password"
            type={showPassword ? 'text' : 'password'}
            autoComplete="current-password"
            required
            placeholder="パスワードを入力"
            className={`${inputClass} pr-12`}
          />
          <button
            type="button"
            onClick={() => setShowPassword((v) => !v)}
            aria-label={showPassword ? 'パスワードを隠す' : 'パスワードを表示'}
            aria-pressed={showPassword}
            className="absolute right-2 top-1/2 flex size-9 -translate-y-1/2 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          >
            {showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
          </button>
        </div>
      </div>

      {error && (
        <p role="alert" className="rounded-xl bg-destructive/10 px-4 py-3 text-sm font-medium text-destructive">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="mt-1 h-12 rounded-full bg-primary text-base font-bold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/30 disabled:opacity-60"
      >
        {pending ? 'ログイン中…' : 'ログイン'}
      </button>
    </form>
  )
}
