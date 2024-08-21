import Draft_CtrlButton from "@/components/molecules/Draft_CtrlButton";
import styles from "./_index.module.scss"
import LabScreen from "@/components/molecules/LabScreen";
import { getLabSubject, getLabSubjects } from "@/lib/newt";
import ULTabArea from "@/components/organisms/ULTabArea";

type Props = {
  params: {
    slug: string
  }
}

export default async function ULSubject({
  params
}: Props ) {
  const { slug } = params
  const subject = await getLabSubject(slug)
  return <>
    <div className={styles.root}>
      <div className={styles.ctrl}>
        <Draft_CtrlButton />
      </div>
      <div className={styles.screen}>
        <LabScreen slug={slug} />
      </div>
      <ULTabArea subject={subject} />
    </div>
  </>
}

export async function generateStaticParams() {
  const items = await getLabSubjects()
  return items.map( item => (
    {
      slug: item.slug
    }
  ))
}
