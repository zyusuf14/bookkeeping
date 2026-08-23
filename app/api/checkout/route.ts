import Stripe from "stripe";
import { NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

const prices = {
  basic: process.env.STRIPE_BASIC_PRICE_ID!,
  standard: process.env.STRIPE_STANDARD_PRICE_ID!,
  premium: process.env.STRIPE_PREMIUM_PRICE_ID!,
};

export async function POST(request: Request) {
  try {
    const {
  plan,
  firstName,
  lastName,
  email,
  businessName,
} = await request.json();

    const priceId = prices[plan as keyof typeof prices];

    if (!priceId) {
      return NextResponse.json(
        { error: "Invalid plan" },
        { status: 400 }
      );
    }

    const session = await stripe.checkout.sessions.create({
  mode: "subscription",

  customer_email: email,

  metadata: {
    firstName,
    lastName,
    businessName,
  },

  line_items: [
    {
      price: priceId,
      quantity: 1,
    },
  ],

  success_url:
    `${request.headers.get("origin")}/success?session_id={CHECKOUT_SESSION_ID}`,

  cancel_url:
    `${request.headers.get("origin")}/checkout?plan=${plan}`,
});

    return NextResponse.json({
      url: session.url,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Unable to create checkout session" },
      { status: 500 }
    );
  }
}