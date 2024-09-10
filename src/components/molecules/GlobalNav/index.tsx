'use client'

import styles from "./_index.module.scss"
import { Nav } from "@/types/global"
import SpecialButton from "../SpecialButton"
import GlobalNavText from "@/components/atoms/GlobalNavText"

type Props = {
  navs: Array<Nav>
}

export default function GlobalNav({
  navs
}: Props) {
  const unilab: Array<Nav> = navs.filter( nav => nav.slug === 'uni-lab')
  return <>
    <nav className={styles.root}>
      <ul className={styles.list}>
        {navs.map( nav => (
          nav.slug !== 'uni-lab' && <li key={nav.slug}><GlobalNavText nav={nav} /></li>
        ))}
        <li>
          <SpecialButton href={`/${unilab[0].slug}/`}>
            {unilab[0].name}
          </SpecialButton>
        </li>
      </ul>
    </nav>
  </>
}
