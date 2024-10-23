'use client'

import styles from "./_index.module.scss"

type Props = {
  name: string,
  text: string,
  placeholder?: string
}

export default function InputText({
  name,
  text,
  placeholder,
}: Props ) {
  return <>
    <label htmlFor={name} className={styles.root}>
      <span className={styles.text}>
        {text}
      </span>
      <input 
        type="text" 
        name={name} 
        className={styles.inputArea} 
        id={name} 
        placeholder={placeholder}
      />
    </label>
  </>
}
