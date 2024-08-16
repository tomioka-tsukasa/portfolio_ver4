import { getArticleBySlug, getArticles } from "@/lib/newt";
import CtrlJsxDomParserFromString from "@/lib/controllers/jsx/domParser/FromString";
import { Newt } from "@/types/newt";

export async function generateStaticParams() {
  const articles = await getArticles();
  return articles.map( article => ({slug: article.slug}))
}

export default async function Article({ 
  params 
}: {
  params: {slug: string}
}) {
  const { slug } = params
  const article = await getArticleBySlug(slug)
  if (article) {
    const parsed = {
      ...article,
      body: <CtrlJsxDomParserFromString string={article.body} />
    }
    return <>
      <main>
        <h1>
          {parsed.title}
        </h1>
        <p>
          {parsed.slug}
        </p>
        {parsed.body}
      </main>
    </>
  } else return <>
    <p>
      記事が見つかりません。
    </p>
  </>
}
