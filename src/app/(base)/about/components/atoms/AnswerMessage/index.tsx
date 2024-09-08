'use client'

import styles from "./_index.module.scss"
import { useStateContext } from "../../../store";
import Typing from "@/components/atoms/Typing";

type Props = {
  content: Newt.ContentsQa
}

export default function AnswerMessage({
  content
}: Props ) {
  const state = useStateContext()
  return <>
    <div className={`${styles.root} ${content.slug === state.qa.active ? styles.isActive : ''}`} data-slug={content.slug}>
      {content.slug === state.qa.active && <Typing
        text={content.answer}
        speed={1}
        initDisplay={false}
        trigger={content.slug === state.qa.active}
      />}
    </div>
  </>
}
