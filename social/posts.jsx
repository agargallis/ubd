import React from 'react';
import { Sparkles, ArrowUpRight, Quote, Star, Sun, Moon, Globe, Instagram, Search, Rocket, TrendingUp } from 'lucide-react';
import { SpotlightCard, SectionHeading, WordReveal } from '@/components/lux/Lux';
import { HERO_TRANSLATIONS } from '@/components/Hero';
import { SERVICES_TRANSLATIONS, SERVICE_META, ServiceCard } from '@/components/Services';
import { TESTIMONIALS_TRANSLATIONS, TESTIMONIAL_META } from '@/components/Testimonials';
import { PROJECTS } from '@/components/About';
import { SERVICES_VOL_1, SERVICES_VOL_2, PURPOSE } from './content/pinned-reels';
import { TOOL_CATEGORIES, TOOLS_COVER, BONUS_LABEL, LIMITED_NOTE, OUTRO } from './content/free-tools';
import { LOGOS } from './content/brand-logos';
import { GOOGLE_REVIEWS, REVIEW_SLIDES, REVIEW_HEADINGS, REVIEWS_COPY } from './content/google-reviews';
import { GOOGLE_G } from './content/google-logo';
import { BARBER_BOOKING } from './content/barber-booking';
import { CLIENTS_EXCLUDE, CLIENT_SERVICES, CLIENTS_COPY } from './content/clients-wall';
import koulisBarbers from './assets/projects/koulis-barbers.jpg';
import koulisCalendar from './assets/projects/koulis-calendar.jpg';
import { Bookmark, Type, ArrowRight, UtensilsCrossed, UserRound, Scissors, CalendarCheck, MessageCircle, PhoneOff, Clock, Languages, Palette, SlidersHorizontal, Zap, LayoutDashboard, AppWindow } from 'lucide-react';

// Official logo files dropped in social/assets/logos/<slug>.<ext> win over the bundled marks.
const AVATAR_FILES = Object.fromEntries(
  Object.entries(import.meta.glob('./assets/avatars/*.{svg,png,webp,jpg}', { eager: true, import: 'default' }))
    .map(([file, url]) => [file.split('/').pop().replace(/\.[^.]+$/, ''), url])
);
const LOGO_FILES = Object.fromEntries(
  Object.entries(import.meta.glob('./assets/logos/*.{svg,png,webp,jpg}', { eager: true, import: 'default' }))
    .map(([file, url]) => [file.split('/').pop().replace(/\.[^.]+$/, ''), url])
);

const LANG = 'el';
const LOGO_URL = 'https://i.imgur.com/I7mGxrV.png';
const LOGO_FILTER = {
  dark: 'brightness(0) invert(1) drop-shadow(0 0 10px rgba(91, 234, 255, 0.36))',
  light: 'brightness(0)',
};

/* ---------- Shared frame ---------- */

const Frame = ({ theme, children, footer, corner }) => (
  <div className="social-frame">
    <div className="social-frame__bg" aria-hidden="true">
      <div className="lux-hero__grid" />
      <div className="lux-aurora">
        <span className="lux-aurora__band lux-aurora__band--one" />
        <span className="lux-aurora__band lux-aurora__band--two" />
        <span className="lux-aurora__band lux-aurora__band--three" />
      </div>
      <div className="lux-hero__rings">
        <span className="lux-ring lux-ring--one" />
        <span className="lux-ring lux-ring--two" />
        <span className="lux-ring lux-ring--three" />
      </div>
    </div>
    <div className="lux-grain" aria-hidden="true" />

    <header className="social-frame__top">
      <img src={LOGO_URL} alt="UBD" className="social-frame__logo" style={{ filter: LOGO_FILTER[theme] }} />
      {corner}
    </header>

    <main className="social-frame__body">{children}</main>

    <footer className="social-frame__bottom">
      {footer ?? (
        <>
          <span>ubd.gr</span>
          <span className="lux-divider social-frame__rule" />
          <span>@ubd.gr</span>
        </>
      )}
    </footer>
  </div>
);

const Progress = ({ current, total }) => {
  const pad = (n) => String(n).padStart(2, '0');
  return (
    <div className="social-progress">
      <span className="social-progress__count">
        <span className="lux-gold-text">{pad(current)}</span> / {pad(total)}
      </span>
      <span className="lux-rail-progress social-progress__track">
        <span className="lux-rail-progress__fill" style={{ transform: `scaleX(${current / total})` }} />
      </span>
    </div>
  );
};

