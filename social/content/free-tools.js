// "Τα δωρεάν εργαλεία μου" — one post per category.
// `main` = the tools Antonis named; `bonus` = suggestions.
// `color` = the brand's logo colour (logo only); null = follows the theme ink.

const TITLE = { titlePrefix: 'Τα', titleAccent: 'δωρεάν', titleSuffix: 'εργαλεία μου' };

export const TOOL_CATEGORIES = [
  {
    id: 'dev',
    category: 'Web Development',
    ...TITLE,
    main: [
      { slug: 'vercel', name: 'Vercel', role: 'Ανεβάζει το project σου online', color: null, plan: 'Free' },
      { slug: 'netlify', name: 'Netlify', role: 'Hosting για το site σου', color: '#00C7B7', plan: 'Free' },
      { slug: 'supabase', name: 'Supabase', role: 'Βάση δεδομένων & login', color: '#3FCF8E', plan: 'Free' },
      { slug: 'claude', name: 'Claude Code', role: 'AI που γράφει κώδικα μαζί σου', color: '#D97757', plan: 'Pro' },
      { slug: 'resend', name: 'Resend', role: 'Emails από το site σου', color: null, plan: 'Free' },
    ],
    bonus: [
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
      { slug: 'canva', name: 'Canva', role: 'Σχέδια για posts, stories & logos', color: '#00C4CC', plan: 'Free' },
      { slug: 'photoroom', name: 'Photoroom', role: 'Επαγγελματικές φωτογραφίες προϊόντων', color: null, plan: 'Free' },
      { slug: 'edits', name: 'Edits', role: 'Μοντάζ για Reels, από το Instagram', color: null, plan: 'Free' },
    ],
    bonus: [
      { slug: 'capcut', name: 'CapCut', color: null },
      { slug: 'meta', name: 'Meta Business Suite', color: '#0467DF' },
    ],
  },
];

export const BONUS_LABEL = 'Μπόνους';
export const OUTRO = 'Αποθήκευσέ το για αργότερα';
