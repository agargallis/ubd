import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useScroll, useSpring, useTransform, useReducedMotion } from 'framer-motion';

export const LUX_EASE = [0.22, 1, 0.36, 1];

export const useFinePointer = () => {
  const [isFine, setIsFine] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return undefined;
    const query = window.matchMedia('(hover: hover) and (pointer: fine)');
    const sync = () => setIsFine(query.matches);
    sync();
    query.addEventListener?.('change', sync);
    return () => query.removeEventListener?.('change', sync);
  }, []);

  return isFine;
};

const MOTION_TAGS = {
  div: motion.div,
  a: motion.a,
  article: motion.article,
};

// Card with pointer-driven 3D tilt, a moving spotlight and an animated gradient border.
export const SpotlightCard = React.forwardRef(
  ({ as = 'div', className = '', children, tilt = 8, style, onPointerMove, onPointerLeave, ...props }, forwardedRef) => {
    const Component = MOTION_TAGS[as] || motion.div;
    const localRef = useRef(null);
    const isFine = useFinePointer();
    const reduceMotion = useReducedMotion();
    const canTilt = isFine && !reduceMotion && tilt > 0;

    const rotateXRaw = useMotionValue(0);
    const rotateYRaw = useMotionValue(0);
    const rotateX = useSpring(rotateXRaw, { stiffness: 180, damping: 18, mass: 0.6 });
    const rotateY = useSpring(rotateYRaw, { stiffness: 180, damping: 18, mass: 0.6 });

    const setRefs = (node) => {
      localRef.current = node;
      if (typeof forwardedRef === 'function') forwardedRef(node);
      else if (forwardedRef) forwardedRef.current = node;
    };

    const handlePointerMove = (event) => {
      const node = localRef.current;
      if (node) {
        const rect = node.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        node.style.setProperty('--mx', `${x}px`);
        node.style.setProperty('--my', `${y}px`);
        if (canTilt) {
          rotateYRaw.set(((x / rect.width) - 0.5) * tilt * 2);
          rotateXRaw.set(-((y / rect.height) - 0.5) * tilt * 2);
        }
      }
      onPointerMove?.(event);
    };

    const handlePointerLeave = (event) => {
      rotateXRaw.set(0);
      rotateYRaw.set(0);
      onPointerLeave?.(event);
    };

    return (
      <Component
        ref={setRefs}
        className={`lux-card group/lux ${className}`}
        style={{
          ...style,
          rotateX: canTilt ? rotateX : 0,
          rotateY: canTilt ? rotateY : 0,
          transformPerspective: 1100,
        }}
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        {...props}
      >
        <span className="lux-card__border" aria-hidden="true" />
        <span className="lux-card__spotlight" aria-hidden="true" />
        <span className="lux-card__sheen" aria-hidden="true" />
        {children}
      </Component>
    );
  }
);
SpotlightCard.displayName = 'SpotlightCard';

// Pulls its child gently toward the pointer.
export const Magnetic = ({ children, strength = 0.32, className = '' }) => {
  const ref = useRef(null);
  const isFine = useFinePointer();
  const reduceMotion = useReducedMotion();
  const x = useSpring(0, { stiffness: 220, damping: 16, mass: 0.4 });
  const y = useSpring(0, { stiffness: 220, damping: 16, mass: 0.4 });
  const enabled = isFine && !reduceMotion;

  const handleMove = (event) => {
    if (!enabled || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((event.clientX - (rect.left + rect.width / 2)) * strength);
    y.set((event.clientY - (rect.top + rect.height / 2)) * strength);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={`inline-flex ${className}`}
      style={{ x, y }}
      onPointerMove={handleMove}
      onPointerLeave={reset}
    >
      {children}
    </motion.div>
  );
};

// Splits a string into words that rise out of a blur, one after another.
export const WordReveal = ({ text, className = '', wordClassName = '', delay = 0, stagger = 0.06, inView = true }) => {
  const words = String(text).split(' ').filter(Boolean);
  const trigger = inView
    ? { initial: 'hidden', whileInView: 'visible', viewport: { once: true, amount: 0.6 } }
    : { initial: 'hidden', animate: 'visible' };

  return (
    <motion.span
      className={`inline ${className}`}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
      {...trigger}
    >
      {words.map((word, index) => (
        <React.Fragment key={`${word}-${index}`}>
          <span className="lux-word-mask">
            <motion.span
              className={`lux-word ${wordClassName}`}
              variants={{
                hidden: { y: '60%', opacity: 0, filter: 'blur(10px)', rotateX: -55 },
                visible: {
                  y: '0%',
                  opacity: 1,
                  filter: 'blur(0px)',
                  rotateX: 0,
                  transition: { duration: 0.9, ease: LUX_EASE },
                },
              }}
            >
              {word}
            </motion.span>
          </span>
          {index < words.length - 1 ? ' ' : ''}
        </React.Fragment>
      ))}
    </motion.span>
  );
};

// Eyebrow ornament + word-reveal title + gold/cyan sweeping underline.
export const SectionHeading = ({ prefix, accent, suffix, className = '', align = 'center' }) => (
  <div className={`lux-heading ${align === 'center' ? 'text-center' : ''} ${className}`}>
    <motion.div
      className="lux-ornament"
      initial={{ opacity: 0, scaleX: 0.3 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.1, ease: LUX_EASE }}
      aria-hidden="true"
    >
      <span className="lux-ornament__line" />
      <span className="lux-ornament__diamond" />
      <span className="lux-ornament__line lux-ornament__line--right" />
    </motion.div>
    <h2 className="relative inline-block text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.12] pb-4">
      {prefix ? <WordReveal text={prefix} /> : null}{prefix ? ' ' : ''}
      <WordReveal text={accent} delay={0.12} wordClassName="lux-gold-text" />
      {suffix ? ' ' : ''}{suffix ? <WordReveal text={suffix} delay={0.24} /> : null}
      <motion.span
        aria-hidden="true"
        className="lux-heading__underline"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: LUX_EASE, delay: 0.45 }}
      />
    </h2>
  </div>
);

export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.3 });
  return <motion.div className="lux-scroll-progress" style={{ scaleX }} aria-hidden="true" />;
};

// Soft light that trails the pointer across the whole page.
export const PointerAura = () => {
  const isFine = useFinePointer();
  const reduceMotion = useReducedMotion();
  const x = useSpring(-400, { stiffness: 60, damping: 20, mass: 0.8 });
  const y = useSpring(-400, { stiffness: 60, damping: 20, mass: 0.8 });

  useEffect(() => {
    if (!isFine || reduceMotion) return undefined;
    const handleMove = (event) => {
      x.set(event.clientX);
      y.set(event.clientY);
    };
    window.addEventListener('pointermove', handleMove, { passive: true });
    return () => window.removeEventListener('pointermove', handleMove);
  }, [isFine, reduceMotion, x, y]);

  if (!isFine || reduceMotion) return null;
  return <motion.div className="lux-pointer-aura" style={{ x, y }} aria-hidden="true" />;
};

// Parallax helper: moves children vertically as the section scrolls past.
export const Parallax = ({ children, offset = 60, className = '' }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);
  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
};
