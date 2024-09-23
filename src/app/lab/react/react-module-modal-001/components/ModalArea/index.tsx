import { useStateContext, useUpdateContext } from "../../store"
import ModalLayout from "../ModalLayout"
import styles from "./_index.module.scss"

export default function ModalArea() {
  const active = useStateContext()
  const setActive = useUpdateContext()
  const clickHander = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const target = event.currentTarget.dataset.modal
    setActive(false)
    if (target) setActive(target)
  }
  return <>
    <div className={styles.buttons}>
      <button className={styles.button} onClick={clickHander}>
        Close
      </button>
      <button className={styles.button} onClick={clickHander} data-modal="about">
        Open About
      </button>
      <button className={styles.button} onClick={clickHander} data-modal="works">
        Open Works
      </button>
    </div>
    <div className={styles.modal}>
      <ModalLayout active={active} />
    </div>
  </>
}
