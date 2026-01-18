"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Clock,
  Disc3,
  Home,
  ListMusic,
  Radio,
  Search,
  Sparkles,
  SquarePlus,
} from "lucide-react";

import { Logo } from "@/components/logo";
import { cn } from "@/lib/utils";
import { playlists } from "@/data/playlists";

const mainNav = [
  { href: "/", label: "Home", icon: Home },
  { href: "/search", label: "Search", icon: Search },
  { href: "/library", label: "Your Library", icon: ListMusic },
];

const secondaryNav = [
  { href: "/create", label: "Create Playlist", icon: SquarePlus },
  { href: "/liked", label: "Liked Songs", icon: Sparkles },
  { href: "/queue", label: "Your Episodes", icon: Disc3 },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex w-64 shrink-0 flex-col gap-4 p-2 text-sm">
      <section className="rounded-xl bg-neutral-900/80 p-4 shadow-lg shadow-black/40 ring-1 ring-white/5">
        <Logo />

        <nav className="mt-6 space-y-1">
          {mainNav.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition",
                  isActive
                    ? "bg-white text-black shadow-inner"
                    : "text-neutral-300 hover:bg-neutral-800/80 hover:text-white",
                )}
              >
                <Icon className="h-5 w-5" strokeWidth={isActive ? 2.5 : 2} />
                {item.label}
              </Link>
            );
          })}
        </nav>
      </section>

      <section className="flex flex-1 flex-col overflow-hidden rounded-xl bg-neutral-900/80 p-4 shadow-lg shadow-black/40 ring-1 ring-white/5">
        <header className="flex items-center justify-between text-xs font-semibold uppercase tracking-wide text-neutral-400">
          <span>Your Playlists</span>
          <Radio className="h-4 w-4 text-neutral-500" />
        </header>

        <div className="mt-4 space-y-1">
          {secondaryNav.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-xs font-medium uppercase tracking-wide transition",
                  isActive
                    ? "bg-neutral-800/80 text-white"
                    : "text-neutral-400 hover:bg-neutral-800/80 hover:text-white",
                )}
              >
                <Icon className="h-4 w-4" strokeWidth={isActive ? 2.5 : 2} />
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="mt-4 flex items-center gap-3 rounded-lg bg-gradient-to-r from-neutral-800/80 to-neutral-900/80 px-3 py-2 text-xs text-neutral-400">
          <Clock className="h-4 w-4" />
          <span>Recently added</span>
        </div>

        <div className="mt-4 flex-1 space-y-3 overflow-y-auto pr-1">
          {playlists.map((playlist) => (
            <Link
              key={playlist.id}
              href={`/playlist/${playlist.slug}`}
              className="group flex items-center gap-3 rounded-lg px-3 py-2 transition hover:bg-neutral-800/80"
            >
              <div className="h-12 w-12 overflow-hidden rounded-md bg-neutral-800">
                <div className={cn("h-full w-full", playlist.gradient)} />
              </div>
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-white">{playlist.title}</p>
                <p className="truncate text-xs text-neutral-400">
                  {playlist.owner}
                  {" · "}
                  {playlist.tags.join(" • ")}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </aside>
  );
}
