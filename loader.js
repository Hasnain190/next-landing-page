"use client";

export default function MyLoader({ src, width, quality }) {
  if (src.startsWith("https://images.pexels.com")) return src;

  return `${src}?auto=compress&cs=tinysrgb&w=${width}&q=${quality || 75}`;
}
