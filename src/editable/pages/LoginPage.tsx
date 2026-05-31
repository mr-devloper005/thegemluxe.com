import type { Metadata } from 'next'
import Link from 'next/link'
import { buildPageMetadata } from '@/lib/seo'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'
import { EditableLocalLoginForm } from '@/editable/components/EditableLocalAuthForms'

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({ path: '/login', title: 'Login', description: 'Local login page for this public site.' })
}

export default function LoginPage() {
  return (
    <EditableSiteShell>
      <main className="bg-white text-black">
        <section className="mx-auto grid min-h-[calc(100vh-12rem)] max-w-[1180px] items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_0.8fr] lg:px-8">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[var(--slot4-accent)]">Member access</p>
            <h1 className="mt-5 max-w-xl border-b-4 border-black pb-6 text-5xl font-black leading-[1.02] tracking-normal sm:text-6xl">Welcome back to the reader desk.</h1>
            <p className="mt-6 max-w-lg text-sm leading-8 opacity-70">Sign in to return to the editorial experience with your reader profile. The account flow is intentionally lightweight for this public template, it gives visitors a complete login path and a personalized navbar state.</p>
            <div className="mt-8 grid gap-px bg-black sm:grid-cols-3">
              {['Save the session', 'Browse faster', 'Test member flow'].map((item) => (
                <div key={item} className="bg-[var(--slot4-gray)] p-4 text-xs font-black uppercase tracking-[0.14em]">{item}</div>
              ))}
            </div>
          </div>
          <div className="border border-black bg-white p-6 sm:p-8">
            <h2 className="text-2xl font-black tracking-normal">Login</h2>
            <EditableLocalLoginForm />
            <p className="mt-5 text-sm opacity-70">New here? <Link href="/signup" className="font-black underline-offset-4 hover:underline">Create an account</Link></p>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
