import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ExternalLink, Share2 } from "lucide-react";

import { PlaylistTracks } from "@/components/playlist-tracks";
import { PlaylistCard } from "@/components/playlist-card";
import { getPlaylistBySlug, playlists } from "@/data/playlists";

type PlaylistPageProps = {
  params: { slug: string };
};

export default function PlaylistPage({ params }: PlaylistPageProps) {
  const playlist = getPlaylistBySlug(params.slug);

  if (!playlist) {
    notFound();
  }

  const related = playlists.filter((item) => item.slug !== playlist.slug).slice(0, 3);

  return (
    <div className="space-y-10">
      <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-neutral-900/80 px-10 py-12 shadow-2xl shadow-black/40">
        <div className={`absolute inset-0 opacity-80 blur-3xl ${playlist.gradient}`} />
        <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end">
            <div className="overflow-hidden rounded-2xl shadow-2xl shadow-black/40 ring-2 ring-white/30">
              <Image
                src={playlist.coverUrl}
                alt={playlist.title}
                width={260}
                height={260}
                className="h-52 w-52 object-cover md:h-60 md:w-60"
                priority
              />
            </div>
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.4em] text-neutral-200">Melofy Playlist</p>
              <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
                {playlist.title}
              </h1>
              <p className="max-w-2xl text-base text-neutral-100 md:text-lg">{playlist.summary}</p>
              <div className="flex flex-wrap items-center gap-3 text-sm text-neutral-200">
                <span className="rounded-full bg-white/10 px-3 py-1 font-semibold text-white">
                  {playlist.owner}
                </span>
                <span>{playlist.followers}</span>
                <span>•</span>
                <span>{playlist.totalTracks} songs</span>
                <span>•</span>
                <span>{playlist.updatedAt}</span>
              </div>
              <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-wide text-neutral-200">
                {playlist.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-white/10 px-3 py-1">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href={playlist.spotifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 px-5 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
            >
              <ExternalLink className="h-4 w-4" />
              Open in Spotify
            </Link>
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 px-5 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
            >
              <Share2 className="h-4 w-4" />
              Share
            </button>
          </div>
        </div>
      </section>

      <PlaylistTracks playlist={playlist} />

      <section className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-neutral-900/80">
          <iframe
            src={playlist.embedUrl}
            className="h-[420px] w-full"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          />
        </div>
        <div className="space-y-4 rounded-3xl border border-white/10 bg-neutral-900/80 p-6">
          <h2 className="text-xl font-semibold text-white">Playlist notes</h2>
          <ul className="list-disc space-y-3 pl-5 text-sm text-neutral-300">
            <li>Melofy editions trim each playlist into a tight, high-impact set.</li>
            <li>Tap any track above to cue it in the Melofy player instantly.</li>
            <li>
              Use the Spotify embed to continue listening in your personal account with full-length
              tracks.
            </li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <header className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-white md:text-3xl">More like this</h2>
          <Link href="/playlists" className="text-sm font-semibold text-neutral-300 hover:text-white">
            View all Melofy playlists
          </Link>
        </header>
        <div className="grid gap-6 md:grid-cols-3">
          {related.map((item) => (
            <PlaylistCard key={item.id} playlist={item} />
          ))}
        </div>
      </section>
    </div>
  );
}
