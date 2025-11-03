import type {Metadata} from 'next';
import React from 'react';
import Link from 'next/link';
import {getTranslations} from 'next-intl/server';
import {NextIntlClientProvider} from 'next-intl';
import Nav from '@/components/Nav';
import {locales, Locale} from '@/i18n/config';

export const metadata: Metadata = {
  title: 'Axiomate | 智航',
  description: 'All-in-one AI assistant across leading models.',
};

function isValidLocale(locale: string): locale is Locale {
  return (locales as readonly string[]).includes(locale);
}

async function getMessages(locale: Locale) {
  try {
    const messages = (await import(`@/messages/${locale}.json`)).default;
    return messages;
  } catch (e) {
    const messages = (await import('@/messages/zh.json')).default;
    return messages;
  }
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale: rawLocale} = await params;
  const locale = isValidLocale(rawLocale) ? rawLocale : 'zh';
  const messages = await getMessages(locale);
  const ft = await getTranslations({locale, namespace: 'footer'});

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <header className="border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <Link href={`/${locale}`} className="font-semibold text-lg text-indigo-600">
            Axiomate | 智航
          </Link>
          <Nav locale={locale} />
        </div>
      </header>
      <main>{children}</main>
      <footer className="border-t border-slate-200 mt-16">
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-slate-600 flex flex-col gap-2 items-center text-center">
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href={`/${locale}/privacy`}>{ft('privacy')}</Link>
            <Link href={`/${locale}/terms`}>{ft('terms')}</Link>
            <Link href={`/${locale}/cookies`}>{ft('cookies')}</Link>
            <Link href={`/${locale}/contact`}>{ft('contact')}</Link>
          </div>
          <p>{ft('note')}</p>
        </div>
      </footer>
    </NextIntlClientProvider>
  );
}