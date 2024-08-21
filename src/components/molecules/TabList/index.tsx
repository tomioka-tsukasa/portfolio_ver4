'use client'

import TabItem from "@/components/atoms/TabItem"
import styles from "./_index.module.scss"
import { useAppDispatch, useAppSelector } from "@/lib/store/hook"

export interface TabType {
  type?: string | 'link',
  rootPath?: string
}

interface Props extends TabType {
  list: Unilab.TabList
}

export default function TabList({
  list,
  type = '',
  rootPath = '/'
}: Props ) {
  const state = useAppSelector(state => state.tab)
  return <>
    <ul className={`${styles.root}`}>
      {list.map( item => (
        <li key={item.slug} className={`${styles.item}`}>
          <TabItem item={item} type={type} rootPath={rootPath} active={item.slug == state.ULTabArea?.active ?? '' ? true : false} />
        </li>
      ))}
    </ul>
  </>
}
