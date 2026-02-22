"use client";

import { useState, useRef, useEffect } from "react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

interface IdeaFormData {
  name: string;
  location: string;
  destination: string;
  country: string;
  pitch: string;
  activities: string;
  beenThere: string;
  notes: string;
}

export function IdeaChat({ formData }: { formData: IdeaFormData }) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Send initial greeting on mount
  useEffect(() => {
    const sendInitial = async () => {
      try {
        const res = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            messages: [
              {
                role: "user",
                content: "Hi, I just submitted a destination idea to Blank Chart.",
              },
            ],
            formData,
          }),
        });
        const data = await res.json();
        if (data.message) {
          setMessages([{ role: "assistant", content: data.message }]);
        } else {
          setMessages([
            {
              role: "assistant",
              content: `Hey ${formData.name.split(" ")[0]}! Love the ${formData.destination} idea. I'd love to dig into this with you — what first drew you to this place?`,
            },
          ]);
        }
      } catch {
        setMessages([
          {
            role: "assistant",
            content: `Hey ${formData.name.split(" ")[0]}! Thanks for submitting ${formData.destination}. While our assistant is warming up, Whit will review your idea and reach out if it moves forward. Great pitch.`,
          },
        ]);
      }
      setIsLoading(false);
      inputRef.current?.focus();
    };
    sendInitial();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");

    const newMessages: Message[] = [
      ...messages,
      { role: "user", content: userMessage },
    ];
    setMessages(newMessages);
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [
            {
              role: "user",
              content: "Hi, I just submitted a destination idea to Blank Chart.",
            },
            ...newMessages,
          ],
          formData,
        }),
      });
      const data = await res.json();
      setMessages([
        ...newMessages,
        {
          role: "assistant",
          content:
            data.message ||
            "Great stuff. Whit will review this and follow up if it moves forward.",
        },
      ]);
    } catch {
      setMessages([
        ...newMessages,
        {
          role: "assistant",
          content:
            "Hit a snag on our end — but your idea is submitted. Whit has the details and will review it.",
        },
      ]);
    }
    setIsLoading(false);
    inputRef.current?.focus();
  };

  return (
    <div className="mx-auto max-w-2xl">
      {/* Chat header */}
      <div className="mb-8 border-b border-white/5 pb-6">
        <p className="font-body text-xs font-light text-cream/40">
          You&apos;re chatting with Blank Chart&apos;s idea exploration
          assistant. Whit will review your submission and follow up if it moves
          forward.
        </p>
      </div>

      {/* Messages */}
      <div className="space-y-6 mb-8">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`${msg.role === "assistant" ? "pr-8" : "pl-8"}`}
          >
            {msg.role === "assistant" && (
              <span className="mb-2 block font-body text-[9px] font-light tracking-[2px] uppercase text-copper/60">
                Blank Chart
              </span>
            )}
            {msg.role === "user" && (
              <span className="mb-2 block text-right font-body text-[9px] font-light tracking-[2px] uppercase text-sand/40">
                You
              </span>
            )}
            <div
              className={`font-body text-sm font-light leading-relaxed whitespace-pre-wrap ${
                msg.role === "assistant"
                  ? "text-cream/80"
                  : "text-snow/90 text-right"
              }`}
            >
              {msg.content}
            </div>
          </div>
        ))}

        {isLoading && messages.length > 0 && (
          <div className="pr-8">
            <span className="mb-2 block font-body text-[9px] font-light tracking-[2px] uppercase text-copper/60">
              Blank Chart
            </span>
            <div className="flex gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-copper/40 animate-pulse" />
              <span className="h-1.5 w-1.5 rounded-full bg-copper/40 animate-pulse [animation-delay:0.2s]" />
              <span className="h-1.5 w-1.5 rounded-full bg-copper/40 animate-pulse [animation-delay:0.4s]" />
            </div>
          </div>
        )}

        {isLoading && messages.length === 0 && (
          <div className="pr-8">
            <span className="mb-2 block font-body text-[9px] font-light tracking-[2px] uppercase text-copper/60">
              Blank Chart
            </span>
            <p className="font-body text-sm font-light text-cream/40">
              Exploring your idea...
            </p>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="border-t border-white/5 pt-6">
        <div className="flex gap-4">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            placeholder="Tell us more about this idea..."
            disabled={isLoading}
            className="flex-1 border-b border-white/10 bg-transparent pb-3 font-body text-base font-light text-snow outline-none transition-colors focus:border-copper/50 placeholder:text-cream/20 disabled:opacity-50"
          />
          <button
            onClick={sendMessage}
            disabled={isLoading || !input.trim()}
            className="shrink-0 border border-copper/30 px-6 py-2 font-body text-[10px] font-normal tracking-[2px] uppercase text-copper transition-all hover:border-copper hover:bg-copper/10 disabled:opacity-30 disabled:hover:border-copper/30 disabled:hover:bg-transparent"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
