import React from "react";
import { getSortedPostsData } from "@/lib/posts";

export default function Posts() {
  const posts = getSortedPostsData();
  return (
    <section>
      <h2>Blog</h2>
      <ul>{posts.map((post) => JSON.stringify(post))}</ul>
    </section>
  );
}
