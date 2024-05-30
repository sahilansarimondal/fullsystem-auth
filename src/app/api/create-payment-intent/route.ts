import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  typescript: true,
});

export async function POST(req: NextRequest) {
  const { data } = await req.json();
  const { amount } = data;
  try {
    const paymentIntent =
      await stripe.paymentIntents.create({
        amount: Number(amount) * 100,
        currency: "usd",
        automatic_payment_methods: { enabled: true },
        description: "Test payment",
        shipping: {
          name: "John Doe",
          address: {
            line1: "510 Townsend St",
            postal_code: "98140",
            city: "San Francisco",
            state: "CA",
            country: "US",
          },
        },
      });

    return NextResponse.json(
      { clientSecret: paymentIntent.client_secret },
      {
        status: 200,
      }
    );
  } catch (error: any) {
    console.log({ error: error.message });
    return NextResponse.json(
      { error: error.message },
      { status: 400 }
    );
  }
}
