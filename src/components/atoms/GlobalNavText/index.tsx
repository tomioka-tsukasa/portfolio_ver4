import { zenOldMincho_w700 } from "@/lib/fonts"
import styles from "./_index.module.scss"
import Navigation from "@/modules/Navigation"
import { Nav } from "@/types/global"

type Props = {
  nav: Nav
}

export default function GlobalNavText({
  nav
}: Props ) {
  return <>
    <Navigation 
      href={`/${nav.slug}/`} 
      className={`${styles.nav} ${!nav.active ? styles.isUnactive : ''} ${zenOldMincho_w700.className}`}
    >
      {nav.name}
    </Navigation>
  </>
}