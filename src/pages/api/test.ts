import { testDb } from "@lib/server";
import type { APIRoute } from "astro";

export const get: APIRoute = async () => {
  const rs = await testDb();
  return new Response(JSON.stringify({ rs }));
};
