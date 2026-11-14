# UBD · Instagram posts — μπούσουλας

Κάθε νέο post φτιάχνεται εδώ, στο ίδιο ύφος με το site. Ο Αντώνης δίνει το
περιεχόμενο (θέμα / μήνυμα / στοιχεία)· η διατύπωση και το στήσιμο ακολουθούν
τους παρακάτω κανόνες.

## Παραγωγή

```bash
npm run social              # όλα τα posts → social/output/*.png
npm run social -- <κομμάτι> # μόνο όσα ids περιέχουν το <κομμάτι>
SOCIAL_THEME=dark npm run social -- <κομμάτι>  # όλα σε dark (ή light) → <id>-dark.png
```

Καμβάς **1080×1440 (3:4)** — πάντα αυτή η αναλογία — export @2x → PNG 2160×2880. Προεπισκόπηση: `npx vite --config social/vite.config.mjs`
και άνοιγμα `/?post=<id>` (ή `&theme=light|dark`).

## Νέο post

1. Πρόσθεσε component στο `posts.jsx` μέσα σε `<Frame theme={theme}>`.
2. Καταχώρισέ το στο `POSTS` με `id` (kebab-case, π.χ. `offer-websites`) και `theme`.
3. Carousel = πολλά ids με κοινό πρόθεμα (`xxx-01`, `xxx-02`, …) και `<Progress current total />` στο footer.

## Οπτικοί κανόνες (μην τους αλλάζεις)

- **Γραμματοσειρά:** μόνο Whiz Bang (έρχεται από το site). Τίτλοι `font-bold`.
- **Τίτλος:** `SectionHeading` (διαμάντι + γραμμές πάνω, underline κάτω) ή μεγάλος τίτλος
  με `WordReveal`· **η λέξη-κλειδί** παίρνει `lux-gold-text` (κυανό με χρυσή ανταύγεια). Μία έμφαση ανά τίτλο.
- **Επιφάνειες:** `SpotlightCard` (`tilt={0}`), radius 24–40px. Κουμπιά/pills: `lux-btn`, `lux-pill`, `social-badge`.
- **Χρώματα:** μόνο τα tokens του site (`--lux-cyan`, `--lux-gold`, `--lux-ink`, service colors). Καθόλου νέα χρώματα.
- **Θέμα:** dark για ανακοινώσεις/υπηρεσίες/projects, light για κριτικές και «ήπια» posts.
- **Πλαίσιο:** πάντα logo πάνω αριστερά και `ubd.gr ─── @ubd.gr` κάτω (ή progress σε carousel).
- **Αέρας:** περιθώρια 84px πλάι· ένα κεντρικό μήνυμα ανά slide· ≤ ~40 λέξεις σώμα κειμένου ανά slide.

## Κανόνες κειμένου

- Ελληνικά, φιλικός-επαγγελματικός τόνος όπως στο site (π.χ. «ΜΗΝ το χάσεις!», «Μάθετε περισσότερα»).
- Τίτλος σύντομος (≤ 8 λέξεις), μία λέξη-έμφαση σε gradient.
- Ό,τι υπάρχει ήδη στο site (υπηρεσίες, projects, κριτικές, στοιχεία επικοινωνίας) γίνεται **import**, όχι αντιγραφή.
- **Ποτέ** επινοημένα στατιστικά, τιμές, ποσοστά ή κριτικές. Ό,τι λείπει → `[PLACEHOLDER]`.
- Πριν το τελικό export: δείξε το PNG και πες ρητά όπου η διατύπωση πρόσθεσε κάτι πέρα από όσα δόθηκαν.

## Logos εργαλείων

- Ενσωματωμένα: `content/brand-logos.js` (simple-icons CC0· Arcticons CC BY-SA 4.0 για Photoroom, Edits, CapCut).
- Επίσημο logo → αποθήκευσέ το ως `social/assets/logos/<slug>.svg|png|webp` (π.χ. `photoroom.png`) και αντικαθιστά αυτόματα το ενσωματωμένο.
