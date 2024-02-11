"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function NavLink({
  link,
}: {
  link: { url: string; title: string };
}) {
  const pathname = usePathname();

  return (
    <Link
      className={`rounded p-1 ${
        pathname === link.url && "bg-black text-white"
      }`}
      href={link.url}
    >
      {link.title}
    </Link>
  );
}
