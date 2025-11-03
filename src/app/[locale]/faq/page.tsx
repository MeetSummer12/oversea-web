"use client";
import {useParams} from 'next/navigation';

export default function FAQPage() {
  const params = useParams() as {locale?: string};
  const locale = params?.locale ?? 'en';
  const isZh = locale === 'zh';

  return (
    <div className="space-y-12">
      <div className="section-block section-indigo">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-white text-3xl font-bold">{isZh ? '常见问题' : 'Frequently asked questions'}</h1>
          <p className="text-slate-200 mt-3">{isZh ? '关于试用、计费、隐私与模型能力的常见回答。' : 'Answers about trial, billing, privacy, and model capabilities.'}</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="rounded-xl border border-slate-200/40 bg-white/80 p-5">
            <h2 className="text-slate-900 font-semibold">{isZh ? '如何开始免费试用？' : 'How do I start the free trial?'}</h2>
            <p className="text-slate-700 mt-2">
              {isZh
                ? '在注册页填写邮箱与密码并同意条款，即可激活试用。也可配置 Google 登录后一键开始。'
                : 'Fill in your email and password on the signup page and accept the terms to activate. You can also enable Google sign-in for one-click start.'}
            </p>
          </div>

          <div className="rounded-xl border border-slate-200/40 bg-white/80 p-5">
            <h2 className="text-slate-900 font-semibold">{isZh ? '试用包含哪些能力？' : 'What does the trial include?'}</h2>
            <p className="text-slate-700 mt-2">
              {isZh
                ? '可访问基础模型、创建自定义角色与知识库，并在每日限额内体验完整工作流。具体模型与限额可能随接入与许可而变化。'
                : 'You can access base models, create custom roles and a knowledge-base, and experience full workflows within generous daily limits. Actual models and limits may vary by integrations and licensing.'}
            </p>
          </div>

          <div className="rounded-xl border border-slate-200/40 bg-white/80 p-5">
            <h2 className="text-slate-900 font-semibold">{isZh ? '是否需要信用卡？' : 'Do I need a credit card?'}</h2>
            <p className="text-slate-700 mt-2">
              {isZh ? '不需要。试用期内可随时取消，升级仅在你认为值得时进行。' : 'No. You can cancel anytime during the trial and only upgrade if it makes sense for you.'}
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-xl border border-slate-200/40 bg-white/80 p-5">
            <h2 className="text-slate-900 font-semibold">{isZh ? '我的数据如何处理？' : 'How is my data handled?'}</h2>
            <p className="text-slate-700 mt-2">
              {isZh
                ? '我们遵循隐私政策，仅在提供服务所必需的范围内处理数据；你可导出内容并控制知识库。企业版支持更严格的合规设置。'
                : 'We follow our privacy policy and only process data as necessary to deliver the service. You can export your content and control your knowledge-base. Enterprise options offer stricter compliance controls.'}
            </p>
          </div>

          <div className="rounded-xl border border-slate-200/40 bg-white/80 p-5">
            <h2 className="text-slate-900 font-semibold">{isZh ? '支持哪些模型？' : 'Which models are supported?'}</h2>
            <p className="text-slate-700 mt-2">
              {isZh
                ? '我们与主流模型供应商集成（如 GPT-4o、Claude 4、Gemini 2.5 等），实际可用模型以接入与许可为准。'
                : 'We integrate with leading model providers (e.g., GPT-4o, Claude 4, Gemini 2.5). Available models depend on integrations and licensing.'}
            </p>
          </div>

          <div className="rounded-xl border border-slate-200/40 bg-white/80 p-5">
            <h2 className="text-slate-900 font-semibold">{isZh ? '遇到问题怎么办？' : 'What if I run into issues?'}</h2>
            <p className="text-slate-700 mt-2">
              {isZh
                ? '请通过页面底部的联系方式与我们沟通，或在注册页进入常见问题与帮助链接获取指导。'
                : 'Use the contact link in the footer to reach us, or follow the help links from the signup page for guided troubleshooting.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}