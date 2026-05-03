import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "Email service not configured" }, { status: 500 });
  }

  const resend = new Resend(apiKey);
  try {
    const body = await req.json();
    const { name, email, storeUrl, issueType, description } = body;

    if (!name || !email || !storeUrl || !issueType || !description) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const { error } = await resend.emails.send({
      from: "TaskDudes <onboarding@resend.dev>",
      to: ["aubreynicholsacc@gmail.com"],
      replyTo: email,
      subject: `[TaskDudes] New Fix Request — ${issueType} from ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
          <div style="background: #0f2d5e; padding: 24px; border-radius: 12px 12px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 22px;">New Fix Request</h1>
            <p style="color: rgba(255,255,255,0.6); margin: 4px 0 0; font-size: 14px;">TaskDudes — Shopify Support</p>
          </div>
          <div style="background: #f0f4ff; padding: 24px; border-radius: 0 0 12px 12px; border: 1px solid #e0e9ff; border-top: none;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e0e9ff; color: #64748b; font-size: 13px; width: 140px;">Name</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e0e9ff; color: #0a0a0a; font-size: 14px; font-weight: 600;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e0e9ff; color: #64748b; font-size: 13px;">Email</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e0e9ff; color: #0a0a0a; font-size: 14px; font-weight: 600;"><a href="mailto:${email}" style="color: #2563eb;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e0e9ff; color: #64748b; font-size: 13px;">Store URL</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e0e9ff; color: #0a0a0a; font-size: 14px; font-weight: 600;"><a href="${storeUrl}" style="color: #2563eb;">${storeUrl}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e0e9ff; color: #64748b; font-size: 13px;">Issue Type</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e0e9ff;">
                  <span style="background: #2563eb; color: white; padding: 3px 10px; border-radius: 20px; font-size: 12px; font-weight: 600;">${issueType}</span>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #64748b; font-size: 13px; vertical-align: top;">Description</td>
                <td style="padding: 10px 0; color: #0a0a0a; font-size: 14px; line-height: 1.6;">${description.replace(/\n/g, "<br>")}</td>
              </tr>
            </table>
            <div style="margin-top: 24px;">
              <a href="mailto:${email}" style="display: inline-block; background: #0f2d5e; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 14px;">Reply to ${name}</a>
            </div>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", JSON.stringify(error));
      return NextResponse.json({ error: `Failed to send email: ${error.message}` }, { status: 500 });
    }

    // Reddit Conversions API — server-side Lead event
    const redditToken = process.env.REDDIT_ACCESS_TOKEN;
    if (redditToken) {
      try {
        await fetch("https://ads-api.reddit.com/api/v3/pixels/a2_iy0yboxiui0k/conversion_events", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${redditToken}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            data: {
              events: [
                {
                  event_at: Date.now(),
                  action_source: "website",
                  click_id: req.headers.get("x-reddit-click-id") ?? undefined,
                  user: {
                    email: email,
                  },
                  type: {
                    tracking_type: "Lead",
                  },
                },
              ],
            },
          }),
        });
      } catch (rdtErr) {
        // Non-fatal — pixel on client already fired
        console.error("Reddit CAPI error:", rdtErr);
      }
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Submit route error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
