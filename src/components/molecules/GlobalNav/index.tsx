import styles from "./_index.module.scss"
import Link from "next/link"
import { zenOldMincho_w700 } from "@/lib/fonts"
import { Navs } from "@/types/nav"
import SpecialButton from "../SpecialButton"

type Props = {
  navs: Navs
}

export default function GlobalNav({
  navs
}: Props) {
  const unilab: Navs = navs.filter( nav => nav.slug === 'uni-lab')
  return <>
    <div className={styles.root}>
      {navs.map( nav => (
        nav.slug !== 'uni-lab' && <Link href={`/${nav.slug}/`} key={nav.slug} className={`${styles.nav} ${zenOldMincho_w700.className}`}>
          {nav.name}
        </Link>
      ))}
      <SpecialButton href={`/${unilab[0].slug}/`}>
        {unilab[0].name}
      </SpecialButton>
    </div>
  </>
}
