import { NewtCategory } from "@/types/newt"
import styles from "./_index.module.scss"

export default function Category({
  category
}: {
  category: NewtCategory
}) {
  return <>
    <div className={styles.root}>
      {category.name}
    </div>
  </>
}
