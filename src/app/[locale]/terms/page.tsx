"use client";
import {useParams} from 'next/navigation';

export default function TermsPage() {
  const params = useParams() as {locale?: string};
  const locale = params?.locale ?? 'en';
  const isZh = locale === 'zh';

  return (
    <div className="space-y-12">
      <div className="section-block section-indigo">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-white text-3xl font-bold">{isZh ? '服务条款' : 'Terms of Service'}</h1>
          <p className="text-slate-200 mt-3">{isZh ? '请在使用本产品前仔细阅读并同意以下条款。' : 'Please read and accept the following terms before using the product.'}</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto space-y-8">
        <section className="rounded-xl border border-slate-200/40 bg-white/80 p-5">
          <h2 className="font-semibold text-slate-900">{isZh ? '1. 接受条款' : '1. Acceptance of Terms'}</h2>
          <p className="text-slate-700 mt-2">
            {isZh
              ? '注册或使用本服务即表示你同意本条款及相关政策（包括隐私政策）。如果你不同意，请立即停止使用。'
              : 'By registering or using the service, you agree to these Terms and related policies (including our Privacy Policy). If you do not agree, please discontinue use.'}
          </p>
        </section>

        <section className="rounded-xl border border-slate-200/40 bg-white/80 p-5">
          <h2 className="font-semibold text-slate-900">{isZh ? '2. 服务内容' : '2. Services'}</h2>
          <p className="text-slate-700 mt-2">
            {isZh
              ? '我们提供多模型接入、角色与知识库等 AI 能力；具体功能可能随版本与集成变化。'
              : 'We provide AI capabilities such as multi-model access, roles, and knowledge-base. Specific features may change by version and integrations.'}
          </p>
        </section>

        <section className="rounded-xl border border-slate-200/40 bg-white/80 p-5">
          <h2 className="font-semibold text-slate-900">{isZh ? '3. 账户与安全' : '3. Accounts and Security'}</h2>
          <ul className="text-slate-700 mt-2 list-disc pl-5 space-y-2">
            <li>{isZh ? '你应对账户及凭据保密，并对账户下的所有活动负责。' : 'You are responsible for maintaining the confidentiality of your account and credentials, and for all activities under your account.'}</li>
            <li>{isZh ? '如发现安全问题或被他人使用，请立即通知我们。' : 'Notify us immediately of any security issues or unauthorized use.'}</li>
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200/40 bg-white/80 p-5">
          <h2 className="font-semibold text-slate-900">{isZh ? '4. 使用规范' : '4. Acceptable Use'}</h2>
          <ul className="text-slate-700 mt-2 list-disc pl-5 space-y-2">
            <li>{isZh ? '不得用于违法、侵权或有害活动。' : 'Do not use the service for illegal, infringing, or harmful activities.'}</li>
            <li>{isZh ? '不得尝试破坏、绕过安全或未经授权访问。' : 'Do not attempt to disrupt, bypass security, or access without authorization.'}</li>
            <li>{isZh ? '遵守第三方模型与数据源的许可与使用限制。' : 'Respect licenses and usage limits of third-party models and data sources.'}</li>
          </ul>
        </section>

        <section className="rounded-xl border border-slate-200/40 bg-white/80 p-5">
          <h2 className="font-semibold text-slate-900">{isZh ? '5. 费用与订阅' : '5. Fees and Subscriptions'}</h2>
          <p className="text-slate-700 mt-2">
            {isZh
              ? '免费试用无需信用卡；付费方案与计费周期以页面展示与实际合同为准。我们可能在合理情况下调整价格。'
              : 'No credit card is required for the free trial; paid plans and billing cycles follow what is shown on the pricing page and any applicable agreement. Prices may be adjusted with reasonable notice.'}
          </p>
        </section>

        <section className="rounded-xl border border-slate-200/40 bg-white/80 p-5">
          <h2 className="font-semibold text-slate-900">{isZh ? '6. 知识产权' : '6. Intellectual Property'}</h2>
          <p className="text-slate-700 mt-2">
            {isZh
              ? '产品及其组件的相关权利由我们或授权方享有。你保留对自身输入与输出内容的合法权利。'
              : 'The product and its components are owned by us or our licensors. You retain applicable rights to your inputs and outputs.'}
          </p>
        </section>

        <section className="rounded-xl border border-slate-200/40 bg-white/80 p-5">
          <h2 className="font-semibold text-slate-900">{isZh ? '7. 数据与隐私' : '7. Data and Privacy'}</h2>
          <p className="text-slate-700 mt-2">
            {isZh
              ? '我们按隐私政策处理你的数据，仅在提供服务所需范围内使用。企业版可选择更严格的合规策略。'
              : 'We process your data according to our Privacy Policy and only as necessary to provide the service. Enterprise offerings may include stricter compliance options.'}
          </p>
        </section>

        <section className="rounded-xl border border-slate-200/40 bg-white/80 p-5">
          <h2 className="font-semibold text-slate-900">{isZh ? '8. 免责声明' : '8. Disclaimers'}</h2>
          <p className="text-slate-700 mt-2">
            {isZh
              ? 'AI 输出可能不准确或不完整，请自行判断并承担使用风险。本服务按“现状”提供。'
              : 'AI outputs may be inaccurate or incomplete; you are responsible for evaluation and use. The service is provided “as is”.'}
          </p>
        </section>

        <section className="rounded-xl border border-slate-200/40 bg-white/80 p-5">
          <h2 className="font-semibold text-slate-900">{isZh ? '9. 责任限制' : '9. Limitation of Liability'}</h2>
          <p className="text-slate-700 mt-2">
            {isZh
              ? '在法律允许范围内，我们不对间接损害、利润损失或数据丢失承担责任。'
              : 'To the extent permitted by law, we are not liable for indirect damages, loss of profits, or data loss.'}
          </p>
        </section>

        <section className="rounded-xl border border-slate-200/40 bg-white/80 p-5">
          <h2 className="font-semibold text-slate-900">{isZh ? '10. 终止' : '10. Termination'}</h2>
          <p className="text-slate-700 mt-2">
            {isZh
              ? '如你违反条款或存在重大风险，我们可暂停或终止服务。你也可随时取消订阅。'
              : 'We may suspend or terminate the service if you violate the Terms or pose significant risks. You may cancel your subscription at any time.'}
          </p>
        </section>

        <section className="rounded-xl border border-slate-200/40 bg-white/80 p-5">
          <h2 className="font-semibold text-slate-900">{isZh ? '11. 适用法律' : '11. Governing Law'}</h2>
          <p className="text-slate-700 mt-2">
            {isZh
              ? '条款的解释与适用以你所在司法辖区的法律为准，争议按约定方式解决。'
              : 'These Terms are governed by the laws applicable in your jurisdiction; disputes will be resolved as agreed between the parties.'}
          </p>
        </section>

        <section className="rounded-xl border border-slate-200/40 bg-white/80 p-5">
          <h2 className="font-semibold text-slate-900">{isZh ? '12. 联系方式' : '12. Contact'}</h2>
          <p className="text-slate-700 mt-2">
            {isZh ? '如有疑问，请通过页面底部的联系方式与我们取得联系。' : 'For questions, please reach out via the contact link in the footer.'}
          </p>
        </section>
      </div>
    </div>
  );
}