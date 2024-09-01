'use client'

import Arrow from "@/components/atoms/Arrow"
import { useDispatchContext, useStateContext } from "../../../store"
import styles from "./_index.module.scss"

interface Props {
  items: Array<Newt.ContentsQa>
  category: string
}

export default function QuestionList({
  items,
  category
}: Props ) {
  const list: Array<Newt.ContentsQa> = items.filter( item => item.group.includes(category) )
  const state = useStateContext()
  const dispatch = useDispatchContext()
  const clickHander = (event: React.MouseEvent<HTMLLIElement>) => {
    if (!event.currentTarget.dataset.slug) return
    dispatch({
      qa: {
        active: event.currentTarget.dataset.slug
      }
    })
  }
  return <>
    <div className={`${styles.root}`}>
      <ul className={styles.list}>
        {list.map( item => (
          <li className={`${styles.item} ${state.qa.active === item.slug ? styles.isActive : ''}`} key={item.slug} data-slug={item.slug} onClick={clickHander}>
            <div className={styles.arrow}>
              <Arrow />
            </div>
            <button className={styles.button}>
              {item.question}
            </button>
          </li>
        ))}
      </ul>
    </div>
  </>
}
