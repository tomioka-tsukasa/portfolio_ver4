import { getArticleBySlug, getArticles } from "@/lib/newt";
import ArticleHead from "@/components/molecules/ArticleHead";
import styles from "./_index.module.scss"
import BlogTemplate from "@/components/templates/BlogTemplate";
import { Metadata } from "next";
import FormatMarkdown from "@/components/organisms/FormatMarkdown";
import BlogSidebar from "@/components/organisms/BlogSidebar";

type Props = {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params
  const article = await getArticleBySlug(slug)
  return {
    title: article?.title,
    description: '投稿詳細ページです',
    robots: {
      index: false,
      follow: false
    },
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
      <BlogTemplate nav={<BlogSidebar />}>
        <div className={styles.main}>
          <FormatMarkdown body={article.body} />
        </div>
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
