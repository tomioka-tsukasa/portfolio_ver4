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
  thumbnail: NewtEmoji;
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

export interface NewtEmoji {
  type: string;
  value: string;
}

export interface NewtThumbnail {
  _id: string;
  src: string;
  fileName: string;
  fileType: string;
  fileSize: number;
  width: number;
  height: number;
  title: string;
  altText: string;
  description: string;
  metadata: {};
}

export type NewtLabLabel = 'progress' | 'task'

export interface NewtLabSubject {
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
  status: Array<NewtLabLabel>;
  pickup: boolean;
  body: string;
  thumbnail: NewtThumbnail;
  groups: Array<NewtLabGroup>;
  'dev-note': Array<NewtNote>;
  'ui-note': Array<NewtNote>;
}

export interface NewtNote {
  title: string;
  body: string;
  'url-type': boolean;
  thumbnail: NewtEmoji;
}

export interface NewtLabGroup {
  title: string;
  slug: string;
  pickup: boolean;
  thumbnail: NewtThumbnail;
  body: string;
}
