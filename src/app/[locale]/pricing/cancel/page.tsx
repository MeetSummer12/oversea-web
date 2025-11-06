import Link from "next/link";
import { useTranslations } from "next-intl";

export default function PricingCancelPage() {
  const t = useTranslations('pricing');
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 text-center">
      <h1 className="text-2xl md:text-3xl font-bold">{t('cancel.title', { default: 'Payment canceled' })}</h1>
      <p className="mt-3 text-slate-700">
        {t('cancel.subtitle', { default: 'You can resume checkout anytime.' })}
      </p>
      <div className="mt-6">
        <Link href="/" className="btn-outline inline-block">{t('cancel.backHome', { default: 'Back to home' })}</Link>
      </div>
    </div>
  );
}