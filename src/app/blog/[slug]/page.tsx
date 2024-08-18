import { getArticleBySlug, getArticles } from "@/lib/newt";
import parse from 'html-react-parser';
import BlogSidebar from "@/components/organisms/BlogSidebar";
import ArticleHead from "@/components/molecules/ArticleHead";
import styles from "./_index.module.scss"
import BlogTemplate from "@/components/templates/BlogTemplate";

type Props = {
  params: {
    slug: string
  }
}

export default async function BlogDetail({
  params
}: Props) {
  const { slug } = params
  const article = await getArticleBySlug(slug)
  if (!article) return
  return <>
    <ArticleHead article={article} />
    <div className={styles.contents}>
      <BlogTemplate className={{
        main: styles.main
      }}>
        {parse(article.body)}
      </BlogTemplate>
    </div>
  </>
}

export async function generateStaticParams() {
  const articles = await getArticles()
  return articles.map( article => (
    {
      slug: article.slug
    }
  ))
}
