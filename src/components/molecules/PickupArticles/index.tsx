import { getArticles } from "@/lib/newt"
import Link from "next/link"
import styles from "./_index.module.scss"

type Props = {
  rootPath: string
}

export default async function PickupArticles({
  rootPath
}: Props) {
  const articles = await getArticles()
  return <>
    <ul className={styles.root}>
      {articles.map( article => {
        if (article.pickup) return <li key={article.slug} className={styles.item}>
          <Link href={`${rootPath}${article.slug}`}>
            {article.title}
          </Link>
        </li>
      })}
    </ul>
  </>
}
