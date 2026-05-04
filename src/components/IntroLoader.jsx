import React, { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const LOADING_DURATION_MS = 2600;
const WELCOME_DURATION_MS = 900;

const IntroLoader = () => {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState('loading');
  const [isVisible, setIsVisible] = useState(true);

  const progressLabel = useMemo(() => `${Math.max(progress, 1)}%`, [progress]);

  useEffect(() => {
    const root = window.document.documentElement;
    const previousOverflow = root.style.overflow;
    root.style.overflow = 'hidden';

    const startedAt = performance.now();
    const tick = () => {
      const elapsed = performance.now() - startedAt;
      const nextProgress = Math.min(100, Math.ceil((elapsed / LOADING_DURATION_MS) * 100));
      setProgress(nextProgress);

      if (nextProgress < 100) {
        frameId = window.requestAnimationFrame(tick);
        return;
      }

      setPhase('welcome');
      welcomeTimeoutId = window.setTimeout(() => {
        setIsVisible(false);
        root.style.overflow = previousOverflow;
      }, WELCOME_DURATION_MS);
    };

    let frameId = window.requestAnimationFrame(tick);
    let welcomeTimeoutId;

    return () => {
      window.cancelAnimationFrame(frameId);
      window.clearTimeout(welcomeTimeoutId);
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
          exit={{ opacity: 0, scale: 1.02, transition: { duration: 0.45, ease: 'easeInOut' } }}
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
            <motion.img
              src="https://i.imgur.com/I7mGxrV.png"
              alt="UBD Logo"
              className="intro-loader__logo intro-loader__logo--pulse"
              initial={{ scale: 0.86, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.75, ease: 'easeOut' }}
            />

            <div className="intro-loader__status">
              <div className="intro-loader__bar-shell" aria-hidden="true">
                <motion.div
                  className="intro-loader__bar-fill"
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
