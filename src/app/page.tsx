import Image from "next/image";
import Link from "next/link";
import { Flame, Headphones, Music3, Radio, Sparkles } from "lucide-react";

import { PlaylistHero } from "@/components/playlist-hero";
import { PlaylistCard } from "@/components/playlist-card";
import { playlists } from "@/data/playlists";

const heroPlaylist = playlists[0];
const featurePlaylists = playlists.slice(1);

const dailyMixes = [
  {
    title: "Daily Mix 1",
    description: "Whistles, indie hooks, and sunshine pop",
    href: `/playlist/${playlists[0].slug}`,
    image: playlists[0].coverUrl,
    gradient: playlists[0].gradient,
  },
  {
    title: "Daily Mix 2",
    description: "Avant rap cuts and jazz-laced beats",
    href: `/playlist/${playlists[1].slug}`,
    image: playlists[1].coverUrl,
    gradient: playlists[1].gradient,
  },
  {
    title: "Daily Mix 3",
    description: "Internet alt, hyperpop surges, club haze",
    href: `/playlist/${playlists[2].slug}`,
    image: playlists[2].coverUrl,
    gradient: playlists[2].gradient,
  },
  {
    title: "Daily Mix 4",
    description: "Hardcore riffs, trash-pop, new wave revival",
    href: `/playlist/${playlists[3].slug}`,
    image: playlists[3].coverUrl,
    gradient: playlists[3].gradient,
  },
  {
    title: "Daily Mix 5",
    description: "Lofi dust, downtempo soul, hushed beats",
    href: `/playlist/${playlists[4].slug}`,
    image: playlists[4].coverUrl,
    gradient: playlists[4].gradient,
  },
];

const newReleases = [
  {
    title: "Neon Harbor",
    artist: "Novahaze",
    cover:
      "https://images.unsplash.com/photo-1521579971123-1192931a1452?auto=format&fit=crop&w=400&q=80",
    tag: "Out now",
    tone: "Dreamwave",
  },
  {
    title: "Infinite Coil",
    artist: "Hex Circuit",
    cover:
      "https://images.unsplash.com/photo-1551769280-96360c1cdaa5?auto=format&fit=crop&w=400&q=80",
    tag: "Single",
    tone: "Avantronica",
  },
  {
    title: "Velvet Static",
    artist: "Otis Bloom",
    cover:
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=400&q=80",
    tag: "EP",
    tone: "Indie soul",
  },
  {
    title: "Chromatic Flux",
    artist: "Rei Suzuya",
    cover:
      "https://images.unsplash.com/photo-1529088148495-3ebc7f570276?auto=format&fit=crop&w=400&q=80",
    tag: "Album",
    tone: "Ambient IDM",
  },
  {
    title: "Hypercolor",
    artist: "Mira & The City",
    cover:
      "https://images.unsplash.com/photo-1522124322400-49899b84f62a?auto=format&fit=crop&w=400&q=80",
    tag: "Out now",
    tone: "Alt pop",
  },
  {
    title: "Night Blooming",
    artist: "Juniper Waves",
    cover:
      "https://images.unsplash.com/photo-1501616165-1cb08e3ceab1?auto=format&fit=crop&w=400&q=80",
    tag: "EP",
    tone: "Chillhop",
  },
];

const browseSections = [
  {
    title: "Mood Boosters",
    description: "Upbeat energy for busy mornings and soft sunsets.",
    gradient: "from-amber-400 via-pink-500 to-purple-600",
  },
  {
    title: "Focus Flow",
    description: "Instrumental beats that keep you locked in.",
    gradient: "from-sky-500 via-blue-600 to-indigo-700",
  },
  {
    title: "Late Night",
    description: "Noir jazz, downtempo, and neon-lit ambience.",
    gradient: "from-emerald-500 via-amber-500 to-rose-500",
  },
  {
    title: "Fresh Finds",
    description: "Emerging voices from the fringes of the web.",
    gradient: "from-lime-400 via-emerald-400 to-cyan-400",
  },
  {
    title: "Workout",
    description: "Punk tempos, big drops, and unstoppable drums.",
    gradient: "from-red-500 via-orange-500 to-yellow-500",
  },
  {
    title: "Deep Dive",
    description: "Longform mixes curated by sound archivists.",
    gradient: "from-gray-300 via-gray-500 to-gray-900",
  },
];

const liveStations = [
  {
    title: "Cosmic Beats FM",
    listeners: "8,432 listening now",
    icon: Sparkles,
    accent: "from-fuchsia-500 via-purple-500 to-cyan-500",
  },
  {
    title: "Club Basement Radio",
    listeners: "3,205 tuned in",
    icon: Flame,
    accent: "from-red-500 via-orange-500 to-yellow-400",
  },
  {
    title: "Night Drive 101",
    listeners: "11,918 listening now",
    icon: Headphones,
    accent: "from-slate-500 via-blue-500 to-sky-400",
  },
];

