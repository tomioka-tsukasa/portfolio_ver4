namespace Newt {
  export interface Article {
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
    issue: boolean;
    body: string;
    thumbnail: Emoji;
    categorys: Array<Category>,
  }
  
  export interface Category {
    _id: string;
    _sys: {
      createdAt: string;
      updatedAt: string;
      customOrder: number;
    },
    name: string;
    slug: string;
  }
  
  export interface Emoji {
    type: string;
    value: string;
  }
  
  export interface Thumbnail {
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
  
  export type LabLabel = 'progress' | 'task'
  
  export interface LabSubject {
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
    status: Array<LabLabel>;
    pickup: boolean;
    body: string;
    thumbnail: Thumbnail;
    groups: Array<LabGroup>;
    'dev-note': Array<Note>;
    'ui-note': Array<Note>;
  }
  
  export interface Note {
    title: string;
    body: string;
    'url-type': boolean;
    thumbnail: Emoji;
    slug: string;
  }
  
  export interface LabGroup {
    title: string;
    slug: string;
    pickup: boolean;
    thumbnail: Thumbnail;
    body: string;
  }
}
