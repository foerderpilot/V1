import React, { useState } from 'react';
import posthog from 'posthog-js';

function CookieBanner() {
  const [showBanner, setShowBanner] = useState(true);

  const acceptCookies = () => {
    posthog.opt_in_capturing();
    setShowBanner(false);
  };

  const declineCookies = () => {
    posthog.opt_out_capturing();
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    // Reduzierung der Breite und Zentrierung des Banners
    <div className="fixed inset-x-0 bottom-0 px-4 py-2 w-3/4 mx-auto">
      <div className="bg-blue-100 rounded-lg shadow-md">
        <div className="card-body items-center text-center">
          <h2 className="card-title">Informationen zu Cookies.</h2>
          <p>Unsere Website verwendet Cookies, um Ihr Browser-Erlebnis zu verbessern und um uns zu helfen, die Nutzung unserer Seite zu verstehen und zu verbessern. Insbesondere setzen wir Posthog und Vercel ein, um anonyme Daten über Website-Nutzung und -Leistung zu sammeln. Diese Informationen helfen uns, unsere Dienstleistungen für Sie zu optimieren.</p>
          <div className="card-actions justify-end">
            <button 
              className="btn btn-primary" 
              onClick={acceptCookies}>
              Alle Cookies akzeptieren
            </button>
            <button 
              className="btn btn-ghost" 
              onClick={declineCookies}>
              Alle Cookies ablehnen
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CookieBanner;
