import { getContentsManagerBySlug } from "@/lib/newt"
import ModalSetter from "../lib/ModalSetter"

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
    {works.map( work => {
      if (
        params.slug === work.slug
        && work["display-type"] === 'modal'
      ) return <ModalSetter work={work} slug={params.slug} key={work.slug} />
    })}
  </>
}

export async function generateStaticParams() {
  const contents = await getContentsManagerBySlug('portfolio-works')
  if (!contents) return []
  const works = contents['works-field']
  if (!works) return []
  return works.filter( work => work["display-type"] === 'modal').map( work => (
    {
      slug: work.slug
    }
  ))
}
