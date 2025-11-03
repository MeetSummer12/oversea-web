"use client";
import {useState} from 'react';
import {useMessages} from 'next-intl';
import {useParams} from 'next/navigation';
import Link from 'next/link';

export default function SignupPage() {
  const params = useParams() as {locale?: string};
  const locale = params?.locale ?? 'en';
  const isZh = locale === 'zh';
  const m = useMessages() as any;
  const home = m?.home || {};
  const features = m?.features || {};

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agree, setAgree] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const googleEnabled = process.env.NEXT_PUBLIC_GOOGLE_AUTH_ENABLED === 'true';

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    const emailOk = /.+@.+\..+/.test(email);
    const pwdOk = password.length >= 6;
    if (!emailOk) return setError(isZh ? '请输入有效的邮箱地址' : 'Please enter a valid email');
    if (!pwdOk) return setError(isZh ? '密码至少 6 位' : 'Password must be at least 6 characters');
    if (!agree) return setError(isZh ? '请同意服务条款' : 'Please agree to the Terms');
    try {
      // 模拟注册完成（可改为实际 API）
      localStorage.setItem('trialUser', JSON.stringify({email, createdAt: Date.now()}));
      setSubmitted(true);
    } catch (e) {
      setError(isZh ? '发生意外错误，请稍后再试' : 'Unexpected error, please try again');
    }
  };

  return (
    <div className="space-y-12">
      {/* 标题区块：低饱和度科技风 */}
      <div className="section-block section-indigo">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-white text-3xl font-bold">{home?.sections?.bottomCtaStart ?? home?.ctaStart ?? (isZh ? '开始免费试用' : 'Start for free')}</h1>
          <p className="text-slate-200 mt-3">{home?.heroNote ?? (isZh ? '免费层级，无需信用卡。' : 'Free tier, no credit card required.')}</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        {/* 注册表单 */}
        <div className="rounded-2xl border border-slate-200/40 bg-white/80 backdrop-blur-sm p-6 shadow-sm">
          {!submitted ? (
            <form onSubmit={onSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">{isZh ? '邮箱' : 'Email'}</label>
                <input
                  type="email"
                  className="w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-300"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">{isZh ? '密码' : 'Password'}</label>
                <input
                  type="password"
                  className="w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-300"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••"
                  required
                  minLength={6}
                />
                <p className="text-xs text-slate-500 mt-1">{isZh ? '至少 6 位' : 'Minimum 6 characters'}</p>
              </div>
              <label className="flex items-center gap-2 text-sm text-slate-700">
                <input type="checkbox" className="rounded border-slate-300" checked={agree} onChange={(e) => setAgree(e.target.checked)} />
                <span>
                  {isZh ? '我同意' : 'I agree to the'} <Link href="../terms" className="underline">{isZh ? '服务条款' : 'Terms'}</Link> {isZh ? '与' : 'and'} <Link href="../privacy" className="underline">{isZh ? '隐私政策' : 'Privacy'}</Link>
                </span>
              </label>
              {error && <p className="text-red-600 text-sm">{error}</p>}
              <button type="submit" className="btn-primary w-full">{home?.ctaStart ?? (isZh ? '开始免费试用' : 'Start for free')}</button>
              <p className="text-xs text-slate-500 mt-2">{isZh ? '无需信用卡。' : 'No credit card required.'}</p>
              <div className="mt-4">
                {googleEnabled ? (
                  <button
                    type="button"
                    className="w-full border border-slate-300 rounded-md px-3 py-2 hover:bg-slate-50"
                    onClick={() => { window.location.href = '/api/auth/signin/google'; }}
                  >
                    {isZh ? '使用 Google 登录' : 'Continue with Google'}
                  </button>
                ) : (
                  <button
                    type="button"
                    className="w-full border border-slate-300 rounded-md px-3 py-2 opacity-60 cursor-not-allowed"
                    disabled
                  >
                    {isZh ? 'Google 登录（未配置）' : 'Google login (not configured)'}
                  </button>
                )}
                <p className="text-xs text-slate-500 mt-1">
                  {isZh ? '开启方式：在 .env.local 中配置 Google OAuth 与 NextAuth 参数，详见 README。' : 'To enable: configure Google OAuth and NextAuth in .env.local (see README).'}
                </p>
                <p className="text-xs text-slate-500 mt-2">
                  {isZh ? (
                    <>遇到问题？前往 <Link className="underline" href="../faq">常见问题</Link> 获取帮助。</>
                  ) : (
                    <>Need help? Visit the <Link className="underline" href="../faq">FAQ</Link>.</>
                  )}
                </p>
              </div>
            </form>
          ) : (
            <div className="text-center py-6">
              <h2 className="text-2xl font-semibold text-slate-800">{isZh ? '欢迎加入！' : 'Welcome!'}</h2>
              <p className="text-slate-600 mt-2">{isZh ? '试用已激活。你可以浏览功能并创建你的首个角色或知识库。' : 'Your trial is ready. You can now explore features and create your first role or knowledge-base.'}</p>
              <div className="mt-6 flex justify-center gap-3">
                <Link href="../features" className="btn-secondary">{isZh ? '查看功能' : 'Explore features'}</Link>
                <Link href=".." className="btn-primary">{isZh ? '返回首页' : 'Back to Home'}</Link>
              </div>
            </div>
          )}
        </div>

        {/* 试用权益与说明 */}
        <div>
          <div className="section-block section-slate">
            <div className="max-w-xl">
              <h2 className="text-white text-xl font-semibold">{features?.free?.title ?? 'Free tier'}</h2>
              <ul className="mt-4 space-y-3">
                {(features?.free?.items ?? [
                  'Free to start, no credit card',
                  'Base models with daily limits',
                  'Standard document size limits'
                ]).map((s: string, i: number) => (
                  <li key={i} className="rounded-lg bg-white/8 border border-white/15 px-4 py-3 text-white/95">{s}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-6 text-sm text-slate-600">
            <p>{features?.description ?? 'Bring multi-model, roles, and knowledge-base into a unified workspace.'}</p>
          </div>
        </div>
      </div>
    </div>
  );
}