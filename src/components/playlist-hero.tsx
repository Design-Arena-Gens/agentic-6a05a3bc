"use client";

import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Play, Share2 } from "lucide-react";

import type { Playlist } from "@/data/playlists";
import { usePlayer } from "@/context/player-context";

type PlaylistHeroProps = {
  playlist: Playlist;
};

export function PlaylistHero({ playlist }: PlaylistHeroProps) {
  const { playTrack } = usePlayer();

  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-neutral-900/80 shadow-2xl shadow-black/40">
      <div className="absolute inset-0 opacity-70 blur-3xl">
        <div className={`${playlist.gradient} h-full w-full`} />
      </div>
      <div className="relative flex flex-col gap-8 p-8 lg:flex-row lg:items-end lg:justify-between lg:p-12">
        <div className="flex items-start gap-8">
          <div className="relative inline-flex overflow-hidden rounded-2xl shadow-2xl shadow-black/40 ring-2 ring-white/20">
            <Image
              src={playlist.coverUrl}
              alt={playlist.title}
              width={260}
              height={260}
              className="h-48 w-48 md:h-60 md:w-60 object-cover"
              priority
            />
          </div>
          <div className="max-w-3xl space-y-4">
            <p className="text-xs uppercase tracking-[0.4em] text-neutral-300">Melofy Exclusive</p>
            <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              {playlist.title}
            </h1>
            <p className="text-base text-neutral-100 md:text-lg">{playlist.summary}</p>
            <div className="flex flex-wrap items-center gap-3 text-sm text-neutral-200">
              <span className="rounded-full bg-white/10 px-3 py-1 font-medium text-white">
                {playlist.owner}
              </span>
              <span>{playlist.followers}</span>
              <span>•</span>
              <span>{playlist.totalTracks} songs</span>
              <span>•</span>
              <span>{playlist.updatedAt}</span>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={() => {
              if (playlist.tracks.length === 0) return;
              playTrack(playlist.tracks[0], playlist);
            }}
            className="group flex items-center gap-3 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:scale-105 hover:bg-emerald-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
          >
            <Play className="ml-0.5 h-5 w-5 group-hover:translate-x-1 transition" />
            Play
          </button>
          <Link
            href={playlist.spotifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-white/30 px-5 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
          >
            <ExternalLink className="h-4 w-4" />
            Open in Spotify
          </Link>
          <button
            type="button"
            className="rounded-full border border-white/30 p-3 text-white transition hover:border-white hover:bg-white/10"
            aria-label="Share playlist"
          >
            <Share2 className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
