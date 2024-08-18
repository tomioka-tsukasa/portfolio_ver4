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
  title: string;
  pickup: boolean;
  body: string;
  thumbnail: NewtThumbnail;
  categorys: Array<NewtCategory>
}

export interface NewtCategory {
  _id: string;
  _sys: {
    createdAt: string;
    updatedAt: string;
    customOrder: number;
  },
  name: string;
  slug: string;
}

export interface NewtThumbnail {
  type: string;
  value: string;
}
