"use client";
import {useParams} from 'next/navigation';

export default function PrivacyPage() {
  const params = useParams() as {locale?: string};
  const locale = params?.locale ?? 'en';
  const isZh = locale === 'zh';

  return (
    <div className="space-y-12">
      <div className="section-block section-indigo">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-white text-3xl font-bold">{isZh ? '隐私政策' : 'Privacy Policy'}</h1>
          <p className="text-slate-200 mt-3">{isZh ? '我们如何收集、使用与保护你的数据。' : 'How we collect, use, and protect your data.'}</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto space-y-8">
        <section className="rounded-xl border border-slate-200/40 bg-white/80 p-5">
          <h2 className="font-semibold text-slate-900">{isZh ? '1. 概述' : '1. Overview'}</h2>
          <p className="text-slate-700 mt-2">
            {isZh
              ? '本政策说明我们如何在提供服务的过程中处理你的个人数据，仅在必要范围内使用，并尽可能降低风险。'
              : 'This Policy explains how we process your personal data to deliver the service, using data only as necessary and minimizing risks.'}
          </p>
        </section>

        <section className="rounded-xl border border-slate-200/40 bg-white/80 p-5">
          <h2 className="font-semibold text-slate-900">{isZh ? '2. 我们收集的数据' : '2. Data We Collect'}</h2>
          <ul className="text-slate-700 mt-2 list-disc pl-5 space-y-2">
            <li>{isZh ? '账户信息：邮箱、登录时间与基础配置。' : 'Account details: email, login times, and basic settings.'}</li>
            <li>{isZh ? '使用信息：功能使用记录、错误日志与性能指标。' : 'Usage information: feature usage records, error logs, performance metrics.'}</li>
            <li>{isZh ? '内容数据：你在角色或知识库中上传的文档与对话内容（由你控制）。' : 'Content data: documents and conversations you store in roles or knowledge-base (controlled by you).'}
            </li>
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200/40 bg-white/80 p-5">
          <h2 className="font-semibold text-slate-900">{isZh ? '3. 我们如何使用数据' : '3. How We Use Data'}</h2>
          <ul className="text-slate-700 mt-2 list-disc pl-5 space-y-2">
            <li>{isZh ? '提供与维护服务（验证、计费、支持）。' : 'Provide and maintain the service (authentication, billing, support).'}
            </li>
            <li>{isZh ? '改进产品体验（统计与匿名分析）。' : 'Improve the product experience (statistics and anonymized analytics).'}
            </li>
            <li>{isZh ? '遵守法律法规与合规要求。' : 'Comply with legal and regulatory requirements.'}</li>
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200/40 bg-white/80 p-5">
          <h2 className="font-semibold text-slate-900">{isZh ? '4. 法律基础' : '4. Legal Bases'}</h2>
          <p className="text-slate-700 mt-2">
            {isZh
              ? '我们基于履约需要、合法权益与你的同意（如适用）处理个人数据。'
              : 'We process personal data based on contractual necessity, legitimate interests, and your consent where applicable.'}
          </p>
        </section>

        <section className="rounded-xl border border-slate-200/40 bg-white/80 p-5">
          <h2 className="font-semibold text-slate-900">{isZh ? '5. 数据保留' : '5. Data Retention'}</h2>
          <p className="text-slate-700 mt-2">
            {isZh
              ? '我们仅在提供服务所必需的时间内保留数据；你可自行删除知识库与账户。'
              : 'We retain data only as long as necessary to provide the service; you may delete your knowledge-base and account at any time.'}
          </p>
        </section>

        <section className="rounded-xl border border-slate-200/40 bg-white/80 p-5">
          <h2 className="font-semibold text-slate-900">{isZh ? '6. 共享与第三方' : '6. Sharing and Third Parties'}</h2>
          <p className="text-slate-700 mt-2">
            {isZh
              ? '在必要时我们会与受信任的服务商共享数据（例如云托管与身份认证），并要求其遵守合同与法律。'
              : 'Where necessary, we share data with trusted providers (e.g., cloud hosting and identity) under contractual and legal safeguards.'}
          </p>
        </section>

        <section className="rounded-xl border border-slate-200/40 bg-white/80 p-5">
          <h2 className="font-semibold text-slate-900">{isZh ? '7. 跨境传输' : '7. International Transfers'}</h2>
          <p className="text-slate-700 mt-2">
            {isZh
              ? '如涉及跨境传输，我们会采取适当的保护措施（如标准合同条款）。'
              : 'For cross-border transfers, we implement appropriate safeguards (e.g., standard contractual clauses).'}
          </p>
        </section>

        <section className="rounded-xl border border-slate-200/40 bg-white/80 p-5">
          <h2 className="font-semibold text-slate-900">{isZh ? '8. 安全' : '8. Security'}</h2>
          <p className="text-slate-700 mt-2">
            {isZh
              ? '我们采用行业通用的技术与组织措施保护数据安全；同时提醒你妥善保管账户凭据。'
              : 'We use industry-standard technical and organizational measures to protect data; you should also safeguard your account credentials.'}
          </p>
        </section>

        <section className="rounded-xl border border-slate-200/40 bg-white/80 p-5">
          <h2 className="font-semibold text-slate-900">{isZh ? '9. 你的权利' : '9. Your Rights'}</h2>
          <ul className="text-slate-700 mt-2 list-disc pl-5 space-y-2">
            <li>{isZh ? '访问、更正或删除你的个人数据。' : 'Access, correct, or delete your personal data.'}</li>
            <li>{isZh ? '撤回同意（如适用）并限制处理。' : 'Withdraw consent (where applicable) and restrict processing.'}</li>
            <li>{isZh ? '提出投诉或与我们联系以获得帮助。' : 'File a complaint or contact us for assistance.'}</li>
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200/40 bg-white/80 p-5">
          <h2 className="font-semibold text-slate-900">{isZh ? '10. Cookie' : '10. Cookies'}</h2>
          <p className="text-slate-700 mt-2">
            {isZh
              ? '我们使用必要与分析类 Cookie 改善体验；你可以在浏览器或系统设置中进行管理。'
              : 'We use necessary and analytics cookies to improve the experience; you can manage them in your browser or system settings.'}
          </p>
        </section>

        <section className="rounded-xl border border-slate-200/40 bg-white/80 p-5">
          <h2 className="font-semibold text-slate-900">{isZh ? '11. 儿童' : '11. Children'}</h2>
          <p className="text-slate-700 mt-2">
            {isZh
              ? '本服务不面向未成年人，若发现未成年人使用，我们将采取合理措施与监护人沟通并删除相关数据。'
              : 'The service is not directed at minors. If we learn of usage by minors, we will take reasonable steps to notify guardians and delete relevant data.'}
          </p>
        </section>

        <section className="rounded-xl border border-slate-200/40 bg-white/80 p-5">
          <h2 className="font-semibold text-slate-900">{isZh ? '12. 变更' : '12. Changes'}</h2>
          <p className="text-slate-700 mt-2">
            {isZh
              ? '我们可能更新本政策；重大变更会通过产品内提示或邮件通知。'
              : 'We may update this Policy from time to time; significant changes will be communicated via in-product notices or email.'}
          </p>
        </section>

        <section className="rounded-xl border border-slate-200/40 bg-white/80 p-5">
          <h2 className="font-semibold text-slate-900">{isZh ? '13. 联系方式' : '13. Contact'}</h2>
          <p className="text-slate-700 mt-2">
            {isZh ? '如有隐私相关问题，请通过页面底部的联系方式与我们取得联系。' : 'For privacy-related inquiries, use the contact link in the footer to reach us.'}
          </p>
        </section>
      </div>
    </div>
  );
}