const ThemePill = ({ theme }) => (
  <span className="social-theme-pill">
    {theme === 'dark' ? <Moon className="h-7 w-7" /> : <Sun className="h-7 w-7" />}
  </span>
);

/* ---------- Services carousel ---------- */

const ServiceSlide = ({ theme, index }) => {
  const t = SERVICES_TRANSLATIONS[LANG];
  const service = { ...t.items[index], ...SERVICE_META[index] };
  const total = t.items.length;

  return (
    <Frame theme={theme} footer={<Progress current={index + 1} total={total} />}>
      <SectionHeading prefix={t.titlePrefix} accent={t.titleAccent} suffix={t.titleSuffix} className="mb-12" />
      {/* The site's own ServiceCard, scaled up for a 1080px canvas. */}
      <div className="social-zoom" style={{ zoom: 1.55 }}>
        <div className="w-[560px]">
          <ServiceCard service={service} ctaLabel={t.learnMore} index={index} />
        </div>
      </div>
    </Frame>
  );
};

/* ---------- Hero ---------- */

const HeroPost = ({ theme, showThemePill = false }) => {
  const t = HERO_TRANSLATIONS[LANG];

  return (
    <Frame theme={theme} corner={showThemePill ? <ThemePill theme={theme} /> : null}>
      <div className="flex flex-col items-center text-center">
        <div className="hero-badge relative mb-14 inline-flex items-center overflow-hidden rounded-full border border-white/15 px-9 py-5 text-[1.7rem] shadow-xl">
          <span className="hero-badge-glow" />
          <span className="relative z-10 inline-flex items-center text-white">
            <Sparkles className="mr-4 h-9 w-9 text-yellow-400 drop-shadow-[0_0_14px_rgba(250,204,21,0.75)]" />
            <span className="leading-tight">
              Upgrading Business Digitally -{' '}
              <span className="font-semibold text-amber-300">Established in 2025</span>
            </span>
          </span>
        </div>

        <h1 className="lux-hero__title text-[5.6rem] font-bold text-white luxury-heading leading-[1.1] mb-20">
          <WordReveal text={t.headingTop} inView={false} delay={0.1} stagger={0.05} />
          <br />
          <span className="relative inline-block mt-3">
            <WordReveal
              text={t.headingAccent}
              inView={false}
              delay={0.35}
              stagger={0.06}
              wordClassName="lux-gold-text lux-gold-text--hero"
            />
            <svg className="lux-hero__swash" viewBox="0 0 600 40" preserveAspectRatio="none" aria-hidden="true">
              <defs>
                <linearGradient id="social-swash" x1="0" x2="1" y1="0" y2="0">
                  <stop offset="0%" stopColor="rgba(34,211,238,0)" />
                  <stop offset="25%" stopColor="#22d3ee" />
                  <stop offset="55%" stopColor="#f5d58a" />
                  <stop offset="85%" stopColor="#22d3ee" />
                  <stop offset="100%" stopColor="rgba(34,211,238,0)" />
                </linearGradient>
              </defs>
              <path d="M6 28 C 140 6, 300 6, 420 18 S 560 34, 594 14" fill="none" stroke="url(#social-swash)" strokeWidth="3.5" strokeLinecap="round" />
            </svg>
          </span>
        </h1>

        <span className="lux-btn lux-btn--primary social-cta">
          <span className="lux-btn__glow" aria-hidden="true" />
          <span className="relative z-10">{t.primaryCta}</span>
          <ArrowUpRight className="relative z-10 h-9 w-9" />
        </span>
      </div>
    </Frame>
  );
};

/* ---------- Testimonials ---------- */

