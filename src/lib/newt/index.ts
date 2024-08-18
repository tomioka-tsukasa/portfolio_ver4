import 'server-only'

import { createClient } from 'newt-client-js'
import { NewtArticle, NewtCategory } from '../../types/newt'

const client = createClient({
  spaceUid: process.env.NEWT_SPACE_UID + '',
  token: process.env.NEWT_CDN_API_TOKEN + '',
  apiType: 'cdn',
})

export const getArticles = async () => {
  const { items } = await client.getContents<NewtArticle>({
    appUid: process.env.NEWT_APP_UID_TECH_BLOG + '',
    modelUid: process.env.NEWT_APP_UID_TECH_BLOG_ARTICLE + '',
    query: {
      select: ['_id', '_sys', 'slug', 'title', 'pickup', 'body', 'thumbnail', 'categorys'],
    },
  })
  return items
}

export const getCategorys = async () => {
  const { items } = await client.getContents<NewtCategory>({
    appUid: process.env.NEWT_APP_UID_TECH_BLOG + '',
    modelUid: process.env.NEWT_APP_UID_TECH_BLOG_CATEGORY + '', 
    query: {
      select: ['_id', '_sys', 'name', 'slug']
    }
  })
  return items
}

export const getArticleBySlug = async (slug: string) => {
  const article = await client.getFirstContent<NewtArticle>({
    appUid: process.env.NEWT_APP_UID_TECH_BLOG + '',
    modelUid: process.env.NEWT_APP_UID_TECH_BLOG_ARTICLE + '',
    query: {
      slug,
      select: ['_id', '_sys', 'slug', 'title', 'pickup', 'body', 'thumbnail', 'categorys'],
    },
  })
  return article
}
