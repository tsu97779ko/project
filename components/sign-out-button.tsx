'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { LogOut } from 'lucide-react'
import { authClient } from '@/lib/auth-client'

export function SignOutButton() {
  const router = useRouter()
  const [pending, setPending] = useState(false)

  async function handleSignOut() {
    setPending(true)
    await authClient.signOut()
    router.push('/sign-in')
    router.refresh()
  }

  return (
    <button
      type="button"
      onClick={handleSignOut}
      disabled={pending}
      className="flex items-center gap-1.5 rounded-full px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-white disabled:opacity-60"
    >
      <LogOut className="size-4" aria-hidden="true" />
      <span className="hidden sm:inline">{pending ? 'ログアウト中…' : 'ログアウト'}</span>
      <span className="sr-only sm:hidden">ログアウト</span>
    </button>
  )
}
