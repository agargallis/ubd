// "Οι δικαιολογίες" — DM-style carousel answering the objections owners give.
// Deliberately avoids the earlier posts' lines (ρολά, διπλανός, «ήδη online»).

export const EXCUSES = {
  cover: {
    kicker: 'Τις έχεις πει κι εσύ;',
    titlePrefix: 'Οι 5',
    titleAccent: 'δικαιολογίες',
    titleSuffix: 'που κρατάνε την επιχείρησή σου offline',
  },
  sender: 'Εσύ',
  replier: 'UBD',
  items: [
    { excuse: 'Δεν έχω χρόνο για αυτά.', reply: 'Ακριβώς γι’ αυτό υπάρχουμε! Εσύ τρέχεις την επιχείρηση, εμείς στήνουμε τα ψηφιακά.' },
    { excuse: 'Δεν ξέρω από τεχνολογία.', reply: 'Δεν χρειάζεται να ξέρεις! Σου τα εξηγούμε απλά και σου παραδίδουμε κάτι που το χειρίζεσαι εύκολα.' },
    { excuse: 'Οι πελάτες μου με ξέρουν ήδη.', reply: 'Τέλεια! Ήρθε η ώρα να σε μάθουν κι όσοι δεν σε έχουν ανακαλύψει ακόμα.' },
    { excuse: 'Είναι ακριβό.', reply: 'Κάθε λύση φτιάχνεται στα μέτρα σου. Ρώτα μας πρώτα και αποφασίζεις μετά.' },
    { excuse: 'Θα το κάνω αργότερα…', reply: 'Το «αργότερα» σπάνια έρχεται. Ξεκίνα σήμερα, με ένα μήνυμα!' },
  ],
  cta: {
    titlePrefix: 'Καμία δικαιολογία.',
    titleAccent: 'Μόνο ένα μήνυμα.',
    draft: 'Γεια! Θέλω να ξεκινήσουμε…',
    button: 'Στείλε μας μήνυμα!',
  },
  placeholder: 'Γράψε ένα μήνυμα…',
  // Excuses per slide (keeps the carousel at 4 slides).
  slides: [[0, 1, 2], [3, 4]],
};
