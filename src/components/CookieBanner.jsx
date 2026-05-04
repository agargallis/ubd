import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Cookie, X, Shield, Settings } from 'lucide-react';

const COOKIE_TRANSLATIONS = {
  el: {
    title: 'Χρησιμοποιούμε Cookies',
    subtitle: 'Σύμφωνα με τον GDPR',
    descriptionPrefix: 'Χρησιμοποιούμε cookies για να βελτιώσουμε την εμπειρία σας, να αναλύσουμε την επισκεψιμότητα και να εξατομικεύσουμε το περιεχόμενο. Με την αποδοχή, συμφωνείτε με την',
    privacyPolicy: 'Πολιτική Απορρήτου',
    descriptionSuffix: 'μας.',
    acceptAll: 'Αποδοχή Όλων',
    rejectAll: 'Απόρριψη Όλων',
    settings: 'Ρυθμίσεις',
    protectedBy: 'Προστατευμένο με reCAPTCHA v3',
    settingsTitle: 'Ρυθμίσεις Cookies',
    necessary: 'Απαραίτητα',
    alwaysOn: 'Πάντα ενεργά',
    necessaryDesc: 'Απαραίτητα για τη λειτουργία της ιστοσελίδας.',
    analytics: 'Ανάλυση',
    analyticsDesc: 'Μας βοηθούν να κατανοήσουμε πώς χρησιμοποιείτε την ιστοσελίδα.',
    marketing: 'Marketing',
    marketingDesc: 'Χρησιμοποιούνται για εξατομικευμένες διαφημίσεις.',
    savePreferences: 'Αποθήκευση Προτιμήσεων',
    cancel: 'Ακύρωση',
    close: 'Κλείσιμο',
  },
  en: {
    title: 'We Use Cookies',
    subtitle: 'In compliance with GDPR',
    descriptionPrefix: 'We use cookies to improve your experience, analyze traffic, and personalize content. By accepting, you agree to our',
    privacyPolicy: 'Privacy Policy',
    descriptionSuffix: '.',
    acceptAll: 'Accept All',
    rejectAll: 'Reject All',
    settings: 'Settings',
    protectedBy: 'Protected by reCAPTCHA v3',
    settingsTitle: 'Cookie Settings',
    necessary: 'Necessary',
    alwaysOn: 'Always active',
    necessaryDesc: 'Required for the website to function.',
    analytics: 'Analytics',
    analyticsDesc: 'Helps us understand how you use the website.',
    marketing: 'Marketing',
    marketingDesc: 'Used for personalized advertising.',
    savePreferences: 'Save Preferences',
    cancel: 'Cancel',
    close: 'Close',
  },
};

const CookieBanner = ({ language, isEnabled = true }) => {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
  });
  const t = COOKIE_TRANSLATIONS[language] || COOKIE_TRANSLATIONS.el;

  useEffect(() => {
    if (!isEnabled) {
      setShowBanner(false);
      return;
    }

    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      const timeoutId = window.setTimeout(() => setShowBanner(true), 250);
      return () => window.clearTimeout(timeoutId);
    }
  }, [isEnabled]);

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem('cookieConsent', JSON.stringify(allAccepted));
    setShowBanner(false);
  };

  const handleRejectAll = () => {
    const rejected = {
      necessary: true,
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem('cookieConsent', JSON.stringify(rejected));
    setShowBanner(false);
  };

  const handleSavePreferences = () => {
    const saved = {
      ...preferences,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem('cookieConsent', JSON.stringify(saved));
    setShowBanner(false);
    setShowSettings(false);
  };

  const togglePreference = (key) => {
    if (key === 'necessary') return;
    setPreferences(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-[9999] p-4 md:p-6"
        >
          <div className="container mx-auto max-w-6xl">
            <div className="bg-slate-900 dark:bg-slate-800 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden">
              {!showSettings ? (
                <div className="p-6 md:p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="bg-primary/20 p-3 rounded-full">
                        <Cookie className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="cookie-banner-title text-xl font-bold">{t.title}</h3>
                        <p className="text-sm text-gray-400">{t.subtitle}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => setShowBanner(false)}
                      className="text-gray-400 hover:text-white transition-colors"
                      aria-label={t.close}
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {t.descriptionPrefix}{' '}
                    <Link to="/privacy" className="text-primary hover:underline">{t.privacyPolicy}</Link>{' '}
                    {t.descriptionSuffix}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                      onClick={handleAcceptAll}
                      className="flex-1 bg-primary hover:bg-primary/90 text-white font-semibold"
                      size="lg"
                    >
                      {t.acceptAll}
                    </Button>
                    <Button
                      onClick={handleRejectAll}
                      variant="outline"
                      className="flex-1 border-slate-600 text-white hover:bg-slate-800"
                      size="lg"
                    >
                      {t.rejectAll}
                    </Button>
                    <Button
                      onClick={() => setShowSettings(true)}
                      variant="outline"
                      className="border-slate-600 text-white hover:bg-slate-800"
                      size="lg"
                    >
                      <Settings className="h-4 w-4 mr-2" />
                      {t.settings}
                    </Button>
                  </div>

                  <div className="mt-4 flex items-center justify-center text-xs text-gray-500">
                    <Shield className="h-3 w-3 mr-1" />
                    {t.protectedBy}
                  </div>
                </div>
              ) : (
                <div className="p-6 md:p-8">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="cookie-banner-title text-xl font-bold">{t.settingsTitle}</h3>
                    <button
                      onClick={() => setShowSettings(false)}
                      className="text-gray-400 hover:text-white transition-colors"
                      aria-label={t.close}
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-6 bg-primary rounded-full relative">
                            <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                          </div>
                          <span className="font-semibold text-white">{t.necessary}</span>
                        </div>
                        <span className="text-xs text-gray-400">{t.alwaysOn}</span>
                      </div>
                      <p className="text-sm text-gray-400">
                        {t.necessaryDesc}
                      </p>
                    </div>

                    <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-3">
                          <button
                            onClick={() => togglePreference('analytics')}
                            className={`w-10 h-6 rounded-full relative transition-colors ${
                              preferences.analytics ? 'bg-primary' : 'bg-slate-600'
                            }`}
                          >
                            <div
                              className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${
                                preferences.analytics ? 'right-1' : 'left-1'
                              }`}
                            ></div>
                          </button>
                          <span className="font-semibold text-white">{t.analytics}</span>
                        </div>
                      </div>
                      <p className="text-sm text-gray-400">
                        {t.analyticsDesc}
                      </p>
                    </div>

                    <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-3">
                          <button
                            onClick={() => togglePreference('marketing')}
                            className={`w-10 h-6 rounded-full relative transition-colors ${
                              preferences.marketing ? 'bg-primary' : 'bg-slate-600'
                            }`}
                          >
                            <div
                              className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${
                                preferences.marketing ? 'right-1' : 'left-1'
                              }`}
                            ></div>
                          </button>
                          <span className="font-semibold text-white">{t.marketing}</span>
                        </div>
                      </div>
                      <p className="text-sm text-gray-400">
                        {t.marketingDesc}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                      onClick={handleSavePreferences}
                      className="flex-1 bg-primary hover:bg-primary/90 text-white font-semibold"
                      size="lg"
                    >
                      {t.savePreferences}
                    </Button>
                    <Button
                      onClick={() => setShowSettings(false)}
                      variant="outline"
                      className="border-slate-600 text-white hover:bg-slate-800"
                      size="lg"
                    >
                      {t.cancel}
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;
