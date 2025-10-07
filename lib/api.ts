/**
 * API Configuration
 * Centrale configuratie voor API endpoints
 */

// Bepaal de API URL op basis van de omgeving
export const getApiUrl = (): string => {
  // Gebruik altijd de huidige domain (relatieve URLs)
  // Dit werkt zowel in development als productie
  return '';
};

// API endpoints
export const API_ENDPOINTS = {
  CONTACT: '/api/contact',
  WACHTLIJST: '/api/wachtlijst',
} as const;

// Helper functie om volledige API URL te krijgen
export const getFullApiUrl = (endpoint: string): string => {
  return `${getApiUrl()}${endpoint}`;
};
