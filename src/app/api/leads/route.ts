import { NextResponse } from "next/server";
import { db } from "@/lib/db";

type LeadPayload = {
  name?: string;
  phone?: string;
  course?: string;
  level?: string;
  message?: string;
  source?: string;
};

function normalizePhone(phone: string): string {
  return phone.replace(/[^\d+]/g, "");
}

export async function POST(request: Request) {
  let body: LeadPayload;
  try {
    body = (await request.json()) as LeadPayload;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request body." },
      { status: 400 },
    );
  }

  const name = (body.name || "").trim();
  const phone = normalizePhone((body.phone || "").trim());

  if (name.length < 2) {
    return NextResponse.json(
      { ok: false, error: "Please enter your name." },
      { status: 422 },
    );
  }
  if (phone.length < 10 || phone.length > 15) {
    return NextResponse.json(
      { ok: false, error: "Please enter a valid phone number." },
      { status: 422 },
    );
  }

  try {
    const lead = await db.lead.create({
      data: {
        name,
        phone,
        course: body.course?.trim() || null,
        level: body.level?.trim() || null,
        message: body.message?.trim() || null,
        source: body.source?.trim() || "website_contact_form",
        status: "new",
      },
    });

    return NextResponse.json({
      ok: true,
      id: lead.id,
      message: "Lead captured. Our team will call you shortly.",
    });
  } catch (err) {
    console.error("[POST /api/leads] Failed to create lead:", err);
    return NextResponse.json(
      { ok: false, error: "Could not save your details. Please try again." },
      { status: 500 },
    );
  }
}

export async function GET() {
  return NextResponse.json({
    ok: true,
    message:
      "Spoken English by Rahi Sir — leads endpoint. POST to this route to capture a lead.",
  });
}