export default function Home() {
  return (
    <div className="space-y-12">
      <PlaylistHero playlist={heroPlaylist} />

      <section className="space-y-6">
        <header className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
            Your Daily Mixes
          </h2>
          <Link href="/mixes" className="text-sm font-semibold text-neutral-300 hover:text-white">
            See all
          </Link>
        </header>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {dailyMixes.map((mix) => (
            <Link
              key={mix.title}
              href={mix.href}
              className="group relative overflow-hidden rounded-2xl border border-white/5 bg-neutral-900/90 p-5 transition duration-300 hover:-translate-y-1 hover:bg-neutral-800"
            >
              <div className={`absolute inset-0 opacity-70 blur-2xl ${mix.gradient}`} />
              <div className="relative flex flex-col gap-4">
                <div className="overflow-hidden rounded-xl shadow-lg shadow-black/40">
                  <Image
                    src={mix.image}
                    alt={mix.title}
                    width={220}
                    height={220}
                    className="aspect-square w-full object-cover"
                  />
                </div>
                <div className="space-y-2">
                  <p className="text-base font-semibold text-white">{mix.title}</p>
                  <p className="text-sm text-neutral-300">{mix.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <header className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
            Featured Playlists
          </h2>
          <Link
            href="/playlists"
            className="inline-flex items-center gap-1 text-sm font-semibold text-neutral-300 transition hover:text-white"
          >
            View more
          </Link>
        </header>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {featurePlaylists.map((playlist) => (
            <PlaylistCard key={playlist.id} playlist={playlist} />
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <header className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
              Trending Now
            </h2>
            <p className="text-sm text-neutral-400">
              Six brand-new releases curators can’t stop replaying.
            </p>
          </div>
          <Link href="/new" className="text-sm font-semibold text-neutral-300 hover:text-white">
            View chart
          </Link>
        </header>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {newReleases.map((release) => (
            <article
              key={release.title}
              className="group flex flex-col gap-3 overflow-hidden rounded-2xl border border-white/5 bg-neutral-900/90 p-4 transition hover:-translate-y-1 hover:bg-neutral-800"
            >
              <div className="overflow-hidden rounded-xl bg-neutral-800">
                <Image
                  src={release.cover}
                  alt={release.title}
                  width={220}
                  height={220}
                  className="aspect-square w-full object-cover transition group-hover:scale-105"
                />
              </div>
              <header className="space-y-1">
                <p className="text-xs uppercase tracking-wide text-neutral-400">{release.tag}</p>
                <h3 className="text-base font-semibold text-white">{release.title}</h3>
                <p className="text-sm text-neutral-300">{release.artist}</p>
              </header>
              <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-neutral-200">
                <Music3 className="h-3.5 w-3.5" />
                {release.tone}
              </span>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <header className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
              Browse by Vibe
            </h2>
            <p className="text-sm text-neutral-400">
              Pick a mood, and Melofy will queue the perfect blend.
            </p>
          </div>
          <Link href="/browse" className="text-sm font-semibold text-neutral-300 hover:text-white">
            Explore all
          </Link>
        </header>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {browseSections.map((section) => (
            <Link
              key={section.title}
              href="/browse"
              className="group relative overflow-hidden rounded-3xl border border-white/5 bg-neutral-900/90 p-6 transition hover:-translate-y-1 hover:bg-neutral-800"
            >
              <div className={`absolute inset-0 opacity-80 blur-3xl bg-gradient-to-br ${section.gradient}`} />
              <div className="relative space-y-3">
                <h3 className="text-2xl font-semibold text-white">{section.title}</h3>
                <p className="text-sm text-neutral-200">{section.description}</p>
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white">
                  Dive in <Flame className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <header className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
            Live Stations
          </h2>
          <Link href="/radio" className="text-sm font-semibold text-neutral-300 hover:text-white">
            Browse radio
          </Link>
        </header>
        <div className="grid gap-4 md:grid-cols-3">
          {liveStations.map((station) => {
            const Icon = station.icon;
            return (
              <Link
                key={station.title}
                href="/radio"
                className="group relative overflow-hidden rounded-3xl border border-white/5 bg-neutral-900/90 p-6 transition hover:-translate-y-1 hover:bg-neutral-800"
              >
                <div className={`absolute inset-0 opacity-70 blur-2xl bg-gradient-to-br ${station.accent}`} />
                <div className="relative flex h-full flex-col justify-between gap-6">
                  <Icon className="h-8 w-8 text-white" />
                  <div className="space-y-2">
                    <p className="text-lg font-semibold text-white">{station.title}</p>
                    <p className="text-sm text-neutral-200">{station.listeners}</p>
                  </div>
                  <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                    <Radio className="h-4 w-4" />
                    Live
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
