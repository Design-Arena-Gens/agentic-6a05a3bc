"use client";

import Image from "next/image";
import Link from "next/link";
import { Play } from "lucide-react";

import type { Playlist } from "@/data/playlists";
import { usePlayer } from "@/context/player-context";
import { cn } from "@/lib/utils";

type PlaylistCardProps = {
  playlist: Playlist;
  className?: string;
  priority?: boolean;
};

export function PlaylistCard({ playlist, className, priority }: PlaylistCardProps) {
  const { playTrack } = usePlayer();

  return (
    <Link
      href={`/playlist/${playlist.slug}`}
      className={cn(
        "group relative flex flex-col gap-3 overflow-hidden rounded-xl bg-neutral-900/80 p-5 transition duration-300 hover:-translate-y-1 hover:bg-neutral-800/80 hover:shadow-2xl hover:shadow-black/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400",
        className,
      )}
    >
      <div className="relative overflow-hidden rounded-lg shadow-lg shadow-black/40">
        <Image
          src={playlist.coverUrl}
          alt={playlist.title}
          width={320}
          height={320}
          className="aspect-square w-full object-cover"
          priority={priority}
        />
        <button
          type="button"
          aria-label={`Play ${playlist.title}`}
          onClick={(event) => {
            event.preventDefault();
            if (playlist.tracks.length === 0) return;
            playTrack(playlist.tracks[0], playlist);
          }}
          className="absolute bottom-3 right-3 grid h-12 w-12 place-items-center rounded-full bg-emerald-400 text-black opacity-0 transition duration-300 hover:scale-105 group-hover:opacity-100"
        >
          <Play className="ml-1 h-6 w-6" />
        </button>
      </div>
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-white">{playlist.title}</h3>
        <p className="line-clamp-2 text-sm text-neutral-400">{playlist.description}</p>
      </div>
    </Link>
  );
}
