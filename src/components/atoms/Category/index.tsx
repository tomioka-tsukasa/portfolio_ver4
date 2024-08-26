import styles from "./_index.module.scss"

export default function Category({
  category
}: {
  category: Newt.Category
}) {
  return <>
    <div className={styles.root}>
      {category.name}
    </div>
  </>
}
