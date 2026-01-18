import { NextResponse } from "next/server";

import { getPlaylistBySlug } from "@/data/playlists";

type RouteContext = {
  params: Promise<{ slug: string }>;
};

export async function GET(_: Request, context: RouteContext) {
  const { slug } = await context.params;
  const playlist = getPlaylistBySlug(slug);

  if (!playlist) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return NextResponse.json(playlist);
}
