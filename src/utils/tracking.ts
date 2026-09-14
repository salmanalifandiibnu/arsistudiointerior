// src/utils/tracking.ts

export interface UTMData {
  source?: string;
  medium?: string;
  campaign?: string;
  content?: string;
  term?: string;
  gclid?: string;
  fbclid?: string;
}

const STORAGE_KEY = 'arsi_studio_utm';
let lastTrackTime = 0;

/**
 * Capture and persist UTM & click IDs from URL into sessionStorage
 */
export function initUTMTracking(): void {
  if (typeof window === 'undefined') return;

  try {
    const params = new URLSearchParams(window.location.search);
    const source = params.get('utm_source');
    const medium = params.get('utm_medium');
    const campaign = params.get('utm_campaign');
    const content = params.get('utm_content');
    const term = params.get('utm_term');
    const gclid = params.get('gclid');
    const fbclid = params.get('fbclid');

    // Only overwrite if at least one tracking parameter is present
    if (source || medium || campaign || content || term || gclid || fbclid) {
      const utmData: UTMData = {
        source: source ? sanitizeParam(source) : undefined,
        medium: medium ? sanitizeParam(medium) : undefined,
        campaign: campaign ? sanitizeParam(campaign) : undefined,
        content: content ? sanitizeParam(content) : undefined,
        term: term ? sanitizeParam(term) : undefined,
        gclid: gclid ? sanitizeParam(gclid) : undefined,
        fbclid: fbclid ? sanitizeParam(fbclid) : undefined,
      };
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(utmData));
    }
  } catch {
    // Graceful fallback for private browsing or restricted environments
  }
}

/**
 * Sanitize parameter to prevent CRLF injection or URL malformation
 */
function sanitizeParam(str: string): string {
  return str.replace(/[\r\n\t]/g, '').trim().substring(0, 80);
}

/**
 * Retrieve stored UTM data from sessionStorage
 */
export function getSavedUTM(): UTMData | null {
  if (typeof window === 'undefined') return null;

  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

/**
 * Construct robust universal WhatsApp URL with ad attribution
 */
export function buildWhatsAppUrl(phoneNumber: string, baseMessage: string): string {
  const cleanPhone = phoneNumber.replace(/\D/g, '');
  const utm = getSavedUTM();
  let finalMessage = baseMessage.trim();

  // If traffic came from ads/campaign, append discreet reference line
  if (utm && (utm.source || utm.campaign || utm.fbclid || utm.gclid)) {
    const parts: string[] = [];
    if (utm.source) parts.push(utm.source);
    if (utm.campaign) parts.push(utm.campaign);
    if (utm.content) parts.push(utm.content);
    if (!utm.source && utm.fbclid) parts.push('fb-ads');
    if (!utm.source && utm.gclid) parts.push('google-ads');

    const attributionTag = `\n\n[Ref: ${parts.join(' • ')}]`;
    finalMessage += attributionTag;
  }

  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(finalMessage)}`;
}

/**
 * Cooldown debouncer (2000ms) for lead tracking to prevent double-firing
 */
export function handleLeadConversion(eventName: string, callback?: () => void): boolean {
  const now = Date.now();
  if (now - lastTrackTime < 2000) {
    return false; // Suppress duplicate click
  }
  lastTrackTime = now;

  // Safe hook for future Meta Pixel / Google Analytics / TikTok Pixel
  try {
    if (typeof window !== 'undefined') {
      // Meta Pixel
      if ((window as any).fbq) {
        (window as any).fbq('track', 'Lead', { content_name: eventName });
      }
      // Google Analytics (gtag)
      if ((window as any).gtag) {
        (window as any).gtag('event', 'generate_lead', {
          event_category: 'engagement',
          event_label: eventName,
        });
      }
    }
  } catch {
    // Non-blocking telemetry failure
  }

  if (callback) {
    callback();
  }
  return true;
}
