import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { formData, messages } = await req.json();

  // Format transcript
  const transcript = messages
    .map(
      (m: { role: string; content: string }) =>
        `${m.role === "assistant" ? "BLANK CHART" : formData.name?.toUpperCase() || "USER"}:\n${m.content}`
    )
    .join("\n\n---\n\n");

  const body = `BLANK CHART — CHAT TRANSCRIPT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Submitter: ${formData.name}
Destination: ${formData.destination}
Region: ${formData.country || "Not specified"}
Email: ${formData.email || "Not provided"}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

${transcript}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
End of transcript — ${messages.length} messages
Submitted from blankchart.co`;

  // Send to Formspree
  try {
    await fetch("https://formspree.io/f/xlgwpkqg", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        _subject: `Chat Transcript: ${formData.destination} — ${formData.name}`,
        name: formData.name,
        destination: formData.destination,
        transcript: body,
      }),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Transcript send error:", error);
    return NextResponse.json(
      { error: "Failed to send transcript" },
      { status: 500 }
    );
  }
}
