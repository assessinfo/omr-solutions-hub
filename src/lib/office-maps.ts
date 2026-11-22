// Google Maps links for the company's offices.
//
// These use Google's key-free Maps URLs so the same links work on every
// domain the site is served from (lovable.app preview and omrsolutions.co.in).

export function officeMapEmbedUrl(query: string): string {
  return `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed&z=16`;
}

export function officeDirectionsUrl(query: string): string {
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(query)}`;
}

export function officeSearchUrl(query: string): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}
