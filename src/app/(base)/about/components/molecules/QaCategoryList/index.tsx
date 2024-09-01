'use client'

import TabTrigger, { useTabActive } from "@/modules/Tab/components/TabTrigger"
import styles from "./_index.module.scss"
import { TabMember } from "@/modules/Tab/types"
import QaCategory from "../../atoms/QaCategory"

interface Props {
  list: Array<TabMember<Record<'category', Newt.ContentsObject>>>
}

export default function QaCategoryList({
  list,
}: Props ) {
  const active = useTabActive()
  return <>
    <ul className={`${styles.root}`}>
      {list.map( member => (
        <li key={member.id}>
          <TabTrigger member={member} styles={styles}>
            <QaCategory name={member.opt ? member.opt.category.value : ''} slug={member.id} active={active} />
          </TabTrigger>
        </li>
      ))}
    </ul>
  </>
}
