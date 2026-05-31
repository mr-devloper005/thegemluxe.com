import type { CSSProperties } from 'react'

export const editableRootStyle = {
  '--slot4-page-bg': '#ffffff',
  '--slot4-page-text': '#050505',
  '--slot4-panel-bg': '#f5f5f5',
  '--slot4-surface-bg': '#ffffff',
  '--slot4-muted-text': '#585858',
  '--slot4-soft-muted-text': '#8a8a8a',
  '--slot4-accent': '#ef1d2f',
  '--slot4-accent-fill': '#ef1d2f',
  '--slot4-accent-soft': '#20c7f5',
  '--slot4-dark-bg': '#030303',
  '--slot4-dark-text': '#ffffff',
  '--slot4-media-bg': '#ededed',
  '--slot4-cream': '#ffffff',
  '--slot4-warm': '#fafafa',
  '--slot4-lavender': '#f4f7fb',
  '--slot4-gray': '#f6f6f6',
  '--slot4-body-gradient': 'linear-gradient(180deg, #ffffff 0%, #ffffff 58%, #f6f6f6 100%)',
} as CSSProperties

export const editablePalette = {
  pageBg: 'bg-[var(--slot4-page-bg)]',
  pageText: 'text-[var(--slot4-page-text)]',
  panelBg: 'bg-[var(--slot4-panel-bg)]',
  panelText: 'text-[var(--slot4-page-text)]',
  surfaceBg: 'bg-[var(--slot4-surface-bg)]',
  surfaceText: 'text-[var(--slot4-page-text)]',
  mutedText: 'text-[var(--slot4-muted-text)]',
  softMutedText: 'text-[var(--slot4-soft-muted-text)]',
  accentText: 'text-[var(--slot4-accent)]',
  accentBg: 'bg-[var(--slot4-accent-fill)]',
  accentSoftBg: 'bg-[var(--slot4-accent-soft)]',
  accentSoftText: 'text-[var(--slot4-accent-soft)]',
  darkBg: 'bg-[var(--slot4-dark-bg)]',
  darkText: 'text-[var(--slot4-dark-text)]',
  mediaBg: 'bg-[var(--slot4-media-bg)]',
  creamBg: 'bg-[var(--slot4-cream)]',
  warmBg: 'bg-[var(--slot4-warm)]',
  lavenderBg: 'bg-[var(--slot4-lavender)]',
  grayBg: 'bg-[var(--slot4-gray)]',
  border: 'border-black/[0.06]',
  darkBorder: 'border-white/10',
  shadow: 'shadow-[0_12px_40px_rgba(0,0,0,0.08)]',
  shadowStrong: 'shadow-[0_18px_70px_rgba(0,0,0,0.14)]',
  overlay: 'bg-[linear-gradient(180deg,rgba(0,0,0,0.02),rgba(0,0,0,0.62))]',
} as const

export const editableDesignContract = {
  shell: {
    page: `min-h-screen ${editablePalette.pageBg} ${editablePalette.pageText}`,
    section: 'mx-auto w-full max-w-[1180px] px-4 sm:px-6 lg:px-8',
    sectionY: 'py-12 sm:py-16 lg:py-20',
  },
  layout: {
    safeGrid: 'grid gap-x-8 gap-y-14 md:grid-cols-2 xl:grid-cols-3',
    featureGrid: 'grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center',
    rail: 'flex snap-x gap-5 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden',
    minRailCard: 'w-[140px] shrink-0 snap-start sm:w-[160px]',
  },
  type: {
    eyebrow: 'text-[10px] font-black uppercase tracking-[0.18em]',
    heroTitle: 'text-4xl font-black leading-[1.02] tracking-normal sm:text-5xl lg:text-[3.4rem]',
    sectionTitle: 'text-2xl font-black tracking-normal sm:text-3xl',
    body: 'text-base leading-relaxed',
  },
  surface: {
    card: `rounded-none border ${editablePalette.border} ${editablePalette.surfaceBg}`,
    soft: `rounded-none border ${editablePalette.border} ${editablePalette.surfaceBg}`,
    dark: `rounded-none ${editablePalette.darkBg} ${editablePalette.darkText}`,
  },
  button: {
    primary: `inline-flex items-center justify-center ${editablePalette.darkBg} px-8 py-3.5 text-xs font-black uppercase tracking-[0.14em] text-white transition hover:opacity-90`,
    secondary: `inline-flex items-center justify-center border ${editablePalette.border} ${editablePalette.surfaceBg} px-8 py-3.5 text-xs font-black uppercase tracking-[0.14em] ${editablePalette.surfaceText} transition hover:bg-black/[0.03]`,
    accent: `inline-flex items-center justify-center ${editablePalette.accentBg} px-8 py-3.5 text-xs font-black uppercase tracking-[0.14em] text-white transition hover:opacity-90`,
  },
  media: {
    frame: `relative overflow-hidden ${editablePalette.mediaBg}`,
    ratio: 'aspect-[16/11]',
  },
  motion: {
    lift: 'transition duration-300 hover:-translate-y-0.5',
    fade: 'transition duration-300 hover:opacity-80',
  },
} as const

export const aiLayoutRules = [
  'Change the full site color palette in editableRootStyle first; all homepage sections consume those CSS variables.',
  'Keep page structure in src/editable/sections/HomeSections.tsx so AI can redesign the whole home experience in one file.',
  'Use wide readable grids; never create skinny columns for paragraphs or cards.',
  'Use horizontal rails for dense post browsing, like the MysteryCoder reference layout.',
  'Keep dynamic post fetching intact; do not replace posts with mock arrays.',
  'Use postHref() for all post links so task-specific routes keep working.',
] as const
