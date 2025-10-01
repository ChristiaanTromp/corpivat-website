import type { AppProps } from 'next/app';
import '../styles/globals.css';

/**
 * Next.js App component
 * Importeert globale CSS en kan gebruikt worden voor app-wide state management
 */
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

