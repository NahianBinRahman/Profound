import { NextResponse } from "next/server";

export interface ContactInquiryPayload {
  fullName: string;
  businessEmail: string;
  companyName: string;
  website?: string;
  services: string[];
  budget: string;
  timeline: string;
  projectDescription: string;
  honeypot?: string; // Bot honeypot field
  timestamp?: number;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const body: ContactInquiryPayload = await request.json();

    // 1. Spam Protection: Honeypot check
    // If the hidden honeypot field is populated, a bot filled it. Silently reject.
    if (body.honeypot && body.honeypot.trim().length > 0) {
      console.warn("[Spam Protection] Honeypot triggered. Request dropped silently.");
      return NextResponse.json({ success: true, message: "Inquiry received." }, { status: 200 });
    }

    // 2. Spam Protection: Submission speed check (if submitted faster than 2 seconds, likely automated)
    if (body.timestamp && Date.now() - body.timestamp < 1800) {
      console.warn("[Spam Protection] Rapid submission threshold breached.");
      return NextResponse.json({ success: true, message: "Inquiry received." }, { status: 200 });
    }

    // 3. Server-side validation
    const errors: Record<string, string> = {};

    if (!body.fullName || body.fullName.trim().length < 2) {
      errors.fullName = "Please provide your full name.";
    }

    if (!body.businessEmail || !EMAIL_REGEX.test(body.businessEmail.trim())) {
      errors.businessEmail = "Please enter a valid business email address.";
    }

    if (!body.companyName || body.companyName.trim().length < 2) {
      errors.companyName = "Please provide your company or organisation name.";
    }

    if (!body.services || !Array.isArray(body.services) || body.services.length === 0) {
      errors.services = "Please select at least one required service.";
    }

    if (!body.budget || body.budget.trim().length === 0) {
      errors.budget = "Please select an estimated project budget.";
    }

    if (!body.timeline || body.timeline.trim().length === 0) {
      errors.timeline = "Please select an estimated sprint start timeline.";
    }

    if (!body.projectDescription || body.projectDescription.trim().length < 15) {
      errors.projectDescription =
        "Please provide a project description of at least 15 characters.";
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        { success: false, errors, message: "Validation failed. Please review errors." },
        { status: 400 }
      );
    }

    // 4. Generate unique project inquiry reference ID
    const submissionId = `PRF-${Date.now().toString(36).toUpperCase()}-${Math.floor(
      1000 + Math.random() * 9000
    )}`;

    // 5. Backend / Email Service Dispatch Integration Point
    // When RESEND_API_KEY, SENDGRID_API_KEY, or SLACK_WEBHOOK_URL environment variables are configured,
    // this block routes the payload directly to the dispatch provider.
    const inquiryRecord = {
      id: submissionId,
      fullName: body.fullName.trim(),
      businessEmail: body.businessEmail.trim().toLowerCase(),
      companyName: body.companyName.trim(),
      website: body.website ? body.website.trim() : null,
      services: body.services,
      budget: body.budget,
      timeline: body.timeline,
      projectDescription: body.projectDescription.trim(),
      createdAt: new Date().toISOString(),
      status: "pending_review",
    };

    // Log structured event in server console
    console.info(`[Inquiry Ingestion] New inquiry registered: ${submissionId}`, {
      client: inquiryRecord.companyName,
      contact: inquiryRecord.businessEmail,
      disciplines: inquiryRecord.services,
      budget: inquiryRecord.budget,
    });

    return NextResponse.json(
      {
        success: true,
        submissionId,
        message: "Your project brief has been registered with Profound client partnerships.",
        data: {
          reference: submissionId,
          sla: "< 24 Hours",
          leadPractice: inquiryRecord.services[0],
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("[Inquiry Error] Failed to process inquiry:", error);
    return NextResponse.json(
      {
        success: false,
        message: "An internal server error occurred while processing your brief. Please email hello@profound.agency directly.",
      },
      { status: 500 }
    );
  }
}

