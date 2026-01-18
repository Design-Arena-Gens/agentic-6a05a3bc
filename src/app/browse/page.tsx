const categories = [
  {
    title: "Mood Boosters",
    description: "Sunlit indie pop and upbeat dance cuts.",
    gradient: "from-amber-400 via-pink-500 to-purple-600",
  },
  {
    title: "Focus Flow",
    description: "Lofi, jazztronica, and instrumental hip-hop.",
    gradient: "from-sky-500 via-blue-600 to-indigo-700",
  },
  {
    title: "Late Night",
    description: "Downtempo trails and vapor-lit electronics.",
    gradient: "from-emerald-500 via-amber-500 to-rose-500",
  },
  {
    title: "Fresh Finds",
    description: "Breaking artists discovered by the community.",
    gradient: "from-lime-400 via-emerald-400 to-cyan-400",
  },
  {
    title: "Workout",
    description: "High BPM energy across punk, techno, and trap.",
    gradient: "from-red-500 via-orange-500 to-yellow-500",
  },
  {
    title: "Deep Dive",
    description: "Longform experiments and archival mixes.",
    gradient: "from-gray-300 via-gray-500 to-gray-900",
  },
  {
    title: "Global Pulse",
    description: "Global club heat from Lagos to São Paulo.",
    gradient: "from-orange-500 via-red-500 to-purple-600",
  },
  {
    title: "Acoustic Mornings",
    description: "Gentle folk, stripped-down pop, soft jazz.",
    gradient: "from-yellow-200 via-orange-200 to-pink-200",
  },
];

export default function BrowsePage() {
  return (
    <div className="space-y-8">
      <header className="space-y-4">
        <h1 className="text-4xl font-bold text-white md:text-5xl">Browse all moods</h1>
        <p className="max-w-2xl text-base text-neutral-200 md:text-lg">
          Swipe into collections engineered for how you feel, where you’re headed, or what you need
          to get done.
        </p>
      </header>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {categories.map((category) => (
          <div
            key={category.title}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-neutral-900/80 p-6 transition hover:-translate-y-1 hover:bg-neutral-800"
          >
            <div
              className={`absolute inset-0 opacity-80 blur-3xl bg-gradient-to-br ${category.gradient}`}
            />
            <div className="relative space-y-3">
              <h2 className="text-2xl font-semibold text-white">{category.title}</h2>
              <p className="text-sm text-neutral-200">{category.description}</p>
              <p className="text-xs uppercase tracking-[0.3em] text-neutral-400">
                Curated with love
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
