import type { Metadata } from 'next'
import Link from 'next/link'
import { buildPageMetadata } from '@/lib/seo'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'
import { EditableLocalSignupForm } from '@/editable/components/EditableLocalAuthForms'

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({ path: '/signup', title: 'Sign up', description: 'Local signup page for this public site.' })
}

export default function SignupPage() {
  return (
    <EditableSiteShell>
      <main className="bg-black text-white">
        <section className="mx-auto grid min-h-[calc(100vh-12rem)] max-w-[1180px] items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[0.82fr_1fr] lg:px-8">
          <div className="border border-white/25 bg-white/[0.06] p-6 sm:p-8">
            <h1 className="text-3xl font-black tracking-normal">Create account</h1>
            <EditableLocalSignupForm />
            <p className="mt-5 text-sm text-white/65">Already have an account? <Link href="/login" className="font-black text-white underline-offset-4 hover:underline">Login</Link></p>
          </div>
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.22em] text-white/60">Site access</p>
            <h2 className="mt-5 max-w-xl border-b-4 border-[var(--slot4-accent)] pb-6 text-5xl font-black leading-[1.02] tracking-normal sm:text-6xl">Create a reader profile for the full editorial flow.</h2>
            <p className="mt-6 max-w-lg text-sm leading-8 text-white/68">Create a account to test the complete member journey: registration, login, user-name display in the navbar, and logout.</p>
            <div className="mt-8 grid gap-px bg-white/25 sm:grid-cols-3">
              {['  Your Profile', 'Instant access', 'Navbar identity'].map((item) => (
                <div key={item} className="bg-white/10 p-4 text-xs font-black uppercase tracking-[0.14em] text-white">{item}</div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
