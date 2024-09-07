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
    <div className={styles.root}>
      {navs.map( nav => (
        nav.slug !== 'uni-lab' && <GlobalNavText nav={nav} key={nav.slug} />))}
      <SpecialButton href={`/${unilab[0].slug}/`}>
        {unilab[0].name}
      </SpecialButton>
    </div>
  </>
}
