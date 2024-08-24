import ArticleList from "@/components/organisms/ArticleList"
import BlogSidebar from "@/components/organisms/BlogSidebar"
import BlogTemplate from "@/components/templates/BlogTemplate"
import { getArticles, getCategorys } from "@/lib/newt"

type StaticParams = {
  slug: string
}

type Props = {
  params: StaticParams
}

export default async function BlogCategory({
  params
}: Props ) {
  const { slug } = params
  const articles = await getArticles()
  const filtered = articles.filter( article => {
    let judge: boolean = false
    article.categorys.forEach( category => {
      if (category.slug === slug) judge = true
    })
    return judge
  })
  return <>
    <BlogTemplate nav={<BlogSidebar />}>
      <ArticleList articles={filtered} rootPath="/blog/" />
    </BlogTemplate>
  </>
}

export async function generateStaticParams() {
  const categorys = await getCategorys()
  return categorys.map( category => (
    {
      slug: category.slug
    }
  ))
}
