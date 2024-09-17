import styles from "./_index.module.scss"
import LabGroupHead from "@/app/(root)/(uni-lab)/components/molecules/LabGroupHead"
import Button from "@/components/atoms/Button"
import LabSubjectList from "@/components/organisms/LabSubjectList"
import { getLabGroup, getLabGroupBySlug, getLabSubjects } from "@/lib/newt"
import { Metadata } from "next"

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
  const group = await getLabGroupBySlug(slug)
  if (!subjects || !group) return 
  return <>
    <div className={styles.root}>
      <LabGroupHead group={group} />
      <div className={styles.subjects}>
        <LabSubjectList subjects={subjects} scope={group} max={-1} />
      </div>
      <div className={styles.backHome}>
        <Button href={'/uni-lab/'}>
          {'UniLabトップに戻る'}
        </Button>
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

export async function generateMetadata(): Promise<Metadata> {
  return {
    robots: {
      index: false,
      follow: false
    },
  }
}
