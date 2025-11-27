import { supabase } from '../Launch/Supabase/client';
// import nodemailer from 'nodemailer';
// import { promises as fs } from 'fs';
// import path from 'path';

interface RegistrationFormData {
    participantName: string;
    email: string;
    phoneNumber: string;
}

// export async function insertRegistration(registrationData: RegistrationFormData) {
//     console.log('Attempting to insert registration data:', registrationData);
//     try {
//         // Use an array to insert a single record reliably and request the inserted row back
//         const { data, error } = await supabase
//             .from('codeclash2')
//             .insert([registrationData])
//             .select()
//             .single();

//         if (error) {
//             // log richer information for debugging
//             // console.error('Supabase Insertion Error:', {
//             //     message: error.message,
//             //     details: error.details,
//             //     hint: error.hint,
//             //     code: error.code,
//             // });
//             return { error };
//         }

//         // console.log('Supabase Insertion Success:', data);

//         // --- Save registration to a local text file (append) ---
//         try {
//             const filePath = path.join(process.cwd(), 'app', 'CodeClash2', 'codeclash2_registrations.txt');
//             const line = `${new Date().toISOString()} | ${registrationData.participantName} | ${registrationData.email} | ${registrationData.phoneNumber}\n`;
//             await fs.appendFile(filePath, line, 'utf8');
//         } catch (fsErr) {
//             console.error('Failed to save registration to file:', fsErr);
//             return { error: fsErr };
//         }

//         // --- Send confirmation email via SMTP (nodemailer) ---
//         try {
//             // Configure transporter using environment variables. Set these in your environment:
//             // SMTP_HOST, SMTP_PORT, SMTP_SECURE (true/false), SMTP_USER, SMTP_PASS, FROM_EMAIL
//             const transporter = nodemailer.createTransport({
//                 host: process.env.SMTP_HOST,
//                 port: process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : 587,
//                 secure: process.env.SMTP_SECURE === 'true',
//                 auth: process.env.SMTP_USER
//                     ? { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
//                     : undefined,
//             });

//             const from = process.env.FROM_EMAIL ?? process.env.SMTP_USER ?? 'no-reply@example.com';

//             const mailOptions = {
//                 from,
//                 to: registrationData.email,
//                 subject: 'CodeClash2 Registration Confirmation',
//                 text: `Hello ${registrationData.participantName},\n\nThank you for registering for CodeClash2.\nWe have recorded your phone number as: ${registrationData.phoneNumber}.\n\nIf you have any questions, reply to this email.\n\nRegards,\nIBA Computer Science Society`,
//             };

//             await transporter.sendMail(mailOptions);
//         } catch (mailErr) {
//             console.error('Failed to send confirmation email:', mailErr);
//             return { error: mailErr };
//         }

//         return { error: null };
//     } catch (err) {
//         // Sometimes the SDK throws; capture and log it
//         // console.error('Unexpected error during Supabase insert:', err);
//         return { error: err };
//     }
// }

export async function GetData() {
    try {
        const { data, error } = await supabase
            .from('codeclash2')
            .select('*');

        if (error) {
            // console.error('Supabase Fetch Error:', {
            //     message: error.message,
            //     details: error.details,
            //     hint: error.hint,
            //     code: error.code,
            // });
            return { error };
        }

        // console.log('Supabase Fetch Success:', data);
        return { data, error: null };
    } catch (err) {
        // console.error('Unexpected error during Supabase fetch:', err);
        return { error: err };
    }
}
