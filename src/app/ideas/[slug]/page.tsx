import { notFound } from "next/navigation";
import Link from "next/link";
import { ideas } from "@/lib/ideas";
import { IdeaPageClient } from "./IdeaPageClient";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return ideas.map((idea) => ({ slug: idea.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const idea = ideas.find((i) => i.slug === slug);
  if (!idea) return { title: "Idea Not Found" };
  return {
    title: `${idea.title} — ${idea.destination}`,
    description: idea.pitch,
  };
}

export default async function IdeaPage({ params }: PageProps) {
  const { slug } = await params;
  const idea = ideas.find((i) => i.slug === slug);
  if (!idea) notFound();

  return <IdeaPageClient idea={idea} />;
}