const TestimonialPost = ({ theme, index }) => {
  const t = TESTIMONIALS_TRANSLATIONS[LANG];
  const item = { ...t.items[index], ...TESTIMONIAL_META[index] };

  return (
    <Frame theme={theme}>
      <SectionHeading prefix={t.titlePrefix} accent={t.titleAccent} suffix={t.titleSuffix} className="mb-14" />
      <SpotlightCard tilt={0} className="testimonial-card social-testimonial rounded-[2.5rem] p-16 text-left">
        <Quote className="lux-quote-mark social-testimonial__quote" aria-hidden="true" />
        <div className="relative z-10 flex items-center mb-10">
          <span className="lux-avatar mr-7">
            <img className="w-28 h-28 rounded-full object-cover" alt={item.alt} src={item.image} />
          </span>
          <div>
            <h4 className="text-[2.6rem] font-bold text-white leading-tight">{item.name}</h4>
            <div className="mt-2 flex gap-1.5 text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-9 w-9 fill-current lux-star" />
              ))}
            </div>
          </div>
        </div>
        <p className="relative z-10 text-gray-300 italic leading-[1.5] social-testimonial__text">"{item.review}"</p>
      </SpotlightCard>
    </Frame>
  );
};

/* ---------- New project ---------- */

const TAGS = [
  { match: /website/i, label: 'Website', icon: Globe },
  { match: /instagram/i, label: 'Instagram', icon: Instagram },
  { match: /google/i, label: 'Google', icon: Search },
];

const NewProjectPost = ({ theme, project }) => {
  const tags = TAGS.filter((tag) => project.links.some((link) => tag.match.test(link.label)));
  const domain = (project.imageLink || '').replace(/^https?:\/\//, '').replace(/\/$/, '');

  return (
    <Frame theme={theme}>
      <div className="flex flex-col items-center text-center">
        <span className="social-badge mb-10">
          <Sparkles className="h-7 w-7" />
          Νέο project
        </span>

        <div className="mb-8 flex items-center gap-8">
          <span className="lux-logo-ring social-project__ring">
            <span className="lux-logo-ring__spin" aria-hidden="true" />
            <img src={project.image} alt={project.alt} className="lux-logo-ring__img social-project__logo" />
          </span>
          <h2 className="text-[4.4rem] font-bold leading-[1.05] text-white text-left max-w-[560px]">
            <span className="lux-gold-text">{project.title}</span>
          </h2>
        </div>

        <SpotlightCard tilt={0} className="social-mockup rounded-[2rem] mb-10">
          <div className="social-mockup__bar">
            <span className="social-mockup__dot bg-red-400" />
            <span className="social-mockup__dot bg-amber-300" />
            <span className="social-mockup__dot bg-emerald-400" />
            <span className="social-mockup__url">{domain || '[PLACEHOLDER]'}</span>
          </div>
          <div className="social-mockup__screen">
            <span>[PLACEHOLDER] mockup</span>
          </div>
        </SpotlightCard>

        <div className="flex flex-wrap justify-center gap-5">
          {tags.map(({ label, icon: Icon }) => (
            <span key={label} className="lux-pill social-tag">
              <Icon className="mr-3 h-7 w-7 relative z-10" />
              <span className="relative z-10">{label}</span>
            </span>
          ))}
        </div>
      </div>
    </Frame>
  );
};

/* ---------- Pinned reels, rebuilt in the site UI ---------- */

// Renders **keyword** as the site's gradient accent.
const Highlighted = ({ text }) =>
  text.split(/(\*\*[^*]+\*\*)/g).filter(Boolean).map((part, index) =>
    part.startsWith('**') ? (
      <span key={index} className="lux-gold-text social-keyword">{part.slice(2, -2)}</span>
    ) : (
      <React.Fragment key={index}>{part}</React.Fragment>
    )
  );

const VolumePill = ({ children }) => <span className="social-volume">{children}</span>;

const ServicesListPost = ({ theme, items, volume }) => {
  const t = SERVICES_TRANSLATIONS[LANG];
  return (
    <Frame theme={theme} corner={<VolumePill>Vol. {volume}</VolumePill>}>
      <SectionHeading prefix={t.titlePrefix} accent={t.titleAccent} suffix={t.titleSuffix} className="mb-10" />
      <SpotlightCard tilt={0} className="social-list rounded-[2.5rem] px-14 py-12 w-full">
        <ul className="relative z-10 space-y-7 text-left">
          {items.map((item, index) => (
            <li key={index} className="flex items-start gap-6">
              <span className="lux-bullet social-list__bullet" />
              <span className="social-list__text text-gray-300"><Highlighted text={item} /></span>
            </li>
          ))}
        </ul>
      </SpotlightCard>
    </Frame>
  );
};

const PURPOSE_ICONS = [Rocket, TrendingUp];

const PurposePost = ({ theme }) => (
  <Frame theme={theme}>
    <SectionHeading prefix="Ο" accent="σκοπός" suffix="μας" className="mb-6" />
    <p className="social-purpose__intro text-white mb-7">{PURPOSE.intro}</p>
    <div className="social-purpose__steps w-full mb-7">
      {PURPOSE.categories.map((category, index) => {
        const Icon = PURPOSE_ICONS[index];
        return (
          <SpotlightCard key={category.label} tilt={0} className="social-purpose__step rounded-[2rem] text-left">
            <span className="lux-card__index social-purpose__index" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
            <span className="lux-icon-orb social-purpose__icon relative z-10">
              <span className="lux-icon-orb__ring" aria-hidden="true" />
              <Icon className="relative z-10 h-9 w-9 text-primary" />
            </span>
            <div className="relative z-10 min-w-0">
              <h3 className="social-purpose__label font-bold text-white">{category.label}</h3>
              <p className="social-purpose__text text-gray-300"><Highlighted text={category.text} /></p>
            </div>
          </SpotlightCard>
        );
      })}
    </div>
    <SpotlightCard tilt={0} className="rounded-[2rem] px-10 py-8 w-full text-left">
      <p className="relative z-10 social-purpose__text text-gray-300 mb-5">{PURPOSE.worldIntro}</p>
      <div className="relative z-10 flex flex-wrap gap-3 mb-5">
        {PURPOSE.world.map((item) => (
          <span key={item} className="lux-pill social-world-pill">
            <span className="relative z-10">{item}</span>
          </span>
        ))}
      </div>
      <p className="relative z-10 social-purpose__text text-gray-300"><Highlighted text={PURPOSE.outro} /></p>
    </SpotlightCard>
  </Frame>
);

/* ---------- Free tools (one post per category) ---------- */

// Static, bundled SVG bodies (simple-icons / Arcticons), never user input.
const BrandLogo = ({ slug, color, className = '' }) => {
  if (LOGO_FILES[slug]) return <img src={LOGO_FILES[slug]} alt="" className={`${className} object-contain`} />;
  const logo = LOGOS[slug];
  if (!logo) return <Type className={className} style={{ color: 'var(--lux-ink)' }} aria-hidden="true" />;
  return (
    <svg
      viewBox={logo.viewBox}
      className={`${className} ${logo.viewBox === '0 0 24 24' ? '' : 'brand-logo--outline'}`}
      style={{ color: color || 'var(--lux-ink)' }}
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: logo.body }}
    />
  );
};

