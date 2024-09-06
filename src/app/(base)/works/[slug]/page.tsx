import { getContentsManagerBySlug } from "@/lib/newt"
import { ModalSetter } from "../../../../components/templates/Modal"

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
      work["display-type"] === 'modal' && (
        <ModalSetter key={work.slug} id={work.slug} type={'works'} pass={work} />
      )
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