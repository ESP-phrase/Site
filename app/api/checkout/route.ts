import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { Resend } from "resend";

const priceMap: Record<string, string> = {
  basic: process.env.STRIPE_PRICE_BASIC!,
  priority: process.env.STRIPE_PRICE_PRIORITY!,
  lifetime: process.env.STRIPE_PRICE_EMERGENCY!,
};

export async function POST(req: NextRequest) {
  const stripeKey = process.env.STRIPE_SECRET_KEY;
  if (!stripeKey) {
    return NextResponse.json({ error: "Stripe not configured" }, { status: 500 });
  }

  try {
    const { plan, name, email, storeUrl, description } = await req.json();
    const priceId = priceMap[plan?.toLowerCase()];

    if (!priceId) {
      return NextResponse.json({ error: "Invalid plan" }, { status: 400 });
    }

    // Send notification email with problem details
    const apiKey = process.env.RESEND_API_KEY;
    if (apiKey && name && email) {
      const resend = new Resend(apiKey);
      await resend.emails.send({
        from: "TaskDudes <onboarding@resend.dev>",
        to: ["aubreynicholsacc@gmail.com"],
        replyTo: email,
        subject: `[TaskDudes] New ${plan} Order — ${name}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
            <div style="background: #171717; padding: 24px; border-radius: 12px 12px 0 0;">
              <h1 style="color: white; margin: 0; font-size: 22px;">New Order — ${plan.charAt(0).toUpperCase() + plan.slice(1)} Plan</h1>
              <p style="color: rgba(255,255,255,0.6); margin: 4px 0 0; font-size: 14px;">Customer is being redirected to Stripe checkout</p>
            </div>
            <div style="background: #fff7ed; padding: 24px; border-radius: 0 0 12px 12px; border: 1px solid #fed7aa; border-top: none;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #fed7aa; color: #64748b; font-size: 13px; width: 140px;">Name</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #fed7aa; color: #0a0a0a; font-size: 14px; font-weight: 600;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #fed7aa; color: #64748b; font-size: 13px;">Email</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #fed7aa; color: #0a0a0a; font-size: 14px;"><a href="mailto:${email}" style="color: #f97316;">${email}</a></td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #fed7aa; color: #64748b; font-size: 13px;">Store URL</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #fed7aa; color: #0a0a0a; font-size: 14px;"><a href="${storeUrl}" style="color: #f97316;">${storeUrl}</a></td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; color: #64748b; font-size: 13px; vertical-align: top;">Problem</td>
                  <td style="padding: 10px 0; color: #0a0a0a; font-size: 14px; line-height: 1.6;">${(description || "").replace(/\n/g, "<br>")}</td>
                </tr>
              </table>
              <div style="margin-top: 24px;">
                <a href="mailto:${email}" style="display: inline-block; background: #171717; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 14px;">Reply to ${name}</a>
              </div>
            </div>
          </div>
        `,
      }).catch((err) => console.error("Email error:", err));
    }

    const stripe = new Stripe(stripeKey);
    const baseUrl = process.env.NEXT_PUBLIC_URL || "http://localhost:3000";

    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      line_items: [{ price: priceId, quantity: 1 }],
      customer_email: email || undefined,
      success_url: `${baseUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/#partnership`,
      allow_promotion_codes: true,
      billing_address_collection: "auto",
      metadata: {
        customer_name: name || "",
        store_url: storeUrl || "",
        problem_description: (description || "").slice(0, 500),
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error("Stripe checkout error:", message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
