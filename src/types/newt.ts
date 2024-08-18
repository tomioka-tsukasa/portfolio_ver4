export interface NewtArticle {
  _id: string;
  _sys: {
    raw: {
      createdAt: string;
      updatedAt: string;
      firstPublishedAt: string;
      publishedAt: string;
    }
  };
  slug: string;
  title?: string;
  body?: string;
  thumbnail?: {
    type: string;
    value: string;
  };
  categorys: Array<NewtCategory>
}

export interface NewtCategory {
  name: string;
  slug: string;
}
