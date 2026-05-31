import Link from 'next/link'
import type { ReactNode } from 'react'
import { ArrowRight, Search } from 'lucide-react'
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

function dateLine(post: SitePost) {
  const raw = post.publishedAt || post.updatedAt || ''
  const date = raw ? new Date(raw) : null
  const formatted = date && !Number.isNaN(date.getTime()) ? date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) : 'Fresh update'
  return `Admin - ${formatted}`
}

function CategoryLabel({ children }: { children: ReactNode }) {
  return <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--slot4-accent)]">{children}</p>
}

function StoryCard({ post, href, index, large = false }: { post: SitePost; href: string; index: number; large?: boolean }) {
  return (
    <Link href={href} className="group block min-w-0">
      <article className="min-w-0">
        <div className={`relative overflow-hidden bg-[var(--slot4-media-bg)] ${large ? 'aspect-[16/9]' : 'aspect-[16/10]'}`}>
          <img src={getEditablePostImage(post)} alt={post.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
          {(index + 1) % 5 === 0 ? <span className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border-4 border-[var(--slot4-accent-soft)] bg-black/55 text-sm font-black text-white">{index + 1}</span> : null}
        </div>
        <div className="pt-5">
          <CategoryLabel>{getEditableCategory(post)}</CategoryLabel>
          <h3 className={`mt-3 line-clamp-3 font-black leading-tight tracking-normal ${large ? 'text-3xl sm:text-4xl' : 'text-xl sm:text-2xl'}`}>{post.title}</h3>
          <p className="mt-4 text-[11px] font-bold uppercase tracking-[0.12em] text-[var(--slot4-soft-muted-text)]">{dateLine(post)}</p>
          {large ? <p className="mt-5 line-clamp-3 max-w-2xl text-sm leading-7 text-[var(--slot4-muted-text)]">{getEditableExcerpt(post, 180)}</p> : null}
        </div>
      </article>
    </Link>
  )
}

function LeadTile({ post, href }: { post: SitePost; href: string }) {
  return (
    <Link href={href} className="group relative block min-h-[420px] overflow-hidden bg-black text-white lg:min-h-[560px]">
      <img src={getEditablePostImage(post)} alt={post.title} className="absolute inset-0 h-full w-full object-cover opacity-72 transition duration-700 group-hover:scale-105" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.05)_20%,rgba(0,0,0,0.78)_100%)]" />
      <div className="relative z-10 flex min-h-[420px] flex-col justify-end p-6 lg:min-h-[560px] lg:p-9">
        <CategoryLabel>{getEditableCategory(post)}</CategoryLabel>
        <h1 className="mt-4 max-w-3xl text-4xl font-black leading-[0.98] tracking-normal sm:text-5xl lg:text-6xl">{post.title}</h1>
        <p className="mt-5 max-w-2xl text-sm leading-7 text-white/75">{getEditableExcerpt(post, 190)}</p>
        <span className="mt-7 inline-flex w-fit items-center gap-2 bg-white px-5 py-3 text-xs font-black uppercase tracking-[0.14em] text-black">Read story <ArrowRight className="h-4 w-4" /></span>
      </div>
    </Link>
  )
}

function SideTile({ post, href }: { post: SitePost; href: string }) {
  return (
    <Link href={href} className="group grid min-h-[180px] overflow-hidden border border-white/10 bg-black text-white sm:grid-cols-[0.9fr_1fr] lg:grid-cols-1">
      <div className="relative min-h-[150px] overflow-hidden bg-neutral-900">
        <img src={getEditablePostImage(post)} alt={post.title} className="absolute inset-0 h-full w-full object-cover opacity-82 transition duration-500 group-hover:scale-105" />
      </div>
      <div className="p-5">
        <CategoryLabel>{getEditableCategory(post)}</CategoryLabel>
        <h2 className="mt-3 line-clamp-3 text-lg font-black leading-tight tracking-normal">{post.title}</h2>
        <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.12em] text-white/50">{dateLine(post)}</p>
      </div>
    </Link>
  )
}

export function EditableHomeHero({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const lead = posts[0]
  const side = posts.slice(1, 5)
  if (!lead) return null
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1440px] px-0 py-0 lg:px-8 lg:py-8">
        <div className="grid gap-px bg-black lg:grid-cols-[minmax(0,1.45fr)_minmax(300px,0.55fr)]">
          <LeadTile post={lead} href={postHref(primaryTask, lead, primaryRoute)} />
          <div className="grid gap-px bg-black sm:grid-cols-2 lg:grid-cols-1">
            {side.map((post) => <SideTile key={post.id || post.slug} post={post} href={postHref(primaryTask, post, primaryRoute)} />)}
          </div>
        </div>
      </div>
    </section>
  )
}

