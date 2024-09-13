import Link from "next/link"
import styles from "./_index.module.scss"

type Props = {
  navs: UniLab.LocalNav
}

export default function Nav({
  navs
}: Props ) {
  return <>
    <nav className={styles.root}>
      <ul className={styles.list}>
        {navs.map( nav => <li key={nav.slug}>
          <Link href={nav.href} key={nav.slug} target={nav.href.includes('http') ? '_blank' : undefined}>
            {nav.icon ?? nav.name}
          </Link>
        </li>)}
      </ul>
    </nav>
  </>
}
