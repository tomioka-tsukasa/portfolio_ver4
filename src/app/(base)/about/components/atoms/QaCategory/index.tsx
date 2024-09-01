import styles from "./_index.module.scss"

type Props = {
  name: string,
  slug: string,
}

export default async function QaCategory({
  name,
  slug
}: Props ) {
  return <>
    <div className={styles.root}>
      <div className={styles.name}>
        {name}
      </div>
      <div className={styles.slug}>
        {slug}
      </div>
    </div>
  </>
}
