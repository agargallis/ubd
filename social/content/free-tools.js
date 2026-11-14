// "Τα δωρεάν εργαλεία μου" — one post per category.
// `main` = numbered tools; `bonus` = extras row.
// `color` = the brand's logo colour (logo only); null = follows the theme ink.
// An official logo file at social/assets/logos/<slug>.(svg|png|webp) replaces the bundled mark.
// `limited` = free plan with usage limits (shown as FREE* + footnote).

const TITLE = { titlePrefix: 'Τα', titleAccent: 'δωρεάν', titleSuffix: 'εργαλεία μου' };

export const TOOL_CATEGORIES = [
  {
    id: 'web',
    category: 'Web Associated',
    ...TITLE,
    main: [
      { slug: 'vercel', name: 'Vercel', role: 'Ανεβάζει το project σου online', color: null },
      { slug: 'supabase', name: 'Supabase', role: 'Βάση δεδομένων & login', color: '#3FCF8E' },
      { slug: 'claude', name: 'Claude Code', role: 'AI που γράφει κώδικα μαζί σου', color: '#D97757', limited: true },
      { slug: 'resend', name: 'Resend', role: 'Emails από το site σου', color: null },
    ],
    bonus: [
      { slug: 'netlify', name: 'Netlify', color: '#00C7B7' },
      { slug: 'github', name: 'GitHub', color: null },
      { slug: 'react', name: 'React', color: '#61DAFB' },
      { slug: 'tailwindcss', name: 'Tailwind', color: '#06B6D4' },
      { slug: 'vite', name: 'Vite', color: '#9135FF' },
    ],
  },
  {
    id: 'social',
    category: 'Social Media',
    ...TITLE,
    main: [
      { slug: 'canva', name: 'Canva', role: 'Σχέδια για posts, stories & logos', color: null },
      { slug: 'photoroom', name: 'Photoroom', role: 'Επαγγελματικές φωτογραφίες προϊόντων', color: null },
      { slug: 'edits', name: 'Edits', role: 'Μοντάζ για Reels, από το Instagram', color: null },
      { slug: 'pixlr', name: 'Pixlr', role: 'Επεξεργασία φωτογραφιών online', color: '#3EBBDF' },
      { slug: 'imgur', name: 'Imgur', role: 'Ανεβάζεις εικόνες & παίρνεις link', color: '#1BB76E' },
      { slug: 'greek-fonts', name: '[PLACEHOLDER]', role: 'Ελληνικές γραμματοσειρές', color: null },
    ],
    bonus: [
      { slug: 'capcut', name: 'CapCut', color: null },
    ],
  },
];

export const BONUS_LABEL = 'Έξτρα';
export const LIMITED_NOTE = '* Δωρεάν πλάνο με όρια χρήσης';
export const OUTRO = 'Αποθήκευσέ το για αργότερα';