const TOOLS_TOTAL = TOOL_CATEGORIES.length + 1;

const PlanPill = ({ tool, className = '' }) => (
  <span className={`social-tool__plan social-tool__plan--free relative z-10 ${className}`}>Free{tool.limited ? '*' : ''}</span>
);

const ToolsCover = ({ theme }) => (
  <Frame theme={theme} footer={<Progress current={1} total={TOOLS_TOTAL} />}>
    <span className="social-badge mb-10">
      <Sparkles className="h-7 w-7" />
      {TOOLS_COVER.badge.split(/(\d+€)/).map((part, i) =>
        /^\d+€$/.test(part) ? <span key={i} className="social-price">{part}</span> : part
      )}
    </span>

    <h1 className="social-cover__title font-bold text-white luxury-heading text-center mb-8">
      {TOOLS_COVER.titleTop} <span className="lux-gold-text">{TOOLS_COVER.titleAccent}</span>
      <br />
      {TOOLS_COVER.titleBottom}
    </h1>
    <p className="social-cover__intro text-gray-300 text-center mb-12">{TOOLS_COVER.intro}</p>

    <div className="social-cover__list w-full mb-12">
      {TOOL_CATEGORIES.map((data, index) => (
        <SpotlightCard key={data.id} tilt={0} className="social-cover__item rounded-[2rem] text-left">
          <span className="social-tool__index relative z-10" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
          <div className="relative z-10 min-w-0 flex-1">
            <h3 className="social-cover__name font-bold text-white">{data.category}</h3>
            <p className="social-cover__count text-gray-300">
              {data.main.length} εργαλεία · +{data.bonus.length} έξτρα
            </p>
          </div>
          <div className="social-cover__stack relative z-10">
            {data.main.map((tool) => (
              <span key={tool.slug} className="social-cover__chip">
                <BrandLogo slug={tool.slug} color={tool.color} className="social-cover__mark" />
              </span>
            ))}
          </div>
        </SpotlightCard>
      ))}
    </div>

    <span className="lux-btn lux-btn--primary social-cta social-cover__swipe">
      <span className="lux-btn__glow" aria-hidden="true" />
      <span className="relative z-10">{TOOLS_COVER.swipe}</span>
      <ArrowRight className="relative z-10 h-9 w-9" />
    </span>
    <p className="social-tools__outro mt-8">
      <Bookmark className="h-7 w-7" />
      {OUTRO}
    </p>
  </Frame>
);

