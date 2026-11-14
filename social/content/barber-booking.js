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
    intro: 'Το δικό σου custom app κρατήσεων, με το όνομα, το logo και τους κουρείς του μαγαζιού σου.',
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
    titleAccent: 'κερδίζεις;',
    titleSuffix: '',
    items: [
      { icon: 'sparkles', label: 'Δικό σου app!', text: 'Custom, φτιαγμένο από το μηδέν για το κουρείο σου.' },
      { icon: 'sliders', label: 'Στα θέλω σου', text: 'Κουρείς, υπηρεσίες, ωράριο και στυλ, όπως τα θες.' },
      { icon: 'zap', label: 'Αυτοματοποιημένο!', text: 'Τα ραντεβού κλείνονται μόνα τους, χωρίς εσένα.' },
      { icon: 'dashboard', label: 'Εύκολο διαχειριστικό', text: 'Βλέπεις και διαχειρίζεσαι όλα τα ραντεβού σε λίγα κλικ.' },
      { icon: 'phoneOff', label: 'Λιγότερα τηλέφωνα!', text: 'Δεν σταματάς το κούρεμα για να κλείσεις ραντεβού.' },
      { icon: 'clock', label: 'Ανοιχτό 24/7…', text: 'Ο πελάτης κλείνει όποτε θέλει, και εκτός ωραρίου.' },
    ],
  },
  cta: {
    titlePrefix: 'Θες το ίδιο για το',
    titleAccent: 'κουρείο',
    titleSuffix: 'σου;',
    text: 'Το στήνουμε μαζί, από το πρώτο σχέδιο μέχρι το πρώτο ραντεβού!',
    button: 'Γράψε μας στο DM',
  },
};
