import { getLabSubjects } from "@/lib/newt"
import styles from "./_index.module.scss"

export default function ULTabAreaDesign() {
  return <>
    <div className={styles.root}>
      ULTabAreaDesign 
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
