import React, { useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const LOADING_DURATION_MS = 2600;
const WELCOME_DURATION_MS = 900;
const INTRO_LOGO_URL = 'https://i.imgur.com/I7mGxrV.png';

const THEME_LOGO_STYLES = {
  light: {
    backgroundColor: '#000000',
    boxShadow: '0 0 18px rgba(66, 170, 214, 0.16)',
  },
  dark: {
    backgroundColor: '#ffffff',
    boxShadow: '0 0 18px rgba(91, 234, 255, 0.3)',
  },
};

const IntroLoader = ({ theme = 'light', onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState('loading');
  const [isVisible, setIsVisible] = useState(true);
  const onCompleteRef = useRef(onComplete);

  const progressLabel = useMemo(() => `${Math.max(progress, 1)}%`, [progress]);
  const logoStyle = THEME_LOGO_STYLES[theme] || THEME_LOGO_STYLES.light;

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    const root = window.document.documentElement;
    const previousOverflow = root.style.overflow;
    root.style.overflow = 'hidden';

    let isFinished = false;
    let welcomeTimeoutId;

    // Always hand scrolling back, even if timers get throttled on mobile.
    const finish = () => {
      if (isFinished) return;
      isFinished = true;
      window.clearInterval(intervalId);
      window.clearTimeout(welcomeTimeoutId);
      window.clearTimeout(safetyTimeoutId);
      root.style.overflow = previousOverflow;
      setIsVisible(false);
      onCompleteRef.current?.();
    };

    // Progress is driven by wall-clock time, not requestAnimationFrame,
    // which mobile browsers pause or slow down (low power, in-app browsers).
    const startedAt = Date.now();
    const tick = () => {
      const elapsed = Date.now() - startedAt;
      const nextProgress = Math.min(100, Math.ceil((elapsed / LOADING_DURATION_MS) * 100));
      setProgress(nextProgress);

      if (nextProgress < 100 || welcomeTimeoutId) return;

      window.clearInterval(intervalId);
      setPhase('welcome');
      welcomeTimeoutId = window.setTimeout(finish, WELCOME_DURATION_MS);
    };

    const intervalId = window.setInterval(tick, 40);
    const safetyTimeoutId = window.setTimeout(finish, LOADING_DURATION_MS + WELCOME_DURATION_MS + 1500);
    const skip = () => finish();
    window.addEventListener('pointerdown', skip, { once: true });

    return () => {
      window.clearInterval(intervalId);
      window.clearTimeout(welcomeTimeoutId);
      window.clearTimeout(safetyTimeoutId);
      window.removeEventListener('pointerdown', skip);
      root.style.overflow = previousOverflow;
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="intro-loader"
          className="intro-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.06, filter: 'blur(12px)', transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }}
        >
          <div className="intro-loader__backdrop" aria-hidden="true">
            <div className="intro-loader__blurwash" />
            <div className="intro-loader__orb intro-loader__orb--cyan" />
            <div className="intro-loader__orb intro-loader__orb--blue" />
            <div className="intro-loader__orb intro-loader__orb--gold" />
            <div className="intro-loader__beam intro-loader__beam--left" />
            <div className="intro-loader__beam intro-loader__beam--right" />
          </div>

          <motion.div
            className="intro-loader__content"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
          >
            <div className="lux-intro-rings" aria-hidden="true">
              <span className="lux-intro-ring lux-intro-ring--outer" />
              <span className="lux-intro-ring lux-intro-ring--inner" />
            </div>
            <motion.div
              role="img"
              aria-label="UBD Logo"
              className="intro-loader__logo intro-loader__logo--pulse"
              style={{
                ...logoStyle,
                WebkitMaskImage: `url(${INTRO_LOGO_URL})`,
                maskImage: `url(${INTRO_LOGO_URL})`,
              }}
              initial={{ scale: 0.6, opacity: 0, filter: 'blur(14px)' }}
              animate={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            />

            <div className="intro-loader__status">
              <div className="intro-loader__bar-shell" aria-hidden="true">
                <motion.div
                  className="intro-loader__bar-fill lux-intro-bar"
                  animate={{ width: `${progress}%` }}
                  transition={{ ease: 'easeOut', duration: 0.08 }}
                />
              </div>
              <span className="intro-loader__progress">{progressLabel}</span>
            </div>

            <AnimatePresence mode="wait">
              {phase === 'loading' ? (
                <motion.p
                  key="loading"
                  className="intro-loader__headline"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.22 }}
                >
                  Preparing your digital experience...
                </motion.p>
              ) : (
                <motion.p
                  key="welcome"
                  className="intro-loader__headline intro-loader__headline--welcome"
                  initial={{ opacity: 0, y: 16, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                >
                  Welcome to UBD!
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroLoader;
