import Link from "next/link";
import { getArticles } from "../../../lib/newt";

export default async function Newt() {
  const articles = await getArticles()
  return <>
    {articles.map( article => {
      return <li key={article.slug}>
        <Link href={article.slug}>
          {article.title}
        </Link>
      </li>
    })}
  </>
}