const FreeToolsPost = ({ theme, data, index }) => {
  const dense = data.main.length > 4;
  return (
    <Frame theme={theme} footer={<Progress current={index + 2} total={TOOLS_TOTAL} />}>
      <SectionHeading prefix={data.titlePrefix} accent={data.titleAccent} className={`social-category-heading ${dense ? 'mb-9' : 'mb-12'}`} />

      <div className={`social-grid w-full mb-6 ${dense ? 'social-grid--dense' : ''}`}>
        {data.main.map((tool, toolIndex) => (
          <SpotlightCard key={tool.slug} tilt={0} className="social-box rounded-[2rem] text-left">
            <span className="lux-card__index social-box__index" aria-hidden="true">{String(toolIndex + 1).padStart(2, '0')}</span>
            <div className="social-box__head relative z-10">
              <span className="social-box__logo" style={{ '--brand': tool.color || 'var(--lux-cyan)' }}>
                <BrandLogo slug={tool.slug} color={tool.color} className="social-box__mark" />
              </span>
              {dense && <PlanPill tool={tool} />}
            </div>
            <div className="relative z-10">
              <h3 className="social-box__name font-bold text-white">{tool.name}</h3>
              <p className="social-box__role text-gray-300">{tool.role}</p>
            </div>
            {!dense && <PlanPill tool={tool} className="social-box__plan" />}
          </SpotlightCard>
        ))}
      </div>

      {data.main.some((tool) => tool.limited) && <p className="social-tools__note w-full mb-6">{LIMITED_NOTE}</p>}

      <div className="social-bonus w-full">
        <span className="social-bonus__label">+ {BONUS_LABEL}</span>
        <span className="lux-divider social-bonus__rule" />
        <div className="flex gap-4">
          {data.bonus.map((tool) => (
            <span key={tool.slug} className="lux-pill social-bonus__pill">
              <BrandLogo slug={tool.slug} color={tool.color} className="social-bonus__mark relative z-10" />
              <span className="relative z-10">{tool.name}</span>
            </span>
          ))}
        </div>
      </div>
    </Frame>
  );
};

/* ---------- Google reviews ---------- */

const GoogleG = ({ className = '' }) => (
  <svg viewBox={GOOGLE_G.viewBox} className={className} aria-hidden="true" dangerouslySetInnerHTML={{ __html: GOOGLE_G.body }} />
);

const Stars = ({ className = '' }) => (
  <span className={`flex gap-1 text-yellow-400 ${className}`}>
    {[...Array(5)].map((_, i) => (
      <Star key={i} className="h-full w-auto aspect-square fill-current lux-star" />
    ))}
  </span>
);

const ReviewAvatar = ({ avatar, name }) => {
  const project = avatar.project && PROJECTS.find((item) => item.title === avatar.project);
  if (project) {
    return (
      <img
        src={project.image}
        alt={project.alt}
        className="social-review__avatar social-review__avatar--logo"
        style={{ background: avatar.fill || 'transparent' }}
      />
    );
  }
  if (avatar.image) {
    const src = AVATAR_FILES[avatar.image] || avatar.image;
    return <img src={src} alt={name} className="social-review__avatar object-cover" />;
  }
  return (
    <span className="social-review__avatar social-review__avatar--letter" style={{ background: avatar.color }}>
      {avatar.letter}
    </span>
  );
};

const ReviewCard = ({ review }) => (
  <SpotlightCard tilt={0} className="testimonial-card social-review rounded-[2rem] text-left">
    <Quote className="lux-quote-mark social-review__quote" aria-hidden="true" />
    <div className="relative z-10 flex items-center gap-5 mb-5">
      <ReviewAvatar avatar={review.avatar} name={review.name} />
      <div className="min-w-0 flex-1">
        <h4 className="social-review__name font-bold text-white">{review.name}</h4>
        <p className="social-review__category">
          <UtensilsCrossed className="h-[1.1em] w-[1.1em]" />
          {review.category}
        </p>
        <Stars className="social-review__stars" />
      </div>
      <GoogleG className="social-review__g" />
    </div>
    <p className="relative z-10 social-review__text text-gray-300">
      <Highlighted text={review.text} />
    </p>
  </SpotlightCard>
);

