import ArticleList from "@/components/organisms/ArticleList"
import BlogTemplate from "@/components/templates/BlogTemplate"
import { getArticles } from "@/lib/newt"
import stylesL from "./_layout.module.scss"

export default async function Blog() {
  const articles = await getArticles()
  return <>
    <BlogTemplate className={{
      main: stylesL.main
    }}>
      <ArticleList articles={articles} rootPath="/blog/" />
    </BlogTemplate>
  </>
}
