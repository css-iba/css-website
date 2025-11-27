'use server';

import { supabase } from '../Launch/Supabase/client';
import nodemailer from 'nodemailer';
import { promises as fs } from 'fs';
import path from 'path';

interface RegistrationFormData {
    participantName: string;
    email: string;
    phoneNumber: string;
}

export async function insertRegistration(data: RegistrationFormData) {
  // 1. Supabase insert
  const { error } = await supabase.from('codeclash2').insert(data);
  if (error) return { error };

  // 2. Save to file
  const filePath = path.join(process.cwd(), 'app', 'CodeClash2', 'codeclash2_registrations.txt');
  await fs.appendFile(filePath, `${JSON.stringify(data)}\n`, 'utf8');

  // 3. Send email
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: false,
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

Please keep this information safe, as it may be required for event check-in and communications.

Important Notes:
- Make sure to check your email regularly for updates or instructions related to CodeClash 2.0.
- If you have any questions, feel free to reach out to us at computersciencessociety@khi.iba.edu.pk.
- Stay tuned for any announcements regarding schedules, rules, and team coordination.

We look forward to seeing you at CodeClash 2.0 and wish you the best of luck!

Best regards,
Computer Science Society, IBA Karachi
`,
  });

  return { error: null };
}
