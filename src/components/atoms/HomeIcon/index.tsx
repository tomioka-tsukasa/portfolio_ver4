import styles from "./_index.module.scss"
import Navigation from "@/modules/Navigation"

type Props = {
  href?: string
}

export default function HomeIcon({
  href = '/'
}: Props ) {
  return <>
    <Navigation href={href} className={styles.root}>
      <div className={styles.inner}></div>
    </Navigation>
  </>
}
