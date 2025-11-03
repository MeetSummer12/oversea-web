"use client";
import {useTranslations, useLocale, useMessages} from 'next-intl';
import {signIn} from 'next-auth/react';
import Link from 'next/link';
import {useState} from 'react';

export default function SignInPage() {
  const t = useTranslations('auth.signin');
  const locale = useLocale();
  const m = useMessages() as any;
  const brand = locale === 'zh' ? m?.brand?.nameCn : m?.brand?.nameEn;
  const [email, setEmail] = useState('');

  const emailEnabled = process.env.NEXT_PUBLIC_EMAIL_SIGNIN === 'true';

  return (
    <div className="mx-auto max-w-lg px-4 py-16">
      <h1 className="text-3xl font-bold tracking-tight">{t('title', { brand })}</h1>
      <p className="mt-2 text-slate-400">{t('subtitle')}</p>

      {/* Google 登录 */}
      <button
        className="mt-8 w-full btn-primary flex items-center justify-center gap-2"
        onClick={() => signIn('google', { callbackUrl: `/${locale}` })}
      >
        <span className="text-xl">G</span>
        <span>{t('google')}</span>
      </button>

      {/* 备用登录方式（邮箱） */}
      <div className="mt-6">
        <label htmlFor="email" className="block text-sm font-medium text-slate-500">{t('emailLabel')}</label>
        <input
          id="email"
          type="email"
          placeholder={t('emailPlaceholder')}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-2 w-full rounded-md border border-slate-300 bg-black text-white px-3 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
        />
        <button
          className="mt-4 w-full btn-outline"
          disabled={!emailEnabled}
          onClick={() => {
            if (!emailEnabled) {
              alert(t('emailDisabled'));
              return;
            }
            // 若启用 Email Provider（需配置 SMTP），可以启用如下：
            signIn('email', { email, callbackUrl: `/${locale}` });
          }}
        >
          {t('continue')}
        </button>
      </div>

      <p className="mt-6 text-center text-sm text-slate-400">
        {t('noAccount')} <Link href={`/${locale}/signup`} className="underline hover:text-slate-200">{t('signup')}</Link>
      </p>
    </div>
  );
}