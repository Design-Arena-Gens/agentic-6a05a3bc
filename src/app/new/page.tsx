import Image from "next/image";

const newDrops = [
  {
    title: "Neon Harbor",
    artist: "Novahaze",
    cover:
      "https://images.unsplash.com/photo-1521579971123-1192931a1452?auto=format&fit=crop&w=400&q=80",
    label: "Dreamwave",
  },
  {
    title: "Infinite Coil",
    artist: "Hex Circuit",
    cover:
      "https://images.unsplash.com/photo-1551769280-96360c1cdaa5?auto=format&fit=crop&w=400&q=80",
    label: "Avantronica",
  },
  {
    title: "Velvet Static",
    artist: "Otis Bloom",
    cover:
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=400&q=80",
    label: "Indie soul",
  },
  {
    title: "Chromatic Flux",
    artist: "Rei Suzuya",
    cover:
      "https://images.unsplash.com/photo-1529088148495-3ebc7f570276?auto=format&fit=crop&w=400&q=80",
    label: "Ambient IDM",
  },
  {
    title: "Hypercolor",
    artist: "Mira & The City",
    cover:
      "https://images.unsplash.com/photo-1522124322400-49899b84f62a?auto=format&fit=crop&w=400&q=80",
    label: "Alt pop",
  },
  {
    title: "Night Blooming",
    artist: "Juniper Waves",
    cover:
      "https://images.unsplash.com/photo-1501616165-1cb08e3ceab1?auto=format&fit=crop&w=400&q=80",
    label: "Chillhop",
  },
];

export default function NewReleasesPage() {
  return (
    <div className="space-y-8">
      <header className="space-y-4">
        <h1 className="text-4xl font-bold text-white md:text-5xl">Trending on Melofy</h1>
        <p className="max-w-2xl text-base text-neutral-200 md:text-lg">
          Fresh music drops from the communities we follow every day. Tap a cover to hear a preview
          or add it to your queue.
        </p>
      </header>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {newDrops.map((drop) => (
          <article
            key={drop.title}
            className="group flex flex-col gap-4 overflow-hidden rounded-3xl border border-white/10 bg-neutral-900/80 p-6 transition hover:-translate-y-1 hover:bg-neutral-800"
          >
            <div className="overflow-hidden rounded-2xl">
              <Image
                src={drop.cover}
                alt={drop.title}
                width={420}
                height={420}
                className="aspect-square w-full object-cover transition group-hover:scale-105"
              />
            </div>
            <div className="space-y-2">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                {drop.label}
              </span>
              <h2 className="text-xl font-semibold text-white">{drop.title}</h2>
              <p className="text-sm text-neutral-300">{drop.artist}</p>
            </div>
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
              Chart position · climbing fast
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
