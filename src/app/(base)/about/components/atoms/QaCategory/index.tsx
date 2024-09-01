import styles from "./_index.module.scss"

type Props = {
  name: string,
  slug: string,
  active: string,
}

export default function QaCategory({
  name,
  slug,
  active,
}: Props ) {
  return <>
    <div className={`${styles.root} ${slug === active ? styles.isActive : ''}`}>
      <div className={`${styles.name}`}>
        {name}
      </div>
      <div className={`${styles.slug}`}>
        {slug}
      </div>
    </div>
  </>
}
