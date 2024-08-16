import 'server-only'
import { createClient } from 'newt-client-js'
import { Newt } from '../../types/newt'

const client = createClient({
  spaceUid: process.env.NEWT_SPACE_UID + '',
  token: process.env.NEWT_CDN_API_TOKEN + '',
  apiType: 'cdn',
})

export const getArticles = async () => {
  const { items } = await client.getContents<Newt['TechBlog']['Article']>({
    appUid: process.env.NEWT_APP_UID_TECH_BLOG + '',
    modelUid: process.env.NEWT_APP_UID_TECH_BLOG_ARTICLE + '',
    query: {
      select: ['_id', 'slug', 'title', 'body'],
    },
  })
  return items
}

export const getArticleBySlug = async (slug: string) => {
  const article = await client.getFirstContent<Newt['TechBlog']['Article']>({
    appUid: process.env.NEWT_APP_UID_TECH_BLOG + '',
    modelUid: process.env.NEWT_APP_UID_TECH_BLOG_ARTICLE + '',
    query: {
      slug,
      select: ['_id', 'slug', 'title', 'body'],
    },
  })
  return article
}
