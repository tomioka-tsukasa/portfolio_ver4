import styles from "./_index.module.scss"
import { useState } from 'react'

type Props = {
  text: string
}

export default function Checkbox({
  text
}: Props ) {
  const [isChecked, setIsChecked] = useState<boolean>(true)
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked)
  }
  return <>
    <div
      className={styles.root}
    >
      <div>
        {text}
      </div>
      <label 
        className={styles.checkboxLabel}
      >
        <input 
          type="checkbox" 
          name="background" 
          className={styles.inputCheckbox} 
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
      </label>
    </div>
  </>
}