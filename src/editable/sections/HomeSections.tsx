import Link from 'next/link'
import { ArrowRight, Search, FileText, Building2, Camera, Bookmark, Download, UserRound } from 'lucide-react'
import type { SitePost } from '@/lib/site-connector'
import type { HomeTimeSection } from '@/lib/task-data'
import type { TaskKey } from '@/lib/site-config'
import { SITE_CONFIG } from '@/lib/site-config'
import { pagesContent } from '@/editable/content/pages.content'
import { editableDesignContract as dc, editablePalette as pal } from '@/editable/layouts/design-contract'
import { getEditableCategory, getEditableExcerpt, getEditablePostImage, postHref } from '@/editable/cards/PostCards'

type HomeSectionProps = {
  primaryTask: TaskKey
  primaryRoute: string
  posts: SitePost[]
  timeSections: HomeTimeSection[]
}

function taskLabel(task: TaskKey) {
  return SITE_CONFIG.tasks.find((item) => item.key === task)?.label || task
}

const taskIcons: Record<string, typeof FileText> = {
  article: FileText,
  listing: Building2,
  classified: FileText,
  image: Camera,
  sbm: Bookmark,
  pdf: Download,
  profile: UserRound,
}

export function EditableHomeHero({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const featured = posts[0]
  if (!featured) return null
  return (
    <section>
      <div className="bg-gradient-to-br from-[var(--slot4-dark-bg)] via-[var(--slot4-accent)] to-[var(--slot4-dark-bg)]">
        <div className={`${dc.shell.section} py-14 lg:py-20`}>
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="text-[var(--slot4-dark-text)]">
              <p className="text-xs font-black uppercase tracking-[0.22em] opacity-70">{pagesContent.home.hero.focusLabel}</p>
              <h1 className="mt-4 text-4xl font-black uppercase leading-[1.05] tracking-normal sm:text-5xl">A thoughtful home for stories, visuals, and discovery.</h1>
              <p className="mt-6 max-w-xl text-sm leading-7 opacity-75">{SITE_CONFIG.description}</p>
              <form action="/search" className="mt-8 flex max-w-lg overflow-hidden rounded-lg bg-white shadow-lg">
                <input name="q" placeholder={pagesContent.home.hero.searchPlaceholder} className="min-w-0 flex-1 px-5 py-4 text-sm font-semibold text-[var(--slot4-page-text)] outline-none placeholder:text-black/40" />
                <button className="bg-[var(--slot4-accent)] px-6 text-white"><Search className="h-5 w-5" /></button>
              </form>
            </div>
            <Link href={postHref(primaryTask, featured, primaryRoute)} className="group block overflow-hidden rounded-2xl bg-white shadow-2xl">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={getEditablePostImage(featured)} alt={featured.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--slot4-accent)]">Featured now</p>
                <h2 className="mt-2 text-lg font-black leading-tight">{featured.title}</h2>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="border-b border-black/6 bg-white">
        <div className={`${dc.shell.section} py-4`}>
          <div className="flex items-center gap-8 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {posts.slice(1, 6).map((post) => (
              <Link key={post.id || post.slug} href={postHref(primaryTask, post, primaryRoute)} className="flex shrink-0 items-center gap-3 py-2">
                <img src={getEditablePostImage(post)} alt="" className="h-10 w-10 rounded-lg object-cover" />
                <span className="max-w-[150px] truncate text-sm font-bold">{post.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function EditableStoryRail({ primaryRoute }: HomeSectionProps) {
  const enabledTasks = SITE_CONFIG.tasks.filter((t) => t.enabled)
  if (!enabledTasks.length) return null
  return (
    <section className="bg-white">
      <div className={`${dc.shell.section} ${dc.shell.sectionY}`}>
        <div className="flex items-end justify-between gap-4 border-b border-black/10 pb-6">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[var(--slot4-accent)]">Browse categories</p>
            <h2 className="mt-2 text-2xl font-black uppercase tracking-normal">Choose a section</h2>
          </div>
          <Link href={primaryRoute} className="inline-flex items-center gap-2 text-sm font-bold opacity-60 hover:opacity-100">View all <ArrowRight className="h-4 w-4" /></Link>
        </div>
        <div className="mt-8 flex flex-wrap gap-4">
          {enabledTasks.map((task) => {
            const Icon = taskIcons[task.key] || FileText
            return (
              <Link key={task.key} href={task.route} className="inline-flex items-center gap-3 rounded-lg border border-black/8 bg-[var(--slot4-surface-bg)] px-5 py-3 text-sm font-bold transition hover:border-[var(--slot4-accent)] hover:shadow-sm">
                <Icon className="h-5 w-5 opacity-50" /> {task.label}
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export function EditableMagazineSplit(_props: HomeSectionProps) {
  return null
}

export function EditableTimeCollections({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const recentPosts = posts.slice(6, 14)
  const picks = posts.slice(14, 18)
  if (!recentPosts.length && !picks.length) return null
  return (
    <section className={pal.pageBg}>
      <div className={`${dc.shell.section} ${dc.shell.sectionY}`}>
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          {recentPosts.length ? (
            <div>
              <div className="flex items-end justify-between gap-4">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[var(--slot4-accent)]">Recent {taskLabel(primaryTask).toLowerCase()}s</p>
                  <h2 className="mt-2 text-2xl font-black uppercase tracking-normal">Latest from the community</h2>
                </div>
                <Link href={primaryRoute} className="inline-flex items-center gap-2 text-sm font-bold opacity-60 hover:opacity-100">View all <ArrowRight className="h-4 w-4" /></Link>
              </div>
              <div className="mt-6">
                {recentPosts.map((post, index) => (
                  <Link key={post.id || post.slug} href={postHref(primaryTask, post, primaryRoute)} className="group flex gap-5 border-b border-dashed border-black/10 py-5 last:border-0">
                    <img src={getEditablePostImage(post)} alt="" className="h-20 w-20 shrink-0 rounded-lg object-cover" />
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.18em]">
                        <span className="text-[var(--slot4-accent)]">{getEditableCategory(post)}</span>
                        <span className="opacity-40">·</span>
                        <span className="opacity-40">No. {String(index + 1).padStart(2, '0')}</span>
                      </div>
                      <h3 className="mt-1 line-clamp-2 text-lg font-black leading-tight group-hover:text-[var(--slot4-accent)]">{post.title}</h3>
                      <p className="mt-2 line-clamp-2 text-sm leading-6 opacity-55">{getEditableExcerpt(post, 130)}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ) : null}
          {picks.length ? (
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[var(--slot4-accent)]">Author showcase</p>
              <h2 className="mt-2 text-2xl font-black uppercase tracking-normal">Notable picks</h2>
              <div className="mt-6 grid gap-4">
                {picks.map((post) => (
                  <Link key={post.id || post.slug} href={postHref(primaryTask, post, primaryRoute)} className="group flex gap-4 rounded-xl border border-black/6 bg-white p-4 transition hover:-translate-y-0.5 hover:shadow-md">
                    <img src={getEditablePostImage(post)} alt="" className="h-16 w-16 shrink-0 rounded-lg object-cover" />
                    <div className="min-w-0">
                      <h3 className="line-clamp-2 text-sm font-black leading-tight">{post.title}</h3>
                      <p className="mt-2 line-clamp-2 text-xs leading-5 opacity-55">{getEditableExcerpt(post, 100)}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  )
}

export function EditableHomeCta() {
  return (
    <section className={pal.pageBg}>
      <div className={`${dc.shell.section} py-16 text-center`}>
        <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[var(--slot4-accent)]">{pagesContent.home.cta.badge}</p>
        <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-black uppercase tracking-normal">{pagesContent.home.cta.title}</h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[var(--slot4-muted-text)]">{pagesContent.home.cta.description}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href={pagesContent.home.cta.primaryCta.href} className={dc.button.primary}>{pagesContent.home.cta.primaryCta.label}</Link>
          <Link href={pagesContent.home.cta.secondaryCta.href} className={dc.button.secondary}>{pagesContent.home.cta.secondaryCta.label}</Link>
        </div>
      </div>
    </section>
  )
}
