import { NextResponse } from "next/server";
import { supabase } from "@/app/Launch/Supabase/client";
import { promises as fs } from "fs";
import path from "path";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    // 1. Insert into Supabase
    const { error } = await supabase.from("codeclash2").insert(data);
    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    // 2. Save to file
    const filePath = path.join(process.cwd(), 'app', 'CodeClash2', 'codeclash2_registrations.txt');
    await fs.appendFile(filePath, `${data.participantName} | ${data.email} | ${data.phoneNumber}\n`, 'utf8');

    // ✅ Return success response
    return NextResponse.json({ message: "Registration successful" }, { status: 200 });

  } catch (err) {
    console.error("Error processing registration:", err);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
