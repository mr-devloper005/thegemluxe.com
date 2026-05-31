import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { globalContent } from '@/editable/content/global.content'

export function EditableFooter() {
  const taskLinks = SITE_CONFIG.tasks.filter((task) => task.enabled)
  const year = new Date().getFullYear()
  const brandWords = SITE_CONFIG.name.trim().split(/\s+/)
  const brandLead = brandWords[0] || SITE_CONFIG.name
  const brandRest = brandWords.slice(1).join(' ')

  return (
    <footer className="bg-black text-white">
      <div className="mx-auto grid max-w-[1180px] gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_1fr_0.9fr] lg:px-8">
        <section>
          <h2 className="text-sm font-black uppercase">Contact</h2>
          <div className="mt-5 border-t border-white/20 pt-7 text-sm leading-7 text-white/70">
            Reach any time at <Link href="/contact" className="font-black text-white underline">our contact page</Link>.
            <div className="mt-4">
              <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-white px-4 py-2 text-sm font-black text-black transition hover:bg-white/90">
                Get in touch
              </Link>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-sm font-black uppercase">Explore</h2>
          <div className="mt-5 grid gap-4 border-t border-white/20 pt-7">
            {taskLinks.slice(0, 6).map((task, index) => (
              <Link key={task.key} href={task.route} className="grid grid-cols-[32px_1fr] gap-4 text-sm font-black hover:text-[var(--slot4-accent-soft)]">
                <span className="text-white/45">{index + 1}</span>
                <span className="inline-flex items-center gap-2">{task.label}<ArrowUpRight className="h-3.5 w-3.5" /></span>
              </Link>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-sm font-black uppercase">About</h2>
          <p className="mt-5 border-t border-white/20 pt-7 text-sm leading-7 text-white/70">{globalContent.footer.description}</p>
        </section>
      </div>

      <div className="mx-auto max-w-[1180px] border-t border-white/20 px-4 py-10 text-center sm:px-6 lg:px-8">
        <Link href="/" className="inline-block text-3xl font-black tracking-normal">
          <span>{brandLead}</span>{brandRest ? <span className="ml-1 text-white/70">{brandRest}</span> : null}
        </Link>
        <div className="mt-6 flex flex-wrap justify-center gap-7 text-xs font-black uppercase text-white/80">
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/article">Articles</Link>
        </div>
        <p className="mt-6 text-xs font-bold uppercase text-white/45">Copyright {year} {SITE_CONFIG.name}. All rights reserved.</p>
      </div>
    </footer>
  )
}
