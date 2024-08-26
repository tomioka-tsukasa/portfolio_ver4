import Link from "next/link"
import ArticleList from "@/components/organisms/ArticleList"
import styles from "./_index.module.scss"

type Props = {
  type?: 'item' | 'inline',
  articles: Array<Newt.Article>,
  rootPath?: string
}

export default function PickupArticles({
  type = 'item',
  articles,
  rootPath = '/blog/'
}: Props) {
  switch (type) {
    case 'item':
      return <ArticleList articles={articles.filter( article => article.pickup)} />
    case 'inline':
      return <>
        <div className={styles.rootInline}>
          {articles.map( article => (article.pickup && <Link key={article.slug} href={`${rootPath}${article.slug}`}>
            {article.title}
          </Link>))}
        </div>
      </>
    default:
      return <ArticleList articles={articles.filter( article => article.pickup)} />
  }
}
