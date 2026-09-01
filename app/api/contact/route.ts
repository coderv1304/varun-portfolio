import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const phone = String(body.phone || "").trim();
    const requirements = String(
      body.requirements || ""
    ).trim();

    if (!name || !email || !requirements) {
      return NextResponse.json(
        {
          message:
            "Name, email and requirements are required.",
        },
        { status: 400 }
      );
    }

    /*
      Email delivery can be connected here using Resend,
      SendGrid, Brevo, etc.

      For now, the endpoint validates the request and
      returns success. This keeps the portfolio completely
      dependency-free.

      Before production, connect an email provider so
      recruiter submissions arrive in your inbox.
    */

    console.log("Portfolio contact submission:", {
      name,
      email,
      phone,
      requirements,
    });

    return NextResponse.json({
      success: true,
      message: "Message received successfully.",
    });
  } catch {
    return NextResponse.json(
      {
        message: "Invalid request.",
      },
      { status: 400 }
    );
  }
}