'use client'

import TabTrigger, { useTabActive } from "@/modules/Tab/components/TabTrigger"
import styles from "./_index.module.scss"
import { TabMember } from "@/modules/Tab/types"
import QaCategory from "../../atoms/QaCategory"
import { getCategoryName } from "../../../lib/getCategoryName"

interface Props {
  list: Array<TabMember>
}

export default function QaCategoryList({
  list,
}: Props ) {
  return <>
    <ul className={`${styles.root}`}>
      {list.map( member => (
        <li key={member.id}>
          <TabTrigger member={member} styles={styles}>
            <QaCategory name={getCategoryName(member.id)} slug={member.id} active={useTabActive()} />
          </TabTrigger>
        </li>
      ))}
    </ul>
  </>
}
