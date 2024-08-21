import { getLabSubjects } from "@/lib/newt";
import ULTabAreaBody from "./body/page";

export default function Default() {
  return <ULTabAreaBody />
}


export async function generateStaticParams() {
  const items = await getLabSubjects()
  return items.map( item => (
    {
      slug: item.slug
    }
  ))
}
