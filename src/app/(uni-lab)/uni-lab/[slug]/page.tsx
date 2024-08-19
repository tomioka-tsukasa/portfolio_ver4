import Draft_CtrlButton from "@/components/molecules/Draft_CtrlButton";
import styles from "./_index.module.scss"
import LabScreen from "@/components/molecules/LabScreen";
import { getLabSubjects } from "@/lib/newt";

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
    <div className={styles.root}>
      <div className={styles.ctrl}>
        <Draft_CtrlButton />
      </div>
      <div className={styles.screen}>
        <LabScreen slug={slug} />
      </div>
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
