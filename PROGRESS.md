# 项目进度记录（Pricing 与支付相关）

更新时间：2025-11-03

## 概览
本项目已完成定价页的文案与结构优化、推荐徽章与年度计费切换、价格切换动画，以及 Stripe Checkout 的基础接入（支持 Pro 方案的月付与年付）。以下为已完成与未完成项的清单，便于后续在本地或 Vercel 上持续迭代。

## 已完成（Done）
- 定价页移除企业版（Enterprise/企业版）卡片，仅保留 Free 与 Pro 两档。
- 更新专业版（Pro/专业版）文案与价格：
  - 月付 $19.9；年付 $199（约 $16.6/月），支持前端月/年切换显示。
  - 设置合理额度说明，并通过 i18n 在中英文中分别展示。
- 为 Pro 卡片添加“推荐（Recommended）”徽章，并增强视觉样式。
- 新增计费周期切换（Monthly/Yearly）与“年度付款更优惠”文案提示。
- 切换价格时的平滑动画（淡入淡出 + 轻微位移），避免跳变造成的突兀感。
- 优化 div / span / img 使用不一致问题：
  - 将部分说明从 span 改为更语义化的 p。
  - 调整“年度更优惠”文案到独立行，层级更清晰。
  - 品牌图标（装饰性）缩小并降低不透明度，添加 aria-hidden 提升无障碍。
- Stripe Checkout 接入：
  - 新增后端接口 `/api/checkout`，根据选择的 Pro 月付/年付创建 Stripe Checkout 会话，并跳转到支付页面。
  - 新增成功与取消页面：`/[locale]/pricing/success` 与 `/[locale]/pricing/cancel`，含多语言文案。
- i18n 文案更新：`src/messages/zh.json` 与 `src/messages/en.json` 同步支持定价、推荐徽章、计费周期切换与支付结果页面。
- 预览验证：
  - 中英文定价页已通过预览检查了推荐徽章、月/年切换及动画效果。
  - 支付按钮已绑定到 `/api/checkout`，在环境变量未配置时会提示错误（符合预期，避免前端崩溃）。

## 未完成（Todo）
- 集成 NextAuth（Google OAuth）并与订阅状态绑定：
  - 实现 `/api/auth/[...nextauth]/route.ts`，配置 Google OAuth（需要在 .env 与 Google Console 中设置回调域名）。
- Stripe Webhook（强烈建议）：
  - 新增 `/api/stripe/webhook` 以处理 `checkout.session.completed`、`customer.subscription.*`、`invoice.payment_*` 等事件。
  - 在 Vercel 环境变量中配置 `STRIPE_WEBHOOK_SECRET`，将订阅状态落库，用于站内配额与权限控制。
- 后端配额与权限管控：
  - 根据订阅状态（Free/Pro）限制每日对话次数、文件上传次数等，与前端文案保持一致。
- 成功页的详细信息展示（可选）：
  - 根据 `session_id` 查询 Stripe 会话或订阅详情，展示下一账期、取消或管理订阅入口。
- 页脚新增 FAQ 链接（可选）：
  - 若希望全站可见，在 `layout` 或公共组件中添加入口并编写 FAQ 页面。
- Google 登录按钮的品牌图标与样式优化（可选）。

## 部署与配置注意事项（Vercel）
- 在 Stripe Dashboard 创建两个价格（Price）：
  - `Pro Monthly`：$19.9/月
  - `Pro Yearly`：$199/年
- 在 Vercel 项目设置中配置环境变量：
  - `STRIPE_SECRET_KEY=sk_live_xxx`（或测试环境 `sk_test_xxx`）
  - `STRIPE_PRICE_PRO_MONTHLY=price_xxx`
  - `STRIPE_PRICE_PRO_YEARLY=price_xxx`
  - `NEXT_PUBLIC_APP_URL=https://你的线上域名`
- 运行时注意：`/api/checkout` 与未来的 `/api/stripe/webhook` 需要 Node.js runtime，勿设为 Edge。
- 测试与生产：
  - 预览环境使用 Test Key 与测试卡号联调；生产环境切换为 Live Key 与真实价格。

## 相关文件清单
- 定价页（含推荐徽章、计费周期切换与动画）
  - `src/app/[locale]/pricing/page.tsx`
- 多语言文案
  - `src/messages/zh.json`
  - `src/messages/en.json`
- 支付流程
  - 结账接口：`src/app/api/checkout/route.ts`
  - 成功页：`src/app/[locale]/pricing/success/page.tsx`
  - 取消页：`src/app/[locale]/pricing/cancel/page.tsx`

## 下一步建议
- 先在 Vercel 配置 Stripe 的 Key 与 Price ID，完成基础支付闭环。
- 立即补充 Webhook 与 NextAuth，将订阅与用户账号打通，启用 Pro 配额与功能。
- 在成功页增加订阅管理入口（如指向 Stripe Customer Portal），提升用户体验。