"use client";
import {useTranslations, useMessages, useLocale} from 'next-intl';
import {useState} from 'react';

export default function PricingPage() {
  const t = useTranslations('pricing');
  const messages = useMessages() as any;
  const tiers = (messages?.pricing?.tiers ?? ["Free", "Pro"]) as string[];
  const [billingPeriod, setBillingPeriod] = useState<'monthly'|'yearly'>('monthly');
  const locale = useLocale();
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      {/* Top colored header section */}
      <div className="section-block section-blue">
        <h1 className="text-2xl md:text-3xl font-bold">{t('title', {default: 'Pricing'})}</h1>
        <p className="mt-2 opacity-90">{t('subtitle', {default: 'Transparent pricing. Start free — no credit card'})}</p>
        <p className="mt-1 opacity-85">{t('tagline', {default: 'Flexible plans focused on frontier models and productivity. Upgrade only when it makes sense'})}</p>
        {/* Billing period switch */}
        <div className="mt-6">
          <div className="flex items-center gap-3">
            <p className="text-sm text-slate-600">{t('billing.label', {default: 'Billing'})}</p>
            <div className="inline-flex rounded-lg border bg-white overflow-hidden shadow-sm">
              <button
                type="button"
                className={`px-3 py-1 text-sm transition-colors duration-200 ${billingPeriod==='monthly'?'bg-slate-900 text-white':'text-slate-700 hover:text-slate-900'}`}
                onClick={() => setBillingPeriod('monthly')}
              >
                {t('billing.monthly', {default: 'Monthly'})}
              </button>
              <button
                type="button"
                className={`px-3 py-1 text-sm transition-colors duration-200 ${billingPeriod==='yearly'?'bg-slate-900 text-white':'text-slate-700 hover:text-slate-900'}`}
                onClick={() => setBillingPeriod('yearly')}
              >
                {t('billing.yearly', {default: 'Yearly'})}
              </button>
            </div>
          </div>
          <p className="mt-2 text-xs text-emerald-700">{t('billing.yearlySave', {default: 'Save with annual billing'})}</p>
        </div>
        {/* Brand icons, visually subtle to avoid conflicts with copy */}
        <div className="mt-6 flex items-center gap-3 opacity-80">
          <img src="/vercel.svg" alt="" aria-hidden="true" className="w-12 h-12" />
          <img src="/next.svg" alt="" aria-hidden="true" className="w-12 h-12" />
        </div>
      </div>

      {/* Plan cards */}
      <div className="mt-10 grid md:grid-cols-2 gap-6">
        {[
          { key: 'free', badgeClass: 'bg-sky-100 text-sky-700', tierLabel: tiers[0] ?? 'Free' },
          { key: 'pro', badgeClass: 'bg-violet-100 text-violet-700', tierLabel: tiers[1] ?? 'Pro' },
        ].map((plan) => {
          const planMsg = messages?.pricing?.[plan.key] ?? {};
          const price = (billingPeriod==='yearly' ? planMsg?.priceYearly : planMsg?.priceMonthly) as string | undefined;
          const features = (planMsg?.features as string[] | undefined) ?? [
            t('feature1', { default: 'Access to base and frontier models (subject to integrations)' }),
            t('feature2', { default: 'Generous daily limits with fair queueing' }),
            t('feature3', { default: 'Standard document size and upload limits' }),
            t('feature4', { default: 'Knowledge-base and custom roles (plan-based limits)' }),
          ];
          const handleCheckout = async () => {
            try {
              const res = await fetch('/api/checkout', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ plan: plan.key, period: billingPeriod, locale }),
              });
              const data = await res.json();
              if (res.ok && data?.url) {
                window.location.href = data.url as string;
              } else {
                alert(data?.error || 'Checkout not configured');
              }
            } catch (e: any) {
              alert(e?.message || 'Unexpected error');
            }
          };

          return (
            <div key={plan.key} className={`card ${plan.key==='pro' ? 'border-2 border-violet-300 shadow-lg relative' : ''}`}>
              {plan.key==='pro' && (
                <div className="absolute -top-2 right-2 rounded px-2 py-0.5 text-xs bg-amber-100 text-amber-700">
                  {t('recommended', {default: 'Recommended'})}
                </div>
              )}
              <div className={`rounded-lg px-3 py-1 text-xs inline-block ${plan.badgeClass}`}>{plan.tierLabel}</div>
              {/* 价格平滑切换动画（月付/年付） */}
              <div className="mt-2 relative overflow-hidden">
                <div className={`text-slate-900 font-semibold text-lg transition-all duration-300 ease-out ${billingPeriod==='monthly' ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'} absolute inset-0`}>{planMsg?.priceMonthly}</div>
                <div className={`text-slate-900 font-semibold text-lg transition-all duration-300 ease-out ${billingPeriod==='yearly' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'} absolute inset-0`}>{planMsg?.priceYearly}</div>
                {/* Hidden placeholder to maintain container height */}
                <div className="invisible text-lg">{planMsg?.priceMonthly || planMsg?.priceYearly}</div>
              </div>
              <ul className="mt-3 list-disc pl-5 text-slate-700 space-y-1">
                {features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
              <button
                className="mt-4 btn-primary w-full"
                onClick={plan.key==='pro' ? handleCheckout : undefined}
              >
                {t('cta', { default: 'Get started' })}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}