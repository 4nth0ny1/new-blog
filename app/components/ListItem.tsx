import React from "react";
import Link from "next/link";

type Props = {
  post: BlogPost;
};

export default function ListItem({ post }: Props) {
  const { id, title, date } = post;

  return (
    <li className="mt-4 text-2xl dark:text-white/90">
      <Link
        className="underline hover:text-black/70 dark:hover:text-white"
        href={`/posts/${id}`}
      >
        {title}
      </Link>
      <br />
      <p className="text-sm mt-1">{date}</p>
    </li>
  );
}
