"use client";

import Image from "next/image";
import { Clock, Heart } from "lucide-react";

import type { Playlist } from "@/data/playlists";
import { usePlayer } from "@/context/player-context";
import { formatDuration } from "@/lib/format";
import { cn } from "@/lib/utils";

type PlaylistTracksProps = {
  playlist: Playlist;
};

export function PlaylistTracks({ playlist }: PlaylistTracksProps) {
  const { currentTrack, playTrack } = usePlayer();

  return (
    <div className="mt-6 overflow-hidden rounded-xl border border-white/5 bg-neutral-900/80">
      <div className="grid grid-cols-[48px_minmax(0,1fr)_minmax(0,260px)_80px] gap-4 px-6 py-3 text-xs font-semibold uppercase tracking-wide text-neutral-400">
        <span>#</span>
        <span>Title</span>
        <span className="hidden lg:block">Album</span>
        <span className="flex items-center gap-2 justify-self-end">
          <Clock className="h-4 w-4" />
          <span className="hidden sm:inline">Length</span>
        </span>
      </div>
      <div className="divide-y divide-white/5">
        {playlist.tracks.map((track, index) => {
          const isActive = currentTrack?.id === track.id;
          return (
            <button
              key={track.id}
              type="button"
              onClick={() => playTrack(track, playlist)}
              className={cn(
                "group grid w-full grid-cols-[48px_minmax(0,1fr)_minmax(0,260px)_80px] items-center gap-4 px-6 py-3 text-left transition hover:bg-white/5",
                isActive && "bg-white/5 text-emerald-200",
              )}
            >
              <span className="text-xs tabular-nums text-neutral-500">{(index + 1).toString()}</span>
              <div className="flex min-w-0 items-center gap-3">
                <div className="h-12 w-12 overflow-hidden rounded-md bg-neutral-800">
                  {track.coverUrl ? (
                    <Image
                      src={track.coverUrl}
                      alt={track.title}
                      width={48}
                      height={48}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="grid h-full w-full place-items-center text-neutral-500">♪</div>
                  )}
                </div>
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium text-white">{track.title}</p>
                  <p className="truncate text-xs text-neutral-400">{track.artists.join(", ")}</p>
                </div>
              </div>
              <p className="hidden min-w-0 truncate text-xs text-neutral-400 lg:block">{track.album}</p>
              <div className="ml-auto flex items-center justify-end gap-3 text-xs text-neutral-400">
                <Heart className="h-4 w-4 opacity-0 transition group-hover:opacity-100" />
                <span className="tabular-nums">{formatDuration(track.durationMs)}</span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
