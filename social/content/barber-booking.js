// Carousel that pitches the online booking system to barbershops,
// using Koulis 1980 (koulis80.gr) as the live example.
// Steps are the site's own labels; benefits only state what the screenshots show.

export const BARBER_BOOKING = {
  project: 'Koulis 1980', // logo + link come from the site's PROJECTS
  cover: {
    badge: 'Για κουρεία',
    titleTop: 'Ραντεβού',
    titleAccent: 'χωρίς',
    titleBottom: 'τηλέφωνα',
    intro: 'Online κρατήσεις με το όνομα, το logo και τους κουρείς του μαγαζιού σου.',
    example: 'Live στο',
  },
  steps: {
    titlePrefix: 'Κλείνει σε',
    titleAccent: '4',
    titleSuffix: 'βήματα',
    items: [
      { icon: 'user', label: 'Επιλογή κουρέα', text: 'Βλέπει την ομάδα και διαλέγει ποιος θα τον κουρέψει.' },
      { icon: 'scissors', label: 'Επιλογή υπηρεσίας', text: 'Κούρεμα, γένια ή ό,τι άλλο προσφέρεις.' },
      { icon: 'calendar', label: 'Ημερομηνία & Ώρα', text: 'Μόνο οι διαθέσιμες μέρες και ώρες.' },
      { icon: 'message', label: 'Στοιχεία πελάτη', text: 'Όνομα και τηλέφωνο, και το ραντεβού κλείστηκε.' },
    ],
  },
  benefits: {
    titlePrefix: 'Τι',
    titleAccent: 'κερδίζεις',
    titleSuffix: '',
    items: [
      { icon: 'phoneOff', label: 'Λιγότερα τηλέφωνα', text: 'Δεν σταματάς το κούρεμα για να κλείσεις ραντεβού.' },
      { icon: 'clock', label: 'Κρατήσεις όλο το 24ωρο', text: 'Ο πελάτης κλείνει όποτε θέλει, και εκτός ωραρίου.' },
      { icon: 'languages', label: 'Ελληνικά & Αγγλικά', text: 'Έτοιμο και για τους πελάτες από το εξωτερικό.' },
      { icon: 'palette', label: 'Στο στυλ σου', text: 'Με το logo, τα χρώματα και τις φωτογραφίες του κουρείου.' },
    ],
  },
  cta: {
    titlePrefix: 'Θες το ίδιο για το',
    titleAccent: 'κουρείο',
    titleSuffix: 'σου;',
    text: 'Στείλε μας μήνυμα και το στήνουμε μαζί, από την αρχή μέχρι το πρώτο ραντεβού.',
    button: 'Στείλε μας μήνυμα',
  },
};
