(function () {
    'use strict';

    // Actieve omgeving: 'ONTWIKKEL', 'OEFEN' of 'PRODUCTIE'
    // Lokale hosts (localhost, 127.0.0.1, 192.168.*) loggen altijd naar ONTWIKKEL, ongeacht deze instelling.
    const logTo = 'ONTWIKKEL';

    // Bepaal omgeving op basis van hostname en logTo
    const hostname = window.location.hostname;
    const isLocal = hostname === 'localhost' || hostname === '127.0.0.1' || hostname.startsWith('192.168.');
    const useOntwikkel = isLocal || logTo === 'ONTWIKKEL';
    const matomoUrl = useOntwikkel
        ? 'https://stats-ontwikkel.omgeving.vlaanderen.be/'
        : logTo === 'PRODUCTIE'
            ? 'https://stats.omgeving.vlaanderen.be/'
            : 'https://stats-oefen.omgeving.vlaanderen.be/';
    const siteId = useOntwikkel ? '45' : logTo === 'PRODUCTIE' ? '89' : '36';

    // Extraheer versie uit URL-pad: /release-v1/1.0.0/storybook/ → 1.0.0
    const extractVersion = () =>
        window.location.pathname.match(/\/release-v\d+\/([^/]+)\//)?.[1] ?? 'local';

    // Initialiseer Matomo queue
    window._paq = window._paq || [];

    // Stel custom dimension in met de versie (dimension 1)
    const version = extractVersion();
    window._paq.push(['setCustomDimension', 1, version]);

    // Forceer nieuwe visit als de gebruiker van een andere versie navigeerde
    const previousVersion = sessionStorage.getItem('matomoVersion');
    if (previousVersion === null || previousVersion !== version) {
        window._paq.push(['appendToTrackingUrl', 'new_visit=1']);
    }
    sessionStorage.setItem('matomoVersion', version);

    // Tracking configuratie
    window._paq.push(['setTrackerUrl', `${matomoUrl}matomo.php`]);
    window._paq.push(['setSiteId', siteId]);
    window._paq.push(['enableLinkTracking']);
    window._paq.push(['trackPageView']);
    window._paq.push(['appendToTrackingUrl', '']);

    // Laad Matomo tracker script
    const trackerScript = document.createElement('script');
    const firstScript = document.getElementsByTagName('script')[0];
    trackerScript.async = true;
    trackerScript.src = `${matomoUrl}matomo.js`;
    firstScript.parentNode.insertBefore(trackerScript, firstScript);

    // SPA-navigatie detectie: track URL-wijzigingen
    let lastUrl = window.location.href;

    const trackPageChange = () => {
        const currentUrl = window.location.href;
        if (currentUrl !== lastUrl) {
            lastUrl = currentUrl;
            window._paq.push(['setCustomUrl', currentUrl]);
            window._paq.push(['setDocumentTitle', document.title]);
            window._paq.push(['setCustomDimension', 1, version]);
            window._paq.push(['trackPageView']);
        }
    };

    // Luister naar popstate (browser back/forward)
    window.addEventListener('popstate', () => setTimeout(trackPageChange, 50));

    // Periodieke URL-check voor pushState navigatie (Storybook gebruikt dit)
    setInterval(trackPageChange, 1000);
})();
