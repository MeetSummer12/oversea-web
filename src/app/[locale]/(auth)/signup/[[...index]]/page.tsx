"use client";
import {SignUp} from "@clerk/nextjs";
import {useParams} from "next/navigation";
import {enUS} from "@clerk/localizations";
import {useTheme} from "@/components/ThemeProvider";
import {useMemo} from "react";

export default function LocaleSignUpPage() {
  const params = useParams() as {locale?: string};
  const locale = params?.locale ?? "en";
  const { theme } = useTheme();

  const clerkAppearance = useMemo(() => {
    const isDark = theme === "dark";
    return {
      layout: {
        logoImageUrl: '/logo-mark.svg',
        logoLinkUrl: `/${locale}`,
        logoPlacement: 'inside',
        privacyPageUrl: `/${locale}/privacy`,
        termsPageUrl: `/${locale}/terms`,
        helpPageUrl: `/${locale}/faq`,
      },
      variables: {
        colorPrimary: '#4f46e5',
        borderRadius: '0.75rem',
        fontFamily: 'var(--font-geist-sans)',
        colorBackground: isDark ? '#0f172a' : '#ffffff',
        colorText: isDark ? '#e5e7eb' : '#0f172a',
        colorTextSecondary: isDark ? '#94a3b8' : '#475569',
        colorInputBackground: isDark ? '#0b1220' : '#ffffff',
        colorInputText: isDark ? '#e5e7eb' : '#0f172a',
        colorNeutral: isDark ? '#334155' : '#cbd5e1',
      },
      elements: {
        card: 'bg-white/80 backdrop-blur-sm border border-slate-200 shadow-sm',
        headerTitle: 'text-slate-900',
        headerSubtitle: 'text-slate-500',
        socialButtonsIconButton: 'border border-slate-300 hover:bg-slate-50',
        formFieldInput: 'bg-white text-slate-900 border border-slate-300 placeholder:text-slate-400',
        formButtonPrimary: 'bg-indigo-600 hover:bg-indigo-700',
        footer: 'text-slate-500',
        footerActionLink: 'text-indigo-600 hover:text-indigo-700'
      }
    } as const;
  }, [theme, locale]);

  return (
    <div className="mx-auto max-w-lg px-4 py-16">
      <div className="mt-6 rounded-xl border border-slate-200 p-4">
        <SignUp
          path={`/${locale}/signup`}
          routing="path"
          signInUrl={`/${locale}/login`}
          afterSignUpUrl={`/${locale}`}
          localization={enUS}
          appearance={clerkAppearance}
        />
      </div>
    </div>
  );
}