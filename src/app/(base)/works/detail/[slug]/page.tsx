import { getContentsManagerBySlug } from "@/lib/newt"
import WorkTemplate from "../../components/templates/Work"

type Props = {
  params: {
    slug: string
  }
}

export default async function Work({
  params
}: Props ) {
  const contents = await getContentsManagerBySlug('portfolio-works')
  if (!contents) return 
  const works = contents['works-field']
  return <>
    {works.map( work => (
      work["display-type"] === 'modal' && <WorkTemplate key={work.slug} work={work} />
    ))}
  </>
}

export async function generateStaticParams() {
  const contents = await getContentsManagerBySlug('portfolio-works')
  if (!contents) return 
  const works = contents['works-field']
  return works.filter( work => work["display-type"] === 'modal').map( work => (
    {
      slug: work.slug
    }
  ))
}
