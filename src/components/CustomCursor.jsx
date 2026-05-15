import { useEffect, useRef, useState } from 'react';

const INTERACTIVE_SELECTOR = [
  'a[href]',
  'button:not(:disabled)',
  '[role="button"]',
  '[role="link"]',
  'summary',
  'label',
  '[data-cursor="interactive"]',
].join(',');

const TEXT_SELECTOR = [
  'input',
  'textarea',
  'select',
  '[contenteditable="true"]',
  '[contenteditable=""]',
].join(',');

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const targetPoint = useRef({ x: 0, y: 0 });
  const currentPoint = useRef({ x: 0, y: 0 });
  const rafRef = useRef(null);
  const variantRef = useRef('idle');
  const [isEnabled, setIsEnabled] = useState(false);
  const [variant, setVariant] = useState('idle');

  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined;
    }

    const finePointerQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    const syncEnabledState = () => {
      setIsEnabled(finePointerQuery.matches && !reducedMotionQuery.matches);
    };

    syncEnabledState();
    const addQueryListener = (query) => {
      if (query.addEventListener) {
        query.addEventListener('change', syncEnabledState);
        return;
      }

      query.addListener(syncEnabledState);
    };

    const removeQueryListener = (query) => {
      if (query.removeEventListener) {
        query.removeEventListener('change', syncEnabledState);
        return;
      }

      query.removeListener(syncEnabledState);
    };

    addQueryListener(finePointerQuery);
    addQueryListener(reducedMotionQuery);

    return () => {
      removeQueryListener(finePointerQuery);
      removeQueryListener(reducedMotionQuery);
    };
  }, []);

  useEffect(() => {
    if (!isEnabled) {
      document.body.classList.remove('has-custom-cursor');
      variantRef.current = 'idle';
      setVariant('idle');
      return undefined;
    }

    document.body.classList.add('has-custom-cursor');

    const render = () => {
      const cursor = cursorRef.current;
      if (!cursor) {
        return;
      }

      currentPoint.current.x += (targetPoint.current.x - currentPoint.current.x) * 0.24;
      currentPoint.current.y += (targetPoint.current.y - currentPoint.current.y) * 0.24;

      cursor.style.setProperty('--cursor-x', `${currentPoint.current.x}px`);
      cursor.style.setProperty('--cursor-y', `${currentPoint.current.y}px`);

      rafRef.current = window.requestAnimationFrame(render);
    };

    const getVariant = (target) => {
      if (!(target instanceof Element)) {
        return 'default';
      }

      if (target.closest(TEXT_SELECTOR)) {
        return 'text';
      }

      if (target.closest(INTERACTIVE_SELECTOR)) {
        return 'interactive';
      }

      return 'default';
    };

    const handlePointerMove = (event) => {
      targetPoint.current = { x: event.clientX, y: event.clientY };

      if (variantRef.current === 'idle') {
        currentPoint.current = { x: event.clientX, y: event.clientY };
      }

      const nextVariant = getVariant(event.target);
      if (variantRef.current !== nextVariant) {
        variantRef.current = nextVariant;
        setVariant(nextVariant);
      }
    };

    const handlePointerOut = (event) => {
      if (!event.relatedTarget) {
        variantRef.current = 'idle';
        setVariant('idle');
      }
    };

    const handlePointerDown = () => {
      const nextVariant = variantRef.current === 'text' ? 'text' : 'pressed';
      variantRef.current = nextVariant;
      setVariant(nextVariant);
    };

    const handlePointerUp = (event) => {
      const nextVariant = getVariant(event.target);
      variantRef.current = nextVariant;
      setVariant(nextVariant);
    };

    rafRef.current = window.requestAnimationFrame(render);
    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('pointerout', handlePointerOut);
    window.addEventListener('pointerdown', handlePointerDown, { passive: true });
    window.addEventListener('pointerup', handlePointerUp, { passive: true });

    return () => {
      document.body.classList.remove('has-custom-cursor');
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerout', handlePointerOut);
      window.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('pointerup', handlePointerUp);

      if (rafRef.current) {
        window.cancelAnimationFrame(rafRef.current);
      }
    };
  }, [isEnabled]);

  if (!isEnabled) {
    return null;
  }

  return (
    <div
      ref={cursorRef}
      className={`custom-cursor custom-cursor--${variant}`}
      aria-hidden="true"
    >
      <span className="custom-cursor__ring" />
      <span className="custom-cursor__dot" />
    </div>
  );
};

export default CustomCursor;
