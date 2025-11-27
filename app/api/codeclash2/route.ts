import { NextResponse } from "next/server";
import { supabase } from "@/app/Launch/Supabase/client";
import nodemailer from "nodemailer";
import { promises as fs } from "fs";
import path from "path";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    // 1. Insert into Supabase
    const { error } = await supabase.from("codeclash2").insert(data);
    if (error) {
      // console.error("Supabase error:", error);
      return NextResponse.json({ error }, { status: 500 });
    }

    // 2. Save to file
    const filePath = path.join(process.cwd(), 'app', 'CodeClash2', 'codeclash2_registrations.txt');
    await fs.appendFile(filePath, `${data.participantName} | ${data.email} | ${data.phoneNumber}\n`, 'utf8');

    // 3. Send email
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: Number(process.env.SMTP_PORT) === 465, // true for 465
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.FROM_EMAIL,
      to: data.email,
      subject: "CodeClash Registration",
      text: `
Hello ${data.participantName},

Thank you for registering for CodeClash 2.0! We are thrilled to have you join us for this exciting event.

Here are your registration details:

Participant Name: ${data.participantName}
Email: ${data.email}
Phone Number: ${data.phoneNumber}

Important Notes:
- Each team may have only 1 member.
- If you have any questions, feel free to reach out to us at computersciencessociety@khi.iba.edu.pk.
- Stay tuned for any announcements regarding the event on our website at https://css.iba.edu.pk/.

We look forward to seeing you at CodeClash 2.0 and wish you the best of luck!

Best regards,
Computer Science Society, IBA Karachi
`,
  });

    return NextResponse.json({ success: true }, { status: 200 });

  } catch (err) {
    console.error("API route error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
