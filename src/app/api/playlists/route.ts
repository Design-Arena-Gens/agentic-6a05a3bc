import { NextResponse } from "next/server";

import { playlists } from "@/data/playlists";

export function GET() {
  return NextResponse.json({
    count: playlists.length,
    items: playlists,
  });
}
