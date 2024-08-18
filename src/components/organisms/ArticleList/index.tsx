import ArticleItem from "@/components/molecules/ArticleItem/"
import styles from "./_index.module.scss";
import { NewtArticle } from "@/types/newt";

export default function ArticleList({
  articles
}: {
  articles: Array<NewtArticle>
}) {
  return <>
    <ul className={styles.root}>
      {articles.map( article => <ArticleItem key={article.slug} article={article} />)}
    </ul>
  </>
}
