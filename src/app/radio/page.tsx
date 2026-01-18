import { Headphones, Radio, Waves } from "lucide-react";

const stations = [
  {
    title: "Cosmic Beats FM",
    description: "Leftfield electronica, cosmic jazz, and analog synth jams.",
    listeners: "8,432 listening now",
    icon: Radio,
  },
  {
    title: "Club Basement Radio",
    description: "Industrial techno, grime mutations, and rave-ready club edits.",
    listeners: "3,205 tuned in",
    icon: Waves,
  },
  {
    title: "Night Drive 101",
    description: "Synthwave, future R&B, and chrome-lit instrumentals.",
    listeners: "11,918 listening now",
    icon: Headphones,
  },
];

export default function RadioPage() {
  return (
    <div className="space-y-8">
      <header className="space-y-4">
        <h1 className="text-4xl font-bold text-white md:text-5xl">Melofy Live Radio</h1>
        <p className="max-w-2xl text-base text-neutral-200 md:text-lg">
          Drop into real-time broadcasts curated by tastemakers around the world. One click and
          you’re in the crowd.
        </p>
      </header>
      <div className="grid gap-5 md:grid-cols-3">
        {stations.map((station) => {
          const Icon = station.icon;
          return (
            <div
              key={station.title}
              className="relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-neutral-900/80 p-6 transition hover:-translate-y-1 hover:bg-neutral-800"
            >
              <div className="absolute inset-0 opacity-70 blur-3xl bg-gradient-to-br from-emerald-500/30 via-cyan-400/20 to-purple-500/20" />
              <div className="relative space-y-4">
                <Icon className="h-8 w-8 text-white" />
                <h2 className="text-2xl font-semibold text-white">{station.title}</h2>
                <p className="text-sm text-neutral-200">{station.description}</p>
              </div>
              <p className="relative mt-6 text-xs uppercase tracking-[0.3em] text-neutral-400">
                {station.listeners}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
