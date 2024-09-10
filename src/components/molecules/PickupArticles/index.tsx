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
        <ul className={styles.rootInline}>
          {articles.map( article => (article.pickup && (
            <li key={article.slug}>
              <Navigation 
                typing={false} 
                href={`${rootPath}${article.slug}`}
              >
                {article.title.substring(0, 60)}
                {article.title.length <= 60 ? '' : '...'}
              </Navigation>
            </li>
          )))}
        </ul>
      </>
    default:
      return <ArticleList articles={articles.filter( article => article.pickup)} />
  }
}
