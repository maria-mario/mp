import { NextRequest, NextResponse } from 'next/server';

/* ─────────────────────────────────────────────
   Flip this to true once Stripe is configured
   and STRIPE_SECRET_KEY is in .env.local
───────────────────────────────────────────── */
const STRIPE_READY = false;

const VALID_PRICE_IDS = new Set([
  process.env.STRIPE_BOOK_TIER1_PRICE_ID,
  process.env.STRIPE_BOOK_TIER2_PRICE_ID,
  process.env.STRIPE_BOOK_TIER3_PRICE_ID,
  process.env.STRIPE_BOOK_TIER4_PRICE_ID,
]);

export async function POST(req: NextRequest) {
  const origin = req.headers.get('origin') ?? process.env.NEXT_PUBLIC_SITE_URL ?? '';
  const { priceId, coupon } = await req.json() as { priceId: string; coupon?: string };

  /* ── MOCK MODE ───────────────────────────────
     No Stripe keys needed. Just bounces to the
     success page so you can build + test the UI.
  ─────────────────────────────────────────────*/
  if (!STRIPE_READY) {
    return NextResponse.json({
      url: `${origin}/power-tools/book/success?mock=true`,
    });
  }

  /* ── LIVE MODE ──────────────────────────────
     Uncomment the Stripe import at the top and
     set STRIPE_READY = true when ready.
  ─────────────────────────────────────────────*/
  try {
    // Lazy-load Stripe only when actually needed
    const Stripe = (await import('stripe')).default;
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
      apiVersion: '2026-04-22.dahlia',
    });

    if (!priceId || !VALID_PRICE_IDS.has(priceId)) {
      return NextResponse.json({ error: 'Invalid price.' }, { status: 400 });
    }

    const sessionParams: import('stripe').Stripe.Checkout.SessionCreateParams = {
      mode: 'payment',
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${origin}/power-tools/book/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url:  `${origin}/power-tools/book#tiers`,
      allow_promotion_codes: true,
      billing_address_collection: 'required',
      metadata: { product: 'built-this-way-launch', priceId },
    };

    if (coupon) {
      try {
        await stripe.coupons.retrieve(coupon);
        sessionParams.discounts = [{ coupon }];
        delete sessionParams.allow_promotion_codes;
      } catch {
        console.warn(`Coupon "${coupon}" not found — proceeding without discount.`);
      }
    }

    const session = await stripe.checkout.sessions.create(sessionParams);
    return NextResponse.json({ url: session.url });

  } catch (err) {
    console.error('[/api/checkout/book]', err);
    return NextResponse.json({ error: 'Checkout session creation failed.' }, { status: 500 });
  }
}