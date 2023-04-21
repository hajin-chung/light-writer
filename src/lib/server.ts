// server side functions
// mainly db queries

import type { Episode, Novel } from "./types"

export const getNovel = async (novelId: string) => {
	const novel: Novel = {
		id: novelId,
		title: "hi",
		authorId: "hi",
		episodes: [],
	}

	return novel;
}

export const getEpisode = async (episodeId: string) => {
	const episode: Omit<Episode, "content"> = {
		id: episodeId,
		authorId: "hi",
		index: 1,
		title: "hi",
	}

	return episode;
}