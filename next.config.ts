import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

// Attach next-intl plugin; i18n request config is defined in ./i18n.ts
const withNextIntl = createNextIntlPlugin('./i18n.ts');

const nextConfig: NextConfig = {
  /* other Next.js config options */
  reactCompiler: true,
};

export default withNextIntl(nextConfig);
