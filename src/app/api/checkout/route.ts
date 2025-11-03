import { NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => ({}));
    const plan = body?.plan as string | undefined; // 'pro'
    const period = (body?.period as 'monthly' | 'yearly' | undefined) ?? 'monthly';
    const locale = (body?.locale as string | undefined) ?? 'en';

    if (!plan || plan !== 'pro') {
      return NextResponse.json({ error: 'Unsupported plan' }, { status: 400 });
    }

    const secretKey = process.env.STRIPE_SECRET_KEY;
    const priceMonthly = process.env.STRIPE_PRICE_PRO_MONTHLY;
    const priceYearly = process.env.STRIPE_PRICE_PRO_YEARLY;

    if (!secretKey || !priceMonthly || !priceYearly) {
      return NextResponse.json(
        {
          error:
            'Stripe environment variables are not set. Please configure STRIPE_SECRET_KEY, STRIPE_PRICE_PRO_MONTHLY, STRIPE_PRICE_PRO_YEARLY.',
        },
        { status: 400 }
      );
    }

    const stripe = new Stripe(secretKey, {
      apiVersion: '2024-09-30.acacia',
    });

    const origin = request.headers.get('origin') || process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
    const successUrl = `${origin}/${locale}/pricing/success?session_id={CHECKOUT_SESSION_ID}`;
    const cancelUrl = `${origin}/${locale}/pricing/cancel`;

    const priceId = period === 'yearly' ? priceYearly : priceMonthly;

    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      success_url: successUrl,
      cancel_url: cancelUrl,
      // Optional: pass metadata for later reconciliation
      metadata: {
        plan,
        period,
        locale,
      },
    });

    return NextResponse.json({ url: session.url }, { status: 200 });
  } catch (err: any) {
    console.error('Checkout error:', err);
    return NextResponse.json({ error: err?.message || 'Unknown error' }, { status: 500 });
  }
}