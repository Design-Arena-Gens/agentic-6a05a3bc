"use client";

import Link from "next/link";

export function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-2 rounded-md px-2 py-1 text-lg font-semibold tracking-tight text-white transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
    >
      <span className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-emerald-500 via-cyan-500 to-emerald-300 text-base font-bold text-black">
        ♫
      </span>
      Melofy
    </Link>
  );
}