const ReviewsSlide = ({ theme, slide }) => {
  const t = TESTIMONIALS_TRANSLATIONS[LANG];
  const total = REVIEW_SLIDES.length;
  const last = slide === total - 1;
  const heading = REVIEW_HEADINGS[slide] || { prefix: t.titlePrefix, accent: t.titleAccent, suffix: t.titleSuffix };
  return (
    <Frame
      theme={theme}
      footer={<Progress current={slide + 1} total={total} />}
      corner={
        <span className="social-google-pill">
          <GoogleG className="social-google-pill__g" />
          <span>{REVIEWS_COPY.source}</span>
          <Stars className="social-google-pill__stars" />
        </span>
      }
    >
      <SectionHeading prefix={heading.prefix} accent={heading.accent} suffix={heading.suffix} className="mb-10" />
      <div className="social-reviews w-full">
        {REVIEW_SLIDES[slide].map((index) => (
          <ReviewCard key={index} review={GOOGLE_REVIEWS[index]} />
        ))}
      </div>
      {last ? (
        <span className="lux-btn lux-btn--primary social-cta social-reviews__cta mt-10">
          <span className="lux-btn__glow" aria-hidden="true" />
          <GoogleG className="relative z-10 social-reviews__cta-g" />
          <span className="relative z-10">{REVIEWS_COPY.cta}</span>
        </span>
      ) : (
        <p className="social-tools__outro mt-10">
          Σύρε για περισσότερες
          <ArrowRight className="h-7 w-7" />
        </p>
      )}
    </Frame>
  );
};

/* ---------- Barber booking pitch (Koulis 1980 as example) ---------- */

