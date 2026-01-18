import Link from "next/link";

import { PlaylistCard } from "@/components/playlist-card";
import { playlists } from "@/data/playlists";

export default function PlaylistsPage() {
  return (
    <div className="space-y-8">
      <header className="space-y-4">
        <h1 className="text-4xl font-bold text-white md:text-5xl">The Melofy collection</h1>
        <p className="max-w-2xl text-base text-neutral-200 md:text-lg">
          Stream the same playlists highlighted on our home page. Tap any cover to start listening
          instantly or open the playlist detail for track-by-track discovery.
        </p>
        <Link
          href="/browse"
          className="inline-flex w-fit items-center gap-2 rounded-full border border-white/30 px-4 py-2 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
        >
          Browse moods
        </Link>
      </header>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {playlists.map((playlist, index) => (
          <PlaylistCard key={playlist.id} playlist={playlist} priority={index === 0} />
        ))}
      </div>
    </div>
  );
}
