// "Τα δωρεάν εργαλεία μου" — post για όποιον ξεκινάει τώρα στον χώρο.
// Main tools as given by Antonis; `bonus` are suggestions (all used by the site's own stack).
// `color` = each brand's official logo colour (only on the logo itself);
// null = monochrome mark that follows the theme.

export const FREE_TOOLS = {
  kicker: 'Ξεκινάς τώρα;',
  titlePrefix: 'Τα',
  titleAccent: 'δωρεάν',
  titleSuffix: 'εργαλεία μου',
  main: [
    { slug: 'vercel', name: 'Vercel', role: 'Ανεβάζει το site σου online', color: null, plan: 'Free' },
    { slug: 'supabase', name: 'Supabase', role: 'Βάση δεδομένων & login', color: '#3FCF8E', plan: 'Free' },
    { slug: 'claude', name: 'Claude Code', role: 'AI που γράφει κώδικα μαζί σου', color: '#D97757', plan: 'Pro' },
    { slug: 'resend', name: 'Resend', role: 'Emails από το site σου', color: null, plan: 'Free' },
  ],
  bonusLabel: 'Μπόνους',
  bonus: [
    { slug: 'github', name: 'GitHub', color: null },
    { slug: 'react', name: 'React', color: '#61DAFB' },
    { slug: 'tailwindcss', name: 'Tailwind', color: '#06B6D4' },
    { slug: 'vite', name: 'Vite', color: '#9135FF' },
  ],
  outro: 'Αποθήκευσέ το για αργότερα',
};
