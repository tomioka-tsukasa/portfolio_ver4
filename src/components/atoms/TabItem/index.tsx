'use client'

import Link from "next/link"
import styles from "./_index.module.scss"
import { TabType } from "@/components/molecules/TabList"
import { useAppDispatch, useAppSelector } from "@/lib/store/hook"
import { change } from "@/lib/store/slice/tab"
import { zenKakuGothicNew_w700 } from "@/lib/fonts"

interface Props extends TabType {
  item: Unilab.TabItem,
  active?: boolean | null
}
  
export default function TabItem({
  item,
  type = '',
  rootPath = '/',
  active = null
}: Props ) {
  const dispatch = useAppDispatch()
  const state = useAppSelector(state => state.tab)
  const changeTab = (event: any) => {
    dispatch(change({
      id: 'ULTabArea',
      active: event.currentTarget.dataset.slug
    }))
  }
  const attributes = {
    href: `${rootPath}${item.slug}`,
    className: `${styles.root} ${type} ${item.slug} ${zenKakuGothicNew_w700.className} ${active ? styles.isActive : ''}`
  }
  if (type === 'link') return <>
    <Link href={attributes.href} className={attributes.className}>
      {item.name}
    </Link>
  </>
  else return <>
    <button onClick={changeTab} data-slug={item.slug} className={attributes.className}>
      {item.name}
    </button>
  </>
}
