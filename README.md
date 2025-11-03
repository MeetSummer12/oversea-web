# oversea-web

一个使用 Next.js 构建的海外网站项目，已完成定价页优化（移除企业版、保留 Free/Pro 两档）、Pro 推荐徽章、月/年切换与价格动画，并集成 Stripe Checkout 支付（支持 Pro 月付 $19.9 / 年付 $199）。

## 技术栈
- Next.js 14（App Router）
- TypeScript
- next-intl（多语言：中文/英文）
- Stripe Checkout（订阅支付）

## 本地开发
```bash
npm install
npm run dev
```
访问 http://localhost:3000 查看站点。

## 环境配置（支付相关）
在项目根目录创建 .env 并配置：
- STRIPE_SECRET_KEY=sk_test_xxx 或 sk_live_xxx
- STRIPE_PRICE_PRO_MONTHLY=price_xxx
- STRIPE_PRICE_PRO_YEARLY=price_xxx
- NEXT_PUBLIC_APP_URL=http://localhost:3000 或你的线上域名

## 部署（Vercel）
在 Vercel 的 Project Settings → Environment Variables 中配置同样的环境变量，然后部署。成功后定价页的 Pro “Get started” 会跳转到 Stripe Checkout。

（推荐）配置 Stripe Webhook（如 `/api/stripe/webhook`）以在支付完成后更新用户订阅状态，配合 NextAuth 实现账户绑定与配额管控。

## 目录结构（节选）
- `src/app/[locale]/pricing/page.tsx`：定价页（Pro 推荐徽章、月/年切换与动画、发起结账）
- `src/app/api/checkout/route.ts`：创建 Stripe Checkout 会话
- `src/app/[locale]/pricing/success/page.tsx`：支付成功页
- `src/app/[locale]/pricing/cancel/page.tsx`：支付取消页
- `src/messages/en.json` / `src/messages/zh.json`：文案与配额说明

更多进度与未完成项请参考 `PROGRESS.md`。
