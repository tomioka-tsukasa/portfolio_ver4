'use client'

import { Dispatch, SetStateAction } from "react"
import styles from "./_index.module.scss"
import { Member } from "../../../types"
import Checkbox from "../Checkbox"
import InputText from "../InputText"

type Props = {
  setMember: Dispatch<SetStateAction<Member | null>>
}

export default function InputPanel({
  setMember
}: Props ) {
  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const text = formData.get('text') as string
    const radius = Number(formData.get('radius') as string)
    const fontSpace = Number(formData.get('fontSpace') as string)
    const background = formData.get('background') === 'on'
    const backgroundColor = formData.get('backgroundColor') as string
    const backgroundStyle = formData.get('backgroundStyle') as string
    const member = {
      text: (text ? text : 'HELLO WORLD HELLO WORLD '),
      option: {
        radius: (radius ? radius : 120),
        fontSpace: (fontSpace ? fontSpace : 0.8),
        background: (background ? background : true),
        backgroundColor: (backgroundColor ? backgroundColor : '#000000'),
        backgroundStyle: (backgroundStyle ? backgroundStyle : 'solid'),
      }
    }
    setMember(member)
  }
  return <>
    <div className={styles.root}>
      <form onSubmit={submitHandler}>
        <div className={styles.inputList}>
          <InputText text='テキスト' name='text' />
          <InputText text='半径' name='radius' placeholder='100' />
          <InputText text='フォントサイズ' name='fontSpace' placeholder='0 ~ 1の範囲で設定してください。' />
          <Checkbox text={'背景の有無'} />
          <InputText text='背景色' name='backgroundColor' placeholder='#000000' />
          <InputText text='背景スタイル' name='backgroundStyle' placeholder='border-styleと同じ値を入力。' />
        </div>
        <div className={styles.submitArea}>
          <button className={styles.submitButton} type="submit">
            実装開始！
          </button>
        </div>
      </form>
    </div>
  </>
}
