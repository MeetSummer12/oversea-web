"use client";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function PricingSuccessPage() {
  const t = useTranslations('pricing');
  const params = useSearchParams();
  const sessionId = params.get('session_id');

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 text-center">
      <h1 className="text-2xl md:text-3xl font-bold">{t('success.title', { default: 'Payment successful' })}</h1>
      <p className="mt-3 text-slate-700">
        {t('success.subtitle', { default: 'Thank you for your purchase. Your subscription is being activated.' })}
      </p>
      {sessionId && (
        <p className="mt-2 text-xs text-slate-500">Session: {sessionId}</p>
      )}
      <div className="mt-6">
        <Link href="/" className="btn-primary inline-block">{t('success.backHome', { default: 'Back to home' })}</Link>
      </div>
    </div>
  );
}