"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { Bell, ChevronDown, History, Search } from "lucide-react";

const avatarFallback =
  "https://images.unsplash.com/photo-1528279027-90c327684c47?w=160&h=160&auto=format&fit=crop&q=60";

export function TopBar() {
  const [query, setQuery] = useState("");
  const greeting = useMemo(() => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    if (hour < 18) return "Good afternoon";
    return "Good evening";
  }, []);

  return (
    <header className="sticky top-0 z-20 flex items-center justify-between gap-4 border-b border-white/5 bg-neutral-950/80 px-8 py-5 backdrop-blur">
      <div className="flex flex-1 items-center gap-4">
        <div className="hidden items-center gap-2 text-neutral-400 lg:flex">
          <button
            type="button"
            className="rounded-full border border-white/10 p-2 transition hover:border-white/30 hover:text-white"
            aria-label="Back"
          >
            ‹
          </button>
          <button
            type="button"
            className="rounded-full border border-white/10 p-2 transition hover:border-white/30 hover:text-white"
            aria-label="Forward"
          >
            ›
          </button>
        </div>

        <p className="hidden text-lg font-semibold text-white lg:inline">{greeting}</p>

        <form
          className="flex w-full max-w-md items-center gap-3 rounded-full bg-neutral-900 px-4 py-2 text-sm text-neutral-200 ring-1 ring-white/10 transition focus-within:ring-emerald-400/70"
          role="search"
          onSubmit={(event) => {
            event.preventDefault();
            // For now, search is client-side only.
          }}
        >
          <Search className="h-4 w-4 text-neutral-400" />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            type="search"
            placeholder="What do you want to listen to?"
            className="w-full border-none bg-transparent text-sm text-white placeholder:text-neutral-500 focus:outline-none"
          />
          <button
            type="button"
            aria-label="Recent searches"
            className="rounded-full p-1 text-neutral-400 transition hover:bg-neutral-800/80 hover:text-white"
          >
            <History className="h-4 w-4" />
          </button>
        </form>
      </div>

      <div className="flex items-center gap-3 text-sm">
        <button
          type="button"
          className="hidden rounded-full border border-white/10 px-4 py-2 font-semibold text-neutral-200 transition hover:border-white/40 hover:text-white md:inline-flex"
        >
          Upgrade
        </button>
        <button
          type="button"
          aria-label="Notifications"
          className="rounded-full border border-white/10 p-2 text-neutral-200 transition hover:border-white/40 hover:text-white"
        >
          <Bell className="h-4 w-4" />
        </button>
        <div className="flex items-center gap-2 rounded-full bg-neutral-900 px-2 py-1 pr-3 text-sm font-semibold text-white">
          <Image
            src={avatarFallback}
            alt="Melofy user avatar"
            width={28}
            height={28}
            className="h-7 w-7 rounded-full object-cover"
          />
          <span className="hidden sm:inline">Guest</span>
          <ChevronDown className="h-4 w-4 text-neutral-400" />
        </div>
      </div>
    </header>
  );
}
