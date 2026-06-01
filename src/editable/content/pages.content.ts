import { slot4BrandConfig } from '@/editable/theme/brand.config'

export const pagesContent = {
  home: {
    metadata: {
      title: 'Good stories, sharp visuals, and useful discoveries',
      description: 'Browse a modern editorial website for articles, visuals, listings, resources, and culture-led updates.',
      openGraphTitle: 'Good stories, sharp visuals, and useful discoveries',
      openGraphDescription: 'Read articles, scan image-led posts, and move through connected discoveries in a clean magazine layout.',
      keywords: ['online magazine', 'article website', 'visual stories', 'content discovery'],
    },
    hero: {
      badge: 'Daily editorial dispatch',
      title: ['Good news, useful reads,', 'and culture worth saving.'],
      description: 'A clean magazine-style front page for news, technology, entertainment, travel, resources, profiles, and visual stories.',
      primaryCta: { label: 'Read top stories', href: '/article' },
      secondaryCta: { label: 'Browse visuals', href: '/image' },
      searchPlaceholder: 'Search articles, visuals, listings, and resources',
      focusLabel: 'Desk',
      featureCardBadge: 'front-page lead',
      featureCardTitle: 'Fresh stories set the rhythm for every visit.',
      featureCardDescription: 'The homepage now behaves like an editorial index with clear hierarchy, large images, and fast scanning.',
    },
    intro: {
      badge: 'About the desk',
      title: 'Built like a digital magazine, flexible enough for every content lane.',
      paragraphs: [
        'The site brings article-style reading, image-led browsing, and structured discovery into one editorial surface.',
        'Visitors can move from a headline to a visual post, listing, bookmark, PDF, or profile without feeling like they entered another product.',
        'The new layout favors sharp headlines, generous image crops, quiet spacing, and clear section rhythm.',
      ],
      sideBadge: 'At a glance',
      sidePoints: [
        'Magazine-style homepage with strong story hierarchy.',
        'Connected sections for articles, visuals, listings, and supporting resources.',
        'Cleaner browsing rhythm designed to make exploration feel easier.',
        'Lightweight interactions that keep the experience fast and readable.',
      ],
      primaryLink: { label: 'Browse articles', href: '/article' },
      secondaryLink: { label: 'See visuals', href: '/image' },
    },
    cta: {
      badge: 'Keep reading',
      title: 'Follow the thread from headlines to resources.',
      description: 'Move through articles, images, listings, saved links, and downloadable resources in one consistent editorial system.',
      primaryCta: { label: 'Browse articles', href: '/article' },
      secondaryCta: { label: 'Contact the desk', href: '/contact' },
    },
    taskSection: {
      heading: 'Latest {label}',
      descriptionSuffix: 'Browse the newest posts in this section.',
    },
  },
  about: {
    badge: 'About the publication',
    title: 'An editorial hub built for daily discovery, deeper reading, and useful context.',
    description: `${slot4BrandConfig.siteName} is shaped like a modern digital magazine: fast to scan, comfortable to read, and broad enough to connect articles, visuals, listings, resources, bookmarks, and profiles in one place.`,
    paragraphs: [
      'The publication is designed for readers who want a clear front page, strong story hierarchy, and direct routes into every content type. Headlines are allowed to breathe, images carry the lead, and supporting metadata stays useful without getting noisy.',
      'Every section has a job. Articles create depth, visuals create momentum, listings add practical discovery, bookmarks preserve useful destinations, PDFs carry reference material, and profiles connect people or brands back into the editorial flow.',
      'Whether someone starts with a breaking-style article, a niche resource, a visual post, or a business listing, the next useful path should always feel visible, intentional, and easy to follow.',
    ],
    values: [
      {
        title: 'Headline-first reading',
        description: 'Archive pages are built for quick scanning, while detail pages slow the pace down with generous reading width, strong imagery, and a more traditional article rhythm.',
      },
      {
        title: 'Connected sections',
        description: 'Articles, visuals, listings, PDFs, bookmarks, and profiles share one visual language so the website feels like one publication, not several disconnected tools.',
      },
      {
        title: 'Quiet trust',
        description: 'The interface avoids gimmicks and puts the work into legible layout, useful labels, dependable navigation, and calm surfaces that do not fight the content.',
      },
      {
        title: 'Designed for growth',
        description: 'The UI can support more categories, more formats, and richer editorial packages without changing the underlying publishing logic.',
      },
    ],
  },
  contact: {
    eyebrow: `Contact ${slot4BrandConfig.siteName}`,
    title: 'Send a story pitch, correction, listing update, media request, or partnership note.',
    description: 'Use this page to reach the editorial desk with clear context. Tell us whether you are sharing a story lead, requesting a correction, submitting a resource, updating a listing, or asking about collaboration. The more specific the note, the faster it can be routed.',
    formTitle: 'Write to the desk',
  },

  search: {
    metadata: {
      title: 'Search',
      description: 'Search posts, topics, categories, and content across the site.',
    },
    hero: {
      badge: 'Search the archive',
      title: 'Find stories, listings, visuals, and resources faster.',
      description: 'Use keywords, categories, and content types to discover posts from every active section of the site.',
      placeholder: 'Search by keyword, topic, category, or title',
    },
    resultsTitle: 'Latest searchable content',
  },
  create: {
    metadata: {
      title: 'Create',
      description: 'Create and submit new content for the site.',
    },
    locked: {
      badge: 'Creator access',
      title: 'Login to create new content.',
      description: 'Use your account to open the publishing workspace and create posts for the active sections of this site.',
    },
    hero: {
      badge: 'Publishing workspace',
      title: 'Create content for every active section.',
      description: 'Choose the content type, add details, and prepare a clean post with images, links, summary, and body content.',
    },
    formTitle: 'Content details',
    submitLabel: 'Submit content',
    successTitle: 'Content submitted successfully.',
  },
  auth: {
    login: {
      metadataDescription: 'Login page for this site.',
      badge: 'Member access',
      title: 'Welcome back to your publishing space.',
      description: 'Login to continue browsing, managing submissions, and creating new content from your account.',
      formTitle: 'Login',
      submitLabel: 'Continue',
      noAccount: 'No account matched these details. Create an account first, then login.',
      success: 'Login successful. Redirecting...',
      createCta: 'Create an account',
    },
    signup: {
      metadataDescription: 'Signup page for this site.',
      badge: 'Site access',
      title: 'Create your account and start publishing.',
      description: 'Create an account to access the publishing workspace, save details, and submit content through the site.',
      formTitle: 'Create account',
      submitLabel: 'Create account',
      passwordShort: 'Use at least 4 characters for the password.',
      success: 'Account created successfully. Redirecting...',
      loginCta: 'Login',
    },
  },
  detailPages: {
    article: {
      relatedTitle: 'Related articles',
      fallbackTitle: 'Article details',
    },
    listing: {
      relatedTitle: 'Related listings',
      fallbackTitle: 'Listing details',
    },
    image: {
      relatedTitle: 'Related visuals',
      fallbackTitle: 'Image details',
    },
    profile: {
      relatedTitle: 'Suggested articles',
      fallbackDescription: 'Profile details will appear here once available.',
      visitButton: 'Visit Official Site',
    },
  },
} as const