const BOOKING_ICONS = {
  user: UserRound,
  scissors: Scissors,
  calendar: CalendarCheck,
  message: MessageCircle,
  phoneOff: PhoneOff,
  clock: Clock,
  languages: Languages,
  palette: Palette,
  sparkles: Sparkles,
  sliders: SlidersHorizontal,
  zap: Zap,
  dashboard: LayoutDashboard,
};
const BOOKING_TOTAL = 4;
const bookingProject = () => PROJECTS.find((item) => item.title === BARBER_BOOKING.project);
const bookingDomain = () => (bookingProject()?.imageLink || '').replace(/^https?:\/\//, '').replace(/\/$/, '');

const PhoneMockup = ({ src, alt, className = '' }) => (
  <div className={`social-phone ${className}`}>
    <span className="social-phone__notch" aria-hidden="true" />
    <img src={src} alt={alt} className="social-phone__screen" />
  </div>
);

const BookingCover = ({ theme }) => {
  const c = BARBER_BOOKING.cover;
  const project = bookingProject();
  return (
    <Frame theme={theme} footer={<Progress current={1} total={BOOKING_TOTAL} />}>
      <div className="social-booking-cover w-full">
        <div className="social-booking-cover__copy">
          <span className="social-badge mb-9">
            <Scissors className="h-7 w-7" />
            {c.badge}
          </span>
          <h1 className="social-booking-cover__title font-bold text-white luxury-heading mb-7">
            {c.titleTop}
            <br />
            <span className="lux-gold-text">{c.titleAccent}</span> {c.titleBottom}
          </h1>
          <p className="social-booking-cover__intro text-gray-300 mb-10">{c.intro}</p>
          <span className="lux-pill social-booking-live">
            <img src={project.image} alt={project.alt} className="social-booking-live__logo relative z-10" />
            <span className="relative z-10">
              {c.example} <strong className="text-white">{bookingDomain()}</strong>
            </span>
          </span>
        </div>
        <PhoneMockup src={koulisBarbers} alt="Επιλογή κουρέα στο koulis80.gr" className="social-booking-cover__phone" />
      </div>
    </Frame>
  );
};

const BookingSteps = ({ theme }) => {
  const t = BARBER_BOOKING.steps;
  return (
    <Frame theme={theme} footer={<Progress current={2} total={BOOKING_TOTAL} />}>
      <SectionHeading prefix={t.titlePrefix} accent={t.titleAccent} suffix={t.titleSuffix} className="mb-10" />
      <div className="social-booking-steps w-full">
        <ol className="social-booking-steps__list">
          {t.items.map((item, index) => {
            const Icon = BOOKING_ICONS[item.icon];
            return (
              <li key={item.label}>
                <SpotlightCard tilt={0} className="social-booking-step rounded-[1.6rem] text-left">
                  <span className="social-booking-step__num relative z-10">{index + 1}</span>
                  <div className="relative z-10 min-w-0">
                    <h3 className="social-booking-step__label font-bold text-white">
                      <Icon className="h-[0.9em] w-[0.9em] text-primary" />
                      {item.label}
                    </h3>
                    <p className="social-booking-step__text text-gray-300">{item.text}</p>
                  </div>
                </SpotlightCard>
              </li>
            );
          })}
        </ol>
        <PhoneMockup src={koulisCalendar} alt="Ημερολόγιο κρατήσεων στο koulis80.gr" className="social-booking-steps__phone" />
      </div>
    </Frame>
  );
};

const BookingBenefits = ({ theme }) => {
  const t = BARBER_BOOKING.benefits;
  return (
    <Frame theme={theme} footer={<Progress current={3} total={BOOKING_TOTAL} />}>
      <SectionHeading prefix={t.titlePrefix} accent={t.titleAccent} suffix={t.titleSuffix} className="mb-10" />
      <div className={`social-grid w-full ${t.items.length > 4 ? 'social-grid--dense social-booking-benefits--dense' : ''}`}>
        {t.items.map((item, index) => {
          const Icon = BOOKING_ICONS[item.icon];
          return (
            <SpotlightCard key={item.label} tilt={0} className="social-box rounded-[2rem] text-left">
              <span className="lux-card__index social-box__index" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
              <span className="lux-icon-orb social-booking-benefit__icon relative z-10">
                <span className="lux-icon-orb__ring" aria-hidden="true" />
                <Icon className="relative z-10 h-9 w-9 text-primary" />
              </span>
              <div className="relative z-10">
                <h3 className="social-box__name font-bold text-white">{item.label}</h3>
                <p className="social-box__role text-gray-300">{item.text}</p>
              </div>
            </SpotlightCard>
          );
        })}
      </div>
    </Frame>
  );
};

const BookingCta = ({ theme }) => {
  const t = BARBER_BOOKING.cta;
  const project = bookingProject();
  return (
    <Frame theme={theme} footer={<Progress current={4} total={BOOKING_TOTAL} />}>
      <div className="flex flex-col items-center text-center">
        <span className="lux-logo-ring social-project__ring mb-10">
          <span className="lux-logo-ring__spin" aria-hidden="true" />
          <img src={project.image} alt={project.alt} className="lux-logo-ring__img social-project__logo" />
        </span>
        <SectionHeading prefix={t.titlePrefix} accent={t.titleAccent} suffix={t.titleSuffix} className="mb-8" />
        <p className="social-booking-cta__text text-gray-300 mb-12">{t.text}</p>
        <span className="lux-btn lux-btn--primary social-cta mb-10">
          <span className="lux-btn__glow" aria-hidden="true" />
          <MessageCircle className="relative z-10 h-9 w-9" />
          <span className="relative z-10">{t.button}</span>
        </span>
        <p className="social-tools__outro">
          <Globe className="h-7 w-7" />
          Δες το live: {bookingDomain()}
        </p>
      </div>
    </Frame>
  );
};

/* ---------- Clients logo wall ---------- */

const CLIENT_ICONS = { globe: Globe, instagram: Instagram, search: Search, app: AppWindow };

const ClientsWallPost = ({ theme }) => {
  const c = CLIENTS_COPY;
  const clients = PROJECTS.filter((item) => item.image && !CLIENTS_EXCLUDE.includes(item.title)).slice().reverse();
  const counts = CLIENT_SERVICES.map((service) => ({
    ...service,
    count: clients.filter((client) => (client.links || []).some((link) => service.match.test(link.label))).length,
  })).filter((service) => service.count > 0);

  return (
    <Frame theme={theme}>
      <SectionHeading prefix={c.titlePrefix} accent={c.titleAccent} className="mb-10" />

      <div className="social-clients w-full mb-11">
        {clients.map((client) => (
          <div key={client.title} className="social-client">
            <span className="social-client__logo">
              <img src={client.image} alt={client.alt} />
            </span>
            <span className="social-client__name">{client.title}</span>
          </div>
        ))}
      </div>

      <span className="social-badge mb-6">
        <Sparkles className="h-7 w-7" />
        {c.badge}
      </span>
      <p className="social-clients__intro text-gray-300 text-center mb-7">{c.servicesIntro}</p>
      <div className="social-clients__services w-full mb-9">
        {counts.map(({ icon, label, count }) => {
          const Icon = CLIENT_ICONS[icon];
          return (
            <SpotlightCard key={label} tilt={0} className="social-service rounded-[1.6rem]">
              <Icon className="relative z-10 social-service__icon text-primary" />
              <span className="relative z-10 social-service__count lux-gold-text font-bold">{count}</span>
              <span className="relative z-10 social-service__label text-gray-300">{label}</span>
            </SpotlightCard>
          );
        })}
      </div>
      <p className="social-clients__outro font-bold text-white">{c.outro}</p>
    </Frame>
  );
};

/* ---------- Registry ---------- */

// PROJECTS is ordered oldest → newest (the site shows it reversed).
const latestProject = PROJECTS[PROJECTS.length - 1];
const projectFromQuery = () => {
  const raw = new URLSearchParams(window.location.search).get('project');
  const index = raw === null ? NaN : Number(raw);
  return Number.isInteger(index) && PROJECTS[index] ? PROJECTS[index] : latestProject;
};

export const POSTS = [
  ...SERVICES_TRANSLATIONS[LANG].items.map((_, index) => ({
    id: `services-${String(index + 1).padStart(2, '0')}`,
    theme: 'dark',
    render: (theme) => <ServiceSlide theme={theme} index={index} />,
  })),
  { id: 'hero', theme: 'dark', render: (theme) => <HeroPost theme={theme} /> },
  ...TESTIMONIALS_TRANSLATIONS[LANG].items.map((_, index) => ({
    id: `testimonial-${index + 1}`,
    theme: 'light',
    render: (theme) => <TestimonialPost theme={theme} index={index} />,
  })),
  { id: 'new-project', theme: 'dark', render: (theme) => <NewProjectPost theme={theme} project={projectFromQuery()} /> },
  { id: 'pinned-1-services-vol-1', theme: 'light', render: (theme) => <ServicesListPost theme={theme} items={SERVICES_VOL_1} volume={1} /> },
  { id: 'pinned-2-services-vol-2', theme: 'light', render: (theme) => <ServicesListPost theme={theme} items={SERVICES_VOL_2} volume={2} /> },
  { id: 'pinned-3-purpose', theme: 'light', render: (theme) => <PurposePost theme={theme} /> },
  { id: 'clients-wall', theme: 'light', render: (theme) => <ClientsWallPost theme={theme} /> },
  { id: 'barber-booking-01-cover', theme: 'light', render: (theme) => <BookingCover theme={theme} /> },
  { id: 'barber-booking-02-steps', theme: 'light', render: (theme) => <BookingSteps theme={theme} /> },
  { id: 'barber-booking-03-benefits', theme: 'light', render: (theme) => <BookingBenefits theme={theme} /> },
  { id: 'barber-booking-04-cta', theme: 'light', render: (theme) => <BookingCta theme={theme} /> },
  ...REVIEW_SLIDES.map((_, slide) => ({
    id: `google-reviews-${String(slide + 1).padStart(2, '0')}`,
    theme: 'dark',
    render: (theme) => <ReviewsSlide theme={theme} slide={slide} />,
  })),
  { id: 'free-tools-01-cover', theme: 'light', render: (theme) => <ToolsCover theme={theme} /> },
  ...TOOL_CATEGORIES.map((data, index) => ({
    id: `free-tools-${String(index + 2).padStart(2, '0')}-${data.id}`,
    theme: 'light',
    render: (theme) => <FreeToolsPost theme={theme} data={data} index={index} />,
  })),
  { id: 'dark-vs-light-1-dark', theme: 'dark', render: (theme) => <HeroPost theme={theme} showThemePill /> },
  { id: 'dark-vs-light-2-light', theme: 'light', render: (theme) => <HeroPost theme={theme} showThemePill /> },
];
