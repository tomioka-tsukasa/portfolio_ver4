import Link from "next/link"
import styles from "./_index.module.scss"

type Props = {
  href?: string
}

export default function HomeIcon({
  href = '/'
}: Props ) {
  return <>
    <Link href={href} className={styles.root}>
      <div className={styles.inner}></div>
    </Link>
  </>
}
