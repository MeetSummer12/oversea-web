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
      <h1 className="text-2xl md:text-3xl font-bold">{t('success.title', { default: '支付成功 / Payment successful' })}</h1>
      <p className="mt-3 text-slate-700">
        {t('success.subtitle', { default: '感谢你的购买。你的订阅正在激活中。' })}
      </p>
      {sessionId && (
        <p className="mt-2 text-xs text-slate-500">Session: {sessionId}</p>
      )}
      <div className="mt-6">
        <Link href="/" className="btn-primary inline-block">{t('success.backHome', { default: '返回首页' })}</Link>
      </div>
    </div>
  );
}