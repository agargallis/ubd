// "Μας εμπιστεύτηκαν" — logo wall of every client, from the site's PROJECTS.
// Counts are computed from each project's links, never typed in.

// Not clients: demo apps and Antonis' own portfolio.
export const CLIENTS_EXCLUDE = ['Barbershop Queue System', 'Barbershop Booking App', 'Antonis Gargallis'];

// Service rows: label + which project link labels count towards it.
export const CLIENT_SERVICES = [
  { icon: 'globe', label: 'Websites', match: /website/i },
  { icon: 'instagram', label: 'Instagram', match: /instagram/i },
  { icon: 'search', label: 'Google προφίλ', match: /google/i },
  { icon: 'app', label: 'Custom apps', match: /app/i },
];

export const CLIENTS_COPY = {
  badge: 'Τι κάνουμε',
  titlePrefix: 'Μας',
  titleAccent: 'εμπιστεύτηκαν',
  servicesIntro: 'Στήνουμε όλη την ψηφιακή παρουσία μιας επιχείρησης:',
  outro: 'Η επόμενη μπορεί να είναι η δική σου!',
};
