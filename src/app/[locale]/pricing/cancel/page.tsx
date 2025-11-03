import Link from "next/link";
import { useTranslations } from "next-intl";

export default function PricingCancelPage() {
  const t = useTranslations('pricing');
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 text-center">
      <h1 className="text-2xl md:text-3xl font-bold">{t('cancel.title', { default: '支付已取消 / Payment canceled' })}</h1>
      <p className="mt-3 text-slate-700">
        {t('cancel.subtitle', { default: '你可以随时重新选择并完成支付。' })}
      </p>
      <div className="mt-6">
        <Link href="/" className="btn-outline inline-block">{t('cancel.backHome', { default: '返回首页' })}</Link>
      </div>
    </div>
  );
}