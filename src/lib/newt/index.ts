import 'server-only'

import { createClient } from 'newt-client-js'

const client = createClient({
  spaceUid: process.env.NEWT_SPACE_UID + '',
  token: process.env.NEWT_CDN_API_TOKEN + '',
  apiType: 'cdn',
})

export const getArticles = async () => {
  const { items } = await client.getContents<Newt.Article>({
    appUid: process.env.NEWT_APP_UID_TECH_BLOG + '',
    modelUid: process.env.NEWT_APP_UID_TECH_BLOG_ARTICLE + '',
    query: {
      select: ['_id', '_sys', 'slug', 'title', 'pickup', 'issue', 'body', 'thumbnail', 'categorys'],
    },
  })
  return items
}

export const getCategorys = async () => {
  const { items } = await client.getContents<Newt.Category>({
    appUid: process.env.NEWT_APP_UID_TECH_BLOG + '',
    modelUid: process.env.NEWT_APP_UID_TECH_BLOG_CATEGORY + '', 
    query: {
      select: ['_id', '_sys', 'name', 'slug']
    }
  })
  return items
}

export const getArticleBySlug = async (slug: string) => {
  const article = await client.getFirstContent<Newt.Article>({
    appUid: process.env.NEWT_APP_UID_TECH_BLOG + '',
    modelUid: process.env.NEWT_APP_UID_TECH_BLOG_ARTICLE + '',
    query: {
      slug,
      select: ['_id', '_sys', 'slug', 'title', 'pickup', 'issue', 'body', 'thumbnail', 'categorys'],
    },
  })
  return article
}

export const getLabSubjects = async () => {
  const { items } = await client.getContents<Newt.LabSubject>({
    appUid: process.env.NEWT_APP_UID_TECH_LAB + '',
    modelUid: process.env.NEWT_APP_UID_TECH_LAB_SUBJECT + '',
    query: {
      select: ['_id', '_sys', 'slug', 'title', 'status', 'pickup', 'body', 'thumbnail', 'groups', 'dev-note', 'ui-note'],
    }
  })
  return items
}

export const getLabSubjectBySlug = async (slug: string) => {
  const subject = await client.getFirstContent<Newt.LabSubject>({
    appUid: process.env.NEWT_APP_UID_TECH_LAB + '',
    modelUid: process.env.NEWT_APP_UID_TECH_LAB_SUBJECT + '', 
    query: {
      slug,
      select: ['_id', '_sys', 'slug', 'title', 'status', 'pickup', 'body', 'thumbnail', 'groups', 'dev-note', 'ui-note'],
    },
  })
  return subject
}

export const getLabGroup = async () => {
  const { items } = await client.getContents<Newt.LabGroup>({
    appUid: process.env.NEWT_APP_UID_TECH_LAB + '',
    modelUid: process.env.NEWT_APP_UID_TECH_LAB_GROUP + '', 
    query: {
      select: ['_id', '_sys', 'title', 'slug', 'pickup', 'thumbnail', 'body']
    }
  })
  return items
}

export const getLabGroupBySlug = async (slug: string) => {
  const item = await client.getFirstContent<Newt.LabGroup>({
    appUid: process.env.NEWT_APP_UID_TECH_LAB + '',
    modelUid: process.env.NEWT_APP_UID_TECH_LAB_GROUP + '', 
    query: {
      slug,
      select: ['_id', '_sys', 'title', 'slug', 'pickup', 'thumbnail', 'body']
    },
  })
  return item
}
