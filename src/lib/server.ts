// server side functions
// mainly db queries

import type { Episode, Novel } from "./types";
import { connect } from "@planetscale/database";

const config = {
	host: import.meta.env.DATABASE_HOST,
	username: import.meta.env.DATABASE_USERNAME,
	password: import.meta.env.DATABASE_PASSWORD,
};

const conn = connect(config);

export const getNovel = async (novelId: string) => {
  const novel: Novel = {
    id: novelId,
    title: "hi",
    authorId: "hi",
    episodes: [],
  };

  return novel;
};

export const getEpisode = async (episodeId: string) => {
  const episode: Omit<Episode, "content"> = {
    id: episodeId,
    authorId: "hi",
    index: 1,
    title: "hi",
  };

  return episode;
};

export const getUserBySession = async (session: string) => {};

export const testDb = async () => {
	const rs = await conn.execute("SELECT * FROM Test");

	return rs;
}