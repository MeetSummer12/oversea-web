"use client";
import Link from 'next/link';
import {useTranslations} from 'next-intl';

export default function Nav({locale}: {locale: string}) {
  const t = useTranslations('nav');
  return (
    <nav className="flex items-center gap-4">
      <Link href={`/${locale}`} className="hover:text-slate-700">
        {t('home')}
      </Link>
      <Link href={`/${locale}/features`} className="hover:text-slate-700">
        {t('features')}
      </Link>
      <Link href={`/${locale}/pricing`} className="hover:text-slate-700">
        {t('pricing')}
      </Link>
      <Link href={`/${locale}/signin`} className="hover:text-slate-700">
        {t('signin')}
      </Link>
      {/* 语言下拉切换 */}
      <div className="ml-2">
        <label className="sr-only" htmlFor="lang-select">{t('language')}</label>
        <select
          id="lang-select"
          className="border border-slate-300 rounded-md px-2 py-1 text-sm bg-white hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
          value={locale}
          onChange={(e) => {
            const next = e.target.value;
            window.location.href = `/${next}`;
          }}
        >
          <option value="zh">{t('zh')}</option>
          <option value="en">{t('en')}</option>
        </select>
      </div>
    </nav>
  );
}