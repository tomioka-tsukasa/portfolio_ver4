import { getContentsManagerBySlug } from "@/lib/newt"
import WorkModal from "../../../components/templates/WorkModal"
import WorkTemplate from "../../../components/templates/Work"

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
    <p>
      モーダル
    </p>
    <WorkModal>
      {works.map( work => (
        <WorkTemplate key={work.slug} work={work} />
      ))}
    </WorkModal>
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
