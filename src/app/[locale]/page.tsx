"use client";
import {useTranslations, useLocale, useMessages} from 'next-intl';
import HeroVisual from '@/components/HeroVisual';
import Link from 'next/link';

export default function HomePage() {
  const t = useTranslations('home');
  const locale = useLocale();
  const m = useMessages() as any;
  const sections = m?.home?.sections || {};
  const featuresList: string[] = sections?.features || [
    '多模型引擎：智能路由或手动切换，兼顾准确性与成本',
    '自定义 AI 角色：场景模板、参数预设与记忆',
    '知识库聊天：连接文档与网页，答案含引用',
    '代码与文档助手：优化、审查与自动生成文档',
    '多平台：Web/桌面/移动端'
  ];
  const advantagesList: string[] = sections?.advantages || [
    '速度与效率：缩短研究与写作周期',
    '隐私与安全：按需企业级选项',
    '易于集成：第三方数据与工作流',
    '体验友好：上手快、适合团队'
  ];

  return (
    <div>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 py-16 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
            {t('heroTitle')}
          </h1>
          <p className="mt-4 text-slate-700 text-base md:text-lg">
            {t('heroSubtitle')}
          </p>
          <p className="mt-2 text-slate-500 text-sm">{t('heroNote')}</p>
          <div className="mt-6 flex gap-3">
            <Link
              href={`/${locale}/signup`}
              className="btn-primary"
            >
              {t('ctaStart')}
            </Link>
            <Link
              href={`/${locale}/features`}
              className="btn-outline"
            >
              {t('ctaFeatures')}
            </Link>
          </div>
        </div>
        <div className="hidden md:block">
          <HeroVisual />
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="text-2xl md:text-3xl font-semibold">
          {t('sections.featuresTitle')}
        </h2>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          {featuresList.map((txt: string, i: number) => (
            <div key={i} className="card">
              <p className="text-slate-700">{txt}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Advantages */}
      <section className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="text-2xl md:text-3xl font-semibold">
          {t('sections.advantagesTitle')}
        </h2>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          {advantagesList.map((txt: string, i: number) => (
            <div key={i} className="card">
              <p className="text-slate-700">{txt}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Use Cases - 大色块区 */}
      <section id="use-cases" className="mx-auto max-w-6xl px-4 py-14">
        <div className="section-block section-slate">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <img src="/window.svg" alt="Use cases" className="w-24 h-24" />
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-white">{useMessages()?.useCases?.title ?? t('sections.featuresTitle')}</h2>
              <p className="mt-1 text-sky-100">{useMessages()?.useCases?.subtitle ?? t('heroSubtitle')}</p>
            </div>
          </div>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {(useMessages()?.useCases?.items as any[] ?? []).slice(0,6).map((uc, idx) => (
              <div key={idx} className="card bg-white/95">
                {typeof uc === 'string' ? (
                  <p className="text-slate-800 font-medium">{uc}</p>
                ) : (
                  <>
                    <p className="text-slate-800 font-medium">{uc.title}</p>
                    {uc.desc && <p className="text-slate-600 mt-1 text-sm">{uc.desc}</p>}
                    {uc.benefit && <p className="text-slate-500 mt-2 text-xs">{uc.benefit}</p>}
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - 大色块区 */}
      <section id="testimonials" className="mx-auto max-w-6xl px-4 py-14">
        <div className="section-block section-indigo">
          <div className="flex items-center gap-6">
            <img src="/file.svg" alt="Testimonials" className="w-24 h-24" />
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-white">{useMessages()?.testimonials?.title ?? t('sections.bottomCtaTitle')}</h2>
              <p className="mt-1 text-violet-100">{t('heroNote')}</p>
            </div>
          </div>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {(useMessages()?.testimonials?.items as any[] ?? []).slice(0,6).map((it, idx) => (
              <div key={idx} className="card bg-white/95">
                <p className="text-slate-800 font-medium">{typeof it === 'string' ? it : it.quote}</p>
                {typeof it !== 'string' && (
                  <>
                    {it.name && <p className="text-slate-600 mt-1 text-sm">{it.name}</p>}
                    {it.title && <p className="text-slate-500 mt-2 text-xs">{it.title}</p>}
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold">
              {t('sections.bottomCtaTitle')}
            </h3>
          </div>
          <div className="flex gap-3">
            <Link href={`/${locale}/signup`} className="btn-primary">
              {t('sections.bottomCtaStart')}
            </Link>
            <Link href={`/${locale}/contact`} className="btn-outline">
              {t('sections.bottomCtaContact')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}