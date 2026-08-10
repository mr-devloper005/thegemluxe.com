import { SITE_CONFIG } from '@/lib/site-config'
import { pagesContent } from '@/editable/content/pages.content'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'

export default function AboutPage() {
  return (
    <EditableSiteShell>
      <main className="bg-white px-4 py-14 text-black sm:px-6 lg:px-8">
        <section className="mx-auto grid max-w-[1100px] gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="border-b-4 border-black bg-white pb-10">
            <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[var(--slot4-accent)]">{pagesContent.about.badge}</p>
            <h1 className="mt-5 text-5xl font-black tracking-normal">About {SITE_CONFIG.name}</h1>
            <p className="mt-5 max-w-2xl text-base leading-8 opacity-70">{pagesContent.about.description}</p>
            <div className="mt-8 space-y-4 text-sm leading-8 opacity-75">
              {pagesContent.about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </article>
          <aside className="grid gap-px bg-black">
            {pagesContent.about.values.map((value) => (
              <div key={value.title} className="bg-white p-6">
                <h2 className="text-xl font-black tracking-normal">{value.title}</h2>
                <p className="mt-3 text-sm leading-7 opacity-70">{value.description}</p>
              </div>
            ))}
          </aside>
        </section>
        <section className="mx-auto mt-14 grid max-w-[1100px] gap-px bg-black md:grid-cols-3">
          {[
            ['Editorial rhythm', 'Lead stories, top grids, archive cards, and detail pages now share a publication-style pace.'],
            ['Reader pathways', 'Navigation keeps readers close to articles, categories, contact, and account actions without crowding the page.'],
            ['Content formats', 'The design supports long reads, visual posts, listings, saved resources, and profile-led discovery.'],
          ].map(([title, body]) => (
            <div key={title} className="bg-[var(--slot4-gray)] p-7">
              <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[var(--slot4-accent)]">{title}</p>
              <p className="mt-4 text-sm leading-7 text-black/70">{body}</p>
            </div>
          ))}
        </section>
      </main>
    </EditableSiteShell>
  )
}
