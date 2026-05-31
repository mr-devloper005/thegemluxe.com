'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, Search, UserPlus, LogIn, X } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'

const topicLinks = [
  { label: 'Technology', href: '/article?category=technology' },
  { label: 'Entertainment', href: '/article?category=entertainment' },
  { label: 'Game', href: '/article?category=gaming' },
  { label: 'Fashion', href: '/article?category=fashion' },
  { label: 'Science', href: '/article?category=science' },
  { label: 'Sport', href: '/article?category=sport' },
  { label: 'Travel', href: '/article?category=travel' },
]

export function EditableNavbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const { session, logout } = useEditableLocalAuthSession()
  const brandWords = SITE_CONFIG.name.trim().split(/\s+/)
  const brandLead = brandWords[0] || SITE_CONFIG.name
  const brandRest = brandWords.slice(1).join(' ')
  const taskItems = useMemo(
    () => SITE_CONFIG.tasks.filter((task) => task.enabled).map((task) => ({ label: task.label, href: task.route })),
    []
  )

  return (
    <header className="sticky top-0 z-50 border-b border-black bg-white text-black">
      <div className="bg-black text-white">
        <nav className="mx-auto flex h-10 w-full max-w-[1440px] items-center gap-5 px-4 text-[11px] font-black sm:px-6 lg:px-8">
          <Link href="/" className="hover:text-[var(--slot4-accent-soft)]">Home</Link>
          <div className="ml-auto flex items-center gap-4">
            {['f', 'x', 'p', 'ig'].map((item) => <span key={item} className="text-[11px] font-black uppercase opacity-85">{item}</span>)}
            {session ? (
              <>
                <span className="hidden border-l border-white/20 pl-4 sm:inline">{session.name}</span>
                <button type="button" onClick={logout} className="hidden hover:text-[var(--slot4-accent-soft)] sm:inline">Logout</button>
              </>
            ) : (
              <>
                <Link href="/login" className="hidden border-l border-white/20 pl-4 hover:text-[var(--slot4-accent-soft)] sm:inline">Login</Link>
                <Link href="/signup" className="hidden hover:text-[var(--slot4-accent-soft)] sm:inline">Register</Link>
              </>
            )}
            <form action="/search" className="hidden items-center border-l border-white/20 pl-4 md:flex">
              <input name="q" aria-label="Search" placeholder="Search" className="h-8 w-0 bg-transparent text-xs outline-none transition-all focus:w-40 focus:px-2" />
              <button aria-label="Search" className="p-1"><Search className="h-4 w-4" /></button>
            </form>
          </div>
        </nav>
      </div>

      <div className="mx-auto flex min-h-12 w-full max-w-[1440px] items-center gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="shrink-0 text-2xl font-black leading-none tracking-normal">
          <span className="bg-[var(--slot4-accent)] px-1 text-white">{brandLead}</span>
          {brandRest ? <span className="ml-0.5 border border-black px-1">{brandRest}</span> : null}
        </Link>

        <nav className="hidden min-w-0 flex-1 items-center justify-center gap-8 lg:flex">
          {topicLinks.map((item) => (
            <Link key={item.label} href={item.href} className="text-xs font-black uppercase hover:text-[var(--slot4-accent)]">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto hidden items-center gap-3 md:flex lg:hidden">
          {taskItems.slice(0, 3).map((item) => (
            <Link key={item.href} href={item.href} className="text-xs font-black uppercase hover:text-[var(--slot4-accent)]">{item.label}</Link>
          ))}
        </div>

        <div className="ml-auto flex shrink-0 items-center gap-2">
          {session ? (
            <>
              <span className="hidden h-9 items-center border border-black px-3 text-xs font-black uppercase sm:inline-flex">{session.name}</span>
              <button type="button" onClick={logout} className="hidden h-9 items-center bg-black px-3 text-xs font-black uppercase text-white hover:bg-[var(--slot4-accent)] sm:inline-flex">Logout</button>
            </>
          ) : (
            <>
              <Link href="/login" className="hidden h-9 items-center gap-2 border border-black px-3 text-xs font-black uppercase hover:bg-black hover:text-white sm:inline-flex"><LogIn className="h-3.5 w-3.5" /> Login</Link>
              <Link href="/signup" className="hidden h-9 items-center gap-2 bg-black px-3 text-xs font-black uppercase text-white hover:bg-[var(--slot4-accent)] sm:inline-flex"><UserPlus className="h-3.5 w-3.5" /> Sign up</Link>
            </>
          )}
          <button type="button" onClick={() => setOpen((value) => !value)} className="border border-black p-2 lg:hidden" aria-label="Toggle menu">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-black bg-white px-4 py-4 lg:hidden">
          <form action="/search" className="mb-4 flex border border-black">
            <input name="q" type="search" placeholder="Search stories" className="min-w-0 flex-1 px-3 py-3 text-sm font-bold outline-none" />
            <button className="border-l border-black px-3"><Search className="h-4 w-4" /></button>
          </form>
          <div className="grid gap-px bg-black">
            {[...topicLinks, ...taskItems, { label: 'About', href: '/about' }, { label: 'Contact', href: '/contact' }, ...(session ? [] : [{ label: 'Login', href: '/login' }, { label: 'Sign up', href: '/signup' }])].map((item) => {
              const active = pathname === item.href
              return (
                <Link key={`${item.href}-${item.label}`} href={item.href} onClick={() => setOpen(false)} className={`bg-white px-4 py-3 text-sm font-black uppercase ${active ? 'text-[var(--slot4-accent)]' : ''}`}>
                  {item.label}
                </Link>
              )
            })}
            {session ? (
              <button type="button" onClick={() => { logout(); setOpen(false) }} className="bg-white px-4 py-3 text-left text-sm font-black uppercase">
                {session.name} / Logout
              </button>
            ) : null}
          </div>
        </div>
      ) : null}
    </header>
  )
}
