import Link from "next/link";

type ComingSoonProps = {
  title: string;
  description: string;
  highlight?: string;
};

export function ComingSoon({ title, description, highlight }: ComingSoonProps) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-neutral-900/80 px-10 py-14 shadow-2xl shadow-black/40">
      <div className="absolute inset-0 -translate-y-12 opacity-70 blur-3xl">
        <div className="h-full w-full bg-gradient-to-br from-emerald-500/40 via-cyan-400/30 to-purple-400/20" />
      </div>
      <div className="relative space-y-6">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.45em] text-white">
          {highlight ?? "Coming soon"}
        </span>
        <h1 className="text-4xl font-bold text-white md:text-5xl">{title}</h1>
        <p className="max-w-2xl text-base text-neutral-200 md:text-lg">{description}</p>
        <Link
          href="/"
          className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-emerald-400"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
}
