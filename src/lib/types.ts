export type Novel = {
  id: string;
  title: string;
  authorId: string;
  episodes: Episode[];
};

export type Episode = {
	id: string;
	parentId?: string;
	index: number;
	title: string;
	authorId: string;
	content: string;
}
