import { getArticles, getLabSubjects } from "@/lib/newt"

export default function ULTabAreaBody() {
  return <>
    <div className='a'>
      ULTabAreaBody 
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
