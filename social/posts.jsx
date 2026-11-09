import React from 'react';
import { Sparkles, ArrowUpRight, Quote, Star, Sun, Moon, Globe, Instagram, Search, Rocket, TrendingUp } from 'lucide-react';
import { SpotlightCard, SectionHeading, WordReveal } from '@/components/lux/Lux';
import { HERO_TRANSLATIONS } from '@/components/Hero';
import { SERVICES_TRANSLATIONS, SERVICE_META, ServiceCard } from '@/components/Services';
import { TESTIMONIALS_TRANSLATIONS, TESTIMONIAL_META } from '@/components/Testimonials';
import { PROJECTS } from '@/components/About';
import { SERVICES_VOL_1, SERVICES_VOL_2, PURPOSE } from './content/pinned-reels';

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
  { id: 'dark-vs-light-1-dark', theme: 'dark', render: (theme) => <HeroPost theme={theme} showThemePill /> },
  { id: 'dark-vs-light-2-light', theme: 'light', render: (theme) => <HeroPost theme={theme} showThemePill /> },
];
