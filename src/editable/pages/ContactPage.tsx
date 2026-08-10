'use client'

import { Building2, FileText, Image as ImageIcon } from 'lucide-react'
import { pagesContent } from '@/editable/content/pages.content'
import { EditableContactLeadForm } from '@/editable/components/EditableContactLeadForm'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'

export default function ContactPage() {
  const lanes = [
    { icon: FileText, title: 'Editorial submissions', body: 'Pitch articles, corrections, guest columns, interviews, or a story that belongs on the front page. Include the angle, source links, and why readers should care now.' },
    { icon: Building2, title: 'Listings and resources', body: 'Send business listing updates, PDF resources, profile requests, saved-link suggestions, or category changes with the exact details that should appear publicly.' },
    { icon: ImageIcon, title: 'Visual features', body: 'Share image-led stories, galleries, creator collaborations, licensing questions, and media partnership notes with sample visuals or campaign context.' },
  ]

  return (
    <EditableSiteShell>
      <main className="mx-auto max-w-[1100px] bg-white px-4 py-14 text-black sm:px-6 lg:px-8">
        <section className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[var(--slot4-accent)]">{pagesContent.contact.eyebrow}</p>
            <h1 className="mt-4 border-b-4 border-black pb-6 text-5xl font-black tracking-normal">{pagesContent.contact.title}</h1>
            <p className="mt-5 max-w-2xl text-sm leading-8 text-[var(--slot4-muted-text)]">{pagesContent.contact.description}</p>
            <div className="mt-8 grid gap-px bg-black">
              {lanes.map((lane) => (
                <div key={lane.title} className="bg-white p-5">
                  <lane.icon className="h-5 w-5" />
                  <h2 className="mt-3 text-xl font-black">{lane.title}</h2>
                  <p className="mt-2 text-sm leading-7 text-[var(--slot4-muted-text)]">{lane.body}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 border-l-4 border-black bg-[var(--slot4-gray)] p-5">
              <h2 className="text-lg font-black">What to include</h2>
              <p className="mt-3 text-sm leading-7 text-black/70">Add names, links, dates, category fit, and any publishing deadline. For corrections, include the page URL and the exact line that needs review.</p>
            </div>
          </div>

          <div className="border border-black p-7">
            <h2 className="text-2xl font-black">{pagesContent.contact.formTitle}</h2>
            <EditableContactLeadForm />
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
