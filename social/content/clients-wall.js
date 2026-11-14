// "Αυτοί είναι ήδη online" — logo wall of every client, from the site's PROJECTS.
// Counts are computed from each project's links, never typed in.

// Left out: demo apps, Antonis' own portfolio, and Aggelos Zaxariou (Antonis' call).
export const CLIENTS_EXCLUDE = ['Barbershop Queue System', 'Barbershop Booking App', 'Antonis Gargallis', 'Aggelos Zaxariou'];

// Service rows: label + which project link labels count towards it.
export const CLIENT_SERVICES = [
  { icon: 'globe', label: 'Websites', match: /website/i },
  { icon: 'instagram', label: 'Instagram', match: /instagram/i },
  { icon: 'search', label: 'Google προφίλ', match: /google/i },
  { icon: 'app', label: 'Custom apps', match: /app/i },
];

export const CLIENTS_COPY = {
  titlePrefix: 'Αυτοί είναι ήδη',
  titleAccent: 'online',
  outro: 'Εσύ πότε μπαίνεις;',
};
