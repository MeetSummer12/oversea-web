"use client";
import Link from 'next/link';
import {useTranslations} from 'next-intl';
import {SignedIn, SignedOut, UserButton} from '@clerk/nextjs';
import ThemeToggle from '@/components/ThemeToggle';

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
      <SignedOut>
        <Link href={`/${locale}/login`} className="hover:text-slate-700">
          {t('signin')}
        </Link>
      </SignedOut>
      <SignedIn>
        <UserButton afterSignOutUrl={`/${locale}`} appearance={{ elements: { userButtonAvatarBox: 'border border-slate-300' } }} />
      </SignedIn>
      <ThemeToggle />
    </nav>
  );
}