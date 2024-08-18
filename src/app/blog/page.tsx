import ArticleList from "@/components/organisms/ArticleList"
import { getArticles } from "@/lib/newt"
import Link from "next/link"

export default async function Blog() {
  const articles = await getArticles()
  return <>
    <ArticleList articles={articles} />
  </>
}
