import styles from "./_index.module.scss"
import LabGroupHead from "@/components/molecules/LabGroupHead"
import LabSubjectList from "@/components/organisms/LabSubjectList"
import { getLabGroup, getLabGroupBySlug, getLabSubjects } from "@/lib/newt"

type StaticParams = {
  slug: string
}

type Props = {
  params: StaticParams,
}

export default async function LabGroup({
  params,
}: Props ) {
  const { slug } = params
  const subjects = await getLabSubjects()
  const filtered = subjects.filter( subject => {
    let judge: boolean = false
    subject.groups?.forEach( (item: Newt.LabGroup) => {
      if (item.slug === slug) judge = true
    })
    return judge
  })
  const group = await getLabGroupBySlug(slug)
  return <>
    <div className={styles.root}>
      <LabGroupHead group={group} />
      <div className={styles.subjects}>
        <LabSubjectList subjects={filtered} />
      </div>
    </div>
  </>
}

export async function generateStaticParams() {
  const groups = await getLabGroup()
  return groups.map( group => (
    {
      slug: group.slug
    }
  ))
}
