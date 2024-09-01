'use client'

import TabTrigger, { useTabActive } from "@/modules/Tab/components/TabTrigger"
import styles from "./_index.module.scss"
import { TabMember } from "@/modules/Tab/types"
import QaCategory from "../../atoms/QaCategory"

interface Props {
  list: Array<TabMember>
}

function getCategoryName(slug: string) {
  switch(slug) {
    case 'myself':
      return '自己紹介'
    case 'portfolio':
      return 'ポートフォリオについて'
    case 'skill':
      return 'エンジニアスキル'
    case 'work-style':
      return 'ワークスタイル'
    case 'life-style':
      return 'ライフスタイル'
    default:
      return '一致するカテゴリーがありません。'
  }
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
