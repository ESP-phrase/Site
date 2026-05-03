import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "Email service not configured" }, { status: 500 });
  }

  try {
    const { email } = await req.json();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Valid email required" }, { status: 400 });
    }

    const resend = new Resend(apiKey);

    await resend.emails.send({
      from: "TaskDudes <onboarding@resend.dev>",
      to: ["aubreynicholsacc@gmail.com"],
      subject: `[TaskDudes] New Newsletter Signup — ${email}`,
      html: `
        <div style="font-family: sans-serif; max-width: 500px; margin: 0 auto; padding: 24px;">
          <div style="background: #0f2d5e; padding: 20px 24px; border-radius: 12px 12px 0 0;">
            <h2 style="color: white; margin: 0; font-size: 18px;">New Newsletter Signup</h2>
            <p style="color: rgba(255,255,255,0.6); margin: 4px 0 0; font-size: 13px;">TaskDudes Email List</p>
          </div>
          <div style="background: #f0f4ff; padding: 20px 24px; border-radius: 0 0 12px 12px; border: 1px solid #e0e9ff; border-top: none;">
            <p style="margin: 0; font-size: 14px; color: #0a0a0a;">
              <strong>Email:</strong> <a href="mailto:${email}" style="color: #2563eb;">${email}</a>
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Newsletter route error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
