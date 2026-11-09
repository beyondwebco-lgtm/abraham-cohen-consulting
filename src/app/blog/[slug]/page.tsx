import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Clock, ArrowLeft, CheckCircle2, Sparkles } from "lucide-react";
import { BLOG_POSTS } from "@/data/content";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return { title: "Article Not Found" };
  }

  return {
    title: `${post.title} | Abraham Cohen Consulting Insights`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="pt-32 pb-24 bg-white">
      {/* Breadcrumb */}
      <div className="max-w-4xl mx-auto px-4 sm:px-8 mb-8">
        <nav className="flex items-center gap-2 text-xs text-slate-500">
          <Link href="/" className="hover:text-[#051D67] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link href="/blog" className="hover:text-[#051D67] transition-colors">
            Insights
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="font-semibold text-[#051D67] truncate max-w-xs">{post.title}</span>
        </nav>
      </div>

      {/* Article Header */}
      <header className="max-w-4xl mx-auto px-4 sm:px-8 mb-12 text-left space-y-4">
        <div className="flex items-center gap-3 text-xs">
          <span className="px-3 py-1 rounded-full bg-[#EEF7F6] text-[#1EA083] font-semibold border border-[#1EA083]/20">
            {post.category}
          </span>
          <span className="text-slate-400 flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" /> {post.readTime}
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-[#051D67] leading-[1.18] tracking-tight">
          {post.title}
        </h1>

        <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-800">
          <strong>Editorial Note:</strong> This is a sample thought-leadership article for demo and presentation purposes.
        </div>
      </header>

      {/* Article Body */}
      <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-8 text-slate-700 leading-relaxed text-base sm:text-lg">
        {post.content.map((paragraph, idx) => (
          <p key={idx}>{paragraph}</p>
        ))}

        {/* Key Takeaways Box */}
        {post.keyTakeaways && post.keyTakeaways.length > 0 && (
          <div className="my-10 p-6 sm:p-8 rounded-3xl bg-[#EEF7F6]/60 border border-[#1EA083]/30">
            <h3 className="text-lg font-bold font-heading text-[#051D67] mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#1EA083]" /> Key Executive Takeaways
            </h3>
            <ul className="space-y-3">
              {post.keyTakeaways.map((takeaway, tIdx) => (
                <li key={tIdx} className="flex items-start gap-3 text-sm text-slate-800 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#1EA083] shrink-0 mt-0.5" />
                  <span>{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Back Link */}
        <div className="pt-8 border-t border-slate-200 flex items-center justify-between">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#051D67] hover:text-[#1EA083] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Insights</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
