import { getArticleBySlug, getArticles } from "@/lib/newt";
import ArticleHead from "@/components/molecules/ArticleHead";
import styles from "./_index.module.scss"
import BlogTemplate from "@/components/templates/BlogTemplate";
import MarkdownStyle from "@/components/organisms/MarkdownStyle";
import { Metadata } from "next";

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
      <BlogTemplate className={{
        main: styles.main
      }}>
        <MarkdownStyle>
          {article.body}
        </MarkdownStyle>
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
