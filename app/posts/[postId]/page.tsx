import React from "react";
import { getPostData, getSortedPostsData, getHeadings } from "@/lib/posts";
import { notFound } from "next/navigation";
import Link from "next/link";
import { TableOfContents } from "@/app/components/TableOfContents";

export function generateStaticParams() {
  const posts = getSortedPostsData();

  return posts.map((post) => ({
    postId: post.id,
  }));
}

export function generateMetadata({ params }: { params: { postId: string } }) {
  const posts = getSortedPostsData(); // deduped!
  const { postId } = params;

  const post = posts.find((post) => post.id === postId);

  if (!post) {
    return {
      title: "Post not found.",
    };
  }

  return { title: post.title };
}

export default async function Post({ params }: { params: { postId: string } }) {
  const posts = getSortedPostsData(); // deduped!
  const { postId } = params;

  if (!posts.find((post) => post.id === postId)) {
    return notFound();
  }

  const { title, date, contentHtml } = await getPostData(postId);
  const headings = await getHeadings(postId);
  console.log(headings);

  return (
    <main className="px-6 prose prose-xl prose-slate dark:prose-invert mx-auto">
      <TableOfContents nodes={headings} />
      <h1 className="text-3xl mt-4 mb-0">{title}</h1>
      <p className="mt-0">{date}</p>
      <article>
        <section dangerouslySetInnerHTML={{ __html: contentHtml }} />
        <p>
          <Link href="/">← Back to home</Link>
        </p>
      </article>
    </main>
  );
}
