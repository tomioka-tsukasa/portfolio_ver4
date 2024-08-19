import LabSubjectItem from "@/components/molecules/LabSubjectItem/";
import { getLabSubjects } from "@/lib/newt";

export default async function ULHome() {
  const labItem = await getLabSubjects()
  return <>
    {labItem.map( item => <LabSubjectItem key={item.slug} subject={item} />)}
  </>
}
