import { getContentsManagerBySlug } from "@/lib/newt"
import WorkModal from "../components/templates/WorkModal"
import WorkTemplate from "../components/templates/Work"

type Props = {
  params: {
    modal: string
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
      work["display-type"] === 'modal' && <WorkTemplate work={work} />
    ))}
  </>
}

export async function generateStaticParams() {
  const contents = await getContentsManagerBySlug('portfolio-works')
  if (!contents) return 
  const works = contents['works-field']
  return works.map( work => (
    work["display-type"] === 'modal' && {
      modal: work.slug
    }
  ))
}
