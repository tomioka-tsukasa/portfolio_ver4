import Category from "@/components/atoms/Category"
import styles from "./_index.module.scss"

export default function Categorys({
  categorys
}: {
  categorys: Array<Newt.Category>
}) {
  return <>
    <ul className={styles.root}>
      {categorys.map( category => (
        <Category key={category.slug} category={category} />
      ))}
    </ul>
  </>
}
