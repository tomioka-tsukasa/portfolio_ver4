'use client'

import styles from "./_index.module.scss"
import parse from 'html-react-parser';
import TabList from "@/components/molecules/TabList"
import React, { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "@/lib/store/hook"
import { register } from "@/lib/store/slice/tab"
import ULTabContentBody from "@/components/molecules/ULTabContentBody"
import { NewtLabSubject } from "@/types/newt"
import ULTabContentNotes from "../ULTabContentNotes";

type Props = {
  subject: NewtLabSubject | null
}

const tabList: Unilab.TabList = [
  {
    slug: 'body',
    name: '概要',
  },
  {
    slug: 'dev',
    name: '開発メモ',
  },
  {
    slug: 'design',
    name: 'デザインメモ',
  },
]

export default function ULTabArea({
  subject
}: Props ) {
  const dispatch = useAppDispatch()
  const state = useAppSelector(state => state.tab)
  const tabContentId = 'ul-tabarea-content'
  useEffect(() => {
    dispatch(register({
      id: 'ULTabArea',
      value: {
        active: 'body',
        contentId: tabContentId
      }
    }))
  }, [])
  return <>
    <div className={styles.root}>
      <TabList list={tabList} />
      <div id={tabContentId} className={`${styles.contentWrapper} is-${state.ULTabArea?.active ?? 'default'}`}>
        <div className={`${styles.content} ${state.ULTabArea?.active === 'body' ? styles.isActive : ''}`}>
          <ULTabContentBody body={parse(subject?.body + '')} />
        </div>
        <div className={`${styles.content} ${state.ULTabArea?.active === 'dev' ? styles.isActive : ''}`}>
          <ULTabContentNotes notes={subject["dev-note"]} />
        </div>
        <div className={`${styles.content} ${state.ULTabArea?.active === 'design' ? styles.isActive : ''}`}>
        <ULTabContentNotes notes={subject["ui-note"]} />
        </div>
      </div>
    </div>
  </>
}
