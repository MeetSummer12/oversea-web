import createMiddleware from 'next-intl/middleware';
import nextIntlConfig from './next-intl.config';

// Use next-intl's middleware to handle locale routing & detection
export default createMiddleware(nextIntlConfig);

export const config = {
  matcher: ['/((?!_next|.*\\..*).*)'],
};