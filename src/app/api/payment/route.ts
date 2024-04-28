import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(req: NextRequest) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
  const data = await req.json();
  const { price, productName } = data;
  console.log(data);

  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        quantity: 1,
        price_data: {
          product_data: {
            name: productName,
          },
          currency: "usd",
          unit_amount: price,
        },
      },
    ],
    mode: "payment",
    success_url:
      process.env.NEXTAUTH_URL + "/payment/success",
    cancel_url:
      process.env.NEXTAUTH_URL + "/payment/cancel",
  });
  return NextResponse.json(session.url);
}
