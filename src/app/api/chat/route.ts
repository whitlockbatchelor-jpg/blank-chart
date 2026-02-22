import { NextRequest, NextResponse } from "next/server";

const SYSTEM_PROMPT = `You are the Blank Chart idea exploration assistant — a project by Keel Ridge. Your role is to have a curious, knowledgeable conversation with someone who just submitted a destination idea, helping them flesh it out before Whit Batchelor reviews it.

BRAND VOICE:
- Curious, enthusiastic, knowledgeable — like a well-traveled friend who gets genuinely excited about expedition ideas
- Not salesy — you're exploring the idea WITH them, not selling anything
- Ask sharp follow-up questions that show you understand remote adventure logistics
- Be conversational, not formal. Short paragraphs.

WHAT YOU KNOW:
- Keel Ridge designs bespoke adventures — backcountry skiing, sailing, mountaineering, trekking, kayaking, mountain biking, and multi-sport expeditions
- Every Keel Ridge trip is built from scratch with local guides and community partnerships
- Blank Chart is how new destinations get discovered — the best community ideas become real Keel Ridge trips
- You understand expedition logistics: access points, seasons, permits, local guide networks, technical difficulty, gear requirements

CONVERSATION GUIDELINES:
- Reference their specific submission details naturally — destination, pitch, activities
- Ask smart follow-up questions: best season, access logistics, local guide potential, technical difficulty, what makes this place different from similar destinations
- Share genuine knowledge if you know the region — but never make up facts. If unsure, say "that's something Whit would need to research"
- Help them refine the pitch — what details would make this idea more compelling?
- Keep responses concise — 2-3 short paragraphs max per message
- After 3-5 exchanges, naturally wrap up: summarize what you've discussed, tell them Whit will review the idea and reach out if it moves forward
- Be honest — not every idea will become a trip, but every good idea helps shape where Keel Ridge goes next`;

export async function POST(req: NextRequest) {
  const { messages, formData } = await req.json();

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Anthropic API key not configured" },
      { status: 500 }
    );
  }

  // Build context from form submission
  const formContext = formData
    ? `The user just submitted an idea to Blank Chart with the following details:
- Name: ${formData.name}
- Based in: ${formData.location || "Not specified"}
- Destination: ${formData.destination}
- Country/Region: ${formData.country || "Not specified"}
- Pitch: ${formData.pitch}
- Activities: ${formData.activities || "Not specified"}
- Been there: ${formData.beenThere || "Not specified"}
- Additional notes: ${formData.notes || "None"}

Greet them by first name. Reference their specific destination idea with genuine enthusiasm. Ask a sharp follow-up question to start exploring the idea deeper.`
    : "";

  const systemPrompt = formContext
    ? `${SYSTEM_PROMPT}\n\n${formContext}`
    : SYSTEM_PROMPT;

  try {
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-5-20250929",
        max_tokens: 1024,
        system: systemPrompt,
        messages: messages.map((m: { role: string; content: string }) => ({
          role: m.role,
          content: m.content,
        })),
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error("Anthropic API error:", error);
      return NextResponse.json(
        { error: "Failed to get response" },
        { status: 500 }
      );
    }

    const data = await response.json();
    const assistantMessage =
      data.content?.[0]?.text ||
      "I'd love to explore this idea further. Could you tell me more?";

    return NextResponse.json({ message: assistantMessage });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