export function EditableStoryRail({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const railPosts = posts.slice(5, 11)
  if (!railPosts.length) return null
  return (
    <section className="bg-white">
      <div className={`${dc.shell.section} ${dc.shell.sectionY}`}>
        <h2 className="text-center text-2xl font-black tracking-normal">Today&apos;s Top Stories</h2>
        <div className="mt-14 grid gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
          {railPosts.map((post, index) => <StoryCard key={post.id || post.slug} post={post} href={postHref(primaryTask, post, primaryRoute)} index={index + 1} />)}
        </div>
      </div>
    </section>
  )
}

export function EditableMagazineSplit({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const featured = posts.slice(11, 17)
  if (!featured.length) return null
  return (
    <section className="bg-white">
      <div className={`${dc.shell.section} pb-16 sm:pb-20`}>
        <div className="grid gap-x-8 gap-y-16 md:grid-cols-2">
          {featured.slice(0, 2).map((post, index) => (
            <StoryCard key={post.id || post.slug} post={post} href={postHref(primaryTask, post, primaryRoute)} index={index + 8} large />
          ))}
        </div>
        <div className="mt-16 grid gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
          {featured.slice(2).map((post, index) => (
            <StoryCard key={post.id || post.slug} post={post} href={postHref(primaryTask, post, primaryRoute)} index={index + 10} />
          ))}
        </div>
      </div>
    </section>
  )
}

export function EditableTimeCollections({ primaryTask, primaryRoute, posts, timeSections }: HomeSectionProps) {
  const sectionPosts = timeSections.flatMap((section) => section.posts).length ? timeSections.flatMap((section) => section.posts) : posts.slice(17)
  const items = sectionPosts.slice(0, 8)
  if (!items.length) return null
  return (
    <section className="border-y border-black/10 bg-[var(--slot4-gray)]">
      <div className={`${dc.shell.section} ${dc.shell.sectionY}`}>
        <div className="flex flex-col gap-6 border-b border-black/15 pb-8 md:flex-row md:items-end md:justify-between">
          <div>
            <CategoryLabel>{pagesContent.home.hero.focusLabel}</CategoryLabel>
            <h2 className="mt-3 text-3xl font-black tracking-normal">Latest from the {taskLabel(primaryTask).toLowerCase()} desk</h2>
          </div>
          <form action="/search" className="flex max-w-md border border-black bg-white">
            <input name="q" placeholder={pagesContent.home.hero.searchPlaceholder} className="min-w-0 flex-1 px-4 py-3 text-sm font-bold outline-none" />
            <button className="border-l border-black px-4" aria-label="Search"><Search className="h-4 w-4" /></button>
          </form>
        </div>
        <div className="mt-10 grid gap-px bg-black md:grid-cols-2 lg:grid-cols-4">
          {items.map((post, index) => (
            <Link key={post.id || post.slug} href={postHref(primaryTask, post, primaryRoute)} className="group bg-white p-5 transition hover:bg-black hover:text-white">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--slot4-accent)]">No. {String(index + 1).padStart(2, '0')}</p>
              <h3 className="mt-4 line-clamp-3 text-xl font-black leading-tight tracking-normal">{post.title}</h3>
              <p className="mt-4 line-clamp-3 text-sm leading-6 opacity-65">{getEditableExcerpt(post, 120)}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export function EditableHomeCta() {
  return (
    <section className={`${pal.pageBg}`}>
      <div className="mx-auto max-w-[1180px] px-4 py-16 text-center sm:px-6 lg:px-8">
        <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[var(--slot4-accent)]">{pagesContent.home.cta.badge}</p>
        <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-black tracking-normal sm:text-4xl">{pagesContent.home.cta.title}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[var(--slot4-muted-text)]">{pagesContent.home.cta.description}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href={pagesContent.home.cta.primaryCta.href} className={dc.button.primary}>{pagesContent.home.cta.primaryCta.label}</Link>
          <Link href={pagesContent.home.cta.secondaryCta.href} className={dc.button.secondary}>{pagesContent.home.cta.secondaryCta.label}</Link>
        </div>
      </div>
    </section>
  )
}
