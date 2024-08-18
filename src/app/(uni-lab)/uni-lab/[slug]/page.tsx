import LabScreen from "@/components/molecules/LabScreen";
import { getLabItems } from "@/lib/newt";

type Props = {
  params: {
    slug: string
  }
}

export default async function ULItem({
  params
}: Props ) {
  const { slug } = params
  return <>
    <LabScreen slug={slug} />
    {slug}
  </>
}

export async function generateStaticParams() {
  const items = await getLabItems()
  return items.map( item => (
    {
      slug: item.slug
    }
  ))
}
