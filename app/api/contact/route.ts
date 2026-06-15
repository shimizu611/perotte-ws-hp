import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(text: string) {
  return text
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(req: Request) {
  try {
    const { email, message, company } = await req.json();

    // honeypot対策
    if (company) {
      return Response.json({ success: true });
    }

    if (!email || !message) {
      return Response.json(
        { success: false, message: "入力内容が不足しています。" },
        { status: 400 }
      );
    }

    const safeEmail = escapeHtml(email);
    const safeMessage = escapeHtml(message).replaceAll("\n", "<br />");

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: process.env.CONTACT_TO_EMAIL!,
      subject: "Perotte Web Studio お問い合わせ",
      html: `
        <h2>お問い合わせがありました</h2>
        <p>PerottteWebStudioのHPからです</p>

        <p><strong>メールアドレス</strong></p>
        <p>${safeEmail}</p>

        <p><strong>お問い合わせ内容</strong></p>
        <p>${safeMessage}</p>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    return Response.json(
      { success: false, message: "送信に失敗しました。" },
      { status: 500 }
    );
  }
}