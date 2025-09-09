import { EmailTemplate } from "@/components/email-template";
import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const Email = z.object({
  fullName: z.string().min(2, "Full name is invalid!"),
  email: z.string().email({ message: "Email is invalid!" }),
  message: z.string().min(10, "Message is too short!"),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log("Received body:", body);

    const parsed = Email.safeParse(body);
    if (!parsed.success) {
      console.log("Validation error:", parsed.error);
      return Response.json({ error: parsed.error.format() }, { status: 400 });
    }

    const { fullName, email, message } = parsed.data;

    const { data: resendData, error: resendError } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>", // keep Resend default
      to: ["jatikhurana350@gmail.com"], // 👈 always YOUR email
      subject: `New message from ${fullName}`,
      react: EmailTemplate({
        fullName,
        email,
        message,
      }),
    });

    if (resendError) {
      console.log("Resend error:", resendError);
      return Response.json({ resendError }, { status: 500 });
    }

    console.log("Email sent successfully:", resendData);
    return Response.json({ success: true });
  } catch (error) {
    console.log("Catch error:", error);
    return Response.json({ error }, { status: 500 });
  }
}

export async function GET() {
  return Response.json({ message: "API is working!" });
}
