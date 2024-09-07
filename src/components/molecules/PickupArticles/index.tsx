import Link from "next/link"
import ArticleList from "@/components/organisms/ArticleList"
import styles from "./_index.module.scss"
import Navigation from "@/modules/Navigation"

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
          {articles.map( article => (article.pickup && <Navigation key={article.slug} href={`${rootPath}${article.slug}`}>
            {article.title.substring(0, 60)}
            {article.title.length <= 60 ? '' : '...'}
          </Navigation>))}
        </div>
      </>
    default:
      return <ArticleList articles={articles.filter( article => article.pickup)} />
  }
}
