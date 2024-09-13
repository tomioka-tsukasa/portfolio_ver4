import Link from "next/link"
import styles from "./_index.module.scss"
import Navigation from "@/modules/Navigation"

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
          {
            nav.href.includes('http')
            ? <Link href={nav.href} key={nav.slug} target={'_blank'}>
              {nav.icon ?? nav.name}
            </Link>
            : <Navigation href={nav.href} key={nav.slug}>
            {nav.icon ?? nav.name}
          </Navigation>
          }
        </li>)}
      </ul>
    </nav>
  </>
}
