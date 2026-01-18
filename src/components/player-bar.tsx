"use client";

import Image from "next/image";
import { Pause, Play, Repeat, Shuffle, SkipBack, SkipForward, Volume2 } from "lucide-react";
import { useMemo } from "react";

import { usePlayer } from "@/context/player-context";
import { formatDuration } from "@/lib/format";
import { cn } from "@/lib/utils";

export function PlayerBar() {
  const { currentTrack, currentPlaylist, isPlaying, progressMs, togglePlay, playNext, playPrevious, seek } =
    usePlayer();

  const progress = useMemo(() => {
    if (!currentTrack || currentTrack.durationMs === 0) {
      return 0;
    }

    return Math.min(progressMs / currentTrack.durationMs, 1);
  }, [currentTrack, progressMs]);

  return (
    <footer className="sticky bottom-0 w-full border-t border-white/5 bg-neutral-950/95 px-4 py-3 text-sm text-white backdrop-blur">
      <div className="grid grid-cols-[minmax(0,240px)_1fr_minmax(0,200px)] items-center gap-4">
        <div className="flex items-center gap-3 overflow-hidden">
          <div className="h-14 w-14 overflow-hidden rounded-md bg-neutral-800">
            {currentTrack?.coverUrl ? (
              <Image
                src={currentTrack.coverUrl}
                alt={currentTrack.title}
                width={56}
                height={56}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-neutral-800 to-neutral-700 text-lg font-semibold">
                ♫
              </div>
            )}
          </div>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold">
              {currentTrack?.title ?? "Nothing playing"}
            </p>
            <p className="truncate text-xs text-neutral-400">
              {currentTrack ? currentTrack.artists.join(", ") : "Pick a track to start listening"}
            </p>
          </div>
        </div>

        <div className="mx-auto flex w-full max-w-xl flex-col items-center gap-2">
          <div className="flex items-center gap-4 text-neutral-200">
            <button
              type="button"
              aria-label="Shuffle"
              className="rounded-full p-2 text-xs font-semibold uppercase tracking-wide transition hover:bg-neutral-800/80 hover:text-white"
            >
              <Shuffle className="h-4 w-4" />
            </button>
            <button
              type="button"
              aria-label="Previous track"
              onClick={playPrevious}
              className={cn(
                "rounded-full p-2 transition hover:bg-neutral-800/80",
                !currentTrack && "cursor-not-allowed opacity-40",
              )}
              disabled={!currentTrack}
            >
              <SkipBack className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label={isPlaying ? "Pause" : "Play"}
              onClick={togglePlay}
              className={cn(
                "grid h-10 w-10 place-items-center rounded-full bg-white text-black transition hover:scale-105 hover:bg-emerald-400",
                !currentTrack && "cursor-not-allowed opacity-50",
              )}
              disabled={!currentTrack}
            >
              {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="ml-0.5 h-6 w-6" />}
            </button>
            <button
              type="button"
              aria-label="Next track"
              onClick={playNext}
              className={cn(
                "rounded-full p-2 transition hover:bg-neutral-800/80",
                !currentTrack && "cursor-not-allowed opacity-40",
              )}
              disabled={!currentTrack}
            >
              <SkipForward className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Repeat"
              className="rounded-full p-2 text-xs font-semibold uppercase tracking-wide transition hover:bg-neutral-800/80 hover:text-white"
            >
              <Repeat className="h-4 w-4" />
            </button>
          </div>

          <div className="flex w-full items-center gap-3 text-xs text-neutral-400">
            <span className="w-10 text-right tabular-nums">
              {currentTrack ? formatDuration(progressMs) : "0:00"}
            </span>
            <button
              type="button"
              className={cn(
                "group relative h-1 w-full overflow-hidden rounded-full bg-neutral-700 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400",
                !currentTrack && "cursor-not-allowed opacity-50",
              )}
              onClick={(event) => {
                if (!currentTrack) return;
                const rect = event.currentTarget.getBoundingClientRect();
                const clickPosition = event.clientX - rect.left;
                const percentage = clickPosition / rect.width;
                seek(percentage);
              }}
              disabled={!currentTrack}
            >
              <span
                className="absolute inset-y-0 left-0 bg-emerald-400 transition-all"
                style={{ width: `${progress * 100}%` }}
              />
              <span
                className="absolute -top-1 -translate-y-1/2 translate-x-[-50%] rounded-full border border-black/50 bg-white opacity-0 transition group-hover:opacity-100"
                style={{ left: `${progress * 100}%`, width: "12px", height: "12px" }}
              />
            </button>
            <span className="w-10 text-left tabular-nums">
              {currentTrack ? formatDuration(currentTrack.durationMs) : "0:00"}
            </span>
          </div>
        </div>

        <div className="ml-auto hidden items-center gap-3 md:flex">
          <div className="rounded-full bg-neutral-800/90 px-3 py-1 text-xs uppercase tracking-wide text-neutral-300">
            {currentPlaylist ? currentPlaylist.title : "No queue"}
          </div>
          <div className="flex items-center gap-2 text-neutral-300">
            <Volume2 className="h-4 w-4" />
            <div className="relative h-1 w-24 rounded-full bg-neutral-700">
              <span className="absolute inset-y-0 left-0 w-3/4 rounded-full bg-neutral-200" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
